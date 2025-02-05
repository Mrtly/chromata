import React, { useState, useEffect, useMemo, useCallback, Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { Button, Link, Spinner } from '@radix-ui/themes'
import { NumberInput } from '@/components/NumberInput'
import { Results } from '@/components/PaletteResults'
import { deduplicateByName } from '../utils/dedupe'
import gsap from 'gsap'
import ErrorBoundary from '@/components/ErrorBoundary'
import {
	type Color,
	type State,
	type HSQueries,
	getCopyablePaletteObject,
} from '@/utils/colorHelpers'
import { addToastToQueue } from '@/components/Toast'
import { InfoPanel, PalettePanel } from '@/components/Panels'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

export const Route = createFileRoute('/rainbow')({
	component: () => {
		return <RainbowPage />
	},
})

function RainbowPage() {
	const [state, setState] = useState<State>({
		allColors: [],
		uniqueColors: [],
		currentHsl: '',
		loading: false,
	})
	const [queries, setQueries] = useState<HSQueries>({ s: 100, l: 30 })
	const [error, setError] = useState<boolean>(false)

	// Generate rainbow hues (0 to 360° with step of 7°)
	const rainbowHues = useMemo(() => {
		const hues: number[] = []
		for (let i = 0; i <= 360; i += 7) {
			hues.push(i)
		}
		return hues
	}, [])

	const getColors = useCallback(async () => {
		setState((prevState) => ({
			...prevState,
			loading: true,
			allColors: [],
			uniqueColors: [],
		}))

		try {
			const fetchPromises = rainbowHues.map(async (hue) => {
				const url = `https://www.thecolorapi.com/id?hsl=${hue},${queries.s}%,${queries.l}%&format=json`
				const response = await fetch(url)
				return response.json()
			})

			const fetchedColors = await Promise.all(fetchPromises)

			const uniqueColors = deduplicateByName(fetchedColors)

			setTimeout(() => {
				setState((prevState) => ({
					...prevState,
					allColors: fetchedColors,
					uniqueColors: uniqueColors as Color[],
					currentHsl: `s: ${queries.s}%, l: ${queries.l}%`,
					loading: false,
				}))
			}, 200) //tiny bit of extra spinning :)
		} catch {
			setError(true)
			setState((prevState) => ({
				...prevState,
				loading: false,
			}))
		}
	}, [queries.s, queries.l])

	useEffect(() => {
		getColors()
	}, [])

	const handleGenerate = () => {
		getColors()
	}

	useEffect(() => {
		if (!state.loading && state.uniqueColors.length > 0) {
			gsap.set('.color-square', { opacity: 0, x: -100 })
			gsap.to('.color-square', {
				opacity: 1,
				x: 0,
				stagger: 0.025,
			})
		}
	}, [state.uniqueColors, state.loading])

	const copyablePaletteObject = getCopyablePaletteObject(state.uniqueColors)
	const handleCopyPalette: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		navigator.clipboard.writeText(JSON.stringify(copyablePaletteObject))
		addToastToQueue({
			description: <div>Copied palette to clipboard</div>,
		})
	}

	return (
		<ErrorBoundary>
			<div className="flex flex-col gap-6 lg:flex-row">
				<InfoPanel
					heading="rainbow palette"
					subheading="color palette with saturation & lightness variance"
				>
					<div id="form-panel" className="my-4 flex flex-wrap items-end gap-2">
						<div>
							<NumberInput
								id="saturation"
								value={queries.s}
								label="Saturation"
								name="saturation"
								type="number"
								min={0}
								max={100}
								disabled={state.loading}
								onChange={(e) => setQueries((prev) => ({ ...prev, s: +e.target.value }))}
							/>
						</div>
						<div>
							<NumberInput
								id="lightness"
								value={queries.l}
								label="Lightness"
								name="lightness"
								type="number"
								min={0}
								max={100}
								disabled={state.loading}
								onChange={(e) => setQueries((prev) => ({ ...prev, l: +e.target.value }))}
							/>
						</div>
						<Button
							size="3"
							disabled={state.loading}
							onClick={handleGenerate}
							className="cursor-pointer tracking-wider"
						>
							Generate
						</Button>
					</div>
					<div className="mt-2 py-2 px-4 bg-zinc-100 rounded-md">
						<div>
							Using the <i>colorapi</i> <code>/id</code> endpoint, results are calculated using
							multiple hues across the 360° color circle, and the saturation/lightness values:{' '}
							<code
								className={`whitespace-nowrap text-lg ${!state.loading && state.currentHsl ? '' : 'invisible'}`}
							>
								{state.currentHsl || <Spinner />}
							</code>
						</div>
						<div className="mt-2">
							Colors are deduplicated by color name; only one tile per color name is presented.
							<span>
								{' '}
								Unique color names:
								<code
									className={`text-lg ${!state.loading && state.uniqueColors.length ? '' : 'invisible'}`}
								>
									{' '}
									{state.uniqueColors.length || <Spinner />}
								</code>
							</span>
						</div>
					</div>
					{/* //separator */}
					<div className="h-1 border-t border-zinc-300 my-4" />

					{!state.loading && state.uniqueColors && (
						<div className="flex justify-between">
							<Button
								size="2"
								variant="outline"
								className="cursor-pointer tracking-wider"
								onClick={handleCopyPalette}
							>
								copy palette
							</Button>
							<Link
								href="https://www.thecolorapi.com/"
								target="_blank"
								className="hidden md:flex items-center gap-1 underline text-zinc-700 hover:text-zinc-500"
							>
								thecolorapi <ExternalLinkIcon className="size-5" />
							</Link>
						</div>
					)}
				</InfoPanel>

				<PalettePanel>
					<Suspense fallback={<Spinner size="3" className="mx-auto" />}>
						<Results uniqueColors={state.uniqueColors} loading={state.loading} error={error} />
					</Suspense>
				</PalettePanel>
			</div>
		</ErrorBoundary>
	)
}

export { RainbowPage }
