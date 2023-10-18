const dev = process.env.NODE_ENV === 'development';

const vitePlugin = require('@11ty/eleventy-plugin-vite');
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const svgSpritePlugin = require("eleventy-plugin-svg-sprite");
// https://11tywebcfun.netlify.app/
const webcPlugin = require('@11ty/eleventy-plugin-webc');
const {JSDOM} = require('jsdom');

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

	// Filters
	eleventyConfig.addFilter('formatDate', function(dateToFormat) {
		return new Date(dateToFormat).toISOString().split('T')[0]
	});
	eleventyConfig.addFilter('sortPostsByDate', function (data, type) {
		if (!Array.isArray(data)) return [];
		type = type || 'desc';
		return [...data].sort((a, b) => {
			if (type === 'asc') {
				return new Date(a.date) - new Date(b.date)
			} else {
				return new Date(b.date) - new Date(a.date)
			}
		})
	});

	// JavaScript Template Function
	eleventyConfig.addJavaScriptFunction('parseContentToc', (content) => {
		const dom = new JSDOM(content);
		const headings = [...dom.window.document.querySelectorAll('h2')];
		return headings.map((heading) => {
			return {
				text: heading.textContent.trim().replace(/(<([^>]+)>)/gi, ""),
				slug: `#${heading.id}`
			};
		});
	});
	eleventyConfig.addJavaScriptFunction('randomColor', () => {
		const randomColor = Math.floor(Math.random()*16777215).toString(16);
		return `#${randomColor}`
	});

	// Static assets
	eleventyConfig.addPassthroughCopy('./src/public');
	eleventyConfig.addPassthroughCopy('./src/assets');

	return {
		dir: {
			input: 'src'
		}
	};
};
