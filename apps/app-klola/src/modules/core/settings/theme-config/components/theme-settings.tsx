"use client"

import { useTheme } from "./theme-context"
import { themeOptions } from "../theme-config"
import { Button } from "@ui/components/base/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ui/components/base/card"
import { Label } from "@ui/components/base/label"
import { RadioGroup, RadioGroupItem } from "@ui/components/base/radio-group"
import { Moon, Sun, Laptop, Check } from "lucide-react"

export function ThemeSettings() {
  const { theme, setColorScheme, setPrimaryColor, setFontSize, setFontFamily } = useTheme()

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
        <CardDescription>Customize your application appearance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Color Scheme */}
        <div className="space-y-2">
          <Label>Color Scheme</Label>
          <div className="flex gap-2">
            <Button
              variant={theme.colorScheme === "light" ? "default" : "outline"}
              size="icon"
              onClick={() => setColorScheme("light")}
              className="w-10 h-10"
            >
              <Sun className="h-4 w-4" />
              <span className="sr-only">Light Mode</span>
            </Button>
            <Button
              variant={theme.colorScheme === "dark" ? "default" : "outline"}
              size="icon"
              onClick={() => setColorScheme("dark")}
              className="w-10 h-10"
            >
              <Moon className="h-4 w-4" />
              <span className="sr-only">Dark Mode</span>
            </Button>
            <Button
              variant={theme.colorScheme === "system" ? "default" : "outline"}
              size="icon"
              onClick={() => setColorScheme("system")}
              className="w-10 h-10"
            >
              <Laptop className="h-4 w-4" />
              <span className="sr-only">System Mode</span>
            </Button>
          </div>
        </div>

        {/* Primary Color */}
        <div className="space-y-2">
          <Label>Primary Color</Label>
          <div className="flex flex-wrap gap-2">
            {/* {themeOptions.primaryColors.map((color) => (
              <Button
                key={color}
                variant="outline"
                size="icon"
                onClick={() => setPrimaryColor(color)}
                className={`w-10 h-10 rounded-full`}
                style={{ backgroundColor: `hsl(var(--color-${color}))` }}
              >
                {theme.primaryColor === color && <Check className="h-4 w-4 text-white" />}
                <span className="sr-only">{color}</span>
              </Button>
            ))} */}
          </div>
        </div>

        {/* Font Size */}
        <div className="space-y-2">
          <Label>Font Size</Label>
          <RadioGroup
            value={theme.fontSize}
            onValueChange={(value) => setFontSize(value as any)}
            className="flex gap-2"
          >
            {/* {themeOptions.fontSizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <RadioGroupItem value={size} id={`size-${size}`} />
                <Label htmlFor={`size-${size}`} className="capitalize">
                  {size}
                </Label>
              </div>
            ))} */}
          </RadioGroup>
        </div>

        {/* Font Family */}
        <div className="space-y-2">
          <Label>Font Family</Label>
          <RadioGroup
            value={theme.fontFamily}
            onValueChange={(value) => setFontFamily(value as any)}
            className="flex flex-col gap-2"
          >
            {/* {themeOptions.fontFamilies.map((family) => (
              <div key={family} className="flex items-center space-x-2">
                <RadioGroupItem value={family} id={`family-${family}`} />
                <Label htmlFor={`family-${family}`} className={`capitalize font-${family}`}>
                  {family} - The quick brown fox jumps over the lazy dog
                </Label>
              </div>
            ))} */}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

