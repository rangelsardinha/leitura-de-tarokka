import { getReadingSpread } from '@/constants';
import tarokkaCards from '@/constants/tarokkaCards';
import { getCardInfo, getURL } from '@/tools';
import type { GameState, Settings, TarokkaGameCard } from '@/types';

const JOURNAL_TEXT_FORMAT_HTML = 1;
const OWNERSHIP_OBSERVER = 2;
const OWNERSHIP_OWNER = 3;

const cardBack = tarokkaCards.find((card) => card.back)! as TarokkaGameCard;

const styles = {
	wrapper:
		'color:#1f2937;background:#f8f4ea;padding:16px;border:1px solid #c8ad7f;border-radius:8px;font-family:serif;line-height:1.45;',
	title: 'color:#111827;margin:0 0 10px 0;font-size:28px;line-height:1.2;',
	meta:
		'color:#374151;background:#fffaf0;border:1px solid #d7c29a;border-radius:6px;padding:8px 10px;margin:0 0 14px 0;',
	sectionTitle:
		'color:#5f3f12;border-bottom:2px solid #9a6b24;margin:18px 0 10px 0;padding-bottom:4px;font-size:20px;',
	cardTitle: 'color:#6f4b16;margin:12px 0 4px 0;font-size:15px;font-weight:700;',
	list: 'color:#1f2937;margin:0 0 10px 20px;padding:0;',
	listItem: 'margin:0 0 6px 0;',
	visualGrid:
		'display:grid;gap:12px;align-items:center;justify-content:start;background:#fffaf0;border:1px solid #d7c29a;border-radius:6px;padding:12px;margin-bottom:14px;',
	figure: 'margin:0;text-align:center;color:#374151;',
	figcaption: 'font-size:11px;margin-top:4px;color:#374151;',
	image: 'max-width:96px;width:100%;height:auto;border:1px solid #9a6b24;border-radius:6px;',
	secret:
		'color:#f8fafc;background:#1f2937;border:1px solid #9a6b24;border-radius:8px;padding:12px;margin-top:16px;',
	secretTitle:
		'color:#facc15;border-bottom:2px solid #facc15;margin:0 0 10px 0;padding-bottom:4px;font-size:20px;',
	secretCardTitle: 'color:#fde68a;margin:12px 0 4px 0;font-size:15px;font-weight:700;',
	secretList: 'color:#f8fafc;margin:0 0 10px 20px;padding:0;',
};

function escapeHtml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

