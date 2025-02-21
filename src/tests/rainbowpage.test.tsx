import '@testing-library/jest-dom'
import { expect } from 'vitest'
import { screen } from '@testing-library/react'

import { RainbowPage } from '../routes/_pathless.rainbow'
import { renderWithContext } from './utils'

describe('RainbowPage', () => {
	it('renders the RainbowPage component', () => {
		renderWithContext(RainbowPage)

		const heading = screen.getByRole('heading', { name: 'rainbow palette' })

		expect(heading).toBeInTheDocument()
	})
})
