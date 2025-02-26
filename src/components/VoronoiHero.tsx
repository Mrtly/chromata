import { useEffect, useState } from 'react'
import * as d3 from 'd3'

const cornerRadius = 20

interface PathData {
	d: string
	fill: string
	stroke: string
	strokeWidth: number
}

const VoronoiHero: React.FC = () => {
	const [w, setW] = useState(window.innerWidth * 0.75) // 75vw
	const [h, setH] = useState(window.innerHeight * 0.25) // 25vh

	const [paths, setPaths] = useState<PathData[]>([])

	useEffect(() => {
		const points = generateRandomPoints(100, w, h)
		createVoronoi(points, w, h)

		const handleResize = () => {
			setW(window.innerWidth * 0.75)
			setH(window.innerHeight * 0.25)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [w, h])

	const generateRandomPoints = (
		numPoints: number,
		width: number,
		height: number
	): [number, number][] => {
		const points: [number, number][] = []
		for (let i = 0; i < numPoints; i++) {
			const x = Math.random() * width
			const y = Math.random() * height
			points.push([x, y])
		}
		return points
	}

	// Function to create Voronoi diagram
	const createVoronoi = (points: [number, number][], width: number, height: number): void => {
		// Make sure points are not empty
		if (points.length === 0) return

		const voronoi = d3.Delaunay.from(points).voronoi([0, 0, width, height])

		const polygons: PathData[] = Array.from(voronoi.cellPolygons())
			.map((d) => {
				if (d.length < 3) {
					return null // Skip polygons with less than 3 points
				}
				const pathData = 'M' + d.join('L') + 'Z'
				return {
					d: pathData,
					fill: getRandomColor(),
					stroke: 'f1f1f1',
					strokeWidth: 1,
				}
			})
			.filter(Boolean) as PathData[] // remove invalid paths (nulls)

		setPaths(polygons)
	}

	const getRandomColor = (): string => {
		const r = Math.floor(Math.random() * 71) + 140
		const g = Math.floor(Math.random() * 71) + 140
		const b = Math.floor(Math.random() * 71) + 140
		return `rgb(${r}, ${g}, ${b})`
	}

	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
			<defs>
				<clipPath id="rounded-clip">
					<rect x={0} y={0} width={w} height={h} rx={cornerRadius} ry={cornerRadius} />
				</clipPath>
			</defs>

			<g clipPath="url(#rounded-clip)">
				{paths.length > 0 ? (
					paths.map((path, index) => (
						<path
							key={index}
							d={path.d}
							fill={path.fill}
							stroke={path.stroke}
							strokeWidth={path.strokeWidth}
						>
							<animate
								attributeType="CSS"
								attributeName="fill"
								values="#d6d6d6;#cd5c5ccc;#ffd70080;#90ee9080;#7fffd480;#19197080;#483d8b80;#4b008280;#d6d6d6"
								begin="mouseenter"
								dur="1s"
							/>
						</path>
					))
				) : (
					<text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="14">
						Loading...
					</text>
				)}
			</g>
		</svg>
	)
}

export default VoronoiHero
