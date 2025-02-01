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
			'text-zinc-800 text-lg flex items-center',
			pathname === path ? 'font-bold' : 'hover:text-zinc-600'
		)

		return (
			<Link className={styles} to={path} viewTransition={{ types: ['layout-shift'] }}>
				{children}
				{isNew && <NewBadge className="ml-1" />}
			</Link>
		)
	}

	return (
		<header className="py-2 px-4 md:px-12 w-full flex gap-2 items-center justify-between bg-white rounded-full">
			<Link
				to="/"
				aria-label="Chromata home"
				className="flex items-center gap-2 hover:no-underline"
				viewTransition={{ types: ['layout-shift'] }}
			>
				<div className="size-10 md:size-12 rounded bg-gradient-to-br from-indigo-600 to-teal-500" />
				<div className="hidden lg:block text-zinc-800 hover:text-zinc-700">
					<div className="text-2xl font-semibold font-gummy">Chromata</div>
					<div className="text-zinc-500">means colors!</div>
				</div>
			</Link>
			{pathname !== '/' && (
				<div className="flex gap-4 md:gap-6">
					<HeaderLink path="/rainbow">Rainbow</HeaderLink>
					<HeaderLink path="/scheme">Scheme</HeaderLink>
					<HeaderLink isNew path="/postit">
						PostIt
					</HeaderLink>
				</div>
			)}
		</header>
	)
}

export { Header }
