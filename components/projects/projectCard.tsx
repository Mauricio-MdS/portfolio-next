import { Badge } from "../ui/badge"
import { buttonVariants } from "../ui/button"
import {
  Card,
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
    <Card className="w-[350px] m-4 flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {shortDescription && (
          <CardDescription>{shortDescription}.</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <TypographyP>{description}</TypographyP>
        <div className="mt-4">
          {technologies.map((tech) => (
            <Badge variant="secondary" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <div className="flex-grow"></div>
      <CardFooter className="flex justify-center">
        {
          <a href={link} className={buttonVariants({ variant: "outline" })}>
            {linkText}
          </a>
        }
      </CardFooter>
    </Card>
  )
}
