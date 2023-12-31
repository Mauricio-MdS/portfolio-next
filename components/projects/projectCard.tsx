import Link from "next/link"
import { Badge } from "../ui/badge"
import {
  ClickableCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { TypographyP } from "../ui/typography"
import { projectType } from "./projectList"

export default function ProjectCard({
  title,
  shortDescription,
  description,
  technologies,
  link,
  linkText,
}: projectType) {
  return (
    <Link href={link} className="flex" title={linkText}>
      <ClickableCard className="min-w-[320px] max-w-[350px] m-4 flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {shortDescription && (
            <CardDescription>{shortDescription}.</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <TypographyP>{description}</TypographyP>
        </CardContent>
        <div className="flex-grow"></div>
        <CardFooter className="flex flex-wrap justify-end">
          {technologies.map((tech) => (
            <Badge variant="secondary" className="ml-2 mt-1" key={tech}>
              {tech}
            </Badge>
          ))}
        </CardFooter>
      </ClickableCard>
    </Link>
  )
}
