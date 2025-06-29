export function Background() {
	return (
		<div className="fixed inset-0 -z-50">
			<div className="absolute inset-0 -z-20 bg-white dark:bg-neutral-950" />
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(209,213,219,0.6)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(39,39,42,0.5)_1px,transparent_1px)] [background-size:16px_16px]" />
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(62,132,245,0.3),transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,rgba(62,132,245,0.2),transparent)]" />
		</div>
	);
}
