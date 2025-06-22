import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

export default buildConfig({
	// If you'd like to use Rich Text, pass your editor here
	editor: lexicalEditor(),

	// Define and configure your collections in this array
	collections: [],

	// Your Payload secret - should be a complex and secure string, unguessable
	secret:
		process.env.PAYLOAD_SECRET ||
		"1e18dd7181ca4e307f025844efada6ff6db7e2fe5ac67fb1fdba539bcfda5432",

	db: sqliteAdapter({
		client: {
			url: "file:./payload.db",
		},
	}),

	// If you want to resize images, crop, set focal point, etc.
	// make sure to install it and pass it to the config.
	// This is optional - if you don't need to do these things,
	// you don't need it!
	sharp,
});
