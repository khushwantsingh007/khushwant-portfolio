import type { GithubRepo, Project, ProjectCategory } from '../types/project';
import { fallbackProjects } from '../data/projects';

const GITHUB_USERNAME = 'khushwantsingh007';
const CACHE_KEY = `gh_repos_${GITHUB_USERNAME}`;
const CACHE_EXPIRY_MS = 1000 * 60 * 30; // 30 minutes cache

function categorizeRepo(repo: GithubRepo): ProjectCategory {
  const name = repo.name.toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const lang = (repo.language || '').toLowerCase();

  if (name.includes('cctv') || name.includes('vision') || name.includes('ai') || desc.includes('machine learning') || desc.includes('vision')) {
    return 'AI / ML';
  }
  if (lang === 'c++' || lang === 'cpp') {
    return 'C++';
  }
  if (lang === 'python' || name.includes('python')) {
    return 'Python';
  }
  if (name.includes('dbms') || name.includes('fullstack') || name.includes('full-stack') || (lang === 'typescript' && !name.includes('cctv'))) {
    return 'Full Stack';
  }
  if (lang === 'javascript' || lang === 'html' || lang === 'css') {
    return 'Web';
  }
  return 'Other';
}

function cleanProjectTitle(name: string): string {
  return name
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(' ')
    .map(word => {
      if (word.toUpperCase() === 'DBMS') return 'DBMS';
      if (word.toUpperCase() === 'DAA') return 'DAA';
      if (word.toUpperCase() === 'AI') return 'AI';
      if (word.toUpperCase() === 'OS') return 'OS';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export async function fetchGithubRepositories(): Promise<{
  projects: Project[];
  isRateLimited: boolean;
  fromCache: boolean;
}> {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_EXPIRY_MS) {
        return { projects: parsed.data, isRateLimited: false, fromCache: true };
      }
    }
  } catch (err) {}

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (response.status === 403 || response.status === 429) {
      return {
        projects: fallbackProjects,
        isRateLimited: true,
        fromCache: false,
      };
    }

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const repos: GithubRepo[] = await response.json();

    const projects: Project[] = repos
      .filter(repo => repo.name !== 'smart-cctv-analytics')
      .map(repo => {
        const curated = fallbackProjects.find(fp => fp.name === repo.name);
        const category = curated ? curated.category : categorizeRepo(repo);
        const techList: string[] = [];
        if (repo.language) techList.push(repo.language);
        if (curated) {
          curated.technologies.forEach(t => {
            if (!techList.includes(t)) techList.push(t);
          });
        }

        return {
          id: repo.name,
          name: repo.name,
          title: curated?.title || cleanProjectTitle(repo.name),
          description:
            curated?.description ||
            repo.description ||
            `Production and academic software repository for ${cleanProjectTitle(repo.name)}.`,
          technologies: techList.length > 0 ? techList : ['Code'],
          category,
          github: repo.html_url,
          demo: repo.homepage || undefined,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: repo.updated_at ? repo.updated_at.split('T')[0] : undefined,
          highlights: curated?.highlights || ['Open Source', 'GitHub Hosted'],
        };
      });

    try {
      sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), data: projects })
      );
    } catch (e) {}

    return { projects, isRateLimited: false, fromCache: false };
  } catch (error) {
    return {
      projects: fallbackProjects,
      isRateLimited: false,
      fromCache: false,
    };
  }
}
