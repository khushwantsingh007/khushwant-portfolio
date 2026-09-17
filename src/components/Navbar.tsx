import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { profile } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenResume?: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Featured', href: '#featured' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const offsetTop = sectionEl.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/60 shadow-lg shadow-black/5 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Khushwant Singh Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-cyan via-accent-indigo to-purple-500 p-[1.5px] shadow-sm group-hover:shadow-glow-sm transition-all duration-300">
            <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
              <span className="font-heading font-bold text-sm text-foreground tracking-tight group-hover:text-accent transition-colors">
                {profile.initials}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-sm sm:text-base text-foreground group-hover:text-accent transition-colors">
              {profile.name}
            </span>
            <span className="text-[11px] font-mono text-foreground-subtle hidden sm:inline-block">
              {profile.primaryRole}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-accent bg-accent/10 font-semibold'
                    : 'text-foreground-muted hover:text-foreground hover:bg-surface-hover/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

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
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium bg-surface-secondary border border-border hover:border-accent/40 text-foreground hover:text-accent transition-all duration-200 shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-accent" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium bg-accent text-background hover:bg-accent-hover font-semibold transition-all duration-200 shadow-sm shadow-accent/20"
          >
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground-muted hover:text-foreground bg-surface-secondary border border-border focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-accent/15 text-accent font-semibold'
                      : 'text-foreground-muted hover:text-foreground bg-surface-secondary/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-border/70 flex flex-col gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onOpenResume) {
                  e.preventDefault();
                  onOpenResume();
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium bg-surface-secondary border border-border text-foreground"
            >
              <FileDown className="w-4 h-4 text-accent" />
              <span>View Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-accent text-background"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
