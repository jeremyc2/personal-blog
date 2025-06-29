import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/Background";
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
	title: "Jeremy Chandler",
	description: "Where do we begin? Frontend development with Jeremy Chandler.",
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
			>
				<Background />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<header className="py-4">
						<div className="max-w-6xl m-auto px-6">
							<h1 className="text-xl font-bold">Jeremy Chandler</h1>
						</div>
					</header>
					<main className="flex-1">
						<div className="max-w-6xl m-auto px-6 py-4">{children}</div>
					</main>
					<footer className="py-4 border-t">
						<div className="max-w-6xl m-auto px-6 flex justify-between items-center">
							<p className="text-sm text-muted-foreground">
								© {new Date().getFullYear()} Jeremy Chandler
							</p>
							<ThemePicker />
						</div>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
