import ErrorBoundary from '@/components/ErrorBoundary'
import { cn } from '@/utils/cn'

import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

const Homepage = () => {
	const cardLinkStyles = cn(
		'group relative md:w-72 md:h-44 bg-gradient-to-br from-white to-violet-100',
		'shadow-lg hover:shadow-xl rounded-2xl transition-all duration-300',
		'flex flex-col items-start justify-between p-6 overflow-hidden',
		'hover:-translate-y-1 hover:from-violet-50 hover:to-violet-100',
		'text-2xl font-gummy border border-violet-100/50'
	)

	const cardTitleStyles = cn(
		'text-violet-900 group-hover:text-violet-950 z-10',
		'flex items-center gap-2 transition-colors duration-300'
	)

	// Different decorative shapes with unique gradients
	const circleShape = cn(
		'absolute -right-12 -bottom-12 size-40 rounded-full',
		'bg-gradient-to-br from-pink-200/40 to-purple-300/40',
		'group-hover:scale-110 transition-transform duration-300'
	)

	const squareShape = cn(
		'absolute -right-12 -bottom-12 size-40 rotate-45',
		'bg-gradient-to-br from-blue-200/40 to-violet-300/40',
		'group-hover:scale-110 transition-transform duration-300'
	)

	const hexagonShape = cn(
		'absolute -right-12 -bottom-12 size-40',
		'bg-gradient-to-br from-orange-200/40 to-pink-300/40',
		'group-hover:scale-110 transition-transform duration-300',
		'[clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]'
	)

	const triangleShape = cn(
		'absolute -right-12 -bottom-12 size-40',
		'bg-gradient-to-br from-emerald-200/40 to-teal-300/40',
		'group-hover:scale-110 transition-transform duration-300',
		'[clip-path:polygon(50%_0%,0%_100%,100%_100%)]'
	)

	// Arrow style
	const arrowStyles =
		'text-violet-500 group-hover:text-violet-600 group-hover:translate-x-1 transition-all duration-300'

	return (
		<ErrorBoundary>
			<div className="min-h-screen flex flex-col items-center gap-16 p-10 md:py-10 md:px-20 bg-slate-100 font-open">
				<div className="lg:w-2/3 text-center py-16 bg-gradient-to-b from-violet-100 to-white rounded-xl">
					<h1 className="text-5xl font-gummy text-slate-700 mb-4">chromata</h1>
					<p className="text-lg max-w-2xl mx-auto px-4">
						A fun toolkit for color exploration and accessibility testing. Create, test, & perfect
						your color palettes.
					</p>
				</div>

				<div className="flex-1 container mx-auto px-4">
					{/* Cards Grid */}
					<div className="flex flex-wrap items-center justify-center gap-8 max-w-[1300px] mx-auto">
						<div className="basis-full md:basis-[calc(50%-1rem)] xl:basis-[calc(25%-1.5rem)]">
							<Link
								to="/contrast"
								className={cardLinkStyles}
								viewTransition={{ types: ['layout-shift'] }}
							>
								<div className={triangleShape} />
								{/* <NewBadge className="absolute bottom-4 left-4" /> */}
								<div className={cardTitleStyles}>
									Contrast Checker
									<span className={arrowStyles}>→</span>
								</div>
							</Link>
						</div>

						<div className="basis-full md:basis-[calc(50%-1rem)] xl:basis-[calc(25%-1.5rem)]">
							<Link
								to="/rainbow"
								className={cardLinkStyles}
								viewTransition={{ types: ['layout-shift'] }}
							>
								<div className={circleShape} />
								<div className={cardTitleStyles}>
									Rainbow Palette
									<span className={arrowStyles}>→</span>
								</div>
							</Link>
						</div>
						<div className="basis-full md:basis-[calc(50%-1rem)] xl:basis-[calc(25%-1.5rem)]">
							<Link
								to="/scheme"
								className={cardLinkStyles}
								viewTransition={{ types: ['layout-shift'] }}
							>
								<div className={squareShape} />
								<div className={cardTitleStyles}>
									Scheme Palette
									<span className={arrowStyles}>→</span>
								</div>
							</Link>
						</div>
						<div className="basis-full md:basis-[calc(50%-1rem)] xl:basis-[calc(25%-1.5rem)]">
							<Link
								to="/postit"
								className={cardLinkStyles}
								viewTransition={{ types: ['layout-shift'] }}
							>
								<div className={hexagonShape} />
								<div className={cardTitleStyles}>
									Post-it Palette
									<span className={arrowStyles}>→</span>
								</div>
							</Link>
						</div>
					</div>

					{/* Features Section */}
					{/* <div className="mt-20 mb-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
						<div className="p-6">
							<div className="text-2xl mb-2">🎨</div>
							<h3 className="font-gummy text-lg text-violet-900 mb-2">Color play</h3>
							<p className="">Mix, match, and discover delightful color combos that spark joy</p>
						</div>
						<div className="p-6">
							<div className="text-2xl mb-2">✨</div>
							<h3 className="font-gummy text-lg text-violet-900 mb-2">Happy Accidents</h3>
							<p className="">Let serendipity guide you to unexpected color harmonies</p>
						</div>
						<div className="p-6">
							<div className="text-2xl mb-2">🌈</div>
							<h3 className="font-gummy text-lg text-violet-900 mb-2">Palette Tales</h3>
							<p className="">From Post-its to rainbows, each palette tells its own story</p>
						</div>
					</div> */}
				</div>

				<footer className="mt-auto py-6 text-center ">
					<p className="text-sm">Made with 💜 for color enthusiasts</p>
				</footer>
			</div>
		</ErrorBoundary>
	)
}

export { Homepage } //export for testing

export const Route = createFileRoute('/')({
	component: Homepage,
})
