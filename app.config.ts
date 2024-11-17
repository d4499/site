import { defineConfig } from "@solidjs/start/config";
import rehypeShiki from "@shikijs/rehype";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;
export default defineConfig({
	extensions: ["mdx", "md"],
	vite: {
		plugins: [
			mdx.withImports({})({
				jsx: true,
				jsxImportSource: "solid-js",
				providerImportSource: "solid-mdx",
				remarkPlugins: [],
				rehypePlugins: [
					[
						rehypeShiki,
						{
							theme: "catppuccin-mocha",
						},
					],
				],
			}),
		],
	},
});
