"use client"

import React, { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function TopBar() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (theme === "system") {
      const systemPreferredTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light"
      setTheme(systemPreferredTheme)
    }
    setLoaded(true)
  }, [setTheme, theme])

  return (
    <div className="container flex justify-end p-0">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        title="Toggle theme"
      >
        {loaded &&
          (theme === "light" ? (
            <Sun data-testid="Sun" />
          ) : (
            <Moon data-testid="Moon" />
          ))}
      </Button>
    </div>
  )
}
