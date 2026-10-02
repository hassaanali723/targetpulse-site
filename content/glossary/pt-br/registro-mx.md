---
title: Registro MX
description: O que é um registro MX, como os servidores de e-mail o usam para achar o destino, o que significa a prioridade e o que indica um registro MX ausente.
slug: registro-mx
date: 2026-09-29
updated: 2026-09-29
keyword: registro mx
short: Um registro MX é um registro DNS que diz qual servidor recebe e-mail para um domínio. Quando você envia para nome@exemplo.com, o seu servidor de e-mail consulta o registro MX de exemplo.com para descobrir para qual servidor entregar.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Verifique se um endereço pode receber e-mail
---

## O que é um registro MX

MX significa Mail Exchanger. Um registro MX é um tipo de registro DNS. O DNS é o diretório público que liga nomes de domínio a servidores. Os registros MX de um domínio listam os servidores que aceitam e-mail recebido para aquele domínio.

Um domínio pode ter mais de um registro MX. Cada registro tem um número de prioridade. Os servidores com números mais baixos são tentados primeiro. Esta é uma configuração comum para um domínio do Google Workspace:

| Prioridade | Servidor de e-mail |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Se o servidor de prioridade 1 não responder, o servidor remetente tenta o próximo.

## Como o e-mail usa os registros MX

Quando você envia para `nome@exemplo.com`, o seu servidor de e-mail faz três coisas:

- Ele consulta os registros MX de `exemplo.com`.
- Ele se conecta ao servidor com o número de prioridade mais baixo.
- Ele entrega o e-mail por SMTP.

A RFC 5321, o padrão de e-mail, descreve este processo. Ela também cobre domínios sem registro MX. Se o domínio tiver um registro A normal, os servidores de e-mail tratam esse registro como se fosse um registro MX.

## O que um registro MX diz sobre um endereço

O registro MX é a primeira verificação real na verificação de e-mail. A verificação de sintaxe vem antes.

- **Sem registro MX e sem registro A.** O domínio não pode receber e-mail. Qualquer endereço nesse domínio é inválido. Um erro de digitação como `gmial.com` costuma falhar nesta etapa.
- **Registro MX presente.** O domínio pode receber e-mail. Isso não diz nada sobre se a caixa de entrada específica existe. Para isso é preciso a próxima etapa: uma conversa SMTP com o servidor.
- **Registro MX apontando para um gateway conhecido.** Se o servidor de e-mail for Proofpoint, Mimecast ou Barracuda, o domínio usa um [gateway de e-mail seguro](/glossary/secure-email-gateway). A verificação da caixa de entrada se comporta de outra forma nesses domínios.

## Por que isso importa para remetentes

Qualquer pessoa pode ler o registro MX de um domínio com uma consulta DNS. Quando uma empresa troca de provedor de e-mail ou fecha, os seus registros MX mudam ou desaparecem. Os endereços param de funcionar. Ninguém avisa você. Esta é uma causa comum de hard bounces em listas antigas.

## Como um verificador lida com isso

Um [verificador de endereços de e-mail](/email-checker) consulta o registro MX primeiro. Se não houver registro MX, o endereço é marcado como inválido e nenhuma outra verificação é feita. Se houver registro MX, o verificador se conecta a esse servidor e pergunta se a caixa de entrada existe. A consulta MX também diz ao verificador que tipo de servidor é aquele. Isso importa em [domínios catch-all](/glossary/catch-all-email) e em gateways.
