"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface CategoryOption {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

interface CategoryDropdownProps {
  options: CategoryOption[]
  selectedId: string
  onSelect: (id: string) => void
}

export function CategoryDropdown({ options, selectedId, onSelect }: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedOption = options.find((option) => option.id === selectedId) || options[0]

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Selected option display - fixed height */}
      <div
        className="flex items-center justify-between w-full p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{ height: "116px" }} // Fixed height to match desktop view
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 flex-shrink-0">{selectedOption.icon}</div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold truncate">{selectedOption.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{selectedOption.description}</p>
          </div>
        </div>
        <ChevronDown className={`transition-transform duration-200 flex-shrink-0 ml-2 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {/* Dropdown options - fixed position */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden">
          {options.map(
            (option) =>
              option.id !== selectedId && (
                <div
                  key={option.id}
                  className="flex items-start gap-3 p-4 hover:bg-muted cursor-pointer transition-colors"
                  style={{ height: "116px" }} // Fixed height to match desktop view
                  onClick={() => {
                    onSelect(option.id)
                    setIsOpen(false)
                  }}
                >
                  <div className="mt-1 flex-shrink-0">{option.icon}</div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold truncate">{option.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{option.description}</p>
                  </div>
                </div>
              ),
          )}
        </div>
      )}
    </div>
  )
}

