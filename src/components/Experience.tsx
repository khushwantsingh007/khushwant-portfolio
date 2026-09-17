import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences, experienceNotes } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-surface/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>05. Industry Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Experience &amp; Internships
          </h2>
          <p className="text-foreground-muted mt-2 text-sm sm:text-base">
            Hands-on professional exposure, practical software development, and technical collaboration.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6 max-w-4xl">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border/70 hover:border-accent/40 transition-all duration-300 shadow-sm space-y-5 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/50">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-foreground-muted mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-foreground-subtle">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-secondary border border-border/60">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-secondary border border-border/60">
                    <MapPin className="w-3.5 h-3.5 text-foreground-subtle" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-foreground-muted leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2.5 pt-1">
                {exp.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-secondary border border-border/60 text-foreground-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding customizable details */}
        <p className="text-xs font-mono text-foreground-subtle max-w-2xl">
          * {experienceNotes.editableNotice}
        </p>

      </div>
    </section>
  );
};
