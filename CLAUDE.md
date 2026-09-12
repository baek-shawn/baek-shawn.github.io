# CLAUDE.md

## 1. 목적

이 파일은 이 저장소에서 작업하는 코딩 에이전트가 항상 따라야 하는 개발 지침을 정의한다.

현재 프로젝트는 개인 개발 블로그 MVP 프로젝트다.

상세한 제품 요구사항과 MVP 범위는 다음 문서에 정의되어 있다.

```text
BLOG_MVP_SPEC.md
```

제품 기능을 구현하거나 변경하기 전에 반드시 `BLOG_MVP_SPEC.md`를 먼저 읽는다.

---

# 2. 기준 문서 우선순위

의사결정 시 다음 우선순위를 따른다.

1. 현재 세션에서 사용자가 명시적으로 전달한 지시
2. `CLAUDE.md`
3. `BLOG_MVP_SPEC.md`
4. 현재 프로젝트 코드와 기존 구조
5. `README.md`

요구사항이 애매한 경우에는 MVP 범위를 벗어나지 않는 가장 단순한 구현 방식을 선택한다.

새로운 제품 요구사항을 임의로 만들어내지 않는다.

---

# 3. 프로젝트의 1차 목표

이 프로젝트의 1차 목표는 다음과 같다.

```text
블로그 MVP 빠르게 구현
        ↓
GitHub Pages에서 테스트 배포
        ↓
개인 도메인 연결
        ↓
실제 개발 글 작성
        ↓
검색엔진 등록
        ↓
Google AdSense 신청
        ↓
승인 후 AdSense 적용
```

이 프로젝트의 목적은 복잡한 블로그 플랫폼을 만드는 것이 아니다.

가능한 한 빠르게 실제 운영 가능한 블로그를 완성하고 배포하는 것이 우선이다.

---

# 4. 필수 기술 스택

사용자가 별도로 변경하지 않는 한 다음 기술 스택을 사용한다.

```text
Astro
TypeScript
Tailwind CSS
Markdown / MDX
Astro Content Collections
Git
GitHub
GitHub Pages
```

가능한 경우 Astro 공식 권장 방식과 표준적인 구조를 우선한다.

불필요하게 다른 프레임워크나 복잡한 아키텍처를 추가하지 않는다.

---

# 5. 핵심 개발 원칙

## 5.1 단순함을 우선한다

항상 다음을 우선한다.

- 단순한 코드
- 이해하기 쉬운 구조
- 최소한의 의존성
- 정적 생성 방식
- 필요한 경우에만 재사용 컴포넌트 작성
- Astro 표준 패턴 사용
- 쉬운 유지보수

즉시 필요한 가치가 없는 추상화는 만들지 않는다.

과도한 설계를 하지 않는다.

---

## 5.2 기능 개수보다 빠른 MVP 배포를 우선한다

우선순위는 다음과 같다.

```text
1. 실제로 동작하는 블로그
2. 빠른 배포
3. 편한 글 작성 방식
4. SEO
5. 모바일 가독성
6. 디자인 완성도
```

배포를 늦추는 복잡한 구현보다 단순하지만 정상 동작하는 구현을 우선한다.

---

# 6. 요청하지 않은 기능을 추가하지 않는다

`BLOG_MVP_SPEC.md`에 없는 기능을 임의로 구현하지 않는다.

특히 다음 기능은 사용자가 명시적으로 요청하기 전까지 추가하지 않는다.

```text
Database
Backend API
Authentication
Login
Signup
Admin Dashboard
Custom CMS
Custom Editor
Custom Comment System
Like System
View Counter
AI Chatbot
RAG
Recommendation Engine
Personalization
Payment
Premium Content
Newsletter Backend
Complex Analytics System
Complex Search
SaaS Features
Mobile App
```

향후 필요해 보인다는 이유만으로 미리 구현하지 않는다.

---

# 7. 의존성 추가 원칙

새 패키지를 추가하기 전에 다음 순서를 따른다.

