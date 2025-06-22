import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemePicker } from "@/components/ThemePicker";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Personal Blog",
	description: "A personal blog built with Next.js and Payload CMS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* https://fav.farm/ */}
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 16 16'><text x='0' y='14'>👨‍💻</text></svg>"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<header className="flex items-center justify-between px-6 py-4 bg-card shadow">
						<h1 className="text-xl font-bold">Personal Blog</h1>
						<ThemePicker />
					</header>
					<main className="max-w-2xl m-auto p-4">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
