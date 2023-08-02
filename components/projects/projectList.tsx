export type projectType = {
  title: string
  shortDescription?: string
  description: string
  technologies: string[]
  link: string
  linkText: "Source Code" | "Open app"
}

export const projectList: projectType[] = [
  {
    title: "Portfolio v2",
    shortDescription: "You are looking at it right now",
    description:
      "Explore my redesigned portfolio website powered by Next.js and Tailwind CSS. With Next.js static generation, the site offers blazing-fast performance and SEO-friendly features.",
    technologies: ["Next.JS", "Typescript", "Tailwind", "React"],
    link: "https://github.com/Mauricio-MdS/portfolio-next",
    linkText: "Source Code",
  },
  {
    title: "Express CRUD API",
    shortDescription: "Create, Read, Update, and Delete posts",
    description:
      "RESTful CRUD API equipped with authentication and authorization capabilities. Authentication is required for all operations except reading, ensuring secure access. Furthermore, only the post creator possesses the authority to delete or update posts.",
    technologies: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "Typescript",
      "JsonWebToken",
      "Bcrypt",
    ],
    link: "https://github.com/Mauricio-MdS/crud-api",
    linkText: "Source Code",
  },
  {
    title: "Message Board",
    shortDescription: "Create and view messages",
    description:
      "Leave your messages on this interactive message board built using Node.js runtime. The board stores messages in MongoDB and presents them in an EJS view.",
    technologies: [
      "Node.js",
      "Javascript",
      "MongoDB",
      "Express.js",
      "Docker",
      "EJS",
    ],
    link: "https://msgboard.fly.dev/",
    linkText: "Open app",
  },
  {
    title: "Portfolio v1",
    shortDescription: "My previous portfolio page",
    description:
      "My previous portfolio site, crafted with React and MaterialUI. Although it has served me well, I have now transitioned to an improved version.",
    technologies: ["React", "Typescript", "MaterialUI"],
    link: "https://github.com/mauricio-mds",
    linkText: "Source Code",
  },
  {
    title: "Knight's Travails",
    shortDescription: "Calculates shortest route for a chess knight",
    description:
      "A Ruby CLI that outputs the quickest path a knight can take between two squares. Created as a challenge for The Odin Project.",
    technologies: ["Ruby"],
    link: "https://github.com/Mauricio-MdS/odin-knights-travails",
    linkText: "Source Code",
  },
]
