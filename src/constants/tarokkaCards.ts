import { TarokkaCard } from '@/types';

const tarokkaCards: TarokkaCard[] = [
	{
		id: 'back',
		name: 'Card Back',
		card: 'Back of card',
		deck: 'back',
		suit: null,
		aria: 'Back of card',
		description: 'Back of card',
		back: true,
		extension: '.png',
	},
	{
		id: 'swashbuckler',
		name: 'Swashbuckler',
		card: 'One of Coins',
		deck: 'common',
		suit: 'Coins',
		aria: 'Coins 01 Swashbuckler',
		description: 'Those who like money yet give it up freely; likable rogues and rapscallions',
		back: false,
		value: 1,
		prophecy: {
			dmText: 'The treasure lies in the crypt of Endorovich (chapter4, area K84, crypt 7).',
			location: 'Castle Ravenloft',
			playerText:
				'I see the skeleton of a deadly warrior, lying on a bed of stone flanked by gargoyles.',
		},
	},
	{
		id: 'philanthropist',
		name: 'Philanthropist',
		card: 'Two of Coins',
		deck: 'common',
		suit: 'Coins',
		aria: 'Coins 02 Philanthropist',
		description:
			'Charity and giving on a grand scale; those who use wealth to fight evil and sickness',
		back: false,
		value: 2,
		prophecy: {
			dmText: 'The treasure is in the nursery of the Abbey of Saint Markovia (chapter8, area S23).',
			location: 'Village of Kresk',
			playerText:
				'Look to a place where sickness and madness are bred. Where children once cried, the treasure lies still.',
		},
	},
	{
		id: 'trader',
		name: 'Trader',
		card: 'Three of Coins',
		deck: 'common',
		suit: 'Coins',
		aria: 'Coins 03 Trader',
		description: 'Commerce; smuggling and black markets; fair and equitable trades',
		back: false,
		value: 3,
		prophecy: {
			dmText:
				'The treasure lies in the glassblower’s workshop in the Wizard of Wines (chapter 12, area W10).',
			location: 'The Wizard of Wines',
			playerText: 'Look to the wizard of wines! In wood and sand the treasure hides.',
		},
	},
	{
		id: 'merchant',
		name: 'Merchant',
		card: 'Four of Coins',
		deck: 'common',
		suit: 'Coins',
		aria: 'Coins 04 Merchant',
		description:
			'A rare commodity or business opportunity; deceitful or dangerous business transactions',
		back: false,
		value: 4,
		prophecy: {
			dmText: 'The treasure lies in Castle Ravenloft’s wine cellar (chapter 4, area K63).',
			location: 'Castle Ravenloft',
			playerText: 'Seek a cask that once contained the finest wine, of which not a drop remains.',
		},
	},
	{
		id: 'guild-member',
		name: 'Guild Member',
		card: 'Five of Coins',
		deck: 'common',
		suit: 'Coins',
		aria: 'Coins 05 Guild Member',
		description: "Like-minded individuals joined together in a common goal; pride in one's work",
		back: false,
		value: 5,
		prophecy: {
			dmText: 'The treasure lies in the crypt of Artank Swilovich (chapter 4, area K84, crypt 5).',
			location: 'Castle Ravenloft',
			playerText: 'I see a room full of bottles. It is the tomb of a guild member.',
		},
	},
	{
		id: 'beggar',
		name: 'Beggar',
		card: 'Six of Coins',
		deck: 'common',
		suit: 'Coins',
		aria: 'Coins 06 Beggar',
		description: 'Sudden change in economic status or fortune',
		back: false,
		value: 6,
		prophecy: {
			dmText: 'The treasure is hidden in Kasimir’s hovel (chapter 5, area N9a).',
			location: 'Town of Vallaki',
			playerText:
				'A wounded elf has what you seek. He will part with the treasure to see his dark dreams fulfilled.',
		},
	},
	{
		id: 'thief',
		name: 'Thief',
		card: 'Seven of Coins',
		deck: 'common',
		suit: 'Coins',
		aria: 'Coins 07 Thief',
		description:
			'Those who steal or burgle; a loss of property, beauty, innocence, friendship, or reputation',
		back: false,
		value: 7,
		prophecy: {
			dmText:
				'The treasure is buried in the graveyard at the River Ivlis crossroads (chapter 2, area F).',
			location: 'River Ivlis Crossroads',
			playerText: 'What you seek lies at the crossroads of life and death, among the buried dead.',
		},
	},
	{
		id: 'tax-collector',
		name: 'Tax Collector',
		card: 'Eight of Coins',
		deck: 'common',
		suit: 'Coins',
		aria: 'Coins 08 Tax Collector',
		description: 'Corruption; honesty in an otherwise corrupt government or organization',
		back: false,
		value: 8,
		prophecy: {
			dmText:
				'The treasure is hidden in the Vistani treasure wagon (chapter 5, area N9i). "A missing child" refers to Arabelle (see chapter 2, area L).',
			location: 'Town of Vallaki',
			playerText:
				'The Vistani have what you seek. A missing child holds the key to the treasure’s release.',
		},
	},
	{
		id: 'miser',
		name: 'Miser',
		card: 'Nine of Coins',
		deck: 'common',
		suit: 'Coins',
		aria: 'Coins 09 Miser',
		description:
			'Hoarded wealth; those who are irreversibly unhappy or who think money is meaningless',
		back: false,
		value: 9,
		prophecy: {
			dmText: 'The treasure lies in Castle Ravenloft’s treasury (chapter 4, area K41).',
			location: 'Castle Ravenloft',
			playerText: 'Look for a fortress inside a fortress, in a place hidden behind fire.',
		},
	},
	{
		id: 'rogue',
		name: 'Rogue',
		card: 'Master of Coins',
		deck: 'common',
		suit: 'Coins',
		aria: 'Coins 10 Rogue',
		description:
			'Anyone for whom money is important; those who believe money is the key to their success',
		back: false,
		value: 10,
		prophecy: {
			dmText: 'The treasure is hidden in the attic of the Blue Water Inn (chapter 5, area N2q).',
			location: 'Town of Vallaki',
			playerText: 'I see a nest of ravens. There you will find the prize.',
		},
	},
	{
		id: 'monk',
		name: 'Monk',
		card: 'One of Glyphs',
		deck: 'common',
		suit: 'Glyphs',
		aria: 'Glyphs 01 Monk',
		description:
			'Serenity; inner strength and self-reliance; supreme confidence bereft of arrogance',
		back: false,
		value: 1,
		prophecy: {
			dmText:
				'The treasure lies in the main hall of the Abbey of Saint Markovia (chapter 8, area S13).',
			location: 'Village of Kresk',
			playerText: 'The treasure you seek is hidden behind the sun, in the house of a saint.',
		},
	},
	{
		id: 'missionary',
		name: 'Missionary',
		card: 'Two of Glyphs',
		deck: 'common',
		suit: 'Glyphs',
		aria: 'Glyphs 02 Missionary',
		description:
			'Those who spread wisdom and faith to others; warnings of the spread of fear and ignorance',
		back: false,
		value: 2,
		prophecy: {
			dmText:
				'The treasure is hidden inside on the scarecrows in the garden of the Abbey of Saint Markovia (chapter 8, area S9).',
			location: 'Village of Kresk',
			playerText:
				'I see a garden dusted with snow, watched over by a scarecrow with a sackcloth grin. Look not to the garden but to the guardian.',
		},
	},
	{
		id: 'healer',
		name: 'Healer',
		card: 'Three of Glyphs',
		deck: 'common',
		suit: 'Glyphs',
		aria: 'Glyphs 03 Healer',
		description:
			'Healing; a contagious illness, disease, or curse; those who practice the healing arts',
		back: false,
		value: 3,
		prophecy: {
			dmText:
				'The treasure lies beneath the gazebo in the Shrine of the White Sun (chapter 8, area S4).',
			location: 'Village of Kresk',
			playerText: 'Look to the west. Find a pool blessed by the light of the white sun.',
		},
	},
	{
		id: 'shepherd',
		name: 'Shepherd',
		card: 'Four of Glyphs',
		deck: 'common',
		suit: 'Glyphs',
		aria: 'Glyphs 04 Shepherd',
		description:
			'Those who protect others; one who bears a burden far too great to be shouldered alone',
		back: false,
		value: 4,
		prophecy: {
			dmText:
				'The treasure lies in the tomb of King Barov and Queen Ravenovia (chapter 4, area K88).',
			location: 'Castle Ravenloft',
			playerText: 'Find the mother - she who gave birth to evil.',
		},
	},
	{
		id: 'druid',
		name: 'Druid',
		card: 'Five of Glyphs',
		deck: 'common',
		suit: 'Glyphs',
		aria: 'Glyphs 05 Druid',
		description:
			'The ambivalence and cruelty of nature and those who feel drawn to it; inner turmoil',
		back: false,
		value: 5,
		prophecy: {
			dmText:
				'The treasure lies at the base of the Gulthias tree (chapter 14, area Y4). Any wereraven encountered in the wilderness can lead the characters to the location.',
			location: 'Yester Hill',
			playerText:
				'An evil tree grows atop a hill of graves where the ancient dead sleep. The ravens can help you find it. Look for the treasure there.',
		},
	},
	{
		id: 'anarchist',
		name: 'Anarchist',
		card: 'Six of Glyphs',
		deck: 'common',
		suit: 'Glyphs',
		aria: 'Glyphs 06 Anarchist',
		description: 'A fundamental change brought on by one whose beliefs are being put to the test',
		back: false,
		value: 6,
		prophecy: {
			dmText: 'The treasure lies in Castle Ravenloft’s hall of bones (chapter 4, area K67).',
			location: 'Castle Ravenloft',
			playerText:
				'I see walls of bones, the chandelier of bones, and table of bones - all that remains of enemies long forgotten.',
		},
	},
	{
		id: 'charlatan',
		name: 'Charlatan',
		card: 'Seven of Glyphs',
		deck: 'common',
		suit: 'Glyphs',
		aria: 'Glyphs 07 Charlatan',
		description: 'Liars; those who profess to believe one thing but actually believe another',
		back: false,
		value: 7,
		prophecy: {
			dmText: 'The treasure lies in the attic of Old Bonegrinder (chapter 6, areas O4).',
			location: 'Old Bonegrinder',
			playerText: 'I see a lonely mill on a precipice. The treasure lies within.',
		},
	},
	{
		id: 'bishop',
		name: 'Bishop',
		card: 'Eight of Glyphs',
		deck: 'common',
		suit: 'Glyphs',
		aria: 'Glyphs 08 Bishop',
		description: 'Strict adherence to a code or a belief; those who plot, plan, and scheme',
		back: false,
		value: 8,
		prophecy: {
			dmText:
				'The treasure lies in the sealed treasury of the Amber Temple (chapter 13, area X40).',
			location: 'Amber Temple',
			playerText: 'What you seek lies in a pile of treasure beyond a set of amber doors.',
		},
	},
	{
		id: 'traitor',
		name: 'Traitor',
		card: 'Nine of Glyphs',
		deck: 'common',
		suit: 'Glyphs',
		aria: 'Glyphs 09 Traitor',
		description: 'Betrayal by someone close and trusted; a weakening or loss of faith',
		back: false,
		value: 9,
		prophecy: {
			dmText:
				'The treasure is hidden in the master bedroom of the Wachterhaus (chapter 5, area N4o).',
			location: 'Town of Vallaki',
			playerText:
				'Look for a wealthy woman. A staunch ally of the devil, she keeps the treasure under lock and key, with the bones of an ancient enemy.',
		},
	},
	{
		id: 'priest',
		name: 'Priest',
		card: 'Master of Glyphs',
		deck: 'common',
		suit: 'Glyphs',
		aria: 'Glyphs 10 Priest',
		description: 'Enlightenment; those who follow a deity, a system of values, or a higher purpose',
		back: false,
		value: 10,
		prophecy: {
			dmText: 'The treasure lies in Castle Ravenloft’s chapel (chapter 4, area K15).',
			location: 'Castle Ravenloft',
			playerText:
				'You will find what you seek in the castle, amid the ruins of a place of supplication',
		},
	},
	{
		id: 'transmuter',
		name: 'Transmuter',
		card: 'One of Stars',
		deck: 'common',
		suit: 'Stars',
		aria: 'Stars 01 Transmuter',
		description:
			'A new discovery; the coming of unexpected things; unforeseen consequences and chaos',
		back: false,
		value: 1,
		prophecy: {
			dmText: 'The treasure lies in Castle Ravenloft’s north tower peak (chapter 4, area K60).',
			location: 'Castle Ravenloft',
			playerText: 'Go to a place of dizzying heights, where the stone itself is alive!',
		},
	},
	{
		id: 'diviner',
		name: 'Diviner',
		card: 'Two of Stars',
		deck: 'common',
		suit: 'Stars',
		aria: 'Stars 02 Diviner',
		description:
			'The pursuit of knowledge tempered by wisdom; truth and honesty; sages and prophecy',
		back: false,
		value: 2,
		prophecy: {
			dmText:
				'The treasure lies in Madam Eva’s encampment (chapter 2, area G). If she is the one performing the card reading, she says, "I think the treasure is under my very nose!"',
			location: 'Tser Pool Encampment',
			playerText: 'Look to the one who sees all. The treasure is hidden in her camp.',
		},
	},
	{
		id: 'enchanter',
		name: 'Enchanter',
		card: 'Three of Stars',
		deck: 'common',
		suit: 'Stars',
		aria: 'Stars 03 Enchanter',
		description: 'Inner turmoil that comes from confusion, fear of failure, or false information',
		back: false,
		value: 3,
		prophecy: {
			dmText:
				'The treasure lies under Marina’s monument in Berez (chapter 10, area U5). "The master of the marsh" refers to Burgomaster Lazlo Ulrich (area U2), whose ghost can point the characters toward the monument.',
			location: 'Ruins of Berez',
			playerText:
				'I see a kneeling woman - a rose of great beauty plucked too soon. The master of the marsh knows of whom I speak.',
		},
	},
	{
		id: 'abjurer',
		name: 'Abjurer',
		card: 'Four of Stars',
		deck: 'common',
		suit: 'Stars',
		aria: 'Stars 04 Abjurer',
		description:
			'Those guided by logic and reasoning; warns of an overlooked clue or piece of information',
		back: false,
		value: 4,
		prophecy: {
			dmText:
				'The treasure lies in the beacon of Argynvostholt (chapter 7, area Q53). "Great stone dragon" refers to the statue in area Q1.',
			location: 'Argynvostholt',
			playerText: 'I see a fallen house guarded by a great stone dragon. Look to the highest peak.',
		},
	},
	{
		id: 'elementalist',
		name: 'Elementalist',
		card: 'Five of Stars',
		deck: 'common',
		suit: 'Stars',
		aria: 'Stars 05 Elementalist',
		description:
			'The triumph of nature over civilization; natural disasters and bountiful harvests',
		back: false,
		value: 5,
		prophecy: {
			dmText:
				'The treasure is inside a model of Castle Ravenloft in the Amber Temple (chapter 13, area X20).',
			location: 'Amber Temple',
			playerText:
				'The treasure is hidden in a small castle beneath a mountain, guarded by amber giants.',
		},
	},
	{
		id: 'evoker',
		name: 'Evoker',
		card: 'Six of Stars',
		deck: 'common',
		suit: 'Stars',
		aria: 'Stars 06 Evoker',
		description:
			"Magical or supernatural power that can't be controlled; magic for destructive ends",
		back: false,
		value: 6,
		prophecy: {
			dmText:
				'The treasure is hidden in the crypt of Gralmore Nimblenobs (chapter 4, area K84, crypt 37).',
			location: 'Castle Ravenloft',
			playerText: 'Search for the crypt of the wizard ordinaire. His staff is the key.',
		},
	},
	{
		id: 'illusionist',
		name: 'Illusionist',
		card: 'Seven of Stars',
		deck: 'common',
		suit: 'Stars',
		aria: 'Stars 07 Illusionist',
		description:
			'Lies and deceit; grand conspiracies; secret societies; the presence of a dupe or a saboteur',
		back: false,
		value: 7,
		prophecy: {
			dmText: 'The treasure lies in Rictavio’s carnival wagon (chapter 5, area N5).',
			location: 'Town of Vallaki',
			playerText:
				'A man is not what he seems. He comes here in a carnival wagon. Therein lies what you seek.',
		},
	},
	{
		id: 'necromancer',
		name: 'Necromancer',
		card: 'Eight of Stars',
		deck: 'common',
		suit: 'Stars',
		aria: 'Stars 08 Necromancer',
		description: 'Unnatural events and unhealthy obsessions; those who follow a destructive path',
		back: false,
		value: 8,
		prophecy: {
			dmText: 'The treasure lies in Castle Ravenloft’s study (chapter 4, area K37).',
			location: 'Castle Ravenloft',
			playerText: 'A woman hangs above a roaring fire. Find her and you will find the treasure.',
		},
	},
	{
		id: 'conjurer',
		name: 'Conjurer',
		card: 'Nine of Stars',
		deck: 'common',
		suit: 'Stars',
		aria: 'Stars 09 Conjurer',
		description:
			'The coming of an unexpected supernatural threat; those who think of themselves as gods',
		back: false,
		value: 9,
		prophecy: {
			dmText: 'The treasure is in Baba Lysaga’s hut (chapter 10, area U3).',
			location: 'Ruins of Berez',
			playerText:
				'I see a dead village, drowned by a river, ruled by one who has brought great evil into the world.',
		},
	},
	{
		id: 'wizard',
		name: 'Wizard',
		card: 'Master of Stars',
		deck: 'common',
		suit: 'Stars',
		aria: 'Stars 10 Wizard',
		description:
			'Mystery and riddles; the unknown; those who crave magical power and great knowledge',
		back: false,
		value: 10,
		prophecy: {
			dmText: 'The treasure lies on the top floor of Van Richten’s Tower (chapter 11, area V7).',
			location: 'Town of Vallaki',
			playerText:
				'Look for a wizard’s tower on a lake. Let the wizard’s name and servant guide you to that which you seek.',
		},
	},
	{
		id: 'avenger',
		name: 'Avenger',
		card: 'One of Swords',
		deck: 'common',
		suit: 'Swords',
		aria: 'Swords 01 Avenger',
		description:
			'Justice and revenge for great wrongs; those on a quest to rid the world of great evil',
		back: false,
		value: 1,
		prophecy: {
			dmText:
				'The treasure is in the possession of Vladimir Horngaard in Argynvostholt (chapter 7, area Q36).',
			location: 'Argynvostholt',
			playerText: 'The treasure lies in a dragon’s house, in hands once clean and now corrupted.',
		},
	},
	{
		id: 'paladin',
		name: 'Paladin',
		card: 'Two of Swords',
		deck: 'common',
		suit: 'Swords',
		aria: 'Swords 02 Paladin',
		description: 'Just and noble warriors; those who live by a code of honor and integrity',
		back: false,
		value: 2,
		prophecy: {
			dmText: 'The treasure lies in Sergei’s tomb (chapter 4, area K85).',
			location: 'Castle Ravenloft',
			playerText:
				'I see a sleeping prince, a servant of the light and the brother of darkness. The treasure lies with him.',
		},
	},
	{
		id: 'soldier',
		name: 'Soldier',
		card: 'Three of Swords',
		deck: 'common',
		suit: 'Swords',
		aria: 'Swords 03 Soldier',
		description: 'War and sacrifice; the stamina to endure great hardship',
		back: false,
		value: 3,
		prophecy: {
			dmText:
				'The treasure lies on the rooftop of the Tsolenka Pass guard tower (chapter 9, area T6).',
			location: 'Tsolenka Pass',
			playerText: 'Go to the mountains. Climb the white tower guarded by golden knights.',
		},
	},
	{
		id: 'mercenary',
		name: 'Mercenary',
		card: 'Four of Swords',
		deck: 'common',
		suit: 'Swords',
		aria: 'Swords 04 Mercenary',
		description: 'Inner strength and fortitude; those who fight for power or wealth',
		back: false,
		value: 4,
		prophecy: {
			dmText: 'The treasure lies in a crypt in Castle Ravenloft (chapter 4, area K84, crypt 31).',
			location: 'Castle Ravenloft',
			playerText: 'The thing you seek lies with the dead, under mountains of gold coins.',
		},
	},
	{
		id: 'myrmidon',
		name: 'Myrmidon',
		card: 'Five of Swords',
		deck: 'common',
		suit: 'Swords',
		aria: 'Swords 05 Myrmidon',
		description:
			'Great heroes; a sudden reversal of fate; the triumph of the underdog over a mighty enemy',
		back: false,
		value: 5,
		prophecy: {
			dmText:
				'The treasure lies in the shrine of the Mother Night in the werewolf den (chapter 15, area Z7).',
			location: 'Werewolf Den',
			playerText:
				'Look for a den of wolves in the hills overlooking a mountain lake. The treasure belongs to Mother Night.',
		},
	},
	{
		id: 'berserker',
		name: 'Berserker',
		card: 'Six of Swords',
		deck: 'common',
		suit: 'Swords',
		aria: 'Swords 06 Berserker',
		description: 'The brutal and barbaric side of warfare; bloodlust; those with a bestial nature',
		back: false,
		value: 6,
		prophecy: {
			dmText:
				'The treasure lies in the crypt of General Kroval "Mad Dog" Grislek (chapter 4, area K84, crypt 38).',
			location: 'Castle Ravenloft',
			playerText:
				'Find the Mad Dog’s crypt. The treasure lies within, beneath the blackened bones.',
		},
	},
	{
		id: 'hooded-one',
		name: 'Hooded One',
		card: 'Seven of Swords',
		deck: 'common',
		suit: 'Swords',
		aria: 'Swords 07 Hooded One',
		description: 'Bigotry, intolerance, and xenophobia; a mysterious presence or newcomer',
		back: false,
		value: 7,
		prophecy: {
			dmText:
				'The treasure inside the head of a giant statue in the Amber Temple (chapter 13, area X5a).',
			location: 'Amber Temple',
			playerText:
				'I see a faceless god. He awaits you at the end of a long and winding road, deep in the mountains.',
		},
	},
	{
		id: 'dictator',
		name: 'Dictator',
		card: 'Eight of Swords',
		deck: 'common',
		suit: 'Swords',
		aria: 'Swords 08 Dictator',
		description:
			'All that is wrong with government and leadership; those who rule through fear and violence',
		back: false,
		value: 8,
		prophecy: {
			dmText: 'The treasure lies in Castle Ravenloft’s audience hall (chapter 4, area K25).',
			location: 'Castle Ravenloft',
			playerText: 'I see a throne fit for a king.',
		},
	},
	{
		id: 'torturer',
		name: 'Torturer',
		card: 'Nine of Swords',
		deck: 'common',
		suit: 'Swords',
		aria: 'Swords 09 Torturer',
		description:
			'The coming of suffering or merciless cruelty; one who is irredeemably evil or sadistic',
		back: false,
		value: 9,
		prophecy: {
			dmText:
				'The treasure is in the attic of the burgomaster’s mansion in Vallaki (chapter 5, area N3s).',
			location: 'Town of Vallaki',
			playerText:
				'There is a town where all is not well. There you will find a house of corruption, and within, a dark room full of still ghosts.',
		},
	},
	{
		id: 'warrior',
		name: 'Warrior',
		card: 'Master of Swords',
		deck: 'common',
		suit: 'Swords',
		aria: 'Swords 10 Warrior',
		description:
			'Strength and force personified; violence; those who use force to accomplish their goals',
		back: false,
		value: 10,
		prophecy: {
			dmText: 'The treasure lies in Strahd’s tomb (chapter 4, area K86).',
			location: 'Castle Ravenloft',
			playerText:
				'That which you seek lies in the womb of darkness, the devil’s "lair": the one place to which he must return.',
		},
	},
	{
		id: 'artifact',
		name: 'Artifact',
		card: 'The Artifact',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Artifact',
		description:
			'The importance of some physical object that must be obtained, protected, or destroyed at all costs',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Rictavio',
					playerText: 'Look for an entertaining man with a monkey. This man is more than he seems.',
					dmText:
						'This card refers to Rictavio (appendix D), who can be found at the Blue Water Inn, in Vallaki (chapter 5, area N2). Normally reluctant to accompany the characters, Rictavio changes his tune if the characters tell him about the card reading. He sheds his disguise and introduces himself as Dr. Rudolf van Richten.\n\nThe characters might think that Gadof Blinsky, the toymaker of Vallaki (area N7), is the figure they seek, because he has a pet monkey. If the speak to him about the possibility, Blinsky jokes that he and the monkey are "old friends," but if the characters ask him to come with them to fight Strahd, he politely declines. If the characters tell him about the tarokka reading, Blinsky admits that he acquired the monkey from a half-elf carnival ringmaster named Rictavio.',
				},
			],
			strahd: {
				playerText: 'He lurks in the darkness where the morning light once shone - a sacred place.',
				dmText: 'Strahd faces the characters in the chapel (area K15).',
			},
		},
	},
	{
		id: 'beast',
		name: 'Beast',
		card: 'The Beast',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Beast',
		description:
			'Great rage or passion; something bestial or malevolent hiding in plain sight or lurking just below the surface',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Zuleika Toranescu',
					playerText:
						'A werewolf holds a secret hatred for your enemy. Use her hatred to your advantage.',
					dmText:
						'This card refers to the werewolf Zuleika Toranescu (chapter 15, area Z7). She will accompany the characters if they promise to avenge her mate, Emil, by killing the leader of her pack, Kiril Stoyanovich.',
				},
			],
			strahd: {
				playerText: 'The beast sits on his dark throne.',
				dmText: 'Strahd faces the characters in the audience hall (area K25).',
			},
		},
	},
	{
		id: 'broken-one',
		name: 'Broken One',
		card: 'The Broken One',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Broken One',
		description:
			'Defeat, failure, and despair; the loss of something or someone important, without which one feels incomplete',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Mad Mage',
					playerText:
						'Your greatest ally will be a wizard. His mind is broken, but his spells are strong.',
					dmText: 'This card refers to the Mad Mage of Mount Baratok (chapter 2, area M).',
				},
				{
					ally: 'Donavich',
					playerText:
						'I see a man of faith whose sanity hangs by a thread. He has lost someone close to him.',
					dmText:
						'This card refers to Donavich, the priest in the village of Barovia (chapter 3, area E5). He will not accompany the characters until his son Doru, is dead and buried.',
				},
			],
			strahd: {
				playerText: 'He haunts the tomb of the man he envied above all.',
				dmText: 'Strahd faces the characters in Sergei’s tomb (area K86).',
			},
		},
	},
	{
		id: 'darklord',
		name: 'Darklord',
		card: 'The Darklord',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Darklord',
		description:
			'A single, powerful individual of an evil nature, one whose goals have enormous and far-reaching consequences',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'No one',
					playerText: 'Ah, the worst of all "truths": You must face the evil of this land alone!',
					dmText: 'There is no NPC who can inspire the characters.',
				},
			],
			strahd: {
				playerText: 'He lurks in the depths of darkness, in the one place to which he must return.',
				dmText: 'Strahd faces the characters in his tomb (area K86).',
			},
		},
	},
	{
		id: 'donjon',
		name: 'Donjon',
		card: 'The Donjon',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Donjon',
		description:
			"Isolation and imprisonment; being so conservative in thinking as to be a prisoner of one's own beliefs",
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Victor Vallakovich',
					playerText:
						'Search for a troubled young man surrounded by wealth and madness. His home is his prison',
					dmText:
						'This card refers to Victor Vallakovich (chapter 5, area N3t). Realizing that the characters are the key to his salvation, he enthusiastically leaves home and accompanies them to Castle Ravenloft.',
				},
				{
					ally: 'Stella Wachter',
					playerText:
						'Find a girl driven to insanity, locked in the heart of her dead father’s house. Curing her madness is key to your success.',
					dmText:
						'This card refers to Stella Wachter (chapter 5, area N4n). She grants the party no benefit unless her madness is cured. With her wits restored, Stella is happy to join the party and leave her rotten family behind.',
				},
			],
			strahd: {
				playerText: 'He lurks in a hall of bones, in the dark pits of his castle.',
				dmText: 'Strahd faces the characters in the hall of bones (area K67).',
			},
		},
	},
	{
		id: 'executioner',
		name: 'Executioner',
		card: 'The Executioner',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Executioner',
		description:
			'The imminent death of one rightly or wrongly convicted of a crime; false accusations and unjust prosecution',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Ismark Kolyanovich',
					playerText:
						'Seek out the brother of the devil’s bride. They call him "the lesser," but he has a powerful soul',
					dmText:
						'This card refers to Ismark Kolyanovich (chapter 3, area E2). Ismark won’t accompany the characters to Castle Ravenloft until he knows that his sister, Ireena Kolyana, is safe',
				},
			],
			strahd: {
				playerText:
					'I see a dark figure on a balcony, looking down upon this tortured land with a twisted smile.',
				dmText: 'Strahd faces the characters at the overlook (area K6).',
			},
		},
	},
	{
		id: 'ghost',
		name: 'Ghost',
		card: 'The Ghost',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Ghost',
		description:
			'The looming past; the return of an old enemy or the discovery of a secret buried long ago',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Sir Godfrey Gwilym',
					playerText:
						'I see a fallen paladin of the fallen order of knights. He lingers like a ghost in a dead dragon’s lair.',
					dmText:
						'This card refers to the revenant Sir Godfrey Gwilym (chapter 7, area Q37). Although initially unwilling to accompany the characters, he will do so if the characters convince him that the honor of the Order of the Silver Dragon can be restored with his help. Doing this requires a successful DC 15 Charisma (Persuasion) check.',
				},
				{
					ally: 'Sir Klutz',
					playerText:
						'Stir the spirit of the clumsy knight whose crypt lies deep within the castle.',
					dmText:
						'This card refers to Sir Klutz the phantom warrior (chapter 4, area K84, crypt 33). If Sir Klutz is Strahd’s enemy, then the phantom warrior disappears not after seven days, but only after he or Strahd is reduced to 0 hit points.',
				},
			],
			strahd: {
				playerText: 'Look to the father’s tomb.',
				dmText:
					'Strahd faces the characters in the tomb of King Barov and Queen Ravenovia (area K88).',
			},
		},
	},
	{
		id: 'horseman',
		name: 'Horseman',
		card: 'The Horseman',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Horseman',
		description:
			'Death; disaster in the form of the loss of wealth or property, a horrible defeat, or the end of a bloodline',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Nikolai Wachter',
					playerText:
						'I see a dead man of noble birth, guarded by his widow. Return to life the dead man’s corpse, and he will be your staunch ally.',
					dmText:
						'This card refers to Nikolai Wachter the elder, who is dead (chapter 5, area N4o). If the characters cast a raise dead spell or a resurrection spell on his preserved corpse, Nikokai (LN male human noble) agrees to help the characters once he feels well enough, despite his wife’s protests. Although his family has long supported Strahd, Nikolai came to realize toward the end of his life that Strahd must be destroyed to save Barovia.\n\nIf the characters don’t have the means to raise Nikolai from the dead, Rictavio (appendix D) gives them a spell scroll of raise dead if he learns of their need. If they’re staying at the Blue Water Inn, he leaves the scroll in one of their rooms.',
				},
				{
					ally: 'Arrigal',
					playerText:
						'A man of death named Arrigal will forsake his dark lord to serve your cause. Beware! He has a rotten soul.',
					dmText:
						'This card refers to the Vistani assassin Arrigal (chapter 5, area N9c). If the characters mention this card reading to him he accepts his fate and accompanies them. If the characters succeed in defeating Strahd, Arrigal betrays and attacks them, believing that he is destined to become Barovia’s new lord.',
				},
			],
			strahd: {
				playerText: 'He lurks in the one place to which he must return - a place of death.',
				dmText: 'Strahd faces the characters in his tomb (area K86).',
			},
		},
	},
	{
		id: 'innocent',
		name: 'Innocent',
		card: 'The Innocent',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Innocent',
		description:
			'A being of great importance whose life is in danger (who might be helpless or simply unaware of the peril)',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Parriwimple',
					playerText:
						'I see a young man with a kind heart. A mother’s boy! He is strong in body but weak of mind. Seek him out in the village of Barovia.',
					dmText:
						'This card refers to Parriwimple (see chapter 3, area E1). Although he’s a simpleton, he won’t travel to Castle Ravenloft without good cause. Characters can manipulate him into going by preying on his good heart. For instance, he might go there to help rescue missing Barovians, or to save the life of Ireena Kolyana, who is very beautiful. The characters must somehow deal with Bildrath, Parriwimple’s employer, who won’t let the foolish boy go to the castle for any reason.',
				},
				{
					ally: 'Ireena Kolyana',
					playerText: 'Evil’s bride is the one you seek!',
					dmText:
						'This card refers to Ireena Kolyana (chapter 3, area E4). Her brother Ismark, opposes the idea of Ireena’s being taken to Castle Ravenloft, but he insists on going there once the characters tell her about the card reading. Ireena won’t accompany the characters however, until Kolyan Indirovich’s body is laid to rest in the cemetery.',
				},
			],
			strahd: {
				playerText:
					'He dwells with the one whose blood sealed his doom, a brother of light snuffed out too soon.',
				dmText: 'Strahd faces the characters in Sergei’s tomb (area K85).',
			},
		},
	},
	{
		id: 'marionette',
		name: 'Marionette',
		card: 'The Marionette',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Marionette',
		description:
			'The presence of a spy or a minion of some greater power; an encounter with a puppet or an underling',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Pidlwick II',
					playerText:
						'What horror is this? I see a man made by a man. Ageless and alone, it haunts the towers of the castle.',
					dmText: 'This card refers to Pidlwick II (chapter 4, area K59 & appendix D)',
				},
				{
					ally: 'Cloven Belview',
					playerText:
						'Look for a man of music, a man with two heads. He lives in a place of great hunger and sorrow.',
					dmText:
						'This card refers to Cloven Belview (chapter 8, area S17), the two-headed mongrelfolk. Clovin serves the Abbot out of fear and perverse sense of loyalty. His job is to deliver food to the other mongrelfolk, whom he abhors. If abbot still lives, Clovin doesn’t want to earn the master’s ire by attempting to leave, and he refuses to accompany the characters. But if the Abbot dies, Clovin doesn’t have any reason to remain in the abbey, so he’s willing to come along if he is bribed with wine. Clovin provides no benefit to the party without his Viol.',
				},
			],
			strahd: {
				playerText: 'Look to great heights. Find the beating heart of the castle. He waits nearby.',
				dmText: 'Strahd faces the characters in the north tower peak (area K60).',
			},
		},
	},
	{
		id: 'mists',
		name: 'Mists',
		card: 'The Mists',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Mists',
		description:
			"Something unexpected or mysterious that can't be avoided; a great quest or journey that will try one's spirit",
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Ezmerelda d’Avenir',
					playerText:
						'A vistana wanders this land alone, searching for her mentor. She does not stay in one place for long. Seek her out at Saint Markovia’s abbey, near the mists.',
					dmText:
						'This card refers to Ezmerelda d’Avenir (appendix D). She can be found in the Abbey of Saint Markovia (see chapter 8, area S19) as well as several other locations throughout Barovia.',
				},
			],
			strahd: {
				playerText: 'The cards can’t see where the evil lurks. The mists obscure all.',
				dmText:
					'This card offers no clue about where the final showdown with Strahd will occur. It can happen anywhere you like in Castle Ravenloft. Alternatively, Madam Eva tells the characters to return to her after at least three days, and she will consult the cards again for them, but only to discern the location of their enemy.',
			},
		},
	},
	{
		id: 'raven',
		name: 'Raven',
		card: 'The Raven',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Raven',
		description:
			'A hidden source of information; a fortunate turn of events; a secret potential for good',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Davian Martikov',
					playerText:
						'Find the leader of the feathered ones who live among the vines. Though old, he has one more fight left in him.',
					dmText:
						'This card refers to Davian Martikov (chapter 12, "The Wizard of the Wines"). The old wereraven, realizing that he has a chance to end Strahd’s tyranny, leaves his vineyard and winery in the capable hands of his sons, Adrian and Elvir. But before he travels to Castle Ravenloft to face Strahd, Davian insists on reconciling with his third son, Urwin Martikov (chapter 5, area N2).',
				},
			],
			strahd: {
				playerText: 'Look to the mother’s tomb.',
				dmText:
					'Strahd faces the characters in the tomb of King Barov and Queen Ravenovia (area K88).',
			},
		},
	},
	{
		id: 'seer',
		name: 'Seer',
		card: 'The Seer',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Seer',
		description:
			'Inspiration and keen intellect; a future event, the outcome of which will hinge on a clever mind',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Kasimir Velikov',
					playerText:
						'Look for a dusk elf living among the Vistani. He has suffered a great loss and is haunted by dark dreams. Help him, and he will help you in return.',
					dmText:
						'This card refers to Kasimir Velikov (chapter 5, area N9a). The dusk elf accompanies the characters to Castle Ravenloft only after they lead him to the Amber Temple and find the means to resurrect his dead sister, Patrina Velikovna.',
				},
			],
			strahd: {
				playerText:
					'He waits for you in a place of wisdom, warmth, and despair. Great secrets are there.',
				dmText: 'Strahd faces the characters in the study (area K37).',
			},
		},
	},
	{
		id: 'tempter',
		name: 'Tempter',
		card: 'The Tempter',
		deck: 'high',
		suit: 'High Deck',
		aria: 'High Deck Tempter',
		description:
			'One who has been compromised or led astray by temptation or foolishness; one who tempts others for evil ends',
		back: false,
		prophecy: {
			allies: [
				{
					ally: 'Arabelle',
					playerText:
						'I see a child - a Vistana. You must hurry, for her fate hangs in the balance. Find her at the lake!',
					dmText:
						'This card refers to Arabelle (chapter 2, area L). She gladly joins the party. But if she returns to her camp (chapter 5, area N9), her father Luvash, refuses to let her leave.',
				},
				{
					ally: 'Vasilka',
					playerText:
						'I hear a wedding bell, or perhaps a death knell. It calls the to a mountainside abbey, wherein you will find a woman who is more than the sum of her parts.',
					dmText: 'This card refers to Vasilka, the flesh golem (chapter 8, area S13).',
				},
			],
			strahd: {
				playerText:
					'I see a secret place - a vault of temptation hidden behind a woman of great beauty. The evil waits atop his tower of treasure.',
				dmText:
					'Strahd confronts the characters in the treasury (area K41). "A woman of great beauty" refers to the portrait of Tatyana hanging in the castle’s study (area K37), which contains a secret door that leads to the treasury.',
			},
		},
	},
];

