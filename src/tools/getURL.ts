import { cardStyles, standardMap } from '@/constants/tarokka';
import { Settings, TarokkaCard, TarokkaGameCard } from '@/types';

export const getURL = (card: TarokkaCard | TarokkaGameCard, settings: Settings) => {
	if (settings.gameSystem === 'old-dragon-2') {
		return `modules/leitura-de-tarokka/assets/img/od2-webp/${card.id}.webp`;
	}

	if (settings.gameSystem === 'dnd35') {
		return `modules/leitura-de-tarokka/assets/img/dnd35-webp/${card.id}.webp`;
	}

	const styleConfig = cardStyles[settings.cardStyle];
	const fileBase =
		settings.cardStyle === 'standard'
			? (standardMap as Record<string, string>)[card.id]
			: card.id;
	return `${styleConfig.baseURL}${fileBase}${card.extension || styleConfig.extension}`;
};
