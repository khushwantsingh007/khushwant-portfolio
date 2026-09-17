import React, { useState } from 'react';
import { 
  Maximize2, 
  ShieldCheck, 
  Scan, 
  Activity, 
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { featuredProject } from '../data/projects';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { ProjectModal } from './ProjectModal';

export const FeaturedProject: React.FC = () => {
  const [activeImageKey, setActiveImageKey] = useState<string>('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imagesMap: Record<string, { title: string; src: string; tag: string }> = {
    dashboard: {
      title: "Multi-Feed Security Matrix",
      src: "/projects/cctv-dashboard.svg",
      tag: "Live Matrix"
    },
    detection: {
      title: "Polygon Ray-Casting & Tripwires",
      src: "/projects/cctv-detection.svg",
      tag: "YOLOv8 Detection"
    },
    alerts: {
      title: "Sub-Second Incident Telemetry",
      src: "/projects/cctv-alerts.svg",
      tag: "WebSocket Alerts"
    },
    analytics: {
      title: "Historical Passage Flow",
      src: "/projects/cctv-analytics.svg",
      tag: "ReportLab Audit"
    }
  };

  const currentImage = imagesMap[activeImageKey] || imagesMap['dashboard'];

  return (
    <section id="featured" className="py-24 relative bg-tech-grid">
      {/* Background Accent Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-blue/10 blur-[150px] rounded-full pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/15 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03. Flagship Engineering Project</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground tracking-tight">
            Smart CCTV Analytics Platform
          </h2>
          <p className="text-foreground-muted mt-3 text-base sm:text-lg leading-relaxed">
            AI-powered real-time automated video surveillance, spatial intrusion detection, and threat telemetry pipeline with zero cloud API dependencies.
          </p>
        </div>

        {/* Centerpiece Showcase Container */}
        <div className="rounded-3xl bg-card border border-border/80 shadow-2xl p-6 lg:p-10 space-y-10">
          
          {/* Top Info Bar & Metrics */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-border/60">
            <div className="flex flex-wrap gap-2">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-surface-secondary border border-border text-foreground hover:border-accent/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-surface-secondary border border-border hover:border-accent/40 text-foreground hover:text-accent transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-accent text-background hover:bg-accent-hover transition-all shadow-md shadow-accent/20"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Explore Full Case Study</span>
              </button>
            </div>
          </div>

          {/* High-Impact Interactive Screen Frame */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-foreground font-semibold">
                  Visual Telemetry: <strong className="text-accent">{currentImage.title}</strong>
                </span>
              </div>

              {/* Screen Tab Selectors */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-surface-secondary border border-border/80 text-xs font-mono">
                {Object.entries(imagesMap).map(([key, data]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveImageKey(key)}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeImageKey === key
                        ? 'bg-accent text-background font-semibold shadow-sm'
                        : 'text-foreground-muted hover:text-foreground'
                    }`}
                  >
                    {data.tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Viewport with Ambient Border */}
            <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-[#090d16] shadow-2xl group aspect-[16/9] flex items-center justify-center">
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                loading="eager"
              />
              
              {/* Overlay expand button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-white opacity-90 hover:opacity-100 hover:border-accent transition-all shadow-lg"
              >
                <Maximize2 className="w-3.5 h-3.5 text-accent" />
                <span>Inspect Architecture &amp; Code</span>
              </button>
            </div>
          </div>

          {/* Key Feature Callouts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
            <div className="p-5 rounded-xl bg-surface-secondary/50 border border-border/60 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-heading font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Restricted Zone Intrusion</span>
              </div>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Security operators draw interactive polygon boundaries. OpenCV ray-casting (<code className="font-mono text-[11px] text-accent">pointPolygonTest</code>) matches ground-contact centroids to detect breaches.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-secondary/50 border border-border/60 space-y-2">
              <div className="flex items-center gap-2 text-accent font-heading font-semibold text-sm">
                <Scan className="w-4 h-4" />
                <span>Virtual Tripwires &amp; Flow</span>
              </div>
              <p className="text-xs text-foreground-muted leading-relaxed">
                2D vector cross-product math evaluates moving target trajectories across virtual boundary lines to compute directional IN/OUT pedestrian and vehicle counts.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-secondary/50 border border-border/60 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-heading font-semibold text-sm">
                <Activity className="w-4 h-4" />
                <span>Sub-Second Telemetry &amp; PDFs</span>
              </div>
              <p className="text-xs text-foreground-muted leading-relaxed">
                FastAPI WebSockets push high-res threat evidence snapshots without audio latency. Generates formal PDF audit spreadsheets via ReportLab for compliance.
              </p>
            </div>
          </div>

          {/* Interactive Architecture Flow Diagram */}
          <div className="pt-6">
            <ArchitectureDiagram />
          </div>

        </div>

      </div>

      {/* Full Case Study Modal */}
      <ProjectModal
        project={featuredProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
