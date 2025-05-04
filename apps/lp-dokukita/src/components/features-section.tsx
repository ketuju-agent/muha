import type React from "react"

const HeroSection = () => {
  return (
    <section className="py-12 md:py-36">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl md:whitespace-nowrap lg:text-6xl">
            Mainline your product.
          </h1>
          <p className="text-muted-foreground mt-5 font-sans text-2xl font-medium md:text-3xl lg:text-4xl">
            Mainline is the fit-for-purpose tool for planning and building modern software products.
          </p>
        </div>
        
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:ps-10">
          <div className="text-muted-foreground h-full w-px absolute top-0 left-0 max-lg:hidden">
            <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
          </div>
          <div className="text-muted-foreground h-px w-full absolute top-0 lg:hidden">
            <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
          </div>
          
          <FeaturePoint 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dot mt-1 size-4 shrink-0 lg:size-5">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
            }
            title="Tailored workflows"
            description="Track progress across custom issue flows for your team."
          />
          
          <FeaturePoint 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blend mt-1 size-4 shrink-0 lg:size-5">
                <circle cx="9" cy="9" r="7"></circle>
                <circle cx="15" cy="15" r="7"></circle>
              </svg>
            }
            title="Cross-team projects"
            description="Collaborate across teams and departments."
          />
          
          <FeaturePoint 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-diamond mt-1 size-4 shrink-0 lg:size-5">
                <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
              </svg>
            }
            title="Milestones"
            description="Break projects down into concrete phases."
          />
          
          <FeaturePoint 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column mt-1 size-4 shrink-0 lg:size-5">
                <line x1="18" x2="18" y1="20" y2="10"></line>
                <line x1="12" x2="12" y1="20" y2="4"></line>
                <line x1="6" x2="6" y1="20" y2="14"></line>
              </svg>
            }
            title="Progress insights"
            description="Track scope, velocity, and progress over time."
          />
        </div>
      </div>
    </section>
  );
};

// Helper component for the feature points to avoid repetition
const FeaturePoint = ({ icon, title, description }) => {
  return (
    <div className="flex gap-2.5 lg:gap-5">
      {icon}
      <div>
        <h2 className="font-inter font-semibold">{title}</h2>
        <p className="text-muted-foreground max-w-76 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;

