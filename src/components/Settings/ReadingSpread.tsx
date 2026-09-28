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
			<span className="text-xs ml-1 mb-1 font-semibold text-amber-300">Tipo de tiragem:</span>
			<select
				value={settings.readingSpread}
				onChange={(event) =>
					emitSettings({ readingSpread: event.target.value as ReadingSpreadValue })
				}
				className="h-10 min-h-10 w-full rounded-md border border-amber-400 bg-slate-900 px-3 py-2 text-sm font-semibold leading-5 text-slate-100 transition hover:border-amber-200 hover:bg-slate-800 hover:text-white focus:border-amber-200 focus:outline-none"
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
