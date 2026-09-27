# Leitura de Tarokka

Modulo de leitura de Tarokka para **Foundry VTT**, criado como fork independente do modulo original **Tarokka** para que os dois possam ser instalados lado a lado sem conflito.

Este fork usa o ID `leitura-de-tarokka` e adiciona suporte a leituras e textos para varios sistemas, incluindo D&D 5e/5.5, AD&D 1e/2e, D&D 3.5 e Old Dragon 2.

## Instalacao

No Foundry, va em **Add-on Modules -> Install Module** e cole este manifesto:

```text
https://github.com/rangelsardinha/leitura-de-tarokka/releases/latest/download/module.json
```

Depois habilite **Leitura de Tarokka** nas configuracoes de modulos do mundo.

Tambem e possivel baixar o arquivo `module.zip` na [ultima release](https://github.com/rangelsardinha/leitura-de-tarokka/releases/latest) e extrair manualmente em:

```text
Data/modules/leitura-de-tarokka
```

## Recursos

- Modulo independente do Tarokka original, com ID proprio.
- Sincronizacao ao vivo entre Mestre e jogadores.
- Selecao de sistema: D&D 5e/5.5, AD&D 1e/2e, D&D 3.5 e Old Dragon 2.
- Tiragens simples, cruz simples, cruz estendida, torre, piramide e I6: Castelo Ravenloft quando aplicavel.
- Textos de cartas e posicoes adaptados por sistema.
- Baralhos especificos para D&D 3.5 e Old Dragon 2.
- Imagens traduzidas em portugues para os baralhos colorido e tons de cinza.
- Botao para salvar a leitura em nota de Diario, separando informacoes publicas e do Mestre.
- Pre-visualizacao ampliada de cartas e exibicao de imagem aos jogadores pelo Mestre.

## Creditos

Agradecimento especial a **GM RedVelvet**, autor do modulo original **Tarokka** para Foundry VTT:

https://github.com/gmredvelvet-rgb/tarokka-foundryvtt

Este fork tambem preserva os creditos ao projeto web original de **mcdoh**, que serviu de base para o modulo Foundry:

https://github.com/mcdoh/tarokka

## Licenca

Este projeto mantem a licenca MIT do projeto original. Consulte `LICENSE`.

## Desenvolvimento

O codigo-fonte fica na raiz do projeto, com interface React empacotada por Vite. O Foundry carrega diretamente os arquivos em `dist/`.

```bash
npm install
npm run build
```

Para publicar uma release instalavel no Foundry, anexe estes arquivos ao release do GitHub:

- `module.json`
- `module.zip`
