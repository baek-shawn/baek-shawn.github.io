# Personal Developer Blog MVP - Development Specification

## 0. 문서 목적

이 문서는 개인 개발 블로그의 **1차 MVP 개발 및 운영 범위**를 정의한다.

현재 목표는 복잡한 블로그 플랫폼이나 SaaS를 만드는 것이 아니다.

최우선 목표는 다음과 같다.

> **최대한 빠르게 개발 블로그를 완성하고 GitHub Pages에서 테스트 배포한 뒤, 개인 도메인으로 전환하여 실제 글을 꾸준히 작성하고 Google AdSense 승인을 받아 광고를 적용한다.**

Codex / Claude Code 등의 코딩 에이전트는 이 문서를 기준으로 구현한다.

---

# 1. 프로젝트 목표

## 1.1 1차 목표

다음 흐름을 빠르게 완성한다.

```text
Astro 블로그 개발
        ↓
GitHub Repository
        ↓
GitHub Pages (github.io) 테스트 배포
        ↓
기본 기능 / 모바일 / SEO 확인
        ↓
개인 도메인 구매 및 연결
        ↓
Google Search Console 등록
        ↓
Naver Search Advisor 등록
        ↓
실제 경험 기반 개발 글 지속 작성
        ↓
Google AdSense 신청
        ↓
승인 후 광고 적용
```

---

## 1.2 블로그 컨셉

특정 기술 하나만 다루는 전문 블로그가 아니라 다음 범위를 포괄하는 개인 개발 블로그다.

> **현직 개발자가 실제로 개발하고, 공부하고, 실패하고, 해결한 경험을 기록하는 실전형 개발·CS·공학 블로그**

주요 콘텐츠 영역:

- Software Development
- AI / Machine Learning
- Computer Vision
- LLM / Local AI
- Linux / Ubuntu
- Docker
- GPU / CUDA
- CAD
- OCR
- Engineering
- Wireless / SDR
- Certification
- Personal Projects

핵심 콘텐츠 원칙:

> 개발 → 문제 발생 → 해결 → 기록

AI가 생성한 일반적인 정보만 나열하지 않고 다음을 우선한다.

- 실제 에러 메시지
- 실제 명령어
- 실제 코드
- 실제 스크린샷
- 실제 실험 결과
- 실패 과정
- 최종 해결 방법
- 개인적인 판단과 경험

---

# 2. 기술 스택

## 필수 기술

| 영역 | 기술 |
|---|---|
| Framework | Astro |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | Markdown + MDX |
| Content Management | Astro Content Collections |
| Syntax Highlighting | Shiki 또는 Astro 기본 지원 |
| Version Control | Git + GitHub |
| Initial Hosting | GitHub Pages |
| Production Domain | 개인 도메인 |
| Analytics | Google Analytics |
| Search Registration | Google Search Console |
| Korean Search Registration | Naver Search Advisor |
| Ads | Google AdSense |

---

# 3. 가장 중요한 개발 원칙

## 3.1 빠른 배포가 최우선

블로그 자체를 장기간 개발하는 것이 목적이 아니다.

다음 원칙을 반드시 지킨다.

- 과도한 디자인 금지
- 관리자 페이지 개발 금지
- 자체 CMS 개발 금지
- 자체 댓글 시스템 개발 금지
- DB 도입 금지
- 회원가입 개발 금지
- 로그인 개발 금지
- 좋아요 기능 개발 금지
- 조회수 시스템 개발 금지
- AI 검색 개발 금지
- 추천 시스템 개발 금지
- RAG 개발 금지
- SaaS 기능 개발 금지

필요하지 않은 기능은 모두 뒤로 미룬다.

**글을 작성하고 검색엔진에 노출할 수 있는 상태를 최대한 빨리 만드는 것이 목적이다.**

---

# 4. 사이트 구조

최초 MVP에서는 다음 페이지까지만 구현한다.

```text
/
├── Home
├── Blog
├── Categories
├── Projects
├── About
└── Blog Post
```

예시 URL:

```text
/
/blog
/blog/vllm-install
/blog/ubuntu-docker-permission
/categories/ai
/categories/development
/projects
/about
```

---

# 5. 카테고리

