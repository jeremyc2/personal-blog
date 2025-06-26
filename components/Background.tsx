"use client";

import { useEffect, useState } from "react";

interface Point {
	x: number;
	y: number;
	size: number;
	opacity: number;
	speedX: number;
	speedY: number;
}

export function Background() {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const [points, setPoints] = useState<Point[]>([]);

	useEffect(() => {
		const updateDimensions = () => {
			setDimensions({
				width: window.innerWidth,
				height: document.body.scrollHeight,
			});
		};

		updateDimensions();
		window.addEventListener("resize", updateDimensions);
		window.addEventListener("scroll", updateDimensions);

		// Generate initial points
		const initialPoints = Array.from({ length: 60 }, () => ({
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 4 + 1,
			opacity: Math.random() * 0.15 + 0.1,
			speedX: (Math.random() - 0.9) * 0.01,
			speedY: (Math.random() - 0.9) * 0.01,
		}));
		setPoints(initialPoints);

		return () => {
			window.removeEventListener("resize", updateDimensions);
			window.removeEventListener("scroll", updateDimensions);
		};
	}, []);

	// Animate points
	useEffect(() => {
		if (points.length === 0) return;

		const animate = () => {
			setPoints((prevPoints) =>
				prevPoints.map((point) => {
					let newX = point.x + point.speedX;
					let newY = point.y + point.speedY;
					let newSpeedX = point.speedX;
					let newSpeedY = point.speedY;

					if (newX < 0 || newX > 100) {
						newSpeedX = -newSpeedX;
						newX = newX < 0 ? 0 : 100;
					}

					if (newY < 0 || newY > 100) {
						newSpeedY = -newSpeedY;
						newY = newY < 0 ? 0 : 100;
					}

					return {
						...point,
						x: newX,
						y: newY,
						speedX: newSpeedX,
						speedY: newSpeedY,
					};
				}),
			);

			animationFrameId = requestAnimationFrame(animate);
		};

		let animationFrameId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrameId);
	}, [points.length]);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden opacity-30 dark:opacity-20 transition-opacity">
			<svg
				className="w-full h-full"
				width={dimensions.width}
				height={dimensions.height}
				viewBox={`0 0 100 100`}
				preserveAspectRatio="none"
			>
				<title>Background Animation</title>
				<defs>
					{/** biome-ignore lint/nursery/useUniqueElementIds: Need an known ID so I can reference it */}
					<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#00f" />
						<stop offset="100%" stopColor="#0ff" />
					</linearGradient>
				</defs>

				{points.map((point, i) => (
					<circle
						// biome-ignore lint/suspicious/noArrayIndexKey: Since we're generating a random svg, an index key is fine
						key={i}
						cx={`${point.x}%`}
						cy={`${point.y}%`}
						r={point.size}
						fill="url(#gradient)"
						opacity={point.opacity}
						className="transition-transform duration-1000 ease-in-out"
					/>
				))}
			</svg>
		</div>
	);
}
