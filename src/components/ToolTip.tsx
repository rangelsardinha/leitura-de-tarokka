import { useLayoutEffect, useRef, useState, ReactNode } from 'react';

type TooltipProps = {
	children: ReactNode;
	content: ReactNode;
	delay?: number;
	mobileDelay?: number;
	offsetX?: number;
	offsetY?: number;
	edgeBuffer?: number;
	className?: string;
};

export default function Tooltip({
	children,
	content,
	delay = 250,
	mobileDelay = 250,
	offsetX = 20,
	offsetY = 20,
	edgeBuffer = 10,
	className,
}: TooltipProps) {
	const ttRef = useRef<HTMLDivElement | null>(null);
	const anchorRef = useRef<HTMLDivElement | null>(null);
	const [show, setShow] = useState(false);
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const delayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
	const longPressTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleMouseEnter = () => {
		delayTimeout.current = setTimeout(() => setShow(true), delay);
	};

	const handleMouseLeave = () => {
		if (delayTimeout.current) clearTimeout(delayTimeout.current);
		setShow(false);
	};

	const positionTooltip = () => {
		const anchor = anchorRef.current;
		const tooltip = ttRef.current;
		if (!anchor || !tooltip) return;

		const anchorRect = anchor.getBoundingClientRect();
		const tooltipWidth = tooltip.offsetWidth;
		const tooltipHeight = tooltip.offsetHeight;
		const minX = edgeBuffer + tooltipWidth / 2;
		const maxX = window.innerWidth - edgeBuffer - tooltipWidth / 2;
		const x = Math.max(minX, Math.min(anchorRect.left + anchorRect.width / 2, maxX));

		// Keep the tooltip above the card. The top edge is clamped only when the
		// card is too close to the top of the viewport to fit the full tooltip.
		const y = Math.max(edgeBuffer, anchorRect.top - tooltipHeight - offsetY);
		setPos({ x, y });
	};

	useLayoutEffect(() => {
		if (!show) return;
		positionTooltip();

		window.addEventListener('resize', positionTooltip);
		window.addEventListener('scroll', positionTooltip, true);
		return () => {
			window.removeEventListener('resize', positionTooltip);
			window.removeEventListener('scroll', positionTooltip, true);
		};
	}, [show, content]);

	const handleTouchStart = () => {
		longPressTimeout.current = setTimeout(() => setShow(true), mobileDelay);
	};

	const handleTouchEnd = () => {
		if (longPressTimeout.current) clearTimeout(longPressTimeout.current);
		setShow(false);
	};

	return (
		<>
			<div
				ref={anchorRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				className={className}
			>
				{children}
			</div>
			<div
				ref={ttRef}
				className={`fixed pointer-events-none z-[100] w-max max-w-[min(35vh,calc(100vw-20px))] max-h-[calc(100vh-20px)] overflow-y-auto rounded-lg border border-amber-400 bg-slate-900 px-3 py-2 text-xs text-slate-100 shadow-[0_4px_18px_rgba(0,0,0,0.65)] transition-opacity duration-250 ${content && show ? 'opacity-100' : 'opacity-0'}`}
				style={{
					top: `${pos.y}px`,
					left: `${pos.x}px`,
					transform: 'translateX(-50%)',
				}}
			>
				{content}
			</div>
		</>
	);
}
