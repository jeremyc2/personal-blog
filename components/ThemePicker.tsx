"use client";

import { useMounted } from "@mantine/hooks";
import { MonitorSmartphone, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemePicker() {
	const mounted = useMounted();
	const { setTheme, theme } = useTheme();

	return (
		<div className="flex items-center bg-card rounded-full p-0.5 gap-0.5">
			<Button
				variant="secondary"
				size="icon"
				className={cn(
					"h-7 w-7 rounded-full bg-card shadow-none hover:shadow-sm hover:bg-background",
					mounted && theme === "light" && "bg-background shadow-sm",
				)}
				onClick={() => setTheme("light")}
			>
				<Sun
					className={cn(
						"h-[1.2rem] w-[1.2rem]",
						mounted && theme === "light"
							? "text-primary"
							: "text-muted-foreground/80",
					)}
				/>
				<span className="sr-only">Light theme</span>
			</Button>

			<Button
				variant="secondary"
				size="icon"
				className={cn(
					"h-7 w-7 rounded-full bg-card shadow-none hover:shadow-sm hover:bg-background",
					mounted && theme === "system" && "bg-background shadow-sm",
				)}
				onClick={() => setTheme("system")}
			>
				<MonitorSmartphone
					className={cn(
						"h-[1.2rem] w-[1.2rem]",
						mounted && theme === "system"
							? "text-primary"
							: "text-muted-foreground/80",
					)}
				/>
				<span className="sr-only">System theme</span>
			</Button>

			<Button
				variant="secondary"
				size="icon"
				className={cn(
					"h-7 w-7 rounded-full bg-card shadow-none hover:shadow-sm hover:bg-background",
					mounted && theme === "dark" && "bg-background shadow-sm",
				)}
				onClick={() => setTheme("dark")}
			>
				<Moon
					className={cn(
						"h-[1.2rem] w-[1.2rem]",
						mounted && theme === "dark"
							? "text-primary"
							: "text-muted-foreground/80",
					)}
				/>
				<span className="sr-only">Dark theme</span>
			</Button>
		</div>
	);
}
