import Projects from "./projects"
import { render, screen } from "@testing-library/react"

describe("Projects", () => {
  test("should render", () => {
    render(<Projects />)
    const heading = screen.getByText(/projects/i)
    expect(heading).toBeInTheDocument()
  })
})
