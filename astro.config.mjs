// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
	},

  adapter: netlify(),

  env: {
    schema: {
      TURSO_DATABASE_URL: envField.string({ context: 'server', access: 'secret' }),
      TURSO_AUTH_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true, default: '' }),
    },
  }
});
