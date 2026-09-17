import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Copy, Check } from 'lucide-react';
import { profile } from '../data/profile';

interface TerminalLine {
  type: 'cmd' | 'output' | 'info';
  content: string;
}

const INITIAL_LINES: TerminalLine[] = [
  { type: 'cmd', content: 'whoami' },
  { type: 'output', content: "Khushwant Singh — Backend Developer & Cloud Engineer (B.Tech '27)" },
  { type: 'cmd', content: 'cat /etc/focus.conf' },
  { type: 'output', content: 'Backend APIs • Cloud Systems • Database Optimization • Edge Vision' },
  { type: 'cmd', content: 'core-stack --list' },
  { type: 'output', content: 'Node.js • Express.js • Postgres • SQL • MongoDB • C++ • Python • Docker' },
  { type: 'cmd', content: 'echo $ACHIEVEMENTS' },
  { type: 'info', content: '● 350+ LeetCode Solved • 3 Star SQL HackerRank • Whizzact Intern' },
];

export const TerminalVisual: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [copied, setCopied] = useState(false);

  const runSampleCommand = (cmdText: string, outputText: string, isInfo = false) => {
    setLines(prev => [
      ...prev,
      { type: 'cmd', content: cmdText },
      { type: isInfo ? 'info' : 'output', content: outputText }
    ]);
  };

  const handleReset = () => {
    setLines(INITIAL_LINES);
  };

  const handleCopyText = () => {
    const raw = lines
      .map(l => (l.type === 'cmd' ? `$ ${l.content}` : `  ${l.content}`))
      .join('\n');
    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden border border-border/70 bg-card/90 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-accent/40 group">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border/70 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
          <span className="ml-2 text-xs font-mono text-foreground-subtle flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-accent" />
            <span>khushwant@developer:~</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyText}
            className="p-1 rounded text-foreground-subtle hover:text-foreground hover:bg-surface-hover transition-colors"
            title="Copy terminal session"
            aria-label="Copy terminal text"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-1 rounded text-foreground-subtle hover:text-foreground hover:bg-surface-hover transition-colors"
            title="Reset terminal"
            aria-label="Reset terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed max-h-[360px] overflow-y-auto space-y-2 bg-[#090d16] text-slate-300 terminal-scanlines">
        {lines.map((line, idx) => {
          if (line.type === 'cmd') {
            return (
              <div key={idx} className="flex items-center gap-2 text-slate-100 pt-1">
                <span className="text-accent font-semibold select-none">$</span>
                <span className="text-emerald-400 font-medium">{line.content}</span>
              </div>
            );
          }
          if (line.type === 'info') {
            return (
              <div key={idx} className="pl-4 text-accent-cyan font-medium flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{line.content}</span>
              </div>
            );
          }
          return (
            <div key={idx} className="pl-4 text-slate-300">
              {line.content}
            </div>
          );
        })}

        {/* Active Command Prompt */}
        <div className="flex items-center gap-2 pt-2 text-slate-100">
          <span className="text-accent font-semibold select-none">$</span>
          <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
        </div>
      </div>

      {/* Quick Interactive Command Buttons Bar */}
      <div className="px-4 py-2.5 bg-surface/80 border-t border-border/70 flex items-center justify-between gap-2 overflow-x-auto text-[11px] font-mono text-foreground-subtle">
        <span className="hidden sm:inline text-xs text-foreground-muted">Quick run:</span>
        <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={() => runSampleCommand('cv2.detect_threat()', 'Status: Scanning active feeds... 0 False Positives', true)}
            className="px-2 py-1 rounded bg-surface hover:bg-surface-hover hover:text-accent border border-border/60 transition-colors flex items-center gap-1"
          >
            <Play className="w-2.5 h-2.5 text-accent" />
            <span>cv2.detect()</span>
          </button>
          <button
            type="button"
            onClick={() => runSampleCommand('cat /etc/github.link', profile.socials.github)}
            className="px-2 py-1 rounded bg-surface hover:bg-surface-hover hover:text-accent border border-border/60 transition-colors"
          >
            github
          </button>
          <button
            type="button"
            onClick={() => runSampleCommand('curl -s /api/contact', `Email: ${profile.contact.email}`)}
            className="px-2 py-1 rounded bg-surface hover:bg-surface-hover hover:text-accent border border-border/60 transition-colors"
          >
            contact
          </button>
        </div>
      </div>
    </div>
  );
};
