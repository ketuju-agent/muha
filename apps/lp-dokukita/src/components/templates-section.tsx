import Link from "next/link"
import { Button } from "@packages/ui/components/base/button"

// export default function TemplatesSection() {
//   return (
//     <section className="w-full flex justify-center py-12 md:py-16">
//       <div className="w-full max-w-[1082px] px-4 md:px-12">
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-2xl md:text-3xl font-medium mb-2">Template Categories</h2>
//           <p className="text-muted-foreground">Find the perfect template for your needs</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
//           <div className="w-full flex flex-col items-center justify-center p-6 relative border-b md:border-b-0 md:border-r border-dashed border-black/10">
//             <svg
//               className="mb-4 w-16 h-16 md:w-20 md:h-20"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 fill="none"
//               />
//               <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
//               <path d="M16 13H8" stroke="currentColor" strokeWidth="2" />
//               <path d="M16 17H8" stroke="currentColor" strokeWidth="2" />
//               <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" />
//             </svg>

//             <div className="text-center">
//               <h5 className="font-medium text-lg mb-1">Business Contracts</h5>
//               <p className="text-muted-foreground text-sm">
//                 Employment, service, and partnership agreements for your business.
//               </p>
//             </div>

//             <Button variant="secondary" className="mt-4 w-full sm:w-auto" asChild>
//               <Link href="/templates/business">
//                 Browse Contracts
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   className="ml-1 transform rotate-225"
//                 >
//                   <rect width="20" height="20" x="0" y="0" fill="currentColor" fillOpacity="0.12" rx="8"></rect>
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeOpacity=".8"
//                     strokeWidth="1.5"
//                     d="M8.5 4.812v6.5m0 0 2.5-2.5m-2.5 2.5L6 8.812"
//                   ></path>
//                 </svg>
//               </Link>
//             </Button>
//           </div>

//           <div className="w-full flex flex-col items-center justify-center p-6 relative border-b md:border-b-0 md:border-r border-dashed border-black/10">
//             <svg
//               className="mb-4 w-16 h-16 md:w-20 md:h-20"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M20 6H4C2.9 6 2 6.9 2 8V16C2 17.1 2.9 18 4 18H20C21.1 18 22 17.1 22 16V8C22 6.9 21.1 6 20 6Z"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 fill="none"
//               />
//               <path d="M12 12H18" stroke="currentColor" strokeWidth="2" />
//               <path d="M12 9H18" stroke="currentColor" strokeWidth="2" />
//               <path d="M12 15H15" stroke="currentColor" strokeWidth="2" />
//               <rect x="4" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
//             </svg>

//             <div className="text-center">
//               <h5 className="font-medium text-lg mb-1">Legal Documents</h5>
//               <p className="text-muted-foreground text-sm">
//                 NDAs, terms of service, and legal agreements for your protection.
//               </p>
//             </div>

//             <Button variant="secondary" className="mt-4 w-full sm:w-auto" asChild>
//               <Link href="/templates/legal">
//                 Browse Legal Docs
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   className="ml-1 transform rotate-225"
//                 >
//                   <rect width="20" height="20" x="0" y="0" fill="currentColor" fillOpacity="0.12" rx="8"></rect>
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeOpacity=".8"
//                     strokeWidth="1.5"
//                     d="M8.5 4.812v6.5m0 0 2.5-2.5m-2.5 2.5L6 8.812"
//                   ></path>
//                 </svg>
//               </Link>
//             </Button>
//           </div>

//           <div className="w-full flex flex-col items-center justify-center p-6 relative">
//             <svg
//               className="mb-4 w-16 h-16 md:w-20 md:h-20"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 fill="none"
//               />
//               <path d="M8.5 10H15.5" stroke="currentColor" strokeWidth="2" />
//               <path d="M8.5 14H15.5" stroke="currentColor" strokeWidth="2" />
//               <path d="M8.5 18H12" stroke="currentColor" strokeWidth="2" />
//               <path d="M8.5 6H12" stroke="currentColor" strokeWidth="2" />
//             </svg>

//             <div className="text-center">
//               <h5 className="font-medium text-lg mb-1">HR Documents</h5>
//               <p className="text-muted-foreground text-sm">
//                 Employment contracts, policies, and HR forms for your team.
//               </p>
//             </div>

//             <Button variant="secondary" className="mt-4 w-full sm:w-auto" asChild>
//               <Link href="/templates/hr">
//                 Browse HR Docs
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   className="ml-1 transform rotate-225"
//                 >
//                   <rect width="20" height="20" x="0" y="0" fill="currentColor" fillOpacity="0.12" rx="8"></rect>
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeOpacity=".8"
//                     strokeWidth="1.5"
//                     d="M8.5 4.812v6.5m0 0 2.5-2.5m-2.5 2.5L6 8.812"
//                   ></path>
//                 </svg>
//               </Link>
//             </Button>
//           </div>


//         </div>
//       </div>
//     </section>
//   )
// }


