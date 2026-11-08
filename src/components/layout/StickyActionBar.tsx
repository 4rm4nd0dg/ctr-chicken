'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Phone, ShoppingBag } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';
import { formatPrice } from '@/utils/whatsapp';

export const StickyActionBar: React.FC = () => {
  const { totalItems, totalAmount, openCart } = useCart();

  return (
    <aside
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-floating md:hidden px-3 py-2.5"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
      aria-label="Actions rapides pour mobile"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        {/* Call button */}
        <a
          href="tel:+22656759191"
          className="min-h-touch px-3 py-2 bg-brand-cream hover:bg-orange-100 text-brand-black border border-brand-orange/40 rounded-xl font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all focus:ring-2 focus:ring-brand-orange"
          aria-label="Appeler le restaurant au +226 56 75 91 91"
        >
          <div className="w-7 h-7 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-brand-orange-dark" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">Besoin d&apos;aide</span>
            <span className="font-extrabold text-brand-black">Appeler</span>
          </div>
        </a>

        {/* WhatsApp Order / Cart Drawer button */}
        <button
          type="button"
          onClick={openCart}
          className="min-h-touch px-3 py-2 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all focus:ring-2 focus:ring-brand-red relative overflow-hidden"
          aria-label={
            totalItems > 0
              ? `Voir ma commande (${totalItems} articles, ${formatPrice(totalAmount)})`
              : 'Commander sur WhatsApp'
          }
        >
          {totalItems > 0 ? (
            <>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 relative">
                <ShoppingBag className="w-4 h-4 text-white" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 bg-brand-orange text-brand-black font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {totalItems}
                </span>
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] uppercase tracking-wider text-white/80 font-semibold">Panier</span>
                <span className="font-extrabold text-white truncate max-w-[90px]">
                  {formatPrice(totalAmount)}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] uppercase tracking-wider text-white/80 font-semibold">En 2 clics</span>
                <span className="font-extrabold text-white">Commander</span>
              </div>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