초기 카테고리는 다음 5개로 제한한다.

```text
Development
AI
Engineering
Certification
Projects
```

카테고리는 너무 세분화하지 않는다.

세부 기술은 Tags로 관리한다.

예:

```yaml
category: AI

tags:
  - LLM
  - vLLM
  - Qwen
  - CUDA
  - RTX3060
```

---

# 6. 콘텐츠 구조

블로그 글은 Markdown / MDX 기반으로 관리한다.

예시 디렉터리:

```text
src/
├── content/
│   └── blog/
│       ├── ubuntu-docker-permission.md
│       ├── vllm-install.md
│       ├── rtx3060-local-llm.mdx
│       └── land-radio-certification.md
│
├── components/
├── layouts/
├── pages/
└── styles/
```

---

## 6.1 Frontmatter 예시

```yaml
---
title: "Ubuntu에서 Docker Permission Denied 해결하기"
description: "docker.sock permission denied 오류를 실제로 해결한 과정을 정리합니다."
publishedAt: 2026-09-11
updatedAt: 2026-09-11
category: Development
tags:
  - Ubuntu
  - Docker
  - Linux
draft: false
---
```

Astro Content Collections의 schema validation을 사용한다.

---

# 7. 블로그 포스트 페이지

각 글 페이지에는 최소한 다음 요소가 있어야 한다.

```text
제목
설명
작성일
수정일 (선택)
카테고리
태그

본문

이전 글 / 다음 글 또는 관련 글

Footer
```

본문은 특히 개발 글을 읽기 편해야 한다.

필수 지원:

- Heading
- Paragraph
- Code Block
- Inline Code
- Table
- Image
- Blockquote
- List
- Link

코드 블록은 syntax highlighting을 적용한다.

---

# 8. 디자인

## 기본 원칙

디자인의 목표는 화려함이 아니라 **가독성**이다.

다음 스타일을 권장한다.

- 넓은 여백
- 읽기 쉬운 본문 너비
- 깔끔한 Typography
- 명확한 제목 계층
- 코드 블록 가독성
- 모바일 반응형
- 과한 애니메이션 금지

개발 블로그다운 단순하고 깔끔한 디자인을 사용한다.

---

## 8.1 Dark Mode

구현 비용이 크지 않다면 지원해도 된다.

단, Dark Mode 때문에 MVP 배포가 늦어지면 제외한다.

---

# 9. Home 페이지

Home은 복잡하게 만들 필요가 없다.

예시:

```text
[이름 / 블로그명]

개발하면서 배우고 실패하고 해결한 기록

Development
AI
Engineering
Certification
Projects

최근 글

- RTX 3060에서 Qwen 돌려보기
- Ubuntu Docker Permission Denied 해결
- vLLM 설치하기
- 육상무선통신사 합격 후기
```

Home에서 최근 게시글을 볼 수 있어야 한다.

---

# 10. Blog 페이지

전체 게시글 리스트를 보여준다.

각 카드에는 다음 정도만 표시한다.

```text
제목
Description
날짜
Category
Tags
```

최신 글부터 정렬한다.

---

# 11. Category 페이지

카테고리별 게시글을 보여준다.

예:

```text
/categories/development
/categories/ai
/categories/engineering
/categories/certification
/categories/projects
```

---

# 12. Projects 페이지

개인 프로젝트를 간단히 소개한다.

초기에는 DB나 복잡한 포트폴리오 시스템이 필요 없다.

Markdown 또는 정적 데이터로 관리한다.

예:

```text
Project Name

설명

사용 기술

GitHub

관련 글
```

---

# 13. About 페이지

다음 내용을 간단히 포함한다.

- 블로그 운영 목적
- 어떤 내용을 다루는지
- 작성자 소개
- Contact 방법

너무 개인적인 정보는 공개하지 않는다.

---

# 14. Contact

AdSense 및 사이트 신뢰성을 고려하여 방문자가 운영자에게 연락할 수 있는 방법을 제공한다.

초기에는 다음 중 하나면 충분하다.

- 이메일
- GitHub Profile
- Contact 링크

별도 Contact 서버나 Contact Form Backend는 만들지 않는다.

---

# 15. SEO

SEO 기본 설정은 MVP에서 반드시 구현한다.

