import '@testing-library/jest-dom'
import { expect } from 'vitest'
import { screen } from '@testing-library/react'

import { PostItsPage } from '../routes/postit'
import { renderWithContext } from './utils'

describe('PostItsPage', () => {
	it('renders the PostItsPage component', () => {
		renderWithContext(PostItsPage)

		const heading = screen.getByRole('heading', { name: 'Post-it palettes' })

		expect(heading).toBeInTheDocument()
	})
})
