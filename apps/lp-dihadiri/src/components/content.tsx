import { ArrowRight } from 'lucide-react'

export function Content() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-medium text-purple-600">Marketing</span>
          <h2 className="mt-2 text-[40px] font-bold leading-tight tracking-tight text-black">
            Create Content That Grabs Attention
          </h2>
          <p className="mt-4 text-[15px] text-[#6B7280]">
            Stunning Social Media Templates
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-green-500" fill="none" stroke="currentColor">
                <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[15px] text-[#6B7280]">Effortless Image Editing</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-green-500" fill="none" stroke="currentColor">
                <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[15px] text-[#6B7280]">Content Organization to Drive Follow Share</span>
            </div>
          </div>
          <a
            href="#"
            className="group mt-8 inline-flex items-center gap-2 rounded-[4px] bg-black px-5 py-3 text-[15px] font-medium text-white hover:bg-[#111827]"
          >
            Try Kittl for Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="h-[400px] bg-[#F3F4F6]"></div>
      </div>
    </section>
  )
}

