import type { APIRoute } from 'astro';
import { withBase } from '../lib/url';

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('astro.config.mjs에 site를 설정해야 robots.txt를 생성할 수 있습니다.');
  }

  const sitemapURL = new URL(withBase('/sitemap-index.xml'), site);
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemapURL.href}`, ''].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
