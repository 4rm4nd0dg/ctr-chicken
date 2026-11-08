import React from 'react';
import { Flame } from 'lucide-react';

interface SpicyBadgeProps {
  size?: 'sm' | 'md';
  className?: string;
}

export const SpicyBadge: React.FC<SpicyBadgeProps> = ({ size = 'sm', className = '' }) => {
  const isSm = size === 'sm';

  return (
    <span
      className={`inline-flex items-center gap-1 font-bold rounded-full bg-brand-red text-white uppercase tracking-wider shadow-sm select-none ${
        isSm ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
      } ${className}`}
      aria-label="Plat épicé"
    >
      <Flame className={isSm ? 'w-3 h-3 text-brand-orange animate-pulse' : 'w-4 h-4 text-brand-orange animate-pulse'} aria-hidden="true" />
      <span>Épicé</span>
    </span>
  );
};

