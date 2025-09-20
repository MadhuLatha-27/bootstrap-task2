const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

// Configure Nunjucks
nunjucks.configure('src/templates', { autoescape: true });

// List of pages to generate
const pages = ['index.njk', 'about.njk', 'contact.njk'];

// Ensure dist folder exists
if (!fs.existsSync('dist')) fs.mkdirSync('dist');

pages.forEach(page => {
  const output = nunjucks.render(page);
  const outFile = path.join('dist', page.replace('.njk', '.html'));
  fs.writeFileSync(outFile, output);
  console.log(`Generated: ${outFile}`);
});
