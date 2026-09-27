import { Save } from 'lucide-react';
import { useAppContext } from '@/AppContext';

export default function ReadingControls({ className }: { className?: string }) {
	const { gameData, isGM, emitSaveReading, emitStartReading } = useAppContext();

	if (!isGM) return null;

	return (
		<div className={`flex flex-col w-full gap-1 ${className}`}>
			<button
				onClick={emitStartReading}
				className="w-full py-1 px-2 text-sm transition-all duration-250 bg-slate-700 hover:bg-slate-600 hover:text-yellow-300 rounded-lg shadow cursor-pointer"
			>
				{gameData.started ? 'Nova leitura' : 'Iniciar leitura'}
			</button>
			{gameData.started && (
				<button
					onClick={emitSaveReading}
					className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-700 px-2 py-1 text-sm shadow transition-all duration-250 hover:bg-slate-600 hover:text-yellow-300 cursor-pointer"
				>
					<Save className="h-4 w-4" />
					Salvar no Diário
				</button>
			)}
		</div>
	);
}
