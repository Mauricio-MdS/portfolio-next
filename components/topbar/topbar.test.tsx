import { ThemeProvider } from "../theme-provider"
import Topbar from "./topbar"
import { screen, render, fireEvent } from "@testing-library/react"
import user from "@testing-library/user-event"

describe("Topbar", () => {
  test("should render", () => {
    render(<Topbar />)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  describe("when system theme is light", () => {
    // mocks default to dark mode
    beforeEach(() => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }))
    })

    test("should have light theme by default", () => {
      render(<Topbar />, { wrapper: ThemeProvider })
      const sun = screen.getByTestId("Sun")
      const moon = screen.queryByTestId("Moon")
      expect(sun).toBeInTheDocument()
      expect(moon).not.toBeInTheDocument()
    })

    test("should change to dark theme after clicking button", async () => {
      await user.setup()
      render(<Topbar />, { wrapper: ThemeProvider })
      const button = screen.getByRole("button")
      await user.click(button)
      const sun = screen.queryByTestId("Sun")
      const moon = screen.getByTestId("Moon")
      expect(sun).not.toBeInTheDocument()
      expect(moon).toBeInTheDocument()
    })
  })

  describe("when system theme is dark", () => {
    // mocks default to dark mode
    beforeEach(() => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }))
    })
    test("should have dark theme by default", () => {
      render(<Topbar />, { wrapper: ThemeProvider })
      const sun = screen.queryByTestId("Sun")
      const moon = screen.getByTestId("Moon")
      expect(sun).not.toBeInTheDocument()
      expect(moon).toBeInTheDocument()
    })

    test("should change to light theme after clicking button", async () => {
      await user.setup()
      render(<Topbar />, { wrapper: ThemeProvider })
      const button = screen.getByRole("button")
      await user.click(button)
      const sun = screen.getByTestId("Sun")
      const moon = screen.queryByTestId("Moon")
      expect(sun).toBeInTheDocument()
      expect(moon).not.toBeInTheDocument()
    })
  })
})
