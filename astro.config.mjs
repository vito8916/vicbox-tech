import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.vicbox.tech/',
	integrations: [mdx(), sitemap()],
	markdown: {
		syntaxHighlight: 'prism',
	  },
});
