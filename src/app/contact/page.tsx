'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { WhatsAppIcon, TikTokIcon } from '@/components/ui/SocialIcons';
import { OpenBadge } from '@/components/ui/OpenBadge';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    subject: 'commande',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Veuillez renseigner votre nom complet.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Veuillez saisir votre numéro de téléphone.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'Le numéro de téléphone doit comporter au moins 8 chiffres.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Veuillez écrire votre message ou votre question.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate short submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        subject: 'commande',
        message: '',
      });
      setErrors({});
    }, 1000);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-brand-cream/60 border-b border-brand-orange/20 py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center">
            <OpenBadge />
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-brand-black tracking-tight">
            CONTACTEZ CHITIR CHICKEN
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Une question, une commande spéciale, un événement ou un retour sur votre expérience ? Notre équipe de Ouagadougou est à votre entière disposition 24h/24.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <h2 className="font-display text-2xl font-black text-brand-black tracking-tight">
                LIGNES DIRECTES
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Phone 1 */}
                <a
                  href="tel:+22656759191"
                  className="p-3.5 rounded-2xl bg-stone-50 hover:bg-brand-cream border border-stone-200 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block">Standard Principal</span>
                    <span className="font-black text-base text-brand-black group-hover:text-brand-red transition-colors">
                      +226 56 75 91 91
                    </span>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href="tel:+22645517676"
                  className="p-3.5 rounded-2xl bg-stone-50 hover:bg-brand-cream border border-stone-200 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block">Ligne Secondaire</span>
                    <span className="font-black text-base text-brand-black group-hover:text-brand-red transition-colors">
                      +226 45 51 76 76
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/22656759191?text=Bonjour%20Chitir%20Chicken,%20je%20vous%20contacte%20depuis%20le%20site%20web."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <WhatsAppIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-800 block">Commande Instantanée</span>
                    <span className="font-black text-base text-emerald-950 group-hover:text-emerald-800 transition-colors">
                      WhatsApp : 56 75 91 91
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
                  Rejoignez la communauté :
                </span>
                <span className="text-xs font-black text-brand-black block">
                  @CHITIR CHICKEN BURKINA
                </span>

                <div className="grid grid-cols-3 gap-2">
                  <a
                    href="https://www.facebook.com/chitirchickenburkina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-stone-100 hover:bg-brand-red hover:text-white text-stone-800 border border-stone-200 flex flex-col items-center justify-center gap-1 transition-colors text-[11px] font-bold"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://www.instagram.com/chitirchickenburkina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-stone-100 hover:bg-brand-red hover:text-white text-stone-800 border border-stone-200 flex flex-col items-center justify-center gap-1 transition-colors text-[11px] font-bold"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.tiktok.com/@chitirchickenburkina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-stone-100 hover:bg-black hover:text-white text-stone-800 border border-stone-200 flex flex-col items-center justify-center gap-1 transition-colors text-[11px] font-bold"
                  >
                    <TikTokIcon className="w-5 h-5" />
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-black text-brand-black tracking-tight">
                  ENVOYEZ-NOUS UN MESSAGE
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Remplissez ce formulaire et notre responsable vous rappellera rapidement.
                </p>
              </div>

              {isSuccess && (
                <div
                  className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 text-emerald-950 text-xs sm:text-sm animate-in fade-in"
                  role="status"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold">Message transmis avec succès !</p>
                    <p className="text-emerald-800 text-xs">
                      Merci pour votre message. Notre équipe Chitir Chicken vous recontactera dans les plus brefs délais.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="text-xs font-bold text-stone-800 block mb-1.5">
                    Nom et Prénom <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                    }}
                    placeholder="Ex: Alassane Kaboré"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'name-error' : undefined}
                    className={`w-full text-xs sm:text-sm px-4 py-3 rounded-xl border bg-stone-50 focus:bg-white transition-all ${
                      errors.fullName
                        ? 'border-brand-red focus:ring-1 focus:ring-brand-red'
                        : 'border-stone-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="name-error" className="text-xs text-brand-red font-medium mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="text-xs font-bold text-stone-800 block mb-1.5">
                    Numéro de Téléphone (Mobile) <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, phone: e.target.value }));
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                    }}
                    placeholder="Ex: +226 70 12 34 56"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full text-xs sm:text-sm px-4 py-3 rounded-xl border bg-stone-50 focus:bg-white transition-all ${
                      errors.phone
                        ? 'border-brand-red focus:ring-1 focus:ring-brand-red'
                        : 'border-stone-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red'
                    }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-brand-red font-medium mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="text-xs font-bold text-stone-800 block mb-1.5">
                    Objet de votre demande
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                    className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  >
                    <option value="commande">Information sur une commande / livraison</option>
                    <option value="evenement">Commande groupe, anniversaire ou entreprise</option>
                    <option value="reclamation">Remarque ou réclamation qualité</option>
                    <option value="recrutement">Candidature / Recrutement</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="text-xs font-bold text-stone-800 block mb-1.5">
                    Votre Message <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, message: e.target.value }));
                      if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                    }}
                    placeholder="Précisez votre demande, votre heure souhaitée ou vos questions..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full text-xs sm:text-sm px-4 py-3 rounded-xl border bg-stone-50 focus:bg-white transition-all resize-none ${
                      errors.message
                        ? 'border-brand-red focus:ring-1 focus:ring-brand-red'
                        : 'border-stone-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-brand-red font-medium mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button with loading and success states */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[50px] bg-brand-red hover:bg-brand-red-dark disabled:bg-stone-400 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmission en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-brand-orange" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

