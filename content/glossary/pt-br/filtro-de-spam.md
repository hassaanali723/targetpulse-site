---
title: Filtro de spam
description: O que um filtro de spam verifica antes de entregar, mover ou rejeitar o seu e-mail, a diferença entre rejeição e pasta de spam e os limites do Google.
slug: filtro-de-spam
date: 2026-09-29
updated: 2026-10-12
keyword: filtro de spam
short: Um filtro de spam é o sistema que decide se um e-mail recebido vai para a caixa de entrada, para a pasta de spam ou é recusado. Ele confere quem enviou, o que o e-mail contém e como as pessoas reagiram a e-mails anteriores desse remetente.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Envie para endereços reais e os filtros de spam terão menos contra você
---

## O que é um filtro de spam?

Um filtro de spam é um sistema automático que examina cada e-mail que chega. Ele decide para onde o e-mail vai. Existem três caminhos possíveis:

1. a caixa de entrada;
2. a pasta de spam;
3. a recusa, quando o e-mail nem chega.

Todo provedor de e-mail tem um filtro de spam. Gmail, Outlook.com e Yahoo têm um. Os servidores de e-mail de empresas que ficam atrás de um [gateway de e-mail seguro](/glossary/secure-email-gateway) também têm. Um gateway é um servidor que filtra o e-mail antes de ele chegar à empresa.

A decisão acontece em um de dois momentos.

**Durante a conexão SMTP.** SMTP é o conjunto de regras que os servidores usam para trocar e-mails. Nesse momento, o servidor de destino pode recusar o e-mail antes de aceitá-lo. Você recebe um bounce, ou seja, um aviso de que o e-mail voltou, com um código `5.7.x`. Exemplos: o `550 5.7.1` do Gmail para um bloqueio por política, ou o `550 5.7.28` para uma quantidade incomum de e-mail indesejado do seu endereço IP. O endereço IP é o número que identifica o servidor que envia o seu e-mail. Nesse caso, o e-mail nunca chega à caixa de entrada.

**Depois que o e-mail é aceito.** O servidor aceita o e-mail. Depois ele coloca a mensagem na caixa de entrada, na aba de promoções ou na pasta de spam. Você não recebe nenhum bounce. Os únicos sinais são taxas de abertura mais baixas e os dados do Google Postmaster Tools.

## Um exemplo simples

Uma academia envia uma newsletter para 5.000 alunos no Gmail. Veja o caminho de um desses e-mails pelo filtro de spam.

1. **O e-mail chega ao Gmail.** O filtro de spam começa a conferir.
2. **Ele confere a autenticação.** O SPF e o DKIM da academia passam.
3. **Ele confere a reputação.** A academia envia todo mês e tem poucas reclamações.
4. **Ele confere as reações anteriores.** Muitos alunos abriram as últimas newsletters.
5. **O e-mail vai para a caixa de entrada.**

Agora a academia compra uma lista de 20.000 endereços e envia a mesma newsletter. Muitos endereços não existem e voltam como bounce. Muitas pessoas não conhecem a academia e clicam em "Marcar como spam". Nas semanas seguintes, o filtro de spam passa a mandar mais e-mails da academia para a pasta de spam. Isso acontece até com os alunos reais. Os números deste exemplo são só ilustrativos.

## O que o filtro verifica

Os provedores não publicam as suas regras exatas. Estes são os critérios conhecidos:

| Critério | O que o filtro de spam olha |
|---|---|
| **Autenticação** | Se [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc) passam. São registros que provam que o e-mail saiu mesmo do seu domínio. O Google e a Microsoft agora recusam e-mail em massa que não passa nessas verificações. |
| **Reputação** | O histórico de envio do seu domínio e do seu endereço IP. Veja [reputação de domínio](/glossary/domain-reputation) e [reputação de IP](/glossary/ip-reputation). |
| **Reclamações** | Com que frequência os destinatários clicam em "Marcar como spam". As diretrizes do Google dizem para manter a taxa de reclamações do Postmaster Tools abaixo de 0,10 por cento e nunca chegar a 0,30 por cento. |
| **Bounces** | Com que frequência você envia para endereços que não existem. Uma lista com muitos endereços mortos parece uma lista comprada ou extraída de sites. |
| **Engajamento** | Se as pessoas abrem os seus e-mails, respondem, apagam sem ler ou movem para outra pasta. |
| **Conteúdo** | Links, anexos, imagens e padrões de texto parecidos com spam conhecido. O conteúdo pesa menos do que antes. Reputação e autenticação pesam mais. |

Para entender os números de reclamações: 0,10 por cento são 10 reclamações em 10.000 e-mails entregues.

## Por que remetentes são filtrados

A maior parte da filtragem não vem das palavras do e-mail. Ela vem da lista.

- **Endereços mortos causam bounces.** Um endereço morto é um endereço que não existe mais.
- **Pessoas que não pediram o seu e-mail causam reclamações.**

Os dois problemas vêm de endereços que nunca foram verificados.

## Como um verificador ajuda

Um verificador não muda as regras de nenhum filtro de spam. Ele remove os endereços que causam bounces e reclamações. Passe a sua lista por um [verificador de e-mail](/email-checker) ou por um [validador de e-mail em massa](/bulk-email-verifier) antes de enviar. A [verificação de e-mail](/) remove as caixas de entrada que não existem mais. Ela também remove endereços descartáveis e contas de função como info@, que recebem mais reclamações. O guia sobre a [taxa de bounce de e-mail](/blog/how-to-reduce-email-bounce-rate) mostra o tamanho que essa parte de uma lista costuma ter.
