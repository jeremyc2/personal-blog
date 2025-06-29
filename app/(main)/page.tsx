import { TwoColumnLayout } from "@/components/TwoColumnLayout";

export default async function Home() {
	return (
		<TwoColumnLayout
			sidebar={
				<div className="space-y-4">
					<div>
						<h2 className="text-xl font-bold mb-4">Sidebar</h2>
						<p>This is the sidebar content.</p>
					</div>
					<div>
						<h2 className="text-xl font-bold mb-4">Another Sidebar Section</h2>
						<p>More content here.</p>
					</div>
				</div>
			}
		>
			<div>
				<h1 className="text-2xl font-bold mb-4">Main Content</h1>
				<p>This is the main content area.</p>
			</div>
		</TwoColumnLayout>
	);
}
