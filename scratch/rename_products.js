const fs = require('fs');
const path = require('path');

const mappings = [
  ["product-1.jpg", "ny-skyline-logo-tee.jpg", "NY Skyline Logo Tee"],
  ["product-2.jpg", "goat-throne-tee.jpg", "GOAT Throne Graphic Tee"],
  ["product-3.jpg", "sauveur-stained-glass-tee.jpg", "Sauveur Stained Glass Tee"],
  ["product-4.jpg", "savior-stained-glass-tee.jpg", "Savior Stained Glass Tee"],
  ["product-5.jpg", "essentiel-stained-glass-tee.jpg", "Essentiel Stained Glass Tee"],
  ["product-6.jpg", "essential-stained-glass-tee.jpg", "Essential Stained Glass Tee"],
  ["product-7.jpg", "salvador-stained-glass-tee.jpg", "Salvador Stained Glass Tee"],
  ["product-8.jpg", "vital-stained-glass-tee.jpg", "Vital Stained Glass Tee"],
  ["product-9.jpg", "it-is-written-stained-glass-tee.jpg", "It Is Written Stained Glass Tee"],
  ["product-10.jpg", "cest-ecrit-stained-glass-tee.jpg", "C'est Ecrit Stained Glass Tee"],
  ["product-11.jpg", "it-is-written-stained-glass-tee-2.jpg", "It Is Written Stained Glass Tee 2"],
  ["product-12.jpg", "amour-stained-glass-tee.jpg", "Amour Stained Glass Tee"],
  ["product-13.jpg", "amor-stained-glass-tee.jpg", "Amor Stained Glass Tee"],
  ["product-14.jpg", "love-stained-glass-tee.jpg", "Love Stained Glass Tee"],
  ["product-15.jpg", "amor-stained-glass-tee-2.jpg", "Amor Stained Glass Tee 2"],
  ["product-16.jpg", "i-am-stained-glass-tee.jpg", "I Am Stained Glass Tee"],
  ["product-17.jpg", "yo-soy-stained-glass-tee.jpg", "Yo Soy Stained Glass Tee"],
  ["product-18.jpg", "him-stained-glass-tee.jpg", "Him Stained Glass Tee"],
  ["product-19.jpg", "i-am-stained-glass-tee-2.jpg", "I Am Stained Glass Tee 2"],
  ["product-20.jpg", "i-am-stained-glass-tee-3.jpg", "I Am Stained Glass Tee 3"],
  ["product-21.jpg", "je-suis-stained-glass-tee.jpg", "Je Suis Stained Glass Tee"],
  ["product-22.jpg", "je-suis-stained-glass-tee-2.jpg", "Je Suis Stained Glass Tee 2"],
  ["product-23.jpg", "savior-stained-glass-tee-2.jpg", "Savior Stained Glass Tee 2"],
  ["product-24.jpg", "croire-stained-glass-tee.jpg", "Croire Stained Glass Tee"],
  ["product-25.jpg", "croire-stained-glass-tee-2.jpg", "Croire Stained Glass Tee 2"],
  ["product-26.jpg", "believe-stained-glass-tee.jpg", "Believe Stained Glass Tee"],
  ["product-27.jpg", "croire-stained-glass-tee-3.jpg", "Croire Stained Glass Tee 3"],
  ["product-28.jpg", "creer-stained-glass-tee.jpg", "Creer Stained Glass Tee"],
  ["product-29.jpg", "creer-stained-glass-tee-2.jpg", "Creer Stained Glass Tee 2"]
];

const productsDir = path.join(__dirname, '..', 'public', 'products');
const utilsProductsFile = path.join(__dirname, '..', 'utils', 'products.ts');

// 1. Rename files
for (const [oldName, newName, _] of mappings) {
  const oldPath = path.join(productsDir, oldName);
  const newPath = path.join(productsDir, newName);
  
  if (fs.existsSync(oldPath)) {
    console.log(`Renaming ${oldName} to ${newName}`);
    fs.renameSync(oldPath, newPath);
  } else if (fs.existsSync(newPath)) {
    console.log(`${newName} already exists, skipping rename of ${oldName}`);
  } else {
    console.log(`Warning: ${oldName} not found and ${newName} not found.`);
  }
}

// 2. Update utils/products.ts
let content = fs.readFileSync(utilsProductsFile, 'utf8');

for (const [oldName, newName, title] of mappings) {
  // Replace the image url
  content = content.replace(
    new RegExp(`/products/${oldName.replace('.', '\\.')}`, 'g'),
    `/products/${newName}`
  );
  
  // Replace the placeholder title if we can match it.
  // The placeholder titles in products.ts are like "Product 1", "Product 2", etc.
  const idStr = oldName.replace('product-', '').replace('.jpg', '');
  content = content.replace(
    new RegExp(`title: "Product ${idStr}"`, 'g'),
    `title: "${title}"`
  );
}

fs.writeFileSync(utilsProductsFile, content, 'utf8');
console.log('Finished processing.');
