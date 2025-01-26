import { Link } from '@radix-ui/themes'
import Layout from '../Layout.tsx'

const Home = () => {
	return (
		<Layout>
			<div className="w-full flex flex-col items-center gap-10 justify-center text-xl">
				<Link href="/rainbow">Rainbow Palette →</Link>
				<Link href="/scheme">Scheme Palette →</Link>
			</div>
		</Layout>
	)
}
export default Home
