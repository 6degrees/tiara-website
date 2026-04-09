const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');

const src = path.resolve(__dirname, '..');
const dist = path.resolve(__dirname, '..', 'dist');

const htmlFiles = fs.readdirSync(src).filter((f) => f.endsWith('.html'));

const cssReplacement = '<link href="css/tiara.min.css" rel="stylesheet" type="text/css">';
const jsReplacement =
  '<script src="js/tiara.bundle.min.js" defer></script>' +
  '<script src="js/webflow.min.js" defer></script>';

async function buildHTML() {
  for (const file of htmlFiles) {
    let html = fs.readFileSync(path.join(src, file), 'utf-8');

    // Replace CSS references with single bundled file
    // Remove individual CSS link tags and insert bundled one
    html = html.replace(
      /<link href="css\/normalize\.css"[^>]*>\s*/g,
      cssReplacement + '\n'
    );
    html = html.replace(/<link href="css\/webflow\.css"[^>]*>\s*/g, '');
    html = html.replace(/<link href="css\/tiara-a06d9a\.webflow\.css"[^>]*>\s*/g, '');

    // Replace JS references with single bundled file
    // Remove individual script tags and insert bundled ones
    html = html.replace(/<script src="js\/translations\.js"[^>]*><\/script>\s*/g, '');
    html = html.replace(
      /<script src="js\/language-switcher\.js"[^>]*><\/script>\s*/g,
      ''
    );
    html = html.replace(
      /<script src="js\/products-carousel\.js"[^>]*><\/script>\s*/g,
      ''
    );
    html = html.replace(
      /<script src="js\/webflow\.js"[^>]*><\/script>/,
      jsReplacement
    );

    // Minify HTML
    const minified = await minify(html, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    });

    fs.writeFileSync(path.join(dist, file), minified);
    console.log(`Built: ${file}`);
  }
}

buildHTML().catch(console.error);
