import type React from "react"

export default function CategoriesSection() {
  return (
    <section className="w-full flex justify-center py-16">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-4 p-4 md:p-6 rounded-2xl bg-card">
              <div className="text-center">
              <h5 className="font-medium text-lg mb-1">
                  Menyesuaikan di beberapa Industri.
                  <span className="text-muted-foreground block md:inline"> Tersedia di berbagai format.</span>
                </h5>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                <FormatBadge name="Word" href="/formats/word" icon={<WordIcon />} />
                <FormatBadge name="PDF" href="/formats/pdf" icon={<PDFIcon />} />
                <FormatBadge name="Google Docs" href="/formats/google-docs" icon={<GoogleDocsIcon />} />
                <FormatBadge name="Pages" href="/formats/pages" icon={<PagesIcon />} />
                <FormatBadge name="Excel" href="/formats/excel" icon={<ExcelIcon />} />
                <FormatBadge name="PowerPoint" href="/formats/powerpoint" icon={<PowerPointIcon />} />
                <FormatBadge name="Keynote" href="/formats/keynote" icon={<KeynoteIcon />} />
                <FormatBadge name="Numbers" href="/formats/numbers" icon={<NumbersIcon />} />
              </div>
            </div>
          </div>
    </section>
  )
}

function CategoryLogo({ name, href, icon }: { name: string; href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
    >
      <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      <h5 className="text-sm font-medium">{name}</h5>
    </a>
  )
}

function FormatBadge({ name, href, icon }: { name: string; href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 px-2 md:px-4 h-8 md:h-10 rounded-full bg-card hover:bg-muted transition-colors text-xs md:text-sm"
    >
      <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">{icon}</div>
      <div className="font-medium">{name}</div>
    </a>
  )
}

// Category Icons
function BusinessIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 12H16" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16H16" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12H8.01" stroke="currentColor" strokeWidth="2" />
      <path d="M8 16H8.01" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function LegalIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function HRIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

function FinanceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1V23" stroke="currentColor" strokeWidth="2" />
      <path
        d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

function RealEstateIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

function MarketingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" />
      <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ConsultingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" />
      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" />
      <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function NonprofitIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function WordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 4.5V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5C2 3.67157 2.67157 3 3.5 3H12.5C13.3284 3 14 3.67157 14 4.5Z"
        fill="#2B579A"
        fillOpacity="0.1"
      />
      <path
        d="M4 6L5.5 10L7 6L8.5 10L10 6"
        stroke="#2B579A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PDFIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 4.5V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5C2 3.67157 2.67157 3 3.5 3H12.5C13.3284 3 14 3.67157 14 4.5Z"
        fill="#FF0000"
        fillOpacity="0.1"
      />
      <path d="M4 6H5.5V8.5H4V6Z" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M7 6H8.5C9.05228 6 9.5 6.44772 9.5 7V7.5C9.5 8.05228 9.05228 8.5 8.5 8.5H7V6Z"
        stroke="#FF0000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 6H12V8.5" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GoogleDocsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 4.5V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5C2 3.67157 2.67157 3 3.5 3H12.5C13.3284 3 14 3.67157 14 4.5Z"
        fill="#4285F4"
        fillOpacity="0.1"
      />
      <path d="M5 6H11" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 8H11" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 10H9" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function PagesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 4.5V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5C2 3.67157 2.67157 3 3.5 3H12.5C13.3284 3 14 3.67157 14 4.5Z"
        fill="#FF9500"
        fillOpacity="0.1"
      />
      <path d="M5 6H11" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 8H11" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 10H9" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ExcelIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 4.5V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5C2 3.67157 2.67157 3 3.5 3H12.5C13.3284 3 14 3.67157 14 4.5Z"
        fill="#217346"
        fillOpacity="0.1"
      />
      <path d="M5 6L7 10" stroke="#217346" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 6L9 10" stroke="#217346" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function PowerPointIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 4.5V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5C2 3.67157 2.67157 3 3.5 3H12.5C13.3284 3 14 3.67157 14 4.5Z"
        fill="#B7472A"
        fillOpacity="0.1"
      />
      <path
        d="M5 6H8C8.55228 6 9 6.44772 9 7V7C9 7.55228 8.55228 8 8 8H5V6Z"
        stroke="#B7472A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 8V10" stroke="#B7472A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function KeynoteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 4.5V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5C2 3.67157 2.67157 3 3.5 3H12.5C13.3284 3 14 3.67157 14 4.5Z"
        fill="#0070C9"
        fillOpacity="0.1"
      />
      <path d="M8 5V9" stroke="#0070C9" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.5 7H10.5" stroke="#0070C9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function NumbersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 4.5V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5C2 3.67157 2.67157 3 3.5 3H12.5C13.3284 3 14 3.67157 14 4.5Z"
        fill="#00C13F"
        fillOpacity="0.1"
      />
      <path d="M5 6H6V10H5V6Z" stroke="#00C13F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 6H10V10H9V6Z" stroke="#00C13F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

