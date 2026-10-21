---
title: Relatório de não entrega (NDR)
description: O que é um relatório de não entrega, quem o envia, como ler o código e as partes dentro dele e o que fazer quando você recebe um. Com um exemplo simples.
slug: relatorio-de-nao-entrega
date: 2026-10-22
updated: 2026-10-22
keyword: relatório de não entrega
short: Um relatório de não entrega, ou NDR, é um e-mail automático que avisa que uma mensagem que você enviou não foi entregue. Ele mostra o endereço que falhou e traz um código que explica o motivo. A maioria das pessoas chama isso de mensagem de bounce.
related: mailer-daemon, hard-bounce, soft-bounce, backscatter, return-path, smtp
cta: Remova os endereços que enviariam um NDR para você
---

## O que é um relatório de não entrega?

Um relatório de não entrega, ou NDR (non-delivery report), é um e-mail automático que avisa que uma mensagem não foi entregue. Ele chega alguns segundos ou algumas horas depois do envio.

A maioria das pessoas chama isso de mensagem de bounce. O nome técnico nos padrões de e-mail é notificação de status de entrega (delivery status notification), ou DSN. Os três nomes significam a mesma coisa.

Um NDR costuma vir de um endereço como `MAILER-DAEMON@` ou `postmaster@`. São remetentes automáticos de um servidor de e-mail. Ninguém escreve essas mensagens à mão. Um programa chamado [mailer-daemon](/glossary/mailer-daemon) cria essas mensagens.

## Um exemplo simples

Veja como um NDR chega até você.

1. **Ana envia uma fatura.** Ana trabalha com contabilidade. Ela envia uma fatura por e-mail para um cliente em mark@oldfirm.example.
2. **O endereço não existe mais.** Mark saiu daquela empresa no ano passado. A caixa de entrada dele foi apagada.
3. **O servidor recusa.** O servidor de e-mail de oldfirm.example não tem caixa de entrada para Mark. Ele rejeita o e-mail.
4. **O NDR chega.** Um minuto depois, Ana recebe um e-mail com o título "Undeliverable" ou "Delivery Status Notification (Failure)".
5. **Ana lê o código.** Dentro, ela encontra `550 5.1.1`. Esse código significa que o endereço não existe.
6. **Ana corrige.** Ela pede ao cliente um novo contato e envia a fatura para ele.

O NDR não causou o problema. Ele só avisou Ana.

## O que um NDR contém

A maioria dos NDRs tem as mesmas partes, mesmo que pareçam diferentes em cada programa de e-mail.

| Parte | O que mostra |
|---|---|
| **Endereço que falhou** | O endereço que não pôde receber o seu e-mail |
| **Código de erro** | Um código curto, por exemplo `550 5.1.1`, que explica o problema |
| **Mensagem do servidor** | Uma frase do servidor de destino, por exemplo "user unknown" (usuário desconhecido) |
| **O seu e-mail original** | Muitas vezes vem anexado, para você ver o que falhou |

## Como ler o código

O primeiro dígito do código diz o tipo de problema.

| Primeiro dígito | Tipo | O que significa | O que fazer |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | A falha é permanente. O endereço pode não existir, ou o servidor bloqueou você. | Não envie de novo para o endereço até saber qual dos dois casos é. |
| **4** | [Soft bounce](/glossary/soft-bounce) | A falha é temporária. A caixa de entrada pode estar cheia ou o servidor pode estar ocupado. | Espere. O seu servidor de e-mail tenta de novo sozinho. |

Dois exemplos comuns:

- `550 5.1.1` significa que o endereço não existe. Remova o endereço da sua lista.
- `452 4.2.2` significa que a caixa de entrada está cheia. Tente de novo mais tarde.

## Quando você recebe um NDR por um e-mail que não enviou

Às vezes chega um NDR por um e-mail que você nunca escreveu. Isso se chama [backscatter](/glossary/backscatter). Um spammer colocou o seu endereço no campo do remetente, o e-mail falhou e o NDR veio para você. Normalmente a sua conta não foi hackeada. Publique registros SPF, DKIM e DMARC para o seu domínio. Assim, os servidores de destino podem recusar os e-mails falsos em vez de enviar o NDR para você.

## Por que os NDRs importam para remetentes

Cada NDR de um endereço inativo conta contra você. Provedores de e-mail como Google e Microsoft observam quantos dos seus e-mails vão para endereços que não existem. Muitos NDRs com `5.1.1` mostram a eles que a sua lista é antiga.

**Exemplo:** uma loja envia uma oferta para 5.000 contatos antigos. Se voltarem 400 NDRs, isso é 8% da lista. Muitas plataformas de envio revisam ou pausam contas com números assim. Esses números são só um exemplo.

## Como um verificador ajuda

Um [verificador de e-mail](/email-checker) pergunta ao servidor de destino sobre um endereço antes de você enviar. O servidor dá a mesma resposta que colocaria em um NDR. A diferença é que nenhum e-mail foi enviado, então nada dá bounce e a sua reputação não é afetada.
