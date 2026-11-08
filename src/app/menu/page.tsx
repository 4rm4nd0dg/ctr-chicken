'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import menuData from '@/data/menu.json';
import { MenuCard } from '@/components/menu/MenuCard';
import { CategoryTabs } from '@/components/menu/CategoryTabs';
import { MenuFilters, FilterType } from '@/components/menu/MenuFilters';
import { SearchX, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/whatsapp';

function MenuContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialFilter = (searchParams.get('filter') as FilterType) || 'all';

  const [activeCategoryId, setActiveCategoryId] = useState<string>(initialCategory);
  const [activeFilter, setActiveFilter] = useState<FilterType>(initialFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { categories, items } = menuData;
  const { totalItems, totalAmount, openCart } = useCart();

  // Filtrage combiné par catégorie, filtre rapide et recherche textuelle
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // 1. Catégorie
      if (activeCategoryId !== 'all' && item.categoryId !== activeCategoryId) {
        return false;
      }

      // 2. Filtre rapide
      if (activeFilter === 'spicy' && !item.spicy) {
        return false;
      }
      if (activeFilter === 'sharing' && item.categoryId !== 'bucket-feast') {
        return false;
      }
      if (activeFilter === 'burgers') {
        const isBurger =
          item.categoryId === 'chicken-burgers-wraps' ||
          item.categoryId === 'grilled-burgers-wraps' ||
          item.categoryId === 'burgers-wraps-solo' ||
          item.categoryId === 'top-sellers';
        if (!isBurger) return false;
      }
      if (activeFilter === 'poulet') {
        const isChicken =
          item.categoryId === 'pieces-poulet' ||
          item.categoryId === 'chicken-lovers' ||
          item.categoryId === 'signature-snack' ||
          item.categoryId === 'combos' ||
          item.categoryId === 'kids-menu';
        if (!isChicken) return false;
      }
      if (activeFilter === 'petit-dejeuner' && item.categoryId !== 'petit-dejeuner') {
        return false;
      }
      if (activeFilter === 'desserts-boissons' && item.categoryId !== 'desserts-boissons') {
        return false;
      }

      // 3. Recherche
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesComp = item.composition?.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesComp) {
          return false;
        }
      }

      return true;
    });
  }, [items, activeCategoryId, activeFilter, searchQuery]);

  // Regroupement par catégories pour affichage structuré
  const groupedCategories = useMemo(() => {
    if (activeCategoryId !== 'all') {
      const cat = categories.find((c) => c.id === activeCategoryId);
      if (!cat) return [];
      const catItems = filteredItems.filter((i) => i.categoryId === cat.id);
      return catItems.length > 0 ? [{ ...cat, items: catItems }] : [];
    }

    return categories
      .map((cat) => {
        const catItems = filteredItems.filter((i) => i.categoryId === cat.id);
        return { ...cat, items: catItems };
      })
      .filter((group) => group.items.length > 0);
  }, [categories, filteredItems, activeCategoryId]);

  return (
    <div className="space-y-8 pb-16">
      {/* En-tête de la page Menu */}
      <section className="bg-brand-cream/60 border-b border-brand-orange/20 py-10 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">
            Chicken Taste Revolution
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-brand-black tracking-tight">
            NOTRE MENU COMPLET
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
            13 catégories gourmandes : seaux familiaux, bowls signatures, burgers grillés et formules petit déjeuner. Ajoutez au panier et validez sur WhatsApp !
          </p>

          {/* Pastille flottante panier */}
          {totalItems > 0 && (
            <div className="pt-2">
              <button
                type="button"
                onClick={openCart}
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-brand-red text-white text-xs font-bold rounded-full shadow-md hover:bg-brand-red-dark transition-all animate-bounce"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {totalItems} plat{totalItems > 1 ? 's' : ''} au panier ({formatPrice(totalAmount)}) — Voir ma commande
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Onglets collants */}
      <CategoryTabs
        categories={categories as any}
        activeCategoryId={activeCategoryId}
        onSelectCategory={(id) => {
          setActiveCategoryId(id);
          setActiveFilter('all');
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Barre de recherche et filtres */}
        <MenuFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={(filter) => {
            setActiveFilter(filter);
            setActiveCategoryId('all');
          }}
          totalResults={filteredItems.length}
        />

        {/* Liste des plats */}
        {groupedCategories.length === 0 ? (
          <div className="py-20 text-center space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
              <SearchX className="w-8 h-8" />
            </div>
            <h2 className="font-display text-2xl font-black text-brand-black">
              AUCUN PLAT TROUVÉ
            </h2>
            <p className="text-xs text-stone-600">
              Aucun plat ne correspond à vos filtres actuels. Essayez un autre mot-clé ou réinitialisez les critères.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
                setActiveCategoryId('all');
              }}
              className="px-6 py-2.5 bg-brand-red text-white text-xs font-bold rounded-xl shadow hover:bg-brand-red-dark transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {groupedCategories.map((group) => (
              <section key={group.id} className="space-y-4" id={`cat-${group.id}`}>
                <div className="border-b border-stone-200 pb-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-brand-black tracking-tight flex items-center gap-2">
                    <span className="w-2.5 h-6 bg-brand-red rounded-full" />
                    <span>{group.name}</span>
                    <span className="text-xs font-semibold text-stone-400 font-sans">
                      ({group.items.length})
                    </span>
                  </h2>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {group.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <div className="w-10 h-10 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-bold text-stone-600">Chargement du menu...</p>
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}
