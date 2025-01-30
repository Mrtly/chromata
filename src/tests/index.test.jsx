import { render, screen } from "@testing-library/react"
import { expect } from "vitest"
import { Home } from "../routes/index"



describe("root page", () => {
  it("renders the Home component", () => {
    render(<Home />)

    const heading = screen.getByRole("heading", { name: "chromata home page" })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveAccessibleName()
    expect(heading).toHaveClass('sr-only')

    // screen.debug() //useful, prints out the jsx in the terminal
  })
})
