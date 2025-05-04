export const siteConfig = {
  name: "Dashboard",
  url: "https://ds.red-ant-colony.com",
  description: "Dashboard Red Ant Colony.",
  baseLinks: {
    quotes: {
      overview: "/dashboard/overview",
      monitoring: "/dashboard/monitoring",
      audits: "/dashboard/audits",
    },
  },
}

export type siteConfig = typeof siteConfig
