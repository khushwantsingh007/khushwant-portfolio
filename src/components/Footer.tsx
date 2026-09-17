import React from 'react';
import { 
  ArrowUp, 
  Code2, 
  Terminal, 
  Mail 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Roles */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-indigo p-[1.5px]">
              <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-bold text-xs text-accent">
                  {profile.initials}
                </span>
              </div>
            </div>
            <div>
              <span className="font-heading font-semibold text-foreground text-sm block">
                {profile.name}
              </span>
              <span className="text-xs font-mono text-foreground-subtle">
                Full-Stack • AI • Computer Vision
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 text-foreground-muted">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-surface-secondary hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-surface-secondary hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-surface-secondary hover:text-accent transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-surface-secondary hover:text-accent transition-colors"
              aria-label="CodeChef Profile"
            >
              <Terminal className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="p-2 rounded-lg hover:bg-surface-secondary hover:text-accent transition-colors"
              aria-label="Email Khushwant"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-surface-secondary border border-border hover:border-accent/40 text-foreground-muted hover:text-accent transition-colors flex items-center gap-1 text-xs font-mono"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-foreground-subtle">
          <p>© 2026 Khushwant Singh. Built with React, TypeScript &amp; Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            <span>Production Developer Portfolio</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
