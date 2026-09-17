import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Code2, 
  Terminal as TerminalIcon, 
  Mail, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';
import { TerminalVisual } from './TerminalVisual';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Radial Gradient Glow Accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent/15 blur-[120px] rounded-full pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-secondary border border-border text-xs font-mono text-foreground-muted shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Software Engineering Roles</span>
              <span className="text-border">|</span>
              <span className="text-accent font-medium hidden sm:inline">B.Tech CSE '27</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.1]">
                Building Software.{' '}
                <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-indigo bg-clip-text text-transparent block sm:inline">
                  Solving Real Problems.
                </span>
              </h1>
            </div>

            {/* Supporting Bio Text */}
            <p className="text-base sm:text-lg text-foreground-muted leading-relaxed max-w-2xl font-normal">
              I'm <span className="text-foreground font-semibold">Khushwant Singh</span>, an Aspiring Cloud Engineer and Backend Developer with experience in building robust web applications. Proficient in modern web technologies like JavaScript, Node.js, and SQL, with a strong focus on security, performance, and user experience.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#featured"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-background hover:bg-accent-hover transition-all duration-200 shadow-md shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenResume) {
                    e.preventDefault();
                    onOpenResume();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-surface-secondary border border-border hover:border-accent/40 text-foreground hover:text-accent transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <FileDown className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-foreground-muted">
              <span className="text-xs font-mono text-foreground-subtle mr-1">Profiles:</span>
              
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-secondary border border-border/80 hover:border-accent/40 hover:text-accent hover:scale-105 transition-all"
                title="Khushwant's GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-secondary border border-border/80 hover:border-accent/40 hover:text-accent hover:scale-105 transition-all"
                title="Khushwant's LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profile.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-secondary border border-border/80 hover:border-accent/40 hover:text-accent hover:scale-105 transition-all"
                title="Khushwant's LeetCode Profile"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href={profile.socials.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-secondary border border-border/80 hover:border-accent/40 hover:text-accent hover:scale-105 transition-all"
                title="Khushwant's CodeChef Profile"
                aria-label="CodeChef Profile"
              >
                <TerminalIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.contact.email}`}
                className="p-2.5 rounded-xl bg-surface-secondary border border-border/80 hover:border-accent/40 hover:text-accent hover:scale-105 transition-all"
                title={`Email: ${profile.contact.email}`}
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Small Technical Indicators */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-foreground-subtle border-t border-border/40 w-full">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Cloud-Cost Vision Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span>Full-Stack &amp; Systems Developer</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Terminal Visual */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full">
              {/* Subtle decorative glow around terminal */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan/20 to-accent-indigo/20 rounded-3xl blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
              <TerminalVisual />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
