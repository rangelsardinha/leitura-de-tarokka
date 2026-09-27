export interface OldDragon2CardText {
	playerText: string;
	dmText: string;
}

export const oldDragon2CardTitles: Record<string, string> = {
	avenger: 'O Vingador',
	paladin: 'O Paladino',
	soldier: 'O Soldado',
	mercenary: 'O Mercenário',
	myrmidon: 'O Mirmidão',
	berserker: 'O Furioso',
	'hooded-one': 'O Encapuzado',
	dictator: 'O Ditador',
	torturer: 'O Torturador',
	warrior: 'O Guerreiro',
	swashbuckler: 'A Fora-da-Lei',
	philanthropist: 'O Filantropo',
	trader: 'O Comerciante',
	merchant: 'O Mercador',
	'guild-member': 'O Membro da Guilda',
	beggar: 'O Mendigo',
	thief: 'A Ladra',
	'tax-collector': 'O Coletor de Impostos',
	miser: 'O Avarento',
	rogue: 'O Ladino',
	transmuter: 'O Transmutador',
	diviner: 'O Adivinho',
	enchanter: 'O Encantador',
	abjurer: 'A Abjuradora',
	elementalist: 'O Elementalista',
	evoker: 'A Invocadora',
	illusionist: 'O Ilusionista',
	necromancer: 'O Necromante',
	conjurer: 'A Conjuradora',
	wizard: 'O Mago',
	monk: 'O Monge',
	missionary: 'O Missionário',
	healer: 'A Curandeira',
	shepherd: 'O Pastor',
	druid: 'O Druida',
	anarchist: 'O Anarquista',
	charlatan: 'O Charlatão',
	bishop: 'O Bispo',
	traitor: 'O Traidor',
	priest: 'O Clérigo',
	artifact: 'O Artefato',
	beast: 'A Besta',
	'broken-one': 'O Violado',
	darklord: 'O Lorde Sombrio',
	donjon: 'O Cárcere',
	seer: 'O Vidente',
	ghost: 'O Fantasma',
	executioner: 'O Carrasco',
	horseman: 'O Cavaleiro',
	innocent: 'O Inocente',
	marionette: 'O Fantoche',
	mists: 'As Brumas',
	raven: 'O Corvo',
	tempter: 'A Tentação',
};

