import { ArrowRight } from 'lucide-react'

export function AITools() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">AI-Powered Design Tools</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="text-xl font-semibold">Erase and Fill</h3>
            <p className="mt-2 text-gray-600">
              Easily remove objects from your imgs and let AI seamlessly fill the gaps.
            </p>
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/placeholder.svg"
                alt="Erase and Fill Example"
                className="h-full w-full object-cover"
                width={400}
                height={300}
              />
            </div>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="text-xl font-semibold">img Sets</h3>
            <p className="mt-2 text-gray-600">
              Use a base img to generate multiple imgs that match your prompts while keeping the style.
            </p>
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/placeholder.svg"
                alt="img Sets Example"
                className="h-full w-full object-cover"
                width={400}
                height={300}
              />
            </div>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="text-xl font-semibold">Text Generator</h3>
            <p className="mt-2 text-gray-600">
              Let AI re-write copy or generate fresh ideas to fit your design's tone and style.
            </p>
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/placeholder.svg"
                alt="Text Generator Example"
                className="h-full w-full object-cover"
                width={400}
                height={300}
              />
            </div>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

