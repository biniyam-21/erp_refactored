"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("light")

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = storedTheme ?? (preferredDark ? "dark" : "light")
    setThemeState(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const setTheme = React.useCallback((value: Theme) => {
    setThemeState(value)
    window.localStorage.setItem("theme", value)
    document.documentElement.classList.toggle("dark", value === "dark")
  }, [])

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider.")
  }
  return context
}
