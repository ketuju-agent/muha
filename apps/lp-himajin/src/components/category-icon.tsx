import Image from "next/image"
import Link from "next/link"

interface CategoryIconProps {
  name: string
  icon: string
  href: string
}

export function CategoryIcon({ name, icon, href }: CategoryIconProps) {
  return (
    <Link href={href} className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-1">
        <Image src={icon} alt={name} width={20} height={20} className="w-5 h-5" />
      </div>
      <span className="text-xs text-center">{name}</span>
    </Link>
  )
}

