"use client"

import React from 'react';

import { useState } from "react"

import Image from "next/image"
import {
  Blend,
  Bug,
  Bell,
  Check,
  BarChartIcon as ChartNoAxesColumn,
  CircleDot,
  Diamond,
  Sparkles,
} from "lucide-react"
import { Button } from "@packages/ui/components/base/button"
import { Card, CardContent } from "@packages/ui/components/base/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@packages/ui/components/base/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@packages/ui/components/base/accordion"
import { Switch } from "@packages/ui/components/base/switch"
import { CategoryDropdown } from "@/components/category-dropdown"
import { Hero } from '@/components/hero';
import { Usps } from '@/components/usps';
import { VideoCarousel } from '@/components/video-carousel';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
      <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />

        <section id="features" className="py-10 md:py-20 lg:py-32">
          <div className="container container-flat">
            <div className="flex flex-col gap-3 md:flex-row">
              <h2 className="flex-1 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
                Dibuat khusus untuk momen spesial Anda
              </h2>
              <p className="text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end">
                InviteMe dibangun dengan fokus pada keindahan, kemudahan, dan personalisasi untuk membuat undangan
                digital yang sesuai dengan kepribadian Anda.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-3">
              <div className="relative flex [aspect-ratio:3.5/2.6] flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-b from-muted to-mint md:[aspect-ratio:3.8/4]">
                <div className="p-8 pb-2">
                  <Bell className="fill-primary size-10" />
                </div>
                <div className="p-6">
                  <div className="text-6xl font-semibold tracking-tight">100%</div>
                  <div className="text-xl font-semibold tracking-tight">Lebih hemat</div>
                </div>
              </div>
              <div className="relative flex [aspect-ratio:3.5/2.6] flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-b from-muted to-mint md:[aspect-ratio:3.8/4]">
                <div className="p-8 pb-2">
                  <Sparkles className="fill-primary size-10" />
                </div>
                <div className="p-6">
                  <div className="text-6xl font-semibold tracking-tight">24/7</div>
                  <div className="text-xl font-semibold tracking-tight">Akses online</div>
                </div>
              </div>
              <div className="relative flex [aspect-ratio:3.5/2.6] flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-b from-muted to-mint md:[aspect-ratio:3.8/4]">
                <div className="p-8 pb-2">
                  <Bug className="fill-primary size-10" />
                </div>
                <div className="p-6">
                  <div className="text-6xl font-semibold tracking-tight">0%</div>
                  <div className="text-xl font-semibold tracking-tight">Limbah kertas</div>
                </div>
              </div>
            </div>
            <div className="text-muted-foreground mt-6 text-end text-sm">
              *dibandingkan dengan undangan cetak tradisional
            </div>
          </div>
        </section>

        <section id="templates" className="bg-muted py-16 md:py-28 lg:py-32">
          <div className="container container-flat">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Fitur lengkap untuk undangan sempurna
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-6 md:grid-rows-5 lg:mt-20">
              <Card className="relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] md:col-span-3 md:row-span-3">
                <CardContent className="flex flex-col space-y-1.5 p-6 mb-2">
                  <h3 className="inline leading-tight font-semibold text-balance">
                    Template premium.{" "}
                    <span className="text-muted-foreground font-medium">
                      Pilihan desain eksklusif yang dapat disesuaikan dengan tema acara Anda.
                    </span>
                  </h3>
                </CardContent>
                <div className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-background"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Contoh template premium"
                    fill
                    className="object-cover object-left-top lg:translate-x-20 translate-x-6 md:translate-x-10"
                  />
                </div>
              </Card>
              <Card className="relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] md:col-span-3 md:row-span-3 md:col-start-4">
                <CardContent className="flex flex-col space-y-1.5 p-6 mb-2">
                  <h3 className="inline leading-tight font-semibold text-balance">
                    Manajemen tamu.{" "}
                    <span className="text-muted-foreground font-medium">
                      Kelola daftar tamu dan konfirmasi kehadiran dengan mudah melalui sistem RSVP online.
                    </span>
                  </h3>
                </CardContent>
                <div className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-background"></div>
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sistem manajemen tamu"
                    fill
                    className="object-cover object-left-top lg:translate-x-20 translate-x-6 md:translate-x-10"
                  />
                </div>
              </Card>
              <Card className="relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] md:col-span-2 md:row-span-2 md:row-start-4">
                <CardContent className="flex flex-col space-y-1.5 p-6 mb-2">
                  <h3 className="inline leading-tight font-semibold text-balance">
                    Amplop digital.{" "}
                    <span className="text-muted-foreground font-medium">
                      Terima hadiah dan ucapan melalui fitur amplop digital yang terintegrasi.
                    </span>
                  </h3>
                </CardContent>
                <div className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-background"></div>
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent via-transparent to-background"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Fitur amplop digital"
                    fill
                    className="object-cover translate-x-6 md:translate-x-10 pb-6 object-left-bottom"
                  />
                </div>
              </Card>
              <Card className="relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4">
                <CardContent className="flex flex-col space-y-1.5 p-6 mb-2">
                  <h3 className="inline leading-tight font-semibold text-balance">
                    Live chat.{" "}
                    <span className="text-muted-foreground font-medium">
                      Fitur obrolan langsung untuk menjawab pertanyaan tamu tentang acara Anda.
                    </span>
                  </h3>
                </CardContent>
                <div className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Fitur live chat"
                    fill
                    className="object-left-top px-6 mt-4 object-contain"
                  />
                </div>
              </Card>
              <Card className="relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4">
                <CardContent className="flex flex-col space-y-1.5 p-6 mb-2">
                  <h3 className="inline leading-tight font-semibold text-balance">
                    Analisis pengunjung.{" "}
                    <span className="text-muted-foreground font-medium">
                      Pantau jumlah pengunjung dan tingkat respons dari undangan digital Anda.
                    </span>
                  </h3>
                </CardContent>
                <div className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Analisis pengunjung"
                    fill
                    className="pb-6 object-center object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="event-types" className="bg-mint-50 py-16 md:py-28 lg:py-32">
          <div className="container container-flat">
            <div className="flex flex-col gap-3 md:flex-row">
              <h2 className="flex-1 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
                Solusi undangan digital untuk setiap acara
              </h2>
              <p className="text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end">
                InviteMe menawarkan berbagai fitur yang dapat disesuaikan untuk berbagai jenis acara, dari pernikahan
                hingga ulang tahun dan acara perusahaan.
              </p>
            </div>

            {/* Mobile View with Dropdown */}
            <div className="mt-8 lg:hidden">
              <CategoryDropdownSection />
            </div>

            {/* Desktop View with Tabs */}
            <div className="hidden lg:block mt-20">
              <DesktopCategoryTabs />
            </div>
          </div>
        </section>
        <section id="pricing" className="py-16 md:py-28 lg:py-32">
          <div className="container container-flat">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Paket Harga
              </h2>
              <p className="text-muted-foreground text-lg text-balance">
                Pilih paket yang sesuai dengan kebutuhan acara Anda. Upgrade untuk fitur tambahan dan desain premium.
              </p>
              <div className="inline-flex items-center gap-2">
                <Switch id="annual-billing" defaultChecked />
                <span className="text-sm font-medium">Billed annually</span>
              </div>
            </div>
            <div className="mt-8 grid gap-8 grid-cols-1 md:mt-12 lg:mt-20 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="text-card-foreground rounded-xl border shadow-sm h-full border-none bg-zinc-100 dark:bg-zinc-900">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold">Basic</h3>
                    <div className="mt-2">
                      <p className="text-muted-foreground text-lg font-medium">Gratis</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex flex-col space-y-6">
                    <Button variant="outline">Mulai Sekarang</Button>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">1 template dasar</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Maksimal 50 tamu</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Fitur RSVP dasar</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Aktif selama 30 hari</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="from-mint/70 to-sand-100 scale-[1.075] rounded-3xl bg-gradient-to-b p-3">
                <div className="text-card-foreground rounded-xl border shadow-sm h-full border-none dark:bg-zinc-900 bg-background relative ring-2 ring-black">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold">Premium</h3>
                    <div className="mt-2">
                      <p className="text-muted-foreground text-lg font-medium">Rp 299.000</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex flex-col space-y-6">
                    <Button>Pilih Paket</Button>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Semua fitur Basic dan...</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">10+ template premium</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Unlimited tamu</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Galeri foto & video</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Amplop digital</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Aktif selama 1 tahun</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-card-foreground rounded-xl border shadow-sm h-full border-none bg-zinc-100 dark:bg-zinc-900">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold">Exclusive</h3>
                    <div className="mt-2">
                      <p className="text-muted-foreground text-lg font-medium">Rp 599.000</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex flex-col space-y-6">
                    <Button variant="outline">Pilih Paket</Button>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Semua fitur Premium dan...</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Desain kustom</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Live streaming terintegrasi</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Domain kustom</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Dukungan prioritas</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Aktif selamanya</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="pb-16 md:pb-28 lg:pb-32">
          <div className="container container-flat mx-auto lg:max-w-5xl">
            <h2 className="text-center text-2xl font-semibold tracking-tight lg:text-3xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <div className="mt-6 grid gap-x-12 md:mt-10 md:grid-cols-2 lg:mt-14">
              <Accordion type="single" collapsible className="text-muted-foreground border-t">
                <AccordionItem value="item-1" className="border-b">
                  <AccordionTrigger>Apa itu undangan digital?</AccordionTrigger>
                  <AccordionContent className="text-foreground">
                    Undangan digital adalah undangan elektronik yang dapat dibagikan melalui tautan atau QR code.
                    Undangan ini dapat diakses melalui perangkat apa pun yang terhubung ke internet dan menawarkan
                    berbagai fitur interaktif yang tidak tersedia pada undangan cetak tradisional.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b">
                  <AccordionTrigger>Bagaimana cara membagikan undangan digital?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b">
                  <AccordionTrigger>Apakah tamu perlu mengunduh aplikasi?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b">
                  <AccordionTrigger>Berapa lama undangan digital aktif?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b">
                  <AccordionTrigger>Apakah bisa menyesuaikan desain undangan?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="text-muted-foreground md:border-t">
                <AccordionItem value="item-1" className="border-b">
                  <AccordionTrigger>Bagaimana sistem RSVP bekerja?</AccordionTrigger>
                  <AccordionContent className="text-foreground">
                    Sistem RSVP kami memungkinkan tamu untuk mengkonfirmasi kehadiran mereka langsung melalui undangan
                    digital. Anda akan menerima notifikasi dan dapat melihat daftar tamu yang hadir, tidak hadir, atau
                    belum merespons melalui dashboard admin.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b">
                  <AccordionTrigger>Apakah bisa mengundang tamu tanpa batas?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b">
                  <AccordionTrigger>Bagaimana cara kerja amplop digital?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b">
                  <AccordionTrigger>Apakah ada fitur live streaming?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Component for Mobile Category Dropdown Section
