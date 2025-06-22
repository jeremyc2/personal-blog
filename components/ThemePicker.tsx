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
		<div className="flex items-center bg-muted rounded-full p-1">
			<Button
				variant="secondary"
				size="icon"
				className={cn(
					"rounded-full hover:bg-background",
					mounted && theme === "light" && "bg-background",
				)}
				onClick={() => setTheme("light")}
			>
				<Sun
					className={cn(
						"h-[1.2rem] w-[1.2rem]",
						mounted && theme === "light"
							? "text-primary"
							: "text-muted-foreground",
					)}
				/>
				<span className="sr-only">Light theme</span>
			</Button>

			<Button
				variant="secondary"
				size="icon"
				className={cn(
					"rounded-full hover:bg-background",
					mounted && theme === "system" && "bg-background",
				)}
				onClick={() => setTheme("system")}
			>
				<MonitorSmartphone
					className={cn(
						"h-[1.2rem] w-[1.2rem]",
						mounted && theme === "system"
							? "text-primary"
							: "text-muted-foreground",
					)}
				/>
				<span className="sr-only">System theme</span>
			</Button>

			<Button
				variant="secondary"
				size="icon"
				className={cn(
					"rounded-full hover:bg-background",
					mounted && theme === "dark" && "bg-background",
				)}
				onClick={() => setTheme("dark")}
			>
				<Moon
					className={cn(
						"h-[1.2rem] w-[1.2rem]",
						mounted && theme === "dark"
							? "text-primary"
							: "text-muted-foreground",
					)}
				/>
				<span className="sr-only">Dark theme</span>
			</Button>
		</div>
	);
}
