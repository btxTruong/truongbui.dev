const dev = process.env.NODE_ENV === 'development';

const vitePlugin = require('@11ty/eleventy-plugin-vite');
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const webcPlugin = require('@11ty/eleventy-plugin-webc');

/** @type {import('@11ty/eleventy').UserConfig} */
module.exports = function(eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(vitePlugin);
	eleventyConfig.addPlugin(syntaxHighlightPlugin);
	eleventyConfig.addPlugin(webcPlugin, {
		components: 'src/_includes/components/**/*.webc'
	});

	// Static assets
	eleventyConfig.addPassthroughCopy('./src/public');
	eleventyConfig.addPassthroughCopy('./src/assets');

	// Server options
	eleventyConfig.setServerOptions({
		port: 9090
	});

	return {
		dir: {
			input: 'src'
		}
	};
};
