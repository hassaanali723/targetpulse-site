---
title: E-mail catch-all
description: O que é um domínio de e-mail catch-all, por que empresas configuram um, por que uma verificação comum não confirma endereços nele e o que fazer com eles.
slug: e-mail-catch-all
date: 2026-10-22
updated: 2026-10-22
keyword: e-mail catch-all
short: Um domínio de e-mail catch-all aceita e-mail enviado para qualquer endereço nele, mesmo nomes que não existem. Como o servidor diz sim para tudo, uma verificação de e-mail comum não consegue saber se uma caixa de entrada específica é real.
related: mx-record, smtp, hard-bounce, greylisting, secure-email-gateway, email-blacklist
cta: Obtenha uma resposta real sobre endereços catch-all
---

## O que é um e-mail catch-all?

Um domínio de e-mail catch-all aceita e-mail enviado para qualquer endereço nele. O endereço não precisa existir.

A maioria dos domínios rejeita e-mail enviado para um nome que eles não têm. Um domínio catch-all não rejeita. Ele aceita o e-mail e coloca a mensagem em uma caixa de entrada compartilhada, ou às vezes apaga a mensagem sem avisar ninguém.

Outros nomes para a mesma configuração são **accept-all** e **domínio catch-all**. Muitas ferramentas de verificação marcam esses endereços como "catch-all", "accept-all" ou "arriscado" (risky).

## Um exemplo simples

1. **A Acme configura um catch-all.** A Acme é uma pequena empresa com o domínio acme.example. A gerente do escritório ativa o catch-all para que nenhum e-mail de cliente se perca.
2. **Sara escreve para uma pessoa real.** Ela envia um e-mail para jon@acme.example. Jon trabalha lá. Ele recebe o e-mail.
3. **Sara digita errado.** Na vez seguinte, ela digita jonn@acme.example. Não existe ninguém com esse nome.
4. **O servidor ainda diz sim.** O e-mail não dá bounce. Ele cai na caixa compartilhada, e talvez ninguém o leia.

Sara não vê nenhum erro, então acha que os dois e-mails chegaram. Só um chegou ao Jon.

## Por que empresas usam catch-all

As empresas ativam o catch-all para não perder e-mails. Clientes cometem erros de digitação. Nomes de ex-funcionários continuam recebendo e-mail. Um catch-all guarda tudo em um só lugar.

## Por que o catch-all é um problema para a verificação de e-mail

Uma verificação de e-mail comum faz uma pergunta ao servidor: "Você aceita e-mail para este endereço?" Em um domínio catch-all, a resposta é sempre sim. Uma pessoa real e um nome inventado recebem a mesma resposta.

Por isso, uma verificação básica não consegue confirmar a caixa de entrada. Ela só consegue informar que o domínio aceita tudo.

Isso pesa mais em listas B2B. Em um teste publicado com 10.000 e-mails empresariais reais, 28% estavam em domínios catch-all. O teste foi feito pela LeadMagic, uma empresa que vende verificação de e-mail. Por isso, trate o número como um teste de fornecedor.

## O que fazer com endereços catch-all

Você tem três opções:

| Opção | O que acontece |
|---|---|
| **Remover os endereços** | Sem risco, mas você também perde contatos reais |
| **Enviar para eles** | Alguns chegam a pessoas reais, alguns se perdem ou dão bounce depois |
| **Verificar mais a fundo** | Um verificador que vai além da verificação básica separa os reais dos falsos |

## Como um verificador ajuda

O Giggal.ai faz a [verificação catch-all](/catch-all-verification) em toda checagem. Ele usa sinais extras para devolver um resultado real, entregável ou não entregável, em vez de um rótulo "arriscado". Para um guia mais longo com mais exemplos, leia [o que é um e-mail catch-all](/blog/what-is-a-catch-all-email-address).
