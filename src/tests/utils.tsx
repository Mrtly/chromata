import {
	Outlet,
	RouterProvider,
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
} from '@tanstack/react-router'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'

function createTestRouter(component: () => ReactNode) {
	const rootRoute = createRootRoute({
		component: Outlet,
	})

	const componentRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/',
		component,
	})

	const router = createRouter({
		routeTree: rootRoute.addChildren([componentRoute]),
		history: createMemoryHistory(),
	})

	return router
}

export function renderWithContext(component: () => JSX.Element) {
	const router = createTestRouter(component)
	// @ts-expect-error for now, todo fix router type
	return render(<RouterProvider router={router} />)
}
