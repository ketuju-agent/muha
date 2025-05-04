import Link from "next/link"
import { Button } from "@packages/ui/components/base/button"

export default function HeroSection() {
  return (
    <section className="w-full max-w-[1082px] flex justify-center py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              <span>New templates added weekly</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Template Dokumen Profesional untuk Bisnis Anda
            </h1>
            <p className="text-base md:text-xl text-muted-foreground">
            Koleksi template dokumen bisnis berkualitas tinggi yang siap pakai. Hemat waktu, tampil profesional, dan dapatkan perlindungan hukum yang Anda butuhkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/templates">
                  Jelajahi Kebutuhan
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="ml-1 transform rotate-225"
                  >
                    <rect width="20" height="20" x="0" y="0" fill="currentColor" fillOpacity="0.12" rx="8"></rect>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity=".8"
                      strokeWidth="1.5"
                      d="M8.5 4.812v6.5m0 0 2.5-2.5m-2.5 2.5L6 8.812"
                    ></path>
                  </svg>
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border-2 border-background"
                  >
                    <span className="font-medium text-xs">{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <span className="font-medium">5,000+</span> professionals trust our templates
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border">
              <div className="h-10 bg-muted flex items-center px-4 border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="h-8 bg-muted rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-4/6"></div>
                  </div>
                  <div className="h-10 bg-primary rounded w-1/3"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-8 -right-8 w-full h-full bg-primary/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

