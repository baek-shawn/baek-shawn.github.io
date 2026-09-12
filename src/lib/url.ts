// astro.config.mjs의 base 설정을 내부 링크에 반영한다.
// base가 없으면 '/about/' 그대로, base가 '/blog'면 '/blog/about/'가 된다.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
