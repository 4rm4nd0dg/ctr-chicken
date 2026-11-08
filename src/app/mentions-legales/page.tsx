import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mentions Légales & Confidentialité',
  description: 'Informations légales relatives au site web de Chitir Chicken (CTR Chicken) Ouagadougou, Burkina Faso.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-brand-red transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Retour à l&apos;accueil</span>
      </Link>

      <div className="space-y-3 border-b border-stone-200 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-brand-red">
          Transparence & Cadre Légal
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-brand-black tracking-tight">
          MENTIONS LÉGALES & CONFIDENTIALITÉ
        </h1>
        <p className="text-xs text-stone-500">
          Dernière mise à jour : Novembre 2026
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
        {/* Section 1: Éditeur */}
        <section className="space-y-2">
          <h2 className="font-display text-xl sm:text-2xl font-black text-brand-black">
            1. ÉDITEUR DU SITE
          </h2>
          <p>
            Le présent site est édité par l&apos;enseigne <strong>Chitir Chicken Burkina</strong> (exploitant de la marque <strong>CTR Chicken</strong> au Burkina Faso).
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Siège d&apos;exploitation :</strong> Ouagadougou, Burkina Faso.</li>
            <li><strong>Téléphones de contact :</strong> +226 56 75 91 91 / +226 45 51 76 76</li>
            <li><strong>Canal officiel commandes WhatsApp :</strong> +226 56 75 91 91</li>
            <li><strong>Réseaux officiels :</strong> Facebook, Instagram, TikTok @CHITIR CHICKEN BURKINA</li>
          </ul>
        </section>

        {/* Section 2: Hébergement */}
        <section className="space-y-2">
          <h2 className="font-display text-xl sm:text-2xl font-black text-brand-black">
            2. HÉBERGEMENT & CONCEPTION
          </h2>
          <p>
            Ce site vitrine haute performance est conçu avec Next.js et Tailwind CSS pour offrir un temps de chargement optimal, même en situation de débit réseau restreint sur smartphone.
          </p>
        </section>

        {/* Section 3: Absence de paiement en ligne */}
        <section className="space-y-2">
          <h2 className="font-display text-xl sm:text-2xl font-black text-brand-black">
            3. CONDITIONS DE COMMANDE & PAIEMENT
          </h2>
          <p>
            Le site vitrine permet de composer un panier et génère automatiquement un message de commande transmis sur le compte officiel WhatsApp de Chitir Chicken.
          </p>
          <p>
            <strong>Aucune transaction bancaire ou paiement n&apos;est effectué sur ce site.</strong> Le règlement s&apos;effectue exclusivement à la livraison ou au comptoir du restaurant, soit en espèces, soit par Mobile Money (Orange Money, Moov Money) selon les modalités convenues lors de la confirmation WhatsApp.
          </p>
        </section>

        {/* Section 4: Données personnelles */}
        <section className="space-y-2">
          <h2 className="font-display text-xl sm:text-2xl font-black text-brand-black">
            4. DONNÉES PERSONNELLES & COOKIES
          </h2>
          <p>
            Les informations saisies par le client (nom, numéro de téléphone, adresse) servent uniquement à pré-remplir le message WhatsApp et sont stockées localement sur le téléphone de l&apos;utilisateur (localStorage). Aucune donnée n&apos;est revendue à des tiers.
          </p>
        </section>

        {/* Section 5: Propriété intellectuelle */}
        <section className="space-y-2">
          <h2 className="font-display text-xl sm:text-2xl font-black text-brand-black">
            5. PROPRIÉTÉ INTELLECTUELLE
          </h2>
          <p>
            La marque CTR Chicken, le logo au coq et les slogans « Chicken Taste Revolution » et « Fried Chicken & More » sont des marques déposées. Toute reproduction non autorisée de l&apos;identité visuelle ou des éléments graphiques est strictement interdite.
          </p>
        </section>
      </div>
    </div>
  );
}

