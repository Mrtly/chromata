import { cn } from '@/utils/cn'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { Link } from '@radix-ui/themes'
import { useLocation } from 'react-router-dom'

const HeaderLink = ({ path, children }: { path: string; children: string }) => {
	const location = useLocation()
	const pathname = location.pathname
	const styles = cn('text-zinc-700', pathname === path ? 'font-bold' : 'hover:text-zinc-500')

	return (
		<Link className={styles} href={path}>
			{children}
		</Link>
	)
}

const Header = () => {
	return (
		<header className="min-h-20 py-4 px-8 w-full flex items-center justify-between">
			<Link href="/" className="flex items-center gap-2 hover:no-underline">
				<div className="size-12 rounded bg-violet-400" />
				<div className="flex flex-col gap-1 text-zinc-800 hover:text-zinc-700">
					<div className="text-2xl font-semibold font-funnel">Chromata</div>
					<div className="">with thecolorapi</div>
				</div>
			</Link>
			<div className="flex gap-4">
				<HeaderLink path="/rainbow">Rainbow Palette</HeaderLink>
				<HeaderLink path="/scheme">Scheme Palette</HeaderLink>
				<Link
					href="https://www.thecolorapi.com/"
					target="_blank"
					className="flex items-center gap-1 underline text-zinc-700 hover:text-zinc-500"
				>
					thecolorapi <ExternalLinkIcon className="size-5" />
				</Link>
			</div>
		</header>
	)
}

export { Header }
