import React from 'react'
import { addToastToQueue } from './Toast'

interface ColorSquarieProps {
	colorName: string
	colorRgb: string
	colorHex?: string
}

const ColorSquarie: React.FC<ColorSquarieProps> = ({ colorName, colorRgb, colorHex }) => {
	const handleCopy: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		navigator.clipboard.writeText(colorHex || '')
		addToastToQueue({
			description: (
				<div className="flex gap-2 items-center">
					<div style={{ backgroundColor: colorRgb }} className="size-5 rounded"></div>
					Copied<code className="text-black font-medium">{colorHex}</code> to clipboard
				</div>
			),
		})
	}

	return (
		//color-square class is used by gsap
		//eslint-disable-next-line
		<div className="color-square flex min-w-[70px] flex-col gap-0.5">
			<button
				aria-label={`hex for color ${colorName}`}
				onClick={handleCopy}
				style={{ backgroundColor: colorRgb }}
				className="size-16 rounded-md shadow-md focusVisibleRingStyles cursor-default active:scale-90"
			/>
			<div className="font-medium tracking-wide font-gummy break-keep">{colorName}</div>
			{colorHex && <div className="font-light text-slate-700">{colorHex}</div>}
		</div>
	)
}

export default ColorSquarie
