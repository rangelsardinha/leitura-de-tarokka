import { Save } from 'lucide-react';
import { useAppContext } from '@/AppContext';

export default function ReadingControls({ className }: { className?: string }) {
	const { gameData, isGM, emitSaveReading, emitStartReading } = useAppContext();

	if (!isGM) return null;

	return (
		<div className={`flex flex-col w-full gap-1 ${className}`}>
			<button
				onClick={emitStartReading}
				className="w-full rounded-lg border border-slate-400 bg-slate-700 px-2 py-2 text-sm font-semibold text-slate-100 shadow transition-all duration-250 hover:border-amber-300 hover:bg-slate-600 hover:text-amber-200 cursor-pointer"
			>
				{gameData.started ? 'Nova leitura' : 'Iniciar leitura'}
			</button>
			{gameData.started && (
				<button
					onClick={emitSaveReading}
					className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-400 bg-slate-700 px-2 py-2 text-sm font-semibold text-slate-100 shadow transition-all duration-250 hover:border-amber-300 hover:bg-slate-600 hover:text-amber-200 cursor-pointer"
				>
					<Save className="h-4 w-4" />
					Salvar no Diário
				</button>
			)}
		</div>
	);
}
