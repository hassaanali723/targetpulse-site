---
title: Registro SPF
description: O que é um registro SPF, como ele é, como os servidores de destino o verificam, o limite de dez consultas DNS e os códigos de bounce que você recebe quando a verificação falha.
slug: registro-spf
date: 2026-09-29
updated: 2026-09-29
keyword: registro spf
short: Um registro SPF é um registro DNS no seu domínio que lista os servidores autorizados a enviar e-mail para aquele domínio. Os servidores de destino o verificam para confirmar que um e-mail que diz vir do seu domínio foi enviado por um dos seus servidores.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: A autenticação corrige um tipo de bounce. A verificação corrige o outro
---

## O que é um registro SPF

SPF significa Sender Policy Framework. Ele está definido na RFC 7208. Um registro SPF é um [registro DNS TXT](/glossary/dns-txt-record) no seu domínio. Ele lista os servidores autorizados a enviar e-mail com o seu nome de domínio.

Um registro SPF simples é assim:

`v=spf1 include:_spf.google.com -all`

Cada parte significa algo:

- `v=spf1` diz que isto é um registro SPF.
- `include:_spf.google.com` diz que qualquer servidor listado pelo Google pode enviar para este domínio.
- `-all` diz para rejeitar e-mail de qualquer outro servidor.
- `~all` é um final mais brando. Ele diz para tratar e-mail de outros servidores como suspeito, mas não rejeitar.

## Como os servidores de destino verificam o registro SPF

Quando um e-mail chega, o servidor de destino lê o domínio no [Return-Path](/glossary/return-path). O Return-Path é o endereço para onde os bounces são enviados. O servidor busca o registro SPF desse domínio. Depois ele verifica se o endereço IP que entregou o e-mail está no registro.

- **Pass.** O endereço IP está no registro. O e-mail veio de um servidor autorizado.
- **Fail.** O endereço IP não está no registro e o registro termina com `-all`. O servidor pode rejeitar o e-mail.
- **Softfail.** O endereço IP não está no registro e o registro termina com `~all`. O servidor aceita o e-mail, mas o marca como suspeito.

O Microsoft Exchange Online rejeita um e-mail que falha com `5.7.23 The message was rejected because of Sender Policy Framework violation`. O Gmail responde com `550 5.7.26` a um e-mail sem nenhuma autenticação. Os dois códigos começam com 5. A sua ferramenta de envio os registra como [hard bounces](/glossary/hard-bounce) mesmo que o endereço esteja certo.

## Quem precisa de um registro SPF

Qualquer pessoa que envia e-mail em massa precisa de um. As diretrizes para remetentes do Google exigem SPF e DKIM de remetentes de 5.000 ou mais mensagens por dia para o Gmail. Elas também exigem DMARC. A Microsoft exige os mesmos três registros de domínios que enviam mais de 5.000 e-mails por dia para Outlook.com, Hotmail e Live. A Microsoft aplica isso desde 5 de maio de 2025.

Se você envia menos, os registros continuam importando. Sem eles, o seu e-mail tem mais chance de ir para a pasta de spam.

## O limite de dez consultas DNS

A RFC 7208 limita uma verificação SPF a dez consultas DNS. Cada `include:`, `a`, `mx` e `redirect` no seu registro conta como uma consulta. As consultas dentro dos registros que você inclui também contam. Se o total passar de dez, a verificação devolve um erro permanente. A maioria dos servidores de destino trata esse erro como fail.

É assim que os registros SPF quebram com mais frequência. Uma empresa adiciona uma ferramenta de e-mail atrás da outra ao registro. Quando a décima primeira consulta é adicionada, o registro inteiro para de funcionar.

## SPF é um de três registros

- O SPF verifica qual servidor enviou o e-mail.
- O [DKIM](/glossary/dkim) verifica que o e-mail não foi alterado depois de enviado.
- O [DMARC](/glossary/dmarc) liga as duas verificações ao endereço De que o leitor vê. Ele também diz aos servidores de destino o que fazer quando as verificações falham.

Um domínio precisa dos três. O guia [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) mostra como os códigos de falha aparecem em um relatório de bounces.
