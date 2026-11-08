import React from 'react';
import { Clock } from 'lucide-react';

interface OpenBadgeProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const OpenBadge: React.FC<OpenBadgeProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
        isDark
          ? 'bg-black/60 text-white border border-white/20 backdrop-blur-md'
          : 'bg-emerald-50 text-emerald-950 border border-emerald-200'
      } ${className}`}
      aria-label="Statut : Ouvert 24 heures sur 24 et 7 jours sur 7"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <Clock className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
      <span className="tracking-wide">OUVERT 24H/24 & 7J/7</span>
    </div>
  );
};

