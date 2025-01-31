import React, { useState, useEffect, useCallback, Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { Button, Spinner } from '@radix-ui/themes'
import NumberInput from '@/components/NumberInput'
import { deduplicateByName } from '../utils/dedupe'
import gsap from 'gsap'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Results } from './rainbow'

interface Color {
	name: { value: string }
	rgb: { value: string }
	hex: { value: string }
}

interface State {
	allColors: Color[]
	uniqueColors: Color[]
	currentHsl: string
	loading: boolean
}

interface Queries {
	h: number
	s: number
	l: number
}

const Scheme: React.FC = () => {
	const [state, setState] = useState<State>({
		allColors: [],
		uniqueColors: [],
		currentHsl: '',
		loading: false,
	})
	const [queries, setQueries] = useState<Queries>({ h: 255, s: 40, l: 60 })
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
		getColors()
	}

	useEffect(() => {
		if (!state.loading && state.uniqueColors.length > 0) {
			gsap.set('.color-square', { opacity: 0, y: 50 })
			gsap.to('.color-square', {
				opacity: 1,
				y: 0,
				stagger: 0.045,
			})
		}
	}, [state.uniqueColors, state.loading])

	return (
		<ErrorBoundary>
			<div>
				{/* Inputs */}
				<div className="border w-full md:w-3/5 mx-auto rounded p-5 shadow lg:px-10 lg:py-8 bg-indigo-100 my-4 text-zinc-800">
					<h1 className="pt-2 text-xl font-semibold">
						Create a rainbow palette with saturation & lightness variance
					</h1>
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
							className="cursor-pointer"
						>
							Generate
						</Button>
					</div>

					<div className="mt-2">
						Using the <code>/id</code> endpoint, results are calculated using multiple hues across
						the 360° color circle, and the saturation/lightness values:
						<code
							className={`whitespace-nowrap text-lg ${!state.loading && state.currentHsl ? '' : 'invisible'}`}
						>
							{' '}
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

				{/* Colors */}
				<div className="py-10 md:px-20">
					<Suspense fallback={<Spinner size="3" className="mx-auto" />}>
						<Results uniqueColors={state.uniqueColors} loading={state.loading} error={error} />
					</Suspense>
				</div>
			</div>
		</ErrorBoundary>
	)
}

export { Scheme }

export const Route = createFileRoute('/scheme')({
	component: Scheme,
})
