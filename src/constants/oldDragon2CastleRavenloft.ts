import { isHighCard, isLowCard } from '@/tools/cardTypes';
import type { Layout, TarokkaGameCard } from '@/types';

type ReadingText = {
	dmText: string;
	playerText: string;
};

const POSITION_TEXTS: Record<string, ReadingText> = {
	'strahd-location': {
		dmText: 'A primeira carta determina onde está escondido o próprio Strahd.',
		playerText:
			'Esta carta é o objeto de sua busca! Ah! Eu vejo escuridão e mal por trás dessa carta! Ela é um poderoso homem cujo inimigo é a luz, e possui poderes além da mortalidade.',
	},
	'strahd-goal': {
		dmText: 'A segunda carta determina os objetivos de Strahd.',
		playerText:
			'E aqui está a carta podre. Fora da escuridão e do caos, esta carta mostra a razão e o fundamento do mal. Esta carta mostra o propósito de todas as coisas. Ela é a chave para a vida e a morte e tudo além disso.',
	},
	'strahd-tome': {
		dmText: 'A terceira carta determina onde está escondido o Tomo de Strahd.',
		playerText:
			'Esta carta conta uma história. O conhecimento dos antigos ajudará a conhecer seu adversário.',
	},
	'holy-symbol': {
		dmText: 'A quarta carta determina onde está escondido o Símbolo Sagrado.',
		playerText:
			'Esta carta é símbolo de um grande poder. Ela fala de uma poderosa força do bem e da proteção contra as forças da escuridão.',
	},
	'sun-sword': {
		dmText: 'A quinta carta determina onde está escondida a Espada do Sol.',
		playerText:
			'Esta carta é boa pra você. É uma carta de poder e força, a carta de Victor. Ela fala de uma arma da luz, uma arma da vingança.',
	},
};

const CASTLE_LOCATION_BY_LOW_VALUE: { values: number[]; text: ReadingText }[] = [
	{
		values: [1, 2, 3],
		text: {
			dmText:
				'Biblioteca - K37. O objeto está envolto em um tecido, debaixo do retrato de uma mulher. Se Strahd estiver aqui, estará sentado em um sofá, olhando fixamente para o fogo ardente da lareira.',
			playerText:
				'Está em um lugar de tranquilidade, um porto para o forte e poderoso. Está em um lugar de sabedoria, calor e desespero. Grandes segredos estão lá.',
		},
	},
	{
		values: [4, 5, 6],
		text: {
			dmText:
				'Sala do Tesouro - K41. O objeto está sobre os outros tesouros. Se Strahd estiver aqui, estará contando seu tesouro mal conseguido.',
			playerText:
				'Você deve buscar por um local cuidadosamente escondido de grande riqueza mundana. Eu vejo uma luz ardente protegendo o lugar.',
		},
	},
	{
		values: [7, 8, 9],
		text: {
			dmText:
				'Capela de Ravenloft - K15. O objeto está no altar, brilhantemente iluminado por um feixe de luz do teto. Se Strahd estiver aqui, estará de pé no centro da sala - uma silhueta escura no vasto salão.',
			playerText:
				'Você pode achar o que procura entre as ruínas de um lugar de súplica.',
		},
	},
	{
		values: [10],
		text: {
			dmText:
				'Topo da Torre Norte - K60. O objeto está em um baú de ferro trancado. Se Strahd estiver lá, estará na janela, examinando suas terras.',
			playerText:
				'O que procuras está em um lugar de altura vertiginosa, que todos abominam chegar. A estrada dos ventos sempre o percorre, e as pedras choram aqui!',
		},
	},
];

const SERGEI_CRYPT = ['marionette', 'executioner', 'beast', 'seer'];
const RAVENOVIA_CRYPT = ['innocent', 'mists', 'tempter', 'raven'];
const AUDIENCE_HALL = ['ghost', 'darklord', 'broken-one', 'donjon'];

const STRAHD_IREENA_GOAL = [
	'marionette',
	'executioner',
	'beast',
	'seer',
	'innocent',
	'mists',
	'tempter',
	'raven',
];

