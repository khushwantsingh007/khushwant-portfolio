import React from 'react';
import { GraduationCap, Cpu, FolderGit2, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-surface/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            01. Background &amp; Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-5 text-foreground-muted leading-relaxed text-base sm:text-lg">
            <p>
              I am a Computer Science Engineering undergraduate at <strong className="text-foreground font-semibold">Graphic Era Hill University</strong> (Class of 2027), focused on building reliable, high-performance software systems.
            </p>
            <p>
              My work centers on two complementary domains: <strong className="text-foreground font-semibold">full-stack web engineering</strong> and <strong className="text-foreground font-semibold">edge-first computer vision</strong>. I enjoy turning complex computational tasks—such as real-time deep learning inference, object trajectory tracking, and concurrency management—into intuitive, responsive web platforms.
            </p>
            <p>
              Rather than building superficial demos, I prioritize engineering depth: zero-cloud-cost local inference pipelines, thread-safe frame acquisition, clean REST &amp; WebSocket architectures, and algorithmic rigor. Whether writing low-level multithreaded workers in Python or architecting typed frontends with React and TypeScript, I aim for production clarity and maintainability.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4 text-sm font-medium text-foreground">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                <span>Inspect GitHub repositories</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-border">|</span>
              <a
                href="#skills"
                className="inline-flex items-center gap-1 text-foreground-muted hover:text-foreground"
              >
                <span>Explore Technical Stack</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 3 Compact Info Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            {/* Card 1: Education */}
            <div className="p-5 rounded-2xl bg-card border border-border/70 hover:border-accent/40 transition-all duration-200 shadow-sm flex items-start gap-4 group">
              <div className="p-3 rounded-xl bg-surface-secondary text-accent border border-border/60 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-foreground text-base">
                    B.Tech CSE
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-secondary text-accent font-medium">
                    2023 – 2027
                  </span>
                </div>
                <p className="text-xs font-medium text-foreground-muted">
                  Graphic Era Hill University
                </p>
                <p className="text-xs text-foreground-subtle pt-1">
                  Rigorous foundation in Operating Systems, Algorithms (DAA), DBMS, and Computer Vision.
                </p>
              </div>
            </div>

            {/* Card 2: Technical Focus */}
            <div className="p-5 rounded-2xl bg-card border border-border/70 hover:border-accent/40 transition-all duration-200 shadow-sm flex items-start gap-4 group">
              <div className="p-3 rounded-xl bg-surface-secondary text-accent-indigo border border-border/60 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-foreground text-base">
                    Full-Stack &amp; AI
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-secondary text-indigo-400 font-medium">
                    End-to-End
                  </span>
                </div>
                <p className="text-xs font-medium text-foreground-muted">
                  Full-Stack + Edge Computer Vision
                </p>
                <p className="text-xs text-foreground-subtle pt-1">
                  Connecting high-throughput YOLOv8 &amp; OpenCV backends to interactive, reactive user dashboards.
                </p>
              </div>
            </div>

            {/* Card 3: Project Development */}
            <div className="p-5 rounded-2xl bg-card border border-border/70 hover:border-accent/40 transition-all duration-200 shadow-sm flex items-start gap-4 group">
              <div className="p-3 rounded-xl bg-surface-secondary text-emerald-400 border border-border/60 group-hover:scale-105 transition-transform">
                <FolderGit2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-foreground text-base">
                    Open Source Projects
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-secondary text-emerald-400 font-medium">
                    Verified Code
                  </span>
                </div>
                <p className="text-xs font-medium text-foreground-muted">
                  GitHub-Based Development
                </p>
                <p className="text-xs text-foreground-subtle pt-1">
                  Demonstrating architectural depth across surveillance AI, OS concurrency, and compiler translation.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
