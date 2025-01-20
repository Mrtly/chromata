import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Rainbow from './pages/Rainbow.tsx'
import NotFound from './pages/NotFound.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		id: 'home',
		errorElement: <NotFound />,
	},
	{
		path: '/rainbow',
		element: <Rainbow />,
		id: 'rainbow',
	},
] satisfies RouteObject[])

export default router
