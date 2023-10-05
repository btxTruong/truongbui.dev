const dev = process.env.NODE_ENV === 'development';

const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

/** @type {import('@11ty/eleventy').UserConfig} */
module.exports = function(eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(EleventyVitePlugin);
	eleventyConfig.addPlugin(syntaxHighlight);

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
