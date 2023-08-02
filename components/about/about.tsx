import { TypographyA, TypographyH2, TypographyP } from "../ui/typography"

export default function About() {
  return (
    <section className="container">
      <TypographyH2>About</TypographyH2>
      <TypographyP>
        In the early 2000s, I took my first steps into the world of the web by
        creating a website that showcased the local bands in the coastal scene
        of Sao Paulo. Skip ahead to today, and I&#39;m having a lot of fun
        building some seriously awesome content for the web.
      </TypographyP>
      <TypographyP>
        My current focus revolves around crafting value for{" "}
        <TypographyA href="https://www.capgemini.com/">
          Capgemini&#39;s
        </TypographyA>{" "}
        clients through the realm of web development. The journey with{" "}
        <TypographyA href="https://www.capgemini.com/">Capgemini</TypographyA>{" "}
        has led me to exciting collaborations on significant projects. As a
        coding enthusiast, I&#39;m all in when it comes to tackling challenges
        on both the front and back ends. Lately, I&#39;ve been diving into the
        world of Next.js, an interesting amagalm of React and Node.js that&#39;s
        a paradise for a full stack dev.
      </TypographyP>
      <TypographyP>
        However, life isn&#39;t solely about code and pixels! When I&#39;m not
        engrossed in the digital realm, I&#39;m enjoying quality time with my
        partner and our doggy duo. You&#39;ll also find me calculating my next
        move in board games, or conjuring arcane spells in tabletop RPGs.
      </TypographyP>
      <TypographyP>
        So, if any of these things interests you, feel free to{" "}
        <TypographyA href="mailto:mauricio.martins.silva@gmail.com">
          reach out
        </TypographyA>
        .
      </TypographyP>
    </section>
  )
}
