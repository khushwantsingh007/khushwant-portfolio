import React, { useState } from 'react';
import { FileText, FileDown, Eye, CheckCircle2 } from 'lucide-react';

export const Resume: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = () => {
    setDownloadNotice("Downloading resume.pdf... Note: you can replace public/resume.pdf with your latest CV anytime.");
    setTimeout(() => setDownloadNotice(null), 5000);
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Container */}
        <div className="relative rounded-3xl bg-gradient-to-r from-card via-surface-secondary to-card border border-border/80 p-8 sm:p-12 shadow-2xl overflow-hidden text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Subtle Ambient Radial Glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-80 h-80 bg-accent/15 blur-3xl rounded-full pointer-events-none -z-10" 
          />

          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent font-mono text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>08. Comprehensive Profile</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
              Want the full story?
            </h2>

            <p className="text-foreground-muted text-sm sm:text-base leading-relaxed">
              View or download my resume containing academic coursework, technical skills, open-source projects, and contact credentials.
            </p>

            {downloadNotice && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{downloadNotice}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto shrink-0">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-surface-secondary border border-border hover:border-accent/40 text-foreground hover:text-accent transition-all shadow-sm"
            >
              <Eye className="w-4 h-4 text-accent" />
              <span>View Resume</span>
            </a>

            <a
              href="/resume.pdf"
              download="Khushwant_Singh_Resume.pdf"
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-background hover:bg-accent-hover transition-all shadow-md shadow-accent/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
