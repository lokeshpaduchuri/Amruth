import { defineEventHandler, send } from 'vinxi/server';
import { SITE } from '../../site.config';

export default defineEventHandler((event) => {
  const content = `User-agent: *\nDisallow: /api\nDisallow: /admin\nSitemap: ${SITE.url}/sitemap.xml`;
  send(event, content, 'text/plain');
});
