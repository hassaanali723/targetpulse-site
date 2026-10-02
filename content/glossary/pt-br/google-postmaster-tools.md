---
title: Google Postmaster Tools
description: O que o Google Postmaster Tools mostra sobre os seus e-mails para o Gmail, como configurar, os limites de taxa de spam do Google e o que ele não mostra.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-09-29
keyword: google postmaster tools
short: O Google Postmaster Tools é um painel gratuito do Google. Ele mostra como o Gmail avalia o seu domínio remetente. Ele informa a sua taxa de spam, reputação de domínio, reputação de IP, resultados de autenticação e erros de entrega para e-mails enviados a usuários do Gmail.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: O Postmaster Tools informa os problemas depois do envio. A verificação os evita
---

## O que é o Google Postmaster Tools

O Google Postmaster Tools é um site que o Google oferece aos remetentes de e-mail. Você adiciona o seu domínio e prova que ele é seu adicionando um registro DNS. Depois o Google mostra dados sobre o e-mail que o seu domínio envia para endereços do Gmail. É gratuito. É a única fonte oficial de informação sobre como o Gmail avalia o seu domínio.

Ele cobre só o Gmail. E-mails enviados para Outlook.com, Yahoo ou servidores corporativos não aparecem. A Microsoft tem um serviço separado para a sua rede.

## O que ele mostra

- **Taxa de spam.** A porcentagem do seu e-mail entregue que os usuários do Gmail marcaram como spam. As diretrizes para remetentes do Google se referem a este número.
- **Reputação de domínio e reputação de IP.** Uma avaliação para cada uma: bad, low, medium ou high. High significa que o Gmail raramente filtra o seu e-mail. Bad significa que a maior parte do seu e-mail vai para o spam ou é rejeitada.
- **Autenticação.** A porcentagem do seu e-mail que passa em [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc).
- **Criptografia.** A porcentagem do seu e-mail enviada com TLS.
- **Erros de entrega.** A porcentagem do seu e-mail que o Gmail rejeitou ou atrasou, com o motivo.
- **Feedback loop.** Taxas de reclamação por campanha, para grandes remetentes que usam o cabeçalho Feedback-ID.

## Os limites que o Google publica

As diretrizes para remetentes do Google dizem:

- Mantenha a taxa de spam mostrada no Postmaster Tools abaixo de 0,10 por cento.
- Nunca chegue a uma taxa de spam de 0,30 por cento ou mais.
- Remetentes de 5.000 ou mais mensagens por dia precisam ter SPF, DKIM e DMARC.
- O e-mail de marketing desses remetentes precisa ter cancelamento de inscrição com um clique.

Remetentes acima de 0,30 por cento têm o seu e-mail filtrado ou rejeitado. Esses limites são pequenos. Em 10.000 e-mails entregues, 0,30 por cento são 30 reclamações.

## O que ele não mostra

O Postmaster Tools informa sobre o e-mail que foi entregue. Ele não pode mostrar endereços que não existem. Um e-mail para um endereço morto é rejeitado durante a conexão SMTP. Essa rejeição é um bounce. Os bounces não fazem parte da taxa de spam. Uma lista com muitos endereços inválidos pode mostrar uma taxa de spam baixa enquanto a taxa de bounce prejudica a sua reputação.

O Postmaster Tools também precisa de volume. Se o seu domínio envia pouco e-mail para o Gmail, os gráficos ficam vazios. O Google não publica o volume mínimo.

## Como ele se encaixa na verificação

O Postmaster Tools informa os problemas depois do envio. A verificação remove as causas antes do envio. Passar uma lista por um [verificador de endereços de e-mail](/email-checker) remove os endereços que dão bounce. Ele também remove os endereços descartáveis e de função que causam reclamações. Depois disso, o Postmaster Tools tem menos a informar. O guia sobre a [taxa de bounce de e-mail](/blog/how-to-reduce-email-bounce-rate) explica os dois lados.
