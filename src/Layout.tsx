import { Header } from './components/Header'
import { GlobalToastRegion } from './components/Toast'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen w-screen overscroll-x-none p-4 sm:p-6 md:p-8 bg-stone-200">
			<div className="p-6 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 font-open bg-slate-100 rounded-xl">
				<Header />
				<main className="p-2 md:p-6 w-full min-h-[80vh]">{children}</main>
				<GlobalToastRegion />
			</div>
		</div>
	)
}

export default Layout