## 필수

- page title
- meta description
- canonical URL
- Open Graph
- Twitter/X Card
- sitemap.xml
- robots.txt
- RSS
- semantic HTML
- heading hierarchy
- alt text 지원
- clean URL

---

## 15.1 URL 정책

날짜나 임의 ID보다 의미 있는 slug를 사용한다.

좋음:

```text
/blog/vllm-install
/blog/ubuntu-docker-permission
/blog/rtx3060-local-llm
```

피함:

```text
/blog/2026/09/11/12345
```

---

# 16. AdSense 준비

AdSense 승인을 고려하여 사이트를 처음부터 정상적인 콘텐츠 사이트 형태로 만든다.

필수 준비:

- About
- Contact 방법
- Privacy Policy
- 정상적인 Navigation
- 모바일 대응
- 깨진 링크 제거
- 충분한 본문 콘텐츠
- 독창적인 경험 기반 콘텐츠

---

# 17. Privacy Policy

`/privacy` 페이지를 만든다.

초기에는 다음 내용을 포함할 수 있는 구조를 만든다.

- Google Analytics 사용
- Google AdSense 사용 가능성
- Cookie 사용
- 외부 링크
- Affiliate Link 사용 가능성
- 개인정보 관련 문의 방법

실제 AdSense 적용 전 정책 문구를 다시 확인한다.

---

# 18. Google Analytics

개인 도메인으로 실제 운영을 시작할 때 Google Analytics를 연결한다.

Tracking ID는 환경변수 또는 설정값으로 분리한다.

예:

```env
PUBLIC_GA_ID=
```

값이 없는 경우 Analytics script를 로드하지 않는다.

---

# 19. AdSense 구현 방식

AdSense 승인 전에는 실제 광고를 보여주지 않는다.

추후 쉽게 광고를 삽입할 수 있도록 컴포넌트 구조만 고려한다.

예:

```text
src/components/AdSenseSlot.astro
```

사용 예:

```astro
<AdSenseSlot />
```

광고 코드를 여러 페이지에 직접 복붙하지 않는다.

한 컴포넌트에서 관리할 수 있도록 구성한다.

---

# 20. Affiliate Link

쿠팡 파트너스 등의 제휴 링크를 나중에 사용할 수 있다.

하지만 MVP에서는 별도 시스템을 개발하지 않는다.

일반 Markdown Link를 사용해도 된다.

필요해지면 이후 컴포넌트로 분리한다.

---

# 21. 이미지

초기에는 별도 이미지 서버나 Object Storage를 사용하지 않는다.

예:

```text
public/
└── images/
    └── blog/
        └── vllm-install/
            ├── error.webp
            ├── gpu-memory.webp
            └── result.webp
```

가능하면 WebP 또는 AVIF를 사용한다.

이미지에는 alt text를 작성할 수 있어야 한다.

---

# 22. Search

블로그 내부 검색은 **MVP 필수 기능이 아니다.**

초기에는 제외한다.

게시글 수가 많아진 뒤 Pagefind 등 정적 검색 도구 도입을 검토한다.

---

# 23. Comments

댓글 기능은 MVP에서 제외한다.

필요해지면 이후 Giscus 등을 검토한다.

자체 댓글 시스템은 개발하지 않는다.

---

# 24. 배포 - 1단계 GitHub Pages

처음에는 GitHub Pages를 이용해서 무료로 테스트한다.

예:

```text
https://<github-username>.github.io
```

또는 repository 구조에 따라:

```text
https://<github-username>.github.io/<repository-name>/
```

Astro 공식 GitHub Pages 배포 방식에 맞춰 GitHub Actions를 구성한다.

---

## 24.1 GitHub Actions

`main` branch에 push하면 자동으로 build 및 deploy 되어야 한다.

흐름:

```text
Local
  ↓
git push
  ↓
GitHub
  ↓
GitHub Actions
  ↓
Astro Build
  ↓
GitHub Pages
```

---

# 25. GitHub Pages 테스트 체크리스트

다음을 확인한다.

