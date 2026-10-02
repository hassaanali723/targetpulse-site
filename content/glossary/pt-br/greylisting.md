---
title: Greylisting
description: O que é greylisting, por que um servidor rejeita o seu primeiro e-mail e aceita o segundo, quanto dura o atraso e como isso afeta a verificação.
slug: greylisting
date: 2026-09-29
updated: 2026-09-29
keyword: greylisting
short: Greylisting é uma defesa contra spam. Um servidor de e-mail rejeita o primeiro e-mail de um remetente que ele não reconhece. Ele aceita o mesmo e-mail quando o remetente tenta de novo alguns minutos depois. Servidores de e-mail reais tentam de novo. A maioria dos softwares de spam não.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Obtenha uma resposta real nos endereços que aplicam greylisting às suas verificações
---

## O que é greylisting

Greylisting é uma defesa contra spam que funciona com um atraso. Ela está descrita na RFC 6647.

Um servidor de destino mantém um registro de todos os remetentes que já viu. O servidor olha três coisas: o endereço IP remetente, o endereço do remetente e o endereço do destinatário. Se ele nunca viu essa combinação, rejeita o e-mail com um erro temporário. Um servidor de e-mail bem configurado coloca o e-mail na fila e tenta de novo. A maioria dos softwares de spam envia uma vez e não tenta de novo.

Quando a nova tentativa chega, o servidor aceita o e-mail e guarda o remetente no seu registro. Depois disso, o e-mail do mesmo remetente é aceito na primeira tentativa.

## Como o remetente vê isso

A primeira tentativa recebe um código que começa com 4. Normalmente é `450` ou `451`, com uma mensagem como "greylisted, try again later". O seu servidor de e-mail trata isso como um [soft bounce](/glossary/soft-bounce) e tenta de novo no seu próprio cronograma.

O servidor de destino decide quanto tempo espera antes de aceitar a nova tentativa. Cerca de 15 minutos é o comum. Alguns servidores usam um atraso mais curto ou mais longo.

Normalmente você não percebe o greylisting. O e-mail chega alguns minutos depois. Se a sua ferramenta mostrar algum aviso de bounce, ele se resolve sozinho.

## Quando o greylisting importa

O greylisting não afeta uma campanha normal. Ele importa em dois casos.

**E-mail urgente.** Uma redefinição de senha ou um código de uso único que chega 15 minutos atrasado não serve para o usuário. Por isso os remetentes de e-mail transacional às vezes pedem aos domínios de destino para colocar os seus endereços IP em uma lista de permissão.

**Verificação.** Um verificador confere um endereço iniciando uma conversa SMTP e parando antes de enviar qualquer coisa. Em um servidor com greylisting, a primeira tentativa recebe uma resposta `4xx`. Um verificador que para depois de uma tentativa informa o endereço como desconhecido. O endereço pode ser válido.

## Greylisting e gateways de e-mail seguro

Muitos domínios corporativos usam um [gateway de e-mail seguro](/glossary/secure-email-gateway) como Proofpoint ou Mimecast. Esses gateways aplicam greylisting a remetentes desconhecidos por padrão. Esta é uma das razões pelas quais uma verificação básica devolve desconhecido em muitos endereços B2B.

## Como um verificador lida com isso

Um bom [verificador de endereços de e-mail](/email-checker) trata uma resposta `4xx` como "tentar de novo", não como um resultado. Ele espera, tenta de novo do mesmo endereço IP e informa a resposta que o servidor dá depois do atraso do greylisting. O Giggal.ai faz isso quando resolve domínios com gateway. É assim que ele devolve válido ou inválido onde uma verificação de uma única tentativa devolve desconhecido.
