# Developer Blog

Astro 기반의 개인 개발 블로그입니다. Markdown / MDX로 글을 작성하고, `main` branch에 push하면 GitHub Actions가 자동으로 빌드해 GitHub Pages에 배포합니다.

제품 요구사항과 MVP 범위는 `developer_blog_mvp_spec.md`, 개발 지침은 `CLAUDE.md`에 정의되어 있습니다.

## Tech Stack

- [Astro](https://astro.build/) 7 (static output)
- TypeScript
- Tailwind CSS 4 (`@tailwindcss/vite`, `@tailwindcss/typography`)
- Markdown / MDX + Astro Content Collections
- Shiki syntax highlighting (Astro 기본 지원)
- `@astrojs/sitemap`, `@astrojs/rss`
- GitHub Actions → GitHub Pages

## 요구 사항

- Node.js 22.12 이상
- npm 9.6.5 이상

## 설치

```bash
npm install
```

## 로컬 실행

```bash
npm run dev
```

`http://localhost:4321` 에서 확인할 수 있습니다. 개발 서버에서는 `draft: true` 글도 표시됩니다.

## Build

```bash
npm run build      # dist/ 에 정적 파일 생성
npm run preview    # 빌드 결과를 로컬에서 확인
npm run check      # Astro / TypeScript 타입 체크
```

## 새 글 작성

1. `src/content/blog/<카테고리>/` 폴더에 `.md` 또는 `.mdx` 파일을 만듭니다. 카테고리 폴더명은 `category` 값과 동일하게 맞춥니다 (`Development` / `AI` / `Engineering` / `Certification` / `Projects` / `Papers`).
   - 파일명은 정렬/탐색 편의를 위해 자유롭게 지어도 됩니다 (`[1]docker-permission.md` 등). 폴더 경로와 파일명 모두 URL에는 반영되지 않습니다.
   - 실제 URL은 frontmatter의 `slug` 값으로 결정됩니다. (`slug: docker-permission-fix` → `/blog/docker-permission-fix/`)
2. Frontmatter를 작성합니다.

   ```yaml
   ---
   title: "Ubuntu에서 Docker Permission Denied 해결하기"
   description: "docker.sock permission denied 오류를 실제로 해결한 과정을 정리합니다."
   publishedAt: 2026-09-11
   updatedAt: 2026-09-11        # 선택
   category: Development        # Development | AI | Engineering | Certification | Projects | Papers
   slug: docker-permission-fix  # URL을 결정. 생략하면 파일명이 그대로 URL이 됨
   tags:
     - Ubuntu
     - Docker
   draft: false                 # true면 production build에서 제외
   ---
   ```

3. 본문을 Markdown으로 작성합니다.
4. commit 후 `main` 에 push하면 자동으로 배포됩니다.

Frontmatter 스키마는 `src/content.config.ts` 에서 검증합니다. 카테고리 목록은 `src/consts.ts` 의 `CATEGORIES` 에 고정되어 있으며, 세부 기술은 `tags` 로 관리합니다.

### 이미지

글에 사용하는 이미지는 `public/images/blog/<slug>/` 에 두고 절대 경로로 참조합니다. 가능하면 WebP 또는 AVIF를 사용합니다.

```markdown
![GPU 메모리 사용량](/images/blog/vllm-install/gpu-memory.webp)
```

### MDX에서 컴포넌트 사용

```mdx
import Callout from '../../components/Callout.astro';

<Callout title="참고">
  이 글은 Ubuntu 24.04 기준입니다.
</Callout>
```

## Projects 페이지

`src/data/projects.ts` 의 배열을 수정합니다. `relatedPosts` 에는 글 파일명(확장자 제외)을 넣으면 해당 글로 링크됩니다.

## 사이트 설정

| 파일 | 내용 |
|---|---|
| `astro.config.mjs` | `site`(배포 URL), `base`(하위 경로 배포 시) |
| `src/consts.ts` | 블로그 이름, 설명, 작성자, 연락처(이메일 / GitHub), 카테고리 |
| `public/images/og-default.png` | 기본 Open Graph 이미지 (1200×630) |
| `public/favicon.svg` | 파비콘 |

canonical URL, sitemap, RSS, robots.txt, 내부 링크는 모두 `site` / `base` 값을 기준으로 생성되므로 이 두 값만 바꾸면 됩니다.

## GitHub Pages 배포

1. GitHub에 repository를 만들고 이 프로젝트를 push합니다.
2. Repository **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 변경합니다.
3. `astro.config.mjs` 의 `site` 를 배포 주소로 수정합니다.
   - Repository 이름이 `<username>.github.io` 인 경우 (권장):
     ```js
     site: 'https://<username>.github.io',
     ```
   - 그 외 repository 이름(`<username>.github.io/<repo>/`)인 경우:
     ```js
     site: 'https://<username>.github.io',
     base: '/<repo>',
     ```
     이 경우 Markdown 본문 안의 이미지·내부 링크 경로도 `/<repo>/...` 로 시작해야 하고, `robots.txt` 가 도메인 루트에 위치하지 않으므로 검색엔진 등록에 제약이 있습니다. 개인 블로그는 `<username>.github.io` repository 사용을 권장합니다.
4. `main` branch에 push하면 `.github/workflows/deploy.yml` 이 실행되어 배포됩니다. 진행 상황은 repository의 **Actions** 탭에서 확인합니다.

## Custom Domain 연결

1. 도메인 DNS에 GitHub Pages 레코드를 추가합니다. (apex 도메인은 A 레코드 4개, `www` 는 CNAME → `<username>.github.io`) 자세한 값은 [GitHub 문서](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)를 참고합니다.
2. `public/CNAME` 파일을 만들고 도메인을 한 줄로 적습니다.
   ```text
   blog.example.com
   ```
3. `astro.config.mjs` 의 `site` 를 `https://blog.example.com` 으로 바꾸고, `base` 를 사용 중이었다면 제거합니다.
4. Repository **Settings → Pages → Custom domain** 에 같은 도메인을 입력하고 **Enforce HTTPS** 를 켭니다.
5. push 후 배포가 끝나면 canonical / sitemap / RSS URL이 새 도메인 기준으로 생성되었는지 확인합니다.

## Environment Variables

값이 비어 있으면 해당 script를 로드하지 않습니다. 로컬에서는 `.env` 파일(`.env.example` 참고), GitHub Actions에서는 **Settings → Secrets and variables → Actions → Variables** 에 등록합니다.

| 변수 | 설명 |
|---|---|
| `PUBLIC_GA_ID` | Google Analytics 측정 ID (예: `G-XXXXXXXXXX`) |
| `PUBLIC_ADSENSE_CLIENT` | Google AdSense 게시자 ID (예: `ca-pub-XXXXXXXXXXXXXXXX`). 승인 후에만 설정 |

AdSense 승인 후에는 `src/layouts/BlogPost.astro` 의 `<AdSenseSlot adSlot="" />` 에 광고 단위 ID를 넣으면 글 하단에 광고가 표시됩니다. 광고 코드는 `src/components/AdSenseSlot.astro` 한 곳에서만 관리합니다.

## 프로젝트 구조

```text
src/
├── components/     # BaseHead(SEO), Header, Footer, PostCard, PostMeta, Callout, AdSenseSlot
├── content/blog/   # 블로그 글 (Markdown / MDX), <카테고리>/ 폴더로 구분
├── content.config.ts
├── consts.ts       # 사이트 이름, 작성자, 카테고리 등 전역 설정
├── data/           # Projects 페이지 정적 데이터
├── layouts/        # BaseLayout, BlogPost
├── lib/            # 글 조회 / URL 헬퍼
├── pages/          # 라우트 (index, blog, categories, projects, about, privacy, 404, rss.xml, robots.txt)
└── styles/         # global.css (Tailwind)

public/
├── images/         # og-default.png, blog/<slug>/*.webp
└── favicon.svg
```
