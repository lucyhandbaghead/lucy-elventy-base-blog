module.exports = {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	permalink: "/{{ title | slugify }}/",
	date: "Last Modified"
};
