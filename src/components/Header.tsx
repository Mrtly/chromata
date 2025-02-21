import { useLocation } from '@tanstack/react-router'
import { cn } from '@/utils/cn'
import { NewBadge } from './NewBadge'
import { Link } from '@tanstack/react-router'

const Header = () => {
	const location = useLocation()
	const pathname = location.pathname

	const HeaderLink = ({
		path,
		children,
		isNew,
	}: {
		path: string
		children: string
		isNew?: boolean
	}) => {
		const styles = cn(
			'text-slate-600 text-sm lg:text-lg flex items-center',
			pathname === path ? 'font-bold' : 'hover:text-slate-700'
		)

		return (
			<Link className={styles} to={path} viewTransition={{ types: ['layout-shift'] }}>
				{children}
				{isNew && <NewBadge className="hidden md:block ml-1 text-sm lg:text-base" />}
			</Link>
		)
	}

	return (
		<header className="py-2 px-4 md:px-12 w-full shadow-md flex gap-2 items-center justify-between bg-white rounded-lg">
			<Link
				to="/"
				aria-label="Chromata Homepage"
				className="flex items-center gap-2 hover:no-underline"
				viewTransition={{ types: ['layout-shift'] }}
			>
				<div className="size-10 md:size-12 rounded bg-gradient-to-br from-violet-600 to-teal-600" />
				<div className="hidden lg:block  hover:text-slate-700 text-4xl font-gummy text-slate-600">
					Chromata
				</div>
			</Link>
			{pathname !== '/' && (
				<div className="flex flex-wrap gap-4 md:gap-6">
					<HeaderLink path="/rainbow">Rainbow</HeaderLink>
					<HeaderLink path="/scheme">Scheme</HeaderLink>
					<HeaderLink path="/postit">PostIt</HeaderLink>
					<HeaderLink isNew path="/contrast">
						Contrast
					</HeaderLink>
				</div>
			)}
		</header>
	)
}

export { Header }
