import About from "@/components/about/about"
import Hero from "../components/hero/hero"
import Projects from "@/components/projects/projects"
import TopBar from "@/components/topbar/topbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <TopBar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
