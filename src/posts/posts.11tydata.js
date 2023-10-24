module.exports = {
	tags: ['posts'],
	permalink: (data) => {
		return `/blog/${data.page.fileSlug}/index.html`
	},
	layout: 'layouts/post-detail.webc'
}
