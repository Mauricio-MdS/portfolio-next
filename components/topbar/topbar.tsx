"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function TopBar() {
  const { setTheme, theme } = useTheme()

  const clickhandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <div className="container flex justify-end p-0">
      <Button
        variant="ghost"
        size="icon"
        onClick={clickhandler}
        title="Toggle theme"
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </div>
  )
}
