'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice, buildWhatsAppLink } from '@/utils/whatsapp';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Bike,
  Store,
  MapPin,
  User,
  Phone,
  Flame,
  AlertCircle,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';
import { FoodImage } from '@/components/ui/FoodImage';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalAmount,
    isCartOpen,
    closeCart,
    customer,
    updateCustomer,
  } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Focus trap management
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  const whatsappUrl = buildWhatsAppLink(items, customer, '22656759191');

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${
        isCartOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isCartOpen}
      aria-labelledby="cart-drawer-title"
    >
      {/* Backdrop with smooth fade */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div
          ref={drawerRef}
          className={`w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-gray-200 transform transition-transform duration-300 ease-out gpu-accelerated ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-brand-cream border-b border-brand-orange/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-sm">
                <ShoppingBag className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 id="cart-drawer-title" className="text-lg font-black text-brand-black tracking-tight">
                  Ma Commande
                </h2>
                <p className="text-xs text-stone-600 font-medium">
                  {totalItems} article{totalItems > 1 ? 's' : ''} au panier
                </p>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              onClick={closeCart}
              className="p-2 text-stone-600 hover:text-brand-red hover:bg-white rounded-full transition-colors focus:ring-2 focus:ring-brand-red"
              aria-label="Fermer le panier"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-20 h-20 rounded-full bg-brand-cream flex items-center justify-center mb-4 text-brand-orange border border-brand-orange/30">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="text-base font-bold text-brand-black mb-1">
                  Votre panier est vide
                </h3>
                <p className="text-xs text-stone-600 max-w-xs mb-6">
                  Découvrez nos Buckets croustillants, nos Burgers gourmands et nos Signature Bowls !
                </p>
                <Link
                  href="/menu"
                  onClick={closeCart}
                  className="px-6 py-3 bg-brand-red text-white text-sm font-bold rounded-xl shadow-md hover:bg-brand-red-dark transition-colors inline-flex items-center gap-2"
                >
                  <span>Explorer le Menu</span>
                </Link>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-stone-200">
                    <span className="text-xs font-bold uppercase text-stone-500 tracking-wider">
                      Plats sélectionnés
                    </span>
                    <button
                      onClick={clearCart}
                      className="text-xs text-stone-500 hover:text-brand-red transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Vider</span>
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-3"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 relative bg-brand-cream border border-stone-200">
                        <FoodImage src={item.image} alt={item.name} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="text-sm font-bold text-brand-black truncate">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-stone-400 hover:text-brand-red p-1 shrink-0"
                            aria-label={`Supprimer ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {item.selectedOption && (
                          <p className="text-xs text-brand-red-dark font-medium">
                            Option : {item.selectedOption}
                          </p>
                        )}

                        {item.spicy && (
                          <div className="flex items-center gap-1 text-[11px] font-semibold text-brand-red">
                            <Flame className="w-3 h-3 text-brand-red" />
                            <span>Pimenté</span>
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs font-black text-brand-black">
                            {formatPrice(item.price * item.quantity)}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 bg-white rounded-lg border border-stone-300 p-0.5">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-7 h-7 flex items-center justify-center text-stone-700 hover:bg-stone-100 rounded focus:ring-1 focus:ring-brand-red"
                              aria-label="Diminuer la quantité"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center text-brand-black">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-7 h-7 flex items-center justify-center text-stone-700 hover:bg-stone-100 rounded focus:ring-1 focus:ring-brand-red"
                              aria-label="Augmenter la quantité"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Options & Address */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                  <span className="text-xs font-bold uppercase text-stone-500 tracking-wider block">
                    Mode de commande
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => updateCustomer({ deliveryType: 'livraison' })}
                      className={`p-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                        customer.deliveryType === 'livraison'
                          ? 'bg-brand-red text-white border-brand-red shadow-sm'
                          : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      <Bike className="w-4 h-4" />
                      <span>Livraison</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => updateCustomer({ deliveryType: 'sur-place' })}
                      className={`p-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                        customer.deliveryType === 'sur-place'
                          ? 'bg-brand-red text-white border-brand-red shadow-sm'
                          : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>À emporter</span>
                    </button>
                  </div>

                  {/* Customer Information Form */}
                  <div className="space-y-2.5 pt-2">
                    <div>
                      <label htmlFor="customer-name" className="text-xs font-bold text-stone-700 block mb-1">
                        Votre nom
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                        <input
                          id="customer-name"
                          type="text"
                          value={customer.name}
                          onChange={(e) => updateCustomer({ name: e.target.value })}
                          placeholder="Ex: Ibrahim Ouédraogo"
                          className="w-full text-xs pl-9 pr-3 py-2 bg-white rounded-lg border border-stone-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="customer-phone" className="text-xs font-bold text-stone-700 block mb-1">
                        Numéro de téléphone
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                        <input
                          id="customer-phone"
                          type="tel"
                          inputMode="tel"
                          value={customer.phone}
                          onChange={(e) => updateCustomer({ phone: e.target.value })}
                          placeholder="Ex: +226 70 00 00 00"
                          className="w-full text-xs pl-9 pr-3 py-2 bg-white rounded-lg border border-stone-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                        />
                      </div>
                    </div>

                    {customer.deliveryType === 'livraison' ? (
                      <div>
                        <label htmlFor="customer-address" className="text-xs font-bold text-stone-700 block mb-1">
                          Adresse précise de livraison
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                          <textarea
                            id="customer-address"
                            rows={2}
                            value={customer.address}
                            onChange={(e) => updateCustomer({ address: e.target.value })}
                            placeholder="Quartier, rue, repère ou porte (ex: Kamboinsin après le rond-point)"
                            className="w-full text-xs pl-9 pr-3 py-2 bg-white rounded-lg border border-stone-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red resize-none"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label htmlFor="customer-restaurant" className="text-xs font-bold text-stone-700 block mb-1">
                          Point de retrait
                        </label>
                        <select
                          id="customer-restaurant"
                          value={customer.restaurantLocation}
                          onChange={(e) => updateCustomer({ restaurantLocation: e.target.value })}
                          className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-stone-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                        >
                          <option value="Kamboinsin">Chitir Kamboinsin (Route de Kamboinsin / Tampouy)</option>
                          <option value="Kamsonghin">Chitir Kamsonghin</option>
                          <option value="Ouaga 2000">Zone Ouaga 2000</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-brand-cream rounded-xl border border-brand-orange/30 text-stone-700 text-xs">
                  <AlertCircle className="w-4 h-4 text-brand-orange-dark shrink-0 mt-0.5" />
                  <p>
                    Pas de paiement en ligne requis. Vous réglez directement à la livraison en espèces ou par Orange Money / Moov Money.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Footer with Total and WhatsApp Action */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-stone-600">Total à régler</span>
                <span className="text-xl font-black text-brand-black">
                  {formatPrice(totalAmount)}
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[50px] bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-glow-red flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-300" />
                <span>Envoyer ma commande sur WhatsApp</span>
              </a>

              <p className="text-center text-[11px] text-stone-500">
                Ouvre WhatsApp avec le récapitulatif pré-rempli.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

