import { render, screen } from '@testing-library/react'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
	it('renders the App component', () => {
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		)

		const textElement = screen.getByText(/Chromata/i)

		expect(textElement).toBeVisible()
	})
})
