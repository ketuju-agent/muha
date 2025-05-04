"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Save, Download, Upload, Trash2, Copy, Check } from "lucide-react"
import { Button } from "@ui/components/base/button"
import { Input } from "@ui/components/base/input"
import { Label } from "@ui/components/base/label"
import { Card, CardContent } from "@ui/components/base/card"
import { ScrollArea } from "@ui/components/base/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/base/tabs"
import { THEME_CONFIG_KEY, SAVED_THEMES_KEY, type ThemeConfig } from "../theme-config"

interface SavedTheme {
  id: string
  name: string
  description: string
  config: ThemeConfig
  createdAt: string
}

export function ThemeManager({ currentConfig }: { currentConfig: ThemeConfig }) {
  const { setTheme } = useTheme()
  const [savedThemes, setSavedThemes] = useState<SavedTheme[]>([])
  const [newThemeName, setNewThemeName] = useState("")
  const [newThemeDescription, setNewThemeDescription] = useState("")
  const [importValue, setImportValue] = useState("")
  const [importError, setImportError] = useState("")
  const [copied, setCopied] = useState(false)

  // Load saved themes from localStorage
  useEffect(() => {
    const savedThemesJson = localStorage.getItem(SAVED_THEMES_KEY)
    if (savedThemesJson) {
      try {
        setSavedThemes(JSON.parse(savedThemesJson))
      } catch (e) {
        console.error("Failed to parse saved themes:", e)
      }
    }
  }, [])

  // Save current theme
  const saveCurrentTheme = () => {
    if (!newThemeName.trim()) return

    const newTheme: SavedTheme = {
      id: Date.now().toString(),
      name: newThemeName,
      description: newThemeDescription,
      config: currentConfig,
      createdAt: new Date().toISOString(),
    }

    const updatedThemes = [...savedThemes, newTheme]
    setSavedThemes(updatedThemes)
    localStorage.setItem(SAVED_THEMES_KEY, JSON.stringify(updatedThemes))

    // Reset form
    setNewThemeName("")
    setNewThemeDescription("")
  }

  // Apply a saved theme
  const applyTheme = (theme: SavedTheme) => {
    localStorage.setItem(THEME_CONFIG_KEY, JSON.stringify(theme.config))
    window.location.reload() // Reload to apply all theme changes
  }

  // Delete a saved theme
  const deleteTheme = (id: string) => {
    const updatedThemes = savedThemes.filter((theme) => theme.id !== id)
    setSavedThemes(updatedThemes)
    localStorage.setItem(SAVED_THEMES_KEY, JSON.stringify(updatedThemes))
  }

  // Export theme as JSON
  const exportTheme = (theme: SavedTheme) => {
    const themeJson = JSON.stringify(theme, null, 2)
    const blob = new Blob([themeJson], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${theme.name.toLowerCase().replace(/\s+/g, "-")}-theme.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Copy theme JSON to clipboard
  const copyThemeToClipboard = (theme: SavedTheme) => {
    navigator.clipboard.writeText(JSON.stringify(theme, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Import theme from JSON
  const importTheme = () => {
    try {
      setImportError("")
      const themeData = JSON.parse(importValue)

      // Validate imported data
      if (!themeData.name || !themeData.config) {
        throw new Error("Invalid theme data")
      }

      const newTheme: SavedTheme = {
        id: Date.now().toString(),
        name: themeData.name,
        description: themeData.description || "",
        config: themeData.config,
        createdAt: new Date().toISOString(),
      }

      const updatedThemes = [...savedThemes, newTheme]
      setSavedThemes(updatedThemes)
      localStorage.setItem(SAVED_THEMES_KEY, JSON.stringify(updatedThemes))

      // Reset form
      setImportValue("")
    } catch (e) {
      setImportError("Invalid JSON format. Please check your input.")
    }
  }

  return (
    <Tabs defaultValue="saved">
      <TabsList className="w-full mb-4">
        <TabsTrigger value="saved" className="flex-1">
          Saved Themes
        </TabsTrigger>
        <TabsTrigger value="save" className="flex-1">
          Save Current
        </TabsTrigger>
        <TabsTrigger value="import" className="flex-1">
          Import/Export
        </TabsTrigger>
      </TabsList>

      <TabsContent value="saved">
        <div className="space-y-4">
          {savedThemes.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No saved themes yet. Create your first theme!</p>
          ) : (
            <ScrollArea className="h-[300px]">
              <div className="space-y-3">
                {savedThemes.map((theme) => (
                  <Card key={theme.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex items-center">
                        <div className="w-16 h-full" style={{ backgroundColor: theme.config.primaryColor }} />
                        <div className="p-4 flex-1">
                          <div className="font-medium">{theme.name}</div>
                          {theme.description && <p className="text-sm text-muted-foreground">{theme.description}</p>}
                          <p className="text-xs text-muted-foreground mt-1">
                            Created: {new Date(theme.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-1 p-2">
                          <Button variant="ghost" size="icon" onClick={() => applyTheme(theme)} title="Apply theme">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => exportTheme(theme)} title="Export theme">
                            <Upload className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteTheme(theme.id)}
                            title="Delete theme"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </TabsContent>

      <TabsContent value="save">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme-name">Theme Name</Label>
            <Input
              id="theme-name"
              value={newThemeName}
              onChange={(e) => setNewThemeName(e.target.value)}
              placeholder="My Custom Theme"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="theme-description">Description (optional)</Label>
            <Input
              id="theme-description"
              value={newThemeDescription}
              onChange={(e) => setNewThemeDescription(e.target.value)}
              placeholder="A brief description of your theme"
            />
          </div>
          <Button onClick={saveCurrentTheme} disabled={!newThemeName.trim()} className="w-full">
            <Save className="mr-2 h-4 w-4" />
            Save Current Theme
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="import">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="import-json">Import Theme (JSON)</Label>
            <textarea
              id="import-json"
              value={importValue}
              onChange={(e) => setImportValue(e.target.value)}
              placeholder="Paste theme JSON here..."
              className="w-full min-h-[150px] p-2 rounded-md border border-input bg-transparent"
            />
            {importError && <p className="text-sm text-destructive">{importError}</p>}
          </div>
          <Button onClick={importTheme} disabled={!importValue.trim()} className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            Import Theme
          </Button>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center mb-2">
              <Label>Export Current Theme</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  copyThemeToClipboard({
                    id: "current",
                    name: "Current Theme",
                    description: "Exported current theme",
                    config: currentConfig,
                    createdAt: new Date().toISOString(),
                  })
                }
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy JSON
                  </>
                )}
              </Button>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                exportTheme({
                  id: "current",
                  name: "Current Theme",
                  description: "Exported current theme",
                  config: currentConfig,
                  createdAt: new Date().toISOString(),
                })
              }
            >
              <Download className="mr-2 h-4 w-4" />
              Download Theme JSON
            </Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

