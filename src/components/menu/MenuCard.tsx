'use client';

import React, { useState } from 'react';
import { MenuItem, ItemOption } from '@/types/menu';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/whatsapp';
import { SpicyBadge } from '@/components/ui/SpicyBadge';
import { FoodImage } from '@/components/ui/FoodImage';
import { Plus, Check, Sparkles, Users } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addItem } = useCart();
  const [selectedOption, setSelectedOption] = useState<ItemOption | undefined>(
    item.options && item.options.length > 0 ? item.options[0] : undefined
  );
  const [justAdded, setJustAdded] = useState(false);

  const currentPrice = selectedOption ? selectedOption.price : item.price;

  const handleAdd = () => {
    addItem(item, selectedOption);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article
      className="group bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-crispy transition-all duration-200 overflow-hidden flex flex-col justify-between"
      aria-labelledby={`item-title-${item.id}`}
    >
      <div>
        {/* Visual Box */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream border-b border-stone-100">
          <FoodImage src={item.image} alt={item.name} />

          {/* Badges on top */}
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
            {item.spicy && <SpicyBadge size="sm" />}
            {item.popular && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-orange text-brand-black shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>Top Seller</span>
              </span>
            )}
            {item.servings && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/70 text-white backdrop-blur-sm shadow-sm">
                <Users className="w-3 h-3 text-brand-orange" />
                <span>{item.servings}</span>
              </span>
            )}
          </div>

          {/* Menu Number if exists */}
          {item.number && (
            <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-brand-red text-white font-black text-xs flex items-center justify-center shadow-md">
              {item.number}
            </div>
          )}
        </div>

        {/* Content Box */}
        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3
              id={`item-title-${item.id}`}
              className="text-base font-bold text-brand-black leading-snug group-hover:text-brand-red transition-colors"
            >
              {item.name}
            </h3>
          </div>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {item.composition && (
            <p className="text-[11px] font-medium text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-100">
              <span className="font-bold text-stone-700">Inclus : </span>
              {item.composition}
            </p>
          )}

          {/* Options selector for multiple sizes / portions */}
          {item.options && item.options.length > 0 && (
            <div className="pt-1">
              <label
                htmlFor={`select-option-${item.id}`}
                className="text-[11px] font-bold text-stone-700 uppercase tracking-wide block mb-1"
              >
                Choisir une formule / quantité :
              </label>
              <select
                id={`select-option-${item.id}`}
                value={selectedOption?.name}
                onChange={(e) => {
                  const opt = item.options?.find((o) => o.name === e.target.value);
                  if (opt) setSelectedOption(opt);
                }}
                className="w-full text-xs font-semibold py-1.5 px-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-brand-red focus:border-brand-red text-stone-800"
              >
                {item.options.map((opt) => (
                  <option key={opt.name} value={opt.name}>
                    {opt.name} — {formatPrice(opt.price)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Footer: Price + Add Button */}
      <div className="p-4 pt-2 border-t border-stone-100 flex items-center justify-between gap-3 bg-stone-50/60">
        <div>
          <span className="text-[10px] uppercase font-bold text-stone-500 block">Prix</span>
          <span className="text-lg font-black text-brand-black">
            {formatPrice(currentPrice)}
          </span>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className={`min-h-[44px] min-w-[44px] px-4 py-2 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 ${
            justAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-brand-red hover:bg-brand-red-dark text-white'
          }`}
          aria-label={`Ajouter ${item.name} au panier au prix de ${formatPrice(currentPrice)}`}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>Ajouté !</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>Ajouter</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};

