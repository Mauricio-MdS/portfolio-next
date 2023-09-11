import Hero from "./hero"
import { render, screen } from "@testing-library/react"

describe("Hero", () => {
  test("renders headings without errors", () => {
    render(<Hero />)
    const headings = screen.getAllByRole("heading")
    expect(headings).toBeInTheDocument
  })
})
