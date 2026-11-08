import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menuData from '@/data/menu.json';
import { MenuCard } from '@/components/menu/MenuCard';
import { RestaurantCard } from '@/components/restaurants/RestaurantCard';
import { Ticker } from '@/components/ui/Ticker';
import { OpenBadge } from '@/components/ui/OpenBadge';
import {
  ArrowRight,
  Sparkles,
  Flame,
  ShieldCheck,
  Clock,
  Users,
  Utensils,
  Smile,
  Bike,
  Coffee,
  MapPin,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';
import { formatPrice } from '@/utils/whatsapp';

export default function HomePage() {
  const { restaurant, items } = menuData;

  // Top Sellers
  const topSellers = items.filter((item) => item.categoryId === 'top-sellers');

  // Bucket feast items
  const bucketItems = items.filter((item) => item.categoryId === 'bucket-feast').slice(0, 4);

  // Signature Bowls
  const bowlItems = items.filter((item) => item.categoryId === 'signature-snack');

  // Kids menu
  const kidsItem = items.find((item) => item.categoryId === 'kids-menu');

  // Petit déjeuner
  const breakfastItems = items.filter((item) => item.categoryId === 'petit-dejeuner');

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-brand-cream/50 pt-8 pb-16 sm:py-20 lg:py-24 border-b border-stone-200">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Colonne gauche : Accroche & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <OpenBadge />
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-brand-red text-white shadow-sm">
                  <Flame className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                  <span>Chicken Taste Revolution</span>
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-brand-black tracking-tight leading-[0.95]">
                LE POULET LE PLUS <span className="text-brand-red underline decoration-brand-orange decoration-wavy decoration-2">CROUSTILLANT</span> DE OUAGA
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-stone-700 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Une croûte dorée ultra croustillante, une viande tendre et juteuse marinée selon notre recette secrète CTR. Commandez dès maintenant, nous livrons 24h/24 partout à Ouagadougou !
              </p>

              {/* Boutons d'action prioritaires */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="https://wa.me/22656759191?text=Bonjour%20Chitir%20Chicken,%20je%20souhaite%20commander%20un%20festin%20!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-brand-red/25 hover:shadow-glow-red transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5 text-emerald-300" />
                  <span>Commander sur WhatsApp</span>
                </a>

                <Link
                  href="/menu"
                  className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-white hover:bg-stone-100 text-brand-black border-2 border-stone-800 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm"
                >
                  <span>Voir le menu complet</span>
                  <ArrowRight className="w-4 h-4 text-brand-red" />
                </Link>
              </div>

              {/* 3 Arguments rapides */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-stone-200/80">
                <div className="text-center lg:text-left">
                  <span className="font-display text-xl sm:text-2xl font-black text-brand-red block">100%</span>
                  <span className="text-[11px] font-bold text-stone-600 block uppercase">Frais & Halal</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="font-display text-xl sm:text-2xl font-black text-brand-black block">24H / 7J</span>
                  <span className="text-[11px] font-bold text-stone-600 block uppercase">Service Continu</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="font-display text-xl sm:text-2xl font-black text-brand-orange-dark block">&lt; 30 MIN</span>
                  <span className="text-[11px] font-bold text-stone-600 block uppercase">Livraison Rapide</span>
                </div>
              </div>
            </div>

            {/* Colonne droite : Photo du poulet croustillant tenu en main */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/images/hero-chicken.webp"
                    alt="Morceau de poulet frit croustillant Chitir Chicken tenu en main"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block">
                        Croustillant garanti
                      </span>
                      <span className="font-display text-lg font-black text-brand-black">
                        FRIED CHICKEN & MORE
                      </span>
                    </div>
                    <span className="px-3 py-1.5 bg-brand-red text-white text-xs font-black rounded-xl">
                      Dès 1 000 FCFA
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-brand-orange text-brand-black font-black p-3 sm:p-4 rounded-2xl shadow-xl border-2 border-white -rotate-6 hidden sm:flex flex-col items-center">
                  <span className="text-xs uppercase tracking-widest font-extrabold">Recette</span>
                  <span className="font-display text-2xl font-black leading-none">CTR</span>
                  <span className="text-[10px] uppercase font-bold">Originale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TICKER DÉFILANT */}
      <Ticker />

      {/* 3. NOS STARS (TOP SELLERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>Les favoris des Ouagalais</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-black tracking-tight">
              NOS STARS DU MOMENT
            </h2>
          </div>
          <Link
            href="/menu?category=top-sellers"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-red hover:text-brand-red-dark group"
          >
            <span>Voir toute la sélection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topSellers.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 4. BUCKET FEAST EN VEDETTE AVEC LA NOUVELLE PHOTO DU SEAU DÉBORDANT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-black text-white overflow-hidden border-2 border-brand-red shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            {/* Photo haute définition du seau débordant de tenders et ailes */}
            <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-stone-800">
              <Image
                src="/images/bucket-tenders.webp"
                alt="Seau de poulet frit croustillant Chitir Chicken garni de tenders et d'ailes avec sauces"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-brand-red text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-md">
                Pour 2 à 5 personnes
              </div>
            </div>

            {/* Détails du Bucket Feast */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                  Formules à partager & Nouveautés
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  BUCKET FEAST : LE GRAND FESTIN FAMILIAL
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
                  En famille, entre collègues ou pour une soirée match, nos seaux généreux combinent ailes pimentées, cuisses juteuses, tenders 100% filet, grandes frites, pains à l&apos;ail et boissons fraîches.
                </p>
              </div>

              {/* Aperçu des Buckets phares dont le nouveau Fiesta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bucketItems.map((bucket) => (
                  <div
                    key={bucket.id}
                    className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-brand-orange uppercase">
                          {bucket.servings || 'À partager'}
                        </span>
                        <span className="font-black text-xs text-white">
                          {formatPrice(bucket.price)}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm text-white truncate">
                        {bucket.name}
                      </h3>
                      <p className="text-[11px] text-stone-400 line-clamp-2 mt-1">
                        {bucket.composition}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-stone-800 flex items-center justify-between">
                      <Link
                        href={`/menu?category=bucket-feast#item-title-${bucket.id}`}
                        className="text-[11px] font-bold text-brand-orange hover:text-white underline"
                      >
                        Commander ce seau
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/menu?category=bucket-feast"
                  className="w-full sm:w-auto px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Users className="w-4 h-4" />
                  <span>Découvrir les 8 Buckets Feast</span>
                </Link>
                <span className="text-xs text-stone-400">
                  Dès 11 000 FCFA jusqu&apos;au méga seau Fiesta à 24 000 FCFA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOUVELLE SECTION LIVRAISON AVEC LA VRAIE FLOTTE DE LIVREURS CTR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-brand-black to-stone-950 text-white p-6 sm:p-10 lg:p-12 border border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-orange text-brand-black">
                <Bike className="w-4 h-4" />
                <span>Service Livraison Express 24h/24</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                VOTRE POULET CHAUD LIVRÉ PARTOUT À OUAGA
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Nos livreurs dédiés équipés de sacs isothermes scellés CTR Chicken parcourent la capitale jour et nuit. Vos tenders et frites arrivent croustillants et fumants, à la porte de votre maison ou de votre bureau.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700">
                  <span className="font-bold text-white block mb-0.5">Tous quartiers :</span>
                  <span className="text-stone-400 text-[11px]">Kamboinsin, Ouaga 2000, Kamsonghin, Gounghin, Pissy, etc.</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700">
                  <span className="font-bold text-white block mb-0.5">Paiement simple :</span>
                  <span className="text-stone-400 text-[11px]">Espèces à la livraison ou Orange / Moov Money.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/22656759191?text=Bonjour%20Chitir%20Chicken,%20je%20souhaite%20une%20livraison%20imm%C3%A9diate%20!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
                  <span>Commander une livraison WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Photo réelle de la flotte de livreurs en tenue orange */}
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-brand-orange/40 shadow-2xl">
              <Image
                src="/images/livraison-flotte.webp"
                alt="Flotte de livreurs CTR Chicken en combinaison orange devant le restaurant de Ouaga 2000"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-sm p-2 rounded-lg text-center text-[11px] text-white font-medium">
                Notre flotte officielle CTR Chicken prête à vous livrer 24h/24
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIGNATURE SNACK (BOWLS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">
            Frites garnies & croustillant signature
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-black tracking-tight">
            SIGNATURE SNACK : LES CHITIR BOWLS
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Un lit de frites croustillantes nappé de tenders dorés et de nos sauces signatures maison. Choisissez votre taille : Moyen ou Large, avec ou sans boisson.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bowlItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 7. NOUVELLE SECTION PETIT DÉJEUNER & BRUNCH AVEC CAFÉ ITALIEN */}
      {breakfastItems.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-50 border border-amber-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-600 text-white mb-2">
                  <Coffee className="w-4 h-4" />
                  <span>Disponible dès le matin</span>
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-black tracking-tight">
                  CTR PETIT DÉJEUNER & BRUNCH + CAFÉ INCLUS
                </h2>
                <p className="text-xs sm:text-sm text-stone-700">
                  Commencez la journée avec nos sandwiches chauds (œufs frais, saucisse, bœuf fumé, fromage coulant) et un café italien offert.
                </p>
              </div>
              <Link
                href="/menu?category=petit-dejeuner"
                className="text-xs font-bold text-amber-800 hover:text-amber-950 underline shrink-0"
              >
                Voir toutes les formules matin
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {breakfastItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. BANDEAU MENU ENFANTS */}
      {kidsItem && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-amber-400 via-brand-orange to-brand-red p-6 sm:p-10 shadow-xl text-brand-black flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-white">
            <div className="space-y-3 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white text-brand-black shadow-sm">
                <Smile className="w-4 h-4 text-brand-orange-dark" />
                <span>Pour nos petits champions</span>
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white drop-shadow tracking-tight">
                CTR KIDS MENU : LE GOÛTER ROYAL
              </h2>
              <p className="text-xs sm:text-sm text-stone-900 font-medium max-w-xl">
                Mini Chitir Burger moelleux ou 2 Tenders croustillants, accompagnés de frites dorées et d&apos;un délicieux jus de fruits vitaminé.
              </p>
              <div className="text-2xl sm:text-3xl font-black text-white drop-shadow">
                {formatPrice(kidsItem.price)}
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href="/menu?category=kids-menu"
                className="min-h-[50px] px-8 py-3.5 bg-brand-black hover:bg-stone-900 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-2xl transition-all active:scale-95"
              >
                <Utensils className="w-4 h-4 text-brand-orange" />
                <span>Ajouter un Menu Enfant</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 9. NOUVELLE SECTION FRAÎCHEUR & SAUCES GOURMETS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="rounded-3xl bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 border border-brand-orange/30 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-red text-white mb-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span>Nouveautés Carte Fraîcheur</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-black tracking-tight">
                BOISSONS GLACÉES, SMOOTHIES & SAUCES GOURMETS
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 max-w-2xl">
                Désaltérez-vous avec nos Thés au lait Boba aux perles de tapioca, thés glacés aux fruits coupés, smoothies ultra-frais et nappez vos tenders de nos 5 sauces signatures CTR.
              </p>
            </div>
            <Link
              href="/menu?category=desserts-boissons"
              className="text-xs font-bold text-brand-red hover:text-brand-red-dark underline shrink-0"
            >
              Voir toutes les boissons & sauces
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Carte 1: Boba Milk Tea */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-3.5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-stone-100">
                  <Image
                    src="/images/boba-milk-tea.webp"
                    alt="Thé au Lait Bobo avec perles de tapioca et coulis"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-black bg-brand-orange text-brand-black shadow">
                    1 500 FCFA
                  </span>
                </div>
                <h3 className="font-bold text-sm text-brand-black">Thé au Lait Bobo</h3>
                <p className="text-[11px] text-stone-500 line-clamp-2 mt-1">
                  Perles de tapioca fondantes, lait frais à la fraise ou à la mangue.
                </p>
              </div>
              <div className="pt-3 mt-2 border-t border-stone-100">
                <Link
                  href="/menu?category=desserts-boissons#item-title-ds-the-au-lait"
                  className="w-full py-2 bg-stone-100 hover:bg-brand-red hover:text-white text-stone-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Commander</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Carte 2: Thés aux Fruits Glacés */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-3.5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-stone-100">
                  <Image
                    src="/images/the-aux-fruits.webp"
                    alt="Thés glacés aux fruits frais avec agrumes"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-black bg-brand-orange text-brand-black shadow">
                    1 500 FCFA
                  </span>
                </div>
                <h3 className="font-bold text-sm text-brand-black">Thé Glacé aux Fruits</h3>
                <p className="text-[11px] text-stone-500 line-clamp-2 mt-1">
                  Mangue-Ananas-Boom, Raisin-Grenade, Pêche-Oolong, Hibiscus.
                </p>
              </div>
              <div className="pt-3 mt-2 border-t border-stone-100">
                <Link
                  href="/menu?category=desserts-boissons#item-title-ds-the-aux-fruits"
                  className="w-full py-2 bg-stone-100 hover:bg-brand-red hover:text-white text-stone-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Commander</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Carte 3: Smoothies Givrés */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-3.5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-stone-100">
                  <Image
                    src="/images/smoothies-fraicheur.webp"
                    alt="Smoothie glacé fruité mixé minute"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-black bg-brand-orange text-brand-black shadow">
                    1 500 FCFA
                  </span>
                </div>
                <h3 className="font-bold text-sm text-brand-black">Smoothie & Slush</h3>
                <p className="text-[11px] text-stone-500 line-clamp-2 mt-1">
                  Mangue-Pomelo, Fraise-Pêche, Raisin-Boom ultra rafraîchissant.
                </p>
              </div>
              <div className="pt-3 mt-2 border-t border-stone-100">
                <Link
                  href="/menu?category=desserts-boissons#item-title-ds-smoothies"
                  className="w-full py-2 bg-stone-100 hover:bg-brand-red hover:text-white text-stone-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Commander</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Carte 4: 5 Sauces Gourmets */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-3.5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-stone-100">
                  <Image
                    src="/images/sauces-gourmet.webp"
                    alt="Assortiment de 5 sauces gourmets en ramequins blancs"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-black bg-brand-red text-white shadow">
                    200 FCFA
                  </span>
                </div>
                <h3 className="font-bold text-sm text-brand-black">5 Sauces Gourmets</h3>
                <p className="text-[11px] text-stone-500 line-clamp-2 mt-1">
                  Special Chitir, Sambal Oelek, Honey Mustard, Garlic Mayo, Barbecue.
                </p>
              </div>
              <div className="pt-3 mt-2 border-t border-stone-100">
                <Link
                  href="/menu?category=sides-sauces"
                  className="w-full py-2 bg-stone-100 hover:bg-brand-red hover:text-white text-stone-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Choisir sa sauce</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BANDE « POURQUOI CHITIR » (3 ARGUMENTS) */}
      <section className="bg-brand-cream/60 border-y border-brand-orange/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-brand-red">
              Nos engagements qualité
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-black tracking-tight">
              POURQUOI TOUT OUAGA CHOISIT CHITIR ?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Trois promesses fermes servies chaudes à chaque commande.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-floating transition-shadow space-y-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto sm:mx-0">
                <Flame className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-black text-brand-black tracking-wide">
                1. LE CROUSTILLANT SUPRÊME
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Le fameux bruit « CRAC » à chaque bouchée. Notre panure secrète CTR enveloppe un poulet tendre mariné pendant des heures. Zéro compromis sur le goût !
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-floating transition-shadow space-y-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 text-brand-orange-dark flex items-center justify-center mx-auto sm:mx-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-black text-brand-black tracking-wide">
                2. 100% FRAIS & HYGIÈNE STRICTE
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Volaille fraîche soigneusement sélectionnée, contrôles rigoureux en cuisine et préparations à la commande pour une fraîcheur irréprochable.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-floating transition-shadow space-y-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto sm:mx-0">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-black text-brand-black tracking-wide">
                3. SERVICE NON-STOP 24H/24
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Envie de tenders croustillants à 2h du matin après le travail ou en rentrant de soirée ? Nos cuisines ne dorment jamais à Ouagadougou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GALERIE PHOTOS IMMERSIVE AVEC PLATS & RESTAURANTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-brand-red">
              Instants gourmands & Ambiance
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-black tracking-tight">
              EN DIRECT DE NOS TABLES À OUAGA
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            Véritables photos de nos restaurants et de nos plats
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Photo 1: Seau tenders débordant */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/bucket-tenders.webp"
              alt="Seau de poulet frit Chitir Chicken avec tenders dorés"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Seau Tenders & Ailes
            </div>
          </div>

          {/* Photo 2: Plateau repas avec gobelet CTR */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/menu-combo-plateau.webp"
              alt="Plateau repas avec gobelet CTR Chicken et frites"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Menu Combo Individuel
            </div>
          </div>

          {/* Photo 3: Salle lounge Kamboinsin */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/restaurant-kamboinsin.webp"
              alt="Intérieur du restaurant Chitir Chicken Kamboinsin avec coin enfants"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Restaurant Kamboinsin
            </div>
          </div>

          {/* Photo 4: Salle Kamsonghin de nuit */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/restaurant-kamsonghin.webp"
              alt="Façade nocturne illuminée du restaurant Chitir Chicken Kamsonghin"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Kamsonghin la Nuit
            </div>
          </div>

          {/* Photo 5: Néon Taste Revolution */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/neon-taste-revolution.webp"
              alt="Néon lumineux Taste Revolution sur mur boisé"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Taste Revolution Déco
            </div>
          </div>

          {/* Photo 6: Grand comptoir d'accueil */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/comptoir-accueil.webp"
              alt="Grand comptoir en bois avec caisses et écrans digitaux"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Comptoir & Caisses
            </div>
          </div>

          {/* Photo 7: Équipe souriante */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/equipe-accueil.webp"
              alt="Équipe d'hôtesses souriantes CTR Chicken"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Accueil Chaleureux
            </div>
          </div>

          {/* Photo 8: Façade Ouaga 2000 */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/restaurant-ouaga2000.webp"
              alt="Façade vitrée moderne du restaurant Chitir Chicken Ouaga 2000"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Restaurant Ouaga 2000
            </div>
          </div>

          {/* Photo 9: 5 Sauces Gourmets */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/sauces-gourmet.webp"
              alt="Les 5 sauces gourmets Chitir Chicken en ramequins blancs"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              5 Sauces Gourmets (200 FCFA)
            </div>
          </div>

          {/* Photo 10: Boba Milk Tea */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/boba-milk-tea.webp"
              alt="Thés au lait avec perles de tapioca et coulis gourmands"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Thés au Lait & Boba
            </div>
          </div>

          {/* Photo 11: Thés Glacés aux Fruits */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/the-aux-fruits.webp"
              alt="Gobelets de thé glacé aux fruits frais et rondelles d'orange"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Thés Glacés aux Fruits
            </div>
          </div>

          {/* Photo 12: Smoothies & Slush */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 group">
            <Image
              src="/images/smoothies-fraicheur.webp"
              alt="Gobelets de smoothies fruités bien glacés"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] font-bold">
              Smoothies & Slush Fraîcheur
            </div>
          </div>
        </div>
      </section>

      {/* 11. NOS RESTAURANTS AVEC LEURS VRAIES FAÇADES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">
            Rapprochez-vous du croustillant
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-black tracking-tight">
            NOS RESTAURANTS À OUAGADOUGOU
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Venez déguster sur place en salle climatisée ou passez prendre votre commande à emporter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurant.locations.map((loc) => (
            <RestaurantCard key={loc.id} location={loc} />
          ))}
        </div>
      </section>

      {/* 12. APPEL À L'ACTION FINAL */}
      <section className="bg-brand-red text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Faim immédiate ?
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight">
            VOTRE COMMANDE PRÊTE EN UN CLIN D&apos;ŒIL
          </h2>
          <p className="text-xs sm:text-base text-white/90 max-w-xl mx-auto">
            Contactez notre standard WhatsApp ou composez directement le +226 56 75 91 91 pour une livraison express.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/22656759191?text=Bonjour%20Chitir%20Chicken,%20je%20souhaite%20commander%20un%20menu%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-black hover:bg-stone-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-emerald-300" />
              <span>Commander sur WhatsApp</span>
            </a>
            <a
              href="tel:+22656759191"
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-stone-100 text-brand-black rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4 text-brand-red" />
              <span>Appeler le restaurant</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function PhoneCall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
