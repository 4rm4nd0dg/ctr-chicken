import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Heart,
  ChevronRight,
  ShieldCheck,
  Utensils,
} from 'lucide-react';
import { WhatsAppIcon, TikTokIcon } from '@/components/ui/SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-stone-300 border-t-4 border-brand-red pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-cream p-1 border border-brand-orange/40 shrink-0">
                <Image
                  src="/images/logo-transparent.webp"
                  alt="CTR Chicken"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-black text-white tracking-wide block">
                  CHITIR <span className="text-brand-red">CHICKEN</span>
                </span>
                <span className="text-[11px] font-semibold text-brand-orange uppercase tracking-wider block">
                  Chicken Taste Revolution
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Le poulet frit le plus croustillant de Ouagadougou. Recette secrète, marinades savoureuses, ingrédients frais et portions ultra généreuses.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-xs font-bold text-white">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Ouvert non-stop 24h/24 & 7j/7</span>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase text-stone-400 tracking-wider block mb-2">
                Suivez-nous : @CHITIR CHICKEN BURKINA
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/chitirchickenburkina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-stone-900 hover:bg-brand-red text-white flex items-center justify-center transition-colors border border-stone-800"
                  aria-label="Facebook Chitir Chicken Burkina"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/chitirchickenburkina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-stone-900 hover:bg-brand-red text-white flex items-center justify-center transition-colors border border-stone-800"
                  aria-label="Instagram Chitir Chicken Burkina"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@chitirchickenburkina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-stone-900 hover:bg-black text-white flex items-center justify-center transition-colors border border-stone-800"
                  aria-label="TikTok Chitir Chicken Burkina"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-white tracking-widest border-b border-stone-800 pb-2">
              Explorer le Menu
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/menu?filter=all" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Tout le menu complet</span>
                </Link>
              </li>
              <li>
                <Link href="/menu?category=bucket-feast" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Bucket Feast (Pour 2 à 4 pers.)</span>
                </Link>
              </li>
              <li>
                <Link href="/menu?category=top-sellers" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Nos Stars (Top Sellers)</span>
                </Link>
              </li>
              <li>
                <Link href="/menu?category=signature-snack" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Signature Snack Bowls</span>
                </Link>
              </li>
              <li>
                <Link href="/menu?category=kids-menu" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>CTR Kids Menu (Enfants)</span>
                </Link>
              </li>
              <li>
                <Link href="/menu?category=desserts-boissons" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Glaces, Cafés italiens & Boissons</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Points de Vente */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-white tracking-widest border-b border-stone-800 pb-2">
              Points de Vente
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white">Chitir Kamboinsin</span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-brand-red text-white">
                    Grande Ouverture
                  </span>
                </div>
                <p className="text-stone-400 text-[11px] mb-2">
                  Route de Kamboinsin / Tampouy, Ouagadougou
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+22656759191"
                    className="text-stone-300 hover:text-white flex items-center gap-1 text-[11px]"
                  >
                    <Phone className="w-3 h-3 text-brand-red" />
                    <span>+226 56 75 91 91</span>
                  </a>
                </div>
              </div>

              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white">Chitir Kamsonghin</span>
                  <span className="text-[10px] font-bold text-emerald-400">24h/24</span>
                </div>
                <p className="text-stone-400 text-[11px] mb-2">
                  Quartier Kamsonghin, Ouagadougou
                </p>
                <a
                  href="tel:+22645517676"
                  className="text-stone-300 hover:text-white flex items-center gap-1 text-[11px]"
                >
                  <Phone className="w-3 h-3 text-brand-red" />
                  <span>+226 45 51 76 76</span>
                </a>
              </div>

              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white">Chitir Ouaga 2000</span>
                  <span className="text-[10px] font-bold text-emerald-400">24h/24</span>
                </div>
                <p className="text-stone-400 text-[11px] mb-2">
                  Zone Ouaga 2000, Ouagadougou
                </p>
                <a
                  href="tel:+22656759191"
                  className="text-stone-300 hover:text-white flex items-center gap-1 text-[11px]"
                >
                  <Phone className="w-3 h-3 text-brand-red" />
                  <span>+226 56 75 91 91</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Commandes & Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-white tracking-widest border-b border-stone-800 pb-2">
              Commander en 2 Clics
            </h3>
            <p className="text-xs text-stone-400">
              Passez votre commande directement sur WhatsApp pour une prise en charge instantanée.
            </p>

            <a
              href="https://wa.me/22656759191?text=Bonjour%20Chitir%20Chicken,%20je%20souhaite%20commander%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp : +226 56 75 91 91</span>
            </a>

            <a
              href="tel:+22645517676"
              className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-stone-200 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-stone-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>Ligne directe : +226 45 51 76 76</span>
            </a>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Hygiène certifiée & ingrédients 100% frais</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Chitir Chicken Burkina (CTR Chicken). Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-stone-300 transition-colors">
              Mentions Légales & Confidentialité
            </Link>
            <Link href="/restaurants" className="hover:text-stone-300 transition-colors">
              Nos Adresses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

