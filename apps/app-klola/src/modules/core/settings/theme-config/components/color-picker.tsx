"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Check, Pipette, RefreshCw } from "lucide-react"
import { Button } from "@ui/components/base/button"
import { Input } from "@ui/components/base/input"
import { Label } from "@ui/components/base/label"
import { Popover, PopoverContent, PopoverTrigger } from "@ui/components/base/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/base/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ui/components/base/tooltip"
import { Badge } from "@ui/components/base/badge"
import { themeOptions, getContrastColor, checkContrast, generateColorShades } from "../theme-config"

interface ColorPickerProps {
  value: string
  onChange: (value: string) => void
  label?: string
  description?: string
  showContrastWarning?: boolean
  contrastAgainst?: string
  showShades?: boolean
}

export function ColorPicker({
  value,
  onChange,
  label,
  description,
  showContrastWarning = false,
  contrastAgainst,
  showShades = false,
}: ColorPickerProps) {
  const [color, setColor] = useState(value || "#3b82f6")
  const [hexInput, setHexInput] = useState(value?.replace("#", "") || "3b82f6")
  const [shades, setShades] = useState<{ [key: string]: string }>({})
  const colorPickerRef = useRef<HTMLInputElement>(null)

  // Update internal state when value prop changes
  useEffect(() => {
    if (value) {
      setColor(value)
      setHexInput(value.replace("#", ""))

      if (showShades) {
        setShades(generateColorShades(value))
      }
    }
  }, [value, showShades])

  // Handle color change from the color picker
  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColor(newColor)
    setHexInput(newColor.replace("#", ""))
    onChange(newColor)

    if (showShades) {
      setShades(generateColorShades(newColor))
    }
  }

  // Handle hex input change
  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value.replace(/[^0-9A-Fa-f]/g, "").substring(0, 6)
    setHexInput(hex)

    // Only update the color if we have a valid hex
    if (hex.length === 6) {
      const newColor = `#${hex}`
      setColor(newColor)
      onChange(newColor)

      if (showShades) {
        setShades(generateColorShades(newColor))
      }
    }
  }

  // Handle predefined color selection
  const handlePredefinedColorSelect = (colorValue: string) => {
    setColor(colorValue)
    setHexInput(colorValue.replace("#", ""))
    onChange(colorValue)

    if (showShades) {
      setShades(generateColorShades(colorValue))
    }
  }

  // Open the native color picker when clicking the color preview
  const handleColorPreviewClick = () => {
    if (colorPickerRef.current) {
      colorPickerRef.current.click()
    }
  }

  // Generate random color
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`
    setColor(randomColor)
    setHexInput(randomColor.replace("#", ""))
    onChange(randomColor)

    if (showShades) {
      setShades(generateColorShades(randomColor))
    }
  }

  // Check contrast if needed
  const contrastInfo = showContrastWarning && contrastAgainst ? checkContrast(color, contrastAgainst) : null

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      {description && <p className="text-sm text-muted-foreground mb-2">{description}</p>}

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between border-2"
            style={{
              backgroundColor: color,
              color: getContrastColor(color),
              borderColor: getContrastColor(color) === "#000000" ? "#00000033" : "#ffffff33",
            }}
          >
            {color}
            <Pipette className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <Tabs defaultValue="picker">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="picker" className="flex-1">
                Picker
              </TabsTrigger>
              <TabsTrigger value="presets" className="flex-1">
                Presets
              </TabsTrigger>
              {showShades && (
                <TabsTrigger value="shades" className="flex-1">
                  Shades
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="picker" className="space-y-4">
              <div
                className="w-full h-32 rounded-md cursor-pointer relative overflow-hidden"
                style={{ backgroundColor: color }}
                onClick={handleColorPreviewClick}
              >
                <input
                  ref={colorPickerRef}
                  type="color"
                  value={color}
                  onChange={handleColorPickerChange}
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                />
                <Pipette className="absolute bottom-2 right-2 h-5 w-5 text-white drop-shadow-md" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="hex-input">Hex Color</Label>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5"
                    onClick={generateRandomColor}
                    title="Generate random color"
                  >
                    <RefreshCw className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center">
                  <span className="bg-muted px-3 py-2 rounded-l-md border border-r-0 border-input">#</span>
                  <Input
                    id="hex-input"
                    value={hexInput}
                    onChange={handleHexChange}
                    className="rounded-l-none"
                    placeholder="Enter hex color"
                  />
                </div>
              </div>

              {showContrastWarning && contrastAgainst && contrastInfo && (
                <div className="mt-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Contrast ratio:</span>
                    <Badge variant={contrastInfo.passes.aa ? "default" : "destructive"}>{contrastInfo.ratio}:1</Badge>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span>WCAG AA:</span>
                    <Badge variant={contrastInfo.passes.aa ? "default" : "destructive"}>
                      {contrastInfo.passes.aa ? "Pass" : "Fail"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span>WCAG AAA:</span>
                    <Badge variant={contrastInfo.passes.aaa ? "default" : "destructive"}>
                      {contrastInfo.passes.aaa ? "Pass" : "Fail"}
                    </Badge>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="presets">
              <div className="grid grid-cols-5 gap-2">
                {themeOptions.predefinedColors.map((presetColor) => (
                  <TooltipProvider key={presetColor.value}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-10 p-0 rounded-md"
                          style={{
                            backgroundColor: presetColor.value,
                            borderColor:
                              color === presetColor.value ? getContrastColor(presetColor.value) : "transparent",
                          }}
                          onClick={() => handlePredefinedColorSelect(presetColor.value)}
                        >
                          {color === presetColor.value && (
                            <Check className="h-4 w-4" style={{ color: getContrastColor(presetColor.value) }} />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{presetColor.name}</p>
                        <p className="text-xs opacity-70">{presetColor.value}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </TabsContent>

            {showShades && (
              <TabsContent value="shades">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Generated color shades:</p>
                  <div className="grid grid-cols-5 gap-2">
                    {Object.entries(shades).map(([shade, shadeColor]) => (
                      <TooltipProvider key={shade}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full h-10 p-0 rounded-md"
                              style={{
                                backgroundColor: shadeColor,
                                borderColor: "transparent",
                              }}
                              onClick={() => handlePredefinedColorSelect(shadeColor)}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{shade}</p>
                            <p className="text-xs opacity-70">{shadeColor}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </PopoverContent>
      </Popover>
    </div>
  )
}

