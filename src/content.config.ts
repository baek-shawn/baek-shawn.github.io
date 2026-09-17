import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './consts';

// 소스 파일은 카테고리 폴더로 나눠 관리하되(src/content/blog/<Category>/xxx.md),
// URL은 폴더 경로와 무관하게 만든다. frontmatter에 slug가 있으면 그걸 쓰고,
// 없으면 파일명으로 만든다 (예: /blog/xxx/). 파일명에 정렬용 접두사를 붙이고
// 싶으면 slug를 명시해서 URL에는 접두사가 안 남게 한다.
const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
    generateId: ({ entry, data }) =>
      typeof data.slug === 'string'
        ? data.slug
        : entry.replace(/^.*\//, '').replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum(CATEGORIES),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    slug: z.string().optional(),
  }),
});

export const collections = { blog };
