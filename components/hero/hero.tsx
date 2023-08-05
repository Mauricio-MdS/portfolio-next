import { buttonVariants } from "@/components/ui/button"
import {
  TypographyA,
  TypographyH1,
  TypographyH2,
  TypographyLarge,
} from "@/components/ui/typography"
import { AiFillLinkedin } from "react-icons/ai"
import { VscGithub, VscMail } from "react-icons/vsc"

export default function Hero() {
  return (
    <header className="max-w-max container">
      <TypographyH1>Maurício Silva</TypographyH1>
      <TypographyH2 className="mt-4">
        Full Stack Software Developer at{" "}
        <TypographyA href="https://www.capgemini.com/">Capgemini</TypographyA>
      </TypographyH2>
      <TypographyLarge>
        I build accessible and reliable products for the web.
      </TypographyLarge>
      <address className="text-center mt-4">
        <a
          href="https://www.linkedin.com/in/mauricio-mds/"
          className={buttonVariants({ variant: "ghost" })}
        >
          <AiFillLinkedin className="h-8 w-8" title="Linkedin" />
        </a>
        <a
          href="https://github.com/mauricio-mds"
          className={buttonVariants({ variant: "ghost" })}
        >
          <VscGithub className="h-8 w-8" title="Github" />
        </a>
        <a
          href="mailto:mauricio.martins.silva@gmail.com"
          className={buttonVariants({ variant: "ghost" })}
        >
          <VscMail
            className="h-8 w-8"
            title="Mail to mauricio.martins.silva@gmail.com"
          />
        </a>
      </address>
    </header>
  )
}
