import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all fields before sending.");
      return;
    }

    // Direct mailto generation so the email draft opens immediately in the user's native mail client
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setStatusMessage(
      "Opening your email client to dispatch message. You can also reach out directly at " + profile.contact.email
    );
  };

  return (
    <section id="contact" className="py-24 relative bg-tech-grid border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>09. Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
            Let's Build Something.
          </h2>
          <p className="text-foreground-muted mt-2 text-sm sm:text-base leading-relaxed">
            Have an opportunity, engineering role, project, or technical collaboration in mind? Feel free to reach out directly or send a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Direct Contact Credentials */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-card border border-border/70 hover:border-accent/40 transition-all shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-surface-secondary text-accent border border-border/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-foreground-subtle block">Direct Email</span>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-surface-secondary hover:bg-surface-hover text-foreground-muted hover:text-foreground border border-border/60 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-card border border-border/70 hover:border-accent/40 transition-all shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-surface-secondary text-emerald-400 border border-border/60">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-foreground-subtle block">Phone &amp; WhatsApp</span>
                    <a
                      href={`tel:${profile.contact.phone}`}
                      className="text-sm font-semibold text-foreground hover:text-emerald-400 transition-colors"
                    >
                      +91 {profile.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-surface-secondary hover:bg-surface-hover text-foreground-muted hover:text-foreground border border-border/60 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="p-5 rounded-2xl bg-card border border-border/70 space-y-4">
              <span className="text-xs font-mono text-foreground-subtle uppercase tracking-wider block">
                Professional Networks
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-secondary border border-border/60 hover:border-accent/40 text-xs font-semibold text-foreground hover:text-accent transition-all"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground-subtle" />
                </a>

                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-secondary border border-border/60 hover:border-accent/40 text-xs font-semibold text-foreground hover:text-accent transition-all"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-foreground" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground-subtle" />
                </a>
              </div>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-xl space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono font-medium text-foreground-muted">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent text-foreground placeholder:text-foreground-subtle text-sm transition-colors outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono font-medium text-foreground-muted">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent text-foreground placeholder:text-foreground-subtle text-sm transition-colors outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono font-medium text-foreground-muted">
                  Message / Project Scope
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about the software project, internship role, or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent text-foreground placeholder:text-foreground-subtle text-sm transition-colors outline-none resize-none"
                />
              </div>

              {statusMessage && (
                <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-xs font-mono text-accent leading-relaxed">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-accent text-background hover:bg-accent-hover transition-all duration-200 shadow-md shadow-accent/20 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message (via Mail Client)</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
