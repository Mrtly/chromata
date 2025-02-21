import { createFileRoute } from '@tanstack/react-router'
import { ReactNode, useState, useTransition } from 'react'
import { addToastToQueue } from '@/components/Toast'
import { cn } from '@/utils/cn'
import { Button, Link } from '@radix-ui/themes'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { InfoPanel } from '@/components/Panels'
import { flushSync } from 'react-dom'

export const Route = createFileRoute('/_pathless/postit')({
	component: PostItsPage,
})

function PostItsPage() {
	const [currentPalette, setCurrentPalette] = useState(palettes[0])
	const [, startTransition] = useTransition()

	const handleCopyPalette: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		navigator.clipboard.writeText(JSON.stringify(currentPalette))
		addToastToQueue({
			description: (
				<div className="flex gap-2 items-center">
					Copied
					<code className="text-violet-700 font-medium font-gummy text-lg">
						{currentPalette.name}
					</code>{' '}
					to clipboard
				</div>
			),
		})
	}

	const handlePaletteChange = (newPalette: Palette) => {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				flushSync(() => {
					setCurrentPalette(newPalette)
				})
			})
		} else {
			startTransition(() => {
				setCurrentPalette(newPalette)
			})
		}
	}

	return (
		<div
			className="flex flex-col gap-6 lg:flex-row"
			style={{ viewTransitionName: 'page-transition' }}
		>
			<InfoPanel heading="Post-it palettes">
				<div className="overflow-y-scroll">
					<div className="mt-4 p-4 flex flex-wrap lg:flex-col gap-4">
						{palettes.map((p) => (
							<Palette
								key={p.name}
								palette={p}
								onClick={() => handlePaletteChange(p)}
								isCurrent={p === currentPalette}
							/>
						))}
					</div>
				</div>
			</InfoPanel>

			<div className="size-full shadow-md bg-white rounded-xl p-4">
				<div className="flex flex-wrap w-full justify-between px-1 text-gray-500">
					<div className="flex gap-4 items-center">
						<div className="text-3xl font-gummy">{currentPalette.name}</div>
						<Button onClick={handleCopyPalette} variant="outline" className="cursor-pointer">
							copy palette
						</Button>
					</div>
					<div className="flex items-center gap-1">
						inspiration:
						<Link
							href="https://www.post-it.com/3M/en_US/post-it/ideas/color/collections/"
							target="_blank"
							className="flex items-center gap-1"
						>
							post-it.com <ExternalLinkIcon className="size-5" />
						</Link>
					</div>
				</div>
				{/* <h3 className="text-2xl font-semibold mt-8 ml-8 text-violet-800">{currentPalette.name}!</h3> */}
				<div className="mt-6 flex flex-wrap w-full p-4 gap-6 max-h-[50rem] overflow-y-scroll">
					{currentPalette.colors.map((p) => (
						<PostIt color={p.color} content={p.name} key={`${p.name}`} />
					))}
				</div>
			</div>
		</div>
	)
}

export { PostItsPage }

const PostIt = ({ color, content }: { color: string; content: ReactNode }) => {
	const handleCopy: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		navigator.clipboard.writeText(color)
		addToastToQueue({
			description: (
				<div className="flex gap-2 items-center">
					<div style={{ backgroundColor: color }} className="size-5 rounded"></div>
					Copied<code className="text-black font-medium">{color}</code> to clipboard
				</div>
			),
		})
	}

	return (
		<button
			onClick={handleCopy}
			style={{
				backgroundColor: color ? `${color}` : '#ffff99',
				borderBottomRightRadius: '60px 10px',
				boxShadow: '1px 1px 2px gray',
				viewTransitionName: `postit-${content}`, // Make sure it's unique
			}}
			className={cn(
				'flex justify-center active:scale-95 cursor-default',
				'size-32 md:size-40 lg:size-60 pt-10',
				'font-gummy tracking-widest text-base sm:text-xl md:text-2xl text-blue-800'
			)}
		>
			{content}
		</button>
	)
}

const Palette = ({
	palette,
	onClick,
	isCurrent,
}: {
	palette: Palette
	onClick: () => void
	isCurrent: boolean
}) => {
	return (
		<button
			onClick={onClick}
			className={`rounded-md min-w-28 p-2 transition-all duration-200 shadow-md  
        ${isCurrent && 'ring-4 ring-slate-400 hover:border-gray-400'}`}
		>
			<div className="text-sm md:text-base font-semibold tracking-wider text-left text-gray-700">
				{palette.name}
			</div>

			<div className="flex w-full">
				{palette.colors.map((item) => (
					<div
						key={item.color}
						className="w-full h-6"
						style={{
							backgroundColor: item.color,
						}}
					>
						{palette.name === 'Totally Random' && <div>?</div>}
					</div>
				))}
			</div>
		</button>
	)
}

