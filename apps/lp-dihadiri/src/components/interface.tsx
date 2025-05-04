import Image from "next/image"

export function Interface() {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-lg bg-[#F3F4F6] p-4">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-white">
          <div className="absolute left-0 top-0 flex h-12 w-full items-center gap-2 border-b bg-white px-4">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#F3F4F6]">
              <svg className="h-4 w-4 text-gray-500" viewBox="0 0 16 16" fill="none">
                <path d="M9.5 14l-4-6 4-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="h-8 w-[200px] rounded bg-[#F3F4F6]" />
            <div className="ml-auto flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-[#F3F4F6]" />
              <div className="h-8 w-8 rounded bg-[#F3F4F6]" />
              <div className="h-8 w-8 rounded-full bg-[#F3F4F6]" />
            </div>
          </div>
          <div className="absolute inset-0 mt-12 grid grid-cols-12 gap-4 p-4">
            <div className="col-span-3 space-y-4">
              <div className="aspect-square w-full rounded-lg bg-[#F3F4F6]" />
              <div className="aspect-square w-full rounded-lg bg-[#F3F4F6]" />
              <div className="aspect-square w-full rounded-lg bg-[#F3F4F6]" />
            </div>
            <div className="col-span-6 rounded-lg bg-[#F3F4F6]" />
            <div className="col-span-3 space-y-4">
              <div className="aspect-square w-full rounded-lg bg-[#F3F4F6]" />
              <div className="aspect-square w-full rounded-lg bg-[#F3F4F6]" />
              <div className="aspect-square w-full rounded-lg bg-[#F3F4F6]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

