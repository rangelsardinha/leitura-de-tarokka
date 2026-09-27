export interface Dnd35CardText {
	playerText: string;
	dmText: string;
}

export const dnd35CardLabels: Record<string, string> = {
	"swashbuckler": "Ás de Moedas: O Espadachim",
	"philanthropist": "Dois de Moedas: O Filantropo",
	"trader": "Três de Moedas: O Comerciante",
	"merchant": "Quatro de Moedas: O Mercador",
	"guild-member": "Cinco de Moedas: O Membro da Guilda",
	"beggar": "Seis de Moedas: O Mendigo",
	"thief": "Sete de Moedas: O Bandido",
	"tax-collector": "Oito de Moedas: O Coletor de Impostos",
	"miser": "Nove de Moedas: O Avarento",
	"rogue": "Dez de Moedas: A Mestre das Moedas",
	"avenger": "Ás de Espadas: O Vingador",
	"paladin": "Dois de Espadas: O Paladino",
	"soldier": "Três de Espadas: O Soldado",
	"mercenary": "Quatro de Espadas: O Mercenário",
	"myrmidon": "Cinco de Espadas: O Mirmidão",
	"berserker": "Seis de Espadas: O Furioso",
	"hooded-one": "Sete de Espadas: O Encapuzado",
	"dictator": "Oito de Espadas: O Ditador",
	"torturer": "Nove de Espadas: O Torturador",
	"warrior": "Dez de Espadas: O Mestre de Espadas",
	"transmuter": "Ás de Estrelas: O Transmutador",
	"diviner": "Dois de Estrelas: O Adivinho",
	"enchanter": "Três de Estrelas: O Encantador",
	"abjurer": "Quatro de Estrelas: O Abjurador",
	"elementalist": "Cinco de Estrelas: O Elementalista",
	"evoker": "Seis de Estrelas: O Evocador",
	"illusionist": "Sete de Estrelas: O Ilusionista",
	"necromancer": "Oito de Estrelas: O Necromante",
	"conjurer": "Nove de Estrelas: O Conjurador",
	"wizard": "Dez de Estrelas: O Mestre das Estrelas",
	"monk": "Ás de Glifos: O Monge",
	"missionary": "Dois de Glifos: O Missionário",
	"healer": "Três de Glifos: O Curandeiro",
	"shepherd": "Quatro de Glifos: O Pastor",
	"druid": "Cinco de Glifos: O Druida",
	"anarchist": "Seis de Glifos: O Anarquista",
	"charlatan": "Sete de Glifos: O Charlatão",
	"bishop": "Oito de Glifos: O Bispo",
	"traitor": "Nove de Glifos: O Traidor",
	"priest": "Dez de Glifos: O Mestre dos Glifos",
	"darklord": "Arcano Maior: O Lorde Negro",
	"artifact": "Arcano Maior: O Artefato",
	"horseman": "Arcano Maior: O Cavaleiro",
	"executioner": "Arcano Maior: O Executor",
	"ghost": "Arcano Maior: O Fantasma",
	"broken-one": "Arcano Maior: O Violado",
	"raven": "Arcano Maior: O Corvo",
	"innocent": "Arcano Maior: O Inocente",
	"marionette": "Arcano Maior: O Fantoche",
	"donjon": "Arcano Maior: O Cárcere",
	"tempter": "Arcano Maior: A Tentação",
	"mists": "Arcano Maior: As Brumas",
	"beast": "Arcano Maior: O Bestial",
	"seer": "Arcano Maior: O Herói",
};

