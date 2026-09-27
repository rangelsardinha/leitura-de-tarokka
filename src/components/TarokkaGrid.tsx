import { useAppContext } from '@/AppContext';
import Card from '@/components/Card';
import { getReadingSpread } from '@/constants/tarokka';

export default function TarokkaGrid() {
	const { gameData } = useAppContext();
	const { cards, settings } = gameData;
	const spread = getReadingSpread(settings.readingSpread, settings.gameSystem);

	return (
		<div
			className={`grid ${spread.gapClassName ?? 'gap-2 sm:gap-4 md:gap-6'} w-fit mx-auto`}
			style={{
				gridTemplateColumns: `repeat(${spread.columns}, minmax(0, auto))`,
				gridTemplateRows: `repeat(${spread.rows}, minmax(0, auto))`,
			}}
		>
			{spread.positions.map((position, cardIndex) => {
				const card = cards[cardIndex];

				return (
					<div
						key={position.id}
						className="aspect-[2/3]"
						style={{ gridColumn: position.x, gridRow: position.y }}
					>
						{card && (
							<Card
								card={card}
								cardIndex={cardIndex}
								height={spread.cardHeight}
								width={spread.cardWidth}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}