function CategoryDropdownSection() {
  const [selectedCategory, setSelectedCategory] = useState("wedding")

  const categoryOptions = [
    {
      id: "wedding",
      icon: <CircleDot className="size-5" />,
      title: "Pernikahan",
      description: "Undangan digital elegan untuk hari spesial Anda.",
    },
    {
      id: "birthday",
      icon: <Blend className="size-5" />,
      title: "Ulang Tahun",
      description: "Rayakan momen bahagia dengan undangan yang menarik.",
    },
    {
      id: "corporate",
      icon: <Diamond className="size-5" />,
      title: "Acara Perusahaan",
      description: "Undangan profesional untuk acara bisnis dan korporat.",
    },
    {
      id: "special",
      icon: <ChartNoAxesColumn className="size-5" />,
      title: "Acara Khusus",
      description: "Solusi kustom untuk berbagai jenis acara spesial.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-primary">
            {selectedCategory === "wedding" && "Luxury Wedding - 01"}
            {selectedCategory === "birthday" && "Birthday Party - 01"}
            {selectedCategory === "corporate" && "Corporate Event - 01"}
            {selectedCategory === "special" && "Special Event - 01"}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Rp. 69.000</span>
            <span className="bg-primary text-white text-xs px-1.5 py-0.5 rounded-md">34%</span>
          </div>
        </div>
        <div className="text-muted-foreground text-xs">
          <span className="line-through">Rp. 149.000</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full">
            Lihat Demo
          </Button>
          <Button className="w-full">Order</Button>
        </div>
      </div>

      <CategoryDropdown options={categoryOptions} selectedId={selectedCategory} onSelect={setSelectedCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {selectedCategory === "wedding" && (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <TemplateCard
                key={`wedding-${index}`}
                title={`Luxury Wedding - ${String(index + 1).padStart(2, "0")}`}
                discount={34}
                price={69000}
                originalPrice={149000}
              />
            ))}
          </>
        )}

        {selectedCategory === "birthday" && (
          <>
            {Array.from({ length: 2 }).map((_, index) => (
              <TemplateCard
                key={`birthday-${index}`}
                title={`Birthday Party - ${String(index + 1).padStart(2, "0")}`}
                discount={40}
                price={59000}
                originalPrice={99000}
              />
            ))}
          </>
        )}

        {selectedCategory === "corporate" && (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <TemplateCard
                key={`corporate-${index}`}
                title={`Corporate Event - ${String(index + 1).padStart(2, "0")}`}
                discount={25}
                price={89000}
                originalPrice={119000}
              />
            ))}
          </>
        )}

        {selectedCategory === "special" && (
          <TemplateCard title="Special Event - 01" discount={30} price={79000} originalPrice={109000} />
        )}
      </div>
    </div>
  )
}

