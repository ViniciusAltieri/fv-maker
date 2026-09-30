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
| `index.html` | Página publicada. Dentro do claude.ai lê o banco do artefato; fora dele, carrega `dados/canais.js`. |
| `img/` | Renders e mapas de camada usados nas decisões. |
| `dados/` | Exportação do banco do artefato, um JSON por documento. |
| `dados/canais.js` | Conteúdo das áreas Mercado Livre e Shopee num arquivo só, gerado a partir de `dados/mkt_*`. |
| `ferramentas/gerar_canais_js.py` | Gera o `dados/canais.js`. |

## Abrir fora do claude.ai

As áreas **Mercado Livre** e **Shopee** funcionam em qualquer lugar:

- abrindo o `index.html` direto do disco (duplo clique);
- num servidor estático, como o GitHub Pages ou a Vercel.

Fora do claude.ai a página é só de consulta:

- o roteiro mostra o progresso da última exportação;
- as caixas de "feito" e as anotações ficam travadas;
- a calculadora de taxas funciona normalmente.

O diário de impressão (decisões e ajustes) continua abrindo só no claude.ai.

Para atualizar a cópia depois de mexer no site:

1. Reexporte o banco para `dados/`.
2. Rode o gerador:

   ```
   python ferramentas/gerar_canais_js.py
   ```

3. Faça o commit.

Coleções em `dados/`:

- `decisoes`: decisões do diário de impressão.
- `ajustes`: ajustes em quarentena.
- `mkt_canais`: cabeçalho de cada canal.
- `mkt_passos`: passos do roteiro. O progresso (`feito`, `nota`) é marcado pela própria página.
- `mkt_paginas`: páginas de conteúdo.
- `mkt_calc`: parâmetros da calculadora de taxas.

A exportação é uma fotografia do banco em 30/09/2026. O que for marcado no site depois disso fica só no artefato até uma nova exportação.
