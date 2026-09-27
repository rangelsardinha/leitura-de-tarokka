import { useAppContext } from '@/AppContext';
import { READING_SPREAD_OPTIONS } from '@/constants';
import type { GameSystem, ReadingSpread as ReadingSpreadValue } from '@/types';

const officialSpreadsBySystem: Partial<Record<GameSystem, ReadingSpreadValue[]>> = {
	dnd5e: ['simple-cross'],
	dnd35: ['simple-cross', 'tower'],
};

const castleRavenloftSystems: GameSystem[] = ['adnd12', 'old-dragon-2'];

function getSpreadLabel(label: string, value: ReadingSpreadValue, gameSystem: GameSystem) {
	const officialSpreads = officialSpreadsBySystem[gameSystem];

	if (!officialSpreads) return label;

	return `${label} (${officialSpreads.includes(value) ? 'oficial' : 'extra'})`;
}

export default function ReadingSpread({ className }: { className?: string }) {
	const { isGM, settings, emitSettings } = useAppContext();

	if (!isGM) return null;

	const spreadOptions = READING_SPREAD_OPTIONS.filter(
		({ value }) =>
			value !== 'i6-castle-ravenloft' || castleRavenloftSystems.includes(settings.gameSystem),
	);

	return (
		<label className={`flex flex-col w-full ${className}`}>
			<span className="text-xs ml-1 mb-1">Tipo de tiragem:</span>
			<select
				value={settings.readingSpread}
				onChange={(event) =>
					emitSettings({ readingSpread: event.target.value as ReadingSpreadValue })
				}
				className="w-full rounded-md border border-yellow-500 bg-slate-800 px-3 py-2 text-xs font-medium text-yellow-400 transition hover:bg-slate-700 hover:text-yellow-300"
			>
				{spreadOptions.map(({ value, label }) => (
					<option key={value} value={value}>
						{getSpreadLabel(label, value, settings.gameSystem)}
					</option>
				))}
			</select>
		</label>
	);
}
