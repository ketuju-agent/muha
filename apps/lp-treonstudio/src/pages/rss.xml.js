import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export async function GET(context) {
  return rss({
     title: 'TreonStudio',
    description: 'TreonStudio is Crative Studio based in Yogyakarta, Indonesia that specializes in creating beautiful and simple brands for businesses that customers remember.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}