// Ajoute une Content-Security-Policy (balise meta) à chaque page après la construction.
// GitHub Pages ne permet pas d'envoyer d'en-têtes HTTP : la balise meta est la seule voie.
// Les petits scripts qu'Astro écrit directement dans la page sont autorisés par leur empreinte (sha256),
// tout autre script, y compris injecté par un tiers, est bloqué.
import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function* pages(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* pages(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

export default function csp() {
  return {
    name: 'csp',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        let n = 0;
        for await (const fichier of pages(fileURLToPath(dir))) {
          let html = await readFile(fichier, 'utf8');
          const empreintes = new Set();
          for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
            if (m[1].trim()) empreintes.add(`'sha256-${createHash('sha256').update(m[1]).digest('base64')}'`);
          }
          const politique = [
            "default-src 'self'",
            `script-src 'self' ${[...empreintes].join(' ')}`.trim(),
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob:",
            "font-src 'self'",
            "media-src 'self'",
            "connect-src 'self'",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            'upgrade-insecure-requests',
          ].join('; ');
          html = html.replace('<meta charset="utf-8">', `<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${politique}">`);
          await writeFile(fichier, html);
          n++;
        }
        logger.info(`CSP ajoutée à ${n} pages`);
      },
    },
  };
}
