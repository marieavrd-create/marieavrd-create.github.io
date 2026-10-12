import { defineConfig } from 'astro/config';

// Adresse gratuite GitHub Pages. Quand marieangeviard.fr sera branché,
// remplacer `site` par https://marieangeviard.fr et ajouter public/CNAME.
export default defineConfig({
  site: 'https://marieavrd-create.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
