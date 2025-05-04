"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { type ThemeConfig, defaultThemeConfig } from "../theme-config"

type ThemeContextType = {
  theme: ThemeConfig
  setTheme: (theme: ThemeConfig) => void
  setColorScheme: (colorScheme: ThemeConfig["colorScheme"]) => void
  setPrimaryColor: (primaryColor: string) => void
  setFontSize: (fontSize: string) => void // Make sure this matches the type in ThemeConfig
  setFontFamily: (fontFamily: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeConfig>(defaultThemeConfig)

  // Load theme from localStorage on client side
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-config")
    if (savedTheme) {
      setThemeState(JSON.parse(savedTheme))
    }
  }, [])

  // Apply theme changes
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("theme-config", JSON.stringify(theme))

    // Apply color scheme
    const root = document.documentElement

    // Handle color scheme
    if (
      theme.colorScheme === "dark" ||
      (theme.colorScheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    // Apply primary color
    root.style.setProperty("--color-primary", theme.primaryColor)

    // Apply font size
    root.dataset.fontSize = theme.fontSize

    // Apply font family
    root.dataset.fontFamily = theme.fontFamily

    // Remove all font family classes first
    root.classList.remove("font-sans", "font-serif", "font-mono")

    // Add the selected font family class
    root.classList.add(`font-${theme.fontFamily.replace("--font-", "")}`)
  }, [theme])

  // Theme setter functions
  const setTheme = (newTheme: ThemeConfig) => {
    setThemeState(newTheme)
  }

  const setColorScheme = (colorScheme: ThemeConfig["colorScheme"]) => {
    setThemeState((prev: ThemeConfig) => ({ ...prev, colorScheme }))
  }

  const setPrimaryColor = (primaryColor: string) => {
    setThemeState((prev: ThemeConfig) => ({ ...prev, primaryColor }))
  }

  const setFontSize = (fontSize: string) => {
    setThemeState((prev: ThemeConfig) => ({ ...prev, fontSize }))
  }

  const setFontFamily = (fontFamily: string) => {
    setThemeState((prev: ThemeConfig) => ({ ...prev, fontFamily }))
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        setColorScheme,
        setPrimaryColor,
        setFontSize,
        setFontFamily,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

