const dev = process.env.NODE_ENV === 'development';

const vitePlugin = require('@11ty/eleventy-plugin-vite');
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const svgSpritePlugin = require("eleventy-plugin-svg-sprite");
// https://11tywebcfun.netlify.app/
const webcPlugin = require('@11ty/eleventy-plugin-webc');
const {JSDOM} = require('jsdom');
const _ = require('lodash');

const bookmarks = require('./data/bookmarks');

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
	eleventyConfig.addFilter('sortByDate', function (data, field, type) {
		if (!Array.isArray(data)) return [];
		type = type || 'desc';
		return [...data].sort((a, b) => {
			if (type === 'asc') {
				return new Date(_.get(a, field) - new Date(_.get(b, field)));
			} else {
				return new Date(_.get(b, field) - new Date(_.get(a, field)));
			}
		})
	});

	// JavaScript Template Function
	eleventyConfig.addJavaScriptFunction('parseContentToc', (content) => {
		const dom = new JSDOM(content);
		const res = []
		const headings = [...dom.window.document.querySelectorAll('h2, h3')];

		for (const item of headings) {
			const heading = {
				text: item.textContent.trim().replace(/(<([^>]+)>)/gi, ""),
				slug: `#${item.id}`,
				children: []
			};
			if (item.tagName === 'H2') {
				res.push(heading);
			} else {
				res[res.length - 1].children.push(heading);
			}
		}
		return res;
	});
	eleventyConfig.addJavaScriptFunction('addTagComponentInBookmarks', (listBookmarks) => {
		return listBookmarks.map((bookmark) => {
			return {
				...bookmark,
				tags: bookmark.tags.map((tag) => {
					return `<system-tag tag="${tag}" url="/bookmarks/tags/${tag}/" ></system-tag>`
				})
			};
		})
	});

	// Static assets
	eleventyConfig.addPassthroughCopy('./src/public');
	eleventyConfig.addPassthroughCopy('./src/assets');

	// Global data
	eleventyConfig.addGlobalData('bookmarks', bookmarks);

	return {
		dir: {
			input: 'src'
		}
	};
};
