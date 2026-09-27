const leituraDeTarokka = game.modules.get('leitura-de-tarokka');

if (!leituraDeTarokka?.active) {
	ui.notifications.error('O módulo Leitura de Tarokka não está ativo. Ative-o em Gerenciar Módulos.');
} else if (!leituraDeTarokka.api?.open) {
	ui.notifications.error('Leitura de Tarokka está ativo, mas ainda não expôs a API. Se você acabou de ativá-lo, recarregue a página.');
} else {
	leituraDeTarokka.api.open();
}
