---
title: Mailer-Daemon
description: O que é uma mensagem do Mailer-Daemon, por que você recebe uma, como ler o código dentro dela e o que fazer quando recebe uma por um e-mail que não enviou.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-10-12
keyword: mailer daemon
short: O Mailer-Daemon é o programa de um servidor de e-mail que envia mensagens automáticas. A maioria dessas mensagens são avisos de bounce. Uma mensagem do Mailer-Daemon significa que um e-mail que você enviou não foi entregue.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Remova os endereços que dão bounce antes de enviar
---

## O que é um Mailer-Daemon?

O Mailer-Daemon é um programa automático que avisa quando um e-mail seu não foi entregue. Ele roda dentro de um servidor de e-mail. Um servidor de e-mail é o computador que envia e recebe e-mails para um domínio. O domínio é a parte do endereço depois do @.

A palavra "daemon" é o nome técnico de um programa que roda em segundo plano, sem ninguém abrir. O Mailer-Daemon cuida dos e-mails que não podem ser entregues. Quando o seu e-mail é recusado, ele envia um aviso para você. Esse aviso se chama bounce, porque o e-mail "volta" para quem enviou.

O nome do remetente desse aviso costuma ser `MAILER-DAEMON@` seguido do domínio do servidor. Às vezes aparece `postmaster@`.

O aviso se chama [relatório de não entrega](/glossary/ndr). Ele diz qual endereço falhou, quando falhou e por quê.

## Um exemplo simples

Veja como uma mensagem do Mailer-Daemon chega até você.

1. **Júlia envia um orçamento.** Ela escreve para joao@cliente.example.
2. **Ela digita errado.** Na verdade, o endereço certo é joao.silva@cliente.example.
3. **O servidor do cliente procura a caixa.** A caixa "joao" não existe.
4. **O servidor recusa o e-mail.** Ele devolve o código `550 5.1.1`.
5. **O Mailer-Daemon avisa Júlia.** Alguns segundos depois, chega à caixa dela um e-mail de MAILER-DAEMON com o assunto "Delivery Status Notification (Failure)" ou parecido.
6. **Júlia lê o código.** Ela vê que o endereço não existe, corrige e envia de novo.

A mensagem do Mailer-Daemon não é spam nem vírus. É só o servidor dizendo que a entrega falhou.

## Como ler a mensagem

A parte importante da mensagem do Mailer-Daemon é o código. Procure um número de três dígitos e um número com pontos. Exemplo: `550 5.1.1`.

| O código começa com | O que significa | O que fazer |
|---|---|---|
| **5** | É um [hard bounce](/glossary/hard-bounce). O endereço não existe ou o servidor bloqueou o seu e-mail. | Não reenvie até saber qual dos dois casos é. |
| **4** | É um [soft bounce](/glossary/soft-bounce). A caixa de entrada está cheia ou o servidor está ocupado. | O seu servidor de e-mail tenta de novo sozinho. |

O texto ao lado do código é escrito pelo servidor de destino. Dois exemplos:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`. Ou seja, a conta de e-mail não existe.
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. A documentação da Microsoft diz que isso significa "the recipient's address doesn't exist", ou seja, o endereço do destinatário não existe.

## Mensagens do Mailer-Daemon por e-mails que você não enviou

Às vezes você recebe um aviso do Mailer-Daemon por um e-mail que nunca enviou. Isso se chama [backscatter](/glossary/backscatter).

**Exemplo:** você usa o endereço vendas@sualoja.example. Um spammer envia milhares de e-mails e coloca o seu endereço no campo De. Muitos desses e-mails vão para endereços que não existem. Os servidores recusam esses e-mails. Os avisos do Mailer-Daemon vão para você, porque o seu endereço estava no campo De.

A sua conta não foi hackeada. A solução está no seu domínio. Publique os registros SPF, DKIM e DMARC. São registros públicos que dizem quais servidores podem enviar e-mail em nome do seu domínio. Com eles, os servidores de destino podem recusar os e-mails falsos sem enviar avisos de bounce para você.

## Por que isso importa para remetentes

Cada mensagem do Mailer-Daemon é um bounce. Os provedores de e-mail, como Gmail e Outlook, contam quantos dos seus e-mails vão para endereços que não existem. Muitos avisos `5.1.1` mostram a eles que você não verificou a sua lista. Com isso, mais e-mails seus podem ir para a pasta de spam.

## Como um verificador ajuda

Um [verificador de e-mail](/email-checker) pergunta ao servidor de destino se ele aceita e-mail para um endereço. Ele faz isso antes de você enviar qualquer coisa. O servidor devolve o mesmo código que o Mailer-Daemon enviaria para você depois. A diferença é que nenhum e-mail foi enviado e a sua reputação não muda. Para uma lista inteira, use um [validador de e-mail em massa](/bulk-email-verifier). A [verificação de e-mail](/) não impede o backscatter, porque ele vem de e-mails falsos que você não enviou.
