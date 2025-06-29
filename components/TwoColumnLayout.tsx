import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
	sidebar: ReactNode;
}

export function TwoColumnLayout({ children, sidebar }: Props) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div className="md:col-span-2">{children}</div>
			<aside>{sidebar}</aside>
		</div>
	);
}
