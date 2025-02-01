import ErrorBoundary from '@/components/ErrorBoundary'
import { NewBadge } from '@/components/NewBadge'
import { cn } from '@/utils/cn'

import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

const Home = () => {
	const cardLinkStyles = cn(
		'w-72 h-44 bg-white shadow-md hover:shadow-lg rounded-xl',
		'flex items-center justify-center',
		'text-3xl text-violet-800 font-gummy'
	)

	return (
		<ErrorBoundary>
			<div>
				<h1 className="sr-only">chromata home page</h1>
				<div className="mt-10 flex gap-10 items-center justify-center flex-wrap">
					<Link
						to="/postit"
						className={cn(cardLinkStyles, 'relative')}
						viewTransition={{ types: ['layout-shift'] }}
					>
						Post-it Palette → <NewBadge className="absolute top-2 right-2" />
					</Link>
					<Link
						to="/rainbow"
						className={cardLinkStyles}
						viewTransition={{ types: ['layout-shift'] }}
					>
						Rainbow Palette →
					</Link>
					<Link
						to="/scheme"
						className={cardLinkStyles}
						viewTransition={{ types: ['layout-shift'] }}
					>
						Scheme Palette →
					</Link>
				</div>
			</div>
		</ErrorBoundary>
	)
}

export { Home } //export for testing

export const Route = createFileRoute('/')({
	component: Home,
})
