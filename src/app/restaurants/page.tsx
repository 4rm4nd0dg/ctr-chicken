import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import menuData from '@/data/menu.json';
import { RestaurantCard } from '@/components/restaurants/RestaurantCard';
import { OpenBadge } from '@/components/ui/OpenBadge';
import {
  Clock,
  Bike,
  ShieldCheck,
  Car,
  Gamepad2,
  Phone,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos Restaurants à Ouagadougou | Kamboinsin, Kamsonghin & Ouaga 2000',
  description:
    'Découvrez les 3 restaurants Chitir Chicken (CTR) à Ouagadougou : Kamboinsin (Grande Ouverture avec espace jeux), Kamsonghin (Lounge climatisé) et Ouaga 2000 (Hub livraison). Ouvert 24h/24 & 7j/7.',
};

export default function RestaurantsPage() {
  const { locations } = menuData.restaurant;

  return (
    <div className="space-y-16 pb-16">
      {/* Bannière d'en-tête */}
      <section className="bg-brand-cream/60 border-b border-brand-orange/20 py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center">
            <OpenBadge />
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-brand-black tracking-tight">
            NOS 3 RESTAURANTS À OUAGADOUGOU
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Profitez de l&apos;ambiance conviviale Chitir Chicken en salle climatisée, en terrasse ou faites-vous livrer 24h/24 dans tous les quartiers de la capitale.
          </p>
        </div>
      </section>

      {/* Grille des cartes des restaurants avec photos réelles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {locations.map((location) => (
            <RestaurantCard key={location.id} location={location as any} />
          ))}
        </div>
      </section>

      {/* Focus spécial sur les 3 ambiances avec photos réelles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">
            Des univers pensés pour vous
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-black tracking-tight">
            UNE EXPÉRIENCE UNIQUE DANS CHAQUE RESTAURANT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Kamboinsin */}
          <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/kamboinsin-salle.webp"
                  alt="Salle lounge et espace de jeux enfants Kamboinsin"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-brand-red text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-full">
                  Kamboinsin
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-2xl font-black text-brand-black">
                  FAMILLE & ESPACE JEUX ENFANTS
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Notre tout nouveau restaurant de la Route de Kamboinsin / Tampouy dispose d&apos;une salle spacieuse, d&apos;écrans digitaux de commande et d&apos;un espace de jeux fermé et climatisé pour le bonheur des plus jeunes.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red">
                <Gamepad2 className="w-4 h-4 text-brand-orange" />
                <span>Idéal pour les sorties en famille</span>
              </span>
            </div>
          </div>

          {/* Kamsonghin */}
          <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/kamsonghin-interieur.webp"
                  alt="Intérieur design avec fauteuils et fresque Kamsonghin"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-brand-black text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-full">
                  Kamsonghin
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-2xl font-black text-brand-black">
                  LOUNGE & MEZZANINE DESIGN
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Fauteuils en velours ultra confortables, suspensions modernes, fresque murale CTR et ambiance feutrée sur 2 niveaux. Parfait pour les déjeuners professionnels et les soirées entre amis.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span>Ambiance branchée au cœur de la ville</span>
              </span>
            </div>
          </div>

          {/* Ouaga 2000 */}
          <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/livraison-flotte.webp"
                  alt="Flotte de motos de livraison devant Ouaga 2000"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-700 text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-full">
                  Ouaga 2000
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-2xl font-black text-brand-black">
                  HUB LIVRAISON & TERRASSE MODERNE
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Bâtiment contemporain avec façade en verre et terrasse. Notre flotte de livreurs à moto dédiée y prend le départ 24h/24 pour approvisionner Ouaga 2000 et tout le sud de Ouagadougou en un temps record.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red">
                <Bike className="w-4 h-4 text-brand-orange" />
                <span>Départ express de livraison 24h/24</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services et commodités */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-brand-red block mb-1">
              Confort & Commodités
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-brand-black">
              TOUT POUR VOUS RECEVOIR DANS LES MEILLEURES CONDITIONS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-brand-black">Service 24h/24</h3>
              <p className="text-[11px] text-stone-500">
                Nos cuisines restent ouvertes jour et nuit non-stop.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/15 text-brand-orange-dark flex items-center justify-center mx-auto">
                <Bike className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-brand-black">Livraison Rapide</h3>
              <p className="text-[11px] text-stone-500">
                Livreurs dédiés à moto sur toute l&apos;agglomération de Ouaga.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-brand-black">Salles Climatisées</h3>
              <p className="text-[11px] text-stone-500">
                Espaces frais, propres et accueillants pour les familles.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-brand-black">Parking Sécurisé</h3>
              <p className="text-[11px] text-stone-500">
                Stationnement gardé pour motos et véhicules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