1. Astro 또는 현재 사용 중인 기술 스택만으로 해결 가능한지 확인한다.
2. 기본 기능으로 해결할 수 있다면 외부 패키지를 추가하지 않는다.
3. 구현을 명확하게 단순화할 수 있는 경우에만 패키지를 추가한다.
4. 작은 기능을 위해 큰 라이브러리를 추가하지 않는다.
5. 같은 역할을 하는 라이브러리를 중복해서 사용하지 않는다.

유명한 라이브러리라는 이유만으로 추가하지 않는다.

---

# 8. 프로젝트 구조

프로젝트 구조는 한눈에 이해할 수 있게 유지한다.

권장 구조는 다음과 같다.

```text
src/
├── components/
├── content/
│   └── blog/
├── layouts/
├── pages/
└── styles/

public/
└── images/
```

불필요하게 디렉터리 계층을 깊게 만들지 않는다.

---

# 9. 콘텐츠 관리 원칙

블로그 글은 Markdown 또는 MDX로 쉽게 작성할 수 있어야 한다.

블로그 콘텐츠는 Astro Content Collections를 사용한다.

메타데이터는 `BLOG_MVP_SPEC.md`에서 요구하는 필드를 지원해야 한다.

예:

```text
title
description
publishedAt
updatedAt
category
tags
draft
```

새로운 글 작성 과정은 최대한 단순해야 한다.

정상적인 글 작성 흐름은 다음 정도면 충분하다.

1. Markdown 또는 MDX 파일 생성
2. Frontmatter 작성
3. 본문 작성
4. commit 및 push

---

# 10. 컴포넌트 작성 원칙

실제 중복을 줄이거나 중요한 기능을 한 곳에서 관리할 수 있을 때만 재사용 컴포넌트를 만든다.

적절한 공통 컴포넌트 예시는 다음과 같다.

```text
Header
Footer
BaseLayout
SEO Metadata
Blog Card
Post Metadata
AdSense Slot Placeholder
```

단순한 마크업까지 지나치게 작은 컴포넌트로 분리하지 않는다.

---

# 11. 스타일링 원칙

블로그 디자인은 화려함보다 가독성을 우선한다.

Tailwind CSS를 사용한다.

다음을 우선한다.

- 읽기 쉬운 글꼴 크기
- 적절한 줄 간격
- 편안한 본문 너비
- 명확한 제목 계층
- 읽기 쉬운 코드 블록
- 반응형 레이아웃
- 단순한 여백
- 최소한의 애니메이션

MVP 단계에서는 장식적인 UI에 과도한 시간을 사용하지 않는다.

---

# 12. 반응형 디자인

모든 주요 페이지는 다음 환경에서 정상적으로 동작해야 한다.

```text
Desktop
Tablet
Mobile
```

모바일 대응은 나중에 처리할 기능이 아니다.

페이지를 완료하기 전에 다음을 확인한다.

- Navigation이 정상적으로 동작하는가
- 텍스트가 화면 밖으로 넘치지 않는가
- 코드 블록을 사용할 수 있는가
- 이미지가 정상적으로 축소되는가
- 카드와 메타데이터가 읽기 쉬운가

---

# 13. SEO 원칙

SEO는 MVP의 일부이며 나중으로 미루지 않는다.

`BLOG_MVP_SPEC.md`에 정의된 다음 요소를 지원한다.

```text
title
meta description
canonical URL
Open Graph
Twitter/X Card
sitemap.xml
robots.txt
RSS
semantic HTML
heading hierarchy
image alt text
clean URL
```

SEO 관련 로직을 여러 페이지에 중복 작성하지 않는다.

가능하면 공통 Layout 또는 SEO 컴포넌트에서 관리한다.

---

# 14. URL 원칙

읽기 쉬운 slug를 사용한다.

좋은 예:

```text
/blog/vllm-install
/blog/ubuntu-docker-permission
```

피해야 할 예:

```text
/blog/2026/09/11/12345
```

실제 콘텐츠를 운영하기 시작한 뒤에는 URL 구조를 가볍게 변경하지 않는다.

---

# 15. GitHub Pages 배포 원칙

초기 배포 대상은 GitHub Pages다.

Routing, Asset, Sitemap, RSS, Canonical URL 등을 구현할 때 GitHub Pages 배포 환경을 고려한다.

특히 다음을 주의한다.

