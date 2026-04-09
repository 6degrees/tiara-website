const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..');
const dist = path.resolve(__dirname, '..', 'dist');

function copyDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy fonts and images
copyDir(path.join(src, 'fonts'), path.join(dist, 'fonts'));
copyDir(path.join(src, 'images'), path.join(dist, 'images'));

// Copy root static files
['robots.txt', 'sitemap.xml'].forEach((file) => {
  const filePath = path.join(src, file);
  if (fs.existsSync(filePath)) {
    fs.copyFileSync(filePath, path.join(dist, file));
  }
});

console.log('Assets copied to dist/');
