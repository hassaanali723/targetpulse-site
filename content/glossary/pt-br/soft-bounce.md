---
title: Soft bounce
description: O que é um soft bounce, as causas comuns e os seus códigos, por quanto tempo as ferramentas de envio tentam de novo e quando remover um endereço que continua dando soft bounce.
slug: soft-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: soft bounce
short: Um soft bounce é um e-mail que não foi entregue desta vez por causa de um problema temporário. O endereço é real. A caixa de entrada está cheia, o servidor está ocupado ou o servidor pediu para você tentar mais tarde.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Veja quais endereços da sua lista são reais antes de enviar
---

## O que é um soft bounce

Um soft bounce é uma falha de entrega temporária. O servidor de destino não entregou o seu e-mail desta vez. Ele permite que você tente de novo mais tarde.

O padrão de e-mail RFC 5321 chama isso de resposta negativa transitória. O código na mensagem de bounce começa com 4. Exemplo: `452 4.2.2`. Um código que começa com 5 é um [hard bounce](/glossary/hard-bounce). Um hard bounce é permanente.

## Causas comuns

- **A caixa de entrada está cheia.** O Gmail responde com `452 4.2.2 The recipient's inbox is out of storage space`. A pessoa precisa apagar e-mails.
- **E-mails demais, rápido demais.** O Gmail responde com `450 4.2.1 The user you are trying to contact is receiving email too quickly`. O Gmail responde com `421 4.7.28` quando chegam e-mails demais do seu endereço IP.
- **Greylisting.** O servidor rejeita o primeiro e-mail de um remetente que ele não conhece. Ele aceita o mesmo e-mail na segunda tentativa. Veja [greylisting](/glossary/greylisting).
- **O servidor está fora do ar ou lento.** Um código `421` significa que o servidor não está disponível. Um código `4.4.1` ou `4.4.2` significa que a conexão falhou ou expirou.
- **O e-mail expirou.** Um código `4.4.7` significa que o seu servidor tentou durante todo o período de novas tentativas e depois parou. A RFC 5321 diz que os servidores devem tentar por cerca de quatro a cinco dias.

## O que a sua ferramenta de envio faz

A sua ferramenta de envio tenta os soft bounces de novo automaticamente. Cada ferramenta tem as suas próprias regras.

- O SendGrid tenta de novo por até 72 horas.
- O HubSpot marca o e-mail como pendente por até 72 horas. Depois ele registra um soft bounce.
- O Mailchimp transforma um endereço em hard bounce depois de 7 soft bounces se o contato nunca abriu um e-mail. Se o contato abriu um e-mail antes, o limite é de 15 soft bounces.

O mesmo soft bounce pode ter nomes diferentes em ferramentas diferentes. Leia o código na mensagem de bounce, não a etiqueta.

## O que fazer com um soft bounce

No começo, nada. Deixe a sua ferramenta de envio tentar de novo. Um soft bounce é normal.

Remova um endereço que dá soft bounce em vários envios seguidos. Uma caixa de entrada que está cheia em todo envio durante seis semanas não está cheia. Ninguém usa essa caixa. O limite de 7 soft bounces do Mailchimp é uma regra segura.

## Como um verificador lida com isso

Um verificador se conecta ao servidor de e-mail antes de você enviar. Se o servidor responder com um código 4xx, o verificador tenta de novo. Se a resposta continuar a mesma, o verificador marca o endereço como desconhecido, não como válido. Desconhecido significa que a caixa existe, mas pode não estar recebendo e-mail. O guia [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) explica cada código e o que fazer com ele.
