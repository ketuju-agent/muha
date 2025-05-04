"use client"
import { Badge } from "@ui/components/base/badge"
import { Button } from "@ui/components/base/button"
import { Input } from "@ui/components/base/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/base/select"
import { Download } from "lucide-react"

const colorClasses = [
  "bg-blue-500 dark:bg-blue-500",
  "bg-purple-500 dark:bg-purple-500",
  "bg-emerald-500 dark:bg-emerald-500",
  "bg-cyan-500 dark:bg-cyan-500",
  "bg-rose-500 dark:bg-rose-500",
  "bg-indigo-500 dark:bg-indigo-500",
]

const getRandomColor = (initials: string) => {
  const seed = initials
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return colorClasses[seed % colorClasses.length]
}
export default function Overview() {
  return (
    <section aria-label="Overview Table">
      <div className="flex flex-col justify-between gap-2 px-4 py-6 sm:flex-row sm:items-center sm:p-6">
        <Input
          type="search"
          placeholder="Search quotes..."
          className="sm:w-64 [&>input]:py-1.5"
        />
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Select>
            <SelectTrigger className="w-full py-1.5 sm:w-44">
              <SelectValue placeholder="Assigned to..." />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="1">Harry Granger</SelectItem>
              <SelectItem value="2">Hermoine Weasley</SelectItem>
              <SelectItem value="3">Emma Stone</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="secondary"
            className="w-full gap-2 py-1.5 text-base sm:w-fit sm:text-sm"
          >
            <Download
              className="-ml-0.5 size-4 shrink-0 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
            />
            Export
          </Button>
        </div>
      </div>
    </section>
  )
}
