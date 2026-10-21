import { defineConfig } from 'astro/config';

// Domaine acheté chez OVH, branché sur GitHub Pages (Settings › Pages › Custom domain)
export default defineConfig({
  site: 'https://marieangeviard.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
