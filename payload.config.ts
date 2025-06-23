import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

const payloadSecret = process.env.PAYLOAD_SECRET;

if (!payloadSecret) {
	throw new Error("PAYLOAD_SECRET environment variable is not set.");
}

const tursoDatabaseUrl = process.env.TURSO_DATABASE_URL;

if (!tursoDatabaseUrl) {
	throw new Error("TURSO_DATABASE_URL environment variable is not set.");
}

const tursoAuthToken = process.env.TURSO_AUTH_TOKEN;

if (!tursoAuthToken) {
	throw new Error("TURSO_AUTH_TOKEN environment variable is not set.");
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
			url: tursoDatabaseUrl,
			authToken: tursoAuthToken,
		},
	}),

	// If you want to resize images, crop, set focal point, etc.
	// make sure to install it and pass it to the config.
	// This is optional - if you don't need to do these things,
	// you don't need it!
	sharp,
});
