# 블로그 글쓰기 가이드

글 쓸 때 참고용 문서. 제품 요구사항은 `BLOG_MVP_SPEC.md`, 개발 규칙은 `CLAUDE.md` 참고.

---

## 1. 새 글 만들기

1. `src/content/blog/<카테고리>/` 폴더에 `.md` 파일을 만든다.
   카테고리 폴더명은 `category` 값과 동일: `Development` / `AI` / `Engineering` / `Certification` / `Projects` / `Papers`
2. 파일명은 자유롭게 (정렬 편하게 `[1]제목.md` 식으로 번호 붙여도 됨). 파일명과 폴더는 URL에 영향 없음.
3. frontmatter 작성 (아래 참고).
4. 본문 작성.
5. commit 후 `main`에 push하면 자동 배포.

### Frontmatter 예시

```yaml
---
title: "Ubuntu에서 Docker Permission Denied 해결하기"
description: "docker.sock permission denied 오류를 실제로 해결한 과정을 정리합니다."
publishedAt: 2026-09-11
updatedAt: 2026-09-11        # 선택
category: Development        # Development | AI | Engineering | Certification | Projects | Papers
slug: docker-permission-fix  # 실제 URL이 됨 (/blog/docker-permission-fix/). 생략하면 파일명이 URL이 됨
tags:
  - Ubuntu
  - Docker
draft: false                 # true면 배포에서 제외
---
```

- `slug`는 소문자 + 하이픈으로, 짧고 내용이 짐작되게.
- `draft: true`로 두면 로컬(`npm run dev`)에서만 보이고 실제 배포엔 안 나감. 다 쓰면 `false`로.

### 이미지

`public/images/blog/<slug>/`에 넣고 절대경로로 참조. WebP/AVIF 권장.

```md
![GPU 메모리 사용량](/images/blog/docker-permission-fix/gpu-memory.webp)
```

---

## 2. Markdown 문법

본문은 `##`(h2)부터 시작 (frontmatter의 `title`이 이미 h1).

### 제목
```md
## H2
### H3
#### H4
```

### 문단
빈 줄로 문단을 구분한다. 줄바꿈만 하면 한 문단으로 이어진다.
```md
첫 번째 문단.

두 번째 문단.
```

### 강조
```md
**굵게**
*기울임*
~~취소선~~
```

### 목록
```md
- 항목1
- 항목2
  - 하위 항목

1. 첫번째
2. 두번째
```

### 링크 / 이미지
```md
[링크 텍스트](https://example.com)
![대체 텍스트](/images/blog/slug/파일명.webp)
```
이미지 alt 텍스트는 SEO/접근성 때문에 항상 채운다.

### 코드
인라인: `` `code` ``

블록 (언어명 붙이면 하이라이팅):
````md
```bash
docker ps -a
```
````

### 인용
```md
> 인용문
```

### 구분선
```md
---
```

### 표
```md
| 항목 | 설명 |
| --- | --- |
| A | 설명1 |
```

---

## 3. .md vs .mdx

일반 글은 `.md`로 충분하다. 리액트 컴포넌트를 본문에 넣어야 하는 특수한 경우에만 `.mdx` 사용.