- repository base path가 필요한 경우 정상 처리
- local path 하드코딩 금지
- production build 결과 확인
- 배포 후 asset 경로 확인
- 이미지 경로 확인
- 실제 배포 URL에서 페이지 접근 확인

localhost에서 동작한다고 해서 GitHub Pages에서도 정상 동작한다고 가정하지 않는다.

---

# 16. 개인 도메인 전환 원칙

GitHub Pages는 초기 테스트 용도로 사용한다.

테스트 완료 후 개인 도메인을 연결한다.

개인 도메인으로 전환할 때 프로젝트 구조를 크게 수정하지 않아도 되도록 만든다.

임시 `github.io` 주소에 프로젝트를 과도하게 종속시키지 않는다.

가능한 경우 사이트 기본 URL 설정은 한 곳에서 관리한다.

---

# 17. AdSense 원칙

Google AdSense는 이 프로젝트의 1차 수익화 목표에 포함된다.

하지만 승인 전부터 광고 기능을 과하게 구현하지 않는다.

승인 전에는 다음을 따른다.

- 가짜 광고를 표시하지 않는다.
- 과도한 광고 placeholder를 넣지 않는다.
- 사이트를 깔끔하게 유지한다.
- About 페이지를 제공한다.
- Privacy 페이지를 제공한다.
- 연락 방법을 제공한다.
- 정상적인 Navigation을 유지한다.

AdSense 관련 컴포넌트를 만든다면 광고 코드를 여러 페이지에 직접 복붙하지 않고 한 곳에서 관리할 수 있도록 한다.

실제 광고 활성화는 승인 후 진행한다.

---

# 18. Analytics 원칙

Analytics 설정은 선택적으로 동작해야 한다.

Google Analytics를 추가하는 경우 다음과 같은 환경변수 또는 설정값을 사용한다.

```text
PUBLIC_GA_ID
```

값이 없으면 Analytics script를 로드하지 않는다.

계정별 ID를 코드에 직접 하드코딩하지 않는다.

---

# 19. 이미지 관리

MVP에서는 다음 원칙을 따른다.

- 프로젝트 내부 이미지 사용
- 가능하면 WebP 또는 AVIF 사용
- alt text 지원
- 외부 이미지 저장소 도입 금지
- 명시적 요청이 없으면 S3, R2, 이미지 서버 추가 금지

이미지 경로는 예측 가능하게 관리한다.

---

# 20. 코드 품질

다른 개발자가 빠르게 이해할 수 있는 코드를 작성한다.

다음을 우선한다.

- 의미 있는 변수명과 함수명
- 짧고 명확한 함수
- 명시적인 동작
- TypeScript 타입 안정성
- 이해하기 쉬운 구현
- 작은 단위의 변경

복잡한 디자인 패턴은 명확한 이유가 있을 때만 사용한다.

---

# 21. 기존 코드 우선 확인

프로젝트를 수정하기 전에 다음 순서를 따른다.

1. 현재 저장소 구조를 확인한다.
2. 기존 구현 방식을 이해한다.
3. 사용할 수 있는 기존 컴포넌트와 유틸리티를 먼저 찾는다.
4. 특별한 이유가 없다면 정상 동작하는 코드를 불필요하게 다시 작성하지 않는다.

단순히 다른 스타일을 선호한다는 이유만으로 기존 코드를 교체하지 않는다.

---

# 22. 변경 범위

사용자가 요청한 작업 범위 안에서 수정한다.

관련 없는 리팩터링을 기능 구현과 함께 진행하지 않는다.

리팩터링이 반드시 필요한 경우에는 다음을 따른다.

- 변경 범위를 작게 유지한다.
- 왜 필요한지 설명할 수 있어야 한다.
- 기존 동작을 유지한다.

---

# 23. 변경 후 검증

의미 있는 변경을 완료한 뒤 프로젝트에서 사용할 수 있는 검증 명령을 실행한다.

최소한 가능한 경우 다음을 확인한다.

```text
install
type check
build
```

프로젝트에 lint 또는 test 명령이 정의되어 있다면 함께 실행한다.

GitHub Pages 관련 작업을 완료했다고 판단하기 전에 production build가 성공하는지 반드시 확인한다.

