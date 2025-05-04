import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import config from '../../site.config';

export async function GET(context) {
  return rss({
     title: config.title,
    description: config.description,
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}