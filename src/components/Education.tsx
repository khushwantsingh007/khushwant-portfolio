import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Check, Award } from 'lucide-react';
import { educationData, academicTable } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06. Academic Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Academic Details &amp; Education
          </h2>
          <p className="text-foreground-muted mt-2 text-sm sm:text-base">
            Verified academic milestones and undergraduate computer science foundations.
          </p>
        </div>

        {/* Academic Details Structured Table */}
        <div className="max-w-4xl rounded-2xl bg-card border border-border/80 overflow-hidden shadow-lg">
          <div className="px-6 py-4 bg-surface border-b border-border/70 flex items-center justify-between">
            <h3 className="text-sm font-heading font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span>Academic Performance Record</span>
            </h3>
            <span className="text-xs font-mono text-foreground-subtle">
              Graphic Era Hill University Bhimtal
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-surface-secondary/70 text-foreground-subtle font-mono text-[11px] uppercase border-b border-border/60">
                <tr>
                  <th scope="col" className="px-6 py-3.5 font-semibold">Education</th>
                  <th scope="col" className="px-6 py-3.5 font-semibold">Institute</th>
                  <th scope="col" className="px-6 py-3.5 font-semibold text-center">GPA / Marks (%)</th>
                  <th scope="col" className="px-6 py-3.5 font-semibold text-right">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {academicTable.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-surface-hover/50 ${
                      row.highlight ? 'bg-accent/5' : ''
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-foreground flex items-center gap-2">
                      {row.highlight && <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                      <span>{row.education}</span>
                    </td>
                    <td className="px-6 py-4 text-foreground-muted">
                      {row.institute}
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-accent text-center">
                      {row.score}
                    </td>
                    <td className="px-6 py-4 font-mono text-foreground-subtle text-right">
                      {row.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Academic Coursework Highlights Card */}
        <div className="max-w-4xl p-6 sm:p-7 rounded-2xl bg-surface-secondary/50 border border-border/70 space-y-4">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Core Computer Science Curricula &amp; Focus</span>
          </h4>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {educationData.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
