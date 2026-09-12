import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPublishedPosts, postUrl } from '../lib/posts';
import { withBase } from '../lib/url';

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('astro.config.mjs에 site를 설정해야 RSS를 생성할 수 있습니다.');
  }

  const posts = await getPublishedPosts();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // base 경로가 있는 경우 채널 링크에도 반영한다.
    site: new URL(withBase('/'), context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: postUrl(post),
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: '<language>ko-kr</language>',
  });
}
