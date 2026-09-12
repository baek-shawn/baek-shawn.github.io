// 사이트 전역 설정. 사이트 URL(site/base)은 astro.config.mjs에서 관리한다.

export const SITE_TITLE = 'Shawn Dev Log';
export const SITE_DESCRIPTION = '개발하면서 배우고, 실패하고, 해결한 기록';
export const SITE_AUTHOR = 'Shawn';
export const SITE_LANG = 'ko';

// 연락 방법 (About / Privacy 페이지에 표시). 비워두면 해당 항목을 표시하지 않는다.
export const CONTACT_EMAIL = '';
export const GITHUB_URL = '';

// 초기 카테고리는 5개로 고정한다. 세부 기술은 tags로 관리한다.
export const CATEGORIES = ['Development', 'AI', 'Engineering', 'Certification', 'Projects'] as const;
export type Category = (typeof CATEGORIES)[number];

// Home / Category 페이지에 표시할 카테고리 설명
export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  Development: '소프트웨어 개발, Linux, Docker, 도구와 환경 설정',
  AI: 'LLM, Local AI, Computer Vision, OCR, GPU / CUDA',
  Engineering: 'CAD, 무선 / SDR, 하드웨어와 공학 실험',
  Certification: '자격증 준비 과정과 합격 후기',
  Projects: '개인 프로젝트 개발 기록',
};
