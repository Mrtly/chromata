import { Color } from '@/utils/colorHelpers'
import { Grid } from '@radix-ui/themes'
import ColorSquarie from './ColorSquarie'

interface ResultsProps {
	uniqueColors: Color[]
	loading: boolean
	error: boolean
}

const Results: React.FC<ResultsProps> = ({ uniqueColors, loading, error }) => {
	if (loading) {
		// If loading, we throw a promise to suspend the UI and let Suspense handle it
		throw new Promise(() => {}) // This causes Suspense to activate
	}

	if (error) {
		return <div className="m-10">Oh no :(</div>
	}

	return (
		<div>
			<Grid
				columns={{ initial: '4', sm: '6', md: '4', lg: '6', xl: '8' }}
				gap="2"
				width="auto"
				className="mx-auto"
			>
				{uniqueColors.map((color) => (
					<div key={color.name.value}>
						<ColorSquarie
							colorRgb={color.rgb.value}
							colorName={color.name.value}
							colorHex={color.hex.value}
						/>
					</div>
				))}
			</Grid>
		</div>
	)
}

export { Results }
