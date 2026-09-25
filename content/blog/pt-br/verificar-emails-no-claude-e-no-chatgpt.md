---
title: "Como verificar e-mails no Claude e no ChatGPT"
description: Conecte uma ferramenta de verificação de e-mail ao Claude, ChatGPT, Cursor ou VS Code via MCP e confira endereços na conversa em vez de exportar um CSV.
slug: verificar-emails-no-claude-e-no-chatgpt
date: 2026-09-23
keyword: verificar e-mails no claude e no chatgpt
image: /blog/covers/pt-br/verificar-emails-no-claude-e-no-chatgpt.webp
imageAlt: Como verificar e-mails no Claude e no ChatGPT
cta: Verifique e-mails sem sair do chat
---

A maior parte da verificação de e-mail ainda acontece do mesmo jeito que em 2015. Você exporta um CSV, abre uma aba do navegador, sobe o arquivo, espera, baixa outro CSV e importa em algum lugar. Funciona. Também são quatro trocas de contexto para o que, no fundo, é uma pergunta só: esta caixa é real?

Se você já faz parte do seu trabalho dentro do Claude ou do ChatGPT, agora existe um caminho mais curto. O Model Context Protocol permite que um assistente chame uma ferramenta externa diretamente, então a verificação pode acontecer na conversa que você já está tendo.

## O que é MCP de verdade

MCP é uma especificação de como um assistente de IA conversa com um serviço externo. A Anthropic publicou no fim de 2024 e desde então ela foi adotada muito além do Claude. O modelo mental útil é o de um padrão de tomada. Antes, cada assistente precisava de uma integração sob medida para cada ferramenta. Agora um serviço publica um único servidor MCP e qualquer cliente compatível pode usá-lo.

Para uma ferramenta de verificação, a superfície é pequena. São poucas as coisas que você pediria: confira este endereço, confira esta lista, mostre o detalhamento completo, diga quantos créditos ainda tenho. A Giggal.ai expõe exatamente isso como três ferramentas, `verify_emails`, `get_verification_details` e `get_credit_balance`.

O que torna isso diferente de uma API é que você não escreve a chamada. Você diz o que quer na frase que ia digitar de qualquer forma, e o assistente descobre qual ferramenta chamar e com quais argumentos.

## Para que serve, e para que não serve

Ser honesto sobre o limite evita decepção.

Serve quando a verificação é um passo dentro de algo maior que você já está fazendo na conversa. Você colou uma lista de participantes de um evento e quer tirar os mortos antes de escrever a prospecção. Você está depurando um fluxo de cadastro e quer saber se um endereço específico é real. Você está montando uma sequência e quer conferir os doze nomes da conta-alvo antes de se comprometer. Em todos esses casos a alternativa é sair da conversa, e a chamada da ferramenta é de fato mais rápida.

Não serve para limpar uma lista de 200.000 linhas. Isso é trabalho para um envio em massa ou para a API, e passar isso por uma interface de chat não acrescenta nada além de uma espera maior e muitos tokens. Para isso use o painel ou o endpoint REST, que existem exatamente para isso. Para conferir rápido um único endereço, há também a [verificação de e-mail](/email-checker) no site.

## Configuração

Você precisa de uma conta na Giggal.ai e de uma chave de API. A chave fica na aba Developer API do app, não em Configurações, um detalhe que confunde as pessoas mais vezes do que deveria.

O servidor é remoto, então não há nada para instalar e nenhum SDK. Ele fica em `https://mcp.giggal.ai/mcp` e autentica com a sua chave de API.

No Claude Desktop, abra Configurações, depois Conectores, e adicione um conector personalizado apontando para essa URL. O Claude Code aceita o mesmo servidor com `claude mcp add`. Cursor e VS Code leem servidores MCP de um arquivo de configuração JSON no diretório do projeto ou do usuário, e o formato desse arquivo está documentado na [página de MCP](/mcp) (em inglês) junto com os trechos exatos. O ChatGPT aceita servidores MCP remotos pelas configurações de conectores nos planos em que o recurso está ativo.

Depois de conectado, o assistente lista as três ferramentas e você pode começar a perguntar.

## Como é usar

Você não precisa de nenhuma frase especial. Tudo isso funciona:

- Verifique hello@stripe.com e diga se é uma caixa real
- Aqui estão onze endereços de um cadastro de webinar, confira quais vão dar bounce
- Quais destes são domínios catch-all, e as caixas existem mesmo
- Quantos créditos de verificação ainda tenho antes de rodar isto

O assistente chama `verify_emails`, recebe um resultado por endereço e explica na resposta. Se você perguntou sobre uma lista, pode continuar na mesma conversa. Peça para tirar tudo o que for inválido, agrupar os que sobraram por domínio e escrever tudo como um bloco CSV para colar direto na sua ferramenta de envio. Essa segunda metade é o que faz valer a pena, porque o assistente já está com os dados e pode reorganizá-los sem mais uma ida e volta.

## A parte catch-all importa aqui mais do que o normal

Cerca de 30% de uma lista B2B fica em domínios que aceitam e-mail para qualquer endereço possível, real ou não. A maioria dos verificadores devolve esses endereços como arriscados ou accept-all, ou seja, não conseguiu saber.

Esse rótulo é incômodo num painel. Numa conversa é pior, porque o assistente vai repassar fielmente o que recebeu e você acaba com uma resposta dizendo que quatro dos seus onze endereços são incertos, exatamente onde você estava antes de perguntar. A Giggal.ai resolve esses endereços em válidos ou inválidos, junto com as caixas atrás de quinze secure email gateways identificados, então o que chega ao assistente é uma resposta, e não um dar de ombros.

## Custo e uma precaução sensata

Verificações via MCP gastam os mesmos créditos que em qualquer outro lugar. Cada verificação de endereço custa 1 crédito fixo (incluindo endereços catch-all e protegidos por SEG), e o plano grátis tem 1.000 créditos sem cartão. Os créditos não expiram.

A precaução é simples: um assistente faz o que você pede, inclusive rodar um trabalho maior do que você queria. Peça o saldo de créditos antes de algo grande, e cole os endereços em vez de apontar para um arquivo que você não olhou. Nenhuma das duas coisas é exclusiva da verificação, mas com uma API cobrada por uso o erro é mais chato do que o normal.

## Vale a pena configurar?

Se você abre o Claude ou o ChatGPT quase todo dia e listas de e-mail fazem parte do seu trabalho, leva uns dois minutos e tira um passo que você fazia à mão. Se a verificação é um trabalho mensal em massa que você faz no navegador, o painel é de fato a ferramenta melhor, e isso não vai mudar sua vida.

As instruções de configuração e os trechos para cada cliente estão na [página de MCP](/mcp) (em inglês). A [referência da API](/public/docs) (em inglês) cobre as mesmas operações via REST, se você preferir automatizar com um script.
