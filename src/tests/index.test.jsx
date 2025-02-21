import '@testing-library/jest-dom'
import { expect } from 'vitest'
import { screen } from '@testing-library/react'

import { Homepage } from '../routes/index'
import { renderWithContext } from './utils'

describe('root page', () => {
	it('renders the Homepage component', () => {
		renderWithContext(Homepage)

		const heading = screen.getByRole('heading', { name: 'chromata' })

		expect(heading).toBeInTheDocument()
		expect(heading).toHaveAccessibleName()

		// screen.debug() //useful, prints out the jsx in the terminal
	})
})
