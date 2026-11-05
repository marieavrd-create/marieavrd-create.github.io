import { defineConfig } from 'astro/config';
import csp from './integrations/csp.mjs';

// Domaine acheté chez OVH, branché sur GitHub Pages (Settings › Pages › Custom domain)
export default defineConfig({
  site: 'https://marieangeviard.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [csp()],
});
