import React, { useState } from 'react';
import { 
  FolderGit2, 
  Filter, 
  AlertCircle, 
  RefreshCw
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project, ProjectCategory } from '../types/project';
import { useGithubRepos } from '../hooks/useGithubRepos';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { profile } from '../data/profile';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'AI / ML',
  'Full Stack',
  'Python',
  'C++',
  'Web',
  'Other'
];

export const Projects: React.FC = () => {
  const { repos, loading, error, isRateLimited, refetch } = useGithubRepos();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? repos
    : repos.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>04. Complete Codebases</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              More Projects &amp; Systems
            </h2>
            <p className="text-foreground-muted mt-2 text-sm sm:text-base max-w-xl">
              Additional academic, systems engineering, and open-source repositories synchronized with the GitHub REST API.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-surface-secondary border border-border/80 hover:border-accent/40 text-foreground hover:text-accent transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border/50 pb-4">
          <span className="text-xs font-mono text-foreground-subtle mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>Filter:</span>
          </span>

          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-accent text-background font-semibold shadow-sm'
                  : 'bg-surface-secondary/70 text-foreground-muted hover:text-foreground hover:bg-surface-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Callout if Rate-Limited or Network issue */}
        {isRateLimited && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>GitHub API rate limit reached. Displaying verified local repository catalog.</span>
            </div>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-white shrink-0"
            >
              Inspect Live on GitHub
            </a>
          </div>
        )}

        {error && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-200 text-xs sm:text-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{error}</span>
            </div>
            <button
              type="button"
              onClick={refetch}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-rose-500/20 text-rose-100 font-mono text-xs"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Retry</span>
            </button>
          </div>
        )}

        {/* Loading State Skeletons */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-64 rounded-2xl bg-surface-secondary/40 border border-border/40 animate-pulse p-6 space-y-4"
              >
                <div className="h-4 bg-surface-secondary rounded w-1/3" />
                <div className="h-6 bg-surface-secondary rounded w-2/3" />
                <div className="h-16 bg-surface-secondary rounded w-full" />
                <div className="h-6 bg-surface-secondary rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          /* Empty Filter State */
          <div className="text-center py-16 p-8 rounded-2xl bg-surface-secondary/30 border border-border/50 space-y-3">
            <p className="text-foreground-muted text-sm">
              No repositories found under category "{selectedCategory}".
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className="px-4 py-2 rounded-lg bg-surface-secondary border border-border text-xs font-mono text-accent"
            >
              Reset Category Filter
            </button>
          </div>
        )}

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
