import React, { useEffect, useRef, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  AlertTriangle, 
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Close on ESC key and Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen, onClose]);

  // Focus trap / auto-focus modal container
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const caseStudy = project.caseStudy;
  const screenshots = caseStudy?.screenshots || (project.image ? [{ title: project.title, url: project.image, caption: project.description }] : []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-card border border-border/80 shadow-2xl overflow-hidden focus:outline-none my-auto"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-surface border-b border-border/70 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent/15 text-accent font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <h2 id="modal-project-title" className="text-lg sm:text-xl font-heading font-bold text-foreground truncate max-w-md">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-colors border border-transparent hover:border-border"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8 text-foreground-muted text-sm sm:text-base leading-relaxed">
          
          {/* Main Screenshot Carousel / Gallery */}
          {screenshots.length > 0 && (
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden border border-border bg-[#090d16] aspect-[16/9] flex items-center justify-center shadow-lg">
                <img
                  src={screenshots[selectedImageIndex]?.url}
                  alt={screenshots[selectedImageIndex]?.title || project.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded bg-black/75 backdrop-blur-sm text-xs font-mono text-slate-200 flex items-center justify-between">
                  <span>{screenshots[selectedImageIndex]?.title}</span>
                  <span className="text-foreground-subtle hidden sm:inline">{screenshots[selectedImageIndex]?.caption}</span>
                </div>
              </div>

              {/* Thumbnails if multiple screenshots */}
              {screenshots.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {screenshots.map((shot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative rounded-lg overflow-hidden border p-1 bg-surface text-left transition-all ${
                        selectedImageIndex === idx
                          ? 'border-accent ring-2 ring-accent/30 scale-[1.02]'
                          : 'border-border/60 hover:border-accent/40 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={shot.url} alt={shot.title} className="w-full h-12 object-cover rounded" />
                      <span className="block text-[10px] font-mono text-foreground-muted truncate mt-1">
                        {shot.title}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Overview & Quick Tech Stack */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-base text-foreground flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent" />
              <span>Project Summary &amp; Technologies</span>
            </h3>
            <p className="text-foreground-muted">
              {project.longDescription || project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-surface-secondary border border-border text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Details: Problem & Solution */}
          {caseStudy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-surface/60 border border-border/70 space-y-2">
                <h4 className="font-heading font-semibold text-foreground text-sm flex items-center gap-2 text-rose-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Engineering Problem</span>
                </h4>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface/60 border border-border/70 space-y-2">
                <h4 className="font-heading font-semibold text-foreground text-sm flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Architectural Solution</span>
                </h4>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          )}

          {/* Core Features List */}
          {caseStudy?.features && (
            <div className="space-y-3 pt-2">
              <h4 className="font-heading font-bold text-base text-foreground flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent" />
                <span>Key Technical Features</span>
              </h4>
              <ul className="space-y-2.5">
                {caseStudy.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Solutions */}
          {caseStudy?.challenges && (
            <div className="space-y-3 pt-2">
              <h4 className="font-heading font-bold text-base text-foreground">
                Technical Challenges &amp; Solutions
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {caseStudy.challenges.map((ch, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-surface-secondary/70 border border-border/60 text-xs sm:text-sm">
                    <span className="font-mono text-accent font-semibold block mb-1">
                      Challenge 0{idx + 1}
                    </span>
                    <p className="text-foreground-muted">{ch}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-surface border-t border-border/70 shrink-0">
          <div className="text-xs font-mono text-foreground-subtle">
            ID: <span className="text-foreground">{project.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-surface-secondary border border-border hover:border-accent/40 text-foreground hover:text-accent transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-accent text-background hover:bg-accent-hover transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
