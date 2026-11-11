import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import csp from './integrations/csp.mjs';

// Domaine acheté chez OVH, branché sur GitHub Pages (Settings › Pages › Custom domain)
export default defineConfig({
  site: 'https://marieangeviard.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    // Plan du site pour Google (sitemap-index.xml), sans la page /edition (envoyée par lien, non indexée)
    sitemap({ filter: (page) => !/\/(edition|404)\/?$/.test(page) }),
    csp(),
  ],
});