interface Color {
	name: string
	color: string
}

interface Palette {
	name: string
	colors: Color[]
}

type Palettes = Palette[]

const palettes: Palettes = [
	{
		name: 'Supernova Neons',
		colors: [
			{ name: 'Aqua Splash', color: '#6AD8E6' },
			{ name: 'Acid Lime', color: '#E3EE5A' },
			{ name: 'Guava', color: '#FE8A98' },
			{ name: 'Tropical Pink', color: '#FAA6EB' },
			{ name: 'Iris Infusion', color: '#C29BD3' },
		],
	},
	{
		name: 'Energy Boost',
		colors: [
			{ name: 'Vital Orange', color: '#FFAF5F' },
			{ name: 'Tropical Pink', color: '#FAA6EB' },
			{ name: 'Limeade', color: '#9DD457' },
			{ name: 'Blue Paradise', color: '#68D4F9' },
			{ name: 'Sunnyside', color: '#FFCF33' },
		],
	},
	{
		name: 'Playful Primaries',
		colors: [
			{ name: 'Candy Apple Red', color: '#F14366' },
			{ name: 'Vital Orange', color: '#FFAF5F' },
			{ name: 'Sunnyside', color: '#FFCF33' },
			{ name: 'Limeade', color: '#9DD457' },
			{ name: 'Blue Paradise', color: '#68D4F9' },
			{ name: 'Iris Infusion', color: '#C29BD3' },
		],
	},
	{
		name: 'Wanderlust Pastels',
		colors: [
			{ name: 'Pink Salt', color: '#F2D4E0' },
			{ name: 'Positively Pink', color: '#FEBAD4' },
			{ name: 'Orchid Frost', color: '#E5DCEF' },
			{ name: 'Washed Denim', color: '#9CC7FC' },
			{ name: 'Fresh Mint', color: '#B5E2DE' },
			{ name: 'Pebble Gray', color: '#BFB6B9' },
		],
	},
	{
		name: 'Oasis',
		colors: [
			{ name: 'Washed Denim', color: '#9CC7FC' },
			{ name: 'Fresh Mint', color: '#B5E2DE' },
			{ name: 'Limeade', color: '#9DD457' },
			{ name: 'Lucky Green', color: '#63C789' },
			{ name: 'Sea Glass', color: '#41AABF' },
		],
	},
	{
		name: 'Summer Joy',
		colors: [
			{ name: 'Citron', color: '#EFDD55' },
			{ name: 'Papaya Fizz', color: '#FFA999' },
			{ name: 'Power Pink', color: '#F46DA6' },
			{ name: 'Washed Denim', color: '#9CC7FC' },
			{ name: 'Fresh Mint', color: '#B5E2DE' },
		],
	},
	{
		name: 'Simply Serene',
		colors: [
			{ name: 'Washed Denim', color: '#9CC7FC' },
			{ name: 'Pebble Gray', color: '#BFB6B9' },
			{ name: 'Fresh Snow', color: '#F2F3F5' },
			{ name: 'Pink Salt', color: '#F2D4E0' },
			{ name: 'Black Onyx', color: '#231F20' },
		],
	},
	{
		name: 'Beachside Café',
		colors: [
			{ name: 'Fresh Mint', color: '#B5E2DE' },
			{ name: 'Aqua Splash', color: '#6AD8E6' },
			{ name: 'Sunnyside', color: '#FFCF33' },
			{ name: 'Guava', color: '#FE8A98' },
			{ name: 'Pink Salt', color: '#F2D4E0' },
		],
	},
	{
		name: 'Floral Fantasy',
		colors: [
			{ name: 'Limeade', color: '#9DD457' },
			{ name: 'Blue Paradise', color: '#68D4F9' },
			{ name: 'Citron', color: '#EFDD55' },
			{ name: 'Positively Pink', color: '#FEBAD4' },
			{ name: 'Iris Infusion', color: '#C29BD3' },
		],
	},
	{
		name: 'Poptimistic',
		colors: [
			{ name: 'Guava', color: '#FE8A98' },
			{ name: 'Vital Orange', color: '#FFAF5F' },
			{ name: 'Aqua Splash', color: '#6AD8E6' },
			{ name: 'Acid Lime', color: '#E3EE5A' },
			{ name: 'Power Pink', color: '#F46DA6' },
		],
	},
	{
		name: 'Sweet Sprinkles',
		colors: [
			{ name: 'Positively Pink', color: '#FEBAD4' },
			{ name: 'Pink Salt', color: '#F2D4E0' },
			{ name: 'Canary Yellow', color: '#FCF3AC' },
			{ name: 'Fresh Mint', color: '#B5E2DE' },
			{ name: 'Moonstone', color: '#919FE4' },
		],
	},
	{
		name: 'Classic',
		colors: [{ name: 'Post-it Yellow', color: '#F7DD00' }],
	},
]