Build가 깨진 상태에서 작업이 완료되었다고 말하지 않는다.

---

# 24. 오류 처리

명령이나 build가 실패한 경우 다음 순서로 처리한다.

1. 실제 오류 메시지를 확인한다.
2. 근본 원인을 찾는다.
3. 문제를 수정한다.
4. 관련 검증 명령을 다시 실행한다.

단순히 build를 통과시키기 위해 type check 또는 validation을 임의로 비활성화하지 않는다.

---

# 25. README 관리

`README.md`는 사람이 프로젝트를 이해하고 실행할 수 있도록 유지한다.

최소한 다음 내용을 포함한다.

```text
프로젝트 소개
Tech Stack
설치 방법
로컬 실행 방법
Build 방법
새 Blog Post 추가 방법
GitHub Pages 배포 방법
Custom Domain 연결 방법
Environment Variables
```

장기적으로 필요하지 않은 임시 메모는 README에 넣지 않는다.

---

# 26. 새로운 작업을 수행하는 방식

의미 있는 작업을 시작할 때 다음 순서를 따른다.

1. `BLOG_MVP_SPEC.md`의 관련 부분을 읽는다.
2. 현재 구현 상태를 확인한다.
3. 가장 작은 올바른 변경을 결정한다.
4. 구현한다.
5. 관련 검증을 실행한다.
6. 변경 내용과 남은 문제를 간단히 정리한다.

큰 작업은 프로젝트 전체를 한 번에 다시 작성하기보다 단계적으로 진행한다.

---

# 27. 판단이 애매할 때의 기준

여러 방법이 모두 가능하다면 다음 조건에 더 가까운 방식을 선택한다.

```text
더 단순한 방식
더 표준적인 방식
더 배포하기 쉬운 방식
더 유지보수하기 쉬운 방식
Astro 공식 지원에 가까운 방식
외부 서비스 의존성이 더 적은 방식
```

미래에 쓸 수도 있다는 이유만으로 복잡한 방식을 선택하지 않는다.

---

# 28. 가상의 미래 기능을 위해 설계하지 않는다

현재 MVP를 다음과 같은 미래 가능성에 맞춰 미리 복잡하게 설계하지 않는다.

```text
SaaS
Membership
AI Search
Payment
Large-scale CMS
Multi-user Publishing
Complex Backend
```

이 기능들은 실제로 필요하지 않을 수도 있다.

현재 요구사항을 위한 코드를 작성한다.

---

# 29. 현재 구현 순서

프로젝트가 이미 해당 단계를 지나지 않았다면 `BLOG_MVP_SPEC.md`의 구현 순서를 따른다.

전체적인 순서는 다음과 같다.

```text
1. Astro + TypeScript + Tailwind
2. Content Collections + Markdown/MDX
3. 공통 Layout / Header / Footer
4. Home / Blog / Blog Post
5. Category / Projects / About / Privacy
6. SEO / Sitemap / RSS / Robots
7. Responsive 검증
8. Sample Content
9. GitHub Actions
10. GitHub Pages 배포
11. 실제 배포 환경 검증
```

핵심 흐름이 정상 동작하기 전에 선택 기능을 먼저 개발하지 않는다.

---

# 30. 완료 기준

코드를 작성했다고 해서 작업이 끝난 것은 아니다.

작업 내용에 따라 다음을 만족해야 한다.

- Build 성공
- 현재 프로젝트 구조와 정상적으로 통합
- MVP 명세 준수
- 반응형 동작
- 불필요한 의존성 추가 없음
- 요청하지 않은 기능 추가 없음
- GitHub Pages 배포 가능 상태 유지

---

# 31. 최종 원칙

이 프로젝트의 성공 기준은 작성한 코드의 양이 아니다.

성공 기준은 다음과 같다.

> 깔끔하고 빠르고 읽기 쉬운 개발 블로그를 빠르게 배포하고, 꾸준히 글을 작성할 수 있으며, 검색엔진에 정상적으로 노출되고, AdSense를 적용할 수 있는 상태를 만드는 것.

판단이 애매하다면 복잡성을 줄이고 이 목표에 더 가까워지는 방향을 선택한다.
