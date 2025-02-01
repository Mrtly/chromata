import ErrorBoundary from '@/components/ErrorBoundary'
import { Link } from '@radix-ui/themes'
import { createFileRoute } from '@tanstack/react-router'

const Home = () => {
	return (
		<ErrorBoundary>
			<div>
				<h1 className="sr-only">chromata home page</h1>
				<div className="mt-20 w-1/2 h-80 mx-auto rounded-md p-10 bg-stone-100 flex flex-col items-center gap-10 justify-center text-xl">
					<Link href="/rainbow">Rainbow Palette →</Link>
					<Link href="/scheme">Scheme Palette →</Link>
				</div>
			</div>
		</ErrorBoundary>
	)
}

export { Home } //export for testing

export const Route = createFileRoute('/')({
	component: Home,
})
