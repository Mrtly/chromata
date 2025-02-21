import { Outlet, createFileRoute } from '@tanstack/react-router'
import Layout from '@/Layout'

export const Route = createFileRoute('/_pathless')({
	component: LayoutComponent,
})

function LayoutComponent() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}
