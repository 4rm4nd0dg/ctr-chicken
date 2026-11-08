'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { OpenBadge } from '@/components/ui/OpenBadge';
import {
  ShoppingBag,
  Phone,
  Menu as MenuIcon,
  X,
  Sparkles,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';
import { formatPrice } from '@/utils/whatsapp';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { totalItems, totalAmount, openCart } = useCart();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/menu', label: 'Notre Menu' },
    { href: '/restaurants', label: 'Nos Restaurants' },
    { href: '/a-propos', label: 'À Propos' },
    { href: '/contact', label: 'Contact' },
  ];

  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:ring-2 focus:ring-brand-red rounded-lg p-1 group"
            aria-label="Chitir Chicken Ouagadougou - Retour à l'accueil"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-brand-cream border border-brand-orange/30 p-1 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo-transparent.webp"
                alt="Logo CTR Chicken"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-brand-black leading-none group-hover:text-brand-red transition-colors">
                CHITIR <span className="text-brand-red">CHICKEN</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-stone-600 uppercase">
                Chicken Taste Revolution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-bold transition-colors focus:ring-2 focus:ring-brand-red ${
                    isActive
                      ? 'text-brand-red bg-brand-cream border-b-2 border-brand-red'
                      : 'text-stone-700 hover:text-brand-red hover:bg-stone-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <OpenBadge />
            </div>

            {/* Direct Phone Call Button (Desktop / Tablet) */}
            <a
              href="tel:+22656759191"
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors focus:ring-2 focus:ring-brand-red min-h-[44px]"
              aria-label="Appeler au +226 56 75 91 91"
            >
              <Phone className="w-4 h-4 text-brand-red" aria-hidden="true" />
              <span>56 75 91 91</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative min-h-[44px] px-3.5 py-2 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-all focus:ring-2 focus:ring-brand-red"
              aria-label={`Panier avec ${totalItems} articles`}
            >
              <ShoppingBag className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline">Panier</span>
              {totalItems > 0 && (
                <span className="bg-brand-orange text-brand-black text-xs font-black px-2 py-0.5 rounded-full shadow-inner">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className="lg:hidden p-2 text-stone-700 hover:text-brand-red rounded-lg focus:ring-2 focus:ring-brand-red min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={mobileNavOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileNavOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="pb-2 mb-2 border-b border-stone-100">
            <OpenBadge />
          </div>

          <nav className="flex flex-col space-y-1" aria-label="Navigation mobile">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileNav}
                  className={`px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    isActive
                      ? 'bg-brand-red text-white'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-stone-200 grid grid-cols-2 gap-2">
            <a
              href="tel:+22656759191"
              className="py-3 px-3 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-stone-300 min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>Appeler</span>
            </a>
            <a
              href="https://wa.me/22656759191"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 min-h-[48px]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

