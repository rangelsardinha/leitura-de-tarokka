export * from '@/constants/tarokka';
export * from '@/constants/tarokkaCards';
export * from '@/constants/time';

import type { GameState, LocalSettings, Settings } from '@/types';

export const GAME_SYSTEMS = [
	{ value: 'dnd5e', label: 'D&D 5e e 5.5' },
	{ value: 'adnd12', label: 'AD&D 1e e 2e' },
	{ value: 'dnd35', label: 'D&D 3.5' },
	{ value: 'old-dragon-2', label: 'Old Dragon 2' },
] as const;

export const SETTINGS: Settings = {
	gameSystem: 'dnd5e',
	readingSpread: 'simple-cross',
	cardStyle: 'color',
	notes: true,
	positionBack: true,
	positionFront: true,
	prophecy: true,
	tilt: true,
	remoteTilt: true,
};

export const GAME_START: GameState = {
	started: false,
	cards: [],
	lastUpdated: 0,
	settings: SETTINGS,
};

export const LOCAL_DEFAULTS: LocalSettings = {
	tilt: true,
	remoteTilt: true,
};

export const LOCAL_SETTINGS = ['tilt', 'remoteTilt'];

// boolean settings a non-GM player is allowed to toggle (locally, for their own client)
export const PLAYER_SETTINGS = ['tilt', 'remoteTilt'];
