import type { Handler } from '@netlify/functions';

export const handler: Handler = async () => {
  const disallow = ['/api', '/admin'];
  const lines = [
    'User-agent: *',
    'Allow: /',
    ...disallow.map(d => `Disallow: ${d}`),
    `Sitemap: ${process.env.CANONICAL_DOMAIN}/sitemap.xml`
  ];
  if (process.env.STAGING === 'true') lines.unshift('noindex: /');
  return { statusCode: 200, headers: { 'Content-Type': 'text/plain' }, body: lines.join('\n') };
};