type CardTranslation = Record<string, unknown>;

const ptBRCardTranslations: Record<string, CardTranslation> = {
	back: {
		name: 'Verso da Carta',
		card: 'Verso da carta',
		aria: 'Verso da carta',
		description: 'Verso da carta',
	},
	swashbuckler: {
		name: 'Espadachim',
		card: 'Um de Moedas',
		aria: 'Moedas 01 Espadachim',
		description:
			'Pessoas que gostam de dinheiro, mas abrem mão dele livremente; trapaceiros e malandros simpáticos',
		prophecy: {
			dmText: 'O tesouro está na cripta de Endorovich (capítulo 4, área K84, cripta 7).',
			location: 'Castelo Ravenloft',
			playerText:
				'Vejo o esqueleto de um guerreiro mortal, deitado em uma cama de pedra ladeada por gárgulas.',
		},
	},
	philanthropist: {
		name: 'Filantropo',
		card: 'Dois de Moedas',
		aria: 'Moedas 02 Filantropo',
		description:
			'Caridade e generosidade em grande escala; aqueles que usam riqueza para combater o mal e a doença',
		prophecy: {
			dmText:
				'O tesouro está no berçário da Abadia de Santa Markovia (capítulo 8, área S23).',
			location: 'Vila de Krezk',
			playerText:
				'Procurem um lugar onde doença e loucura são criadas. Onde crianças choraram um dia, o tesouro ainda repousa.',
		},
	},
	trader: {
		name: 'Comerciante',
		card: 'Três de Moedas',
		aria: 'Moedas 03 Comerciante',
		description: 'Comércio; contrabando e mercados clandestinos; trocas justas e equilibradas',
		prophecy: {
			dmText:
				'O tesouro está na oficina do soprador de vidro no Mago dos Vinhos (capítulo 12, área W10).',
			location: 'O Mago dos Vinhos',
			playerText: 'Procurem o mago dos vinhos! Em madeira e areia, o tesouro se esconde.',
		},
	},
	merchant: {
		name: 'Mercador',
		card: 'Quatro de Moedas',
		aria: 'Moedas 04 Mercador',
		description:
			'Uma mercadoria rara ou oportunidade de negócio; transações comerciais enganosas ou perigosas',
		prophecy: {
			dmText: 'O tesouro está na adega do Castelo Ravenloft (capítulo 4, área K63).',
			location: 'Castelo Ravenloft',
			playerText:
				'Procurem um barril que um dia conteve o melhor vinho, do qual nem uma gota restou.',
		},
	},
	'guild-member': {
		name: 'Membro de Guilda',
		card: 'Cinco de Moedas',
		aria: 'Moedas 05 Membro de Guilda',
		description:
			'Indivíduos de ideias semelhantes unidos por um objetivo comum; orgulho no próprio trabalho',
		prophecy: {
			dmText: 'O tesouro está na cripta de Artank Swilovich (capítulo 4, área K84, cripta 5).',
			location: 'Castelo Ravenloft',
			playerText: 'Vejo uma sala cheia de garrafas. É a tumba de um membro de guilda.',
		},
	},
	beggar: {
		name: 'Mendigo',
		card: 'Seis de Moedas',
		aria: 'Moedas 06 Mendigo',
		description: 'Mudança súbita de condição econômica ou de fortuna',
		prophecy: {
			dmText: 'O tesouro está escondido no casebre de Kasimir (capítulo 5, área N9a).',
			location: 'Cidade de Vallaki',
			playerText:
				'Um elfo ferido tem o que vocês procuram. Ele abrirá mão do tesouro para ver seus sonhos sombrios cumpridos.',
		},
	},
	thief: {
		name: 'Ladrão',
		card: 'Sete de Moedas',
		aria: 'Moedas 07 Ladrão',
		description:
			'Aqueles que roubam ou furtam; perda de propriedade, beleza, inocência, amizade ou reputação',
		prophecy: {
			dmText:
				'O tesouro está enterrado no cemitério da encruzilhada do Rio Ivlis (capítulo 2, área F).',
			location: 'Encruzilhada do Rio Ivlis',
			playerText:
				'O que vocês procuram está na encruzilhada entre a vida e a morte, entre os mortos sepultados.',
		},
	},
	'tax-collector': {
		name: 'Coletor de Impostos',
		card: 'Oito de Moedas',
		aria: 'Moedas 08 Coletor de Impostos',
		description: 'Corrupção; honestidade em um governo ou organização corrupta',
		prophecy: {
			dmText:
				'O tesouro está escondido no vagão de tesouros dos Vistani (capítulo 5, área N9i). "Uma criança desaparecida" refere-se a Arabelle (veja o capítulo 2, área L).',
			location: 'Cidade de Vallaki',
			playerText:
				'Os Vistani têm o que vocês procuram. Uma criança desaparecida guarda a chave para libertar o tesouro.',
		},
	},
	miser: {
		name: 'Avarento',
		card: 'Nove de Moedas',
		aria: 'Moedas 09 Avarento',
		description:
			'Riqueza acumulada; aqueles que são irremediavelmente infelizes ou acreditam que dinheiro não tem valor',
		prophecy: {
			dmText: 'O tesouro está na tesouraria do Castelo Ravenloft (capítulo 4, área K41).',
			location: 'Castelo Ravenloft',
			playerText: 'Procurem uma fortaleza dentro de uma fortaleza, em um lugar oculto atrás do fogo.',
		},
	},
	rogue: {
		name: 'Ladino',
		card: 'Mestre de Moedas',
		aria: 'Moedas 10 Ladino',
		description:
			'Qualquer pessoa para quem o dinheiro é importante; aqueles que acreditam que dinheiro é a chave do sucesso',
		prophecy: {
			dmText: 'O tesouro está escondido no sótão da Estalagem Água Azul (capítulo 5, área N2q).',
			location: 'Cidade de Vallaki',
			playerText: 'Vejo um ninho de corvos. Lá vocês encontrarão o prêmio.',
		},
	},
	monk: {
		name: 'Monge',
		card: 'Um de Glifos',
		aria: 'Glifos 01 Monge',
		description:
			'Serenidade; força interior e autossuficiência; confiança suprema sem arrogância',
		prophecy: {
			dmText:
				'O tesouro está no salão principal da Abadia de Santa Markovia (capítulo 8, área S13).',
			location: 'Vila de Krezk',
			playerText: 'O tesouro que vocês procuram está escondido atrás do sol, na casa de uma santa.',
		},
	},
	missionary: {
		name: 'Missionário',
		card: 'Dois de Glifos',
		aria: 'Glifos 02 Missionário',
		description:
			'Aqueles que espalham sabedoria e fé; alertas sobre a propagação do medo e da ignorância',
		prophecy: {
			dmText:
				'O tesouro está escondido dentro de um dos espantalhos no jardim da Abadia de Santa Markovia (capítulo 8, área S9).',
			location: 'Vila de Krezk',
			playerText:
				'Vejo um jardim polvilhado de neve, vigiado por um espantalho com um sorriso de pano. Não olhem para o jardim, mas para o guardião.',
		},
	},
	healer: {
		name: 'Curandeiro',
		card: 'Três de Glifos',
		aria: 'Glifos 03 Curandeiro',
		description:
			'Cura; uma enfermidade contagiosa, doença ou maldição; aqueles que praticam as artes da cura',
		prophecy: {
			dmText:
				'O tesouro está sob o gazebo no Santuário do Sol Branco (capítulo 8, área S4).',
			location: 'Vila de Krezk',
			playerText: 'Olhem para o oeste. Encontrem uma piscina abençoada pela luz do sol branco.',
		},
	},
	shepherd: {
		name: 'Pastor',
		card: 'Quatro de Glifos',
		aria: 'Glifos 04 Pastor',
		description:
			'Aqueles que protegem os outros; alguém que carrega um fardo pesado demais para suportar sozinho',
		prophecy: {
			dmText:
				'O tesouro está na tumba do Rei Barov e da Rainha Ravenovia (capítulo 4, área K88).',
			location: 'Castelo Ravenloft',
			playerText: 'Encontrem a mãe, aquela que deu à luz o mal.',
		},
	},
	druid: {
		name: 'Druida',
		card: 'Cinco de Glifos',
		aria: 'Glifos 05 Druida',
		description:
			'A ambivalência e crueldade da natureza e daqueles atraídos por ela; conflito interior',
		prophecy: {
			dmText:
				'O tesouro está na base da árvore Gulthias (capítulo 14, área Y4). Qualquer corvo-lobisomem encontrado na natureza pode guiar os personagens até o local.',
			location: 'Colina Yester',
			playerText:
				'Uma árvore maligna cresce no alto de uma colina de túmulos onde os mortos antigos dormem. Os corvos podem ajudar vocês a encontrá-la. Procurem o tesouro ali.',
		},
	},
	anarchist: {
		name: 'Anarquista',
		card: 'Seis de Glifos',
		aria: 'Glifos 06 Anarquista',
		description:
			'Uma mudança fundamental provocada por alguém cujas crenças estão sendo postas à prova',
		prophecy: {
			dmText: 'O tesouro está no salão dos ossos do Castelo Ravenloft (capítulo 4, área K67).',
			location: 'Castelo Ravenloft',
			playerText:
				'Vejo paredes de ossos, um candelabro de ossos e uma mesa de ossos: tudo que resta de inimigos há muito esquecidos.',
		},
	},
	charlatan: {
		name: 'Charlatão',
		card: 'Sete de Glifos',
		aria: 'Glifos 07 Charlatão',
		description: 'Mentirosos; aqueles que professam uma crença, mas na verdade acreditam em outra',
		prophecy: {
			dmText: 'O tesouro está no sótão do Velho Moinho de Ossos (capítulo 6, área O4).',
			location: 'Velho Moinho de Ossos',
			playerText: 'Vejo um moinho solitário em um precipício. O tesouro está lá dentro.',
		},
	},
	bishop: {
		name: 'Bispo',
		card: 'Oito de Glifos',
		aria: 'Glifos 08 Bispo',
		description: 'Apego rígido a um código ou crença; aqueles que conspiram, planejam e tramam',
		prophecy: {
			dmText:
				'O tesouro está na tesouraria selada do Templo de Âmbar (capítulo 13, área X40).',
			location: 'Templo de Âmbar',
			playerText: 'O que vocês procuram está em uma pilha de tesouros além de portas de âmbar.',
		},
	},
	traitor: {
		name: 'Traidor',
		card: 'Nove de Glifos',
		aria: 'Glifos 09 Traidor',
		description: 'Traição por alguém próximo e confiável; enfraquecimento ou perda da fé',
		prophecy: {
			dmText:
				'O tesouro está escondido no quarto principal da Wachterhaus (capítulo 5, área N4o).',
			location: 'Cidade de Vallaki',
			playerText:
				'Procurem uma mulher rica. Aliada ferrenha do demônio, ela guarda o tesouro trancado, junto aos ossos de um antigo inimigo.',
		},
	},
	priest: {
		name: 'Sacerdote',
		card: 'Mestre de Glifos',
		aria: 'Glifos 10 Sacerdote',
		description:
			'Iluminação; aqueles que seguem uma divindade, um sistema de valores ou um propósito maior',
		prophecy: {
			dmText: 'O tesouro está na capela do Castelo Ravenloft (capítulo 4, área K15).',
			location: 'Castelo Ravenloft',
			playerText:
				'Vocês encontrarão o que procuram no castelo, entre as ruínas de um lugar de súplica.',
		},
	},
	transmuter: {
		name: 'Transmutador',
		card: 'Um de Estrelas',
		aria: 'Estrelas 01 Transmutador',
		description:
			'Uma nova descoberta; a chegada de coisas inesperadas; consequências imprevistas e caos',
		prophecy: {
			dmText: 'O tesouro está no topo da torre norte do Castelo Ravenloft (capítulo 4, área K60).',
			location: 'Castelo Ravenloft',
			playerText: 'Vão a um lugar de alturas vertiginosas, onde a própria pedra está viva!',
		},
	},
	diviner: {
		name: 'Adivinho',
		card: 'Dois de Estrelas',
		aria: 'Estrelas 02 Adivinho',
		description: 'A busca por conhecimento temperada pela sabedoria; verdade e honestidade; sábios e profecia',
		prophecy: {
			dmText:
				'O tesouro está no acampamento de Madame Eva (capítulo 2, área G). Se ela estiver fazendo a leitura, diz: "Acho que o tesouro está bem debaixo do meu nariz!"',
			location: 'Acampamento da Piscina Tser',
			playerText: 'Olhem para aquela que tudo vê. O tesouro está escondido em seu acampamento.',
		},
	},
	enchanter: {
		name: 'Encantador',
		card: 'Três de Estrelas',
		aria: 'Estrelas 03 Encantador',
		description: 'Conflito interior causado por confusão, medo do fracasso ou informações falsas',
		prophecy: {
			dmText:
				'O tesouro está sob o monumento de Marina em Berez (capítulo 10, área U5). "O mestre do pântano" refere-se ao burgomestre Lazlo Ulrich (área U2), cujo fantasma pode apontar os personagens até o monumento.',
			location: 'Ruínas de Berez',
			playerText:
				'Vejo uma mulher ajoelhada, uma rosa de grande beleza colhida cedo demais. O mestre do pântano sabe de quem falo.',
		},
	},
	abjurer: {
		name: 'Abjurador',
		card: 'Quatro de Estrelas',
		aria: 'Estrelas 04 Abjurador',
		description: 'Aqueles guiados pela lógica e pela razão; alerta para uma pista ou informação ignorada',
		prophecy: {
			dmText:
				'O tesouro está no farol de Argynvostholt (capítulo 7, área Q53). "Grande dragão de pedra" refere-se à estátua na área Q1.',
			location: 'Argynvostholt',
			playerText:
				'Vejo uma casa caída guardada por um grande dragão de pedra. Olhem para o pico mais alto.',
		},
	},
	elementalist: {
		name: 'Elementalista',
		card: 'Cinco de Estrelas',
		aria: 'Estrelas 05 Elementalista',
		description: 'O triunfo da natureza sobre a civilização; desastres naturais e colheitas abundantes',
		prophecy: {
			dmText:
				'O tesouro está dentro de uma maquete do Castelo Ravenloft no Templo de Âmbar (capítulo 13, área X20).',
			location: 'Templo de Âmbar',
			playerText:
				'O tesouro está escondido em um pequeno castelo sob uma montanha, guardado por gigantes de âmbar.',
		},
	},
	evoker: {
		name: 'Evocador',
		card: 'Seis de Estrelas',
		aria: 'Estrelas 06 Evocador',
		description:
			'Poder mágico ou sobrenatural que não pode ser controlado; magia usada para fins destrutivos',
		prophecy: {
			dmText:
				'O tesouro está escondido na cripta de Gralmore Nimblenobs (capítulo 4, área K84, cripta 37).',
			location: 'Castelo Ravenloft',
			playerText: 'Procurem a cripta do mago ordinário. Seu cajado é a chave.',
		},
	},
	illusionist: {
		name: 'Ilusionista',
		card: 'Sete de Estrelas',
		aria: 'Estrelas 07 Ilusionista',
		description:
			'Mentiras e engano; grandes conspirações; sociedades secretas; a presença de um iludido ou sabotador',
		prophecy: {
			dmText: 'O tesouro está no vagão de carnaval de Rictavio (capítulo 5, área N5).',
			location: 'Cidade de Vallaki',
			playerText:
				'Um homem não é o que parece. Ele vem aqui em um vagão de carnaval. Ali está o que vocês procuram.',
		},
	},
	necromancer: {
		name: 'Necromante',
		card: 'Oito de Estrelas',
		aria: 'Estrelas 08 Necromante',
		description: 'Eventos antinaturais e obsessões doentias; aqueles que seguem um caminho destrutivo',
		prophecy: {
			dmText: 'O tesouro está no gabinete do Castelo Ravenloft (capítulo 4, área K37).',
			location: 'Castelo Ravenloft',
			playerText:
				'Uma mulher paira acima de um fogo crepitante. Encontrem-na e encontrarão o tesouro.',
		},
	},
	conjurer: {
		name: 'Conjurador',
		card: 'Nove de Estrelas',
		aria: 'Estrelas 09 Conjurador',
		description:
			'A chegada de uma ameaça sobrenatural inesperada; aqueles que pensam ser deuses',
		prophecy: {
			dmText: 'O tesouro está na cabana de Baba Lysaga (capítulo 10, área U3).',
			location: 'Ruínas de Berez',
			playerText:
				'Vejo uma vila morta, afogada por um rio, governada por alguém que trouxe grande mal ao mundo.',
		},
	},
	wizard: {
		name: 'Mago',
		card: 'Mestre de Estrelas',
		aria: 'Estrelas 10 Mago',
		description: 'Mistério e enigmas; o desconhecido; aqueles que desejam poder mágico e grande conhecimento',
		prophecy: {
			dmText: 'O tesouro está no último andar da Torre de Van Richten (capítulo 11, área V7).',
			location: 'Cidade de Vallaki',
			playerText:
				'Procurem uma torre de mago em um lago. Deixem que o nome do mago e seu servo guiem vocês até o que procuram.',
		},
	},
	avenger: {
		name: 'Vingador',
		card: 'Um de Espadas',
		aria: 'Espadas 01 Vingador',
		description:
			'Justiça e vingança por grandes injustiças; aqueles em uma missão para livrar o mundo de um grande mal',
		prophecy: {
			dmText:
				'O tesouro está em posse de Vladimir Horngaard em Argynvostholt (capítulo 7, área Q36).',
			location: 'Argynvostholt',
			playerText: 'O tesouro está na casa de um dragão, em mãos antes limpas e agora corrompidas.',
		},
	},
	paladin: {
		name: 'Paladino',
		card: 'Dois de Espadas',
		aria: 'Espadas 02 Paladino',
		description: 'Guerreiros justos e nobres; aqueles que vivem por um código de honra e integridade',
		prophecy: {
			dmText: 'O tesouro está na tumba de Sergei (capítulo 4, área K85).',
			location: 'Castelo Ravenloft',
			playerText:
				'Vejo um príncipe adormecido, servo da luz e irmão da escuridão. O tesouro está com ele.',
		},
	},
	soldier: {
		name: 'Soldado',
		card: 'Três de Espadas',
		aria: 'Espadas 03 Soldado',
		description: 'Guerra e sacrifício; a resistência para suportar grandes dificuldades',
		prophecy: {
			dmText:
				'O tesouro está no telhado da torre de guarda da Passagem de Tsolenka (capítulo 9, área T6).',
			location: 'Passagem de Tsolenka',
			playerText: 'Vão às montanhas. Escalem a torre branca guardada por cavaleiros dourados.',
		},
	},
	mercenary: {
		name: 'Mercenário',
		card: 'Quatro de Espadas',
		aria: 'Espadas 04 Mercenário',
		description: 'Força interior e fortitude; aqueles que lutam por poder ou riqueza',
		prophecy: {
			dmText:
				'O tesouro está em uma cripta no Castelo Ravenloft (capítulo 4, área K84, cripta 31).',
			location: 'Castelo Ravenloft',
			playerText: 'Aquilo que vocês procuram está com os mortos, sob montanhas de moedas de ouro.',
		},
	},
	myrmidon: {
		name: 'Mirmidão',
		card: 'Cinco de Espadas',
		aria: 'Espadas 05 Mirmidão',
		description:
			'Grandes heróis; uma súbita reversão do destino; o triunfo do azarão sobre um inimigo poderoso',
		prophecy: {
			dmText:
				'O tesouro está no santuário da Mãe Noite, na toca dos lobisomens (capítulo 15, área Z7).',
			location: 'Toca dos Lobisomens',
			playerText:
				'Procurem uma toca de lobos nas colinas que observam um lago de montanha. O tesouro pertence à Mãe Noite.',
		},
	},
	berserker: {
		name: 'Berserker',
		card: 'Seis de Espadas',
		aria: 'Espadas 06 Berserker',
		description: 'O lado brutal e bárbaro da guerra; sede de sangue; aqueles com natureza bestial',
		prophecy: {
			dmText:
				'O tesouro está na cripta do General Kroval "Cão Louco" Grislek (capítulo 4, área K84, cripta 38).',
			location: 'Castelo Ravenloft',
			playerText:
				'Encontrem a cripta do Cão Louco. O tesouro está lá dentro, sob os ossos enegrecidos.',
		},
	},
	'hooded-one': {
		name: 'Encapuzado',
		card: 'Sete de Espadas',
		aria: 'Espadas 07 Encapuzado',
		description: 'Fanatismo, intolerância e xenofobia; uma presença misteriosa ou recém-chegada',
		prophecy: {
			dmText:
				'O tesouro está dentro da cabeça de uma estátua gigante no Templo de Âmbar (capítulo 13, área X5a).',
			location: 'Templo de Âmbar',
			playerText:
				'Vejo um deus sem rosto. Ele espera por vocês no fim de uma estrada longa e sinuosa, nas profundezas das montanhas.',
		},
	},
	dictator: {
		name: 'Ditador',
		card: 'Oito de Espadas',
		aria: 'Espadas 08 Ditador',
		description:
			'Tudo que há de errado com governo e liderança; aqueles que governam por medo e violência',
		prophecy: {
			dmText: 'O tesouro está no salão de audiências do Castelo Ravenloft (capítulo 4, área K25).',
			location: 'Castelo Ravenloft',
			playerText: 'Vejo um trono digno de um rei.',
		},
	},
	torturer: {
		name: 'Torturador',
		card: 'Nove de Espadas',
		aria: 'Espadas 09 Torturador',
		description: 'A chegada de sofrimento ou crueldade implacável; alguém irredimivelmente mau ou sádico',
		prophecy: {
			dmText:
				'O tesouro está no sótão da mansão do burgomestre em Vallaki (capítulo 5, área N3s).',
			location: 'Cidade de Vallaki',
			playerText:
				'Há uma cidade onde nada vai bem. Lá vocês encontrarão uma casa de corrupção e, dentro dela, uma sala escura cheia de fantasmas imóveis.',
		},
	},
	warrior: {
		name: 'Guerreiro',
		card: 'Mestre de Espadas',
		aria: 'Espadas 10 Guerreiro',
		description: 'Força personificada; violência; aqueles que usam força para cumprir seus objetivos',
		prophecy: {
			dmText: 'O tesouro está na tumba de Strahd (capítulo 4, área K86).',
			location: 'Castelo Ravenloft',
			playerText:
				'Aquilo que vocês procuram está no ventre da escuridão, o "covil" do demônio: o único lugar para onde ele deve retornar.',
		},
	},
	artifact: {
		name: 'Artefato',
		card: 'O Artefato',
		aria: 'Baralho Alto Artefato',
		description:
			'A importância de algum objeto físico que deve ser obtido, protegido ou destruído a qualquer custo',
		prophecy: {
			allies: [
				{
					playerText:
						'Procurem um homem divertido com um macaco. Esse homem é mais do que parece.',
					dmText:
						'Esta carta refere-se a Rictavio (apêndice D), que pode ser encontrado na Estalagem Água Azul, em Vallaki (capítulo 5, área N2). Normalmente relutante em acompanhar os personagens, Rictavio muda de ideia se eles contarem sobre a leitura das cartas. Ele abandona o disfarce e se apresenta como Dr. Rudolf van Richten.\n\nOs personagens podem pensar que Gadof Blinsky, o fabricante de brinquedos de Vallaki (área N7), é a figura que procuram, pois ele tem um macaco de estimação. Se falarem com ele sobre essa possibilidade, Blinsky brinca que ele e o macaco são "velhos amigos"; mas, se os personagens pedirem que ele os acompanhe para lutar contra Strahd, ele recusa educadamente. Se contarem a ele sobre a leitura de tarokka, Blinsky admite que adquiriu o macaco de um mestre de cerimônias meio-elfo chamado Rictavio.',
				},
			],
			strahd: {
				playerText:
					'Ele espreita na escuridão onde a luz da manhã um dia brilhou: um lugar sagrado.',
				dmText: 'Strahd enfrenta os personagens na capela (área K15).',
			},
		},
	},
	beast: {
		name: 'Fera',
		card: 'A Fera',
		aria: 'Baralho Alto Fera',
		description:
			'Grande fúria ou paixão; algo bestial ou malévolo escondido à vista de todos ou logo abaixo da superfície',
		prophecy: {
			allies: [
				{
					playerText:
						'Uma lobisomem guarda um ódio secreto por seu inimigo. Usem esse ódio a seu favor.',
					dmText:
						'Esta carta refere-se à lobisomem Zuleika Toranescu (capítulo 15, área Z7). Ela acompanhará os personagens se eles prometerem vingar seu companheiro, Emil, matando o líder de sua matilha, Kiril Stoyanovich.',
				},
			],
			strahd: {
				playerText: 'A fera se senta em seu trono sombrio.',
				dmText: 'Strahd enfrenta os personagens no salão de audiências (área K25).',
			},
		},
	},
	'broken-one': {
		name: 'O Quebrado',
		card: 'O Quebrado',
		aria: 'Baralho Alto O Quebrado',
		description:
			'Derrota, fracasso e desespero; a perda de algo ou alguém importante, sem o qual a pessoa se sente incompleta',
		prophecy: {
			allies: [
				{
					ally: 'Mago Louco',
					playerText:
						'Seu maior aliado será um mago. Sua mente está quebrada, mas seus feitiços são fortes.',
					dmText: 'Esta carta refere-se ao Mago Louco do Monte Baratok (capítulo 2, área M).',
				},
				{
					playerText:
						'Vejo um homem de fé cuja sanidade pende por um fio. Ele perdeu alguém próximo.',
					dmText:
						'Esta carta refere-se a Donavich, o sacerdote na vila de Barovia (capítulo 3, área E5). Ele não acompanhará os personagens até que seu filho, Doru, esteja morto e sepultado.',
				},
			],
			strahd: {
				playerText: 'Ele assombra a tumba do homem que invejou acima de todos.',
				dmText: 'Strahd enfrenta os personagens na tumba de Sergei (área K86).',
			},
		},
	},
	darklord: {
		name: 'Lorde Sombrio',
		card: 'O Lorde Sombrio',
		aria: 'Baralho Alto Lorde Sombrio',
		description:
			'Um indivíduo único e poderoso de natureza maligna, cujos objetivos têm consequências enormes e abrangentes',
		prophecy: {
			allies: [
				{
					ally: 'Ninguém',
					playerText:
						'Ah, a pior de todas as "verdades": vocês devem enfrentar o mal desta terra sozinhos!',
					dmText: 'Não há nenhum NPC capaz de inspirar os personagens.',
				},
			],
			strahd: {
				playerText:
					'Ele espreita nas profundezas da escuridão, no único lugar para onde deve retornar.',
				dmText: 'Strahd enfrenta os personagens em sua tumba (área K86).',
			},
		},
	},
	donjon: {
		name: 'Masmorra',
		card: 'A Masmorra',
		aria: 'Baralho Alto Masmorra',
		description:
			'Isolamento e aprisionamento; ser tão conservador no pensamento a ponto de tornar-se prisioneiro das próprias crenças',
		prophecy: {
			allies: [
				{
					playerText:
						'Procurem um jovem perturbado cercado por riqueza e loucura. Seu lar é sua prisão.',
					dmText:
						'Esta carta refere-se a Victor Vallakovich (capítulo 5, área N3t). Ao perceber que os personagens são a chave para sua salvação, ele deixa a casa com entusiasmo e os acompanha até o Castelo Ravenloft.',
				},
				{
					playerText:
						'Encontrem uma moça levada à insanidade, trancada no coração da casa de seu pai morto. Curar sua loucura é a chave para o sucesso de vocês.',
					dmText:
						'Esta carta refere-se a Stella Wachter (capítulo 5, área N4n). Ela não concede benefício ao grupo a menos que sua loucura seja curada. Com a razão restaurada, Stella fica feliz em juntar-se ao grupo e deixar para trás sua família apodrecida.',
				},
			],
			strahd: {
				playerText: 'Ele espreita em um salão de ossos, nos poços escuros de seu castelo.',
				dmText: 'Strahd enfrenta os personagens no salão dos ossos (área K67).',
			},
		},
	},
	executioner: {
		name: 'Carrasco',
		card: 'O Carrasco',
		aria: 'Baralho Alto Carrasco',
		description:
			'A morte iminente de alguém condenado, com ou sem justiça; falsas acusações e perseguição injusta',
		prophecy: {
			allies: [
				{
					playerText:
						'Busquem o irmão da noiva do demônio. Chamam-no de "o menor", mas ele tem uma alma poderosa.',
					dmText:
						'Esta carta refere-se a Ismark Kolyanovich (capítulo 3, área E2). Ismark não acompanhará os personagens ao Castelo Ravenloft até saber que sua irmã, Ireena Kolyana, está segura.',
				},
			],
			strahd: {
				playerText:
					'Vejo uma figura sombria em uma sacada, olhando para esta terra torturada com um sorriso retorcido.',
				dmText: 'Strahd enfrenta os personagens no mirante (área K6).',
			},
		},
	},
	ghost: {
		name: 'Fantasma',
		card: 'O Fantasma',
		aria: 'Baralho Alto Fantasma',
		description:
			'O passado iminente; o retorno de um antigo inimigo ou a descoberta de um segredo enterrado há muito tempo',
		prophecy: {
			allies: [
				{
					playerText:
						'Vejo um paladino caído de uma ordem caída de cavaleiros. Ele permanece como um fantasma no covil de um dragão morto.',
					dmText:
						'Esta carta refere-se ao revenante Sir Godfrey Gwilym (capítulo 7, área Q37). Embora inicialmente não queira acompanhar os personagens, ele o fará se eles o convencerem de que a honra da Ordem do Dragão Prateado pode ser restaurada com sua ajuda. Para isso, é necessário um teste bem-sucedido de Carisma (Persuasão) CD 15.',
				},
				{
					playerText:
						'Despertem o espírito do cavaleiro desajeitado cuja cripta repousa nas profundezas do castelo.',
					dmText:
						'Esta carta refere-se a Sir Klutz, o guerreiro fantasma (capítulo 4, área K84, cripta 33). Se Sir Klutz for o inimigo de Strahd, o guerreiro fantasma não desaparece após sete dias, mas somente depois que ele ou Strahd for reduzido a 0 pontos de vida.',
				},
			],
			strahd: {
				playerText: 'Olhem para a tumba do pai.',
				dmText:
					'Strahd enfrenta os personagens na tumba do Rei Barov e da Rainha Ravenovia (área K88).',
			},
		},
	},
	horseman: {
		name: 'Cavaleiro',
		card: 'O Cavaleiro',
		aria: 'Baralho Alto Cavaleiro',
		description:
			'Morte; desastre na forma de perda de riqueza ou propriedade, derrota terrível ou fim de uma linhagem',
		prophecy: {
			allies: [
				{
					playerText:
						'Vejo um homem morto de nascimento nobre, guardado por sua viúva. Devolvam vida ao cadáver desse homem, e ele será seu aliado leal.',
					dmText:
						'Esta carta refere-se a Nikolai Wachter, o velho, que está morto (capítulo 5, área N4o). Se os personagens conjurarem reviver os mortos ou ressurreição em seu corpo preservado, Nikolai (nobre humano masculino LN) concorda em ajudá-los assim que se sentir bem o bastante, apesar dos protestos de sua esposa. Embora sua família tenha apoiado Strahd por muito tempo, Nikolai percebeu no fim da vida que Strahd deve ser destruído para salvar Barovia.\n\nSe os personagens não tiverem meios para trazer Nikolai de volta dos mortos, Rictavio (apêndice D) entrega a eles um pergaminho de reviver os mortos se souber da necessidade. Se estiverem hospedados na Estalagem Água Azul, ele deixa o pergaminho em um dos quartos.',
				},
				{
					playerText:
						'Um homem da morte chamado Arrigal abandonará seu senhor sombrio para servir à causa de vocês. Cuidado! Ele tem uma alma podre.',
					dmText:
						'Esta carta refere-se ao assassino Vistani Arrigal (capítulo 5, área N9c). Se os personagens mencionarem a leitura a ele, ele aceita seu destino e os acompanha. Se os personagens conseguirem derrotar Strahd, Arrigal os trai e ataca, acreditando estar destinado a se tornar o novo senhor de Barovia.',
				},
			],
			strahd: {
				playerText:
					'Ele espreita no único lugar para onde deve retornar: um lugar de morte.',
				dmText: 'Strahd enfrenta os personagens em sua tumba (área K86).',
			},
		},
	},
	innocent: {
		name: 'Inocente',
		card: 'O Inocente',
		aria: 'Baralho Alto Inocente',
		description:
			'Um ser de grande importância cuja vida está em perigo, talvez indefeso ou simplesmente inconsciente do risco',
		prophecy: {
			allies: [
				{
					playerText:
						'Vejo um jovem de coração bondoso. Um menino da mamãe! Ele é forte de corpo, mas fraco de mente. Procurem-no na vila de Barovia.',
					dmText:
						'Esta carta refere-se a Parriwimple (veja o capítulo 3, área E1). Embora seja simplório, ele não viajará ao Castelo Ravenloft sem uma boa razão. Os personagens podem manipulá-lo a ir, apelando para seu bom coração. Por exemplo, ele pode ir para ajudar a resgatar barovianos desaparecidos ou salvar a vida de Ireena Kolyana, que é muito bela. Os personagens precisam lidar de alguma forma com Bildrath, empregador de Parriwimple, que não permitirá que o rapaz tolo vá ao castelo por motivo algum.',
				},
				{
					playerText: 'A noiva do mal é quem vocês procuram!',
					dmText:
						'Esta carta refere-se a Ireena Kolyana (capítulo 3, área E4). Seu irmão Ismark se opõe à ideia de Ireena ser levada ao Castelo Ravenloft, mas insiste em ir para lá quando os personagens contam a ela sobre a leitura das cartas. Ireena, porém, não acompanhará os personagens até que o corpo de Kolyan Indirovich seja sepultado no cemitério.',
				},
			],
			strahd: {
				playerText:
					'Ele habita junto daquele cujo sangue selou sua ruína, um irmão de luz apagado cedo demais.',
				dmText: 'Strahd enfrenta os personagens na tumba de Sergei (área K85).',
			},
		},
	},
	marionette: {
		name: 'Marionete',
		card: 'A Marionete',
		aria: 'Baralho Alto Marionete',
		description:
			'A presença de um espião ou servo de um poder maior; um encontro com uma marionete ou subordinado',
		prophecy: {
			allies: [
				{
					playerText:
						'Que horror é este? Vejo um homem feito por um homem. Sem idade e sozinho, ele assombra as torres do castelo.',
					dmText: 'Esta carta refere-se a Pidlwick II (capítulo 4, área K59 e apêndice D).',
				},
				{
					playerText:
						'Procurem um homem de música, um homem com duas cabeças. Ele vive em um lugar de grande fome e tristeza.',
					dmText:
						'Esta carta refere-se a Cloven Belview (capítulo 8, área S17), o povo-mestiço de duas cabeças. Clovin serve ao Abade por medo e por um senso perverso de lealdade. Seu trabalho é levar comida aos outros povo-mestiços, que ele detesta. Se o Abade ainda vive, Clovin não quer atrair a ira do mestre tentando partir e se recusa a acompanhar os personagens. Mas, se o Abade morrer, Clovin não tem motivo para permanecer na abadia, então se dispõe a ir junto se for subornado com vinho. Clovin não concede benefício ao grupo sem sua viola.',
				},
			],
			strahd: {
				playerText:
					'Olhem para grandes alturas. Encontrem o coração pulsante do castelo. Ele espera por perto.',
				dmText: 'Strahd enfrenta os personagens no topo da torre norte (área K60).',
			},
		},
	},
	mists: {
		name: 'Brumas',
		card: 'As Brumas',
		aria: 'Baralho Alto Brumas',
		description:
			'Algo inesperado ou misterioso que não pode ser evitado; uma grande missão ou jornada que testará o espírito',
		prophecy: {
			allies: [
				{
					playerText:
						'Uma vistana vaga sozinha por esta terra, procurando seu mentor. Ela não permanece muito tempo em um só lugar. Procurem-na na Abadia de Santa Markovia, perto das brumas.',
					dmText:
						'Esta carta refere-se a Ezmerelda d’Avenir (apêndice D). Ela pode ser encontrada na Abadia de Santa Markovia (veja o capítulo 8, área S19), bem como em vários outros locais por toda Barovia.',
				},
			],
			strahd: {
				playerText: 'As cartas não conseguem ver onde o mal espreita. As brumas ocultam tudo.',
				dmText:
					'Esta carta não oferece pista sobre onde ocorrerá o confronto final com Strahd. Ele pode acontecer em qualquer lugar que você quiser no Castelo Ravenloft. Alternativamente, Madame Eva diz aos personagens que retornem a ela depois de pelo menos três dias, e ela consultará as cartas novamente para eles, mas apenas para discernir o local de seu inimigo.',
			},
		},
	},
	raven: {
		name: 'Corvo',
		card: 'O Corvo',
		aria: 'Baralho Alto Corvo',
		description:
			'Uma fonte oculta de informação; uma reviravolta afortunada; um potencial secreto para o bem',
		prophecy: {
			allies: [
				{
					playerText:
						'Encontrem o líder dos emplumados que vivem entre as vinhas. Embora velho, ele ainda tem uma última luta dentro de si.',
					dmText:
						'Esta carta refere-se a Davian Martikov (capítulo 12, "O Mago dos Vinhos"). O velho corvo-lobisomem, percebendo que tem uma chance de acabar com a tirania de Strahd, deixa sua vinha e vinícola nas mãos competentes de seus filhos, Adrian e Elvir. Mas antes de viajar ao Castelo Ravenloft para enfrentar Strahd, Davian insiste em reconciliar-se com seu terceiro filho, Urwin Martikov (capítulo 5, área N2).',
				},
			],
			strahd: {
				playerText: 'Olhem para a tumba da mãe.',
				dmText:
					'Strahd enfrenta os personagens na tumba do Rei Barov e da Rainha Ravenovia (área K88).',
			},
		},
	},
	seer: {
		name: 'Vidente',
		card: 'O Vidente',
		aria: 'Baralho Alto Vidente',
		description:
			'Inspiração e intelecto aguçado; um evento futuro cujo resultado dependerá de uma mente astuta',
		prophecy: {
			allies: [
				{
					playerText:
						'Procurem um elfo do crepúsculo que vive entre os Vistani. Ele sofreu uma grande perda e é assombrado por sonhos sombrios. Ajudem-no, e ele ajudará vocês em troca.',
					dmText:
						'Esta carta refere-se a Kasimir Velikov (capítulo 5, área N9a). O elfo do crepúsculo acompanha os personagens até o Castelo Ravenloft somente depois que eles o conduzirem ao Templo de Âmbar e encontrarem um meio de ressuscitar sua irmã morta, Patrina Velikovna.',
				},
			],
			strahd: {
				playerText:
					'Ele espera por vocês em um lugar de sabedoria, calor e desespero. Grandes segredos repousam ali.',
				dmText: 'Strahd enfrenta os personagens no gabinete (área K37).',
			},
		},
	},
	tempter: {
		name: 'Tentador',
		card: 'O Tentador',
		aria: 'Baralho Alto Tentador',
		description:
			'Alguém comprometido ou desviado por tentação ou tolice; alguém que tenta outros para fins malignos',
		prophecy: {
			allies: [
				{
					playerText:
						'Vejo uma criança, uma Vistana. Vocês devem se apressar, pois seu destino está por um fio. Encontrem-na no lago!',
					dmText:
						'Esta carta refere-se a Arabelle (capítulo 2, área L). Ela se junta ao grupo com prazer. Mas, se voltar ao acampamento (capítulo 5, área N9), seu pai, Luvash, se recusará a deixá-la partir.',
				},
				{
					playerText:
						'Ouço um sino de casamento, ou talvez um dobre fúnebre. Ele chama vocês para uma abadia na encosta da montanha, onde encontrarão uma mulher que é mais do que a soma de suas partes.',
					dmText: 'Esta carta refere-se a Vasilka, a golem de carne (capítulo 8, área S13).',
				},
			],
			strahd: {
				playerText:
					'Vejo um lugar secreto: uma câmara de tentação escondida atrás de uma mulher de grande beleza. O mal espera no alto de sua torre de tesouro.',
				dmText:
					'Strahd confronta os personagens na tesouraria (área K41). "Uma mulher de grande beleza" refere-se ao retrato de Tatyana pendurado no gabinete do castelo (área K37), que contém uma porta secreta levando à tesouraria.',
			},
		},
	},
};

function mergeProphecy(card: TarokkaCard, prophecy: unknown) {
	if (!prophecy || !('prophecy' in card)) return card;

	const typedProphecy = prophecy as {
		allies?: Record<string, string>[];
		strahd?: Record<string, string>;
		[key: string]: unknown;
	};

	if ('allies' in card.prophecy) {
		return {
			...card,
			prophecy: {
				...card.prophecy,
				allies: card.prophecy.allies.map((ally, index) => ({
					...ally,
					...(typedProphecy.allies?.[index] ?? {}),
				})),
				strahd: {
					...card.prophecy.strahd,
					...(typedProphecy.strahd ?? {}),
				},
			},
		} as TarokkaCard;
	}

	return {
		...card,
		prophecy: {
			...card.prophecy,
			...typedProphecy,
		},
	} as TarokkaCard;
}

const translatedTarokkaCards = tarokkaCards.map((card) => {
	const translation = ptBRCardTranslations[card.id];
	if (!translation) return card;

	const { prophecy, ...baseTranslation } = translation;
	const translatedCard = {
		...card,
		...baseTranslation,
	} as TarokkaCard;

	return mergeProphecy(translatedCard, prophecy);
});

export default translatedTarokkaCards;
