import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Layout from '@/Layout'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { NotFound } from '@/components/NotFound'
// import { ThemeProvider } from "next-themes"

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: () => {
		return <NotFound />
	},
})

// const App = () => {
// 	return (
// 		<>
// 			<Theme accentColor="violet" grayColor="gray" panelBackground="solid" scaling="100%">
// 				<RouterProvider router={router} />
// 			</Theme>
// 			{/* <Analytics /> */}
// 		</>
// 	)
// }

function RootComponent() {
	return (
		// <ThemeProvider attribute="class">
		<Theme accentColor="indigo" grayColor="gray" panelBackground="solid" scaling="100%">
			<Layout>
				<Outlet /> {/* this is the new App equivalent */}
				<TanStackRouterDevtools position="bottom-right" />
			</Layout>
		</Theme>
		// </ThemeProvider>
	)
}
