import { ReactNode } from 'react'

type InfoPanelProps = {
	children: ReactNode
	heading: string
	subheading?: string
	style?: React.CSSProperties
}

const InfoPanel = ({ children, heading, subheading, style }: InfoPanelProps) => {
	return (
		<div
			className="xl:w-1/3 size-full rounded-xl p-5 shadow-md lg:px-10 lg:py-8 bg-white text-slate-800"
			style={style}
		>
			<h1 className="pt-2 text-slate-700 text-4xl lg:text-5xl font-semibold font-gummy">
				{heading}
			</h1>
			{subheading && <h2 className="text-2xl text-slate-500">{subheading}</h2>}
			<div>{children}</div>
		</div>
	)
}

const PalettePanel = ({
	children,
	style,
}: {
	children: ReactNode
	style?: React.CSSProperties
}) => {
	return (
		<div className="xl:w-2/3 w-full py-8 px-4 md:px-16 shadow-md bg-white rounded-xl" style={style}>
			{children}
		</div>
	)
}

export { InfoPanel, PalettePanel }