export const dnd35CardTexts: Record<string, Dnd35CardText> = {
	"swashbuckler": {
		dmText: "Esta carta indica bandidos de bom coração ou salteadores de estrada, aqueles que roubam dos ricos para dar socorro aos pobres. Representa alguém que busca dinheiro não por ganância, mas como um meio de ajudar os outros. O Espadachim escapa de qualquer mancha de avareza, desconsiderando a lei da posse em face da necessidade do outro. Invertida, indica alguém controlado pela necessidade de riqueza, também inveja.",
		playerText: "Uma jovem sorridente vestida com roupas de um dândi passa por um comerciante rotundo e carrancudo vestido com roupas ricas, mas manchadas de comida. Uma das muitas bolsas do comerciante está pendurada, obviamente cortada, e o malandro travesso tem uma bolsa gorda em uma das mãos, enquanto a outra está jogando uma moeda de ouro no chapéu de um mendigo na rua. Um pequeno rato preto observa a troca.",
	},
	"philanthropist": {
		dmText: "O Filantropo é uma das cartas mais positivas do tarokka. É uma carta de devoção e amor altruísta, atos de caridade e doação sem pensar em recompensa. No padrão certo, o leitor de tarokka pode vê-lo como uma carta do ato final de dar - talvez o sacrifício final. Invertida, a carta tem um significado mais sombrio. O lado negativo da filantropia é o oportunismo, fornecendo presentes com um motivo oculto. Isso pode incluir qualquer coisa, desde suborno para ocultar atividades criminosas até a pretensão de amizade para uma eventual recompensa.",
		playerText: "Dois mendigos descalços vestidos com trapos se amontoam contra uma parede de pedra na neve. A menor, uma minúscula menina magra como os ossos e rosto anguloso, segura na palma da mão dois pedaços de pão em forma de moeda. Com amor nos olhos, ela está dando as duas peças à idosa em farrapos que a abraça.",
	},
	"trader": {
		dmText: "O comércio em todos os seus aspectos é o significado da carta o Comerciante. Quer sejam caravanas, casas de leilão, mercados ou contrabando ilícito em casas de barcos abandonadas, esta carta representa uma disputa para chegar a uma troca justa. Invertida, o Comerciante significa traição e maus negócios no comércio. Esta carta em seu aspecto negativo indica pechinchas de qualquer tipo.",
		playerText: "A face desta carta mostra um homem parado ao lado de uma carroça Vistani e um comerciante Vistani. Ele obviamente acabou de terminar uma sessão de barganha e parece bastante satisfeito consigo mesmo. O homem Vistani está meio sorrindo enquanto troca um saco bem amarrado por três moedas da mão do outro homem. As moedas estão no ar na carta, representando a troca de moeda e bens que está no centro do significado da carta.",
	},
	"merchant": {
		dmText: "Ao contrário do Negociante, a carta do Mercador representa negociações obscuras e engano. Uma carta de alguém que busca o lucro acima de tudo, sua aparência avisa: “cuidado com o comprador”. As mercadorias não são como prometidas, um acordo não é cumprido, um cliente está lá apenas para roubar ou o proprietário aumentou seus preços além da razão. Invertida, indica uma barganha invisível ou um achado raro e inesperado.",
		playerText: "Dois homens em silhueta fazendo uma troca nas sombras. Um segura um pequeno baú enquanto esconde uma adaga nas costas, o outro entrega uma sacola com um buraco no fundo. Quatro moedas caem da bolsa no chão enquanto fazem a troca.",
	},
	"guild-member": {
		dmText: "Como acontece com todas as cartas do naipe de Moedas, esta carta trata do comércio, mas trata de esforços cooperativos para lucro mútuo. Ela invoca a imagem de mercantis e artesãos trabalhando juntos para compartilhar ganhos e perdas. Dentro da organização, os membros recebem suporte e assistência sempre que houver problemas ou necessidade. Representando a fraternidade e a parceria nos negócios, a carta mostra lealdade, mas apenas a outros membros de um determinado grupo. Na posição vertical, o cartão indica uma organização leal e justa. Invertida, a organização pode ser neutra ou totalmente desonesta e traiçoeira - mas apenas para aqueles fora de sua esfera.",
		playerText: "Cinco bardos em coro, de braços dados, cantam em completa harmonia. Cinco moedas de ouro brilham em um chapéu no chão a seus pés.",
	},
	"beggar": {
		dmText: "O mundo do comércio é arriscado. O seis de moedas trata de mudanças radicais na fortuna. Um homem pobre pode ficar rico, seja por circunstâncias repentinas ou por trabalho duro e perseverança. Um comerciante rico pode de repente ver sua loja queimada, seus navios destruídos ou gradualmente perder sua fortuna por meio de maus investimentos, encontrando-se nas ruas. Como se pode imaginar, o aspecto positivo desta carta envolve ganhar riqueza, embora essa riqueza também possa assumir a forma de maior conhecimento ou sabedoria. Invertida, esta carta indica perda e possível ruína.",
		playerText: "Um mendigo e um homem rico mantêm uma postura espelhada. Exceto pelas roupas, eles são exatamente iguais. O homem rico joga seis moedas na xícara de lata que o mendigo segura. Sua semelhança adverte sobre a natureza inconstante da fortuna.",
	},
	"thief": {
		dmText: "Esta carta representa todos os aspectos do roubo e de todos os ladrões, seja um simples batedor de carteira, um ladrão talentoso, um macaquinho ou um bandido violento. Em uma leitura, indica um ladrão real ou a perda de algo importante para o indivíduo. Essa perda pode ser qualquer coisa, desde uma arma mágica roubada de herança até a desfiguração de um homem bonito. Tudo o que é mais valorizado está em risco. Invertido, indica um ganho importante ou há muito esperado, embora geralmente por meio de circunstâncias infelizes. Isso pode ser riqueza adquirida com a perda de um ente querido ou um presente dado de bens roubados.",
		playerText: "Uma ladra se agacha sobre um nobre assassinado. Ela está removendo um anel de sinete da mão dele e tem mais joias caindo de uma bolsa em sua cintura. Sete moedas estão espalhadas nas pedras manchadas de sangue.",
	},
	"tax-collector": {
		dmText: "Corrupção e engano, especialmente dentro do governo ou entre a nobreza, estão no cerne desta carta. Funcionários influentes traiçoeiros podem realizar ações secretas, como peculato ou traição. Outros podem esperar subornos para certos favores ou intimidar aqueles abaixo deles dentro da organização. Invertida, esta carta indica uma pessoa confiável e justa em uma posição de poder - mesmo dentro de uma organização corrupta.",
		playerText: "Uma camponesa encolhida, vestida com roupas remendadas, olha suplicante para um homem montado, com o rosto escondido pela sombra de uma capa com capuz. Ele agarra oito moedas, que obviamente acabou de tirar dela. A entrada de uma pessoa humilde, mas atrás dela, indica a óbvia incapacidade da camponesa de pagar por tal quantia.",
	},
	"miser": {
		dmText: "Esta carta indica alguém que mantém uma vasta horda de riquezas para o benefício de ninguém além de si mesmo. Seja um verdadeiro avarento acumulando ouro e vivendo em pobreza abjeta ou um jovem nobre rico interessado em nada além de seu próprio prazer e decadência, aqueles representados pelo nove de Moedas são inteiramente egocêntricos. Em seu aspecto reto, é a carta da riqueza falsa ou inutilizável. Invertida, uma fortuna repentina pode estar próxima ou alguém atinge um objetivo importante.",
		playerText: "A imagem no cartão é de um velho feio e enrugado contando nove moedas à luz de uma vela gotejante. Suas roupas de dormir estão remendadas, mas pilhas de joias e outros tesouros estão nas prateleiras atrás dele. Um rato está sentado na mesa perto dele, segurando uma das moedas nas patas.",
	},
	"rogue": {
		dmText: "(Jacqueline Renier) Esta carta representa alguém que é o epítome do ladino - bardo, batedor de carteira, banqueiro, comerciante ou coletor de impostos. Todos aqueles que manipulam a riqueza, seja labutando para ganhá-la, elaborando para obtê-la, atuando para obtê-la, roubando-a ou implorando por ela, estão ligados ao Mestre ou dez Moedas. Em uma leitura, a posição vertical indica uma reação positiva. Invertida, esta carta indica antipatia imediata ou perigo de ser representado por esta carta.",
		playerText: "Uma mulher elegante e bem vestida com cabelos escuros lustrosos, com mechas grisalhas nas têmporas, está com o rosto escondido nas sombras. Em um ombro está sentado um rato preto bem alimentado, com os olhos brilhando. Na mesa à sua frente está uma adaga ornamentada, uma bolsa de ouro com dez moedas caindo e uma flauta prateada.",
	},
	"avenger": {
		dmText: "Aqueles de tendência caótica e boa estão ligados ao ás de Espadas. A carta, em seu aspecto positivo, indica a necessidade de corrigir os erros e julgar rapidamente os inimigos sem pensar no perigo. Grandes missões para lutar contra vampiros antigos ou livrar o reino de inimigos lupinos são algumas das ações feitas pelo vingador errante - um cavaleiro que não deve lealdade a ninguém e nada além de seu próprio senso de honra e justiça. Invertida, a carta indica escolhas tolas ou uma batalha sem esperança.",
		playerText: "Um jovem está de pé, com os braços erguidos acima da cabeça, segurando uma espada flamejante que brilha azul com eletricidade. Sua armadura goteja sangue, mas seu belo rosto está triunfante. Espalhados no chão ao seu redor estão seus muitos inimigos - incluindo licantropos e outras criaturas monstruosas. Um corvo se senta empoleirado em um dos corpos, um pedaço de carne em seu bico.",
	},
	"paladin": {
		dmText: "Ao contrário da natureza imprudente da carta do Vingador, a carta do Paladino indica vitória por meio da justiça e da adesão estrita aos códigos da lei. Simbólico de todos aqueles que buscam a causa do bem final, o dois de Espadas fornece a esperança do bem triunfar verdadeiramente sobre o mal. Invertida, a carta pressagia traição em nome de boas ações ou arrogância destruindo uma chance de vitória.",
		playerText: "Um paladino com a armadura completa está ajoelhado, sua cabeça descoberta curvada, segurando uma espada, com a ponta para baixo, na frente dele. Uma figura invisível bateu no ombro do paladino com outra espada, tornando-o cavaleiro obviamente nobre e corajoso. Além da figura, há uma parede pendurada com uma rosa ornamentada bordada.",
	},
	"soldier": {
		dmText: "Para um soldado, a moralidade e a motivação de uma batalha muitas vezes não são claras. Embora o três de Espadas indique a guerra entre o bem e o mal, ele não prediz o resultado final, nem é nenhum dos lados claramente reconhecível. Indicando um futuro incerto, a interpretação usual denota que o acaso ou o destino será o fator decisivo. Invertida, a carta indica um final definitivo, embora também ilustre a necessidade de muito trabalho, sem vitória rápida.",
		playerText: "Um espadachim pega uma arma em um suporte. Existem três espadas penduradas lá, uma branca, uma cinza e uma preta. É impossível adivinhar qual espada ele escolhe, e seu rosto mostra sua incerteza. Algumas cartas contêm imagens que podem, se o leitor desejar, representar entidades poderosas do mundo de Ravenloft. As descrições dadas correspondem a essas personalidades e podem fornecer dicas úteis para seus jogadores, mesmo que os personagens nunca tenham conhecido seus inimigos sombrios. Cada carta mestre é representada por um dos Lordes Sombrios, enquanto outras, não são de Lordes das Trevas, estão espalhadas entre outras imagens do baralho. Quando um desses for intencional, você verá o nome do personagem entre parênteses ao lado do título da carta.",
	},
	"mercenary": {
		dmText: "Embora represente alguém que vende sua espada ou mercenário, o quatro de Espadas indica alguém que segue um código de conduta profissional e negocia com justiça dentro desse código. Desejando trabalhar para o bem ou para o mal na busca de ganhos pessoais, as pessoas representadas por esta carta ainda honram seus compromissos. O quatro de espadas também representa resistência, perseverança e força em face da adversidade física. Invertida, a carta indica pessoas que são altruístas, mas rígidas em suas crenças. Também indica fraqueza física ou doença.",
		playerText: "Quatro guerreiros musculosos em armaduras surradas se reuniram em torno de um baú aberto cheio de tesouros. Eles têm suas espadas levantadas de forma que as armas toquem um ponto para apontar para a caixa transbordando. Suas mãos livres repousam sobre seus corações em um sinal de juramento solene, os punhos cerrados.",
	},
	"myrmidon": {
		dmText: "O cinco de Espadas ilustra a natureza inconstante do destino. Esta carta indica batalhas vencidas ou perdidas em um instante, por acaso, reviravolta repentina ou vitória improvável de um oprimido no caos da guerra. Nenhum plano é seguro, nenhuma vitória certa sob o poder do Mirmidão. A destruição de um Lorde Negro por um simples fazendeiro ou as maquinações cruéis dos Poderes Sombrios frustrando um plano brilhantemente concebido podem acontecer quando esta carta aparecer em uma leitura. Invertida, as situações tornam-se estáticas e a mudança é difícil ou impossível de implementar.",
		playerText: "Uma jovem e bela Vistana, usando algemas quebradas, está na fronteira das Brumas. Cinco figuras passam, obscurecidas pela névoa, suas espadas perfurando a Névoa. Pela ilustração, é impossível saber se eles chegaram para defendê-la ou destruí-la.",
	},
	"berserker": {
		dmText: "O seis de Espadas representa tudo o que é bárbaro e brutal na batalha. Essas pessoas ou criaturas indicadas por esta carta realizam manobras caóticas em combate sem pensar nas consequências. Ação, desafio e aventura são tudo o que conta. Esta carta geralmente representa licantropos malignos. Sua natureza bestial os leva a atos caóticos e sangrentos. Invertida, a carta mostra ações ponderadas e bem planejadas ou compaixão no meio da guerra.",
		playerText: "A lua cheia ilumina a imagem de um lobisomem selvagem, com o focinho ensanguentado e os dentes à mostra. Embora os inimigos o tenham perfurado mortalmente com cinco espadas de prata, ele ergue sua própria espada em triunfo. Em torno dele estão pedaços de seus inimigos massacrados.",
	},
	"hooded-one": {
		dmText: "O sete de Espadas simboliza o engano e as ações malignas por meio da estupidez, fanatismo, intolerância ou xenofobia. Indica situações em que a violência parece a única resposta - embora muito provavelmente a resposta errada. Às vezes, a carta representa um estranho suspeito e temido, pária ou forasteiro. Invertida, esta carta indica compreensão e tolerância inesperadas ou uma visita inesperada de uma pessoa importante ou querida.",
		playerText: "Uma multidão de camponeses carregando tochas fumegantes está atrás de uma figura ameaçadora encapuzada com mãos esqueléticas. Na frente, um caliban se encolhe dentro de um círculo de sete espadas, cada uma delas profundamente enterrada no solo sangrento.",
	},
	"dictator": {
		dmText: "Esta carta representa nobres, funcionários do governo, clérigos ou generais que são líderes corruptos. É a marca do tirano ou déspota que atormenta aqueles que estão sob sua proteção. Opressão, dominação e atos de terror são simbolizados pelo ditador que exerce o poder injustamente ou captura a liderança por meios traiçoeiros. Invertida, indica um governante bom e justo, alguém que deseja proteger os fracos e desamparados ou libertar-se da prisão.",
		playerText: "Um homem no auge do desespero está preso sob pesadas correntes. Oito espadas prendem as correntes ao solo. O céu acima do horizonte é tempestuoso e cheio de nuvens escuras.",
	},
	"torturer": {
		dmText: "Uma das imagens mais ameaçadoras e temidas do baralho tarokka, o nove de Espadas representa o mal que tudo consome. Esta carta simboliza criaturas das trevas, sádicos, seres demoníacos e violentamente insanos. O torturador indica qualquer um que se deleite em sofrimento e tormento. Vistani estremece de pavor quando o aspecto positivo do nove de Espadas aparece em uma leitura. Invertida, a carta simboliza uma chance de redenção - mesmo para aqueles que seguiram o apelo sedutor do caminho da corrupção.",
		playerText: "Nove espadas brilham como brasa em um braseiro. Atrás do braseiro, um homem está pendurado em correntes, seu espírito obviamente destruído, seu corpo quebrado e marcado. É certo que ele não tem mais informações para dar, mas os tormentos continuam. A sombra de um corvo pode ser vista na parede ao lado dele.",
	},
	"warrior": {
		dmText: "(Conde Strahd) Esta carta simboliza aqueles que vivem suas vidas em batalha. Seja general ou gladiador-escravo, o Mestre de Espadas marca o guerreiro em todas as suas formas. Também indica o poder do governo e de outros líderes, seja no salão da guilda, no tribunal ou no campo de batalha. Como uma carta de foco, o leitor pode usá-lo para qualquer soldado, para aqueles em conflito físico ou mental ou qualquer coisa ligada ao elemento ar. Em seu aspecto reto, representa uma reação positiva - uma trégua ou aliança. Invertida, a carta representa uma resposta negativa, como assassinato ou guerra.",
		playerText: "Um homem mais velho, com armadura e ombros largos, cabelo preto e mechas brancas nas têmporas está de pé nas ameias, sua capa escura chicoteando atrás dele na brisa tempestuosa. Seu rosto está sombreado de perfil. Ao seu lado, ele usa uma espada elegante com um grande rubi no punho. Nove outras espadas estão espalhadas nas pedras, como se tivessem caído por inimigos que se rendiam. Uma lua está no céu, meio obscurecida pelas nuvens. Um corvo voa à luz da lua.",
	},
	"transmuter": {
		dmText: "(Dr. Victor Mordenheim) Às vezes, na busca ávida por conhecimento, um mago pode fazer descobertas inesperadas ou perigosas. O ás de estrelas representa alguém que fez tal descoberta ou os resultados desastrosos que dela advêm. Os exemplos incluem a criação de uma nova magia com efeitos colaterais horríveis, a mistura de duas poções alquímicas para criar um veneno inesperado ou a descoberta por um estudioso de um item mágico antigo com poderes mortais e incontroláveis. Às vezes, a carta indica alguém que teve sucesso enquanto perdeu de vista seus objetivos ou valores originais. Outras vezes, indica obsessão doentia, talvez amor obsessivo. Invertida, a carta pressagia um fracasso feliz ou um final benéfico e há muito esperado para um empreendimento.",
		playerText: "Um homem magro de meia-idade com rosto marcado por cicatrizes e cabelos grisalhos está sentado, olhando cansado através de um livro apoiado em uma mesa. Uma agulha, um carretel de linha e um bisturi estão ao lado do tomo aberto. Uma vela ilumina seu livro, sua chama uma estrela na escuridão. Atrás dele está uma figura alta e ameaçadora, sua forma distorcida na sombra, as mãos estendidas em direção ao pescoço.",
	},
	"diviner": {
		dmText: "O dois de estrelas simboliza uma compreensão sólida das consequências e uma preparação meticulosa. Ciência, artes de cura e magia benevolente fazem parte, assim como honestidade e verdade. Esta carta representa aqueles que buscam conhecimento vital para o benefício de todos. Ao contrário da maioria das cartas de tarokka, mesmo ao contrário, esta carta indica algo positivo - decepção compassiva, como uma mentira branca protetora.",
		playerText: "Um mago idoso está de pé enquanto um mais jovem se ajoelha a seus pés, apresentando um grande livro branco aberto para ela ler. O mais velho usa uma coroa coberta com chamas para mostrar sua nobreza e orgulho, enquanto o mais jovem olha para ela com admiração aberta. Duas estrelas brilham no céu, evidenciando o brilho radiante do conhecimento e o calor da compaixão e da compreensão. Uma pequena cobra se enrosca na garganta do mago mais jovem como um colar.",
	},
	"enchanter": {
		dmText: "O Encantador se esforça para encantar e tornar mágico o mundano ao seu redor. A carta do Encantador indica desafio em magia ou pesquisa e eventual sucesso. Determinação é a palavra de ordem desta carta, pois leva à iluminação e à vitória através da superação de adversidades. Invertida, o três de estrelas indica fracasso, mas a esperança é encorajada.",
		playerText: "Um mago luta contra uma terrível tempestade de vento ao longo de uma ponte estreita e arqueada. À distância, na outra extremidade da ponte, uma pequena porta aberta envia um feixe de luz brilhante ao longo do caminho. No céu, as nuvens estão se dissipando e três estrelas aparecem.",
	},
	"abjurer": {
		dmText: "O quatro de estrelas é a carta do investigador, seja estudando crimes ou o sobrenatural. Simboliza a necessidade de verificar fatos, analisar dados e usar a lógica na busca pelo conhecimento. Advertindo contra suposições e interpretação precipitada, o Abjurador deve separar a confusão e o caos para progredir. Indicando nem derrota nem sucesso, esta carta geralmente denota a necessidade de repensar ou revisar, pois uma pista ou fatos importantes podem ter sido negligenciados. Invertida, representa inspiração e compreensão repentina sem raciocínio consciente.",
		playerText: "Uma Vistana idosa parece estar dentro de uma bola de cristal perfeita. Quatro estrelas iluminam o interior da bola, iluminando seu rosto e mãos, bem como a escuridão ao seu redor. As estrelas simbolizam conhecimento, compreensão, verdade e lógica.",
	},
	"elementalist": {
		dmText: "Em sua interpretação mais básica, esta carta representa a Natureza em todos os seus aspectos - uma cachoeira suave, a tempestade violenta, um filhote de coelho ou um tigre rosnando, a lua e as estrelas. O cinco de Estrelas também indica o domínio da Natureza ou a eventualidade do sucesso da Natureza. Em seu aspecto positivo, o Elementalista prenuncia boa sorte em empreendimentos naturais, como caça ou colheita, até mesmo anunciando o nascimento de gêmeos em uma família estéril. Invertida, é indicativo de um evento natural negativo, como uma nevasca, um incêndio florestal ou uma manada violenta de elefantes selvagens.",
		playerText: "Um feiticeiro está de pé com os braços abertos acima da cabeça. Cinco estrelas se formam entre suas mãos, como um arco-íris. O sol forte brilha acima dele no céu. Uma vegetação luxuriante o rodeia. Dentro da folhagem, uma cobra está enrolada a seus pés, olhando para cima.",
	},
	"evoker": {
		dmText: "(Tatyana) O seis de Estrelas denota tentação levando a um possível desastre. A invasão do proibido, o roubo de túmulos ou as pesquisas sobre a tradição arcana sombria são todos indicados por esta carta sinistra, bem como o confronto com o mal além da compreensão do pesquisador. Em termos de jogo, esta carta pode ser um sinal de um teste de Horror em um futuro próximo. Invertida, denota o retorno da sanidade àquele que enlouqueceu ou resistiu a um desejo quase irresistível.",
		playerText: "Uma jovem ruiva com um longo vestido branco está ao lado de sua cama, olhando pela janela. Uma mão está levantada buscativa. Seu rosto está pensativo e apreensivo. Ela obviamente anseia pelo que está fora. Além da janela está uma figura sombria vestida com um manto escuro. Seu belo rosto está pálido e sua boca vermelha distorcida por presas. Seis estrelas decoram a vidraça com chumbo que envolve a parte central transparente. A janela está ligeiramente aberta.",
	},
	"illusionist": {
		dmText: "Cuidado com o engano quando esta carta aparecer. Alguém escondeu muito, disse mentiras ou formou conspirações obscuras além da percepção de um tolo pela causa. O sete de Estrelas pode indicar truques ou informações obtidas por meios malignos. Na pior das hipóteses, o foco da leitura pode se tornar um sacrifício a uma causa que ele ainda não compreende e pode nunca compreender. Invertida, esta é uma carta das sociedades secretas, organizadas para o bem ou para o mal.",
		playerText: "Uma figura em mantos escuros gesticula para um homem vendado preso em um diagrama complexo de fogo. Atrás da figura vestida há sete pedras monolíticas. Cada um está inscrito com uma estrela, que brilha fracamente à luz do fogo além.",
	},
	"necromancer": {
		dmText: "O oito de Estrelas denota o poder voltado contra si mesmo ou alguém que está plantando as sementes de sua própria destruição. Em sua posição vertical, ele também pode indicar uma mente afiada e instruída em busca do poder das trevas ou a presença de mortos-vivos. Invertida, a carta dá esperança de se voltar contra o mal ou derrotar uma poderosa criatura morta-viva, talvez por meio de um conhecimento recém-adquirido ou de escolhas inteligentes e moralmente corretas.",
		playerText: "Uma figura encapuzada com mãos esqueléticas faz gestos misteriosos sobre oito lápides. Cada lápide é marcada com uma estrela negra. Cadáveres apodrecidos saem dos túmulos.",
	},
	"conjurer": {
		dmText: "Embora muitas cartas dentro do naipe de Estrelas indiquem um fascínio pelo conhecimento proibido, o nove de Estrelas é a última carta de conhecimento maligno usada para fins aterrorizantes. Frequentemente chamada de carta de convocação, denota aqueles que ganham seu poder de demônios e outros seres malévolos do além. Pode indicar alguém que é um mestre desses seres ou alguém que se tornou um peão de seus esquemas malignos. Invertida, a carta ainda carrega conotações negativas, indicando repressão da verdade ou alguém deliberadamente retendo informações vitais.",
		playerText: "Uma feiticeira encantadora se contorce em uma dança apaixonada com um demônio sombrio. Sobre seu corpo seminu aparecem nove estrelas tatuadas. Ela usa uma braçadeira em forma de cobra. Atrás deles, uma cortina de chamas indica o elemento puro do fogo como fonte de destruição.",
	},
	"wizard": {
		dmText: "(Azalin Rex) O Mestre das Estrelas representa todos os que desejam conhecimento e poder místico. A carta dos sábios, eruditos, intelectuais, feiticeiros e necromantes, o dez das estrelas é o foco para quem segue o caminho de um mago ou feiticeiro. Pode indicar enigmas ou um mistério, o sobrenatural ou o desconhecido. Para os Vistani, a carta avisa sobre a presença de segredos ou conhecimentos ocultos que o foco da leitura deve obter para ter sucesso. Invertida, a carta indica a presença de um mestre do mal das artes arcanas ou revela uma pista enganosa.",
		playerText: "Uma figura escura olha para fora como se estivesse procurando algo desesperadamente. Seu rosto está sombreado sob uma capa com capuz decorada com dez estrelas, mas seus olhos aparecem como dois buracos estígios com pupilas de fogo.",
	},
	"monk": {
		dmText: "Esta carta representa autossuficiência e força interior. Melhoria física e mental é indicada, transcendendo as habilidades do homem comum. O monge vive para a contemplação e a tranquilidade, mas entende firmemente os males do mundo e se certifica de que seu corpo, mente e espírito são fortes o suficiente para enfrentar o desafio. Nas leituras, o aspecto positivo indica a necessidade de autossuficiência ou que a contemplação é um fator importante na resolução de um problema. Invertida, indica decisões precipitadas ou alguém com mente e corpo depravados.",
		playerText: "Um homem magro, com a cabeça raspada, está sentado com as pernas dobradas em um banco de madeira. Sua pele e olhos escuros mostram que ele é de Sri Raji. Vestido com uma culatra simples, ele contempla uma tigela simples cheia de água em concha em suas mãos. Uma orelha é furada, o lóbulo é longo, com um brinco pendurado na forma de um Glifo - semelhante ao símbolo da eternidade.",
	},
	"missionary": {
		dmText: "O dois dos Glifos indica aqueles que espalham os ensinamentos de seus deuses. Em seu aspecto positivo, esses ensinamentos trazem iluminação e sabedoria. Infelizmente, nos reinos de Ravenloft, esta carta é mais frequentemente vista em seu aspecto negativo: espalhando ignorância e medo. Invertida, esta carta profetiza dias sombrios que virão.",
		playerText: "Uma mulher em vestes clericais está em um púlpito pregando para uma multidão hipnotizada de fiéis. Ela segura dois livros, um preto e um branco, cada um inscrito com um Glifo na capa. É impossível dizer se ela ensina o bem ou o mal, embora a expressão sombria em seu rosto ameace a escuridão.",
	},
	"healer": {
		dmText: "Todos os que praticam as artes de cura são representados por esta carta, seja médico, herborista ou clérigo de uma ordem sagrada. Aqueles que procuram uma cura consideram os três de Glifos um presságio positivo. Invertida, indica doença ou enfermidades, possivelmente até uma maldição malévola.",
		playerText: "Um idoso inválido está deitado na cama. Ao lado dele, uma jovem sacerdotisa enxuga sua testa com um pano enquanto o olha com ternura. Um brilho emana de suas mãos curativas. Na parede atrás deles, três glifos esculpidos afastam as influências malignas para a saúde do paciente. Um lobo está deitado a seus pés.",
	},
	"shepherd": {
		dmText: "Dedicação, lealdade e devoção são as palavras de ordem dos quatro de Glifos. Esta carta indica seguidores devotados, companheiros leais e amigos confiáveis - aqueles que protegem e defendem o foco da leitura assim como um pastor observa seu rebanho. Invertida, a carta se torna um sinal sombrio de traição ou falha de um amigo confiável, seja acidentalmente ou propositalmente.",
		playerText: "Um jovem pastor observa seu rebanho com cuidado, mas seu cão leal está adormecido e um lobo espreita entre as ovelhas. Quatro glifos decoram o comprimento do cajado de seu pastor.",
	},
	"druid": {
		dmText: "Refletindo o equilíbrio da natureza e a neutralidade da espécie animal, o cinco de Glifos mostra o valor de permitir que os eventos aconteçam sem tentar controlá-los. Como um sinal de bem, indica uma liberação de emoções ou dominação mental. Invertida, torna-se um sinal de uma turbulência interna que perturba a serenidade natural da mente. Também pode alertar sobre doença mental ou obsessão.",
		playerText: "Um druida está em um bosque de cinco árvores. Um corvo repousa em seu ombro, enquanto um lobo e um rato olham. Uma cobra se enrola no galho de outra árvore. Cada árvore possui uma marca em forma de Glifo em seu tronco. Um riacho flui ao longo de um lado do bosque.",
	},
	"anarchist": {
		dmText: "As seis marcas de Glifos mudam, seja imediata ou gradual, para o bem ou para o mal. No seu aspecto positivo, sinaliza crescimento e melhoria. Todos os que procuram melhorar a si próprios ou à sua situação encontram graça na posição vertical desta carta. O Anarquista em sua forma mais básica também indica aqueles que se rebelam contra uma situação estática. Invertida, indica entropia, decadência e destruição, mas nunca estagnação.",
		playerText: "Uma figura está dentro de uma estrutura de arame trançado decorada com seis glifos. Raios crepitam na gaiola, iluminando o laboratório, enquanto a figura se transforma em algo ainda invisível.",
	},
	"charlatan": {
		dmText: "Malevolência onde nada é esperado é a marca do Charlatão. A carta de espiões, incrédulos e trapaceiros, na pior das hipóteses, adverte contra acreditar na pessoa ou deus errado. Em uma leitura, indica a necessidade de observar cuidadosamente e compreender as motivações dos outros, especialmente aquelas tomadas como certas ou geralmente despercebidas. Invertida, esta carta é mais positiva e denota a possibilidade de encontrar um amigo há muito esquecido ou encontrar um aliado entre os inimigos.",
		playerText: "Uma figura andrógina olha para fora, olhos fechados, indicando algo invisível ou oculto. Seu rosto é mascarado e cada olho decorado com três glifos. Um glifo maior marca a testa da máscara.",
	},
	"bishop": {
		dmText: "O oito de Glifos identifica um conspirador. Qualquer pessoa que inventar intrincados enredos ou desenvolver planos para manipular aqueles ao seu redor pode estar vinculada a esta carta. Não importa o motivo, essa pessoa tem uma vontade firme e implacável e uma adesão estrita a algum código de honra ou lealdade - seja de natureza boa ou má. Em seu aspecto vertical, indica a possibilidade de uma presença controladora por trás de uma série de eventos aparentemente não relacionados. Invertida, indica alguém de tendência leal e bom - ou qualquer pessoa que segue um código moral estrito.",
		playerText: "Um sacerdote real se senta orgulhosamente em um trono. Em seu colo está um pergaminho, que ele lê atentamente, embora sua mão esteja levantada e sua boca aberta em um gesto de comando. Acima, uma faixa está decorado com oito glifos. Dois lobos, um branco e um preto, estão nos calcanhares de cada lado de sua cadeira.",
	},
	"traitor": {
		dmText: "Também conhecido como o herege, o nove dos Glifos marca uma heresia aos deuses ou uma traição no mundo secular. Pode alertar sobre um paladino prestes a trair sua ordem e seu deus, um cônjuge trapaceiro ou um traidor fornecendo informações prejudiciais a um inimigo. O Traidor simboliza qualquer um que se volte deliberadamente contra aqueles que dependem dele ou acreditam nele. Invertida, o Traidor atua do lado do foco da leitura como amigo ou aliado.",
		playerText: "Uma figura esquiva, rosto escondido por um manto escuro com capuz, agacha-se atrás de um clérigo idoso. O clérigo está despejando água de uma jarra com joias em uma tigela. Obviamente realizando um ritual, ele não tem ideia de que o traidor está ali. O vilão furtivo está roubando uma estátua sagrada ornamentada que fica em uma mesa perto do sacerdote. A estátua, as vestes do sacerdote e o manto da figura escura são todos decorados com glifos, para um total de nove.",
	},
	"priest": {
		dmText: "(Alfred Timothy) A carta do patrono de todos os que seguem uma divindade, o dez dos Glifos indica adoradores ou adesão a um conjunto de regras e um código moral de comportamento, seja de boas ou más intenções. Esta carta representa servos religiosos, incluindo todos os clérigos, sacerdotes e druidas. Na vertical, simboliza aqueles que adoram deuses bons ou neutros. Invertida, denota uma divindade ou adoradores malignos.",
		playerText: "Um jovem sacerdote se ajoelha, com a cabeça baixa, diante de um lobo enorme. Ele está nu até a cintura. Acima dele está uma lua cheia; em torno dele uma matilha de lobos é reunida. Cada um dos oito lobos é marcado com um Glifo, assim como o tremoço gigante e o próprio sacerdote. Todas as cartas do baralho alto, ou Fortuna Magna, são poderosas e significativas para os Vistani. Essas 14 cartas têm especial importância para qualquer leitura e podem contradizer outras cartas ou mudar o significado de uma leitura profética em um instante. Quando uma leitura é marcada por um grande número da Fortuna Magna, os Vistani sabem que o destino realmente deseja comunicar algo de extrema necessidade ou significado. Quando todas as cartas em uma leitura são do baralho alto, a fortuna gerada pode mudar a forma dos reinos. (Veja a Tabela 4-1 para o Tarô e substitutos das cartas de jogar.)",
	},
	"darklord": {
		dmText: "Embora a existência real de Lordes Sombrios como tal seja desconhecida pelos habitantes de Ravenloft, esta carta significa alguém de grande poder. Pressentindo, simboliza uma pessoa no comando de outros, de natureza má e tirânica. Suas ações podem trazer uma grande derrota ou destruir a esperança, mas em qualquer caso será uma poderosa força das trevas no foco do escopo da leitura. Quando em pé, o Lorde Negro está em uma posição de força. Invertida, o Lorde Negro pode mostrar alguma fraqueza significativa.",
		playerText: "Coroado com um diadema de ferro pontiagudo, um homem com feições cruéis e imperiosas o encara. Ele se senta em um trono alto, uma mão segura um cetro, e a outra repousa sobre a cabeça de um nobre lobo parado ao seu lado. Um corvo se empoleira na ponta das costas do trono, enquanto uma cobra se enrosca em seu pulso e um rato se senta em seu colo. Os animais significam o poder do mestre das trevas sobre todas as cartas do baralho inferior.",
	},
	"artifact": {
		dmText: "Também conhecido como carta-chave, o artefato indica um objeto físico de suprema importância. Seja um tomo misterioso de rituais malignos ou um colar de ouro premiado, a última lembrança de um amor perdido, o Artefato representa algo de necessidade fundamental para o foco da leitura. Pode ser a derrota final de um rival há muito odiado ou a única arma capaz de destruir uma fera horrível. Invertida, indica um objeto falsamente importante, algo dado um significado desnecessário.",
		playerText: "Uma coroa com joias douradas brilha em um travesseiro de veludo. É decorado com símbolos para Glifos, Estrelas, Espadas e Moedas, indicando a prevalência da carta sobre todas as outras cartas fora do baralho alto.",
	},
	"horseman": {
		dmText: "A carta mais sombria e sinistra dentro do tarokka, Vistani frequentemente se recusa a continuar uma leitura se esta imagem aparecer. Um símbolo de morte ou perda irredimível completa, esta carta significa calamidade de dimensões terríveis. Invertida, O Cavaleiro indica um destino menos permanente, embora ainda preveja um acidente incapacitante ou uma grande derrota na batalha.",
		playerText: "Um cavalo esquelético se empina, seu cavaleiro com cara de crânio envolto em uma capa preta. O cavalo bufa fogo, iluminando a cena. O cavaleiro carrega uma foice malvada. Abaixo dos pés do cavalo está um cadáver sem cabeça. Atrás dele está um campo cheio de lápides.",
	},
	"executioner": {
		dmText: "A carta do Executor denota a exposição de um homem culpado. Pode indicar a captura de um assassino, a descoberta de um marido infiel pela esposa ou um ladrão pego em flagrante. Não importa a situação, a pessoa é definitivamente culpada. Invertida, a carta pressagia alguém sendo punido por um crime que não cometeu ou que foi acusado falsamente.",
		playerText: "Uma figura musculosa encapuzada em couro preto está na forca. Ao lado dela, balança a forca de um carrasco, pronto para sua próxima vítima.",
	},
	"ghost": {
		dmText: "Os Vistani dizem que passado, presente e futuro são um só. A carta do Fantasma indica tempos passados avançando para influenciar o presente e o futuro. Pode alertar sobre o retorno de uma maldição antiga, uma dívida antiga ou um inimigo esquecido. Em seu simbolismo mais literal, pode indicar um fantasma ou outro espírito incorpóreo. Invertida, a imagem da carta fala de uma influência positiva do passado. Um velho amigo pode retornar ou o foco da leitura pode redescobrir uma herança de família.",
		playerText: "Um velho ajoelhado, cabeça baixa, dentro de um mausoléu. Ao lado dele, um jovem guerreiro vestido com uma armadura de cavaleiro jaz em estado, em um esquife. O espírito do jovem se eleva do cadáver, uma mão se estende para confortar ou talvez ferir o velho ajoelhado abaixo.",
	},
	"broken-one": {
		dmText: "Esta carta simboliza aqueles que receberam formas horríveis ou aqueles com a mente ou o corpo quebrados por circunstâncias fora de seu controle. Algum poder destruiu, destruirá ou distorcerá algo vital pertencente ao foco da leitura. Também indicativo de seres sobrenaturais malignos, denota forças malévolas desconhecidas ou invisíveis. Também pode indicar alguém quebrado por um fracasso ou perdido em desespero. Invertida, o Violado denota a cura de algo ou alguém quebrado, talvez curando a loucura ou curando uma deformidade.",
		playerText: "A figura distorcida de um Violado está sentado sozinho, seu rosto torto sombreado, ombros curvados, obviamente perturbado. Em torno dele giram as Brumas.",
	},
	"raven": {
		dmText: "Uma das cartas mais positivas dentro da Fortuna Magna, o Corvo indica uma fonte de informação ou um aliado potencial. Também prediz forças benéficas vindo em auxílio de alguém, talvez até mesmo assistência mágica ou uma bênção sagrada, embora a fonte possa até ser uma fonte não reconhecida de talento no foco da própria leitura. Invertida, indica traição por uma fonte confiável de informações ou uma fraqueza inesperada.",
		playerText: "Um homem Vistani com cabeça de corvo está de pé, os braços abertos como asas como se para abraçar ou mostrar que não pretende fazer mal.",
	},
	"innocent": {
		dmText: "Também chamada de Vítima, esta carta indica uma pessoa pura ou indefesa de grande importância. Geralmente denotando alguém que não pode lidar com uma situação ou pode não estar ciente de um perigo significativo, o Inocente nem sempre está completamente desamparado, mas precisa de ajuda em alguma situação de risco de vida. Invertida, indica uma pessoa com forças ocultas. Talvez aquele cujos talentos possam ser importantes ou necessários para o foco da causa ou busca da leitura.",
		playerText: "Uma jovem gentil vestida de branco com longos cabelos dourados está sentada em um belo jardim. Uma mão está levantada, uma borboleta pousa em um dedo. Uma cobra se esconde na grama a seus pés.",
	},
	"marionette": {
		dmText: "O Fantoche simboliza um lacaio ou peão de alguém mais poderoso. Advertindo sobre lealdades divididas ou que um aliado ou amigo pode ser fortemente influenciado por outro, o Fantoche indica uma agenda oculta. A carta também pode indicar dominação mental ou posse por estranhos ou mortos-vivos incorpóreos. Invertida, o fantoche pode ser um ingênuo - não conhecendo os poderes que influenciam suas decisões, talvez até seus pensamentos.",
		playerText: "Uma marionete simples balança, cordas tensas se movem de um mestre invisível acima. A única decoração do fantoche é uma coroa de papel pousada levemente em sua cabeça.",
	},
	"donjon": {
		dmText: "Uma das cartas mais sinistras para os Vistani, o Cárcere também conhecida como masmorra, simboliza prisão, banimento ou isolamento. Seja o isolamento auto-imposto de um eremita ou de um prisioneiro trancado nas profundezas de uma masmorra, o Cárcere indica confinamento ou reclusão. Tal confinamento pode denotar alguém com a mente fechada ou o acorrentamento de um interno sozinho em uma cela úmida. Para os Vistani, pode denotar um Darkling, alguém banido de sua tribo por atos malignos. Invertida, significa liberdade, romper com os padrões de pensamento fechados, retornar à família e à tribo ou, literalmente, escapar da prisão.",
		playerText: "A silhueta de um homem olha pela janela de uma torre alta. A janela está gradeada e nenhuma outra luz aparece, exceto a luz fria da lua crescente no céu estrelado.",
	},
	"tempter": {
		dmText: "Simbolismo de todas as tentações físicas, a Tentação indica alguém cujos valores são comprometidos pelo desejo ou sedução. Geralmente, ceder à tentação é um ato subconsciente; no entanto, alguns podem escolher deliberadamente ceder, sucumbindo à paixão ou rendendo-se a uma necessidade obscura. Como um lobisomem precisa de carne e o vampiro de sangue, esta carta mostra desejo e necessidade ocultos. Sua imagem vertical denota alguém subconscientemente atraído pela tentação que o domina. Invertida, indica rendição deliberada.",
		playerText: "Uma mulher Vistani voluptuosa com cabelo longo e encaracolado faz uma pose sedutora, uma mão A Tentação ATentação estendida como se para atrair o observador para a frente, a outra para baixo ao longo de suas coxas. Ela está vestida com lenços de seda, um brinco de ouro e pouco mais.",
	},
	"mists": {
		dmText: "Para os Vistani, as Brumas estão misticamente conectadas ao Destino e vendo o futuro através do tarokka. Apenas os Vistani podem atravessar com segurança as Brumas. Apenas os Vistani têm a capacidade de interpretar as imagens de sua ferramenta profética. As Brumas alertam sobre o mistério e o inesperado. Um evento importante está destinado a acontecer algo que vem como uma surpresa, não importa o conhecimento prévio que alguém ganhe. Invertida, a carta indica uma jornada inesperada ou um caminho até então oculto que leva ao sucesso.",
		playerText: "Fracamente, as lâmpadas de uma carroça Vistani brilham através da névoa espessa, iluminando um caminho que leva adiante nas névoas. O destino é desconhecido.",
	},
	"beast": {
		dmText: "Evocando impulsos e paixões animais, a carta Bestial indica sua influência dentro de uma leitura. Frequentemente anunciando atos ou decisões precipitadas, denota o uso do instinto sobre a razão. Chamada de carta de patrono dos metamorfos, ela simboliza as criaturas de tendência boa e má, bem como outras que podem mudar sua forma, seja por meios alquímicos ou mágicos. Invertida, a carta é uma influência estabilizadora, denotando alguém ou algo que é estável e confiável.",
		playerText: "Um cervo está deitado no chão da floresta, com a garganta arrancada. Acima dele está um lobo ou talvez lobisomem, focinho ainda sangrento da matança, rosnando para um intruso invisível.",
	},
	"seer": {
		dmText: "Considerado um “curinga” pelos Vistani, o Herói é um aliado poderoso e inesperado. Simbólico de todos os que se esforçam para fazer o bem dentro dos reinos de Ravenloft, pode indicar um paladino virtuoso, um ladrão honesto ou qualquer pessoa trabalhando para derrotar as trevas e o mal. Esta carta indica um aliado influente, um amigo leal ou a mão dos deuses trabalhando em seu favor. Quando essa pessoa chega, a vitória é certa, embora possa não vir como esperado. Os Vistani também o chamam de Boa Sorte. Invertida, a má sorte é certa.",
		playerText: "O herói permanece confiante, a espada em punho para defender ou atacar conforme necessário. Os raios do sol brilham em seu cabelo dourado e sua cota de malha prateada. Uma cabeça de lobo, corvo, cobra e rato decoram seu escudo esquartejado. O Herói OHerói",
	},
};
