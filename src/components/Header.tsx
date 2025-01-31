import { cn } from '@/utils/cn'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { Badge, Link } from '@radix-ui/themes'
import { useLocation } from '@tanstack/react-router'

const HeaderLink = ({
	path,
	children,
	isNew,
}: {
	path: string
	children: string
	isNew?: boolean
}) => {
	const location = useLocation()
	const pathname = location.pathname
	const styles = cn('text-zinc-800', pathname === path ? 'font-bold' : 'hover:text-zinc-600')

	return (
		<Link className={styles} href={path}>
			{children}
			{isNew && (
				<Badge highContrast radius="full" className="ml-1" color="plum">
					new
				</Badge>
			)}
		</Link>
	)
}

const Header = () => {
	return (
		<header className="py-2 px-4 md:px-12 w-full flex gap-2 items-center justify-between bg-white rounded-full">
			<Link
				href="/"
				aria-label="Chromata home"
				className="flex items-center gap-2 hover:no-underline"
			>
				<div className="size-10 md:size-12 rounded bg-gradient-to-br from-indigo-600 to-teal-500" />
				<div className="hidden lg:block text-zinc-800 hover:text-zinc-700">
					<div className="text-2xl font-semibold font-gummy">Chromata</div>
					<div className="text-zinc-500">means colors!</div>
				</div>
			</Link>
			<div className="flex gap-4 md:gap-6">
				<HeaderLink path="/rainbow">Rainbow</HeaderLink>
				<HeaderLink path="/scheme">Scheme</HeaderLink>
				<HeaderLink isNew path="/postits">
					PostIt
				</HeaderLink>
				<Link
					href="https://www.thecolorapi.com/"
					target="_blank"
					className="hidden md:flex items-center gap-1 underline text-zinc-700 hover:text-zinc-500"
				>
					thecolorapi <ExternalLinkIcon className="size-5" />
				</Link>
			</div>
		</header>
	)
}

export { Header }