// Component for Desktop Category Tabs
function DesktopCategoryTabs() {
  return (
    <Tabs defaultValue="wedding" orientation="vertical" className="flex gap-4">
      <TabsList className="text-muted-foreground items-center flex h-auto justify-start overflow-x-auto rounded-xl bg-black/[0.03] p-1.5 w-full basis-1/4 flex-col">
        <TabsTrigger
          value="wedding"
          className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white"
        >
          <div>
            <CircleDot className="size-7 md:size-8 lg:size-9" />
            <h3 className="mt-3 font-semibold">Pernikahan</h3>
            <p className="text-muted-foreground mt-1 text-sm">Undangan digital elegan untuk hari spesial Anda.</p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="birthday"
          className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white"
        >
          <div>
            <Blend className="size-7 md:size-8 lg:size-9" />
            <h3 className="mt-3 font-semibold">Ulang Tahun</h3>
            <p className="text-muted-foreground mt-1 text-sm">Rayakan momen bahagia dengan undangan yang menarik.</p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="corporate"
          className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white"
        >
          <div>
            <Diamond className="size-7 md:size-8 lg:size-9" />
            <h3 className="mt-3 font-semibold">Acara Perusahaan</h3>
            <p className="text-muted-foreground mt-1 text-sm">Undangan profesional untuk acara bisnis dan korporat.</p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="special"
          className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white"
        >
          <div>
            <ChartNoAxesColumn className="size-7 md:size-8 lg:size-9" />
            <h3 className="mt-3 font-semibold">Acara Khusus</h3>
            <p className="text-muted-foreground mt-1 text-sm">Solusi kustom untuk berbagai jenis acara spesial.</p>
          </div>
        </TabsTrigger>
      </TabsList>

      {/* Wedding Templates */}
      <TabsContent value="wedding" className="m-0 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <TemplateCard
              key={`wedding-${index}`}
              title={`Luxury Wedding - ${String(index + 1).padStart(2, "0")}`}
              discount={34}
              price={69000}
              originalPrice={149000}
            />
          ))}
        </div>
      </TabsContent>

      {/* Birthday Templates */}
      <TabsContent value="birthday" className="m-0 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <TemplateCard
              key={`birthday-${index}`}
              title={`Birthday Party - ${String(index + 1).padStart(2, "0")}`}
              discount={40}
              price={59000}
              originalPrice={99000}
            />
          ))}
        </div>
      </TabsContent>

      {/* Corporate Templates */}
      <TabsContent value="corporate" className="m-0 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <TemplateCard
              key={`corporate-${index}`}
              title={`Corporate Event - ${String(index + 1).padStart(2, "0")}`}
              discount={25}
              price={89000}
              originalPrice={119000}
            />
          ))}
        </div>
      </TabsContent>

      {/* Special Event Templates */}
      <TabsContent value="special" className="m-0 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TemplateCard title="Special Event - 01" discount={30} price={79000} originalPrice={109000} />
        </div>
      </TabsContent>
    </Tabs>
  )
}

// Template Card Component
function TemplateCard({ title, discount, price, originalPrice }) {
  return (
    <div className="group overflow-hidden bg-white/50 dark:bg-black/5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src=""
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded-full">{discount}%</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-primary">{title}</h3>
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-xl font-semibold">Rp. {price.toLocaleString()}</span>
          <span className="text-muted-foreground text-xs line-through">Rp. {originalPrice.toLocaleString()}</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            <span className="flex items-center justify-center gap-1">Lihat Demo</span>
          </Button>
          <Button size="sm" className="text-xs">
            <span className="flex items-center justify-center gap-1">Order</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

