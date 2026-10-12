---
title: Registro MX
description: O que é um registro MX, como os servidores de e-mail o usam para achar o destino, o que significa a prioridade e o que indica um registro MX ausente.
slug: registro-mx
date: 2026-09-29
updated: 2026-10-12
keyword: registro mx
short: Um registro MX é uma informação pública do domínio que diz qual servidor recebe o e-mail dele. Quando você envia para nome@example.com, o seu servidor de e-mail consulta o registro MX de example.com. Assim ele descobre para qual servidor entregar a mensagem.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Verifique se um endereço pode receber e-mail
---

## O que é um registro MX?

Um registro MX diz para onde vai o e-mail enviado a um domínio. O domínio é a parte do endereço depois do @. MX significa Mail Exchanger, ou "trocador de e-mail".

Para entender, você precisa de duas palavras:

- **Servidor de e-mail:** o computador que recebe e guarda os e-mails de um domínio.
- **DNS:** o diretório público que liga nomes de domínio a servidores. Cada informação guardada no DNS se chama registro.

O registro MX é um desses registros DNS. Os registros MX de um domínio listam os servidores que aceitam e-mail para aquele domínio.

Um domínio pode ter mais de um registro MX. Cada registro MX tem um número de prioridade. Os servidores com números mais baixos são tentados primeiro. Esta é uma configuração comum para um domínio do Google Workspace:

| Prioridade | Servidor de e-mail |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Se o servidor de prioridade 1 não responder, o servidor que está enviando tenta o próximo.

## Um exemplo simples

Rafael envia um e-mail para carla@example.com. Veja o que acontece com o registro MX nesse caminho.

1. **Rafael clica em Enviar.** O e-mail sai do servidor de e-mail do Rafael.
2. **O servidor lê o domínio.** Ele vê que o domínio de destino é example.com.
3. **O servidor consulta o DNS.** Ele pergunta qual é o registro MX de example.com.
4. **O DNS responde.** O registro MX aponta para um servidor, por exemplo mail.example.com.
5. **O servidor do Rafael se conecta a mail.example.com.** Ele entrega o e-mail.
6. **Carla recebe o e-mail.** O servidor dela guarda a mensagem na caixa de entrada.

Se example.com não tivesse nenhum registro MX, o passo 4 falharia. O e-mail do Rafael não teria para onde ir.

## Como o e-mail usa os registros MX

Quando você envia para `nome@example.com`, o seu servidor de e-mail faz três coisas:

1. Ele consulta os registros MX de `example.com`.
2. Ele se conecta ao servidor com o número de prioridade mais baixo.
3. Ele entrega o e-mail por SMTP. SMTP é o protocolo, ou seja, o conjunto de regras, que os servidores usam para trocar e-mails.

A RFC 5321, o padrão de e-mail, descreve este processo. Ela também cobre domínios sem registro MX. Se o domínio tiver um registro A normal, os servidores de e-mail tratam esse registro A como se fosse um registro MX. Um registro A é o registro DNS que liga um nome ao endereço IP de um servidor.

## O que um registro MX diz sobre um endereço

O registro MX é a primeira verificação real na verificação de e-mail. Antes dela vem só a verificação de sintaxe, que confere se o endereço está escrito no formato certo.

| O que a consulta encontra | O que isso significa |
|---|---|
| **Nenhum registro MX e nenhum registro A** | O domínio não pode receber e-mail. Qualquer endereço nesse domínio é inválido. |
| **Um registro MX** | O domínio pode receber e-mail. Isso não diz se a caixa de entrada específica existe. |
| **Um registro MX que aponta para um gateway conhecido** | O domínio usa um [gateway de e-mail seguro](/glossary/secure-email-gateway), como Proofpoint, Mimecast ou Barracuda. |

**Exemplo de domínio sem registro MX:** Bruno digita bruno@example.cmo no seu formulário, com "cmo" no lugar de "com". Esse domínio não existe, então não tem registro MX nem registro A. Um erro de digitação no domínio costuma falhar nesta etapa.

**Exemplo de registro MX presente:** o domínio example.com tem um registro MX. Mesmo assim, o endereço errado-123@example.com pode não existir. Para saber, é preciso a próxima etapa: uma conversa SMTP com o servidor.

Em domínios com gateway, a verificação da caixa de entrada se comporta de outra forma. Um gateway de e-mail seguro é um servidor que filtra o e-mail antes de ele chegar à empresa.

## Por que isso importa para remetentes

Qualquer pessoa pode ler o registro MX de um domínio com uma consulta DNS. Quando uma empresa troca de provedor de e-mail ou fecha, os seus registros MX mudam ou desaparecem. Os endereços param de funcionar. Ninguém avisa você.

**Exemplo:** uma empresa fecha. O domínio dela expira e o registro MX some. Você ainda tem 40 contatos dessa empresa na lista. No próximo envio, os 40 e-mails voltam como hard bounce. Esta é uma causa comum de hard bounces em listas antigas.

## Como um verificador lida com isso

Um [validador de e-mail](/email-checker) consulta o registro MX primeiro. Se não houver registro MX, o endereço é marcado como inválido e nenhuma outra verificação é feita. Se houver registro MX, o verificador se conecta a esse servidor e pergunta se a caixa de entrada existe. A consulta do registro MX também diz ao verificador que tipo de servidor é aquele. Isso importa em [domínios catch-all](/glossary/catch-all-email) e em gateways. Um [validador de e-mail em massa](/bulk-email-verifier) faz essa consulta para cada domínio da sua lista, e a [verificação de e-mail](/) remove os endereços que não podem receber e-mail antes do envio.
