export type ColorScheme = "light" | "dark" | "system"

export type ThemeConfig = {
  // Color System
  colorScheme: ColorScheme
  primaryColor: string
  secondaryColor: string
  semanticColors: {
    success: string
    warning: string
    error: string
    info: string
  }
  backgroundColors: {
    page: string
    card: string
    modal: string
  }

  // Typography
  fontFamily: string
  fontSize: string
  customFontUrl: string
  baseFontSize: number
  scaleRatio: number
  fontWeights: {
    headings: number
    body: number
  }

  // Spacing and Layout
  density: "compact" | "standard" | "comfortable"
  borderRadius: number
  shadowDepth: number

  // Component Theming
  buttonStyles: {
    primaryBg: string
    secondaryBg: string
    tertiaryBg: string
  }
  inputStyles: {
    borderColor: string
    focusBorderColor: string
    errorBorderColor: string
  }
  tableStyles: {
    headerBg: string
    rowBg: string
    borderColor: string
  }
}

// Update the defaultThemeConfig to include the fontSize property
export const defaultThemeConfig: ThemeConfig = {
  // Color System
  colorScheme: "light",
  primaryColor: "#3b82f6", // Blue
  secondaryColor: "#10b981", // Emerald
  semanticColors: {
    success: "#22c55e", // Green
    warning: "#f59e0b", // Amber
    error: "#ef4444", // Red
    info: "#3b82f6", // Blue
  },
  backgroundColors: {
    page: "#ffffff",
    card: "#f9fafb",
    modal: "#ffffff",
  },

  // Typography
  fontFamily: "--font-inter",
  fontSize: "md", // Add this property with a default value
  customFontUrl: "",
  baseFontSize: 16,
  scaleRatio: 1.2,
  fontWeights: {
    headings: 600,
    body: 400,
  },

  // Spacing and Layout
  density: "standard",
  borderRadius: 8,
  shadowDepth: 2,

  // Component Theming
  buttonStyles: {
    primaryBg: "#3b82f6", // Blue
    secondaryBg: "#f3f4f6", // Gray-100
    tertiaryBg: "transparent",
  },
  inputStyles: {
    borderColor: "#d1d5db", // Gray-300
    focusBorderColor: "#3b82f6", // Blue
    errorBorderColor: "#ef4444", // Red
  },
  tableStyles: {
    headerBg: "#f9fafb", // Gray-50
    rowBg: "#ffffff",
    borderColor: "#e5e7eb", // Gray-200
  },
}

// Dark mode defaults
export const darkThemeDefaults = {
  backgroundColors: {
    page: "#111827", // Gray-900
    card: "#1f2937", // Gray-800
    modal: "#1f2937", // Gray-800
  },
  buttonStyles: {
    secondaryBg: "#374151", // Gray-700
  },
  inputStyles: {
    borderColor: "#4b5563", // Gray-600
  },
  tableStyles: {
    headerBg: "#1f2937", // Gray-800
    rowBg: "#111827", // Gray-900
    borderColor: "#374151", // Gray-700
  },
}

// Available theme options
export const themeOptions = {
  colorSchemes: ["light", "dark", "system"] as ColorScheme[],
  densityOptions: ["compact", "standard", "comfortable"] as const,
  borderRadiusOptions: [0, 4, 8, 12, 16, 24],
  shadowDepthOptions: [0, 1, 2, 3, 4, 5],
  fontWeightOptions: [300, 400, 500, 600, 700, 800],
  fontSizeOptions: [12, 14, 16, 18, 20],
  scaleRatioOptions: [1.067, 1.125, 1.2, 1.25, 1.333, 1.414, 1.5],
  predefinedColors: [
    { name: "Blue", value: "#3b82f6" },
    { name: "Red", value: "#ef4444" },
    { name: "Green", value: "#22c55e" },
    { name: "Purple", value: "#a855f7" },
    { name: "Orange", value: "#f97316" },
    { name: "Pink", value: "#ec4899" },
    { name: "Teal", value: "#14b8a6" },
    { name: "Yellow", value: "#eab308" },
    { name: "Indigo", value: "#6366f1" },
    { name: "Slate", value: "#64748b" },
  ],
}

// Local storage keys
export const THEME_CONFIG_KEY = "theme-config"
export const SAVED_THEMES_KEY = "saved-themes"

// Helper function to convert hex to hsl
export function hexToHSL(hex: string): string {
  // Remove the # if present
  hex = hex.replace("#", "")

  // Convert hex to rgb
  const r = Number.parseInt(hex.substring(0, 2), 16) / 255
  const g = Number.parseInt(hex.substring(2, 4), 16) / 255
  const b = Number.parseInt(hex.substring(4, 6), 16) / 255

  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b)
  const cmax = Math.max(r, g, b)
  const delta = cmax - cmin
  let h = 0
  let s = 0
  let l = 0

  // Calculate hue
  if (delta === 0) {
    h = 0
  } else if (cmax === r) {
    h = ((g - b) / delta) % 6
  } else if (cmax === g) {
    h = (b - r) / delta + 2
  } else {
    h = (r - g) / delta + 4
  }

  h = Math.round(h * 60)
  if (h < 0) h += 360

  // Calculate lightness
  l = (cmax + cmin) / 2

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

  // Convert to percentages
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  return `${h} ${s}% ${l}%`
}

