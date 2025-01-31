import React, { useState, useEffect, useCallback, Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { Button, Spinner } from '@radix-ui/themes'
import { NumberInput } from '@/components/NumberInput'
import { deduplicateByName } from '../utils/dedupe'
import gsap from 'gsap'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Results } from '@/components/PaletteResults'

import {
	type Color,
	type State,
	type HSQueries,
	getCopyablePaletteObject,
	// getCopyablePaletteObject,
} from '@/utils/colorHelpers'
import { InfoPanel, PalettePanel } from '@/components/Panels'
import { addToastToQueue } from '@/components/Toast'

interface HSLQueries extends HSQueries {
	h: number
}

const Scheme: React.FC = () => {
	const [state, setState] = useState<State>({
		allColors: [],
		uniqueColors: [],
		currentHsl: '',
		loading: false,
	})
	const [queries, setQueries] = useState<HSLQueries>({ h: 255, s: 40, l: 60 })
	const [error, setError] = useState<boolean>(false)

	const getColors = useCallback(async () => {
		setState((prevState) => ({
			...prevState,
			loading: true,
			allColors: [],
			uniqueColors: [],
			currentHsl: '',
		}))

		const url = `https://www.thecolorapi.com/scheme?hsl=${queries.h},${queries.s}%,${queries.l}%&format=json&count=500`

		try {
			const response = await fetch(url)
			const data = await response.json()
			const fetchedColors = data.colors

			const uniqueColors = deduplicateByName(fetchedColors)

			setTimeout(() => {
				setState((prevState) => ({
					...prevState,
					allColors: fetchedColors,
					uniqueColors: uniqueColors as Color[],
					currentHsl: `hsl(${queries.h}, ${queries.s}%, ${queries.l}%)`,
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
	}, [queries])

	useEffect(() => {
		getColors()
	}, [])

	const handleGenerate = () => {
		// getColors()
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
				<InfoPanel heading="scheme palette" subheading="color palette by HSL values">
					<div className="my-4 flex flex-wrap items-end gap-2">
						<div>
							<NumberInput
								id="hue"
								value={queries.h}
								label="Hue"
								name="hue"
								type="number"
								min={0}
								max={360}
								disabled={state.loading}
								onChange={(e) => setQueries((prev) => ({ ...prev, h: +e.target.value }))}
							/>
						</div>
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
						<div className="mt-2">
							Using the <i>colorapi</i> <code>/scheme</code> endpoint, results are calculated for
							the HSL value. Showing results for:{' '}
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
						<Button
							size="2"
							variant="outline"
							className="cursor-pointer tracking-wider"
							onClick={handleCopyPalette}
						>
							copy palette
						</Button>
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

export { Scheme }

export const Route = createFileRoute('/scheme')({
	component: Scheme,
})
