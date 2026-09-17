import React, { useEffect } from 'react';
import { X, FileDown, ExternalLink, Printer } from 'lucide-react';
import { profile } from '../data/profile';
import { academicTable } from '../data/education';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#ffffff] text-[#111827] shadow-2xl overflow-hidden my-auto border border-border"
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#0f172a] text-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h2 id="resume-modal-title" className="text-sm font-mono font-semibold">
              Khushwant Singh — Official Resume
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            <a
              href="/resume.pdf"
              download="Khushwant_Singh_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-accent text-background font-semibold hover:bg-accent-hover transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-xs sm:text-[13px] leading-relaxed text-[#1f2937] space-y-5 bg-white">
          
          {/* Header */}
          <div className="text-center space-y-1 pb-2 border-b border-gray-200">
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-black tracking-tight">
              Khushwant Singh
            </h1>
            <p className="text-gray-700 font-medium text-xs sm:text-sm">
              Contact Number: 9758774335 | Email : khushwantsingh8587@gmail.com
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-blue-700 pt-0.5">
              <a
                href={profile.socials.portfolio}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-blue-900 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Portfolio
              </a>
              <span>|</span>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="underline hover:text-blue-900">Github</a>
              <span>|</span>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-blue-900">Linkedin</a>
              <span>|</span>
              <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="underline hover:text-blue-900">Leetcode</a>
              <span>|</span>
              <a href={profile.socials.codechef} target="_blank" rel="noreferrer" className="underline hover:text-blue-900">Codechef</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-black border-b border-gray-300 pb-0.5">
              Professional Summary
            </h3>
            <p className="text-gray-800 pt-1 leading-normal">
              Aspiring Cloud Engineer and Backend Developer with experience in building robust web applications. Proficient in modern web technologies like JavaScript, Node.js, and MySQL, with a strong focus on security, performance, and user experience.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-black border-b border-gray-300 pb-0.5">
              Technical Skills
            </h3>
            <ul className="space-y-0.5 pt-1 text-gray-800">
              <li><strong>• Languages:</strong> C++, C, JavaScript</li>
              <li><strong>• Web:</strong> Html, CSS, Node.js, Express.js, Rest API</li>
              <li><strong>• Databases:</strong> SQL, MongoDB, Postgres</li>
              <li><strong>• Tools:</strong> Vs-Code, Git, Windows, Postman, Linux</li>
              <li><strong>• Core Concepts:</strong> Data Structures &amp; Algorithms, OS, DBMS, CN, OOP, Compiler Design</li>
              <li><strong>• Devops Tools:</strong> Docker, Kubernetes, Github Actions</li>
            </ul>
          </div>

          {/* Academic Details Table */}
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-black border-b border-gray-300 pb-0.5">
              Academic Details
            </h3>
            <div className="pt-1 overflow-x-auto">
              <table className="w-full text-left border border-gray-400 text-xs">
                <thead className="bg-gray-100 font-bold border-b border-gray-400">
                  <tr>
                    <th className="p-2 border-r border-gray-400">Education</th>
                    <th className="p-2 border-r border-gray-400">Institute</th>
                    <th className="p-2 border-r border-gray-400">GPA/Marks(%)</th>
                    <th className="p-2">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {academicTable.map((row, i) => (
                    <tr key={i}>
                      <td className="p-2 font-medium border-r border-gray-300">{row.education}</td>
                      <td className="p-2 border-r border-gray-300">{row.institute}</td>
                      <td className="p-2 font-bold border-r border-gray-300">{row.score}</td>
                      <td className="p-2">{row.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-black border-b border-gray-300 pb-0.5">
              Experience
            </h3>
            <div className="pt-1 space-y-1">
              <div className="font-bold text-black text-xs sm:text-sm">
                Backenddeveloper | Intern | Whizzact (June 2026 – Aug 2026)
              </div>
              <ul className="list-disc pl-5 space-y-1 text-gray-800">
                <li>Developed and maintained RESTful APIs using Node.js and Express.js for core backend functionalities, enabling smooth integration between frontend and database layers.</li>
                <li>Worked with Postgres for database design and management, including schema modeling, CRUD operations, and performance optimization for scalable backend services.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-black border-b border-gray-300 pb-0.5">
              Projects
            </h3>
            
            <div className="space-y-1 pt-1">
              <div className="font-bold text-black">
                Smart CCTV Analytics Platform (Aug 2024 – June 2025)
              </div>
              <ul className="list-disc pl-5 space-y-0.5 text-gray-800">
                <li>Developed an AI-powered CCTV surveillance platform with real-time people/vehicle detection, intrusion detection, line-crossing, and crowd analysis using YOLOv8 and OpenCV.</li>
                <li>Built a React-based monitoring dashboard with live analytics and event logs, supported by FastAPI REST APIs, WebSocket alerts, authentication, and role-based access control.</li>
                <li className="italic text-gray-600 list-none -ml-5 pl-0">React.js, TypeScript, FastAPI, Python, OpenCV, YOLOv8, MongoDB, WebSockets</li>
              </ul>
            </div>

            <div className="space-y-1 pt-1">
              <div className="font-bold text-black">
                Stock Analysis – AI Dashboard (Dec 2024 – Jan 2025)
              </div>
              <ul className="list-disc pl-5 space-y-0.5 text-gray-800">
                <li>Developed real-time stock dashboard with live market data. Implemented RSI, MACD, Bollinger Bands for analysis. Integrated ML models for short-term price prediction.</li>
                <li>Created interactive candlestick charts with auto-refresh.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-black border-b border-gray-300 pb-0.5">
              Certifications
            </h3>
            <ul className="list-disc pl-5 space-y-0.5 pt-1 text-gray-800">
              <li>Full Stack Mastery Course, Udemy (Feb 2026 - Apr 2026)</li>
              <li>Oracle Cloud Infrastructure Certified AI Foundations Associate (Sept 2025 - Oct 2025)</li>
              <li>The AI Engineer Udemy Course 2026: Complete AI Engineer Bootcamp (Jul 2026 - Aug 2026)</li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-black border-b border-gray-300 pb-0.5">
              Achievements
            </h3>
            <ul className="list-disc pl-5 space-y-0.5 pt-1 text-gray-800">
              <li>3 Star in SQL on hackerRank.</li>
              <li>Solved 350+ problems on Leetcode.</li>
            </ul>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 font-mono">
          <span>Source: public/resume.pdf</span>
          <a
            href="/resume.pdf"
            download="Khushwant_Singh_Resume.pdf"
            className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:underline"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download PDF Copy</span>
          </a>
        </div>
      </div>
    </div>
  );
};
