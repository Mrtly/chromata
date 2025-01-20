import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { Link } from '@radix-ui/themes'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen w-screen font-open bg-indigo-50">
			<header className="min-h-20 py-4 px-8 w-full flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2 hover:no-underline">
					<div className="size-12 rounded bg-violet-400" />
					<div className="flex flex-col gap-1 text-zinc-800 hover:text-zinc-700">
						<div className="text-2xl font-semibold font-funnel">Chromata</div>
						<div className="">with thecolorapi</div>
					</div>
				</Link>
				<div>
					<Link
						href="https://www.thecolorapi.com/"
						target="_blank"
						className="flex items-center gap-1 underline text-zinc-700 hover:text-zinc-500"
					>
						thecolorapi <ExternalLinkIcon className="size-5" />
					</Link>
				</div>
			</header>
			<main className="p-6 min-h-[calc(100vh-80px)] w-screen">{children}</main>
		</div>
	)
}

export default Layout
