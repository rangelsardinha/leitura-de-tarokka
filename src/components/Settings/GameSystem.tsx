import { useAppContext } from '@/AppContext';
import { GAME_SYSTEMS } from '@/constants';
import type { GameSystem as GameSystemValue } from '@/types';

const castleRavenloftSystems: GameSystemValue[] = ['adnd12', 'old-dragon-2'];

export default function GameSystem({ className }: { className?: string }) {
	const { isGM, settings, emitSettings } = useAppContext();

	if (!isGM) return null;

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const gameSystem = event.target.value as GameSystemValue;

		emitSettings({
			gameSystem,
			...(settings.readingSpread === 'i6-castle-ravenloft' &&
			!castleRavenloftSystems.includes(gameSystem)
				? { readingSpread: 'simple-cross' as const }
				: {}),
		});
	};

	return (
		<label className={`flex flex-col w-full ${className}`}>
			<span className="text-xs ml-1 mb-1 font-semibold text-amber-300">Sistema:</span>
			<select
				value={settings.gameSystem}
				onChange={handleChange}
				style={{ colorScheme: 'light' }}
				className="h-10 min-h-10 w-full rounded-md border border-amber-400 bg-slate-900 px-3 py-2 text-sm font-semibold leading-5 text-slate-100 transition hover:border-amber-200 hover:bg-slate-800 hover:text-white focus:border-amber-200 focus:outline-none"
			>
				{GAME_SYSTEMS.map(({ value, label }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
		</label>
	);
}
