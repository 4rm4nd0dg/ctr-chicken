import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Flame,
  ShieldCheck,
  Heart,
  Clock,
  ArrowRight,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos | Chicken Taste Revolution (CTR Chicken Burkina)',
  description:
    'Découvrez l’histoire de Chitir Chicken (CTR) à Ouagadougou. Notre recette secrète de poulet pané, notre équipe locale et nos engagements fermes sur l’hygiène et la fraîcheur.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Bannière d'en-tête */}
      <section className="bg-brand-cream/60 border-b border-brand-orange/20 py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">
            Notre Mission Gourmande
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-brand-black tracking-tight">
            LA RÉVOLUTION DU POULET FRIT À OUAGA
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
            Chez Chitir Chicken (CTR Chicken), nous ne plaisantons pas avec le croustillant. Voici comment nous réinventons le fast-food au Burkina Faso.
          </p>
        </div>
      </section>

      {/* Histoire de la marque avec photo du grand comptoir */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-stone-200 shadow-xl">
            <Image
              src="/images/comptoir-accueil.webp"
              alt="Comptoir d'accueil officiel Chitir Chicken Ouagadougou"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-red block">
              Notre Histoire à Ouagadougou
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-black tracking-tight">
              UNE PASSION CROUSTILLANTE SANS FRONTIÈRES
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                La marque CTR Chicken est née d&apos;une idée simple mais exigeante : offrir un poulet frit d&apos;une qualité internationale, parfaitement assaisonné, tout en l&apos;adaptant aux palais gourmands et chaleureux de chaque ville.
              </p>
              <p>
                À Ouagadougou, Chitir Chicken s&apos;est rapidement imposé comme la référence incontournable grâce à 3 implantations stratégiques : notre salon lounge historique de <strong>Kamsonghin</strong>, notre nouveau fleuron familial avec espace jeux à <strong>Kamboinsin</strong>, et notre restaurant contemporain avec hub de livraison express à <strong>Ouaga 2000</strong>.
              </p>
              <p className="font-bold text-brand-black">
                « Chicken Taste Revolution » n&apos;est pas qu&apos;un slogan : c&apos;est la promesse de vous faire entendre ce fameux « CRAC » à chaque première bouchée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe et l'accueil en photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-cream/60 rounded-3xl border border-brand-orange/30 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-red text-white">
                <Users className="w-4 h-4" />
                <span>Une équipe dévouée</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-black tracking-tight">
                LE SOURIRE ET LA CHALEUR DU FASO
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Derrière chaque seau de poulet chaud et chaque commande WhatsApp, il y a des dizaines de jeunes Burkinabè passionnés et formés aux standards internationaux de l&apos;hôtellerie et de la restauration rapide. De la prise de commande jusqu&apos;à la livraison à moto chez vous, nous mettons notre fierté à vous servir avec bienveillance et rapidité.
              </p>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-white shadow-xl">
              <Image
                src="/images/equipe-accueil.webp"
                alt="Les hôtesses de caisse souriantes en uniforme officiel CTR Chicken"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Piliers et valeurs */}
      <section className="bg-brand-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
              Nos Piliers
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              LES VALEURS QUI FONT NOTRE SUCCÈS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-black text-white">
                LE GOÛT VÉRITABLE
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Une marinade secrète composée d&apos;épices nobles, infusée lentement pour garantir que la viande soit parfumée et juteuse jusqu&apos;à l&apos;os.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-black text-white">
                LA GÉNÉROSITÉ OUAGALAISE
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Chez nous, on ne lésine pas sur les portions. Les Buckets débordent, les frites sont copieuses et les tenders sont dodus.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-black text-white">
                LE RESPECT DE VOTRE TEMPS
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Service continu 24h/24, préparation express en moins de 10 minutes et livraison fluide dans toute la ville.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fraîcheur et hygiène */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-brand-red">
              Standards Internationaux
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-black tracking-tight">
              NOTRE CHARTE FRAÎCHEUR & HYGIÈNE
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Votre santé et votre sécurité sont notre priorité absolue à chaque service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-brand-black">Huiles de Friture Haute Qualité</h3>
                <p className="text-stone-600 text-xs">
                  Contrôlées quotidiennement avec des testeurs électroniques et renouvelées systématiquement pour une friture propre, dorée et sans arrière-goût.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-brand-black">Chaîne du Froid Ininterrompue</h3>
                <p className="text-stone-600 text-xs">
                  Nos viandes sont stockées dans des chambres froides à température strictement régulée et préparées dans des zones de panure réfrigérées.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-brand-black">Volaille Certifiée & Traçabilité</h3>
                <p className="text-stone-600 text-xs">
                  Approvisionnement auprès d&apos;élevages certifiés, respectant les normes halal et les standards sanitaires les plus stricts.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-brand-black">Cuisines Ouvertes & Hygiène Équipe</h3>
                <p className="text-stone-600 text-xs">
                  Port de gants, toques et masques lors de chaque manipulation. Nettoyage et désinfection minutieuse de nos plans de travail toutes les heures.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm rounded-xl shadow-md transition-colors"
            >
              <span>Découvrir nos plats au menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
