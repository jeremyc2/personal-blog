import type { CollectionConfig } from "payload";

const BlogPosts: CollectionConfig = {
	slug: "blog-posts",
	labels: {
		singular: "Blog Post",
		plural: "Blog Posts",
	},
	admin: {
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "excerpt",
			type: "textarea",
		},
		{
			name: "content",
			type: "richText",
			required: true,
		},
	],
};

export default BlogPosts;
