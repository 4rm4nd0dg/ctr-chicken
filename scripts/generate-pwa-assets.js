const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ICONS_DIR = path.join(__dirname, '..', 'public', 'icons');
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

async function generateAssets() {
  console.log('Génération des icônes PWA à partir de images/logo.jpg et logo-transparent.webp...');

  // 1. Icône standard 192x192 PNG
  // On utilise le logo centré sur fond blanc/#FFFDF9 pour une netteté parfaite
  await sharp(path.join(IMAGES_DIR, 'logo-transparent.webp'))
    .resize(170, 170, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 11,
      bottom: 11,
      left: 11,
      right: 11,
      background: { r: 255, g: 253, b: 249, alpha: 1 } // #FFFDF9
    })
    .png()
    .toFile(path.join(ICONS_DIR, 'icon-192.png'));
  console.log('✓ icon-192.png');

  // 2. Icône standard 512x512 PNG
  await sharp(path.join(IMAGES_DIR, 'logo-transparent.webp'))
    .resize(450, 450, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 31,
      bottom: 31,
      left: 31,
      right: 31,
      background: { r: 255, g: 253, b: 249, alpha: 1 }
    })
    .png()
    .toFile(path.join(ICONS_DIR, 'icon-512.png'));
  console.log('✓ icon-512.png');

  // 3. Icône maskable 512x512 PNG
  // Safe zone pour Android : le logo doit tenir dans un cercle de rayon 0.4 * 512 = 204.8px (diamètre 409px)
  // On dimensionne le logo à 340x340 pour avoir une marge de sécurité généreuse (~66% de largeur)
  const paddingMaskable = Math.round((512 - 340) / 2); // 86px
  await sharp(path.join(IMAGES_DIR, 'logo-transparent.webp'))
    .resize(340, 340, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: paddingMaskable,
      bottom: paddingMaskable,
      left: paddingMaskable,
      right: paddingMaskable,
      background: { r: 255, g: 253, b: 249, alpha: 1 }
    })
    .png()
    .toFile(path.join(ICONS_DIR, 'icon-maskable-512.png'));
  console.log('✓ icon-maskable-512.png (safe zone vérifiée)');

  // 4. Apple Touch Icon 180x180 PNG (iOS Safari)
  const paddingApple = Math.round((180 - 150) / 2); // 15px
  await sharp(path.join(IMAGES_DIR, 'logo-transparent.webp'))
    .resize(150, 150, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: paddingApple,
      bottom: paddingApple,
      left: paddingApple,
      right: paddingApple,
      background: { r: 255, g: 253, b: 249, alpha: 1 }
    })
    .png()
    .toFile(path.join(ICONS_DIR, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png');

  // 5. Favicon 32x32 et 16x16
  await sharp(path.join(IMAGES_DIR, 'logo-transparent.webp'))
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(ICONS_DIR, 'favicon-32x32.png'));

  await sharp(path.join(IMAGES_DIR, 'logo-transparent.webp'))
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(ICONS_DIR, 'favicon-16x16.png'));
  console.log('✓ favicons');

  // 6. Screenshots mobiles haute résolution pour le manifest PWA (1080x1920)
  // Screenshot 1: Accueil CTR Ouagadougou
  const bgCard1 = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <rect width="1080" height="1920" fill="#FFFDF9"/>
      <!-- Header bar -->
      <rect width="1080" height="140" fill="#FFFFFF"/>
      <line x1="0" y1="140" x2="1080" y2="140" stroke="#E5E7EB" stroke-width="2"/>
      <text x="140" y="85" font-family="Arial, sans-serif" font-weight="900" font-size="44" fill="#0B0B0B">CHITIR <tspan fill="#E8202A">CHICKEN</tspan></text>
      <text x="140" y="115" font-family="Arial, sans-serif" font-weight="600" font-size="20" fill="#6B7280" letter-spacing="2">CHICKEN TASTE REVOLUTION • OUAGA</text>
      <rect x="850" y="45" width="180" height="60" rx="30" fill="#10B981"/>
      <text x="940" y="82" font-family="Arial, sans-serif" font-weight="700" font-size="22" fill="#FFFFFF" text-anchor="middle">OUVERT 24/7</text>
      
      <!-- Titre Hero -->
      <text x="60" y="250" font-family="Arial, sans-serif" font-weight="900" font-size="56" fill="#0B0B0B">LE POULET LE PLUS</text>
      <text x="60" y="320" font-family="Arial, sans-serif" font-weight="900" font-size="56" fill="#E8202A">CROUSTILLANT DE OUAGA</text>
      <text x="60" y="380" font-family="Arial, sans-serif" font-weight="500" font-size="26" fill="#4B5563">Recette secrète CTR, livraison 24h/24 partout à Ouagadougou.</text>
      
      <!-- Boutons d'action -->
      <rect x="60" y="430" width="460" height="88" rx="24" fill="#E8202A"/>
      <text x="290" y="485" font-family="Arial, sans-serif" font-weight="800" font-size="28" fill="#FFFFFF" text-anchor="middle">Commander sur WhatsApp</text>
      
      <rect x="540" y="430" width="480" height="88" rx="24" fill="#FFFFFF" stroke="#0B0B0B" stroke-width="3"/>
      <text x="780" y="485" font-family="Arial, sans-serif" font-weight="800" font-size="28" fill="#0B0B0B" text-anchor="middle">Voir le menu complet →</text>
      
      <!-- Section Nos Spécialités -->
      <text x="60" y="600" font-family="Arial, sans-serif" font-weight="900" font-size="40" fill="#0B0B0B">TOP SELLERS À OUAGA</text>
      <rect x="60" y="640" width="960" height="1100" rx="32" fill="#FFF7EC" stroke="#F7941D" stroke-width="2"/>
      
      <!-- Bottom Navigation bar simulation -->
      <rect y="1780" width="1080" height="140" fill="#FFFFFF"/>
      <line x1="0" y1="1780" x2="1080" y2="1780" stroke="#E5E7EB" stroke-width="2"/>
      <text x="135" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#E8202A" text-anchor="middle">Accueil</text>
      <text x="405" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#4B5563" text-anchor="middle">Menu</text>
      <text x="675" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#4B5563" text-anchor="middle">Restaurants</text>
      <text x="945" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#4B5563" text-anchor="middle">Panier</text>
    </svg>
  `);

  // Image du hero insérée dans la card du screenshot 1
  const heroResized = await sharp(path.join(IMAGES_DIR, 'hero-chicken.webp'))
    .resize(900, 960, { fit: 'cover' })
    .toBuffer();

  const miniLogo = await sharp(path.join(IMAGES_DIR, 'logo-transparent.webp'))
    .resize(80, 80)
    .toBuffer();

  await sharp(bgCard1)
    .composite([
      { input: miniLogo, top: 30, left: 40 },
      { input: heroResized, top: 700, left: 90 }
    ])
    .webp({ quality: 85 })
    .toFile(path.join(IMAGES_DIR, 'screenshot-mobile-1.webp'));
  console.log('✓ screenshot-mobile-1.webp');

  // Screenshot 2: Buckets & Menu Festin
  const bgCard2 = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <rect width="1080" height="1920" fill="#FFFDF9"/>
      <!-- Header bar -->
      <rect width="1080" height="140" fill="#FFFFFF"/>
      <line x1="0" y1="140" x2="1080" y2="140" stroke="#E5E7EB" stroke-width="2"/>
      <text x="140" y="85" font-family="Arial, sans-serif" font-weight="900" font-size="44" fill="#0B0B0B">CHITIR <tspan fill="#E8202A">CHICKEN</tspan></text>
      <text x="140" y="115" font-family="Arial, sans-serif" font-weight="600" font-size="20" fill="#6B7280" letter-spacing="2">BUCKETS À PARTAGER • OUAGA</text>
      
      <!-- Titre Section Menu -->
      <text x="60" y="240" font-family="Arial, sans-serif" font-weight="900" font-size="52" fill="#0B0B0B">BUCKETS &amp; COMBOS FAMILLE</text>
      <text x="60" y="295" font-family="Arial, sans-serif" font-weight="600" font-size="26" fill="#E8202A">Croustillant garanti • Pièces fraîches marinées</text>
      
      <!-- Card Bucket 1 -->
      <rect x="60" y="340" width="960" height="660" rx="28" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
      <text x="100" y="930" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="#0B0B0B">MEGA BUCKET 15 PIÈCES</text>
      <text x="100" y="970" font-family="Arial, sans-serif" font-weight="700" font-size="26" fill="#6B7280">15 Pcs Poulet Frit + 3 Frites + Sauces</text>
      <text x="960" y="940" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#E8202A" text-anchor="end">12 500 F</text>
      
      <!-- Card Bucket 2 -->
      <rect x="60" y="1040" width="960" height="680" rx="28" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
      <text x="100" y="1640" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="#0B0B0B">BUCKET TENDERS DORÉS</text>
      <text x="100" y="1680" font-family="Arial, sans-serif" font-weight="700" font-size="26" fill="#6B7280">Aiguillettes 100% filet marinées</text>
      <text x="960" y="1650" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#E8202A" text-anchor="end">8 500 F</text>
      
      <!-- Bottom Navigation bar simulation -->
      <rect y="1780" width="1080" height="140" fill="#FFFFFF"/>
      <line x1="0" y1="1780" x2="1080" y2="1780" stroke="#E5E7EB" stroke-width="2"/>
      <text x="135" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#4B5563" text-anchor="middle">Accueil</text>
      <text x="405" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#E8202A" text-anchor="middle">Menu</text>
      <text x="675" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#4B5563" text-anchor="middle">Restaurants</text>
      <text x="945" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#4B5563" text-anchor="middle">Panier</text>
    </svg>
  `);

  const bucketPyramidResized = await sharp(path.join(IMAGES_DIR, 'bucket-pyramid.webp'))
    .resize(900, 520, { fit: 'cover' })
    .toBuffer();

  const bucketTendersResized = await sharp(path.join(IMAGES_DIR, 'bucket-tenders.webp'))
    .resize(900, 520, { fit: 'cover' })
    .toBuffer();

  await sharp(bgCard2)
    .composite([
      { input: miniLogo, top: 30, left: 40 },
      { input: bucketPyramidResized, top: 360, left: 90 },
      { input: bucketTendersResized, top: 1060, left: 90 }
    ])
    .webp({ quality: 85 })
    .toFile(path.join(IMAGES_DIR, 'screenshot-mobile-2.webp'));
  console.log('✓ screenshot-mobile-2.webp');

  console.log('Toutes les icônes et captures ont été générées avec succès !');
}

generateAssets().catch((err) => {
  console.error('Erreur lors de la génération des assets :', err);
  process.exit(1);
});

