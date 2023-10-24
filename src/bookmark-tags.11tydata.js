module.exports = {
	permalink: (pagination) => {
		return `/bookmarks/tags/${pagination.bookmarkTag}/index.html`
	},
	eleventyComputed: {
		title: (data) => {
			return `Bookmarks tagged "${data.bookmarkTag}"`;
		}
	},
	layout: 'layouts/base.webc',
	pagination: {
		data: 'bookmarksGroupByTags',
		size: 1,
		alias: 'bookmarkTag',
		addAllPagesToCollections: true
	}
}
