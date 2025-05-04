export default function PricingSection() {
    return (
      <section className="w-full flex justify-center py-12 md:py-36">
        <div className="w-full max-w-[1082px] px-4 md:px-12">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-medium mb-2">
                Pricing Plans.{" "}
                <i className="font-normal text-muted-foreground">Choose the right plan for your business.</i>
              </h2>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <PricingCard
                title="Basic"
                price="$49"
                description="Perfect for small businesses and startups"
                features={["Access to 50+ templates", "Word and PDF formats", "Email support", "Monthly updates"]}
              />
              <PricingCard
                title="Professional"
                price="$99"
                description="Ideal for growing businesses"
                features={[
                  "Access to 200+ templates",
                  "All file formats",
                  "Priority support",
                  "Weekly updates",
                  "Custom branding",
                ]}
                popular={true}
              />
              <PricingCard
                title="Enterprise"
                price="$199"
                description="For larger organizations"
                features={[
                  "Access to all 500+ templates",
                  "All file formats",
                  "24/7 support",
                  "Daily updates",
                  "Custom branding",
                  "Custom template requests",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function PricingCard({
    title,
    price,
    description,
    features,
    popular,
  }: {
    title: string
    price: string
    description: string
    features: string[]
    popular?: boolean
  }) {
    return (
      <div className={`p-4 md:p-6 rounded-2xl ${popular ? "bg-primary/5 border-2 border-primary" : "bg-card"}`}>
        <div className="flex flex-col gap-3 md:gap-4">
          {popular && (
            <div className="inline-flex self-start rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Most Popular
            </div>
          )}
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="text-2xl md:text-3xl font-semibold">{price}</div>
          <p className="text-sm md:text-base text-muted-foreground">{description}</p>
          <ul className="space-y-2 text-sm md:text-base">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-primary shrink-0 mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className={`mt-2 md:mt-4 w-full rounded-md py-2 font-medium ${popular ? "bg-primary text-primary-foreground" : "bg-muted"}`}
          >
            Get Started
          </button>
        </div>
      </div>
    )
  }
  
  