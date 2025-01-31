import { ReactNode } from 'react'

type InfoPanelProps = {
	children: ReactNode
	heading: string
	subheading?: string
}

const InfoPanel = ({ children, heading, subheading }: InfoPanelProps) => {
	return (
		<div className="xl:w-1/3 size-full rounded-xl p-5 shadow lg:px-10 lg:py-8 bg-white text-zinc-800">
			<h1 className="pt-2 text-zinc-700 text-4xl lg:text-5xl font-semibold font-gummy">
				{heading}
			</h1>
			{subheading && <h2 className="text-2xl text-zinc-500">{subheading}</h2>}
			<div>{children}</div>
		</div>
	)
}

const PalettePanel = ({ children }: { children: ReactNode }) => {
	return <div className="xl:w-2/3 w-full py-8 px-4 md:px-16 bg-white rounded-xl">{children}</div>
}

export { InfoPanel, PalettePanel }
