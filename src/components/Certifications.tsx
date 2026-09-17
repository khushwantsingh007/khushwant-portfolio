import React from 'react';
import { Award, Cloud, Layers, BrainCircuit, Code2, CheckCircle } from 'lucide-react';
import { certifications, achievements } from '../data/certifications';

const ICONS: Record<string, React.ElementType> = {
  Cloud,
  Layers,
  BrainCircuit,
  Award,
  Code2
};

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>08. Certifications &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Certifications &amp; Achievements
          </h2>
          <p className="text-foreground-muted mt-2 text-sm sm:text-base">
            Formal cloud credentials, specialized AI engineering training, and competitive problem-solving milestones.
          </p>
        </div>

        {/* Two-Column Grid: Certifications & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-foreground-subtle font-semibold mb-2">
              Verified Certifications &amp; Bootcamps
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => {
                const IconComp = ICONS[cert.iconName] || Award;
                return (
                  <div
                    key={cert.id}
                    className="p-5 rounded-2xl bg-card border border-border/70 hover:border-accent/40 transition-all shadow-sm flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-surface-secondary text-accent group-hover:scale-105 transition-transform border border-border/60 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base group-hover:text-accent transition-colors">
                          {cert.title}
                        </h4>
                        <span className="text-xs font-mono text-accent shrink-0">
                          {cert.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-foreground-muted">
                        <span>Issuer: <strong className="text-foreground">{cert.issuer}</strong></span>
                        <span className="text-border">|</span>
                        <span className="px-2 py-0.5 rounded bg-surface-secondary text-[11px] font-mono border border-border/60">
                          {cert.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Key Achievements */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-foreground-subtle font-semibold mb-2">
              Competitive Milestones
            </h3>

            <div className="space-y-4">
              {achievements.map((ach) => {
                const IconComp = ICONS[ach.iconName] || Award;
                return (
                  <div
                    key={ach.id}
                    className="p-5 rounded-2xl bg-surface-secondary/60 border border-border/70 hover:border-accent/40 transition-all shadow-sm space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-card text-emerald-400 border border-border/60">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h4 className="font-heading font-bold text-foreground text-base group-hover:text-accent transition-colors">
                          {ach.title}
                        </h4>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                        {ach.platform}
                      </span>
                    </div>

                    <p className="text-xs text-foreground-muted leading-relaxed pl-1">
                      {ach.description}
                    </p>
                  </div>
                );
              })}

              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 text-xs font-mono text-foreground-muted space-y-1">
                <span className="font-semibold text-accent block">Engineering Philosophy:</span>
                <p>Consistent data structure mastery paired with production backend microservice implementations.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
