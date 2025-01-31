import { Outlet, createRootRoute } from '@tanstack/react-router'
import PageTransition from '@/components/PageTransition'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import Layout from '@/Layout'
import { NotFound } from '@/components/NotFound'

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: () => {
		return <NotFound />
	},
})

function RootComponent() {
	return (
		<>
			<Theme accentColor="violet" grayColor="sand" scaling="100%">
				<Layout>
					<PageTransition>
						<Outlet /> {/* this is the new App equivalent */}
					</PageTransition>
				</Layout>
			</Theme>
			{/* <TanStackRouterDevtools position="bottom-right" /> */}
		</>
	)
}
