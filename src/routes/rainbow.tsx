import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { Button, Grid, Spinner } from '@radix-ui/themes'
import NumberInput from '@/components/NumberInput'
import ColorSquarie from '@/components/ColorSquarie'
import { deduplicateByName } from '../utils/dedupe'
import gsap from 'gsap'

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
	s: number
	l: number
}

const Rainbow: React.FC = () => {
	const [state, setState] = useState<State>({
		allColors: [],
		uniqueColors: [],
		currentHsl: '',
		loading: false,
	})
	const [queries, setQueries] = useState<Queries>({ s: 100, l: 30 })
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

			setState((prevState) => ({
				...prevState,
				allColors: fetchedColors,
				uniqueColors: uniqueColors as Color[],
				currentHsl: `s: ${queries.s}%, l: ${queries.l}%`,
				loading: false,
			}))
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

	const ColorSquarieMemo = React.memo(ColorSquarie)

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
		<div>
			{/* Inputs */}
			<div className="border w-full md:w-3/5 mx-auto rounded p-5 shadow lg:px-10 lg:py-8 bg-indigo-100 my-4 text-zinc-800">
				<h1 className="pt-2 text-xl font-medium">
					Create a rainbow palette with saturation & lightness variance
				</h1>
				<div className="my-4 flex flex-wrap items-end gap-2">
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
					Using the <code>/id</code> endpoint, results are calculated using multiple hues across the
					360° color circle, and the saturation/lightness values:
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
				{state.loading ? (
					<Spinner size="3" className="mx-auto" />
				) : (
					<>
						{error ? (
							<div className="m-10">Oh no! Something went wrong. Please try again later.</div>
						) : (
							<div>
								<Grid columns={{ initial: '4', sm: '6', md: '8', lg: '12' }} gap="4" width="auto">
									{state.uniqueColors.map((color) => (
										<div key={color.name.value}>
											<ColorSquarieMemo
												colorRgb={color.rgb.value}
												colorName={color.name.value}
												colorHex={color.hex.value}
											/>
										</div>
									))}
								</Grid>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	)
}

export { Rainbow }

export const Route = createFileRoute('/rainbow')({
	component: Rainbow,
})
