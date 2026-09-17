import React from 'react';
import { ExternalLink, Star, GitFork, Calendar, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group relative rounded-2xl bg-card border border-border/70 p-6 flex flex-col justify-between hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div>
        {/* Card Header: Category & Stats */}
        <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono">
          <span className="px-2.5 py-0.5 rounded-md bg-surface-secondary text-accent font-medium border border-border/60">
            {project.category}
          </span>

          <div className="flex items-center gap-3 text-foreground-subtle">
            {project.stars !== undefined && project.stars > 0 && (
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.stars}</span>
              </span>
            )}
            {project.forks !== undefined && project.forks > 0 && (
              <span className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5" />
                <span>{project.forks}</span>
              </span>
            )}
            {project.updatedAt && (
              <span className="hidden sm:flex items-center gap-1 text-[11px]">
                <Calendar className="w-3 h-3" />
                <span>{project.updatedAt}</span>
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground group-hover:text-accent transition-colors flex items-center justify-between gap-2 mb-2.5">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 text-foreground-subtle group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed line-clamp-3 mb-5">
          {project.description}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-surface-secondary text-foreground-muted border border-border/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-foreground-subtle">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div 
        className="pt-4 border-t border-border/50 flex items-center justify-between gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-[11px] font-mono text-foreground-subtle">
          View code &amp; details
        </span>

        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-surface-secondary hover:bg-surface-hover text-foreground-muted hover:text-accent border border-border/60 transition-colors"
            title="GitHub Repository"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/15 hover:bg-accent hover:text-background text-accent border border-accent/30 transition-colors"
              title="Live Demo"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
