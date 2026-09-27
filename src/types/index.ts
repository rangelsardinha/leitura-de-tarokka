export type CardStyle = 'standard' | 'color' | 'grayscale';
export type GameSystem = 'dnd5e' | 'adnd12' | 'dnd35' | 'old-dragon-2';
export type ReadingSpread =
	| 'simple'
	| 'simple-cross'
	| 'extended-cross'
	| 'tower'
	| 'pyramid'
	| 'i6-castle-ravenloft';

// all = both + back
export type Deck = 'high' | 'common' | 'both' | 'back' | 'all';

export interface Settings {
	gameSystem: GameSystem;
	readingSpread: ReadingSpread;
	cardStyle: CardStyle;
	notes: boolean;
	positionBack: boolean;
	positionFront: boolean;
	prophecy: boolean;
	tilt: boolean;
	remoteTilt: boolean;
}

export interface LocalSettings {
	tilt: boolean;
	remoteTilt: boolean;
}

export interface TarokkaBase {
	id: string;
	name: string;
	card: string;
	description: string;
	aria: string;
	back: boolean;
	deck: Deck;
	suit: 'Coins' | 'Glyphs' | 'High Deck' | 'Stars' | 'Swords' | null;
	extension?: string;
}

export interface TarokkaGameBase extends TarokkaBase {
	flipped: boolean;
}

export interface TarokkaHigh extends TarokkaBase {
	prophecy: {
		allies: {
			ally: string;
			dmText: string;
			playerText: string;
		}[];
		strahd: {
			dmText: string;
			playerText: string;
		};
	};
}

export interface TarokkaGameHigh extends TarokkaHigh {
	flipped: boolean;
}

export interface TarokkaLow extends TarokkaBase {
	value: number;
	prophecy: {
		dmText: string;
		location: string;
		playerText: string;
	};
}

export interface TarokkaGameLow extends TarokkaLow {
	flipped: boolean;
}

export type TarokkaCard = TarokkaBase | TarokkaHigh | TarokkaLow;

export type TarokkaGameCard = TarokkaGameBase | TarokkaGameHigh | TarokkaGameLow;

// Persisted, GM-authoritative game state (Foundry world setting "tarokka.gameState").
// There is one shared reading per world, not per DM/spectator link.
export interface GameState {
	started: boolean;
	cards: TarokkaGameCard[];
	lastUpdated: number;
	settings: Settings;
}

export interface Layout {
	id: string;
	deck: string;
	name: string;
	text: string;
	x: number;
	y: number;
}

export interface ReadingSpreadConfig {
	value: ReadingSpread;
	label: string;
	description: string;
	columns: number;
	rows: number;
	cardHeight?: string;
	cardWidth?: string;
	gapClassName?: string;
	positions: Layout[];
}

export interface Tilt {
	playerID?: string;
	percentX: number;
	percentY: number;
	rotateX: number;
	rotateY: number;
}
