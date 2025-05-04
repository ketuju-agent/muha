import { StarIcon } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="w-full flex justify-center py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trusted by Thousands of Businesses</h2>
          <p className="text-xl text-muted-foreground">
            See what our customers have to say about our document templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="These templates have saved our legal team countless hours. They're professionally crafted and easy to customize."
            author="Sarah Johnson"
            role="Legal Director"
            company="TechCorp Inc."
            rating={5}
          />
          <TestimonialCard
            quote="As a small business owner, I don't have the budget for a legal team. These templates give me peace of mind that my documents are legally sound."
            author="Michael Chen"
            role="Founder"
            company="Bright Solutions"
            rating={5}
          />
          <TestimonialCard
            quote="The templates are comprehensive and up-to-date with current regulations. They've become an essential part of our business operations."
            author="Jessica Martinez"
            role="HR Manager"
            company="Global Services Ltd."
            rating={4}
          />
        </div>

        <div className="mt-16 bg-background rounded-lg border p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-lg font-medium">4.9/5 from over 1,200 reviews</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Join thousands of satisfied customers</h3>
              <p className="text-muted-foreground mb-6">
                Our document templates have helped businesses of all sizes save time, reduce legal costs, and ensure
                compliance. Join our community of satisfied customers today.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Law Firms",
                  "Small Businesses",
                  "Startups",
                  "HR Departments",
                  "Real Estate Agencies",
                  "Freelancers",
                ].map((tag, i) => (
                  <div key={i} className="bg-muted rounded-full px-4 py-2 text-sm">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Happy customers"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating,
}: {
  quote: string
  author: string
  role: string
  company: string
  rating: number
}) {
  return (
    <div className="bg-background rounded-lg border p-6 transition-all hover:shadow-md">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
        {Array.from({ length: 5 - rating }).map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-muted" />
        ))}
      </div>
      <p className="mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-medium text-primary">{author.charAt(0)}</span>
        </div>
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-muted-foreground">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  )
}

