export default function StatsSection() {
    return (
      <section className="w-full flex justify-center py-16">
        <div className="w-full max-w-[1082px] px-4 md:px-12">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-medium mb-2">
                DocTemplates by the numbers.{" "}
                <i className="font-normal text-muted-foreground">Growing collection of professional templates.</i>
              </h2>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
              <StatCard value="500+" label="Templates" description="Ready to use documents" />
              <StatCard value="50+" label="Categories" description="For all business needs" />
              <StatCard value="10,000+" label="Customers" description="Satisfied businesses" />
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              <div className="p-6 rounded-2xl bg-card">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-medium">Customer Growth</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-purple-100/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold">187%</div>
                      <div className="text-muted-foreground">Year over year</div>
                    </div>
                  </div>
                  <div className="h-[100px] w-full">
                    {/* This would be a chart in the original */}
                    <div className="w-full h-full bg-gradient-to-r from-purple-100/10 to-blue-100/10 rounded-lg flex items-end">
                      <div className="w-1/5 h-[30%] bg-purple-100/20 rounded-sm mx-1"></div>
                      <div className="w-1/5 h-[40%] bg-purple-100/20 rounded-sm mx-1"></div>
                      <div className="w-1/5 h-[35%] bg-purple-100/20 rounded-sm mx-1"></div>
                      <div className="w-1/5 h-[60%] bg-purple-100/20 rounded-sm mx-1"></div>
                      <div className="w-1/5 h-[90%] bg-purple-100/20 rounded-sm mx-1"></div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="p-6 rounded-2xl bg-card">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-medium">Template Downloads</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-100/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold">1.5M+</div>
                      <div className="text-muted-foreground">Total downloads</div>
                    </div>
                  </div>
                  <div className="h-[100px] w-full">
                    {/* This would be a chart in the original */}
                    <div className="w-full h-full bg-gradient-to-r from-green-100/10 to-blue-100/10 rounded-lg flex items-end">
                      <div className="w-1/6 h-[20%] bg-green-100/20 rounded-sm mx-1"></div>
                      <div className="w-1/6 h-[30%] bg-green-100/20 rounded-sm mx-1"></div>
                      <div className="w-1/6 h-[45%] bg-green-100/20 rounded-sm mx-1"></div>
                      <div className="w-1/6 h-[40%] bg-green-100/20 rounded-sm mx-1"></div>
                      <div className="w-1/6 h-[60%] bg-green-100/20 rounded-sm mx-1"></div>
                      <div className="w-1/6 h-[80%] bg-green-100/20 rounded-sm mx-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function StatCard({ value, label, description }: { value: string; label: string; description: string }) {
    return (
      <div className="p-6 rounded-2xl bg-card">
        <div className="flex flex-col gap-2">
          <div className="text-4xl font-semibold">{value}</div>
          <div className="text-xl font-medium">{label}</div>
          <div className="text-muted-foreground">{description}</div>
        </div>
      </div>
    )
  }
  
  