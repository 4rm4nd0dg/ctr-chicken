import React from 'react';
import { Sparkles, Bike, PhoneCall, Flame } from 'lucide-react';

export const Ticker: React.FC = () => {
  const items = [
    { text: 'LIVRAISON 24H/24 & 7J/7', icon: Bike },
    { text: 'COMMANDE SUR WHATSAPP', icon: PhoneCall },
    { text: 'CHICKEN TASTE REVOLUTION', icon: Sparkles },
    { text: 'LE PLUS CROUSTILLANT DE OUAGA', icon: Flame },
    { text: 'OUVERT TOUTE LA NUIT', icon: Sparkles },
  ];

  return (
    <div
      className="bg-brand-black text-brand-white border-y border-brand-red/30 py-2.5 overflow-hidden select-none"
      role="region"
      aria-label="Informations clés de livraison et service"
    >
      <div className="flex w-[200%] animate-marquee">
        <div className="flex items-center space-x-8 shrink-0 pr-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center space-x-2 text-xs md:text-sm font-display tracking-widest uppercase">
                <Icon className="w-4 h-4 text-brand-orange shrink-0" aria-hidden="true" />
                <span className="font-bold text-white">{item.text}</span>
                <span className="text-brand-red font-black">•</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center space-x-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`dup-${idx}`} className="flex items-center space-x-2 text-xs md:text-sm font-display tracking-widest uppercase">
                <Icon className="w-4 h-4 text-brand-orange shrink-0" aria-hidden="true" />
                <span className="font-bold text-white">{item.text}</span>
                <span className="text-brand-red font-black">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

