const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_LOGO = path.join(__dirname, '..', 'images', 'logo.jpg');
const ICONS_DIR = path.join(__dirname, '..', 'public', 'icons');
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

async function generateAssets() {
  console.log(`Génération des icônes PWA directement depuis "${SOURCE_LOGO}"...`);

  if (!fs.existsSync(SOURCE_LOGO)) {
    throw new Error(`Le fichier source "${SOURCE_LOGO}" est introuvable !`);
  }

  // 0. Préparation du logo rogné (sans marges superflues pour un centrage parfait)
  const trimmedLogoBuffer = await sharp(SOURCE_LOGO)
    .trim({ threshold: 10 })
    .toBuffer();

  const trimmedMeta = await sharp(trimmedLogoBuffer).metadata();
  console.log(`Logo rogné : ${trimmedMeta.width}x${trimmedMeta.height} px`);

  // 1. Icône standard 192x192 PNG (fond blanc pur #FFFFFF, logo à ~88% de la taille)
  const size192 = 192;
  const inner192 = 168;
  const pad192 = Math.round((size192 - inner192) / 2);
  await sharp(trimmedLogoBuffer)
    .resize(inner192, inner192, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .extend({
      top: pad192,
      bottom: size192 - inner192 - pad192,
      left: pad192,
      right: size192 - inner192 - pad192,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toFile(path.join(ICONS_DIR, 'icon-192.png'));
  console.log('✓ public/icons/icon-192.png');

  // Mettre également à jour public/images/icon-192.webp pour remplacer l'ancienne icône
  await sharp(path.join(ICONS_DIR, 'icon-192.png'))
    .webp({ quality: 95 })
    .toFile(path.join(IMAGES_DIR, 'icon-192.webp'));
  console.log('✓ public/images/icon-192.webp (remplacé)');

  // 2. Icône standard 512x512 PNG
  const size512 = 512;
  const inner512 = 448;
  const pad512 = Math.round((size512 - inner512) / 2);
  await sharp(trimmedLogoBuffer)
    .resize(inner512, inner512, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .extend({
      top: pad512,
      bottom: size512 - inner512 - pad512,
      left: pad512,
      right: size512 - inner512 - pad512,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toFile(path.join(ICONS_DIR, 'icon-512.png'));
  console.log('✓ public/icons/icon-512.png');

  // 3. Icône maskable 512x512 PNG (Android adaptive icon avec Safe Zone 80%)
  // Diamètre safe zone W3C = 80% (409px). On cale le logo à 356px max pour marge de sécurité.
  const maskableInner = 356;
  const maskablePad = Math.round((size512 - maskableInner) / 2);
  await sharp(trimmedLogoBuffer)
    .resize(maskableInner, maskableInner, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .extend({
      top: maskablePad,
      bottom: size512 - maskableInner - maskablePad,
      left: maskablePad,
      right: size512 - maskableInner - maskablePad,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toFile(path.join(ICONS_DIR, 'icon-maskable-512.png'));
  console.log('✓ public/icons/icon-maskable-512.png (safe zone 80% respectée sur fond #FFFFFF)');

  // 4. Apple Touch Icon 180x180 PNG (iOS Safari)
  const sizeApple = 180;
  const innerApple = 156;
  const padApple = Math.round((sizeApple - innerApple) / 2);
  await sharp(trimmedLogoBuffer)
    .resize(innerApple, innerApple, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .extend({
      top: padApple,
      bottom: sizeApple - innerApple - padApple,
      left: padApple,
      right: sizeApple - innerApple - padApple,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toFile(path.join(ICONS_DIR, 'apple-touch-icon.png'));
  console.log('✓ public/icons/apple-touch-icon.png');

  // 5. Favicons 32x32 et 16x16
  await sharp(trimmedLogoBuffer)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(ICONS_DIR, 'favicon-32x32.png'));

  await sharp(trimmedLogoBuffer)
    .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(ICONS_DIR, 'favicon-16x16.png'));
  console.log('✓ favicons 32x32 & 16x16');

  // 6. Mise à jour des screenshots avec le logo officiel logo.jpg
  const miniLogoBuffer = await sharp(SOURCE_LOGO)
    .resize(90, 90, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toBuffer();

  const heroResized = await sharp(path.join(IMAGES_DIR, 'hero-chicken.webp'))
    .resize(900, 960, { fit: 'cover' })
    .toBuffer();

  const bgCard1 = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <rect width="1080" height="1920" fill="#FFFDF9"/>
      <rect width="1080" height="150" fill="#FFFFFF"/>
      <line x1="0" y1="150" x2="1080" y2="150" stroke="#E5E7EB" stroke-width="2"/>
      <text x="160" y="85" font-family="Arial, sans-serif" font-weight="900" font-size="44" fill="#0B0B0B">CHITIR <tspan fill="#E8202A">CHICKEN</tspan></text>
      <text x="160" y="120" font-family="Arial, sans-serif" font-weight="600" font-size="20" fill="#6B7280" letter-spacing="2">CHICKEN TASTE REVOLUTION • OUAGA</text>
      <rect x="850" y="45" width="180" height="60" rx="30" fill="#10B981"/>
      <text x="940" y="82" font-family="Arial, sans-serif" font-weight="700" font-size="22" fill="#FFFFFF" text-anchor="middle">OUVERT 24/7</text>
      
      <text x="60" y="250" font-family="Arial, sans-serif" font-weight="900" font-size="56" fill="#0B0B0B">LE POULET LE PLUS</text>
      <text x="60" y="320" font-family="Arial, sans-serif" font-weight="900" font-size="56" fill="#E8202A">CROUSTILLANT DE OUAGA</text>
      <text x="60" y="380" font-family="Arial, sans-serif" font-weight="500" font-size="26" fill="#4B5563">Recette secrète CTR, livraison 24h/24 partout à Ouagadougou.</text>
      
      <rect x="60" y="430" width="460" height="88" rx="24" fill="#E8202A"/>
      <text x="290" y="485" font-family="Arial, sans-serif" font-weight="800" font-size="28" fill="#FFFFFF" text-anchor="middle">Commander sur WhatsApp</text>
      
      <rect x="540" y="430" width="480" height="88" rx="24" fill="#FFFFFF" stroke="#0B0B0B" stroke-width="3"/>
      <text x="780" y="485" font-family="Arial, sans-serif" font-weight="800" font-size="28" fill="#0B0B0B" text-anchor="middle">Voir le menu complet →</text>
      
      <text x="60" y="600" font-family="Arial, sans-serif" font-weight="900" font-size="40" fill="#0B0B0B">TOP SELLERS À OUAGA</text>
      <rect x="60" y="640" width="960" height="1100" rx="32" fill="#FFF7EC" stroke="#F7941D" stroke-width="2"/>
      
      <rect y="1780" width="1080" height="140" fill="#FFFFFF"/>
      <line x1="0" y1="1780" x2="1080" y2="1780" stroke="#E5E7EB" stroke-width="2"/>
      <text x="135" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#E8202A" text-anchor="middle">Accueil</text>
      <text x="405" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#4B5563" text-anchor="middle">Menu</text>
      <text x="675" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#4B5563" text-anchor="middle">Restaurants</text>
      <text x="945" y="1855" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#4B5563" text-anchor="middle">Panier</text>
    </svg>
  `);

  await sharp(bgCard1)
    .composite([
      { input: miniLogoBuffer, top: 30, left: 40 },
      { input: heroResized, top: 700, left: 90 }
    ])
    .webp({ quality: 85 })
    .toFile(path.join(IMAGES_DIR, 'screenshot-mobile-1.webp'));
  console.log('✓ screenshot-mobile-1.webp');

  const bgCard2 = Buffer.from(`
    <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
      <rect width="1080" height="1920" fill="#FFFDF9"/>
      <rect width="1080" height="150" fill="#FFFFFF"/>
      <line x1="0" y1="150" x2="1080" y2="150" stroke="#E5E7EB" stroke-width="2"/>
      <text x="160" y="85" font-family="Arial, sans-serif" font-weight="900" font-size="44" fill="#0B0B0B">CHITIR <tspan fill="#E8202A">CHICKEN</tspan></text>
      <text x="160" y="120" font-family="Arial, sans-serif" font-weight="600" font-size="20" fill="#6B7280" letter-spacing="2">BUCKETS À PARTAGER • OUAGA</text>
      
      <text x="60" y="240" font-family="Arial, sans-serif" font-weight="900" font-size="52" fill="#0B0B0B">BUCKETS &amp; COMBOS FAMILLE</text>
      <text x="60" y="295" font-family="Arial, sans-serif" font-weight="600" font-size="26" fill="#E8202A">Croustillant garanti • Pièces fraîches marinées</text>
      
      <rect x="60" y="340" width="960" height="660" rx="28" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
      <text x="100" y="930" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="#0B0B0B">MEGA BUCKET 15 PIÈCES</text>
      <text x="100" y="970" font-family="Arial, sans-serif" font-weight="700" font-size="26" fill="#6B7280">15 Pcs Poulet Frit + 3 Frites + Sauces</text>
      <text x="960" y="940" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#E8202A" text-anchor="end">12 500 F</text>
      
      <rect x="60" y="1040" width="960" height="680" rx="28" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
      <text x="100" y="1640" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="#0B0B0B">BUCKET TENDERS DORÉS</text>
      <text x="100" y="1680" font-family="Arial, sans-serif" font-weight="700" font-size="26" fill="#6B7280">Aiguillettes 100% filet marinées</text>
      <text x="960" y="1650" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#E8202A" text-anchor="end">8 500 F</text>
      
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
      { input: miniLogoBuffer, top: 30, left: 40 },
      { input: bucketPyramidResized, top: 360, left: 90 },
      { input: bucketTendersResized, top: 1060, left: 90 }
    ])
    .webp({ quality: 85 })
    .toFile(path.join(IMAGES_DIR, 'screenshot-mobile-2.webp'));
  console.log('✓ screenshot-mobile-2.webp');

  console.log('Toutes les icônes PWA ont été régénérées avec succès depuis logo.jpg !');
}

generateAssets().catch((err) => {
  console.error('Erreur :', err);
  process.exit(1);
});
