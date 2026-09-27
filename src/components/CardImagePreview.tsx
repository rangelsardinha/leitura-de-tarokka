import { CircleX } from 'lucide-react';
import { useAppContext } from '@/AppContext';
import { getURL } from '@/tools';

export default function CardImagePreview() {
	const { gameData, settings, showCardImageIndex, setShowCardImageIndex } = useAppContext();
	const card =
		showCardImageIndex === null ? null : gameData.cards[showCardImageIndex];

	if (!card) return null;

	const close = () => setShowCardImageIndex(null);

	const handleClose = (event: React.MouseEvent<HTMLElement>) => {
		if (event.target === event.currentTarget) close();
	};

	return (
		<div
			className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
			onClick={handleClose}
		>
			<button
				className="fixed top-4 right-4 z-[90] p-2 text-yellow-400 transition-all duration-250 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer"
				onClick={close}
				aria-label="Fechar imagem da carta"
			>
				<CircleX className="h-6 w-6" />
			</button>
			<img
				src={getURL(card, settings)}
				alt={card.aria}
				className="max-h-[90vh] max-w-[90vw] rounded-lg border border-yellow-500/50 object-contain shadow"
			/>
		</div>
	);
}
