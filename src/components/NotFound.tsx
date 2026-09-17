import React from 'react';
import { Home } from 'lucide-react';

interface NotFoundProps {
  onBackHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">
      <div className="max-w-md w-full p-8 rounded-3xl bg-card border border-border/80 shadow-2xl text-center space-y-6">
        <span className="inline-block text-6xl font-heading font-extrabold text-accent">
          404
        </span>

        <div className="space-y-2">
          <h1 className="text-2xl font-heading font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="text-sm text-foreground-muted">
            Looks like this route doesn't exist or has moved.
          </p>
        </div>

        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-background hover:bg-accent-hover transition-all shadow-md shadow-accent/20"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};
