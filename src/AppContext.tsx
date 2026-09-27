import { createContext, useContext, useEffect, useRef, useState } from 'react';

import {
	flipCard,
	getGameState,
	onGameStateChange,
	redrawCard,
	selectCard,
	startReading as startReadingAction,
	updateSettings,
} from '@/foundry/state';
import { saveReadingToJournal } from '@/foundry/journal';
import {
	emitShowCardImage,
	emitTilt,
	emitTiltClear,
	onRemoteTilt,
	onRemoteTiltClear,
	onShowCardImage,
} from '@/foundry/socket';
import { reduceTilts } from '@/tools';

import { GAME_START, LOCAL_DEFAULTS } from '@/constants';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { GameState, LocalSettings, Settings, Tilt } from '@/types';

const AppContext = createContext<AppContext | undefined>(undefined);

export interface AppContext {
	gameData: GameState;
	isGM: boolean;
	selectCardIndex: number;
	settings: Settings;
	tilts: Tilt[];
	showCardImageIndex: number | null;
	emitFlip: (cardIndex: number) => void;
	emitShowCardImage: (cardIndex: number) => void;
	emitSaveReading: () => void;
	emitSettings: (settings: Partial<Settings>) => void;
	emitRedraw: (cardIndex: number) => void;
	emitSelect: (cardID: string) => void;
	emitStartReading: () => void;
	setLocalSettings: Dispatch<SetStateAction<LocalSettings>>;
	setShowCardImageIndex: Dispatch<SetStateAction<number | null>>;
	setSelectCardIndex: (cardIndex: number) => void;
	setLocalTilt: (tilt: Tilt[]) => void;
}

const emptyTilts = (cardCount = 0): Tilt[][] => Array.from({ length: cardCount }, () => []);

export function AppProvider({ children }: { children: ReactNode }) {
	const [gameData, setGameData] = useState<GameState>({ ...GAME_START });
	const [localSettings, setLocalSettings] = useState<LocalSettings>(() => ({ ...LOCAL_DEFAULTS }));
	const [selectCardIndex, setSelectCardIndex] = useState(-1);
	const [showCardImageIndex, setShowCardImageIndex] = useState<number | null>(null);
	const [localTilt, setLocalTilt] = useState<Tilt[]>([]);
	const [remoteTilts, setRemoteTilts] = useState<Tilt[][]>(() => emptyTilts());
	const remoteTiltsByUser = useRef<Map<string, { cardIndex: number; tilt: Tilt }>>(new Map());

	// Persisted game state: Foundry replicates world-setting changes to every
	// connected client automatically, so this just mirrors that into React state.
	useEffect(() => {
		setGameData(getGameState());

		return onGameStateChange(setGameData);
	}, []);

	useEffect(() => {
		setLocalTilt([]);
		setRemoteTilts(emptyTilts(gameData.cards.length));
		remoteTiltsByUser.current.clear();
		setSelectCardIndex(-1);
		setShowCardImageIndex(null);
	}, [gameData.cards.length]);

	// Ephemeral tilt state broadcast by other connected users.
	useEffect(() => {
		const recompute = () => {
			const next = emptyTilts(gameData.cards.length);

			remoteTiltsByUser.current.forEach(({ cardIndex, tilt }, userId) => {
				if (!next[cardIndex]) return;
				next[cardIndex] = [...next[cardIndex], { ...tilt, playerID: userId }];
			});

			setRemoteTilts(next);
		};

		onRemoteTilt((userId, cardIndex, tilt) => {
			remoteTiltsByUser.current.set(userId, { cardIndex, tilt });
			recompute();
		});

		onRemoteTiltClear((userId) => {
			remoteTiltsByUser.current.delete(userId);
			recompute();
		});

		return () => {
			onRemoteTilt(null);
			onRemoteTiltClear(null);
		};
	}, [gameData.cards.length]);

	useEffect(() => {
		onShowCardImage((cardIndex) => {
			setShowCardImageIndex(cardIndex);
		});

		return () => onShowCardImage(null);
	}, []);

	// Broadcast this client's own tilt to everyone else, matching the original
	// app's "remote tilt" permission.
	useEffect(() => {
		if (!localSettings.remoteTilt) return;

		const cardIndex = localTilt.findIndex((tilt) => !!tilt);

		if (localTilt[cardIndex]) {
			emitTilt(cardIndex, localTilt[cardIndex]);
		} else {
			emitTiltClear();
		}
	}, [localTilt, localSettings]);

	const handleSelect = (cardID: string) => {
		const cardIndex = selectCardIndex;
		setSelectCardIndex(-1);

		selectCard(cardIndex, cardID).catch((err) => console.error('Leitura de Tarokka | select error:', err));
	};

	const isGM = !!game.user?.isGM;
	const settings = { ...gameData.settings, ...localSettings };

	const appInterface: AppContext = {
		gameData,
		isGM,
		selectCardIndex,
		settings,
		tilts: reduceTilts(remoteTilts, localTilt, settings, gameData.cards.length),
		showCardImageIndex,
		emitFlip: (cardIndex) => {
			flipCard(cardIndex).catch((err) => console.error('Leitura de Tarokka | flip error:', err));
		},
		emitShowCardImage: (cardIndex) => {
			setShowCardImageIndex(cardIndex);
			emitShowCardImage(cardIndex);
		},
		emitSaveReading: () => {
			saveReadingToJournal(gameData, settings).catch((err) => {
				console.error('Leitura de Tarokka | save journal error:', err);
				ui.notifications?.error?.('Não foi possível salvar a leitura no Diário.');
			});
		},
		emitSettings: (settings) => {
			updateSettings(settings).catch((err) => console.error('Leitura de Tarokka | settings error:', err));
		},
		emitRedraw: (cardIndex) => {
			redrawCard(cardIndex).catch((err) => console.error('Leitura de Tarokka | redraw error:', err));
		},
		emitSelect: handleSelect,
		emitStartReading: () => {
			startReadingAction().catch((err) => console.error('Leitura de Tarokka | start reading error:', err));
		},
		setLocalSettings,
		setShowCardImageIndex,
		setSelectCardIndex,
		setLocalTilt,
	};

	return <AppContext.Provider value={appInterface}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContext {
	const context = useContext(AppContext);
	if (!context) throw new Error('useAppContext must be used within AppProvider');
	return context;
}
