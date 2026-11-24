import { defineConfig } from 'astro/config';
import { site } from './src/site.config.ts';

export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
