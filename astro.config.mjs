// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 사이트 기본 URL은 이 파일 한 곳에서만 관리한다.
//
// 1) GitHub Pages (user site)  : site = 'https://<username>.github.io', base 없음
// 2) GitHub Pages (project site): site = 'https://<username>.github.io', base = '/<repo-name>'
// 3) 개인 도메인                : site = 'https://mydomain.com', base 없음 + public/CNAME 추가
//
// 코드에서는 Astro.site / import.meta.env.BASE_URL 만 사용하므로
// 이 두 값만 바꾸면 canonical, sitemap, RSS, 내부 링크가 모두 함께 바뀐다.
export default defineConfig({
  site: 'https://shawnbaek.dev',
  // base: '/blog',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
