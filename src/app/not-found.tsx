import React from 'react';
import Link from 'next/link';
import { Utensils, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 space-y-6">
      <div className="w-24 h-24 rounded-full bg-brand-cream border-2 border-brand-orange/40 flex items-center justify-center text-brand-red shadow-inner">
        <span className="font-display text-4xl font-black">404</span>
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="font-display text-3xl sm:text-5xl font-black text-brand-black tracking-tight">
          CE MORCEAU S&apos;EST ENVOLÉ !
        </h1>
        <p className="text-xs sm:text-sm text-stone-600">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Rassurez-vous, nos cuisines sont toujours ouvertes 24h/24 pour régaler vos papilles !
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <Link
          href="/menu"
          className="min-h-[48px] px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
        >
          <Utensils className="w-4 h-4" />
          <span>Explorer le menu croustillant</span>
        </Link>

        <Link
          href="/"
          className="min-h-[48px] px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-stone-300 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Retour à l&apos;accueil</span>
        </Link>
      </div>
    </div>
  );
}

