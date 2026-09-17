import { useState, useEffect, useCallback } from 'react';
import type { Project } from '../types/project';
import { fetchGithubRepositories } from '../services/github';
import { fallbackProjects } from '../data/projects';

export function useGithubRepos() {
  const [repos, setRepos] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isRateLimited, setIsRateLimited] = useState<boolean>(false);
  const [fromCache, setFromCache] = useState<boolean>(false);

  const loadRepos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchGithubRepositories();
      if (result.projects && result.projects.length > 0) {
        setRepos(result.projects);
      } else {
        setRepos(fallbackProjects);
      }
      setIsRateLimited(result.isRateLimited);
      setFromCache(result.fromCache);
    } catch (err) {
      setError('Unable to load live GitHub repositories right now.');
      setRepos(fallbackProjects);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRepos();
  }, [loadRepos]);

  return { repos, loading, error, isRateLimited, fromCache, refetch: loadRepos };
}
