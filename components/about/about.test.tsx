import About from "./about"
import { render, screen } from "@testing-library/react"

describe("About", () => {
  test("renders heading without errors", () => {
    render(<About />)
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument
  })
})
