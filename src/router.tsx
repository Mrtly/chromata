import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Rainbow from './pages/Rainbow.tsx'
import NotFound from './pages/NotFound.tsx'
import Scheme from './pages/Scheme.tsx'

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
	{
		path: '/scheme',
		element: <Scheme />,
		id: 'scheme',
	},
] satisfies RouteObject[])

export default router
