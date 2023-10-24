module.exports = function (data) {
	const tags = {};
	for (const bookmark of data.bookmarks) {
		for (const tag of bookmark.tags) {
			if (!Reflect.has(tags, tag)) {
				tags[tag] = [bookmark];
			} else {
				tags[tag].push(bookmark);
			}
		}
	}
	return tags;
}
