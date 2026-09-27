import { useState } from 'react';
import { Eye } from 'lucide-react';
import { useAppContext } from '@/AppContext';
import TiltCard from '@/components/TiltCard';
import ToolTip from '@/components/ToolTip';
import StackTheDeck from '@/components/StackTheDeck';
import Sheen from '@/components/Sheen';
import { getCardInfo, getURL } from '@/tools';

import tarokkaCards from '@/constants/tarokkaCards';
import { getReadingSpread } from '@/constants/tarokka';

import { TarokkaGameCard } from '@/types';

const cardBack = tarokkaCards.find((card) => card.back)!;

type CardProps = {
	card: TarokkaGameCard;
	cardIndex: number;
	height?: string;
	width?: string;
};

export default function Card({ card, cardIndex, height = '21vh', width = '15vh' }: CardProps) {
	const [tooltip, setTooltip] = useState<React.ReactNode>(null);
	const { emitFlip, emitShowCardImage, isGM, settings, emitRedraw, setSelectCardIndex } =
		useAppContext();

	const { aria, flipped } = card;
	const position = getReadingSpread(settings.readingSpread, settings.gameSystem).positions[cardIndex];
	const positionNumber = cardIndex + 1;

	const handleClick = () => {
		if (isGM) {
			emitFlip(cardIndex);
		}
	};

	const handleShowCardImage = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		emitShowCardImage(cardIndex);
	};

	const getTooltip = () => {
		const text = getCardInfo(card, position, isGM, settings);

		return text.length ? (
			<>
				{text.map((t, i) => (
					<div key={i}>
						<p className="text-yellow-400">{t}</p>
						{i < text.length - 1 && <hr className="my-2 border-yellow-400" />}
					</div>
				))}
			</>
		) : null;
	};

	return (
		<ToolTip content={tooltip || getTooltip()}>
			<TiltCard
				className={`max-w-[30vw] relative z-0 perspective origin-center transition-transform duration-200 hover:z-[60] hover:scale-[1.5] ${isGM ? 'cursor-pointer' : ''} `}
				style={{ height, width }}
				cardIndex={cardIndex}
			>
				<div
					className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
					onClick={handleClick}
				>
					<div className="absolute inset-0 group backface-hidden">
						{isGM && (
							<>
								<img
									src={getURL(card, settings)}
									alt={aria}
									className="absolute h-full w-full object-contain rounded-lg"
								/>
								<img
									src={getURL(cardBack as TarokkaGameCard, settings)}
									alt=""
									className={`absolute h-full w-full object-contain rounded-lg see-through`}
								/>
							</>
						)}
						<img
							src={getURL(cardBack as TarokkaGameCard, settings)}
							alt="Card Back"
							className={`absolute h-full w-full object-contain rounded-lg ${isGM ? 'transition duration-500 group-hover:opacity-0' : ''} ${settings.cardStyle === 'grayscale' ? 'border border-yellow-500/25 group-hover:drop-shadow-[0_0_3px_#ffd700/50]' : ''}`}
						/>
						{isGM && !flipped && (
							<StackTheDeck
								onRedraw={() => emitRedraw(cardIndex)}
								onSelect={() => setSelectCardIndex(cardIndex)}
								onHover={setTooltip}
							/>
						)}
						<Sheen cardIndex={cardIndex} />
						{isGM && (
							<div className="absolute top-1 left-1 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-yellow-500 bg-slate-900/90 text-xs font-bold text-yellow-300 shadow">
								{positionNumber}
							</div>
						)}
						{isGM && flipped && (
							<button
								type="button"
								className="absolute right-1 bottom-1 z-30 flex h-7 w-7 items-center justify-center rounded-full border border-yellow-500 bg-slate-900/90 text-yellow-300 shadow transition-all duration-200 hover:text-yellow-400 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer"
								onClick={handleShowCardImage}
								aria-label="Exibir imagem da carta para os jogadores"
								title="Exibir imagem para todos"
							>
								<Eye className="h-4 w-4" />
							</button>
						)}
					</div>
					<div className="absolute inset-0 backface-hidden rotate-y-180">
						<img
							src={getURL(card, settings)}
							alt={aria}
							className="h-full w-full object-contain rounded-lg border border-yellow-500/25 hover:drop-shadow-[0_0_3px_#ffd700/50]"
						/>
						<Sheen cardIndex={cardIndex} />
						{isGM && (
							<div className="absolute top-1 left-1 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-yellow-500 bg-slate-900/90 text-xs font-bold text-yellow-300 shadow">
								{positionNumber}
							</div>
						)}
						{isGM && flipped && (
							<button
								type="button"
								className="absolute right-1 bottom-1 z-30 flex h-7 w-7 items-center justify-center rounded-full border border-yellow-500 bg-slate-900/90 text-yellow-300 shadow transition-all duration-200 hover:text-yellow-400 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer"
								onClick={handleShowCardImage}
								aria-label="Exibir imagem da carta para os jogadores"
								title="Exibir imagem para todos"
							>
								<Eye className="h-4 w-4" />
							</button>
						)}
					</div>
				</div>
			</TiltCard>
		</ToolTip>
	);
}
