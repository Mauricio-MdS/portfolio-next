import { render, screen } from "@testing-library/react"
import ProjectCard from "./projectCard"
import { projectType } from "./projectList"

const sampleProject: projectType = {
  title: "Sample Project",
  shortDescription: "Short description",
  description: "Detailed project description",
  technologies: ["React", "Next.js", "Jest"],
  link: "/sample-project",
  linkText: "Open app",
}

describe("Project Card", () => {
  test("renders without crashing", () => {
    render(<ProjectCard {...sampleProject} />)
    const link = screen.getByRole("link")
    expect(link).toBeInTheDocument
  })
})
