// 사이트 전역 설정. 사이트 URL(site/base)은 astro.config.mjs에서 관리한다.

export const SITE_TITLE = 'Shawn Dev Log';
export const SITE_DESCRIPTION = '개발하면서 배우고, 실패하고, 해결한 기록';
export const SITE_AUTHOR = 'Shawn';
export const SITE_LANG = 'ko';

// 연락 방법 (About / Privacy 페이지에 표시). 비워두면 해당 항목을 표시하지 않는다.
export const CONTACT_EMAIL = 'shawnbback@gmail.com';
export const GITHUB_URL = 'https://github.com/baek-shawn';

// 카테고리는 6개로 고정한다. 세부 기술(SDR, Raspberry Pi, 논문 제목, 자격증 이름 등)은 tags로 관리한다.
//
// 분류 기준은 "주제"가 아니라 "글의 성격"이다.
// - Development / AI / Engineering: 해당 주제의 지식 정리 + 간단한 테스트/실습(빠르게 해보고 결과만 확인한 것)도 포함.
// - Projects: 여러 요소를 엮어서 규모 있게 만든 결과물 (완성된 도구, 하드웨어+AI 파이프라인 전체, 구매/리뷰 등).
// - Certification: 자격증 준비 과정이나 합격 후기 자체. 그 자격증을 활용해 규모 있게 만든 프로젝트는 Projects.
// - Papers: 논문 리뷰/정리.
export const CATEGORIES = ['Development', 'AI', 'Engineering', 'Certification', 'Projects', 'Papers'] as const;
export type Category = (typeof CATEGORIES)[number];

// Home / Category 페이지에 표시할 카테고리 설명
export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  Development: '소프트웨어 개발과 CS 기초 지식, 도구·환경 정리, 간단한 실습 (Linux, Docker 등)',
  AI: 'AI / ML 지식과 간단한 실습·테스트, LLM·GPU 이론',
  Engineering: 'CAD, 무선통신 / SDR, 하드웨어 관련 공학 지식과 간단한 실습',
  Certification: '자격증 준비 과정과 합격 후기',
  Projects: '여러 요소를 엮어서 규모 있게 만든 결과물 (완성된 도구, 하드웨어+AI 파이프라인, 구매/리뷰 포함)',
  Papers: '논문 리뷰와 정리',
};
