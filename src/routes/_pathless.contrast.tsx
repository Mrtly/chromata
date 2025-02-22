import React, { useState, useEffect, useCallback } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button, Link } from '@radix-ui/themes'
import { InfoPanel, PalettePanel } from '@/components/Panels'
import { addToastToQueue } from '@/components/Toast'
import ErrorBoundary from '@/components/ErrorBoundary'
import { checkContrast } from '@/utils/contrastChecker'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { debounce } from '@/utils/debounce'

interface ColorState {
	background: string
	foreground: string
	fontSize: string
	loading: boolean
	contrastRatio: number
	wcagAA: boolean
	wcagAAA: boolean
}

const ContrastPage = () => {
	const [state, setState] = useState<ColorState>({
		background: '#2e2843',
		foreground: '#40f2e3',
		fontSize: '16px',
		loading: false,
		contrastRatio: 10.1,
		wcagAA: true,
		wcagAAA: true,
	})

	const handleColorChange = (type: 'background' | 'foreground', value: string) => {
		setState((prev) => ({
			...prev,
			[type]: value,
		}))
	}

	const debouncedCheckContrast = useCallback(
		debounce((foreground: string, background: string) => {
			checkContrast(foreground, background).then((res) => {
				setState((prev) => ({
					...prev,
					contrastRatio: Number(res.ratio),
					wcagAA: res.AA === 'pass',
					wcagAAA: res.AAA === 'pass',
				}))
			})
		}, 200),
		[]
	)

	useEffect(() => {
		debouncedCheckContrast(state.foreground, state.background)
	}, [state.foreground, state.background, debouncedCheckContrast])

	const handleCopyColors: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		navigator.clipboard.writeText(
			`Background: ${state.background}\nForeground: ${state.foreground}\nContrast Ratio: ${state.contrastRatio}:1`
		)
		addToastToQueue({
			description: <div>Copied colors to clipboard</div>,
		})
	}

	return (
		<ErrorBoundary>
			<div
				className="flex flex-col gap-6 lg:flex-row"
				style={{ viewTransitionName: 'page-transition' }}
			>
				<InfoPanel heading="contrast checker" subheading="check color contrast ratio">
					<div className="flex flex-col gap-4 my-6">
						<div>
							<ColorInput
								label="background color"
								value={state.background}
								onChange={(e) => handleColorChange('background', e.target.value)}
							/>

							<ColorInput
								label="text color"
								value={state.foreground}
								onChange={(e) => handleColorChange('foreground', e.target.value)}
							/>
						</div>

						<div className="flex flex-col gap-4">
							<div>
								<div className="block font-medium text-slate-500">contrast ratio</div>
								<div className="text-4xl font-bold">{state.contrastRatio}:1</div>
							</div>
							<div className="space-y-1.5">
								<div className="flex items-center gap-2">
									<span className={`text-lg ${state.wcagAA ? 'text-green-600' : 'text-red-600'}`}>
										{state.wcagAA ? '✓' : '✗'}
									</span>
									<span>WCAG AA Compliant</span>
								</div>
								<div className="flex items-center gap-2">
									<span className={`text-lg ${state.wcagAAA ? 'text-green-600' : 'text-red-600'}`}>
										{state.wcagAAA ? '✓' : '✗'}
									</span>
									<span>WCAG AAA Compliant</span>
								</div>
							</div>
						</div>
					</div>

					<div className="h-1 border-t border-slate-300 my-4" />

					<div className="flex justify-between">
						<Button
							onClick={handleCopyColors}
							variant="outline"
							className="cursor-pointer tracking-wider"
						>
							copy colors
						</Button>
						<Link
							href="https://webaim.org/resources/contrastchecker"
							target="_blank"
							className="hidden md:flex items-center gap-1 underline text-slate-700 hover:text-slate-500"
						>
							webAIM contrast API <ExternalLinkIcon className="size-5" />
						</Link>
					</div>
				</InfoPanel>

				<PalettePanel
					style={{
						backgroundColor: state.background,
						color: state.foreground,
					}}
				>
					<div className="size-full p-8 flex items-center justify-center">
						<div className="space-y-8 w-full max-w-2xl">
							<div className="space-y-4">
								<p className="text-[96px] leading-none">Aa</p>
								<p className="text-2xl">The quick brown fox jumps over the lazy dog. 1234567890</p>
							</div>
							<div className="space-y-2">
								<p className="text-base">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis
									varius, imperdiet sem et, congue nisi.
								</p>
								<p className="text-sm">
									Maecenas ullamcorper dui et placerat feugiat. Morbi sit amet consectetur lorem.
									Sed dapibus ex from 12px to 16px.
								</p>
							</div>
						</div>
					</div>
				</PalettePanel>
			</div>
		</ErrorBoundary>
	)
}

export const Route = createFileRoute('/_pathless/contrast')({
	component: ContrastPage,
})

interface ColorInputProps {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	label: string
}

const ColorInput = ({ value, onChange, label }: ColorInputProps) => {
	return (
		<label className="block font-medium text-slate-500 w-fit">
			{label}
			<div className="flex items-center gap-3">
				<input
					type="color"
					value={value}
					onChange={onChange}
					className="size-10 sm:size-12 md:size-16 border-none bg-transparent cursor-pointer"
				/>
				<code className="text-lg font-mono">{value}</code>
			</div>
		</label>
	)
}
