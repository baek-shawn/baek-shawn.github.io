// 사이트 전역 설정. 사이트 URL(site/base)은 astro.config.mjs에서 관리한다.

export const SITE_TITLE = 'Shawn Dev Log';
export const SITE_DESCRIPTION = '개발하면서 배우고, 실패하고, 해결한 기록';
export const SITE_AUTHOR = 'Shawn';
export const SITE_LANG = 'ko';

// 연락 방법 (About / Privacy 페이지에 표시). 비워두면 해당 항목을 표시하지 않는다.
export const CONTACT_EMAIL = 'shawnbback@gmail.com';
export const GITHUB_URL = 'https://github.com/baek-shawn';

// 초기 카테고리는 5개로 고정한다. 세부 기술(SDR, Raspberry Pi, 논문 제목, 자격증 이름 등)은 tags로 관리한다.
//
// 분류 기준은 "주제"가 아니라 "글의 성격"이다.
// - 직접 만들거나 실험한 결과물(하드웨어+AI 조합, 구매/리뷰 포함)이면 무조건 Projects.
// - 그 외에는 지식/개념 정리 글이며, 주제에 맞는 카테고리(Development/AI/Engineering/Certification)를 고른다.
// - 자격증 준비 과정이나 합격 후기 자체는 Certification. 그 자격증을 활용해 만든 프로젝트는 Projects.
export const CATEGORIES = ['Development', 'AI', 'Engineering', 'Certification', 'Projects'] as const;
export type Category = (typeof CATEGORIES)[number];

// Home / Category 페이지에 표시할 카테고리 설명
export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  Development: '소프트웨어 개발과 CS 기초 지식, 도구·환경 정리 (Linux, Docker 등)',
  AI: 'AI / ML 개념과 논문 정리, LLM·GPU 이론',
  Engineering: 'CAD, 무선통신 / SDR, 하드웨어 관련 공학 지식',
  Certification: '자격증 준비 과정과 합격 후기',
  Projects: '직접 만들고 실험한 것 전부 (무선기기+AI 데이터 분석, 라즈베리파이, 로컬 LLM 하드웨어, 구매/리뷰 포함)',
};
