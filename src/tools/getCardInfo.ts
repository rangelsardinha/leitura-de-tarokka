import { isHighCard, isLowCard } from '@/tools';
import tarokkaCards from '@/constants/tarokkaCards';
import { dnd35CardLabels, dnd35CardTexts } from '@/constants/dnd35Cards';
import { getOldDragon2CastleRavenloftInfo } from '@/constants/oldDragon2CastleRavenloft';
import { oldDragon2CardTexts, oldDragon2CardTitles } from '@/constants/oldDragon2Cards';
import { Layout, Settings, TarokkaGameCard } from '@/types';

export const getCardInfo = (
	card: TarokkaGameCard,
	position: Layout,
	dm: boolean,
	settings: Settings,
) => {
	const currentCard = {
		...(tarokkaCards.find(({ id }) => id === card.id) ?? card),
		flipped: card.flipped,
	} as TarokkaGameCard;
	const { card: cardName, description, flipped } = currentCard;

	let text: string[] = [];

	if (dm || flipped) {
		if (
			['adnd12', 'old-dragon-2'].includes(settings.gameSystem) &&
			settings.readingSpread === 'i6-castle-ravenloft'
		) {
			return getOldDragon2CastleRavenloftInfo(
				currentCard,
				position,
				dm,
				settings.positionFront,
				settings.prophecy,
			);
		}

		if (dm || settings.positionFront) text.push(position.text);

		if (settings.gameSystem === 'dnd35') {
			const dnd35Text = dnd35CardTexts[currentCard.id];

			if (dnd35Text) {
				if (dm) {
					const dnd35Heading = dnd35CardLabels[currentCard.id] ?? cardName;

					text.push(`${dnd35Heading}: ${dnd35Text.dmText}`);
					text.push(`Jogadores: ${dnd35Text.playerText}`);
				} else if (settings.prophecy) {
					text.push(dnd35Text.playerText);
				}
			} else if (dm) {
				text.push(`${cardName}: ${description}`);
			}

			return text;
		}

		if (settings.gameSystem === 'old-dragon-2') {
			const oldDragon2Text = oldDragon2CardTexts[currentCard.id];

			if (oldDragon2Text) {
				if (dm) {
					const oldDragon2Title = oldDragon2CardTitles[currentCard.id];
					const oldDragon2Heading = oldDragon2Title
						? isHighCard(currentCard)
							? `Arcano Maior: ${oldDragon2Title}`
							: `${cardName}: ${oldDragon2Title}`
						: cardName;

					text.push(`${oldDragon2Heading}: ${oldDragon2Text.dmText}`);
					text.push(`Jogadores: ${oldDragon2Text.playerText}`);
				} else if (settings.prophecy) {
					text.push(oldDragon2Text.playerText);
				}
			} else if (dm) {
				text.push(`${cardName}: ${description}`);
			}

			return text;
		}

		if (dm) text.push(`${cardName}: ${description}`);

		if (isHighCard(currentCard)) {
			// High deck ally
			if (position.id === 'ally') {
				if (dm || settings.prophecy) text.push(currentCard.prophecy.allies[0].playerText);
				if (dm) text.push(currentCard.prophecy.allies[0].dmText);
				if (dm) text.push(`Aliado: ${currentCard.prophecy.allies[0].ally}`);
			}

			// High deck Strahd
			if (position.id === 'strahd') {
				if (dm || settings.prophecy) text.push(currentCard.prophecy.strahd.playerText);
				if (dm) text.push(currentCard.prophecy.strahd.dmText);
			}
		}

		// Low deck: Tome, Ravenkind, or Sunsword
		if (isLowCard(currentCard) && ['tome', 'ravenkind', 'sunsword'].includes(position.id)) {
			if (dm || settings.prophecy) text.push(currentCard.prophecy.playerText);
			if (dm) text.push(currentCard.prophecy.dmText);
		}
	}

	return text;
};