export default function ResourceAllocationSection() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-medium mb-2 text-center">
        Document Categories.{" "}
        <i className="font-normal text-muted-foreground">
          We offer a wide range of professional templates for all your business needs.
        </i>
      </h2>
      <div className="mt-8 md:mt-12 lg:mt-20">
        <div className="relative container grid max-w-7xl md:grid-cols-3">
          <div className="relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8 md:pb-0">
            <div className="flex flex-col items-center justify-center p-6">
              <svg
                className="mb-4 w-16 h-16 md:w-20 md:h-20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" />
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" />
                <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="text-center">
                <h5 className="font-medium text-lg mb-1">Business Contracts</h5>
                <p className="text-muted-foreground text-sm">
                  Employment, service, and partnership agreements for your business.
                </p>
              </div>

              <Button variant="secondary" className="mt-4 w-full sm:w-auto" asChild>
                <Link href="/templates/business">
                  Browse Contracts
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

            <div className="text-muted-foreground h-full w-px absolute top-0 right-0 max-md:hidden">
              <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
            <div className="text-muted-foreground h-px w-full absolute inset-x-0 bottom-0 md:hidden">
              <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
          </div>

          <div className="relative flex flex-col px-0 py-6 md:px-6 md:py-8 md:pb-0 justify-normal">
            <div className="flex flex-col items-center justify-center p-6">
              <svg
                className="mb-4 w-16 h-16 md:w-20 md:h-20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" />
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" />
                <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="text-center">
                <h5 className="font-medium text-lg mb-1">Business Contracts</h5>
                <p className="text-muted-foreground text-sm">
                  Employment, service, and partnership agreements for your business.
                </p>
              </div>

              <Button variant="secondary" className="mt-4 w-full sm:w-auto" asChild>
                <Link href="/templates/business">
                  Browse Contracts
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
            <div className="text-muted-foreground h-full w-px absolute top-0 right-0 max-md:hidden">
              <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
            <div className="text-muted-foreground h-px w-full absolute inset-x-0 bottom-0 md:hidden">
              <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
          </div>

          <div className="relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8 md:pb-0">
            <div className="flex flex-col items-center justify-center p-6">
              <svg
                className="mb-4 w-16 h-16 md:w-20 md:h-20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" />
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" />
                <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="text-center">
                <h5 className="font-medium text-lg mb-1">Business Contracts</h5>
                <p className="text-muted-foreground text-sm">
                  Employment, service, and partnership agreements for your business.
                </p>
              </div>

              <Button variant="secondary" className="mt-4 w-full sm:w-auto" asChild>
                <Link href="/templates/business">
                  Browse Contracts
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
            <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden"></div>
          </div>
        </div>

        <div className="text-muted-foreground relative h-px w-full container max-w-7xl scale-x-110">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>

        <div className="relative container grid max-w-7xl md:grid-cols-3">
          <div className="relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8 md:pb-0">
            <div className="flex flex-col items-center justify-center p-6">
              <svg
                className="mb-4 w-16 h-16 md:w-20 md:h-20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" />
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" />
                <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="text-center">
                <h5 className="font-medium text-lg mb-1">Business Contracts</h5>
                <p className="text-muted-foreground text-sm">
                  Employment, service, and partnership agreements for your business.
                </p>
              </div>

              <Button variant="secondary" className="mt-4 w-full sm:w-auto" asChild>
                <Link href="/templates/business">
                  Browse Contracts
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

            <div className="text-muted-foreground h-full w-px absolute top-0 right-0 max-md:hidden">
              <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
            <div className="text-muted-foreground h-px w-full absolute inset-x-0 bottom-0 md:hidden">
              <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
          </div>

          <div className="relative flex flex-col px-0 py-6 md:px-6 md:py-8 md:pb-0 justify-normal">
            <div className="flex flex-col items-center justify-center p-6">
              <svg
                className="mb-4 w-16 h-16 md:w-20 md:h-20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" />
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" />
                <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="text-center">
                <h5 className="font-medium text-lg mb-1">Business Contracts</h5>
                <p className="text-muted-foreground text-sm">
                  Employment, service, and partnership agreements for your business.
                </p>
              </div>

              <Button variant="secondary" className="mt-4 w-full sm:w-auto" asChild>
                <Link href="/templates/business">
                  Browse Contracts
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
            <div className="text-muted-foreground h-full w-px absolute top-0 right-0 max-md:hidden">
              <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
            <div className="text-muted-foreground h-px w-full absolute inset-x-0 bottom-0 md:hidden">
              <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
          </div>

          <div className="relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8 md:pb-0">
            <div className="flex flex-col items-center justify-center p-6">
              <svg
                className="mb-4 w-16 h-16 md:w-20 md:h-20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" />
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" />
                <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="text-center">
                <h5 className="font-medium text-lg mb-1">Business Contracts</h5>
                <p className="text-muted-foreground text-sm">
                  Employment, service, and partnership agreements for your business.
                </p>
              </div>

              <Button variant="secondary" className="mt-4 w-full sm:w-auto" asChild>
                <Link href="/templates/business">
                  Browse Contracts
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
            <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

