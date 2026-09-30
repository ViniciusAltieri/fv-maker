// Gerado por ferramentas/gerar_canais_js.py — não edite à mão.
window.FV_DADOS = {
 "exportado_em": "2026-09-30T12:00:00",
 "canais": {
  "ml": {
   "atualizado_em": "2026-09-29",
   "destaques": [
    {
     "rotulo": "Tarifa Clássico",
     "valor": "10–14%"
    },
    {
     "rotulo": "Envio até 0,3 kg",
     "valor": "R$ 6,85–12,95"
    },
    {
     "rotulo": "Título",
     "valor": "60 caracteres"
    }
   ],
   "eyebrow": "FV Maker · canal de venda da placa NFC de avaliação",
   "lede": "Tudo o que precisa estar configurado antes do primeiro anúncio, quanto o Mercado Livre desconta de cada venda e o que faz a placa aparecer na busca. As regras de custo de envio mudaram em 02/03/2026; os números aqui já seguem as tabelas novas.",
   "roteiro_intro": "Faça na ordem: cada etapa destrava a seguinte. Marque o quadrado quando terminar e use a anotação para registrar o que aconteceu (prazo de aprovação, dúvida para o contador). O progresso fica salvo no diário."
  },
  "shopee": {
   "atualizado_em": "2026-09-29",
   "destaques": [
    {
     "rotulo": "Comissão até R$ 79,99",
     "valor": "20% + R$ 4,50"
    },
    {
     "rotulo": "Prazo de envio",
     "valor": "1 dia útil"
    },
    {
     "rotulo": "Fotos",
     "valor": "9 · 1:1 · 2 MB"
    }
   ],
   "eyebrow": "FV Maker · canal de venda da placa NFC de avaliação",
   "lede": "A Shopee cobra mais por venda barata, é rígida com prazo de envio e com qualquer menção a contato externo (inclusive QR code nas fotos), e empurra quem vende com frequência para o CNPJ. Em troca, não cobra frete do vendedor e tem ferramentas gratuitas de promoção desde o primeiro dia.",
   "roteiro_intro": "Siga na ordem. O cadastro leva até 3 dias úteis para ser validado e o primeiro anúncio até 48 horas úteis para ser aprovado: comece pela conta enquanto prepara fotos e estoque. O progresso fica salvo no diário."
  }
 },
 "passos": [
  {
   "como": [
    "Crie a conta com o e-mail que vai usar para o negócio (não misture com compras pessoais, se puder).",
    "Escolha um nome de usuário ligado à marca (ex.: FVMAKER): é o nome que o comprador vê como vendedor.",
    "Valide identidade com RG ou CNH e selfie quando pedido.",
    "Se já tem CNPJ, crie a conta como empresa desde o início; converter depois exige pedido de troca de titularidade."
   ],
   "fase": "Conta e segurança",
   "feito": false,
   "fonte": {
    "rotulo": "Validar identidade da empresa",
    "url": "https://vendedores.mercadolivre.com.br/nota/como-validar-passo-a-passo-a-identidade-da-sua-empresa"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Meus dados › Dados pessoais",
   "ordem": 1,
   "porque": "Sem identidade validada você não publica nem recebe. Os dados da conta precisam bater com os do CNPJ se você for emitir nota pelo emissor do Mercado Livre.",
   "tempo": "15 min",
   "titulo": "Criar a conta e validar a identidade",
   "id": "ml-01"
  },
  {
   "como": [
    "Ative o 2FA por Google Authenticator (mais seguro que SMS).",
    "Proteja o app com biometria ou PIN.",
    "Use senha com 14 caracteres ou mais e revise dispositivos e aplicativos autorizados."
   ],
   "critico": true,
   "fase": "Conta e segurança",
   "feito": false,
   "fonte": {
    "rotulo": "Como manter sua conta segura",
    "url": "https://vendedores.mercadolivre.com.br/nota/como-manter-sua-conta-segura-no-mercado-livre"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Configuração › Segurança",
   "ordem": 2,
   "porque": "Conta de vendedor com dinheiro no Mercado Pago é alvo de golpe. O Mercado Livre nunca pede senha e nunca escreve de @gmail ou @hotmail.",
   "tempo": "5 min",
   "titulo": "Ativar a verificação em duas etapas",
   "id": "ml-02"
  },
  {
   "como": [
    "Entre no Mercado Pago com a mesma conta e cadastre a conta bancária para saque.",
    "Depois da primeira venda, veja em Saldos e extratos a data prevista de liberação e anote aqui.",
    "A antecipação existe, mas a taxa só aparece na hora de confirmar. Evite no início."
   ],
   "fase": "Conta e segurança",
   "feito": false,
   "fonte": {
    "rotulo": "Quando o dinheiro é liberado",
    "url": "https://www.mercadolivre.com.br/ajuda/3143"
   },
   "incerto": true,
   "mkt": "ml",
   "nota": "",
   "onde": "Mercado Pago › Saldos e extratos",
   "ordem": 3,
   "porque": "As páginas oficiais divergem: entre 5 e 12 dias após a entrega, a depender da reputação. Sem reputação o prazo é maior. Saber o prazo real define quanto capital de giro você precisa para filamento e tags.",
   "tempo": "10 min",
   "titulo": "Conferir o Mercado Pago e o prazo de liberação do dinheiro",
   "id": "ml-03"
  },
  {
   "como": [
    "Leia a seção de tributação na aba Taxas e tributação.",
    "Recomendação: começar pelo CPF só para testar e abrir o MEI (Artesão em plástico, CNAE 2229-3/99) assim que as vendas ficarem regulares.",
    "Anote aqui a decisão e a data."
   ],
   "critico": true,
   "fase": "Situação fiscal",
   "feito": false,
   "mkt": "ml",
   "nota": "",
   "onde": "Aba Taxas e tributação",
   "ordem": 4,
   "porque": "Define qual documento acompanha o pacote. Com CPF você usa a Declaração de Conteúdo eletrônica (DC-e); com MEI e Inscrição Estadual, NF-e. Agências e Coleta exigem documento fiscal, e a venda habitual pelo CPF tem risco fiscal.",
   "tempo": "30 min",
   "titulo": "Decidir: vender pelo CPF ou abrir o MEI",
   "id": "ml-04"
  },
  {
   "como": [
    "Na venda, clique em Emitir DC-e (só funciona no computador).",
    "Confira os dados do produto e confirme; a SEFAZ autoriza e a etiqueta é liberada.",
    "Imprima a etiqueta e a declaração e cole no pacote."
   ],
   "critico": true,
   "fase": "Situação fiscal",
   "feito": false,
   "fonte": {
    "rotulo": "Como emitir a Declaração de Conteúdo",
    "url": "https://vendedores.mercadolivre.com.br/nota/como-emitir-a-declaracao-de-conteudo-das-minhas-vendas"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Vendas › Emitir DC-e (computador)",
   "ordem": 5,
   "porque": "Sem a DC-e a etiqueta não é liberada, e **após 3 dias sem emiti-la a venda é cancelada automaticamente**. Cancelamento pesa na reputação.",
   "tempo": "10 min por venda",
   "titulo": "Se ficar no CPF: aprender a emitir a DC-e",
   "id": "ml-05"
  },
  {
   "atencao": [
    "Alguns estados (ES, PR, RS, AL, PE, MS, SC) exigem credenciamento prévio para usar o emissor. Confirme com o contador."
   ],
   "como": [
    "Confirme que o MEI tem Inscrição Estadual (sem IE o MEI não emite NF-e).",
    "Compre o certificado e-CNPJ A1 e siga o roteiro para Simples Nacional em Faturamento › Emissor de NFe.",
    "Cadastre o produto com NCM 3926.90.90, CFOP 5.101 (mesmo estado) e 6.107 (outro estado, pessoa física), CSOSN 102, origem 0.",
    "Converta a conta PF para empresa: Meus dados › Dados pessoais › Preciso de ajuda › Alterar a titularidade."
   ],
   "fase": "Situação fiscal",
   "feito": false,
   "fonte": {
    "rotulo": "Como emitir as notas fiscais das minhas vendas",
    "url": "https://vendedores.mercadolivre.com.br/nota/como-emitir-as-notas-fiscais-das-minhas-vendas"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Faturamento › Emissor de NFe",
   "ordem": 6,
   "porque": "O emissor do Mercado Livre é gratuito e envia a nota ao comprador. Pede certificado digital A1 e CNPJ habilitado na SEFAZ com os mesmos dados da conta.",
   "tempo": "1–3 dias",
   "titulo": "Se abrir o MEI: configurar o emissor de NF-e e migrar a conta",
   "id": "ml-06"
  },
  {
   "como": [
    "Monte o pacote real: placa (~58 g), suporte (~13 g), cartão de instruções e envelope de segurança.",
    "Pese e meça; o alvo é ficar folgado abaixo de 0,3 kg e caber em 12 × 15 × 25 cm.",
    "Use embalagem justa: envelope bolha do tamanho da placa, não caixa."
   ],
   "critico": true,
   "fase": "Envio",
   "feito": false,
   "fonte": {
    "rotulo": "Custos de envio por peso",
    "url": "https://www.mercadolivre.com.br/ajuda/3362"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Balança de cozinha + régua",
   "ordem": 7,
   "porque": "O custo de envio é calculado pelo pacote pronto, e o Mercado Livre remede depois do despacho. Passar de 0,3 kg muda a faixa de custo das vendas seguintes.",
   "tempo": "20 min",
   "titulo": "Medir e pesar o pacote final",
   "id": "ml-07"
  },
  {
   "atencao": [
    "Agência exige NF-e ou DC-e antes de imprimir a etiqueta."
   ],
   "como": [
    "Encontre a Agência mais próxima no mapa de agências.",
    "Configure os dias e horários em que consegue despachar.",
    "Confira o horário-limite de cada venda no detalhe da venda e despache no mesmo dia sempre que puder: 97% no prazo mantém o selo \"Chegará amanhã\"."
   ],
   "fase": "Envio",
   "feito": false,
   "fonte": {
    "rotulo": "Como enviar pelas Agências Mercado Livre",
    "url": "https://vendedores.mercadolivre.com.br/nota/como-enviar-suas-vendas-nas-agencias-mercado-livre"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Preferências de venda › Horários de despacho",
   "ordem": 8,
   "porque": "É a modalidade certa para quem começa: você leva o pacote a um ponto comercial perto de casa. Coleta é por convite e exige volume; Flex exige reputação ou Decola; Full não combina com produção sob demanda.",
   "tempo": "15 min",
   "titulo": "Ativar o envio pela Agência Mercado Livre e os horários",
   "id": "ml-08"
  },
  {
   "como": [
    "Imprima um lote com o preset econômico e grave as tags só depois da venda (o link é de cada cliente).",
    "Use o \"Prazo de disponibilidade do produto\" apenas na versão personalizada com logo do cliente.",
    "O prazo conta corrido, com fins de semana e feriados, a partir da hora da venda."
   ],
   "fase": "Envio",
   "feito": false,
   "fonte": {
    "rotulo": "Prazo de disponibilidade do produto",
    "url": "https://www.mercadolivre.com.br/ajuda/como-ajustar-prazo-disponibilidade-produto_3441"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Oficina",
   "ordem": 9,
   "porque": "Prazo de fabricação reduz a visibilidade do anúncio. Com a placa leve e barata de imprimir, manter um pequeno estoque permite prazo zero e despacho em menos de 24 h, o que pesa no ranking.",
   "tempo": "1 lote de impressão",
   "titulo": "Deixar 5 a 10 placas prontas em estoque",
   "id": "ml-09"
  },
  {
   "como": [
    "Ative antes de ficar indisponível, não depois da venda chegar.",
    "Não altere estoque durante as férias: isso pode reativar anúncios."
   ],
   "fase": "Envio",
   "feito": false,
   "fonte": {
    "rotulo": "Modo férias",
    "url": "https://www.mercadolivre.com.br/ajuda/32434"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Anúncios › botão no canto superior direito",
   "ordem": 10,
   "porque": "Se a impressora parar ou você viajar, pausar tudo evita atrasos e cancelamentos. Você continua obrigado a responder perguntas e reclamações.",
   "tempo": "2 min",
   "titulo": "Saber onde fica o modo férias",
   "id": "ml-10"
  },
  {
   "como": [
    "Opção recomendada: Indústria e Comércio › Publicidade e Promoção › **Letreiros no luminosos** (MLB439319). Menos concorrência (~78 mil anúncios), público de comércio e aceita prazo de fabricação.",
    "Alternativa: Casa, Móveis e Decoração › Quadros, Letreiros e Espelhos › **Placas Decorativas** (MLB186421), ~941 mil anúncios.",
    "A maioria dos concorrentes está em Tags NFC (MLB276330). Evite: é categoria de etiqueta eletrônica e atrai exigências de eletrônicos.",
    "Anote aqui a porcentagem real do Clássico e do Premium e atualize a calculadora da aba Taxas."
   ],
   "fase": "Primeiro anúncio",
   "feito": false,
   "incerto": true,
   "mkt": "ml",
   "nota": "",
   "onde": "Vender › Simulador de custos",
   "ordem": 11,
   "porque": "A porcentagem da tarifa muda por categoria e não é pública sem login. A categoria também decide se o anúncio aceita prazo de fabricação e quem o encontra.",
   "tempo": "15 min",
   "titulo": "Escolher a categoria e conferir a tarifa no simulador",
   "id": "ml-11"
  },
  {
   "como": [
    "Título com até 60 caracteres, no formato do Mercado Livre para marca de terceiros: produto + \"para\" + Avaliação Google. Modelos na aba Anúncio da placa.",
    "Marca: **FV Maker**. Material: PLA. Largura 8,8 cm, altura 8,8 cm, espessura 0,6 cm.",
    "Sem código de barras: preencha \"Motivo de GTIN vazio\".",
    "Preencha peso e medidas da embalagem com os números do passo de envio."
   ],
   "fase": "Primeiro anúncio",
   "feito": false,
   "mkt": "ml",
   "nota": "",
   "onde": "Anúncio › Características",
   "ordem": 12,
   "porque": "Ficha técnica completa e categoria correta são os primeiros fatores de posicionamento que a Central de Vendedores cita. Marca e Material são obrigatórios.",
   "tempo": "30 min",
   "titulo": "Escrever título e preencher a ficha técnica",
   "id": "ml-12"
  },
  {
   "atencao": [
    "Não use o logotipo \"G\" do Google em destaque nas fotos e não adicione QR code sobre a imagem. Veja o risco de marca na aba Anúncio da placa."
   ],
   "como": [
    "Primeira foto: placa sobre fundo branco, 1200 × 1200 px, produto ocupando ~95% do quadro, sem texto nem marca d'água.",
    "Fotos seguintes: placa no suporte em um balcão, mão com celular encostando, medidas, detalhe do relevo 3D, verso.",
    "Clip vertical 9:16, 10 a 60 s: celular encostando na placa e a tela de avaliação abrindo.",
    "Até 12 fotos por anúncio."
   ],
   "fase": "Primeiro anúncio",
   "feito": false,
   "fonte": {
    "rotulo": "Como tirar boas fotos",
    "url": "https://www.mercadolivre.com.br/ajuda/Como-tirar-boas-fotos-dos-seus-produtos_1320"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Anúncio › Fotos e Clips",
   "ordem": 13,
   "porque": "Fotos que cumprem os requisitos entram no ranking, e a Central diz que vídeos dobram as vendas em média.",
   "tempo": "1–2 h",
   "titulo": "Produzir fotos e um clip",
   "id": "ml-13"
  },
  {
   "como": [
    "Simule na calculadora os preços que está considerando.",
    "Mercado Livre: mediana dos concorrentes em R$ 59,90. Sugestão: placa R$ 59,90–64,90; placa + suporte R$ 74,90–78,90.",
    "Comece no Clássico; o Premium (parcelado sem juros) custa ~5 pontos percentuais a mais.",
    "Crie um anúncio separado para o kit placa + suporte em vez de vender o suporte avulso."
   ],
   "fase": "Primeiro anúncio",
   "feito": false,
   "mkt": "ml",
   "nota": "",
   "onde": "Aba Taxas e tributação › calculadora",
   "ordem": 14,
   "porque": "Entre R$ 79 e ~R$ 84 você recebe menos do que a R$ 78,90, porque o custo de envio salta de R$ 8,15 para R$ 12,95. O kit paga um único custo de envio.",
   "tempo": "20 min",
   "titulo": "Definir preço, tipo de anúncio e o kit placa + suporte",
   "id": "ml-14"
  },
  {
   "como": [
    "Exemplo: 1 un preço cheio · 3 un −8% · 5 un −15% · 10 un −22%.",
    "Confira na calculadora se a faixa maior ainda dá margem."
   ],
   "fase": "Primeiro anúncio",
   "feito": false,
   "fonte": {
    "rotulo": "Preços de atacado",
    "url": "https://vendedores.mercadolivre.com.br/nota/adicione-precos-de-atacado-e-aumente-o-seu-volume-de-vendas"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Anúncio › Preço › Preços de atacado",
   "ordem": 15,
   "porque": "O comprador típico da placa é um comércio. Até 5 faixas por quantidade, visíveis só para contas com CNPJ validado.",
   "tempo": "10 min",
   "titulo": "Cadastrar preços de atacado para empresas",
   "id": "ml-15"
  },
  {
   "atencao": [
    "Nada de telefone, WhatsApp, e-mail, links ou redes sociais em título, descrição, fotos ou respostas: o anúncio é pausado."
   ],
   "como": [
    "Use os textos-modelo da aba Anúncio da placa.",
    "Explique como o comprador manda o link do Google Maps pelo chat da venda para você gravar a tag.",
    "Inclua o aviso de produto independente, sem afiliação com o Google."
   ],
   "fase": "Primeiro anúncio",
   "feito": false,
   "mkt": "ml",
   "nota": "",
   "onde": "Anúncio › Descrição · Perguntas › Respostas rápidas",
   "ordem": 16,
   "porque": "As mesmas 10 perguntas chegam sempre (precisa de app? funciona em iPhone? vem configurada?). Respostas prontas derrubam o tempo de resposta, que conta no ranking.",
   "tempo": "30 min",
   "titulo": "Escrever a descrição e as respostas rápidas",
   "id": "ml-16"
  },
  {
   "como": [
    "Deixe R$ 250 guardados no Mercado Pago.",
    "Ative o programa e confira os benefícios liberados: publicidade, Central de promoções, Clips e Flex.",
    "O valor volta integral se nenhuma venda for afetada; cada venda afetada (até 5) desconta R$ 50."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "fonte": {
    "rotulo": "Programa Decola",
    "url": "https://www.mercadolivre.com.br/ajuda/33314"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Reputação › Programa Decola",
   "ordem": 17,
   "porque": "Conta nova fica cinza até 10 vendas e sem cor não entra em promoções nem em anúncios pagos. O Decola dá reputação verde por até 365 dias e até R$ 250 em publicidade grátis.",
   "tempo": "10 min",
   "titulo": "Ativar o Programa Decola",
   "id": "ml-17"
  },
  {
   "como": [
    "Crie a campanha automática com o anúncio da placa e o do kit.",
    "Use o ROAS objetivo sugerido pela plataforma no início; revise depois de 2 semanas.",
    "Pause palavras que gastam sem vender (ex.: buscas por tag NFC avulsa)."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "fonte": {
    "rotulo": "Requisitos do Product Ads",
    "url": "https://vendedores.mercadolivre.com.br/nota/quais-requisitos-devo-cumprir-para-usar-o-product-ads"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Publicidade › Product Ads",
   "ordem": 18,
   "porque": "Anúncio novo sem histórico demora a aparecer na busca orgânica. Com o crédito do Decola, a primeira campanha sai sem custo.",
   "tempo": "20 min",
   "titulo": "Criar a primeira campanha de Product Ads",
   "id": "ml-18"
  },
  {
   "como": [
    "Ative as notificações do app para perguntas e vendas.",
    "Grave a tag e despache na Agência no mesmo dia da venda."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "mkt": "ml",
   "nota": "",
   "onde": "Perguntas · Vendas",
   "ordem": 19,
   "porque": "Pergunta sem resposta por mais de 1 hora afeta o tempo de resposta. Despacho atrasado acima de 10% tira o verde.",
   "tempo": "Todo dia",
   "titulo": "Responder perguntas em menos de 1 hora e despachar no mesmo dia",
   "id": "ml-19"
  },
  {
   "como": [
    "Depois das primeiras vendas, abra o desempenho de cada anúncio e corrija o que a plataforma apontar.",
    "Compare o que os compradores perguntam com o que está na descrição e complete."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "fonte": {
    "rotulo": "Experiência de compra",
    "url": "https://www.mercadolivre.com.br/ajuda/31968"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Anúncios › Analisar desempenho",
   "ordem": 20,
   "porque": "A nota de experiência de compra vai de 0 a 100. Abaixo de 75 o anúncio perde exposição; abaixo de 30 pode ser cancelado.",
   "tempo": "15 min por semana",
   "titulo": "Revisar a experiência de compra e a qualidade do anúncio",
   "id": "ml-20"
  },
  {
   "como": [
    "Crie um desconto por quantidade (ex.: leve 3, pague menos).",
    "Inscreva o anúncio no evento de Black Friday quando ele aparecer na Central.",
    "Prepare estoque extra de placas para novembro e dezembro."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "fonte": {
    "rotulo": "Como aproveitar os descontos",
    "url": "https://vendedores.mercadolivre.com.br/nota/como-aproveitar-os-descontos-para-vender-mais"
   },
   "mkt": "ml",
   "nota": "",
   "onde": "Central de promoções",
   "ordem": 21,
   "porque": "A Central de promoções libera com reputação verde, amarela ou Decola. Campanhas comerciais podem reduzir a tarifa. Black Friday em 27/11/2026.",
   "tempo": "15 min",
   "titulo": "Inscrever-se no desconto por quantidade e na Black Friday",
   "id": "ml-21"
  },
  {
   "como": [
    "Cadastre-se pelo computador (seller.shopee.com.br) ou pelo app, com mais de 18 anos.",
    "Informe telefone e um e-mail que você lê todo dia.",
    "Enviar o cadastro com erro várias vezes no mesmo dia bloqueia novas tentativas por 24 h: confira antes de enviar."
   ],
   "fase": "Conta e segurança",
   "feito": false,
   "fonte": {
    "rotulo": "Cadastro de vendedor",
    "url": "https://seller.shopee.com.br/edu/article/13388"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "seller.shopee.com.br",
   "ordem": 101,
   "porque": "Sem telefone cadastrado os produtos não ficam visíveis, e o resultado da análise do cadastro chega por e-mail.",
   "tempo": "15 min",
   "titulo": "Criar a conta de vendedor",
   "id": "sp-01"
  },
  {
   "como": [
    "CPF: documento (RG, CNH, CIN) frente e verso colorido e selfie.",
    "CNPJ/MEI: também o CCMEI ou o print do cartão CNPJ da Receita.",
    "Escreva o nome exatamente como na Receita: MAIÚSCULAS e sem acento."
   ],
   "critico": true,
   "fase": "Conta e segurança",
   "feito": false,
   "fonte": {
    "rotulo": "Documentos para verificação",
    "url": "https://seller.shopee.com.br/edu/article/7613"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Loja › Perfil da Loja › Verificação de Cadastro",
   "ordem": 102,
   "porque": "Loja sem verificação completa tem saque restrito e não passa para CNPJ depois.",
   "tempo": "até 3 dias úteis",
   "titulo": "Enviar a verificação de cadastro",
   "id": "sp-02"
  },
  {
   "como": [
    "Adicione a conta em que quer receber.",
    "Saques são gratuitos, até 7 por semana. O dinheiro fica retido até o comprador confirmar o recebimento ou 7 dias após a entrega, liberado em dias úteis das 9h às 18h."
   ],
   "fase": "Conta e segurança",
   "feito": false,
   "fonte": {
    "rotulo": "Contas bancárias e saques",
    "url": "https://seller.shopee.com.br/edu/article/2856"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Central do Vendedor › Contas Bancárias › + Adicionar",
   "ordem": 103,
   "porque": "O nome precisa ser igual ao da Receita. CNPJ só saca para conta da mesma titularidade.",
   "tempo": "5 min",
   "titulo": "Cadastrar a conta bancária",
   "id": "sp-03"
  },
  {
   "como": [
    "Cadastre telefone, e-mail, senha, PIN e reconhecimento facial.",
    "Denuncie mensagens suspeitas em vez de responder."
   ],
   "fase": "Conta e segurança",
   "feito": false,
   "fonte": {
    "rotulo": "Métodos de verificação",
    "url": "https://seller.shopee.com.br/edu/article/8500"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Configurações da Loja › Conta e Segurança",
   "ordem": 104,
   "porque": "Golpes de phishing e ofertas de \"brushing\" (pedidos e avaliações falsos) chegam pelo próprio chat. Brushing congela a conta.",
   "tempo": "5 min",
   "titulo": "Ativar mais de um método de verificação",
   "id": "sp-04"
  },
  {
   "atencao": [
    "A regra dos \"90 dias consecutivos com vendas ativas\" não explica como é medida [incerto]."
   ],
   "como": [
    "Com CPF, o pacote segue com Declaração de Conteúdo, já integrada à etiqueta.",
    "Se abrir o MEI antes de começar, cadastre a loja já como CNPJ.",
    "Se começar no CPF, planeje a migração: Loja › Perfil da Loja › Verificação de cadastro › Converter para CNPJ. Leva ~30 dias, é irreversível e a loja continua vendendo."
   ],
   "critico": true,
   "fase": "Situação fiscal",
   "feito": false,
   "fonte": {
    "rotulo": "Comissão CPF e CNPJ em 2026",
    "url": "https://seller.shopee.com.br/edu/article/26839"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Aba Taxas e tributação",
   "ordem": 105,
   "porque": "A Shopee exige migrar para CNPJ ao atingir R$ 81 mil em 12 meses **ou** ao manter 90 dias consecutivos com vendas ativas; quem não migra pode ter a loja restringida. CPF paga R$ 3 a mais por item acima de 450 pedidos em 90 dias e não tem acesso a Vendedor Indicado, Afiliados, Shopee Acelera nem coleta.",
   "tempo": "30 min",
   "titulo": "Decidir: CPF ou CNPJ",
   "id": "sp-05"
  },
  {
   "atencao": [
    "MEI sem Inscrição Estadual não usa o emissor: emite nota avulsa (NFA-e) no site da SEFAZ."
   ],
   "como": [
    "Requisitos: CNPJ, Inscrição Estadual, Simples ou MEI com IE, certificado A1 (.pfx).",
    "Em Emissor de NF-e padrão, escolha Shopee e envie o certificado.",
    "Em cada produto: NCM 3926.90.90, CFOP 5.101 e 6.107, origem 0, CSOSN 102, unidade UN.",
    "Emita por pedido em Meus Pedidos › A Enviar › Emitir NF-e, ou em massa (até 50) em Pedido › Envio em massa › NF-e Pendente."
   ],
   "fase": "Situação fiscal",
   "feito": false,
   "fonte": {
    "rotulo": "Emissor de NF-e da Shopee",
    "url": "https://seller.shopee.com.br/edu/article/8334"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Perfil da loja › Configurações da NF-e",
   "ordem": 106,
   "porque": "Com CNPJ, toda venda precisa de NF-e para liberar a etiqueta. O emissor da Shopee é o caminho mais simples para o MEI.",
   "tempo": "1 h",
   "titulo": "Se tiver CNPJ: ativar o emissor de NF-e da Shopee",
   "id": "sp-06"
  },
  {
   "como": [
    "Veja qual canal a sua conta recebeu.",
    "Localize a agência Shopee Xpress mais próxima em shopeexpress.com.br/service-point."
   ],
   "fase": "Envio",
   "feito": false,
   "fonte": {
    "rotulo": "Métodos de envio",
    "url": "https://seller.shopee.com.br/edu/article/16287"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Pedido › Configurações de Envio › Canal Logístico",
   "ordem": 107,
   "porque": "Você não escolhe o canal: a Shopee define pelo CPF/CNPJ e pela região. CPF costuma postar em agência Shopee Xpress; CNPJ em região atendida entra na coleta.",
   "tempo": "10 min",
   "titulo": "Conferir o canal logístico e a agência mais próxima",
   "id": "sp-07"
  },
  {
   "como": [
    "Monte o pacote real (placa, suporte, cartão, envelope) e pese.",
    "Cadastre peso e medidas **com a embalagem**. A cubagem usa fator 6.000 (C × L × A em cm ÷ 6.000).",
    "A primeira faixa vai até 500 g: a placa e o kit cabem com folga."
   ],
   "critico": true,
   "fase": "Envio",
   "feito": false,
   "fonte": {
    "rotulo": "Peso e dimensões",
    "url": "https://seller.shopee.com.br/edu/article/3305"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Produto › Envio › Peso e dimensões",
   "ordem": 108,
   "porque": "Diferença entre o peso cadastrado e o aferido gera cobrança adicional em até 90 dias, e peso e medida errados são violação de anúncio.",
   "tempo": "20 min",
   "titulo": "Pesar, medir e cadastrar o pacote com a embalagem",
   "id": "sp-08"
  },
  {
   "como": [
    "Mantenha 5 a 10 placas impressas e grave a tag no dia do pedido.",
    "Pedidos de domingo e segunda vencem na terça: separe a manhã de terça para eles.",
    "Sob encomenda (2 a 15 dias úteis) só para a versão personalizada. No máximo 20% dos anúncios da loja podem ser sob encomenda, e a liberação é pedida ao Atendimento."
   ],
   "fase": "Envio",
   "feito": false,
   "fonte": {
    "rotulo": "Prazos de envio e sob encomenda",
    "url": "https://seller.shopee.com.br/edu/article/2804"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Oficina · Pedidos › A Enviar",
   "ordem": 109,
   "porque": "Pagamento até 13h (terça a sexta) precisa ser postado no mesmo dia. Atraso em 5% dos pedidos da semana já gera ponto de penalidade.",
   "tempo": "1 lote de impressão",
   "titulo": "Organizar a produção para o prazo de 1 dia útil",
   "id": "sp-09"
  },
  {
   "como": [
    "Agende com pelo menos 3 dias de antecedência.",
    "Envie os pedidos pendentes e responda as devoluções antes de ativar."
   ],
   "fase": "Envio",
   "feito": false,
   "fonte": {
    "rotulo": "Modo Férias",
    "url": "https://seller.shopee.com.br/edu/article/3324"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Configurações da Loja › Modo Férias",
   "ordem": 110,
   "porque": "Pausar a loja evita pedidos que você não conseguiria enviar. Não funciona durante campanha em andamento.",
   "tempo": "2 min",
   "titulo": "Saber usar o modo férias",
   "id": "sp-10"
  },
  {
   "como": [
    "Nome da loja: **FV Maker** (8 caracteres, dentro do limite de 5 a 30). Sem marca de terceiros (não use \"Google\"), sem \"oficial\" e sem contatos.",
    "Monte a decoração pelo computador com um dos modelos prontos: banner com a placa no balcão e o kit em destaque."
   ],
   "fase": "Loja e atendimento",
   "feito": false,
   "fonte": {
    "rotulo": "Nome da loja",
    "url": "https://seller.shopee.com.br/edu/article/2814"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Loja › Perfil da Loja · Decoração da Loja (computador)",
   "ordem": 111,
   "porque": "O nome aparece em toda busca e só pode ser trocado uma vez a cada 30 dias. Nome impróprio rende até 2 pontos de penalidade.",
   "tempo": "30 min",
   "titulo": "Criar a loja FV Maker: nome e decoração",
   "id": "sp-11"
  },
  {
   "como": [
    "Resposta automática padrão com o pedido do link do Google Maps (texto na aba Anúncio da placa).",
    "Resposta fora do horário (só pela Central no computador).",
    "Atalhos com as respostas-modelo das perguntas frequentes.",
    "Ative as notificações do app para responder rápido."
   ],
   "fase": "Loja e atendimento",
   "feito": false,
   "fonte": {
    "rotulo": "Taxa de resposta do chat",
    "url": "https://seller.shopee.com.br/edu/article/2713"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Atendimento ao cliente › Assistente do Chat",
   "ordem": 112,
   "porque": "A taxa de resposta só conta respostas em até 12 horas, inclusive fins de semana. Resposta automática não conta, mas atalhos enviados em até 12 h contam.",
   "tempo": "20 min",
   "titulo": "Configurar o assistente do chat",
   "id": "sp-12"
  },
  {
   "como": [
    "Aceite a sugestão da Shopee se ela cair em papelaria, casa ou decoração. Concorrentes usam Papelaria › Outros.",
    "Evite categorias de eletrônicos e acessórios de celular.",
    "Preencha ao menos 3 atributos: material PLA, medidas 8,8 × 8,8 × 0,6 cm, cor."
   ],
   "fase": "Primeiro anúncio",
   "feito": false,
   "incerto": true,
   "mkt": "shopee",
   "nota": "",
   "onde": "Produtos › Adicionar Produto",
   "ordem": 113,
   "porque": "Categoria errada e menos de 3 atributos derrubam a qualidade do anúncio. Categorias de eletrônicos podem cobrar homologação Anatel (código 504).",
   "tempo": "15 min",
   "titulo": "Escolher categoria e preencher atributos",
   "id": "sp-13"
  },
  {
   "como": [
    "Fórmula da Shopee: nome do produto + marca + especificações. Modelos na aba Anúncio da placa.",
    "Na descrição, explique o funcionamento, as medidas, o que vem no pacote e como enviar o link pelo chat.",
    "Sem WhatsApp, Instagram, sites, Pix externo ou QR code em nenhum lugar do anúncio."
   ],
   "fase": "Primeiro anúncio",
   "feito": false,
   "mkt": "shopee",
   "nota": "",
   "onde": "Produto › Informações básicas",
   "ordem": 114,
   "porque": "Título com pelo menos 10 caracteres e descrição acima de 60 caracteres são o mínimo para o anúncio ser \"Qualificado\". Marca de terceiros sem autorização, até para indicar compatibilidade, é violação de propriedade intelectual.",
   "tempo": "30 min",
   "titulo": "Escrever título e descrição",
   "id": "sp-14"
  },
  {
   "como": [
    "Até 9 imagens em 1:1, até 2 MB cada. Capa em fundo limpo.",
    "**Desfoque ou esconda o QR code** em todas as fotos e não mostre o logotipo do Google.",
    "Vídeo de 10 a 60 s, até 30 MB: o celular encostando e a tela de avaliação abrindo."
   ],
   "critico": true,
   "fase": "Primeiro anúncio",
   "feito": false,
   "fonte": {
    "rotulo": "Transações fora da Shopee",
    "url": "https://seller.shopee.com.br/edu/article/11123"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Produto › Mídia",
   "ordem": 115,
   "porque": "Anúncio com vídeo sobe de \"Qualificado\" para \"Excelente\". Na Shopee, QR code visível na foto é tratado como direcionamento para fora da plataforma: 2 pontos de penalidade por ocorrência.",
   "tempo": "1–2 h",
   "titulo": "Fotos 1:1 e vídeo para o anúncio \"Excelente\"",
   "id": "sp-15"
  },
  {
   "como": [
    "Simule na calculadora.",
    "Mediana dos concorrentes na Shopee: R$ 42,50. Sugestão: placa R$ 44,90–49,90; placa + suporte R$ 59,90–64,90.",
    "Não venda o suporte sozinho barato: a R$ 19,90, 42,6% vira taxa."
   ],
   "fase": "Primeiro anúncio",
   "feito": false,
   "mkt": "shopee",
   "nota": "",
   "onde": "Aba Taxas e tributação › calculadora",
   "ordem": 116,
   "porque": "Entre R$ 80 e ~R$ 87,78 você recebe menos do que a R$ 79,90, porque a comissão muda de 20% + R$ 4,50 para 14% + R$ 16. A taxa fixa é por item: o kit num anúncio só paga uma vez.",
   "tempo": "20 min",
   "titulo": "Definir preço e montar o kit placa + suporte",
   "id": "sp-16"
  },
  {
   "como": [
    "Revise tudo antes de publicar.",
    "Use o tempo de espera para gravar os vídeos do Shopee Vídeo."
   ],
   "fase": "Primeiro anúncio",
   "feito": false,
   "fonte": {
    "rotulo": "Qualidade do anúncio",
    "url": "https://seller.shopee.com.br/edu/article/21806"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Produtos › Meus Produtos",
   "ordem": 117,
   "porque": "Editar o anúncio durante a análise joga ele de volta para o fim da fila.",
   "tempo": "até 48 h úteis",
   "titulo": "Publicar e esperar a aprovação sem editar",
   "id": "sp-17"
  },
  {
   "como": [
    "Crie com lance automático e orçamento diário pequeno (ex.: R$ 10).",
    "Não mexa por 7 dias (fase de aprendizado).",
    "Compare o ROAS com o de equilíbrio da calculadora (preço ÷ lucro por unidade)."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "fonte": {
    "rotulo": "Portal Shopee Ads",
    "url": "https://ads.shopee.com.br/learn"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Shopee Ads › GMV Max",
   "ordem": 118,
   "porque": "Não há programa oficial de exposição para loja nova. Esta campanha é feita para itens com até 30 dias e busca os primeiros pedidos com lance automático.",
   "tempo": "15 min",
   "titulo": "Ativar \"Promover Meus Novos Produtos\"",
   "id": "sp-18"
  },
  {
   "como": [
    "Cupom de Seguidor.",
    "Leve Mais por Menos: 2 placas com 10%, 3 com 15%.",
    "Oferta Relâmpago da Loja criada com 3 dias de antecedência.",
    "Nunca suba o preço antes de uma promoção: desconto enganoso é violação."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "fonte": {
    "rotulo": "Ferramentas de marketing",
    "url": "https://seller.shopee.com.br/edu/article/18421"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Central de Marketing",
   "ordem": 119,
   "porque": "São grátis, não dependem de convite e aumentam conversão e seguidores.",
   "tempo": "20 min",
   "titulo": "Ligar as promoções gratuitas",
   "id": "sp-19"
  },
  {
   "como": [
    "Vertical, até 1 min, até 6 produtos por vídeo.",
    "Sem preço, sem promoção e sem QR legível. Use músicas liberadas."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "fonte": {
    "rotulo": "Shopee Vídeo",
    "url": "https://seller.shopee.com.br/edu/article/23493"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Live & Vídeo › Vídeo › Enviar Vídeo",
   "ordem": 120,
   "porque": "Vídeo curto leva a placa para quem não está buscando por ela. O NFC funcionando em um toque é o gancho visual.",
   "tempo": "1 h",
   "titulo": "Publicar 2 ou 3 vídeos no Shopee Vídeo",
   "id": "sp-20"
  },
  {
   "como": [
    "Entre todo dia na Central e poste até 13h.",
    "Toda segunda: confira taxa de não envio, envio atrasado e pontos. Meta abaixo de 2%.",
    "Poste também aos sábados quando houver pedido: treina a regra dos 20% do Vendedor Indicado."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "fonte": {
    "rotulo": "Pontos de penalidade",
    "url": "https://seller.shopee.com.br/edu/article/7955"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Central do Vendedor › Desempenho da Conta",
   "ordem": 121,
   "porque": "7 dias sem entrar na Central deixam a loja inativa. Pontos de penalidade são lançados às segundas e você tem 14 dias para recorrer.",
   "tempo": "10 min por dia",
   "titulo": "Rotina diária e conferência de toda segunda",
   "id": "sp-21"
  },
  {
   "como": [
    "Responda todas as avaliações (a resposta é única e não pode ser editada).",
    "Depois da entrega, lembre pelo chat de confirmar o recebimento e avaliar.",
    "Nunca peça que o comprador mude o motivo de uma devolução."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "mkt": "shopee",
   "nota": "",
   "onde": "Loja › Avaliações",
   "ordem": 122,
   "porque": "Nota da loja de 4,5 ou mais é requisito do Vendedor Indicado e do Hot Listing. Cartão no pacote com Instagram ou WhatsApp é proibido.",
   "tempo": "5 min por avaliação",
   "titulo": "Responder avaliações e pedir avaliação só pelo chat",
   "id": "sp-22"
  },
  {
   "como": [
    "30 pedidos e 10 compradores únicos em 30 dias, nota 4,5 ou mais, chat 60% ou mais, preparação em até 1 dia útil, 20% dos pendentes enviados no sábado, até 1 ponto de penalidade.",
    "Só então avalie Afiliados (comissão a partir de 4%) e convites de Campanhas de Destaque (3,5% sobre todas as vendas da loja, com renovação automática)."
   ],
   "fase": "Primeiras semanas",
   "feito": false,
   "fonte": {
    "rotulo": "Vendedor Indicado",
    "url": "https://seller.shopee.com.br/edu/article/18456"
   },
   "mkt": "shopee",
   "nota": "",
   "onde": "Central do Vendedor › Vendedor Indicado",
   "ordem": 123,
   "porque": "O selo dá confiança, acesso a anúncios da loja e taxa menor no Shopee Acelera.",
   "tempo": "Meta de 3 meses",
   "titulo": "Depois de 90 dias com CNPJ: mirar o Vendedor Indicado",
   "id": "sp-23"
  }
 ],
 "paginas": {
  "comum-produto": {
   "aba": "produto",
   "atualizado_em": "2026-09-29",
   "blocos": [
    {
     "nivel": "risco",
     "paragrafos": [
      "As diretrizes de marca do Google proíbem usar elementos da marca em mercadorias, imitar o logo ou a combinação de cores e sugerir afiliação. Citar o Google em texto simples, para descrever a função, é defensável.",
      "Quase todos os concorrentes usam o G em quatro cores e não há relato público de denúncia em massa. O risco é assimétrico: uma única denúncia pelo Programa de Proteção de Marcas pausa todos os anúncios de uma vez, com poucos dias úteis para responder, e reincidência afeta a conta.",
      "A lei brasileira (LPI, art. 132, IV) só protege a citação de marca \"sem conotação comercial\" [consultar advogado de PI]."
     ],
     "tipo": "alerta",
     "titulo": "O maior risco do produto: o \"G\" colorido do Google"
    },
    {
     "itens": [
      {
       "d": "Placa sem o G oficial colorido: estrelas amarelas, ícone NFC e \"Avalie-nos no Google!\" em tipografia própria. A versão com G fica para venda direta.",
       "t": "Versão marketplace"
      },
      {
       "d": "Foto principal sem o logo do Google. Nas outras, mostre a tela do celular abrindo a avaliação.",
       "t": "Fotos"
      },
      {
       "d": "\"Placa para Avaliação no Google\". Nunca \"Google Oficial\", \"Original\" ou o nome do Google como marca do produto.",
       "t": "Título descritivo"
      },
      {
       "d": "Produto independente, não fabricado nem endossado pelo Google (texto pronto abaixo).",
       "t": "Aviso na descrição"
      },
      {
       "d": "Diferencial e menos dependência da marca Google.",
       "t": "Personalizada com a logo do cliente"
      },
      {
       "d": "Anúncios separados por variação e kit; venda direta pelo site com o conversor como canal paralelo.",
       "t": "Espalhar o risco"
      }
     ],
     "ordenada": true,
     "tipo": "lista",
     "titulo": "Como reduzir o risco"
    },
    {
     "nivel": "dica",
     "paragrafos": [
      "A política de avaliações do Google proíbe pedir avaliações só a clientes satisfeitos e oferecer incentivo. Não escreva \"aumente sua nota\", \"só avaliações 5 estrelas\" ou \"ganhe brinde por avaliar\". Isso também evita reclamação do comprador."
     ],
     "tipo": "alerta",
     "titulo": "Promessa: facilitar a avaliação, nunca garantir 5 estrelas"
    },
    {
     "itens": [
      {
       "tag": "Acabamento",
       "texto": "O mercado é dominado por acrílico e PVC impressos. A peça em relevo e o suporte próprio justificam preço acima da mediana.",
       "titulo": "Relevo 3D com suporte de mesa"
      },
      {
       "tag": "Configuração",
       "texto": "Você gera o link curto de avaliação no conversor e grava a tag antes do envio. O líder de vendas cobra por isso; aqui é padrão.",
       "titulo": "Chega pronta para usar"
      },
      {
       "tag": "Segurança",
       "texto": "Tag NTAG sem bloqueio pode ser regravada por qualquer celular com o app NFC Tools. Bloquear e dizer isso no anúncio é argumento que ninguém usa.",
       "titulo": "Tag bloqueada contra regravação"
      },
      {
       "tag": "Honestidade",
       "texto": "Um concorrente com selo de mais vendido anuncia \"NFC e QR Code\" e não entrega QR, e isso gera reclamação. Só anuncie QR se ele estiver na peça.",
       "titulo": "NFC e QR de verdade"
      }
     ],
     "tipo": "cards",
     "titulo": "Diferenciais que nenhum concorrente comunica"
    },
    {
     "itens": [
      {
       "rotulo": "Precisa baixar aplicativo?",
       "texto": "Não precisa. Seu cliente encosta o celular na placa (NFC) ou aponta a câmera para o QR Code, e a tela de avaliação da sua empresa no Google abre direto. Você também não precisa instalar nada."
      },
      {
       "rotulo": "Funciona em iPhone?",
       "texto": "Sim. Do iPhone XS em diante a leitura por aproximação é automática, com a tela desbloqueada. No iPhone 7 ao X, use o Leitor de NFC da Central de Controle. Qualquer iPhone lê o QR Code pela câmera."
      },
      {
       "rotulo": "Funciona em Android?",
       "texto": "Sim, na maioria dos Android com NFC ligado nas configurações. Quem não tiver NFC usa o QR Code pela câmera."
      },
      {
       "rotulo": "Vem configurada?",
       "texto": "Vem sim. Depois da compra, envie aqui pelo chat o link da sua empresa no Google Maps, ou o nome e a cidade da empresa. Geramos o link oficial de avaliação, gravamos na placa e testamos antes de enviar."
      },
      {
       "rotulo": "Tem mensalidade?",
       "texto": "Não. O pagamento é único. O chip não tem bateria e não usa internet: quem abre a avaliação é o celular do seu cliente."
      },
      {
       "rotulo": "Alguém pode mudar o link da placa?",
       "texto": "Não. Depois de gravar, bloqueamos o chip, então ninguém consegue reprogramá-lo com outro celular."
      },
      {
       "rotulo": "Quanto tempo dura?",
       "texto": "O chip não tem bateria e guarda o link por anos. A placa é de uso interno: evite sol direto e fontes de calor."
      },
      {
       "rotulo": "Funciona colada em metal?",
       "texto": "Em vidro, madeira, MDF e balcão funciona normalmente. Superfície de metal atrapalha a leitura por aproximação; nesse caso use o suporte de mesa que acompanha o kit."
      },
      {
       "rotulo": "Qual o tamanho?",
       "texto": "A placa mede 8,8 × 8,8 cm e tem 6 mm de espessura. No suporte de mesa, fica inclinada para leitura no balcão."
      },
      {
       "rotulo": "Garante mais avaliações boas?",
       "texto": "A placa facilita muito a avaliação, porque o cliente chega à tela em um toque. A nota quem dá é o cliente, e o Google não permite oferecer brinde em troca de avaliação."
      },
      {
       "rotulo": "Aviso de não afiliação (descrição)",
       "texto": "Produto independente, fabricado pela FV Maker. Não é fabricado, patrocinado nem endossado pelo Google. Google é marca registrada da Google LLC e é citada apenas para indicar a função do produto."
      },
      {
       "rotulo": "Mensagem logo após a venda",
       "texto": "Obrigado por comprar na FV Maker! Para gravarmos a sua placa, envie por aqui o link da sua empresa no Google Maps (no app do Maps: abra a sua empresa > Compartilhar > Copiar link) ou o nome e a cidade da empresa como aparecem no Google. Gravamos, testamos e enviamos no mesmo dia."
      }
     ],
     "texto": "Use como respostas rápidas nas perguntas e no chat. Sem telefone, links ou redes sociais.",
     "tipo": "modelos",
     "titulo": "Respostas-modelo para as perguntas mais comuns"
    }
   ],
   "fontes": [
    {
     "rotulo": "Google — Brand Resource Center (diretrizes de marca)",
     "url": "https://about.google/brand-resource-center/guidance/"
    },
    {
     "rotulo": "Google — política de conteúdo das avaliações",
     "url": "https://support.google.com/local-guides/answer/2622994"
    },
    {
     "rotulo": "Mercado Livre — uso indevido de marca",
     "url": "https://www.mercadolivre.com.br/ajuda/17754"
    },
    {
     "rotulo": "Mercado Livre — Programa de Proteção da Propriedade Intelectual",
     "url": "https://www.mercadolivre.com.br/ajuda/Programa-de-Prote%C3%A7ao-Propriedade-Intelectual_2099"
    },
    {
     "rotulo": "Nubimetrics — propriedade intelectual no Mercado Livre",
     "url": "https://academia.nubimetrics.com/br/propriedade-intelectual-no-mercado-livre-o-que-voce-precisa-saber"
    }
   ],
   "intro": "Vale para o Mercado Livre e para a Shopee. Levantado a partir de ~70 anúncios concorrentes, das diretrizes de marca do Google e das políticas de propriedade intelectual das duas plataformas.",
   "mkt": "comum",
   "ordem": 0,
   "titulo": "Marca, promessa e perguntas frequentes"
  },
  "comum-tributacao": {
   "aba": "tributacao",
   "atualizado_em": "2026-09-29",
   "blocos": [
    {
     "itens": [
      {
       "tag": "Limite do MEI",
       "texto": "Média de R$ 6.750 por mês. O projeto que sobe o teto para R$ 130 mil (PLP 108/2021) ainda aguarda parecer na Câmara e **não é lei**.",
       "titulo": "R$ 81.000 por ano"
      },
      {
       "tag": "DAS-MEI indústria/comércio",
       "texto": "R$ 81,05 de INSS (5% do salário mínimo de R$ 1.621) + R$ 1,00 de ICMS. Valor fixo, não importa quanto você vende. Vence todo dia 20.",
       "titulo": "R$ 82,05 por mês"
      },
      {
       "tag": "Ocupação MEI sugerida",
       "texto": "CNAE 2229-3/99. Não existe ocupação MEI de \"impressão 3D\". Secundária possível: Fabricante de letreiros, placas e painéis não luminosos (3299-0/03) — confira se ela acrescenta ISS [contador].",
       "titulo": "Artesão(ã) em plástico independente"
      },
      {
       "tag": "Simples Nacional (ME)",
       "texto": "Anexo II (indústria), primeira faixa até R$ 180 mil em 12 meses. O DAS já inclui IRPJ, CSLL, PIS, COFINS, CPP, IPI e ICMS.",
       "titulo": "4,5% sobre a venda"
      }
     ],
     "tipo": "cards",
     "titulo": "Os números que importam em 2026"
    },
    {
     "colunas": [
      "Faturamento",
      "CPF",
      "MEI",
      "ME (Simples, Anexo II)"
     ],
     "linhas": [
      [
       "R$ 2 mil/mês",
       "Sem imposto recolhido na prática, mas o ICMS é devido e a venda habitual pode ser equiparada a empresa. Aceitável só para teste.",
       "R$ 82,05 de DAS + certificado/emissor → cerca de 4 a 9% do faturamento",
       "DAS ~R$ 90 + contador R$ 150–500 [estimativa] → não compensa"
      ],
      [
       "R$ 6 mil/mês",
       "Risco alto: DIMP e e-Financeira informam essas vendas ao Fisco. Perto da cobrança extra de CPF da Shopee.",
       "R$ 82,05 → cerca de 1,4%. Dentro do limite, mas perto do teto.",
       "DAS ~R$ 270 + contador + pró-labore → R$ 420–950 [estimativa]"
      ],
      [
       "R$ 10 mil/mês",
       "Inviável",
       "Não permitido: 48% acima do limite, desenquadramento retroativo a janeiro",
       "DAS ~R$ 450 + contador + pró-labore → R$ 600–1.130 [estimativa]"
      ]
     ],
     "nota": "Pró-labore de 1 salário mínimo na ME = R$ 178,31 de INSS (11%) [contador].",
     "texto": "Só tributos e custo fixo de formalização. As taxas dos marketplaces estão na calculadora acima.",
     "tipo": "tabela",
     "titulo": "CPF, MEI ou ME: quanto custa em cada faturamento"
    },
    {
     "nivel": "dica",
     "paragrafos": [
      "Abrir o **MEI** antes de a venda virar rotina. Custa R$ 82,05 por mês, dá CNPJ (que a Shopee e o Mercado Livre tratam melhor que CPF) e cobre com folga as primeiras centenas de placas.",
      "Vender pelo CPF só enquanto testa o anúncio. Mercado Pago e ShopeePay informam os recebimentos à Receita (e-Financeira) e às SEFAZ (DIMP), inclusive de quem vende por CPF."
     ],
     "tipo": "alerta",
     "titulo": "Recomendação para começar"
    },
    {
     "itens": [
      {
       "d": "Mercado Livre e Shopee aceitam CPF. A Shopee cobra R$ 3,00 a mais por item de vendedor CPF com mais de 450 pedidos em 90 dias e não dá acesso a algumas campanhas. O Full do Mercado Livre exige CNPJ.",
       "t": "Plataformas"
      },
      {
       "d": "Quem vende com habitualidade o que fabrica pode ser equiparado a empresa individual (RIR/2018, art. 162) e cobrado como pessoa jurídica, com multa de 75% em fiscalização [contador].",
       "t": "Imposto de Renda"
      },
      {
       "d": "É contribuinte quem faz circular mercadoria com habitualidade (LC 87/1996, art. 4º), com ou sem CNPJ.",
       "t": "ICMS"
      },
      {
       "d": "Pessoa física com receita abaixo de R$ 40.500/ano não paga IBS/CBS e está dispensada de CNPJ para esses tributos até 2028. Isso **não** afasta ICMS nem IR [contador].",
       "t": "Nanoempreendedor"
      },
      {
       "d": "Desde 2026 há isenção efetiva até R$ 5.000/mês de rendimento. O enquadramento do lucro de venda de produto fabricado em carnê-leão não está claro [contador].",
       "t": "IR da pessoa física"
      }
     ],
     "tipo": "lista",
     "titulo": "Vender pelo CPF: o que a lei diz"
    },
    {
     "itens": [
      {
       "d": "O MEI está dispensado de emitir nota na venda a consumidor pessoa física (Resolução CGSN 140/2018, art. 106). Para comprador com CNPJ, a nota é obrigatória.",
       "t": "A lei"
      },
      {
       "d": "A Shopee só libera a etiqueta de envio de vendedor CNPJ com a chave da NF-e. O Mercado Livre exige nota no Full e para compradores CNPJ. Na prática, prepare-se para emitir NF-e em todas as vendas.",
       "t": "A prática"
      },
      {
       "d": "Inscrição Estadual (em SP sai automática com o CNAE de indústria; em outros estados, pedir pela Redesim/SEFAZ) e certificado digital e-CNPJ A1 (~R$ 150–250 por ano [estimativa]).",
       "t": "O que você precisa"
      },
      {
       "d": "Emissor gratuito do Mercado Livre (exige A1 e IE; tem restrições em ES, PR, RS, AL, PE, MS e SC), um ERP integrado à Shopee, ou o app Nota Fiscal Fácil da SEFAZ (módulo MEI em SP, ES, AL, PA).",
       "t": "Onde emitir"
      },
      {
       "d": "DASN-SIMEI até 31 de maio do ano seguinte. Guarde as notas de compra de filamento e tags e faça o relatório mensal de receitas.",
       "t": "Declaração anual"
      }
     ],
     "tipo": "lista",
     "titulo": "Nota fiscal como MEI"
    },
    {
     "colunas": [
      "Campo",
      "Valor sugerido",
      "Observação"
     ],
     "linhas": [
      [
       "NCM",
       "3926.90.90",
       "Outras obras de plástico. A tag NFC embutida não muda a natureza da peça. Alternativa discutível: 8523.52.10 (cartões e etiquetas de aproximação) [contador]."
      ],
      [
       "CFOP dentro do estado",
       "5.101",
       "Venda de produção própria."
      ],
      [
       "CFOP para outro estado, pessoa física",
       "6.107",
       "É o caso da maioria das vendas de marketplace."
      ],
      [
       "CFOP para outro estado, empresa com IE",
       "6.101",
       "Comprador com CNPJ e Inscrição Estadual."
      ],
      [
       "CRT",
       "4 (MEI) · 1 (ME)",
       ""
      ],
      [
       "CSOSN",
       "102",
       "Tributada pelo Simples sem permissão de crédito."
      ],
      [
       "Origem",
       "0 (nacional)",
       "Filamento importado não muda a origem de um produto transformado aqui [contador]."
      ],
      [
       "Unidade",
       "UN",
       ""
      ],
      [
       "Intermediador",
       "CNPJ do marketplace + nº do pedido",
       "Grupo infIntermed da NF-e."
      ]
     ],
     "nota": "Não use CFOP 5.102/6.102/6.108: são de revenda de mercadoria de terceiros.",
     "tipo": "tabela",
     "titulo": "Dados da NF-e para a placa"
    },
    {
     "itens": [
      {
       "d": "Para Simples Nacional, a SEFAZ-SP entende que não é devido na venda a consumidor de outro estado (STF, ADI 5464; Resposta à Consulta 32.935/2025). O MEI também não paga. Alguns estados tentam cobrar: confirme a posição do seu [contador].",
       "t": "DIFAL"
      },
      {
       "d": "Para MEI e Simples passam a ser obrigatórios em **01/01/2027**. Em 2026 não são. O emissor precisa estar atualizado até dezembro.",
       "t": "Campos de CBS/IBS na NF-e"
      },
      {
       "d": "Voluntário em 2027 e obrigatório só em 2028, apenas entre empresas (B2B). Sem data para venda a consumidor em marketplace.",
       "t": "Split payment"
      },
      {
       "d": "Pela LC 214/2025, a plataforma responde pelo IBS/CBS de vendedor que não emite nota ou não está inscrito. Espere mais pressão por CNPJ e NF-e.",
       "t": "Responsabilidade dos marketplaces"
      },
      {
       "d": "Tag NFC passiva (sem bateria) é vendida no Brasil sem código de homologação e os marketplaces cobram o código de aparelhos que transmitem. Não há norma que dispense expressamente [incerto]. Anuncie fora da categoria de eletrônicos e guarde a ficha técnica do chip.",
       "t": "Anatel"
      }
     ],
     "tipo": "lista",
     "titulo": "DIFAL, reforma tributária e Anatel"
    },
    {
     "itens": [
      "Conta gov.br nível prata ou ouro.",
      "Verificar na prefeitura se a atividade industrial em casa é permitida no seu endereço (atividade de baixo risco dispensa alvará, mas varia por município).",
      "Abrir o MEI em gov.br/empresas-e-negocios (gratuito). Principal: Artesão(ã) em plástico independente (2229-3/99). Forma de atuação: internet.",
      "Conferir se a Inscrição Estadual saiu automática; se não, pedir na Redesim/SEFAZ.",
      "Credenciar-se como emissor de NF-e na SEFAZ, se o estado exigir.",
      "Comprar o certificado e-CNPJ A1.",
      "Configurar o emissor com NCM 3926.90.90, CFOP 5.101/6.107, CSOSN 102, origem 0, CRT 4.",
      "Migrar as contas do Mercado Livre e da Shopee para CNPJ e cadastrar conta bancária PJ.",
      "Rotina: DAS até o dia 20, relatório mensal de receitas, DASN-SIMEI até 31/05 e acompanhar o acumulado do ano para não passar de R$ 81 mil."
     ],
     "ordenada": true,
     "tipo": "lista",
     "titulo": "Passo a passo para virar MEI"
    },
    {
     "nivel": "incerto",
     "paragrafos": [
      "NCM final (3926.90.90 ou 8523.52.10) · se a ocupação 3299-0/03 soma ISS ao DAS · posição do seu estado sobre DIFAL, antecipação na compra de filamento e ICMS-ST · se o estado exige IE ou credenciamento do MEI para NF-e · como tratar as vendas já feitas pelo CPF · atualização do emissor para CBS/IBS até 01/01/2027."
     ],
     "tipo": "alerta",
     "titulo": "Levar para o contador"
    }
   ],
   "fontes": [
    {
     "data": "consultada 29/09/2026",
     "rotulo": "Câmara dos Deputados — tramitação do PLP 108/2021",
     "url": "https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2295251"
    },
    {
     "data": "2026",
     "rotulo": "Fast Company Brasil — valores do DAS-MEI 2026",
     "url": "https://fastcompanybrasil.com/money/mei-contribuicao-do-das-muda-em-2026-confira-os-novos-valores/"
    },
    {
     "rotulo": "Portal do Empreendedor — atividades permitidas ao MEI",
     "url": "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/atividades-permitidas"
    },
    {
     "data": "31/08/2021",
     "rotulo": "SEFAZ-SP — Resposta à Consulta 24.248/2021 (MEI dispensado de NF para PF)",
     "url": "https://legislacao.fazenda.sp.gov.br/Paginas/RC24248_2021.aspx"
    },
    {
     "data": "15/12/2025",
     "rotulo": "SEFAZ-SP — Resposta à Consulta 32.935/2025 (DIFAL no Simples)",
     "url": "https://legislacao.fazenda.sp.gov.br/Paginas/RC32935_2025.aspx"
    },
    {
     "rotulo": "Agilize — emitir NF no Mercado Livre como MEI",
     "url": "https://agilize.com.br/artigos/emitir-nota-fiscal-mercadolivre-mei"
    },
    {
     "rotulo": "Buscador NCM — 3926.90.90",
     "url": "https://buscadorncm.com.br/ncm/39269090"
    },
    {
     "data": "2026",
     "rotulo": "Contmatic — tabela do Simples Nacional 2026",
     "url": "https://simplifique.contmatic.com.br/blogs/simples-nacional-tabela-2026-aliquotas-faixas-faturamento"
    },
    {
     "data": "03/08/2026",
     "rotulo": "Contmatic — cronograma dos campos IBS/CBS",
     "url": "https://simplifique.contmatic.com.br/blogs/obrigatoriedade-ibs-cbs-documentos-fiscais-4-ondas-2026"
    },
    {
     "data": "31/08/2026",
     "rotulo": "Reforma Tributária — split payment só em 2028",
     "url": "https://www.reformatributaria.com/tecnologia/split-payment-so-sera-obrigatorio-em-2028-diz-receita-federal"
    },
    {
     "data": "31/08/2026",
     "rotulo": "Rota da Jurisprudência — nanoempreendedor dispensado de CNPJ para IBS/CBS",
     "url": "https://rotadajurisprudencia.com.br/2026/08/receita-e-comite-gestor-dispensam-nanoempreendedor-de-cnpj-e-documento-fiscal-de-ibs-e-cbs/"
    },
    {
     "rotulo": "Omie — CFOP 6.107",
     "url": "https://www.omie.com.br/blog/cfop-6107-o-que-e-e-regras-de-venda-a-nao-contribuinte/"
    },
    {
     "rotulo": "Anatel — Resolução 680/2017 (radiação restrita)",
     "url": "https://informacoes.anatel.gov.br/legislacao/resolucoes/2017/936resolucao-680"
    }
   ],
   "intro": "Resumo para quem fabrica a placa em casa e vende pelos marketplaces para todo o Brasil. Números de 2026. Tudo o que tem [contador] no texto deve ser confirmado com um contador antes de valer como regra.",
   "mkt": "comum",
   "ordem": 0,
   "titulo": "Tributação: CPF, MEI ou ME"
  },
  "ml-anuncio": {
   "aba": "anuncio",
   "atualizado_em": "2026-09-29",
   "blocos": [
    {
     "itens": [
      {
       "tag": "42 preços",
       "texto": "Faixa central R$ 49,90 – R$ 86,30. Mínimo R$ 23,56, máximo R$ 157.",
       "titulo": "Mediana R$ 59,90"
      },
      {
       "tag": "Material",
       "texto": "Três vendedores anunciam impressão 3D, entre R$ 43,70 e R$ 59,90.",
       "titulo": "Acrílico, PVC e PS"
      },
      {
       "tag": "Líder",
       "texto": "Anúncio de catálogo com nota 5,0 que vende configuração e confiança, não material.",
       "titulo": "+1000 vendidos a R$ 89"
      }
     ],
     "tipo": "cards",
     "titulo": "O mercado em números"
    },
    {
     "contar": true,
     "itens": [
      {
       "texto": "Placa Avaliação Google Nfc E Qr Code Com Suporte De Mesa"
      },
      {
       "texto": "Placa Nfc Para Avaliação No Google 3d Com Suporte De Mesa"
      },
      {
       "texto": "Kit 2 Placas Avaliação Google Nfc Qr Code Já Configuradas"
      },
      {
       "texto": "Kit 5 Placas Avaliação Google Nfc E Qr Code Para Comércio"
      },
      {
       "texto": "Placa Avaliação Google Nfc Personalizada Com Sua Logo"
      },
      {
       "texto": "Placa Avalie-nos No Google Nfc Qr Code Sem Mensalidade"
      }
     ],
     "texto": "A marca FV Maker vai no campo Marca da ficha técnica, então não precisa gastar caracteres do título com ela. Sem CAIXA ALTA, \"frete grátis\" ou \"promoção\" no título.",
     "tipo": "modelos",
     "titulo": "Títulos prontos (até 60 caracteres)"
    },
    {
     "colunas": [
      "Oferta",
      "Preço",
      "Observação"
     ],
     "linhas": [
      [
       "1 placa configurada",
       "R$ 59,90–64,90",
       "Na mediana do mercado."
      ],
      [
       "Placa + suporte (oferta principal)",
       "R$ 74,90–78,90",
       "Fique abaixo de R$ 79 para não cair na zona de envio mais caro."
      ],
      [
       "Kit 2",
       "R$ 119,90",
       "~R$ 60 por unidade; um único custo de envio."
      ],
      [
       "Kit 5",
       "R$ 249,90",
       "~R$ 50 por unidade. Público: redes e franquias."
      ],
      [
       "Personalizada com logo",
       "R$ 119,90–149,90",
       "Com prazo de fabricação no anúncio."
      ]
     ],
     "tipo": "tabela",
     "titulo": "Preços sugeridos"
    },
    {
     "colunas": [
      "Anúncio",
      "Preço",
      "Nota"
     ],
     "linhas": [
      [
       "Placa De Avaliação Google Com Nfc E Placas Qr Code (catálogo)",
       "R$ 89,00",
       "Mais vendido; reclamação de não ter QR."
      ],
      [
       "Placa De Avaliação Google Com Nfc E Qr Code Preto",
       "R$ 59,90",
       "Devolução em 30 dias."
      ],
      [
       "Placa Avaliação Google Com Nfc E Qr Code Branco",
       "R$ 74,00",
       "+100 vendidos."
      ],
      [
       "Placa De Avaliação Google Personalizada (Wistag)",
       "R$ 109,00",
       "Personalizada."
      ],
      [
       "Kit Placa + Cartão Avaliação Google",
       "R$ 92,90",
       "Kit de formatos."
      ],
      [
       "Placa Quadro Acrílico Avaliação Google 3mm",
       "R$ 99,00",
       "Acrílico 3 mm."
      ],
      [
       "Display Nfc Avaliação Google Qr Code (Damp3d)",
       "R$ 59,90",
       "Impressão 3D."
      ],
      [
       "Placa Google Avaliações 10x6cm Premium 3D",
       "R$ 43,70",
       "Impressão 3D."
      ]
     ],
     "nota": "Preços vistos no Google Shopping em 29/09/2026; alguns podem ter mudado.",
     "tipo": "tabela",
     "titulo": "Concorrentes de referência"
    }
   ],
   "fontes": [
    {
     "rotulo": "Anúncio de catálogo líder (MLB2106897630)",
     "url": "https://www.mercadolivre.com.br/placa-de-avaliacao-google-com-nfc-e-placas-qr-code-avaliacao/p/MLB2106897630"
    },
    {
     "rotulo": "Placa preta R$ 59,90",
     "url": "https://www.mercadolivre.com.br/placa-de-avaliacao-google-com-nfc-e-qr-code/up/MLBU3173052920"
    },
    {
     "rotulo": "Placa personalizada Wistag",
     "url": "https://www.mercadolivre.com.br/placa-de-avaliacao-google-personalizada-com-nfc-e-qr-code/up/MLBU3261300737"
    },
    {
     "data": "29/09/2026",
     "rotulo": "Google Shopping — placa nfc avaliação google",
     "url": "https://www.google.com/search?q=placa+nfc+avalia%C3%A7%C3%A3o+google&gl=br&hl=pt-BR&udm=28"
    }
   ],
   "inclui": [
    "comum-produto"
   ],
   "intro": "Concorrência, títulos prontos e preços sugeridos para a placa no Mercado Livre. Levantamento feito pelo Google Shopping e por páginas indexadas em 29/09/2026 (o Mercado Livre bloqueia leitura automática das listagens).",
   "mkt": "ml",
   "ordem": 4,
   "rotulo": "Anúncio da placa",
   "titulo": "Anúncio da placa"
  },
  "ml-reputacao": {
   "aba": "reputacao",
   "atualizado_em": "2026-09-29",
   "blocos": [
    {
     "colunas": [
      "Métrica",
      "MercadoLíder",
      "Verde",
      "Amarela",
      "Laranja",
      "Vermelha"
     ],
     "linhas": [
      [
       "Reclamações",
       "1%",
       "2%",
       "4,5%",
       "8%",
       "> 8%"
      ],
      [
       "Cancelamentos por você",
       "0,5%",
       "1,5%",
       "3,5%",
       "4%",
       "> 4%"
      ],
      [
       "Despacho atrasado",
       "6%",
       "10%",
       "18%",
       "22%",
       "> 22%"
      ]
     ],
     "nota": "Período: 60 dias para quem tem volume alto de vendas; abaixo disso, 365 dias. As páginas oficiais divergem sobre o corte (60 ou 101 vendas) [incerto].",
     "tipo": "tabela",
     "titulo": "Limites de cada cor"
    },
    {
     "itens": [
      {
       "d": "Reclamações de defeito, qualidade ou item faltando; vendas canceladas por você; envio atrasado ou para o depósito errado.",
       "t": "Conta"
      },
      {
       "d": "Devolução por arrependimento ou \"não serve\" (e o frete dela é grátis para você).",
       "t": "Não conta"
      },
      {
       "d": "Produto novo pode ser devolvido até 30 dias após o recebimento. \"Diferente do anunciado\" custa a devolução para você e pesa na reputação: descreva medidas e material com precisão.",
       "t": "Devolução"
      },
      {
       "d": "3 dias úteis para reportar problema em uma devolução recebida.",
       "t": "Prazo para contestar"
      }
     ],
     "tipo": "lista",
     "titulo": "O que conta e o que não conta"
    },
    {
     "colunas": [
      "Nível",
      "Vendas",
      "Faturamento"
     ],
     "linhas": [
      [
       "Líder",
       "230",
       "R$ 37.000"
      ],
      [
       "Gold",
       "575",
       "R$ 118.400"
      ],
      [
       "Platinum",
       "1.725",
       "R$ 296.000"
      ]
     ],
     "nota": "Todos exigem mais de 4 meses de cadastro, documento fiscal, verde escuro, reclamações < 1%, mediações < 0,5%, cancelamentos < 0,5% e envios incorretos < 6%.",
     "tipo": "tabela",
     "titulo": "Níveis de MercadoLíder (últimos 3 meses)"
    },
    {
     "nivel": "dica",
     "paragrafos": [
      "Atraso é a métrica mais fácil de estourar para quem imprime: o limite do verde é 10% de despachos atrasados. Com 10 vendas, um atraso já é 10%.",
      "Por isso o roteiro recomenda estoque de placas prontas e gravar a tag no dia da venda.",
      "O ponto frágil é o link: sem ele a placa não funciona. Deixe claro no anúncio que o comprador deve mandar o link do Google Maps (ou nome e cidade da empresa) pelo chat logo após a compra. Se ele não responder em algumas horas, procure a empresa pelo nome, gere o link no conversor, grave e confirme por mensagem antes de despachar."
     ],
     "tipo": "alerta",
     "titulo": "Como a produção sob demanda afeta a reputação"
    },
    {
     "paragrafos": [
      "Cada anúncio tem uma nota de 0 a 100: **Boa** de 75 a 100; **Mediana** de 50 a 74 (perde exposição e pode ser pausado); **Ruim** até 30 (pode ser cancelado). Entram reclamações, atrasos, cancelamentos, perguntas, opiniões, mensagens e título ou descrição inconsistentes."
     ],
     "tipo": "texto",
     "titulo": "Experiência de compra por anúncio"
    }
   ],
   "fontes": [
    {
     "data": "11/08/2025",
     "rotulo": "Reputação de vendedores (developers)",
     "url": "https://developers.mercadolivre.com.br/pt_br/reputacao-de-vendedores"
    },
    {
     "rotulo": "Variáveis da reputação",
     "url": "https://www.mercadolivre.com.br/ajuda/variaveis-reputacao_30193"
    },
    {
     "rotulo": "Como ganhar cor (ajuda 866)",
     "url": "https://www.mercadolivre.com.br/ajuda/866"
    },
    {
     "rotulo": "Como ser MercadoLíder",
     "url": "https://www.mercadolivre.com.br/ajuda/Como-ser-MercadoLider_864"
    },
    {
     "rotulo": "Devoluções",
     "url": "https://www.mercadolivre.com.br/ajuda/devolucoes-expressas_3448"
    },
    {
     "rotulo": "Experiência de compra (ajuda 31968)",
     "url": "https://www.mercadolivre.com.br/ajuda/31968"
    }
   ],
   "intro": "A reputação decide o custo do envio, o acesso a promoções e anúncios pagos e quanto o comprador confia. Conta nova começa cinza e precisa de 10 vendas concluídas em 365 dias para ganhar cor.",
   "mkt": "ml",
   "ordem": 3,
   "rotulo": "Reputação",
   "titulo": "Reputação e métricas"
  },
  "ml-taxas": {
   "aba": "taxas",
   "atualizado_em": "2026-09-29",
   "blocos": [
    {
     "colunas": [
      "Tipo de anúncio",
      "Tarifa",
      "O que muda"
     ],
     "linhas": [
      [
       "Clássico",
       "10–14%",
       "Sem parcelamento sem juros. Recomendado para começar."
      ],
      [
       "Premium",
       "15–19%",
       "Parcelamento sem juros: 2x (R$ 30–59,99) ou 3x (R$ 60–99,99); 4x/5x no cartão Mercado Pago."
      ],
      [
       "Grátis",
       "0%",
       "Até 5 vendas por ano, estoque de 1 unidade, baixa exposição. Não serve."
      ]
     ],
     "nota": "A porcentagem exata da categoria só aparece no simulador com login. Blogs citam 11,5–13% (Clássico) em Casa e Decoração e 12% em Indústria e Comércio [incerto].",
     "tipo": "tabela",
     "titulo": "Tarifa de venda"
    },
    {
     "colunas": [
      "Reputação",
      "R$ 19–48,99",
      "R$ 49–78,99",
      "R$ 79–99,99",
      "R$ 100–119,99"
     ],
     "linhas": [
      [
       "Sem cor, verde ou MercadoLíder",
       "R$ 6,85",
       "R$ 8,15",
       "R$ 12,95",
       "R$ 14,95"
      ],
      [
       "Amarela",
       "R$ 7,83",
       "R$ 9,31",
       "R$ 15,54",
       "R$ 17,94"
      ],
      [
       "Laranja ou vermelha",
       "R$ 9,79",
       "R$ 11,64",
       "R$ 25,90",
       "R$ 29,90"
      ]
     ],
     "nota": "A partir de R$ 79 o frete grátis rápido é obrigatório. Abaixo de R$ 19 você paga no máximo metade do preço.",
     "texto": "A placa (58 g) e o kit placa + suporte (71 g) cabem nessa faixa com envelope. Conta sem reputação paga a tabela verde, que já tem até 50% de desconto.",
     "tipo": "tabela",
     "titulo": "Custo dos envios para pacote até 0,3 kg"
    },
    {
     "nivel": "risco",
     "paragrafos": [
      "A R$ 78,90 no Clássico você recebe cerca de R$ 61,28. A R$ 79,00 recebe cerca de R$ 56,57, porque o custo de envio sobe de R$ 8,15 para R$ 12,95. Só volta a compensar perto de R$ 84,40.",
      "O mesmo acontece em escala menor entre R$ 48,99 e R$ 49,00 (+R$ 1,30 de envio)."
     ],
     "tipo": "alerta",
     "titulo": "Zona de preço a evitar: R$ 79,00 a ~R$ 84,40"
    },
    {
     "colunas": [
      "Preço",
      "Tipo",
      "Tarifa",
      "Envio",
      "Você recebe"
     ],
     "linhas": [
      [
       "R$ 49,90",
       "Clássico 12%",
       "R$ 5,99",
       "R$ 8,15",
       "R$ 35,76 (71,7%)"
      ],
      [
       "R$ 49,90",
       "Premium 17%",
       "R$ 8,48",
       "R$ 8,15",
       "R$ 33,27 (66,7%)"
      ],
      [
       "R$ 89,90",
       "Clássico 12%",
       "R$ 10,79",
       "R$ 12,95",
       "R$ 66,16 (73,6%)"
      ],
      [
       "R$ 89,90",
       "Premium 17%",
       "R$ 15,28",
       "R$ 12,95",
       "R$ 61,67 (68,6%)"
      ]
     ],
     "nota": "Ainda falta descontar o custo de produção e o imposto.",
     "tipo": "tabela",
     "titulo": "Exemplos: quanto você recebe (sem reputação, tarifa hipotética)"
    },
    {
     "itens": [
      {
       "d": "Placa + suporte num anúncio de kit paga um único custo de envio. Vender o suporte avulso a R$ 20–25 perde R$ 6,85 de envio mais a tarifa.",
       "t": "Kit"
      },
      {
       "d": "Entre 5 e 12 dias após a entrega, conforme a página oficial e a reputação [incerto]. Confira em Mercado Pago › Saldos e extratos.",
       "t": "Liberação do dinheiro"
      },
      {
       "d": "Disponível no Mercado Pago; a porcentagem só aparece antes de confirmar.",
       "t": "Antecipação"
      },
      {
       "d": "Mantém custo fixo por unidade: R$ 6,25 (até R$ 19), R$ 6,65 (R$ 19–48,99), R$ 7,75 (R$ 49–78,99). Exige reputação amarela ou verde, ou Decola.",
       "t": "Flex"
      },
      {
       "d": "Armazenagem de R$ 0,007 por unidade por dia no tamanho pequeno, mas exige CNPJ e produto industrializado. Não combina com produção sob demanda.",
       "t": "Full"
      }
     ],
     "tipo": "lista",
     "titulo": "Outros custos e prazos"
    }
   ],
   "calculadora": true,
   "fontes": [
    {
     "rotulo": "Tarifas para vender (ajuda 870)",
     "url": "https://www.mercadolivre.com.br/ajuda/870"
    },
    {
     "rotulo": "Custos de envio por peso (ajuda 3362)",
     "url": "https://www.mercadolivre.com.br/ajuda/3362"
    },
    {
     "rotulo": "Tabela verde / sem reputação (ajuda 40538)",
     "url": "https://www.mercadolivre.com.br/ajuda/40538"
    },
    {
     "rotulo": "Tabela amarela (ajuda 40545)",
     "url": "https://www.mercadolivre.com.br/ajuda/40545"
    },
    {
     "rotulo": "Tabela laranja e vermelha (ajuda 40547)",
     "url": "https://www.mercadolivre.com.br/ajuda/40547"
    },
    {
     "rotulo": "Parcelamento no Premium (ajuda 22737)",
     "url": "https://www.mercadolivre.com.br/ajuda/22737"
    },
    {
     "rotulo": "Envios Flex (ajuda 4726)",
     "url": "https://www.mercadolivre.com.br/ajuda/4726"
    },
    {
     "rotulo": "Quando o dinheiro é liberado (ajuda 3143)",
     "url": "https://www.mercadolivre.com.br/ajuda/3143"
    },
    {
     "data": "12/02/2026",
     "rotulo": "JoomPulse — custos do Mercado Livre em 2026",
     "url": "https://blog.joompulse.com/2026/02/12/custos-mercado-livre-o-que-muda-para-sellers-2026/"
    }
   ],
   "inclui": [
    "comum-tributacao"
   ],
   "intro": "O Mercado Livre cobra duas coisas em cada venda: a tarifa de venda (porcentagem que depende da categoria e do tipo de anúncio) e o custo dos envios (valor por faixa de peso e de preço). Desde 02/03/2026 o custo de envio é cobrado em todas as vendas, inclusive abaixo de R$ 79.",
   "mkt": "ml",
   "ordem": 1,
   "rotulo": "Taxas e tributação",
   "titulo": "Taxas e tributação"
  },
  "ml-visibilidade": {
   "aba": "visibilidade",
   "atualizado_em": "2026-09-29",
   "blocos": [
    {
     "itens": [
      {
       "d": "Todos os atributos da categoria preenchidos, não só os obrigatórios.",
       "t": "Ficha técnica completa"
      },
      {
       "d": "Letreiros no luminosos ou Placas Decorativas. Categoria errada derruba a relevância.",
       "t": "Categoria correta"
      },
      {
       "d": "Fundo branco na primeira, 1200 × 1200 px, sem textos nem marcas.",
       "t": "Fotos dentro das regras"
      },
      {
       "d": "Mediana dos concorrentes: R$ 59,90.",
       "t": "Preço competitivo"
      },
      {
       "d": "Despachar em menos de 24 h.",
       "t": "Reputação e despacho rápido"
      },
      {
       "d": "Nota por anúncio, de 0 a 100; acima de 75 é boa.",
       "t": "Experiência de compra"
      },
      {
       "d": "Responder rápido às perguntas aumenta a exposição.",
       "t": "Tempo de resposta"
      }
     ],
     "nota": "Anúncios de catálogo aparecem primeiro, mas produto próprio sem GTIN dificilmente entra. Use anúncio próprio com variações de cor.",
     "ordenada": true,
     "tipo": "lista",
     "titulo": "O que pesa no ranking da busca"
    },
    {
     "itens": [
      {
       "tag": "Conta nova",
       "texto": "R$ 250 guardados no Mercado Pago dão reputação verde por até 365 dias, até R$ 250 em anúncios pagos, Central de promoções, Clips e Flex.",
       "titulo": "Programa Decola"
      },
      {
       "tag": "Anúncios pagos",
       "texto": "Custo por clique. Sem Decola exige reputação amarela (10 vendas). A métrica agora é o ROAS objetivo. Comece pela campanha automática.",
       "titulo": "Product Ads"
      },
      {
       "tag": "Promoções",
       "texto": "Desconto %, desconto por quantidade e cupons (1 mês), Oferta do dia (24 h), Oferta relâmpago (6 h), campanhas comerciais com redução de tarifa e eventos.",
       "titulo": "Central de promoções"
      },
      {
       "tag": "Empresas",
       "texto": "Até 5 faixas por quantidade, vistas só por compradores com CNPJ validado. Perfeito para lojas com várias unidades ou mesas.",
       "titulo": "Preços de atacado"
      },
      {
       "tag": "Vídeo",
       "texto": "Vertical 9:16, 10 s a 1 min, aprovação em até 2 dias. Mostre o celular lendo a placa: é o momento que convence.",
       "titulo": "Clips"
      },
      {
       "tag": "Variações",
       "texto": "Agrupe cores num anúncio só (as vendas somam no mesmo anúncio) e crie anúncios separados para kits.",
       "titulo": "Um anúncio, várias cores"
      }
     ],
     "tipo": "cards",
     "titulo": "Ferramentas para acelerar"
    },
    {
     "itens": [
      {
       "d": "Pergunta parada por mais de 1 hora já afeta o tempo de resposta. Cada pergunta só pode ser respondida uma vez: revise antes de enviar.",
       "t": "Perguntas"
      },
      {
       "d": "Logo após a venda, peça pelo chat o link do Google Maps ou o nome e cidade da empresa para gravar a tag. É o único canal permitido.",
       "t": "Mensagem pós-venda"
      },
      {
       "d": "Instruções de teste (encoste o celular, abra a câmera no QR) e onde deixar a placa. Evita reclamação de \"não funciona\".",
       "t": "Cartão na embalagem"
      },
      {
       "d": "Peça a avaliação do anúncio só depois de confirmar que a placa abriu a tela certa.",
       "t": "Opinião do produto"
      }
     ],
     "tipo": "lista",
     "titulo": "Engajamento com o comprador"
    },
    {
     "colunas": [
      "Data",
      "O que fazer"
     ],
     "linhas": [
      [
       "Outubro",
       "Ativar Decola e Product Ads; juntar as 10 primeiras vendas."
      ],
      [
       "Início de novembro",
       "Inscrever o anúncio no evento de Black Friday na Central de promoções; imprimir estoque extra."
      ],
      [
       "27/11/2026",
       "Black Friday. Cyber Monday em 30/11."
      ],
      [
       "Dezembro",
       "Comércio se prepara para o movimento de fim de ano: bom momento para kits e atacado."
      ]
     ],
     "tipo": "tabela",
     "titulo": "Calendário comercial até o fim do ano"
    }
   ],
   "fontes": [
    {
     "rotulo": "Como posicionar seus produtos na busca",
     "url": "https://vendedores.mercadolivre.com.br/aprender/nota/como-posicionar-seus-produtos-nos-resultados-de-busca-nuevo"
    },
    {
     "rotulo": "Responda todas as perguntas",
     "url": "https://vendedores.mercadolivre.com.br/nota/responda-a-todas-as-perguntas-e-conclua-a-transacao-de-forma-mais-rapida"
    },
    {
     "rotulo": "Requisitos do Product Ads",
     "url": "https://vendedores.mercadolivre.com.br/nota/quais-requisitos-devo-cumprir-para-usar-o-product-ads"
    },
    {
     "rotulo": "De ACOS a ROAS",
     "url": "https://vendedores.mercadolivre.com.br/nota/de-acos-a-roas-entenda-o-retorno-real-da-sua-publicidade"
    },
    {
     "rotulo": "Central de promoções",
     "url": "https://vendedores.mercadolivre.com.br/nota/como-aproveitar-os-descontos-para-vender-mais"
    },
    {
     "rotulo": "Preços de atacado",
     "url": "https://vendedores.mercadolivre.com.br/nota/adicione-precos-de-atacado-e-aumente-o-seu-volume-de-vendas"
    },
    {
     "rotulo": "Requisitos dos Clips",
     "url": "https://vendedores.mercadolivre.com.br/nota/confira-os-requisitos-para-aprovar-seus-clips"
    },
    {
     "rotulo": "Programa Decola (ajuda 33314)",
     "url": "https://www.mercadolivre.com.br/ajuda/33314"
    }
   ],
   "intro": "O que a Central de Vendedores diz que coloca um anúncio no topo da busca, e as ferramentas para acelerar as primeiras vendas de uma conta nova.",
   "mkt": "ml",
   "ordem": 2,
   "rotulo": "Visibilidade e vendas",
   "titulo": "Visibilidade e vendas"
  },
  "shopee-anuncio": {
   "aba": "anuncio",
   "atualizado_em": "2026-09-29",
   "blocos": [
    {
     "nivel": "risco",
     "paragrafos": [
      "A política de marca registrada considera violação usar marca sem autorização no produto, na embalagem, no anúncio ou **para indicar compatibilidade** (código 601). Anúncio removido por propriedade intelectual costuma ser apagado de vez.",
      "QR code visível nas fotos é tratado como direcionamento para fora da plataforma. Desfoque o QR em todas as imagens.",
      "Por isso há duas colunas de títulos abaixo: com a palavra Google (mais busca, mais risco) e sem ela (menos risco, depende de \"avaliação\" e \"NFC\" para ser encontrado)."
     ],
     "tipo": "alerta",
     "titulo": "Na Shopee, marca de terceiros e QR code pedem cuidado extra"
    },
    {
     "itens": [
      {
       "tag": "27 preços",
       "texto": "Faixa central R$ 29,99 – R$ 74,90. Mínimo R$ 19,90.",
       "titulo": "Mediana R$ 42,50"
      },
      {
       "tag": "Líderes",
       "texto": "Placa personalizada a R$ 94,05 com 206 vendidos; cartões NFC de R$ 29,90 a R$ 69,90.",
       "titulo": "Wistag e Onetag"
      },
      {
       "tag": "Categoria",
       "texto": "Onde a maioria dos concorrentes está. Fuja das categorias de eletrônicos.",
       "titulo": "Papelaria › Outros"
      }
     ],
     "tipo": "cards",
     "titulo": "O mercado em números"
    },
    {
     "contar": true,
     "itens": [
      {
       "texto": "Placa Avaliação Google NFC e QR Code 3D Preta com Suporte - Já Configurada - Sem App e Sem Mensalidade - iPhone/Android"
      },
      {
       "texto": "Placa Avaliação no Google NFC por Aproximação - Plaquinha Avalie-nos 9x9cm Impressão 3D com Suporte de Balcão"
      },
      {
       "texto": "Kit 2 Placas Avaliação Google NFC + QR Code Configuradas - Plaquinha Avalie-nos para Balcão, Restaurante, Salão, Clínica"
      }
     ],
     "tipo": "modelos",
     "titulo": "Títulos com a palavra Google"
    },
    {
     "contar": true,
     "itens": [
      {
       "texto": "Placa de Avaliação NFC e QR Code para Comércio - Aproximação Sem App - Impressão 3D 9x9cm com Suporte de Balcão"
      },
      {
       "texto": "Plaquinha Avalie-nos NFC por Aproximação - Placa de Avaliação para Loja, Restaurante, Salão e Clínica - Já Configurada"
      }
     ],
     "tipo": "modelos",
     "titulo": "Títulos sem marca de terceiros"
    },
    {
     "colunas": [
      "Oferta",
      "Preço",
      "Observação"
     ],
     "linhas": [
      [
       "1 placa configurada",
       "R$ 44,90–49,90",
       "Acima da mediana, justificado pelo relevo 3D e pela configuração."
      ],
      [
       "Placa + suporte (oferta principal)",
       "R$ 59,90–64,90",
       "Uma taxa fixa só."
      ],
      [
       "Kit 2",
       "R$ 99,90",
       "Acima da zona morta de R$ 80–87,78."
      ],
      [
       "Kit 5",
       "R$ 199,90",
       "~R$ 40 por unidade."
      ],
      [
       "Personalizada com logo",
       "R$ 99,90–119,90",
       "Anúncio sob encomenda (no máximo 20% dos anúncios da loja)."
      ]
     ],
     "tipo": "tabela",
     "titulo": "Preços sugeridos"
    },
    {
     "colunas": [
      "Anúncio",
      "Preço",
      "Nota"
     ],
     "linhas": [
      [
       "Placa De Avaliação Google Personalizada Com Nfc E Qr Code (Wistag)",
       "R$ 94,05 no Pix",
       "5,0 (66 avaliações), sob encomenda."
      ],
      [
       "Placa De Avaliação Google Com Nfc E Qrcode (Onetag)",
       "R$ 58,90",
       "Com app e link configurável."
      ],
      [
       "Placa/cartão Google Avaliação Com Chip Nfc E Qr Code",
       "R$ 49,90",
       "Kit 3 a R$ 85,41."
      ],
      [
       "Placa Google Avaliação NFC 8x10cm Acrílico",
       "R$ 24,90",
       "Acrílico transparente, dupla face."
      ],
      [
       "Placa de Avaliação no Google - QR CODE e NFC",
       "~R$ 79,90",
       "Configuração inclusa pelo link enviado."
      ],
      [
       "Placa de Avaliação Google com NFC (impressão 3D)",
       "—",
       "Concorrente direto em 3D."
      ]
     ],
     "nota": "Preços vistos no Google Shopping e em páginas indexadas em 29/09/2026.",
     "tipo": "tabela",
     "titulo": "Concorrentes de referência"
    }
   ],
   "fontes": [
    {
     "data": "14/07/2026",
     "rotulo": "Marca registrada (ID 2642)",
     "url": "https://seller.shopee.com.br/edu/article/2642"
    },
    {
     "data": "19/06/2026",
     "rotulo": "Transações fora da Shopee (ID 11123)",
     "url": "https://seller.shopee.com.br/edu/article/11123"
    },
    {
     "rotulo": "Wistag — placa personalizada",
     "url": "https://shopee.com.br/Placa-De-Avalia%C3%A7%C3%A3o-Google-Personalizada-Com-Nfc-E-Qr-Code-i.1358416203.23694298017"
    },
    {
     "rotulo": "Onetag — placa NFC e QR",
     "url": "https://shopee.com.br/Placa-De-Avalia%C3%A7%C3%A3o-Google-Com-Nfc-E-Qrcode-(aproxima%C3%A7%C3%A3o)-onetag-cart%C3%A3o-de-visita-digital-i.1064049779.58206552774"
    }
   ],
   "inclui": [
    "comum-produto"
   ],
   "intro": "Concorrência, títulos prontos e preços para a placa na Shopee. A Shopee é cerca de 30% mais barata que o Mercado Livre e mais rígida com marca de terceiros e QR code nas fotos.",
   "mkt": "shopee",
   "ordem": 4,
   "rotulo": "Anúncio da placa",
   "titulo": "Anúncio da placa"
  },
  "shopee-reputacao": {
   "aba": "reputacao",
   "atualizado_em": "2026-09-29",
   "blocos": [
    {
     "colunas": [
      "Métrica",
      "Como é medida",
      "Saudável",
      "Gera ponto"
     ],
     "linhas": [
      [
       "Taxa de não envio",
       "Cancelamentos e devoluções por sua culpa, últimos 7 dias",
       "< 2%",
       "8% ou mais (com 2+ pedidos): 1 ponto"
      ],
      [
       "Envio atrasado",
       "Postados depois do prazo, últimos 7 dias",
       "< 2%",
       "5% ou mais (com 2+ pedidos): 1 ponto"
      ],
      [
       "Taxa de resposta do chat",
       "Respostas em até 12 h, últimos 30 dias",
       "≥ 60%",
       "Não gera ponto, mas conta para o Vendedor Indicado"
      ],
      [
       "Direcionar para fora",
       "Contato, link ou QR externo no anúncio, chat ou pacote",
       "Nunca",
       "2 pontos por ocorrência"
      ]
     ],
     "tipo": "tabela",
     "titulo": "Métricas que geram pontos"
    },
    {
     "colunas": [
      "Pontos",
      "Suspensão",
      "Visibilidade",
      "Frete grátis",
      "Cobrança*"
     ],
     "linhas": [
      [
       "1–2",
       "Só alerta",
       "—",
       "Mantém",
       "—"
      ],
      [
       "3–5",
       "14 dias",
       "−5%",
       "Mantém",
       "R$ 100"
      ],
      [
       "6–8",
       "14 dias",
       "−10%",
       "Perde",
       "R$ 250"
      ],
      [
       "9–11",
       "21 dias",
       "−20%",
       "Perde",
       "R$ 500"
      ],
      [
       "12–14",
       "28 dias",
       "−30%",
       "Perde",
       "R$ 1.000"
      ],
      [
       "15+",
       "Conta congelada",
       "—",
       "—",
       "R$ 1.500"
      ]
     ],
     "nota": "* Cobrança só se as vendas do mês anterior passarem de R$ 2.500. Recurso em até 14 dias: Desempenho da Conta › Resumo dos Pontos › Ver violação › Entrar com recurso.",
     "tipo": "tabela",
     "titulo": "Faixas de penalidade"
    },
    {
     "nivel": "risco",
     "paragrafos": [
      "O limite de 5% vale a partir de 2 pedidos na semana. Com 2 pedidos, 1 atrasado já é 50%. Por isso o estoque de placas prontas e o envio até 13h são a regra mais importante da loja nova."
     ],
     "tipo": "alerta",
     "titulo": "Com poucas vendas, um único atraso pesa muito"
    },
    {
     "colunas": [
      "Critério",
      "Entrar",
      "Sair"
     ],
     "linhas": [
      [
       "CNPJ",
       "Sim",
       "—"
      ],
      [
       "Loja ativa",
       "> 90 dias",
       "< 90 dias"
      ],
      [
       "Pedidos em 30 dias",
       "≥ 30",
       "< 15"
      ],
      [
       "Compradores únicos em 30 dias",
       "≥ 10",
       "< 5"
      ],
      [
       "Avaliação da loja",
       "≥ 4,5",
       "< 4,2"
      ],
      [
       "Taxa de resposta",
       "≥ 60%",
       "< 50%"
      ],
      [
       "Tempo de preparação",
       "≤ 1 dia útil",
       "> 1,3 dia útil"
      ],
      [
       "Envio aos sábados",
       "≥ 20% dos pendentes",
       "< 20%"
      ],
      [
       "Pontos de penalidade",
       "≤ 1",
       "≥ 3"
      ],
      [
       "Taxa de não envio",
       "≤ 2%",
       "> 3%"
      ]
     ],
     "tipo": "tabela",
     "titulo": "Vendedor Indicado: para entrar e para sair"
    },
    {
     "itens": [
      {
       "d": "Média das avaliações; meta de 4,5 ou mais.",
       "t": "Nota da loja"
      },
      {
       "d": "30 dias para avaliar; pode editar uma vez.",
       "t": "Prazo do comprador"
      },
      {
       "d": "Única e não editável. Responda com calma.",
       "t": "Sua resposta"
      },
      {
       "d": "Proporção de notas 1 e 2 nos últimos 14 dias, por anúncio. Pode remover o anúncio.",
       "t": "Item de qualidade insatisfatória"
      }
     ],
     "tipo": "lista",
     "titulo": "Avaliações"
    }
   ],
   "fontes": [
    {
     "data": "09/09/2026",
     "rotulo": "Pontos de penalidade (ID 7955)",
     "url": "https://seller.shopee.com.br/edu/article/7955"
    },
    {
     "data": "06/05/2026",
     "rotulo": "Métricas de envio (ID 3280)",
     "url": "https://seller.shopee.com.br/edu/article/3280"
    },
    {
     "data": "08/07/2026",
     "rotulo": "Tempo de preparação (ID 19542)",
     "url": "https://seller.shopee.com.br/edu/article/19542"
    },
    {
     "data": "29/06/2026",
     "rotulo": "Vendedor Indicado (ID 18456)",
     "url": "https://seller.shopee.com.br/edu/article/18456"
    },
    {
     "data": "21/07/2026",
     "rotulo": "Avaliações (ID 24761)",
     "url": "https://seller.shopee.com.br/edu/article/24761"
    }
   ],
   "intro": "A Shopee mede semanalmente o envio e mensalmente o chat, e transforma deslizes em pontos de penalidade. Os pontos zeram a cada trimestre (o próximo zeramento é na virada para outubro).",
   "mkt": "shopee",
   "ordem": 3,
   "rotulo": "Métricas e penalidades",
   "titulo": "Métricas e penalidades"
  },
  "shopee-taxas": {
   "aba": "taxas",
   "atualizado_em": "2026-09-29",
   "blocos": [
    {
     "colunas": [
      "Preço do item",
      "Comissão + taxa fixa",
      "Subsídio Pix",
      "Cupom de frete da Shopee"
     ],
     "linhas": [
      [
       "Até R$ 79,99",
       "20% + R$ 4,50",
       "—",
       "fretes até R$ 20"
      ],
      [
       "R$ 80 – 99,99",
       "14% + R$ 16",
       "5%",
       "até R$ 30"
      ],
      [
       "R$ 100 – 199,99",
       "14% + R$ 20",
       "5%",
       "até R$ 30"
      ],
      [
       "R$ 200 – 499,99",
       "14% + R$ 26",
       "5%",
       "até R$ 40"
      ],
      [
       "Acima de R$ 500",
       "14% + R$ 26",
       "até 8%",
       "até R$ 40"
      ]
     ],
     "nota": "Até 30/09/2026 a primeira faixa é 20% + R$ 4,00. Comissão não é cobrada em cancelamento ou devolução e é calculada só sobre o produto; desconto dado por você reduz a base.",
     "tipo": "tabela",
     "titulo": "Comissão por faixa de preço (a partir de 01/10/2026)"
    },
    {
     "nivel": "risco",
     "paragrafos": [
      "A R$ 79,90 você recebe R$ 59,42. A R$ 80,00 recebe R$ 52,80. Só volta a empatar perto de R$ 87,78, e a R$ 89,90 ganha apenas R$ 1,89 a mais que a R$ 79,90 (compensado em parte pelo subsídio Pix e pelo cupom de frete maior)."
     ],
     "tipo": "alerta",
     "titulo": "Zona de preço a evitar: R$ 80,00 a ~R$ 87,78"
    },
    {
     "colunas": [
      "Conta",
      "R$ 49,90",
      "R$ 89,90"
     ],
     "linhas": [
      [
       "CNPJ ou CPF abaixo de 450 pedidos/90 dias",
       "R$ 35,42 (taxa de 29,0%)",
       "R$ 61,31 (taxa de 31,8%)"
      ],
      [
       "CPF acima de 450 pedidos/90 dias",
       "R$ 32,42",
       "R$ 58,31"
      ]
     ],
     "nota": "Ainda falta descontar o custo de produção e o imposto.",
     "tipo": "tabela",
     "titulo": "Exemplos: quanto você recebe"
    },
    {
     "itens": [
      {
       "d": "Item errado, faltando, com defeito ou mal embalado: frete integral + R$ 15, se você quiser receber a devolução de volta.",
       "t": "Devolução por sua culpa"
      },
      {
       "d": "Cobrança adicional em até 90 dias se o pacote pesar mais que o cadastrado; R$ 50 de manuseio se passar das medidas máximas.",
       "t": "Divergência de peso"
      },
      {
       "d": "De R$ 100 a R$ 1.500 por faixa de pontos, só se as vendas do mês anterior passarem de R$ 2.500.",
       "t": "Penalidades"
      },
      {
       "d": "Por convite. Cobram 3,5% sobre todas as vendas da loja enquanto você participa, e renovam sozinhas.",
       "t": "Campanhas de Destaque"
      },
      {
       "d": "Só CNPJ. Comissão mínima de 4%, que depois só pode subir.",
       "t": "Afiliados"
      },
      {
       "d": "Recarga mínima de R$ 15 [incerto]. Ads Fácil 2.0 recarrega no mínimo 2% das vendas.",
       "t": "Shopee Ads"
      },
      {
       "d": "Só CNPJ. Recebe até 24 h após o envio pagando 3,5% por resgate (2% para Vendedor Indicado).",
       "t": "Shopee Acelera"
      }
     ],
     "tipo": "lista",
     "titulo": "Outros custos que podem aparecer"
    },
    {
     "paragrafos": [
      "O valor fica retido até o comprador clicar em \"Pedido Recebido\" ou até 7 dias após a entrega. A liberação acontece em dias úteis, das 9h às 18h: na prática, até 10 dias corridos depois da entrega. Acompanhe em Minha Renda › Pendente. Saques são gratuitos, até 7 por semana."
     ],
     "tipo": "texto",
     "titulo": "Quando o dinheiro cai"
    }
   ],
   "calculadora": true,
   "fontes": [
    {
     "data": "18/09/2026",
     "rotulo": "Comissão para vendedores CNPJ e CPF em 2026 (ID 26839)",
     "url": "https://seller.shopee.com.br/edu/article/26839"
    },
    {
     "rotulo": "Programa de Frete Grátis (ID 23431)",
     "url": "https://seller.shopee.com.br/edu/article/23431"
    },
    {
     "data": "01/07/2026",
     "rotulo": "Taxa de devolução (ID 23740)",
     "url": "https://seller.shopee.com.br/edu/article/23740"
    },
    {
     "data": "21/09/2026",
     "rotulo": "Cobrança por faixa de penalidade (ID 28322)",
     "url": "https://seller.shopee.com.br/edu/article/28322"
    },
    {
     "data": "22/09/2026",
     "rotulo": "Campanhas de Destaque (ID 18712)",
     "url": "https://seller.shopee.com.br/edu/article/18712"
    },
    {
     "data": "13/07/2026",
     "rotulo": "Afiliados do Vendedor (ID 24595)",
     "url": "https://seller.shopee.com.br/edu/article/24595"
    },
    {
     "data": "21/09/2026",
     "rotulo": "Pagamentos e saques (ID 2856)",
     "url": "https://seller.shopee.com.br/edu/article/2856"
    },
    {
     "rotulo": "Brazil Journal — reajuste da taxa fixa",
     "url": "https://braziljournal.com/7ou4"
    }
   ],
   "inclui": [
    "comum-tributacao"
   ],
   "intro": "Na Shopee só existe uma cobrança por venda: comissão percentual + taxa fixa por item, que variam pela faixa de preço. Desde 01/03/2026 o frete grátis vale para todos e o teto de R$ 100 por item acabou.",
   "mkt": "shopee",
   "ordem": 1,
   "rotulo": "Taxas e tributação",
   "titulo": "Taxas e tributação"
  },
  "shopee-visibilidade": {
   "aba": "visibilidade",
   "atualizado_em": "2026-09-29",
   "blocos": [
    {
     "colunas": [
      "Nível",
      "O que precisa"
     ],
     "linhas": [
      [
       "Qualificado",
       "Título com 10+ caracteres e nome do produto, sem excesso de termos; descrição com 60+ caracteres; fotos nítidas em fundo limpo, sem marca d'água sobre o produto; 3+ atributos; categoria certa."
      ],
      [
       "Excelente",
       "Tudo acima + vídeo do produto (10–60 s)."
      ]
     ],
     "nota": "Fotos: até 9, formato 1:1, até 2 MB. Título: fórmula produto + marca + especificações; o limite exato no Brasil não foi confirmado em fonte oficial (terceiros citam 120).",
     "tipo": "tabela",
     "titulo": "Qualidade do anúncio"
    },
    {
     "itens": [
      {
       "tag": "Grátis",
       "texto": "Transforma visitante em seguidor, e seguidor recebe as novidades da loja.",
       "titulo": "Cupom de Seguidor"
      },
      {
       "tag": "Grátis",
       "texto": "Níveis por quantidade: 2 placas com 10%, 3 com 15%. Conversa com o comprador de várias unidades.",
       "titulo": "Leve Mais por Menos"
      },
      {
       "tag": "Grátis",
       "texto": "Sem aprovação. Crie com 3 dias de antecedência para aparecer o lembrete.",
       "titulo": "Oferta Relâmpago da Loja"
      },
      {
       "tag": "Grátis",
       "texto": "Até 1 minuto, vertical, sem preço. Mostra a placa para quem não estava buscando.",
       "titulo": "Shopee Vídeo"
      },
      {
       "tag": "Pago",
       "texto": "GMV Max com lance automático para itens com até 30 dias. Não mexa por 7 dias. Exemplo oficial: R$ 10 por dia.",
       "titulo": "Promover Meus Novos Produtos"
      },
      {
       "tag": "Pago",
       "texto": "Modo manual com 10 a 15 palavras-chave. Custo por clique; cliques inválidos não são cobrados.",
       "titulo": "Anúncios de Busca"
      },
      {
       "tag": "Convite",
       "texto": "Datas duplas 10.10, 11.11 e 12.12, só para convidados. O desconto sai do seu bolso e o produto não sai depois de aprovado.",
       "titulo": "Campanhas oficiais"
      },
      {
       "tag": "CNPJ",
       "texto": "Criadores divulgam a placa e recebem a partir de 4% por venda. Bom depois das primeiras avaliações.",
       "titulo": "Afiliados"
      }
     ],
     "tipo": "cards",
     "titulo": "Ferramentas, da mais barata para a mais cara"
    },
    {
     "nivel": "incerto",
     "paragrafos": [
      "O antigo botão \"Impulsionar\" (5 produtos no topo a cada 4 horas) aparece em artigo de 2024; confira se ainda existe no seu painel. Shopee Live, Prêmio de Avaliação e Moedas do Vendedor são só para vendedores selecionados."
     ],
     "tipo": "alerta",
     "titulo": "Não há programa oficial para lojas novas"
    },
    {
     "colunas": [
      "Data",
      "O que fazer"
     ],
     "linhas": [
      [
       "10.10 (sábado, 10/10)",
       "Primeira data dupla após abrir a loja. Se não houver convite, use Oferta Relâmpago da Loja e cupom."
      ],
      [
       "11.11 (quarta, 11/11)",
       "Maior data da Shopee. Prepare estoque."
      ],
      [
       "Black Friday (27/11)",
       "Leve Mais por Menos e cupons."
      ],
      [
       "12.12 (sábado, 12/12)",
       "Última data dupla; comércio comprando para o fim de ano."
      ]
     ],
     "tipo": "tabela",
     "titulo": "Calendário comercial até o fim do ano"
    },
    {
     "itens": [
      {
       "d": "Responder todas as avaliações; lembrar pelo chat de confirmar o recebimento e avaliar; cartão de instruções no pacote sem contatos.",
       "t": "Pode"
      },
      {
       "d": "Cartão ou flyer com Instagram, WhatsApp, site ou QR para fora; comprar avaliações; pedir para o comprador mudar o motivo de devolução.",
       "t": "Não pode"
      }
     ],
     "tipo": "lista",
     "titulo": "Engajamento sem quebrar regra"
    }
   ],
   "fontes": [
    {
     "data": "24/04/2026",
     "rotulo": "Qualidade do anúncio (ID 21806)",
     "url": "https://seller.shopee.com.br/edu/article/21806"
    },
    {
     "rotulo": "Ferramentas de marketing (ID 18421)",
     "url": "https://seller.shopee.com.br/edu/article/18421"
    },
    {
     "rotulo": "Shopee Vídeo (ID 23493)",
     "url": "https://seller.shopee.com.br/edu/article/23493"
    },
    {
     "rotulo": "Impulsionar (ID 4521)",
     "url": "https://seller.shopee.com.br/edu/article/4521"
    },
    {
     "rotulo": "Portal Shopee Ads",
     "url": "https://ads.shopee.com.br/learn"
    },
    {
     "data": "19/06/2026",
     "rotulo": "Transações fora da Shopee (ID 11123)",
     "url": "https://seller.shopee.com.br/edu/article/11123"
    }
   ],
   "intro": "A busca da Shopee é personalizada por comprador e pesa a qualidade do anúncio, o cumprimento de prazos e o uso das ferramentas de marketing. Penalidades cortam de 5% a 30% da visibilidade.",
   "mkt": "shopee",
   "ordem": 2,
   "rotulo": "Visibilidade e vendas",
   "titulo": "Visibilidade e vendas"
  }
 },
 "calc": {
  "ml": {
   "componentes": [
    {
     "nota": "Hipótese: confirme no simulador",
     "rotulo": "Tarifa de venda Clássico (12%)",
     "se": {
      "variante": "classico"
     },
     "tipo": "pct",
     "valor": 0.12
    },
    {
     "nota": "Hipótese: confirme no simulador",
     "rotulo": "Tarifa de venda Premium (17%)",
     "se": {
      "variante": "premium"
     },
     "tipo": "pct",
     "valor": 0.17
    },
    {
     "faixas": [
      {
       "ate": 18.99,
       "pct": 0.5,
       "teto": 6.85
      },
      {
       "ate": 48.99,
       "valor": 6.85
      },
      {
       "ate": 78.99,
       "valor": 8.15
      },
      {
       "ate": 99.99,
       "valor": 12.95
      },
      {
       "ate": 119.99,
       "valor": 14.95
      },
      {
       "ate": 1000000,
       "valor": 14.95
      }
     ],
     "nota": "Tabela verde / sem reputação",
     "rotulo": "Custo dos envios (até 0,3 kg)",
     "se": {
      "conta": "verde"
     },
     "tipo": "faixa"
    },
    {
     "faixas": [
      {
       "ate": 18.99,
       "pct": 0.5,
       "teto": 7.83
      },
      {
       "ate": 48.99,
       "valor": 7.83
      },
      {
       "ate": 78.99,
       "valor": 9.31
      },
      {
       "ate": 99.99,
       "valor": 15.54
      },
      {
       "ate": 119.99,
       "valor": 17.94
      },
      {
       "ate": 1000000,
       "valor": 17.94
      }
     ],
     "nota": "Tabela amarela",
     "rotulo": "Custo dos envios (até 0,3 kg)",
     "se": {
      "conta": "amarela"
     },
     "tipo": "faixa"
    },
    {
     "faixas": [
      {
       "ate": 18.99,
       "pct": 0.5,
       "teto": 9.79
      },
      {
       "ate": 48.99,
       "valor": 9.79
      },
      {
       "ate": 78.99,
       "valor": 11.64
      },
      {
       "ate": 99.99,
       "valor": 25.9
      },
      {
       "ate": 119.99,
       "valor": 29.9
      },
      {
       "ate": 1000000,
       "valor": 29.9
      }
     ],
     "nota": "Tabela laranja/vermelha",
     "rotulo": "Custo dos envios (até 0,3 kg)",
     "se": {
      "conta": "laranja"
     },
     "tipo": "faixa"
    },
    {
     "rotulo": "Outros custos de envio",
     "tipo": "frete"
    }
   ],
   "contas": {
    "nota": "Conta nova sem cor paga a tabela verde.",
    "opcoes": [
     {
      "id": "verde",
      "rotulo": "Sem cor / verde"
     },
     {
      "id": "amarela",
      "rotulo": "Amarela"
     },
     {
      "id": "laranja",
      "rotulo": "Laranja/vermelha"
     }
    ],
    "padrao": "verde",
    "rotulo": "Reputação"
   },
   "fonte": {
    "rotulo": "Tabela de custos de envio (verde)",
    "url": "https://www.mercadolivre.com.br/ajuda/40538"
   },
   "frete_nota": "O custo do Mercado Envios já está incluído. Use só para passagem até a agência, etiqueta etc.",
   "frete_rotulo": "Outros custos de envio (R$)",
   "padrao": {
    "custo": 8,
    "custo_nota": "Exemplo: ~25 g de PLA, tag NTAG213 e envelope. Troque pelo seu custo real.",
    "frete": 0,
    "imposto": 0,
    "preco": 59.9
   },
   "rodape": "Abaixo de R$ 19 o custo de envio é no máximo metade do preço; acima de R$ 119,99 a calculadora repete a última faixa consultada.",
   "texto": "Pacote até 0,3 kg, envio pelo Mercado Envios. O custo de envio entra automático pela faixa de preço e pela reputação (tabela oficial de 29/09/2026). A tarifa usa **12% no Clássico e 17% no Premium como hipótese**: troque pela porcentagem que o simulador mostrar para a sua categoria.",
   "titulo": "Quanto sobra de cada venda no Mercado Livre",
   "variantes": {
    "opcoes": [
     {
      "id": "classico",
      "rotulo": "Clássico"
     },
     {
      "id": "premium",
      "rotulo": "Premium"
     }
    ],
    "padrao": "classico",
    "rotulo": "Tipo de anúncio"
   }
  },
  "shopee": {
   "componentes": [
    {
     "faixas": [
      {
       "ate": 79.99,
       "pct": 0.2,
       "valor": 4.5
      },
      {
       "ate": 99.99,
       "pct": 0.14,
       "valor": 16
      },
      {
       "ate": 199.99,
       "pct": 0.14,
       "valor": 20
      },
      {
       "ate": 1000000,
       "pct": 0.14,
       "valor": 26
      }
     ],
     "rotulo": "Comissão + taxa fixa",
     "tipo": "faixa"
    },
    {
     "nota": "Mais de 450 pedidos em 90 dias",
     "rotulo": "Adicional CPF",
     "se": {
      "conta": "cpf450"
     },
     "tipo": "fixo",
     "valor": 3
    },
    {
     "rotulo": "Custo até a agência",
     "tipo": "frete"
    }
   ],
   "contas": {
    "nota": "CPF paga R$ 3 a mais por item depois de 450 pedidos em 90 dias.",
    "opcoes": [
     {
      "id": "cnpj",
      "rotulo": "CNPJ"
     },
     {
      "id": "cpf",
      "rotulo": "CPF"
     },
     {
      "id": "cpf450",
      "rotulo": "CPF +450 pedidos"
     }
    ],
    "padrao": "cnpj",
    "rotulo": "Tipo de conta"
   },
   "fonte": {
    "rotulo": "Comissão para vendedores CNPJ e CPF em 2026",
    "url": "https://seller.shopee.com.br/edu/article/26839"
   },
   "frete_nota": "A Shopee não cobra frete do vendedor. Use para passagem ou etiqueta, se houver.",
   "frete_rotulo": "Custo até a agência (R$)",
   "padrao": {
    "custo": 8,
    "custo_nota": "Exemplo: ~25 g de PLA, tag NTAG213 e envelope. Troque pelo seu custo real.",
    "frete": 0,
    "imposto": 0,
    "preco": 59.9
   },
   "rodape": "Itens muito baratos têm regra própria (CNPJ abaixo de R$ 9, CPF abaixo de R$ 12). Acima de R$ 80 o pagamento via Pix recebe subsídio de 5% da Shopee sem mudar o seu líquido.",
   "texto": "Tabela oficial em vigor a partir de **01/10/2026** (taxa fixa da primeira faixa sobe de R$ 4,00 para R$ 4,50). A comissão já inclui a taxa de transação e o Programa de Frete Grátis; a Shopee não cobra frete do vendedor.",
   "titulo": "Quanto sobra de cada venda na Shopee"
  }
 }
};
