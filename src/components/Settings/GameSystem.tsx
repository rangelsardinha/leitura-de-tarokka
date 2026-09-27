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
			<span className="text-xs ml-1 mb-1">Sistema:</span>
			<select
				value={settings.gameSystem}
				onChange={handleChange}
				className="w-full rounded-md border border-yellow-500 bg-slate-800 px-3 py-2 text-xs font-medium text-yellow-400 transition hover:bg-slate-700 hover:text-yellow-300"
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
