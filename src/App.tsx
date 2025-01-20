import { RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import { Analytics } from '@vercel/analytics/react'

import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import router from './router.tsx'

const App = () => {
	return (
		<>
			<Theme accentColor="violet" grayColor="gray" panelBackground="solid" scaling="100%">
				<Layout>
					<RouterProvider router={router} />
				</Layout>
			</Theme>
			<Analytics />
		</>
	)
}

export default App