- [ ] Home 정상 표시
- [ ] Blog 정상 표시
- [ ] 게시글 접근 가능
- [ ] Category 정상 동작
- [ ] Projects 정상 표시
- [ ] About 정상 표시
- [ ] Privacy 정상 표시
- [ ] 모바일 정상 표시
- [ ] 이미지 정상 표시
- [ ] 코드 블록 정상 표시
- [ ] sitemap 생성
- [ ] robots.txt 생성
- [ ] RSS 생성
- [ ] canonical 정상
- [ ] Open Graph metadata 정상
- [ ] 깨진 링크 없음
- [ ] 새 Markdown 글 추가 후 자동 반영
- [ ] GitHub Actions 자동 배포 정상

---

# 26. 배포 - 2단계 개인 도메인

GitHub Pages 테스트가 정상적으로 끝나면 개인 도메인을 구매한다.

이후 GitHub Pages에 Custom Domain을 연결한다.

예:

```text
https://mydomain.com
```

또는

```text
https://www.mydomain.com
```

최종 도메인을 정하면 사이트의 canonical URL, sitemap URL, RSS URL 등을 해당 도메인 기준으로 변경한다.

---

# 27. 검색엔진 등록

개인 도메인 연결 후 다음 서비스를 등록한다.

## Google

Google Search Console

- 도메인 소유권 인증
- sitemap 제출
- indexing 상태 확인

## Naver

Naver Search Advisor

- 사이트 등록
- 소유권 인증
- sitemap 제출
- robots 확인

---

# 28. 콘텐츠 운영

블로그 개발보다 글 작성이 우선이다.

추천 초기 콘텐츠 예시:

```text
Ubuntu 24.04 설치하면서 겪은 문제
Docker Permission Denied 해결
vLLM 설치 과정
CUDA 버전 충돌 해결
Hugging Face 모델 nohup 다운로드
Qwen 로컬 실행
RTX 3060 Local LLM 테스트
OpenCode + Local vLLM 연결
육상무선통신사 비전공자 합격 후기
RTL-SDR 입문
```

글 개수 자체보다 다음을 중요하게 생각한다.

- 직접 경험했는가
- 문제를 실제로 해결했는가
- 검색한 사람이 도움을 받을 수 있는가
- 원본성이 있는가

---

# 29. AdSense 신청 시점

Google에서 공식적으로 요구하는 특정 게시글 개수는 없으므로 숫자를 강제하지 않는다.

다만 사이트가 비어 보이지 않고 블로그로서 정상적으로 운영된다고 판단될 때 신청한다.

운영상 목표 예시는 다음 정도다.

```text
개인 도메인 연결
+
필수 페이지 완성
+
검색엔진 등록
+
경험 기반 글 지속 작성
+
사이트가 빈 템플릿처럼 보이지 않는 상태
```

그 시점에 AdSense를 신청한다.

승인을 기다리는 동안에도 계속 글을 작성한다.

---

# 30. AdSense 승인 후

승인 후 다음을 진행한다.

1. AdSense script 적용
2. 광고 컴포넌트 활성화
3. 광고 위치 최소화해서 시작
4. 본문 가독성 우선
5. 모바일 UI 확인
6. Core Web Vitals 및 페이지 속도 확인

광고 때문에 사용자 경험을 크게 해치지 않는다.

---

# 31. MVP에서 하지 않는 것

다음은 1차 목표 범위가 아니다.

```text
회원가입
로그인
DB
CMS
Admin Dashboard
Custom Editor
Like
View Counter
Custom Comment
AI Chatbot
RAG
Recommendation Engine
Personalization
Newsletter Backend
Payment
Premium Content
SaaS
Mobile App
Complex Search
```

코딩 에이전트는 위 기능을 선제적으로 구현하지 않는다.

---

# 32. 완료 기준 Definition of Done

MVP는 다음 조건을 만족하면 완료다.

## Development

- [ ] Astro 프로젝트 정상 실행
- [ ] TypeScript 사용
- [ ] Tailwind 설정
- [ ] Markdown/MDX 지원
- [ ] Content Collections 사용
- [ ] Category / Tag metadata 지원

## Pages

- [ ] Home
- [ ] Blog
- [ ] Blog Post
- [ ] Categories
- [ ] Projects
- [ ] About
- [ ] Privacy

## SEO

- [ ] Title
- [ ] Description
- [ ] Canonical
- [ ] Open Graph
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] RSS

