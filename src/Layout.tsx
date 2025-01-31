import { Header } from './components/Header'
import { GlobalToastRegion } from './components/Toast'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen w-screen overscroll-x-none">
			<div className="m-8 p-6 md:px-12 lg:px-24 xl:px-32 font-open bg-stone-200 rounded-xl">
				<Header />
				<main className="p-6 w-full min-h-[80vh]">{children}</main>
				<GlobalToastRegion />
			</div>
		</div>
	)
}

export default Layout
