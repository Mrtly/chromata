import { Header } from './components/Header'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen w-screen font-open bg-indigo-50">
			<Header />
			<main className="p-6 min-h-[calc(100vh-80px)] w-screen">{children}</main>
		</div>
	)
}

export default Layout
