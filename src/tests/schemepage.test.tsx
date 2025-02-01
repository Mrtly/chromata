import '@testing-library/jest-dom'
import { expect } from 'vitest'
import { screen } from '@testing-library/react'

import { SchemePage } from '../routes/scheme'
import { renderWithContext } from './utils'

describe('SchemePage', () => {
	it('renders the SchemePage component', () => {
		renderWithContext(SchemePage)

		const heading = screen.getByRole('heading', { name: 'scheme palette' })

		expect(heading).toBeInTheDocument()
	})
})
