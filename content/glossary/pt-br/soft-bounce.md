---
title: Soft bounce
description: O que é um soft bounce, as causas comuns e os seus códigos, por quanto tempo as ferramentas tentam de novo e quando remover um endereço da lista.
slug: soft-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: soft bounce
short: Um soft bounce é um e-mail que não foi entregue desta vez por causa de um problema temporário. O endereço é real, mas a caixa de entrada está cheia, o servidor está ocupado ou pediu para você tentar mais tarde. O mesmo e-mail pode chegar em uma nova tentativa.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Veja quais endereços da sua lista são reais antes de enviar
---

## O que é um soft bounce?

Um soft bounce é um e-mail que não foi entregue agora, mas ainda pode ser entregue depois. O problema é temporário. O endereço existe.

Bounce é o nome de um e-mail que volta para você sem ser entregue. O servidor de destino é o computador que recebe e-mail para o endereço do destinatário. Quando ele não entrega a mensagem, ele responde com um código. O código diz o motivo.

O padrão de e-mail RFC 5321 chama o soft bounce de resposta negativa transitória. O código de um soft bounce começa com 4. Exemplo: `452 4.2.2`. Um código que começa com 5 é um [hard bounce](/glossary/hard-bounce). Um hard bounce é permanente.

## Um exemplo simples

Veja um soft bounce acontecendo, passo a passo.

1. **Lúcia tem uma conta no Gmail.** Ela não apaga e-mails há anos.
2. **A caixa dela fica cheia.** Ela usou todo o espaço gratuito.
3. **Uma loja envia um recibo para ela.** O e-mail chega ao servidor do Gmail.
4. **O Gmail responde com `452 4.2.2`.** Isso significa que a caixa de entrada está sem espaço.
5. **A ferramenta de envio da loja espera.** Depois ela tenta de novo, sozinha.
6. **Lúcia apaga e-mails antigos.** Na tentativa seguinte, o recibo é entregue.

O endereço da Lúcia nunca deixou de existir. Por isso foi um soft bounce, não um hard bounce.

## Causas comuns

- **A caixa de entrada está cheia.** O Gmail responde com `452 4.2.2 The recipient's inbox is out of storage space`. A pessoa precisa apagar e-mails.
- **E-mails demais, rápido demais.** O Gmail responde com `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Ou seja, aquela pessoa está recebendo e-mails rápido demais. O Gmail responde com `421 4.7.28` quando chegam e-mails demais do seu endereço IP. O endereço IP é o número que identifica o servidor que envia o seu e-mail.
- **Greylisting.** O servidor recusa o primeiro e-mail de um remetente que ele não conhece. Ele aceita o mesmo e-mail na segunda tentativa. Veja [greylisting](/glossary/greylisting).
- **O servidor está fora do ar ou lento.** Um código `421` significa que o servidor não está disponível. Um código `4.4.1` ou `4.4.2` significa que a conexão falhou ou demorou demais.
- **O e-mail expirou.** Um código `4.4.7` significa que o seu servidor tentou durante todo o período de novas tentativas e depois parou. A RFC 5321 diz que os servidores devem tentar por cerca de quatro a cinco dias.

## O que a sua ferramenta de envio faz

A sua ferramenta de envio tenta de novo, sozinha, depois de um soft bounce. Cada ferramenta tem as suas próprias regras:

| Ferramenta | O que ela faz com um soft bounce |
|---|---|
| SendGrid | Tenta de novo por até 72 horas |
| HubSpot | Marca o e-mail como pendente por até 72 horas, depois registra um soft bounce |
| Mailchimp | Transforma o endereço em hard bounce depois de 7 soft bounces, se o contato nunca abriu um e-mail. Se o contato já abriu um e-mail, o limite é de 15 soft bounces |

O mesmo soft bounce pode ter nomes diferentes em ferramentas diferentes. Por isso, leia o código na mensagem de bounce, não a etiqueta da ferramenta.

## O que fazer com um soft bounce

No começo, nada. Deixe a sua ferramenta de envio tentar de novo. Um soft bounce de vez em quando é normal.

Depois, observe o mesmo endereço ao longo de vários envios:

1. **Um soft bounce isolado:** mantenha o endereço.
2. **Soft bounces em vários envios seguidos:** remova o endereço.

**Exemplo:** uma caixa de entrada que está cheia em todo envio durante seis semanas não está só cheia. Ninguém usa essa caixa. O limite de 7 soft bounces do Mailchimp é uma regra segura para seguir.

## Como um verificador lida com isso

Um [validador de e-mail](/email-checker) se conecta ao servidor de destino antes de você enviar. Se o servidor responder com um código 4xx, o verificador tenta de novo. Se a resposta continuar a mesma, ele marca o endereço como desconhecido, não como válido. Desconhecido significa que a caixa existe, mas pode não estar recebendo e-mail. Um [validador de e-mail em massa](/bulk-email-verifier) faz essa conferência para a lista toda, e a [verificação de e-mail](/) separa esses casos dos endereços que não existem. O guia [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) explica cada código e o que fazer com ele.
