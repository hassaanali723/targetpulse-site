---
title: Mailer-Daemon
description: O que é uma mensagem do Mailer-Daemon, por que você recebe uma, como ler o código dentro dela e o que fazer quando recebe uma por um e-mail que não enviou.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-09-29
keyword: mailer daemon
short: O Mailer-Daemon é a parte de um servidor de e-mail que envia mensagens automáticas. A maioria dessas mensagens são avisos de bounce. Uma mensagem do Mailer-Daemon significa que um e-mail que você enviou não foi entregue.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Remova os endereços que dão bounce antes de enviar
---

## O que é um Mailer-Daemon

Um daemon é um programa que roda em segundo plano em um servidor. O Mailer-Daemon é o programa que cuida dos e-mails que não podem ser entregues. Quando o seu e-mail é rejeitado, o Mailer-Daemon envia um aviso para você. O nome do remetente costuma ser `MAILER-DAEMON@` seguido do domínio do servidor, ou `postmaster@`.

O aviso se chama [relatório de não entrega](/glossary/ndr). Ele diz qual endereço falhou, quando falhou e por quê.

## Como ler a mensagem

A parte importante da mensagem é o código. Procure um número de três dígitos e um número com pontos. Exemplo: `550 5.1.1`.

- Um código que começa com **5** é um [hard bounce](/glossary/hard-bounce). O endereço não existe ou o servidor bloqueou o seu e-mail. Não reenvie até saber qual dos dois casos é.
- Um código que começa com **4** é um [soft bounce](/glossary/soft-bounce). A caixa de entrada está cheia ou o servidor está ocupado. O seu servidor de e-mail tenta de novo sozinho.

O texto ao lado do código é escrito pelo servidor de destino. Dois exemplos:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. A documentação da Microsoft diz que isso significa "the recipient's address doesn't exist", ou seja, o endereço do destinatário não existe.

## Mensagens do Mailer-Daemon por e-mails que você não enviou

Às vezes você recebe um aviso de bounce por um e-mail que nunca enviou. Isso se chama [backscatter](/glossary/backscatter). Um spammer colocou o seu endereço no campo De dos e-mails dele. Quando esses e-mails dão bounce, os avisos vão para você.

A sua conta não foi hackeada. A solução está no seu domínio. Publique registros SPF, DKIM e DMARC. Assim os servidores de destino podem rejeitar os e-mails falsos em vez de enviar avisos de bounce para você.

## Por que isso importa para remetentes

Cada mensagem do Mailer-Daemon é um bounce. Os provedores de e-mail contam quantos dos seus e-mails vão para endereços que não existem. Muitos avisos `5.1.1` mostram a eles que você não verificou a sua lista.

## Como um verificador ajuda

Um [verificador de endereços de e-mail](/email-checker) pergunta ao servidor de destino se ele aceita e-mail para um endereço. Ele faz isso antes de você enviar qualquer coisa. O servidor devolve o mesmo código que o Mailer-Daemon enviaria para você depois. A diferença é que nenhum e-mail foi enviado e a sua reputação não muda.
