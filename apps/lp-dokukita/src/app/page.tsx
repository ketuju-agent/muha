"use client"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TemplatesSection from "@/components/templates-section"
import CategoriesSection from "@/components/categories-section"
import PricingSection from "@/components/pricing-section"
import { Faqs } from "@/components/faq-section"


function Divider() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1082px] border-t border-dashed border-black/10 mx-4 md:mx-12"></div>
    </div>
  )
}
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-gray-50 flex flex-col items-center pt-12 md:pt-24">
        <HeroSection />
      </div>
      <div className="pt-12 pb-16 md:pt-28 flex flex-col items-center">
        <div className="max-w-[1082px]">
          <TemplatesSection />
          <CategoriesSection />
          <Divider />
          <FeaturesSection />
          <Divider />
          <PricingSection />
          <Divider />
          <Faqs />
        </div>
      </div>
    </main>
  )
}

