import About from "@/components/about/about"
import Hero from "../components/hero/hero"
import Projects from "@/components/projects/projects"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
