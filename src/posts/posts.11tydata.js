module.exports = {
	tags: ['posts'],
	permalink: (data) => {
		return `/blog/${data.page.fileSlug}/index.html`
	},
	date: 'Last Modified',
	layout: 'layouts/post-detail.webc'
}
