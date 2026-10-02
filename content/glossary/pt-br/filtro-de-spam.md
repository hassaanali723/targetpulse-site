---
title: Filtro de spam
description: O que um filtro de spam verifica antes de entregar, mover ou rejeitar o seu e-mail, a diferença entre rejeição e pasta de spam e os limites do Google.
slug: filtro-de-spam
date: 2026-09-29
updated: 2026-09-29
keyword: filtro de spam
short: Um filtro de spam é o sistema que um provedor de e-mail usa para decidir se um e-mail recebido vai para a caixa de entrada, vai para a pasta de spam ou é rejeitado. Ele verifica o remetente, o conteúdo do e-mail e como os destinatários anteriores reagiram aos e-mails daquele remetente.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Envie para endereços reais e os filtros de spam terão menos contra você
---

## O que um filtro de spam faz

Todo provedor de e-mail tem um filtro de spam. Gmail, Outlook.com e Yahoo têm um. Os servidores de e-mail corporativos atrás de um [gateway de e-mail seguro](/glossary/secure-email-gateway) têm um. O filtro examina cada e-mail recebido e decide se entrega, move para a pasta de spam ou rejeita.

A decisão acontece em um de dois momentos.

**Durante a conexão SMTP.** O servidor de destino pode rejeitar o e-mail antes de aceitá-lo. Você recebe um bounce com um código `5.7.x`. Exemplos: o `550 5.7.1` do Gmail para um bloqueio por política, ou o `550 5.7.28` para uma quantidade incomum de e-mail indesejado do seu endereço IP. O e-mail nunca chega à caixa de entrada.

**Depois que o e-mail é aceito.** O servidor aceita o e-mail e depois o coloca na caixa de entrada, na aba de promoções ou na pasta de spam. Você não recebe nenhum bounce. Os únicos sinais são taxas de abertura mais baixas e os dados do Google Postmaster Tools.

## O que o filtro verifica

Os provedores não publicam as suas regras exatas. Estes são os critérios conhecidos:

- **Autenticação.** Se [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc) passam. O Google e a Microsoft agora rejeitam e-mail em massa que não passa nessas verificações.
- **Reputação.** O histórico de envio do seu domínio e do seu endereço IP. Veja [reputação de domínio](/glossary/domain-reputation) e [reputação de IP](/glossary/ip-reputation).
- **Reclamações.** Com que frequência os destinatários clicam em "Marcar como spam". As diretrizes do Google dizem para manter a taxa de reclamações do Postmaster Tools abaixo de 0,10 por cento e nunca chegar a 0,30 por cento.
- **Bounces.** Com que frequência você envia para endereços que não existem. Uma lista com muitos endereços mortos parece uma lista comprada ou extraída.
- **Engajamento.** Se as pessoas abrem os seus e-mails, respondem, apagam sem ler ou movem para outra pasta.
- **Conteúdo.** Links, anexos, imagens e padrões de texto que batem com spam conhecido. O conteúdo pesa menos do que antes. Reputação e autenticação pesam mais.

## Por que remetentes são filtrados

A maior parte da filtragem não é causada pelas palavras do e-mail. É causada pela lista. Endereços mortos causam bounces. Pessoas que não pediram o seu e-mail causam reclamações. Os dois problemas vêm de endereços que nunca foram verificados.

## Como um verificador ajuda

Um verificador não mexe nos filtros de spam. Ele remove os endereços que causam bounces e reclamações. Passe a sua lista por um [verificador de endereços de e-mail](/email-checker) antes de enviar. Ele remove as caixas de entrada que não existem mais. Ele também remove endereços descartáveis e contas de função como info@, que recebem mais reclamações. O guia sobre a [taxa de bounce de e-mail](/blog/how-to-reduce-email-bounce-rate) mostra o tamanho que essa parte de uma lista costuma ter.
