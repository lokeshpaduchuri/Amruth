import type { Handler } from '@netlify/functions';
import { fetchPublicRoutes } from '../../src/app/shared/sanity.service';

export const handler: Handler = async () => {
  const routes = await fetchPublicRoutes();
  const urls = routes.map(r => `<url><loc>${process.env.CANONICAL_DOMAIN}${r}</loc></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return { statusCode: 200, headers: { 'Content-Type': 'application/xml' }, body: xml };
};
