import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

const payloadSecret = process.env.PAYLOAD_SECRET;

if (!payloadSecret) {
	throw new Error("PAYLOAD_SECRET environment variable is not set.");
}

export default buildConfig({
	// If you'd like to use Rich Text, pass your editor here
	editor: lexicalEditor(),

	// Define and configure your collections in this array
	collections: [],

	// Your Payload secret - should be a complex and secure string, unguessable
	secret: payloadSecret,

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