## UX

- [ ] Desktop 정상
- [ ] Mobile 정상
- [ ] 코드 가독성
- [ ] 이미지 가독성
- [ ] Navigation 정상
- [ ] 깨진 링크 없음

## Deployment

- [ ] GitHub Repository 생성
- [ ] GitHub Actions 구성
- [ ] github.io 테스트 배포 성공
- [ ] Markdown 글 추가 → push → 자동 배포 확인

---

# 33. 코딩 에이전트에게 주는 핵심 지침

Codex / Claude Code는 다음 원칙을 반드시 따른다.

## Priority

```text
1. 동작하는 블로그
2. 빠른 배포
3. 글 작성 편의성
4. SEO
5. 모바일 가독성
6. 디자인
```

---

## Do

- Astro 권장 구조 사용
- 공식적인 Astro 방식 우선
- 단순한 코드 작성
- 재사용 가능한 Layout / Component 구성
- Markdown 작성 경험을 편하게 만들 것
- GitHub Pages 배포 가능하게 만들 것
- 향후 개인 도메인 연결을 어렵지 않게 만들 것
- SEO metadata 재사용 가능하게 만들 것

---

## Do Not

- Overengineering 하지 말 것
- 불필요한 dependency를 넣지 말 것
- DB를 추가하지 말 것
- Backend를 추가하지 말 것
- 인증 시스템을 만들지 말 것
- 관리자 페이지를 만들지 말 것
- CMS를 만들지 말 것
- 요청하지 않은 기능을 추가하지 말 것
- 디자인 작업에 과도한 시간을 사용하지 말 것

---

# 34. 코딩 에이전트 작업 순서

다음 순서대로 구현한다.

```text
Step 1
Astro + TypeScript + Tailwind 프로젝트 구성

Step 2
Content Collections + Markdown/MDX 구성

Step 3
Global Layout / Header / Footer

Step 4
Home / Blog / Blog Post

Step 5
Category / Projects / About / Privacy

Step 6
SEO / Sitemap / RSS / Robots

Step 7
Responsive UI 점검

Step 8
Sample Blog Posts 추가

Step 9
GitHub Actions 설정

Step 10
GitHub Pages 테스트 배포

Step 11
배포 환경에서 URL / 이미지 / SEO 점검
```

각 Step 완료 후 다음 Step으로 이동한다.

---

# 35. 초기 Sample Post

테스트를 위해 최소 3개 정도의 Sample Post를 넣는다.

예:

```text
Welcome to My Developer Blog
Ubuntu Docker Permission Error Example
Local LLM Experiment Example
```

이 글들은 실제 운영 시작 전에 수정하거나 삭제할 수 있다.

---

# 36. README

프로젝트 README에는 최소한 다음 내용을 작성한다.

```text
Project 소개

Tech Stack

Local Development

Install

Run

Build

Add New Blog Post

Deploy to GitHub Pages

Custom Domain

Environment Variables
```

새로운 글을 어떻게 작성하는지 반드시 설명한다.

---

# 37. 최종 방향

이 프로젝트의 핵심은 사이트 개발 자체가 아니다.

최종 목적은 다음 흐름을 만드는 것이다.

```text
개발 / 공부 / 실험
        ↓
문제와 해결 과정 기록
        ↓
Markdown Blog Post
        ↓
Google / Naver 검색 노출
        ↓
검색 방문자
        ↓
AdSense
        ↓
장기적으로 콘텐츠 자산 축적
```

따라서 기능 개발보다 **콘텐츠 작성과 검색 노출을 빠르게 시작하는 것**을 항상 우선한다.

---

# 38. 1차 프로젝트 종료 조건

다음 상태가 되면 1차 목표를 달성한 것으로 본다.

```text
Astro Blog MVP 완성
        ↓
github.io 배포 성공
        ↓
개인 도메인 연결
        ↓
Google / Naver 검색 등록
        ↓
실제 개발 글 지속 작성
        ↓
Google AdSense 신청
        ↓
승인
        ↓
AdSense 적용
```

이 이후의 기능 확장은 별도의 Roadmap 문서에서 관리한다.

현재 프로젝트에서는 여기까지만 집중한다.
