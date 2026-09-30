# FV Maker

Site interno da FV Maker, marca das placas NFC "Avalie-nos no Google" impressas em 3D e das lojas no Mercado Livre e na Shopee.

O site está publicado como artefato no claude.ai (privado):
https://claude.ai/artifact/TwkYJVNxZQaVQN21QK5yVf

## Áreas

- **Diário de impressão:** decisões de ajuste da placa (D00 em diante), comparador de camadas e ajustes em quarentena.
- **Mercado Livre** e **Shopee:** roteiro de configuração da loja, taxas e tributação (com calculadora de repasse), visibilidade, reputação e o kit do anúncio da placa.

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `index.html` | Página publicada. O conteúdo é carregado do banco do artefato (`window.claude.use("db")`), então aberta fora do claude.ai ela mostra só a estrutura. |
| `img/` | Renders e mapas de camada usados nas decisões. |
| `dados/` | Exportação do banco do artefato, um JSON por documento. |

Coleções em `dados/`:

- `decisoes`: decisões do diário de impressão.
- `ajustes`: ajustes em quarentena.
- `mkt_canais`: cabeçalho de cada canal.
- `mkt_passos`: passos do roteiro. O progresso (`feito`, `nota`) é marcado pela própria página.
- `mkt_paginas`: páginas de conteúdo.
- `mkt_calc`: parâmetros da calculadora de taxas.

A exportação é uma fotografia do banco em 30/09/2026. O que for marcado no site depois disso fica só no artefato até uma nova exportação.