export const oldDragon2CardTexts: Record<string, OldDragon2CardText> = {
	avenger: {
		playerText: 'Necessidade de vingança ou revanche. Reparação de injustiças.',
		dmText:
			'Simboliza a justiça final e a revanche por grandes injustiças. É a carta do cavaleiro solitário e andarilho, que não jura lealdade a nenhum lorde.',
	},
	paladin: {
		playerText: 'Vitória através da justiça e da lei.',
		dmText:
			'Associada aos justos e nobres guerreiros, simboliza o que é honrado e íntegro. Representa o triunfo do bem sobre o mal.',
	},
	soldier: {
		playerText: 'Um futuro incerto. Luta do bem contra o mal. Sem garantia de vitória.',
		dmText:
			'Carta de interpretação incerta. Simboliza a vitória do bem sobre o mal, mas não garante triunfo; indica que a sorte pode decidir o conflito.',
	},
	mercenary: {
		playerText: 'Código profissional de conduta. Uma espada para o bem ou para o mal.',
		dmText:
			'Representa aqueles que usam armas para ganhos pessoais, servindo tanto o bem quanto o mal, mas seguindo um código profissional. Fala de força interior, fortitude e vigor diante de desafios físicos.',
	},
	myrmidon: {
		playerText: 'Reviravolta do destino em batalha. Vitória ou derrota súbita.',
		dmText:
			'Marca uma súbita virada na sorte em meio ao combate: uma derrota causada por um detalhe, a chegada de reforços ou a queda inesperada de um inimigo poderoso.',
	},
	berserker: {
		playerText: 'Barbarismo e brutalidade em combate.',
		dmText:
			'Representa o lado bárbaro e brutal da guerra. Indica ações brutas, bestiais e imprevisíveis, frequentemente associadas a licantropos.',
	},
	'hooded-one': {
		playerText: 'Decepção, estupidez ou fanatismo. Crença na violência como solução.',
		dmText:
			'Representa os inclinados ao mal por estupidez ou decepção. Marca fanatismo, intolerância, xenofobia e a crença de que a violência é a única resposta.',
	},
	dictator: {
		playerText: 'Dominação ou atos de terror.',
		dmText:
			'Marca tudo que é errado em governos e lideranças: tirania, domínio pelo medo, intimidação, opressão e influência de forças militares malignas.',
	},
	torturer: {
		playerText: 'Crueldade e atos implacáveis. Vingança contra inimigos.',
		dmText:
			'Prevê sofrimento e crueldade sem misericórdia. É sinal de sadismo e da mão dos Poderes Sombrios; uma carta temida no tarokka.',
	},
	warrior: {
		playerText: 'Um encontro violento. Briga. Guerra.',
		dmText:
			'Carta Mestre do naipe de Espadas. Representa os que usam força e violência para atingir objetivos ou lideram outros por esse caminho; é carta de foco para guerreiros e similares.',
	},

	swashbuckler: {
		playerText: 'Aquele que procura dinheiro para ajudar outros.',
		dmText:
			'Indica quem anda fora da lei para ajudar os outros, como criminosos que roubam dos ricos para dar aos pobres. Representa o nobre fora da lei que entende a importância do dinheiro, mas não o deseja para si.',
	},
	philanthropist: {
		playerText: 'Desinteresse em si mesmo. Caridade ao próximo.',
		dmText:
			'Representa atos de caridade, doação e devoção ao próximo. É uma carta positiva, mas pode também indicar presentes dados com falsas intenções, como suborno.',
	},
	trader: {
		playerText: 'Comércio, lícito ou ilícito.',
		dmText:
			'Governa o comércio: leilões, mercados, pechinchas e preços elevados. Seu lado sombrio fala de contrabando, mercado clandestino e tráfico de materiais ilícitos.',
	},
	merchant: {
		playerText: 'Negócios sombrios ou perigosos.',
		dmText:
			'Alerta para a falsidade dos mercadores e transações em que nada é o que parece: bens adulterados, preços injustos ou negócios perigosos.',
	},
	'guild-member': {
		playerText: 'Cooperação em benefício mútuo.',
		dmText:
			'Fala de partilha, justiça e trabalho conjunto. Representa fraternidade e parceria nos negócios, sem maldade ou bondade inerente.',
	},
	beggar: {
		playerText: 'Mudanças radicais na sorte econômica.',
		dmText:
			'Marca mudança súbita na situação econômica. Pode indicar pobreza que vira riqueza com sofrimento, ou a ruína econômica de alguém.',
	},
	thief: {
		playerText: 'Aquele que rouba. Uma possível perda ou roubo.',
		dmText:
			'Carta dos que vivem do roubo, de assaltantes a assassinos. Alerta que algo valioso para o grupo ou para um personagem está em risco.',
	},
	'tax-collector': {
		playerText: 'Corrupção e decepção na alta sociedade.',
		dmText:
			'Marca corrupção e decepção envolvendo pessoas importantes, governos ou posições elevadas. Também pode revelar alguém íntegro dentro de uma organização corrupta.',
	},
	miser: {
		playerText: 'Aquele que acumula riqueza, mas leva uma vida miserável.',
		dmText:
			'Fala dos que acumulam vastas riquezas e vivem miseravelmente ou se perdem em excessos. Pelo lado bondoso, pode indicar fortuna obtida para um objetivo importante.',
	},
	rogue: {
		playerText: 'Aquele que lida com dinheiro. Ambicioso.',
		dmText:
			'Carta Mestre do naipe de Moedas. Representa ladrões, mendigos, banqueiros e mercadores: todos que acumulam, buscam ou rejeitam dinheiro. É carta de foco para ladinos e similares.',
	},

	transmuter: {
		playerText: 'Descobertas perigosas. Obsessão insalubre.',
		dmText:
			'Alerta para conhecimentos obtidos sem misericórdia ou compaixão. Fala de descobertas que trazem sofrimento e de objetivos fixos que podem se tornar obsessões.',
	},
	diviner: {
		playerText: 'Preparação meticulosa. Entendimento das consequências.',
		dmText:
			'Representa pesquisa, preparação e estudo das consequências. Simboliza verdade, honestidade e uma informação benéfica a ser descoberta.',
	},
	enchanter: {
		playerText: 'Determinação leva à vitória e à superação do sofrimento.',
		dmText:
			'Marca determinação diante de falha inicial, sofrimento e obstáculos. Prediz dificuldade, mas também esperança e vitória por perseverança.',
	},
	abjurer: {
		playerText: 'Busca pelos fatos. Uso da lógica para alcançar o conhecimento.',
		dmText:
			'Fala de esforço, confusão e sofrimento antes de um caminho árduo. A superação vem pela busca dos fatos e pelo uso da lógica.',
	},
	elementalist: {
		playerText: 'Maestria da natureza. Boa sorte em desafios naturais.',
		dmText:
			'Apela às forças imparciais do cosmos. Representa tanto o triunfo da natureza sobre a obra humana quanto a habilidade mortal de conter e dominar essas forças.',
	},
	evoker: {
		playerText: 'Atentação leva a um possível desastre.',
		dmText:
			'Marca pesquisa em áreas que os mortais não deveriam explorar. Prediz a descoberta de sabedoria antiga que trará desastre aos que a estudarem.',
	},
	illusionist: {
		playerText: 'Artifícios ou informações ganhas por meios malignos.',
		dmText:
			'Fala de mentiras, decepção, conspirações, sociedades secretas e informações adquiridas por meios malignos ou moralmente duvidosos.',
	},
	necromancer: {
		playerText: 'Poder contra si mesmo. Plantar as sementes da própria destruição.',
		dmText:
			'Indica fascinação antinatural, obsessão por poder e ligação com mortos-vivos. O poder do mestre dos mortos-vivos se volta contra si mesmo.',
	},
	conjurer: {
		playerText: 'Aqueles que ganham poder de fontes malignas.',
		dmText:
			'Representa magia negra e conhecimentos proibidos. Fala dos que ganham poder de fontes malignas e caminham perto da vontade dos Poderes Sombrios.',
	},
	wizard: {
		playerText: 'Poder, conhecimento e magia. Boa sorte e azar.',
		dmText:
			'Carta Mestre do naipe de Estrelas. Representa magos, feiticeiros, sábios e intelectuais famintos por poder místico e conhecimento; aponta mistérios, enigmas e segredos a serem pesquisados.',
	},

	monk: {
		playerText: 'Autoconfiança e força interior. Contemplação para resolver problemas.',
		dmText:
			'Fala de serenidade e satisfação de uma vida contemplativa. Expressa força interior, autoconfiança e a verdade encontrada pela contemplação.',
	},
	missionary: {
		playerText: 'O disseminador da fé.',
		dmText:
			'Representa aqueles que disseminam fé, conhecimento e sabedoria. Pelo lado maligno, fala da propagação do medo e da ignorância.',
	},
	healer: {
		playerText: 'Praticantes das artes curativas, físicas e espirituais.',
		dmText:
			'Amiga dos praticantes das artes curativas, médicos e clérigos. Para forças malignas, pode anunciar maldição ou doença macabra.',
	},
	shepherd: {
		playerText: 'Seguidor devotado. Amigo confiável.',
		dmText:
			'Fala de devoção e dedicação de amigos confiáveis, companheiros leais e seguidores devotos. Também pode advertir para a falha de um amigo fiel.',
	},
	druid: {
		playerText: 'Equilíbrio da natureza. Liberdade de emoções.',
		dmText:
			'Reflete os valores da natureza e a divindade do reino animal. Prega equilíbrio natural, saúde espiritual, liberdade mental e liberdade de deveres e emoções.',
	},
	anarchist: {
		playerText: 'Mudanças para melhor ou pior. Transição pacífica ou turbulenta. Revolução.',
		dmText:
			'Revela que tudo é transitório e que a natureza exige mudança constante. Pode prever melhoria, entropia, decadência, colapso ou revolução.',
	},
	charlatan: {
		playerText: 'Necessidade de alerta ou vigia cuidadosa. Um malandro ou um espião.',
		dmText:
			'Evoca espiões e malandros. Pode indicar um inimigo que se torna aliado, mas geralmente alerta para traição e necessidade de vigilância cuidadosa.',
	},
	bishop: {
		playerText: 'Uma presença controladora por trás de uma série de eventos macabros.',
		dmText:
			'Casa daqueles que planejam, conspiram e manipulam. Marca uma presença controladora por trás de eventos sombrios, para benefício próprio ou de outro objetivo.',
	},
	traitor: {
		playerText: 'Traição. Conspiração.',
		dmText:
			'Uma das cartas mais temidas do tarokka. Marca traição de alguém próximo e confiável, ou uma conspiração que se aproxima dos personagens.',
	},
	priest: {
		playerText: 'Um serviçal religioso obstinado.',
		dmText:
			'Carta Mestre do naipe de Glifos. Representa quem segue um deus, um sistema de valores ou as forças naturais do universo; é carta de foco para clérigos e similares.',
	},

	artifact: {
		playerText: 'Um objeto de importância.',
		dmText:
			'Refere-se a um objeto de grande importância para a leitura, de uma relíquia poderosa a um simples anel. É carta de foco quando a leitura busca descobrir algo sobre um item.',
	},
	beast: {
		playerText: 'Impulsos e paixões animalescas vêm à tona.',
		dmText:
			'Traz à tona a besta selvagem existente dentro do indivíduo. Indica influência animal, crimes impulsivos ou passionais, e é carta patrona dos licantropos como foco.',
	},
	'broken-one': {
		playerText: 'A mente, o corpo ou o espírito está partido.',
		dmText:
			'Indica derrota, fracasso e desespero. A mente, o corpo ou o espírito de alguém está quebrado, muitas vezes por perda pessoal ou saudade de alguém que se foi.',
	},
	darklord: {
		playerText: 'Alguém de grande poder trabalha contra o consulente.',
		dmText:
			'Lembra os lordes dos domínios de Ravenloft. Indica um indivíduo poderoso, geralmente maligno ou tirânico, cujas intenções podem ter grandes consequências.',
	},
	donjon: {
		playerText: 'Alerta de aprisionamento ou isolamento.',
		dmText:
			'Alerta para aprisionamento ou isolamento, voluntário ou forçado. Pode representar confinamento físico, mental ou padrões antigos que precisam ser quebrados.',
	},
	seer: {
		playerText: 'Uma lembrança dos poderes da mente.',
		dmText:
			'Lembra os poderes da mente. Pode indicar grande intelecto, inspiração súbita ou o uso de espionagem psíquica contra os personagens.',
	},
	ghost: {
		playerText: 'Ações do passado podem retornar.',
		dmText:
			'Alerta que atos ou escolhas do passado ainda têm consequências no presente. Pode representar um velho inimigo, antiga dívida, maldição ou destino mágico.',
	},
	executioner: {
		playerText: 'Exposição a uma pessoa culpada de algo.',
		dmText:
			'Indica que alguém foi pego fazendo algo errado, mas também pode falar de falsas acusações ou incriminações injustas.',
	},
	horseman: {
		playerText: 'Calamidade terrível, morte.',
		dmText:
			'Pressagia morte e desastre, mas nem sempre morte literal. Pode indicar acidente grave, derrota importante, perda de riqueza ou poder mágico.',
	},
	innocent: {
		playerText: 'Uma pessoa pura e indefesa precisa de ajuda.',
		dmText:
			'Denota uma pessoa indefesa de grande importância. Indefesa não significa fraca, mas alguém desavisado ou incapaz de perceber e lidar com o perigo ao redor.',
	},
	marionette: {
		playerText: 'Alerta à presença de um traidor.',
		dmText:
			'Indica a presença de um traidor ou lacaio de grande poder. Alguém que parece importante pode ser apenas subalterno de outro mestre, ou esconder um segredo.',
	},
	mists: {
		playerText: 'Mistério ou o inesperado. Um evento importante está para acontecer.',
		dmText:
			'Invoca as brumas de Ravenloft para advertir sobre mistérios, surpresas, eventos importantes, informações ocultas, pistas ainda não reveladas ou uma jornada inesperada.',
	},
	raven: {
		playerText: 'Um aliado potencial ou uma fonte de informação está para chegar. Forças são benéficas.',
		dmText:
			'Indica uma fonte de informações secretas com potencial para a bondade. Pode anunciar um novo aliado, uma magia benéfica, um objeto ou uma sequência de eventos favoráveis.',
	},
	tempter: {
		playerText: 'Um grande desejo à frente. Tentação.',
		dmText:
			'Indica um desejo que pode levar à tentação. Alguém pode perder de vista seus princípios por paixão, deliberação ou por uma boa intenção desviada.',
	},
};
