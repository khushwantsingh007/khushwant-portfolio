import React from 'react';
import { 
  Code2, 
  Terminal, 
  ExternalLink,
  Award
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { codingProfiles } from '../data/codingProfiles';

const ICONS: Record<string, React.ElementType> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Code2,
  Terminal
};

export const CodingProfiles: React.FC = () => {
  return (
    <section id="profiles" className="py-20 relative bg-surface/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>07. Competitive &amp; Social Coding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Coding &amp; Developer Profiles
          </h2>
          <p className="text-foreground-muted mt-2 text-sm sm:text-base">
            Verified developer handles across algorithmic challenges, open-source repositories, and professional networks.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((p) => {
            const IconComponent = ICONS[p.iconName] || ExternalLink;
            return (
              <a
                key={p.platform}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-2xl bg-card border border-border/70 hover:border-accent/40 transition-all duration-300 shadow-sm flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-surface-secondary text-foreground group-hover:text-accent group-hover:scale-105 transition-all border border-border/60">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-secondary text-foreground-subtle border border-border/50">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                    {p.platform}
                  </h3>
                  
                  <p className="text-xs font-mono text-accent mt-0.5 mb-3">
                    @{p.username}
                  </p>

                  <p className="text-xs text-foreground-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-foreground-muted group-hover:text-accent transition-colors">
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
