import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, InstagramIcon as TiktokIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white py-6">
      <div className="max-w-[480px] mx-auto px-4">
        <div className="flex justify-center gap-4 text-sm text-gray-600 mb-6">
          <Link href="#" className="hover:text-green-600">
            Syarat & Ketentuan
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-green-600">
            Pusat Bantuan
          </Link>
        </div>
        
        <div className="flex justify-center gap-4 mb-6">
          <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200">
            <Youtube className="w-5 h-5" />
          </Link>
          <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200">
            <TiktokIcon className="w-5 h-5" />
          </Link>
          <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Copyright © 2013 - 2024 AquaJaya.</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

