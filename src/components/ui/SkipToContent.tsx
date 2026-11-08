import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-3 focus:bg-brand-red focus:text-white focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-orange transition-transform"
    >
      Aller au contenu principal
    </a>
  );
};

