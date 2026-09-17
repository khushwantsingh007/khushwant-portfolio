import React, { useState } from 'react';
import { 
  FileCode2, 
  Coffee, 
  Terminal, 
  FileCode, 
  Code2, 
  Atom, 
  Layers, 
  Palette, 
  Sparkles, 
  BarChart3, 
  Zap, 
  Server, 
  Boxes, 
  Flame, 
  Network, 
  Radio, 
  ScanFace, 
  Camera, 
  Binary, 
  Table, 
  BrainCircuit, 
  Database, 
  Table2, 
  GitBranch, 
  Code, 
  Container, 
  Send 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillGroups } from '../data/skills';

// Helper to map icon names safely to Lucide icons
const ICON_MAP: Record<string, React.ElementType> = {
  FileCode2,
  Coffee,
  Terminal,
  FileCode,
  Code2,
  Atom,
  Layers,
  Palette,
  Sparkles,
  BarChart3,
  Zap,
  Server,
  Boxes,
  Flame,
  Network,
  Radio,
  ScanFace,
  Camera,
  Binary,
  Table,
  BrainCircuit,
  Database,
  Table2,
  GitBranch,
  Github: GithubIcon,
  Code,
  Container,
  Send
};

export const Skills: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const filteredGroups = selectedGroup === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.id === selectedGroup);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              02. Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Skills &amp; Technologies
            </h2>
            <p className="text-foreground-muted mt-2 text-sm sm:text-base max-w-xl">
              Categorized technologies utilized in production engineering, systems architecture, and algorithmic development.
            </p>
          </div>

          {/* Group Filter Chips */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-surface-secondary border border-border/80 text-xs">
            <button
              type="button"
              onClick={() => setSelectedGroup('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedGroup === 'all'
                  ? 'bg-accent text-background font-semibold shadow-sm'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
            >
              All Tech
            </button>
            {skillGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setSelectedGroup(group.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedGroup === group.id
                    ? 'bg-accent text-background font-semibold shadow-sm'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
              >
                {group.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-2xl bg-card border border-border/70 hover:border-accent/40 transition-all duration-300 shadow-sm flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                    {group.title}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-secondary text-foreground-subtle border border-border/60">
                    {group.skills.length} items
                  </span>
                </div>
                
                <p className="text-xs text-foreground-muted mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const IconComponent = ICON_MAP[skill.iconName] || Code;
                    return (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-surface-secondary/80 border-accent/30 text-foreground hover:border-accent hover:shadow-glow-sm'
                            : 'bg-surface-secondary/40 border-border/60 text-foreground-muted hover:text-foreground hover:bg-surface-secondary'
                        }`}
                      >
                        <IconComponent className={`w-3.5 h-3.5 ${skill.highlight ? 'text-accent' : 'text-foreground-subtle'}`} />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-foreground-subtle">
                <span>Category: {group.id}</span>
                <span className="text-emerald-500 font-medium">● Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
