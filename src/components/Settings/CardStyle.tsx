import { useAppContext } from '@/AppContext';
import type { CardStyle } from '@/types';

const cardStyleOptions: CardStyle[] = ['standard', 'color', 'grayscale'];
const cardStyleLabels: Record<CardStyle, string> = {
	standard: 'padrão',
	color: 'colorido',
	grayscale: 'tons de cinza',
};

export default function CardStyle({ className }: { className?: string }) {
	const { isGM, settings, emitSettings } = useAppContext();

	const tuneRadio = (cardStyle: CardStyle) => {
		emitSettings({ cardStyle });
	};

	return isGM ? (
		<fieldset className={`flex flex-col w-full ${className}`}>
			<div className="text-xs ml-1 mb-1 font-semibold text-amber-300">Estilo das cartas:</div>
			<div className="inline-flex overflow-hidden rounded-md w-full">
				{cardStyleOptions.map((option, index) => (
					<label
						key={option}
						className={`
							flex justify-center
							cursor-pointer
							w-full px-3 py-2
							text-xs font-medium capitalize
							min-h-12 border border-amber-400
							transition hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700]
							${settings.cardStyle === option ? 'bg-amber-400 text-slate-950 font-extrabold' : 'bg-slate-900 text-slate-100 hover:bg-slate-800'}
							${index === 0 ? 'rounded-l-md' : ''}
							${index === cardStyleOptions.length - 1 ? 'rounded-r-md' : ''}
							${index !== 0 && 'border-l border-gray-600'}
						`}
					>
						<input
							type="radio"
							name="cardStyle"
							value={option}
							checked={settings.cardStyle === option}
							onChange={() => tuneRadio(option)}
							className="sr-only"
						/>
						{cardStyleLabels[option]}
					</label>
				))}
			</div>
		</fieldset>
	) : null;
}
