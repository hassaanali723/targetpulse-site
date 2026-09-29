---
title: Hard bounce
description: O que é um hard bounce, quais códigos significam hard bounce, os dois tipos de hard bounce e o que fazer com cada um.
slug: hard-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: o que e hard bounce
short: Um hard bounce é um e-mail que o servidor de destino rejeitou de forma permanente. O endereço não existe, o domínio não existe ou o servidor bloqueou o seu e-mail. Se você enviar o mesmo e-mail de novo, ele falha de novo.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Encontre os endereços que dariam hard bounce antes de enviar
---

## O que é um hard bounce

Um hard bounce é uma falha de entrega permanente. O servidor de destino rejeitou o seu e-mail e vai rejeitar de novo se você reenviar.

O padrão de e-mail RFC 5321 chama isso de resposta negativa permanente. O código na mensagem de bounce começa com 5. Exemplo: `550 5.1.1`. Um código que começa com 4 é um [soft bounce](/glossary/soft-bounce). Um soft bounce é temporário.

## Os dois tipos de hard bounce

Os dois tipos aparecem como "hard bounce" no relatório da campanha. Eles têm causas diferentes e soluções diferentes.

**Tipo 1: o endereço está errado.** A caixa de entrada não existe, o domínio não existe ou o endereço tem um erro de digitação. O Gmail responde com `550 5.1.1 The email account that you tried to reach does not exist`. A Microsoft responde com `5.1.1 Bad destination mailbox address`. Um endereço que foi fechado quando um funcionário saiu da empresa também entra neste grupo.

**Tipo 2: o seu e-mail está bloqueado.** O endereço é real, mas o servidor não aceita e-mail seu. Esses códigos começam com `5.7`. O `550 5.7.26` do Gmail significa que o seu domínio não está autenticado. O `5.7.23` da Microsoft significa que o seu e-mail não passou na verificação SPF. A sua ferramenta de envio conta esses códigos como hard bounces porque eles começam com 5. Mas o endereço está certo. O problema é a configuração do seu e-mail.

## Por que os hard bounces importam

Os provedores de e-mail contam quantas vezes você envia para endereços que não existem. Muitos hard bounces mostram a eles que a sua lista não foi verificada. O Amazon SES publica os seus limites. Ele coloca uma conta em revisão quando a taxa de bounce chega a 5 por cento. Ele pode pausar a conta em 10 por cento. Ele recomenda ficar abaixo de 2 por cento.

## O que fazer com um hard bounce

Se o código for `5.1.1`, `5.1.2` ou outro erro de endereço, remova o endereço da sua lista agora. Não envie mais para ele. O Mailchimp remove esses endereços do seu público automaticamente. A Amazon diz aos remetentes para removê-los "immediately", ou seja, imediatamente.

Se o código começar com `5.7`, mantenha o endereço. Corrija os seus registros SPF, DKIM e DMARC ou a sua reputação de remetente. Depois envie de novo para o mesmo endereço.

A tabela completa de códigos e a ação para cada um está no guia [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Como um verificador lida com isso

Um verificador faz a mesma pergunta ao servidor de destino, mas antes de você enviar. Um [verificador de endereços de e-mail](/email-checker) se conecta ao servidor de e-mail e pergunta se ele aceita e-mail para aquele endereço exato. Se o servidor responder `550 5.1.1`, o verificador marca o endereço como inválido. Você o remove antes da campanha. Nenhum e-mail foi enviado, então a sua reputação não muda.
