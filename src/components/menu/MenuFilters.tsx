'use client';

import React from 'react';
import { Search, Flame, Sandwich, Users, Coffee, UtensilsCrossed, X, SunMedium } from 'lucide-react';

export type FilterType =
  | 'all'
  | 'spicy'
  | 'burgers'
  | 'poulet'
  | 'sharing'
  | 'petit-dejeuner'
  | 'desserts-boissons';

interface MenuFiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeFilter: FilterType;
  onFilterChange: (f: FilterType) => void;
  totalResults: number;
}

export const MenuFilters: React.FC<MenuFiltersProps> = ({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  totalResults,
}) => {
  const filterPills: { id: FilterType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: 'Tout le menu', icon: UtensilsCrossed },
    { id: 'spicy', label: 'Épicé', icon: Flame },
    { id: 'sharing', label: 'Buckets à partager', icon: Users },
    { id: 'burgers', label: 'Burgers & Wraps', icon: Sandwich },
    { id: 'poulet', label: 'Poulet & Combos', icon: UtensilsCrossed },
    { id: 'petit-dejeuner', label: 'Petit Déjeuner & Brunch', icon: SunMedium },
    { id: 'desserts-boissons', label: 'Desserts & Boissons', icon: Coffee },
  ];

  return (
    <div className="space-y-3">
      {/* Barre de recherche */}
      <div className="relative max-w-xl mx-auto">
        <label htmlFor="menu-search-input" className="sr-only">
          Rechercher un plat, un burger, un bucket ou une boisson
        </label>
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-stone-400 absolute left-4 pointer-events-none" aria-hidden="true" />
          <input
            id="menu-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher : Fiesta, Mexican, Tenders, Mix Bucket, Bowl..."
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-stone-300 rounded-2xl text-sm font-medium text-brand-black placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 p-1.5 text-stone-400 hover:text-stone-700 rounded-full"
              aria-label="Effacer la recherche"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Boutons de filtres */}
      <div className="flex items-center justify-center gap-2 flex-wrap pt-1" role="group" aria-label="Filtrer le menu">
        {filterPills.map((pill) => {
          const Icon = pill.icon;
          const isActive = activeFilter === pill.id;
          return (
            <button
              key={pill.id}
              type="button"
              onClick={() => onFilterChange(pill.id)}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 border ${
                isActive
                  ? 'bg-brand-red text-white border-brand-red shadow-sm'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-brand-orange hover:bg-brand-cream/60'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-orange' : 'text-brand-red'}`} />
              <span>{pill.label}</span>
            </button>
          );
        })}
      </div>

      {/* Résumé de recherche */}
      {(searchQuery || activeFilter !== 'all') && (
        <div className="flex items-center justify-between text-xs text-stone-500 px-2 pt-1">
          <span>
            {totalResults} résultat{totalResults > 1 ? 's' : ''} trouvé{totalResults > 1 ? 's' : ''}
          </span>
          <button
            type="button"
            onClick={() => {
              onSearchChange('');
              onFilterChange('all');
            }}
            className="text-brand-red font-bold hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
};