const STRAHD_SUN_SWORD_GOAL = ['ghost', 'darklord', 'broken-one', 'donjon'];

const LOW_SUIT_TEXTS: Record<string, ReadingText> = {
	Glyphs: {
		playerText:
			'Existe uma influência boa aqui. Se você estiver lá, os poderes do bem o ajudarão.',
		dmText: 'Os PJ’s recebem +1 de bônus no ataque e na CA.',
	},
	Coins: {
		playerText:
			'O diamante abençoa sua habilidade, mas pressagia mal para sua proteção.',
		dmText: 'Os PJ’s recebem +1 de bônus no ataque e -1 de penalidade na CA.',
	},
	Stars: {
		playerText:
			'O porrete sustenta sua força aqui, mas prende sua vitória, tomando mais tempo do que caso contrário tomaria.',
		dmText: 'Os PJ’s recebem +1 de bônus na CA e -1 de penalidade no ataque.',
	},
	Swords: {
		playerText:
			'A espada é uma sombra escura do mal que cobre esse lugar. Você luta debaixo dessa influência aqui.',
		dmText: 'Os PJ’s sofrem -1 de penalidade no ataque e na CA.',
	},
};

function locationForCard(card: TarokkaGameCard): ReadingText {
	if (isLowCard(card)) {
		return (
			CASTLE_LOCATION_BY_LOW_VALUE.find(({ values }) => values.includes(card.value))?.text ??
			CASTLE_LOCATION_BY_LOW_VALUE[3].text
		);
	}

	if (SERGEI_CRYPT.includes(card.id)) {
		return {
			dmText:
				'Cripta de Sergei von Zarovich - K85. O objeto está em cima do caixão de Sergei. Se Strahd estiver aqui, estará ajoelhado na placa de mármore, lamentando-se.',
			playerText:
				'Ele está com um velho príncipe caído. O irmão do escuro é a luz, cujos restos descansam neste lugar.',
		};
	}

	if (RAVENOVIA_CRYPT.includes(card.id)) {
		return {
			dmText:
				'Cripta de Ravenovia - K88. O objeto está em cima do caixão de Ravenovia. Se Strahd estiver aqui, estará em um frenesi de ira e desespero.',
			playerText: 'Ele está no local da mãe.',
		};
	}

	if (AUDIENCE_HALL.includes(card.id)) {
		return {
			dmText:
				'Salão de Audiências do Rei - K25. O objeto está atrás do trono. Se Strahd estiver aqui, estará sentado no trono.',
			playerText: 'O trono do rei é o local onde encontrá-lo.',
		};
	}

	return {
		dmText:
			'Cripta de Strahd - K86. O objeto está em um canto da cripta. Se Strahd estiver aqui, ele está dentro de seu caixão, pronto para atacar no primeiro sinal de alguém abrindo a tampa.',
		playerText:
			'Isto é um sinal muito ruim. Ele está bem no coração de escuridão: sua casa, sua fonte. É seu centro e sua vida. É o lugar para o qual ele deve retornar.',
	};
}

