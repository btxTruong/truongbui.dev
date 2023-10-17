module.exports = {
	permalink: (pagination) => {
		return `/tags/${pagination.tag}/index.html`
	},
	eleventyComputed: {
		title: (data) => {
			return `Posts tagged ${data.tag}`;
		}
	},
	layout: 'layouts/base.webc',
	pagination: {
		data: 'collections',
		size: 1,
		alias: 'tag',
		filter: ['posts', 'all'],
		addAllPagesToCollections: true
	}
}
