import React from 'react';
import Image from 'next/image';
import { RestaurantLocation } from '@/types/menu';
import { MapPin, Clock, Phone, Navigation, Sparkles, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';

interface RestaurantCardProps {
  location: RestaurantLocation & {
    image?: string;
    features?: string[];
  };
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ location }) => {
  return (
    <article
      className={`rounded-3xl border bg-white overflow-hidden shadow-sm hover:shadow-floating transition-all flex flex-col justify-between group ${
        location.isFlagship
          ? 'border-brand-red ring-2 ring-brand-red/15'
          : 'border-stone-200'
      }`}
    >
      <div>
        {/* Photo réelle du restaurant */}
        {location.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-cream border-b border-stone-100">
            <Image
              src={location.image}
              alt={`Façade du restaurant ${location.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badge d'état flottant */}
            <div className="absolute top-3 left-3 z-10">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${
                  location.badge.toLowerCase().includes('ouverture')
                    ? 'bg-brand-red text-white animate-pulse'
                    : 'bg-brand-black text-white border border-white/20'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span>{location.badge}</span>
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange block">
                Restaurant officiel CTR
              </span>
              <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug drop-shadow">
                {location.name}
              </h3>
            </div>
          </div>
        )}

        {/* Détails et adresse */}
        <div className="p-5 sm:p-6 space-y-4">
          {!location.image && (
            <div className="flex items-start justify-between gap-2 border-b border-stone-100 pb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-brand-black tracking-tight">
                  {location.name}
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  Chitir Chicken Ouagadougou
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-red text-white">
                {location.badge}
              </span>
            </div>
          )}

          {/* Adresse physique */}
          <div className="flex items-start gap-2.5 text-xs text-stone-700">
            <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
            <span className="font-medium leading-relaxed">{location.address}</span>
          </div>

          {/* Horaires d'ouverture */}
          <div className="flex items-center gap-2.5 text-xs font-bold text-stone-800 bg-brand-cream/60 p-2.5 rounded-xl border border-brand-orange/20">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{location.hours}</span>
          </div>

          {/* Points forts / Services du restaurant */}
          {location.features && location.features.length > 0 && (
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                Équipements & Services :
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-stone-600 font-medium">
                {location.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-dark shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lignes téléphoniques */}
          <div className="space-y-1 pt-1">
            <span className="text-[10px] font-bold uppercase text-stone-500 tracking-wider block">
              Lignes directes :
            </span>
            <div className="flex flex-wrap gap-2">
              {location.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-bold text-stone-800 border border-stone-200 transition-colors"
                >
                  <Phone className="w-3 h-3 text-brand-red" />
                  <span>{phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Boutons d'action : Appeler, WhatsApp, Itinéraire */}
      <div className="grid grid-cols-3 gap-2 p-5 pt-0 mt-2 border-t border-stone-100">
        <a
          href={`tel:${location.phones[0].replace(/\s+/g, '')}`}
          className="min-h-[44px] py-2.5 px-2 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border border-stone-300 transition-colors"
          aria-label={`Appeler ${location.name}`}
        >
          <Phone className="w-4 h-4 text-brand-red" />
          <span>Appeler</span>
        </a>

        <a
          href={`https://wa.me/${location.whatsapp}?text=Bonjour%20${encodeURIComponent(location.name)},%20je%20souhaite%20passer%20une%20commande.`}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
          aria-label={`Commander sur WhatsApp pour ${location.name}`}
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] py-2.5 px-2 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
          aria-label={`Voir l'itinéraire vers ${location.name} sur Google Maps`}
        >
          <Navigation className="w-4 h-4 text-brand-orange" />
          <span>Itinéraire</span>
        </a>
      </div>
    </article>
  );
};
