// Projects 페이지에 표시할 개인 프로젝트 목록. DB 없이 정적 데이터로 관리한다.
// relatedPosts에는 src/content/blog/ 파일명(확장자 제외)을 넣는다.

export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  relatedPosts?: string[];
}

export const projects: Project[] = [
  {
    name: 'Developer Blog',
    description:
      'Astro와 Markdown으로 만든 이 블로그. 정적 사이트로 빌드해 GitHub Pages에 자동 배포한다.',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages'],
  },
];
