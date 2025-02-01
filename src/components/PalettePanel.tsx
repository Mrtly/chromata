import { ReactNode } from 'react'

type PalettePanelProps = {
	children: ReactNode
	heading: string
	subheading: string
}

const PalettePanel = ({ children, heading, subheading }: PalettePanelProps) => {
	return (
		<div className="xl:w-1/3 border w-full rounded-xl p-5 shadow lg:px-10 lg:py-8 bg-white my-4 text-zinc-800">
			<h1 className="pt-2 text-zinc-700 text-5xl font-semibold font-funnel">{heading}</h1>
			<h2 className="text-2xl text-zinc-500">{subheading}</h2>
			<div>{children}</div>
		</div>
	)
}

export { PalettePanel }
