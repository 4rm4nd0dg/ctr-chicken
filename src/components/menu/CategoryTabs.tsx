'use client';

import React, { useEffect, useRef } from 'react';
import { MenuCategory } from '@/types/menu';

interface CategoryTabsProps {
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll the active tab smoothly into view when activeCategoryId changes
  useEffect(() => {
    if (activeTabRef.current && containerRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeCategoryId]);

  return (
    <nav
      className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-stone-200 py-2.5 px-3 sm:px-6 shadow-sm transition-all"
      aria-label="Catégories du menu"
    >
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth smooth-scroll px-1"
      >
        <button
          ref={activeCategoryId === 'all' ? activeTabRef : null}
          type="button"
          onClick={() => onSelectCategory('all')}
          className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] active:scale-95 ${
            activeCategoryId === 'all'
              ? 'bg-brand-red text-white shadow-sm'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Tout le Menu
        </button>

        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              ref={isActive ? activeTabRef : null}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] active:scale-95 ${
                isActive
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