// Helper function to get contrasting text color (black or white) for a background
export function getContrastColor(hex: string): string {
  // Remove the # if present
  hex = hex.replace("#", "")

  // Convert hex to rgb
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)

  // Calculate luminance using the formula from WCAG 2.0
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  // Return black for light colors, white for dark colors
  return luminance > 0.5 ? "#000000" : "#ffffff"
}

// Generate lighter and darker shades of a color
export function generateColorShades(hex: string): { [key: string]: string } {
  const shades: { [key: string]: string } = {}

  // Remove the # if present
  hex = hex.replace("#", "")

  // Convert hex to rgb
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)

  // Generate 9 shades (50, 100, 200, ..., 900)
  for (let i = 1; i <= 9; i++) {
    // Calculate shade percentage (lighter to darker)
    const percent = i * 10

    // For lighter shades (50, 100, 200, 300, 400)
    if (i <= 5) {
      const factor = 1 + (5 - i) * 0.1
      const newR = Math.min(255, Math.round(r * factor + (255 - r) * (1 - factor)))
      const newG = Math.min(255, Math.round(g * factor + (255 - g) * (1 - factor)))
      const newB = Math.min(255, Math.round(b * factor + (255 - b) * (1 - factor)))

      shades[i * 100] =
        `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`
    }
    // For darker shades (500, 600, 700, 800, 900)
    else {
      const factor = 1 - (i - 5) * 0.15
      const newR = Math.max(0, Math.round(r * factor))
      const newG = Math.max(0, Math.round(g * factor))
      const newB = Math.max(0, Math.round(b * factor))

      shades[i * 100] =
        `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`
    }
  }

  // Add the 50 shade (very light)
  const factor = 0.95
  const newR = Math.min(255, Math.round(r * factor + (255 - r) * (1 - factor)))
  const newG = Math.min(255, Math.round(g * factor + (255 - g) * (1 - factor)))
  const newB = Math.min(255, Math.round(b * factor + (255 - b) * (1 - factor)))

  shades[50] = `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`

  // Add the original color as 500
  shades[500] = `#${hex}`

  return shades
}

// Check color contrast for accessibility
export function checkContrast(
  foreground: string,
  background: string,
): {
  ratio: number
  passes: { aa: boolean; aaa: boolean }
} {
  // Remove the # if present
  foreground = foreground.replace("#", "")
  background = background.replace("#", "")

  // Convert hex to rgb
  const fgR = Number.parseInt(foreground.substring(0, 2), 16)
  const fgG = Number.parseInt(foreground.substring(2, 4), 16)
  const fgB = Number.parseInt(foreground.substring(4, 6), 16)

  const bgR = Number.parseInt(background.substring(0, 2), 16)
  const bgG = Number.parseInt(background.substring(2, 4), 16)
  const bgB = Number.parseInt(background.substring(4, 6), 16)

  // Calculate relative luminance
  const getLuminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map((v) => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
  }

  const fgLum = getLuminance(fgR, fgG, fgB)
  const bgLum = getLuminance(bgR, bgG, bgB)

  // Calculate contrast ratio
  const ratio = (Math.max(fgLum, bgLum) + 0.05) / (Math.min(fgLum, bgLum) + 0.05)

  // Check against WCAG standards
  return {
    ratio: Number.parseFloat(ratio.toFixed(2)),
    passes: {
      aa: ratio >= 4.5,
      aaa: ratio >= 7,
    },
  }
}

// Calculate font sizes based on base size and scale ratio
export function calculateTypeScale(baseSize: number, ratio: number): { [key: string]: string } {
  return {
    xs: `${(baseSize / ratio / ratio).toFixed(2)}px`,
    sm: `${(baseSize / ratio).toFixed(2)}px`,
    base: `${baseSize}px`,
    lg: `${(baseSize * ratio).toFixed(2)}px`,
    xl: `${(baseSize * ratio * ratio).toFixed(2)}px`,
    "2xl": `${(baseSize * ratio * ratio * ratio).toFixed(2)}px`,
    "3xl": `${(baseSize * ratio * ratio * ratio * ratio).toFixed(2)}px`,
    "4xl": `${(baseSize * ratio * ratio * ratio * ratio * ratio).toFixed(2)}px`,
  }
}

// Generate shadow values based on depth
export function generateShadows(depth: number): { [key: string]: string } {
  const shadows = {
    0: "none",
    1: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    2: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    3: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    4: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    5: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  }

  return {
    sm: shadows[Math.max(0, depth - 1) as keyof typeof shadows],
    DEFAULT: shadows[depth as keyof typeof shadows],
    md: shadows[Math.min(5, depth + 1) as keyof typeof shadows],
    lg: shadows[Math.min(5, depth + 2) as keyof typeof shadows],
    xl: shadows[Math.min(5, depth + 3) as keyof typeof shadows],
  }
}

// Generate spacing values based on density
export function generateSpacing(density: "compact" | "standard" | "comfortable"): { [key: string]: string } {
  const baseUnit = density === "compact" ? 4 : density === "standard" ? 4 : 6

  const spacing: { [key: string]: string } = {}

  // Generate spacing values (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60,
  // 64, 72, 80, 96)
  ;[
    0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60,
    64, 72, 80, 96,
  ].forEach((multiplier) => {
    const key = multiplier.toString().replace(".", "\\.")
    spacing[key] = `${multiplier * baseUnit}px`
  })

  return spacing
}

