const dev = process.env.NODE_ENV === 'development';

const vitePlugin = require('@11ty/eleventy-plugin-vite');
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const svgSpritePlugin = require("eleventy-plugin-svg-sprite");
// https://11tywebcfun.netlify.app/
const webcPlugin = require('@11ty/eleventy-plugin-webc');

/** @type {import('@11ty/eleventy').UserConfig} */
module.exports = function(eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(vitePlugin);
	eleventyConfig.addPlugin(syntaxHighlightPlugin);
	eleventyConfig.addPlugin(webcPlugin, {
		components: 'src/_includes/components/**/*.webc'
	});
	eleventyConfig.addPlugin(svgSpritePlugin, {
		path: './src/assets/svg',
		outputFilepath: "./_site/sprites/icons.svg",
		globalClasses: "svgicon",
		defaultClasses: "default-class",
	})

	// Static assets
	eleventyConfig.addPassthroughCopy('./src/public');
	eleventyConfig.addPassthroughCopy('./src/assets');

	return {
		dir: {
			input: 'src'
		}
	};
};
