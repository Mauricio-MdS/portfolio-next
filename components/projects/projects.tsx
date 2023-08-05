import { TypographyH2 } from "../ui/typography"
import ProjectCard from "./projectCard"
import { projectList } from "./projectList"

export default function Projects() {
  return (
    <>
      <section className="container">
        <TypographyH2>Projects</TypographyH2>
      </section>
      <div className="flex justify-center flex-wrap mt-4 container">
        {projectList.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </>
  )
}
