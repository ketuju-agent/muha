import { Inter, Roboto, Poppins, Lora, Playfair_Display, JetBrains_Mono, Source_Code_Pro } from "next/font/google"

// Sans-serif fonts
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

// Serif fonts
export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
})

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

// Monospace fonts
export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
})

export const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code",
})

// Font categories
export const fontCategories = {
  sans: [
    { name: "Inter", variable: "--font-inter" },
    { name: "Roboto", variable: "--font-roboto" },
    { name: "Poppins", variable: "--font-poppins" },
  ],
  serif: [
    { name: "Lora", variable: "--font-lora" },
    { name: "Playfair Display", variable: "--font-playfair" },
  ],
  mono: [
    { name: "JetBrains Mono", variable: "--font-jetbrains" },
    { name: "Source Code Pro", variable: "--font-source-code" },
  ],
}

// All fonts array for easier iteration
export const allFonts = [...fontCategories.sans, ...fontCategories.serif, ...fontCategories.mono]

// Font variables string for the HTML element
export const fontVariables = [
  inter.variable,
  roboto.variable,
  poppins.variable,
  lora.variable,
  playfair.variable,
  jetbrains.variable,
  sourceCode.variable,
].join(" ")

