import { Outlet, createRootRoute } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
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
				<Outlet /> {/* this is the new App equivalent */}
			</Theme>
			{/* <TanStackRouterDevtools position="bottom-right" /> */}
		</>
	)
}