function localTimestamp(): string {
	return new Date().toLocaleString('pt-BR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	});
}

function journalTitle(timestamp: string): string {
	return `Leitura de Tarokka - ${timestamp}`;
}

function publicCardMessages(
	card: TarokkaGameCard,
	cardIndex: number,
	state: GameState,
	settings: Settings,
): string[] {
	const spread = getReadingSpread(settings.readingSpread, settings.gameSystem);
	const position = spread.positions[cardIndex];

	if (!position) return [];

	return getCardInfo(card, position, false, settings);
}

function gmCardMessages(
	card: TarokkaGameCard,
	cardIndex: number,
	state: GameState,
	settings: Settings,
): string[] {
	const spread = getReadingSpread(settings.readingSpread, settings.gameSystem);
	const position = spread.positions[cardIndex];
	const publicMessages = new Set(publicCardMessages(card, cardIndex, state, settings));

	if (!position) return [];

	return getCardInfo(card, position, true, settings).filter((message) => {
		if (publicMessages.has(message)) return false;
		if (message.startsWith('Jogadores:')) return false;
		return true;
	});
}

function renderMessageList(
	title: string,
	cards: TarokkaGameCard[],
	messagesByCard: string[][],
	secret = false,
): string {
	const cardSections = messagesByCard
		.map((messages, index) => {
			if (!messages.length) return '';

			const card = cards[index];
			const body = messages
				.map((message) => `<li style="${styles.listItem}">${escapeHtml(message)}</li>`)
				.join('');
			const cardTitle = escapeHtml(secret ? `Carta ${index + 1}: ${card.card}` : `Carta ${index + 1}`);
			const headingStyle = secret ? styles.secretCardTitle : styles.cardTitle;
			const listStyle = secret ? styles.secretList : styles.list;

			return `<section><h4 style="${headingStyle}">${cardTitle}</h4><ul style="${listStyle}">${body}</ul></section>`;
		})
		.filter(Boolean)
		.join('');

	if (!cardSections) return '';

	const titleStyle = secret ? styles.secretTitle : styles.sectionTitle;

	return `<h2 style="${titleStyle}">${escapeHtml(title)}</h2>${cardSections}`;
}

function renderVisualLayout(state: GameState, settings: Settings): string {
	const spread = getReadingSpread(settings.readingSpread, settings.gameSystem);
	const cards = state.cards;
	const cells = spread.positions
		.map((position, index) => {
			const card = cards[index];
			if (!card) return '';

			const imageCard = card.flipped ? card : cardBack;
			const src = getURL(imageCard, settings);
			const label = `Carta ${index + 1}`;

			return `
				<figure style="${styles.figure}grid-column:${position.x};grid-row:${position.y};">
					<img src="${escapeHtml(src)}" alt="${escapeHtml(label)}" style="${styles.image}" />
					<figcaption style="${styles.figcaption}">${escapeHtml(label)}</figcaption>
				</figure>
			`;
		})
		.join('');

	return `
		<h2 style="${styles.sectionTitle}">Imagem da tiragem</h2>
		<div style="${styles.visualGrid}grid-template-columns:repeat(${spread.columns}, 112px);grid-template-rows:repeat(${spread.rows}, auto);">
			${cells}
		</div>
	`;
}

function buildJournalContent(state: GameState, settings: Settings): string {
	const spread = getReadingSpread(settings.readingSpread, settings.gameSystem);
	const publicMessages = state.cards.map((card, index) =>
		publicCardMessages(card, index, state, settings),
	);
	const gmMessages = state.cards.map((card, index) => gmCardMessages(card, index, state, settings));
	const timestamp = localTimestamp();

	const publicSection = renderMessageList('Mensagens para os jogadores', state.cards, publicMessages);
	const gmSection = renderMessageList('Mensagens do Mestre', state.cards, gmMessages, true);

	return `
		<div style="${styles.wrapper}">
			<h1 style="${styles.title}">${escapeHtml(journalTitle(timestamp))}</h1>
			<p style="${styles.meta}"><strong>Sistema:</strong> ${escapeHtml(settings.gameSystem)}<br>
			<strong>Tiragem:</strong> ${escapeHtml(spread.label)}<br>
			<strong>Salvo em:</strong> ${escapeHtml(timestamp)}</p>
			${renderVisualLayout(state, settings)}
			${publicSection || `<p style="${styles.list}">Nenhuma mensagem pública visível no momento.</p>`}
			${gmSection ? `<section class="secret" style="${styles.secret}">${gmSection}</section>` : ''}
		</div>
	`;
}

export async function saveReadingToJournal(state: GameState, settings: Settings): Promise<void> {
	if (!game.user?.isGM) throw new Error('Only the GM can save a Tarokka reading.');
	if (!state.started || !state.cards.length) throw new Error('No Tarokka reading started.');

	const timestamp = localTimestamp();
	const name = journalTitle(timestamp);
	const content = buildJournalContent(state, settings);

	const journal = await JournalEntry.create({
		name,
		ownership: {
			default: OWNERSHIP_OBSERVER,
			[game.user.id]: OWNERSHIP_OWNER,
		},
		pages: [
			{
				name,
				type: 'text',
				text: {
					format: JOURNAL_TEXT_FORMAT_HTML,
					content,
				},
			},
		],
	});

	ui.notifications?.info?.(`Leitura salva no Diário: ${journal.name}`);
}