function goalForCard(card: TarokkaGameCard): ReadingText | null {
	if (isLowCard(card) && [1, 2, 3, 4].includes(card.value)) {
		return {
			dmText:
				'Strahd busca uma nova identidade. Strahd tentará ficar sozinho com um personagem do grupo que esteja Enfeitiçado. Quando isso ocorrer, ele usará Metamorfose no PJ para torná-lo semelhante a um vampiro. Depois, usará a mesma magia nele, para se parecer com o personagem enfeitiçado. Por último, ele usará a magia Sono, para adormecer o PJ e colocá-lo dentro de seu próprio caixão, e tentará se unir ao grupo de jogadores, se fazendo passar pelo PJ metamorfoseado. Strahd tentará persuadir o grupo de que ele encontrou uma maneira de deixar Baróvia. Strahd então, depois de tudo, abrirá os portões do Castelo. Ele tentará se mudar para outro país usando esta nova identidade. Os ciganos levarão a terra de sua cripta até sua nova casa.',
			playerText:
				'Não ainda, mas logo, alguém que parece ser seu amigo se tornará seu inimigo.',
		};
	}

	if (isLowCard(card) && [5, 6, 7, 8, 9].includes(card.value)) {
		return {
			dmText:
				'Strahd quer construir uma esfera de escuridão mágica. Strahd está tentando construir um artefato mágico que lança uma esfera contínua de escuridão. Tal item estenderia o alcance de suas viagens. Ao longo dos séculos ele juntou os pedaços da esfera um por um, agora está faltando só um pedaço, uma opala negra. Strahd erradamente acredita que um dos PJ’s possui uma opala negra. Strahd usará sua habilidade natural de enfeitiçar pessoas para encantar PJ’s solitários. Strahd enviará o PJ encantado de volta ao grupo, para perguntar: “Você tem a opala negra?” Quando Strahd descobrir que nenhum dos PJ’s tem uma opala negra, ele tentará destruí-los.',
			playerText:
				'Esta carta fala de uma ferramenta do mal. A escuridão cerca e protege esta ferramenta, dando conforto para os corações negros e proteção contra o bem.',
		};
	}

	if (isHighCard(card) && STRAHD_IREENA_GOAL.includes(card.id)) {
		return {
			dmText:
				'Strahd quer ganhar o amor de Ireena Kolyana. Strahd tentará encantar todos os PJ’s, e fazer com que eles ataquem Ireena. Quando eles a atacarem, Strahd surgirá e a salvará dos PJ’s. Strahd espera que este ato faça o coração de Ireena se apaixonar por ele. Ele quer que Ireena o ame de boa vontade, e não à força.',
			playerText:
				'A escuridão ama a luz e a deseja. Grandes mas sutis planos estão em movimento sobre você; planos que farão o morto encontrar calor do vivo.',
		};
	}

	if (isHighCard(card) && STRAHD_SUN_SWORD_GOAL.includes(card.id)) {
		return {
			dmText:
				'Strahd quer a Espada do Sol. Strahd quer destruir a Espada do Sol. Ele acredita corretamente que um dos PJ’s porta a espada por algum tempo. Se o cabo da espada for achado e reunido com a lâmina, Strahd correria um sério perigo.',
			playerText:
				'Esta é uma carta alta e nobre. Um de vocês porta uma arma mais forte que qualquer outra contra o mal nesta terra. Só uma parte está faltando desta arma. E esta parte pode ser encontrada no lar do maligno.',
		};
	}

	return null;
}

function effectForCard(card: TarokkaGameCard): ReadingText | null {
	if (!isLowCard(card) || !card.suit) return null;
	return LOW_SUIT_TEXTS[card.suit] ?? null;
}

function appendReadingText(
	dmParts: string[],
	playerParts: string[],
	title: string,
	readingText: ReadingText,
) {
	dmParts.push(`${title}: ${readingText.dmText}`);
	playerParts.push(`${title}: ${readingText.playerText}`);
}

export function getOldDragon2CastleRavenloftInfo(
	card: TarokkaGameCard,
	position: Layout,
	dm: boolean,
	showPosition: boolean,
	showProphecy: boolean,
): string[] {
	const dmParts: string[] = [];
	const playerParts: string[] = [];
	const positionText = POSITION_TEXTS[position.id];

	if (positionText && (dm || showPosition)) {
		appendReadingText(dmParts, playerParts, 'Posição', positionText);
	}

	if (dm || showProphecy) {
		if (['strahd-location', 'strahd-tome', 'holy-symbol', 'sun-sword'].includes(position.id)) {
			appendReadingText(dmParts, playerParts, 'Resultado', locationForCard(card));
		}

		if (position.id === 'strahd-goal') {
			const goal = goalForCard(card);
			if (goal) appendReadingText(dmParts, playerParts, 'Resultado', goal);
		}

		const effect = effectForCard(card);
		if (effect) appendReadingText(dmParts, playerParts, 'Influência do naipe', effect);
	}

	if (dm) {
		return [
			...(dmParts.length ? [`Mestre: ${dmParts.join(' ')}`] : []),
			...(playerParts.length ? [`Jogadores: ${playerParts.join(' ')}`] : []),
		];
	}

	return playerParts.length ? [`Jogadores: ${playerParts.join(' ')}`] : [];
}
