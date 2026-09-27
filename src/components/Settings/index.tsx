import { useState } from 'react';
import { CircleX, Settings as Gear } from 'lucide-react';

import { useAppContext } from '@/AppContext';
import Scrim from '@/components/Scrim';

import CardStyle from './CardStyle';
import GameSystem from './GameSystem';
import Permissions from './Permissions';
import ReadingControls from './ReadingControls';
import ReadingSpread from './ReadingSpread';

export default function Settings() {
	const [open, setOpen] = useState(false);
	const { isGM } = useAppContext();

	return (
		<div className={`fixed top-4 right-4 z-25`}>
			<Scrim
				clickAction={() => setOpen((prev) => !prev)}
				className={`transition-all duration-250 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
			>
				<div
					className={`
						fixed top-4 right-4
						flex flex-col items-center justify-between gap-3
						bg-slate-800 text-yellow-400
						rounded-lg border border-yellow-400
						h-full p-8 pt-10 overflow-y-auto
						transition-all duration-250
						${open ? `opacity-100 ${isGM ? 'w-[350px] max-h-[520px]' : 'w-[300px] max-h-[180px]'}` : 'opacity-0 w-0 max-h-0'}
					`}
				>
					<button
						type="button"
						aria-label="Fechar configurações"
						className="absolute top-2 right-2 z-50 flex items-center justify-center border-0 bg-transparent p-0 text-yellow-400 transition-all duration-250 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer"
						style={{ width: '28px', height: '28px', minWidth: '28px', minHeight: '28px' }}
						onClick={(event) => {
							event.stopPropagation();
							setOpen(false);
						}}
					>
						<CircleX className="w-5 h-5" />
					</button>
					<ReadingControls />
					<GameSystem />
					<ReadingSpread />
					<Permissions />
					<CardStyle />
				</div>
			</Scrim>
			<button
				className={`p-2 transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer`}
				onClick={() => setOpen((prev) => !prev)}
			>
				<Gear className="w-5 h-5" />
			</button>
		</div>
	);
}
