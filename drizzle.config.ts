import { defineConfig } from "drizzle-kit";

const url = process.env.TURSO_DATABASE_URL;

if (!url) {
	throw new Error(
		"TURSO_DATABASE_URL is not set in the environment variables.",
	);
}

const authToken = process.env.TURSO_AUTH_TOKEN;

if (!authToken) {
	throw new Error("TURSO_AUTH_TOKEN is not set in the environment variables.");
}

export default defineConfig({
	dialect: "turso",
	dbCredentials: {
		url,
		authToken,
	},
});
