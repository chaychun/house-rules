import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { visit } from 'unist-util-visit';

// Turn ```mermaid fences into <pre class="mermaid"> before Shiki touches them,
// so mermaid.js renders them client-side. Keeps zero extra build deps.
function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.lang === 'mermaid') {
        node.type = 'html';
        node.value = `<pre class="mermaid">${node.value
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')}</pre>`;
      }
    });
  };
}

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: [rehypeKatex],
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});
