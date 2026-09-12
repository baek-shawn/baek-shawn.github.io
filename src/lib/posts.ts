import { getCollection, type CollectionEntry } from 'astro:content';
import type { Category } from '../consts';
import { withBase } from './url';

export type Post = CollectionEntry<'blog'>;

// 발행된 글을 최신순으로 반환한다. 개발 서버에서는 draft 글도 미리 볼 수 있다.
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function postUrl(post: Post): string {
  return withBase(`/blog/${post.id}/`);
}

export function categorySlug(category: Category): string {
  return category.toLowerCase();
}

export function categoryUrl(category: Category): string {
  return withBase(`/categories/${categorySlug(category)}/`);
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
