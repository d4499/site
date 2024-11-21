import { defineConfig } from "@solidjs/start/config";
import rehypeShiki from "@shikijs/rehype";
import remarkFrontmatter from "remark-frontmatter";
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
				remarkPlugins: [remarkFrontmatter],
				rehypePlugins: [
					[
						rehypeShiki,
						{
							theme: "rose-pine",
						},
					],
				],
			}),
		],
	},
});
