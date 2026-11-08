import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyActionBar } from '@/components/layout/StickyActionBar';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { SkipToContent } from '@/components/ui/SkipToContent';

export const metadata: Metadata = {
  metadataBase: new URL('https://chitirchicken-ouaga.bf'),
  title: {
    default: 'Chitir Chicken Ouagadougou | Chicken Taste Revolution (CTR)',
    template: '%s | Chitir Chicken Ouagadougou',
  },
  description:
    'Restaurant de poulet frit croustillant à Ouagadougou, Burkina Faso. Buckets à partager, burgers gourmands, tenders dorés et Signature Bowls. Ouvert 24h/24 & 7j/7. Commande rapide sur WhatsApp au +226 56 75 91 91.',
  keywords: [
    'Chitir Chicken',
    'CTR Chicken Ouaga',
    'poulet frit Ouagadougou',
    'fast food Ouaga',
    'restaurant poulet Ouagadougou',
    'livraison poulet Ouaga 24h',
    'Kamboinsin restaurant',
    'Kamsonghin fast food',
    'Ouaga 2000 livraison',
    'chicken bucket Ouaga',
  ],
  authors: [{ name: 'Chitir Chicken Burkina' }],
  creator: 'Chitir Chicken Burkina',
  publisher: 'CTR Chicken',
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: 'Chitir Chicken Ouagadougou | Chicken Taste Revolution',
    description:
      'Le poulet frit le plus croustillant de Ouaga. Buckets, burgers, frites garnies, ouvert 24h/24 & 7j/7. Commande sur WhatsApp en 2 clics !',
    url: 'https://chitirchicken-ouaga.bf',
    siteName: 'Chitir Chicken Burkina',
    locale: 'fr_BF',
    type: 'website',
    images: [
      {
        url: '/images/hero-chicken.webp',
        width: 720,
        height: 960,
        alt: 'Poulet croustillant Chitir Chicken Ouagadougou',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chitir Chicken Ouagadougou | Poulet Frit & Burgers',
    description:
      'Chicken Taste Revolution à Ouaga. Ouvert 24h/24. Commandez vos Buckets et Bowls sur WhatsApp !',
    images: ['/images/hero-chicken.webp'],
  },
  icons: {
    icon: '/images/icon-192.webp',
    apple: '/images/icon-192.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FastFoodRestaurant',
    name: 'Chitir Chicken Ouagadougou (CTR Chicken)',
    image: 'https://chitirchicken-ouaga.bf/images/hero-chicken.webp',
    servesCuisine: ['Fast Food', 'Fried Chicken', 'Burgers'],
    priceRange: '1000 - 14500 FCFA',
    telephone: '+226 56 75 91 91',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Route de Kamboinsin / Tampouy',
      addressLocality: 'Ouagadougou',
      addressCountry: 'BF',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    menu: 'https://chitirchicken-ouaga.bf/menu',
    url: 'https://chitirchicken-ouaga.bf',
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-cream-subtle text-brand-black antialiased selection:bg-brand-red selection:text-white">
        <CartProvider>
          <SkipToContent />
          <Header />
          <div className="flex-1 has-sticky-bar md:pb-0" id="main-content">
            {children}
          </div>
          <Footer />
          <StickyActionBar />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
