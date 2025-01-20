import React from 'react'

interface ColorSquarieProps {
	colorName: string
	colorRgb: string
	colorHex?: string
}

const ColorSquarie: React.FC<ColorSquarieProps> = ({ colorName, colorRgb, colorHex }) => {
	return (
		//color-square class is used by gsap
		//eslint-disable-next-line
		<div className="color-square flex min-w-[36px] flex-col gap-0.5">
			<div style={{ backgroundColor: colorRgb }} className="size-16 rounded-md shadow-md" />
			<div className="font-medium tracking-wide font-funnel">{colorName}</div>
			{colorHex && <div className="font-light text-zinc-700">{colorHex}</div>}
		</div>
	)
}

export default ColorSquarie
