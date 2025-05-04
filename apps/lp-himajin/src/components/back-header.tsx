import { ArrowLeft, MoreVertical, Share } from 'lucide-react'
import Link from 'next/link'

interface BackHeaderProps {
  title?: string
}

export function BackHeader({ title }: BackHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-[480px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          {title && <h1 className="text-lg font-medium">{title}</h1>}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-gray-900">
            <Share className="h-5 w-5" />
          </button>
          <button className="text-gray-700 hover:text-gray-900">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

