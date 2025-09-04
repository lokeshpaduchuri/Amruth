import { defineEventHandler, send } from 'vinxi/server';
import { client } from '../sanity/client';
import { groq } from 'groq';
import { SITE } from '../../site.config';

export default defineEventHandler(async (event) => {
  const staticRoutes = ['/', '/about', '/menu', '/contact', '/faqs', '/testimonials', '/legal', '/locations', '/blog'];
  const posts = await client.fetch(groq`*[_type=="post"]{slug}`);
  const urls = staticRoutes.concat(posts.map((p: any) => `/blog/${p.slug.current}`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map((u) => `<url><loc>${SITE.url}${u}</loc></url>`)
    .join('')} </urlset>`;
  send(event, xml, 'text/xml');
});
