---
title: Hard bounce
description: O que é um hard bounce, quais códigos significam hard bounce, os dois tipos de hard bounce e o que fazer com cada um.
slug: hard-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: o que e hard bounce
short: Saber o que é hard bounce é simples, porque é um e-mail que o servidor de destino recusou de forma permanente. O endereço não existe, o domínio não existe ou o servidor bloqueou o seu e-mail. Se você enviar o mesmo e-mail de novo, ele falha de novo.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Encontre os endereços que dariam hard bounce antes de enviar
---

## O que é um hard bounce?

Um hard bounce é um e-mail que não pode ser entregue, e nunca vai poder. O servidor de destino recusou a mensagem. Se você enviar de novo, ele recusa de novo.

Alguns termos ajudam a entender. Bounce é o nome de um e-mail que volta para você sem ser entregue. O servidor de destino é o computador que recebe e-mail para o endereço que você escreveu. Quando ele recusa um e-mail, ele envia de volta uma mensagem com um código. Esse código diz o motivo da recusa.

O padrão de e-mail RFC 5321 chama o hard bounce de resposta negativa permanente. O código de um hard bounce começa com 5. Exemplo: `550 5.1.1`. Um código que começa com 4 é um [soft bounce](/glossary/soft-bounce). Um soft bounce é temporário.

## Um exemplo simples

Veja um hard bounce acontecendo, passo a passo.

1. **Pedro trabalha em uma empresa.** O endereço dele é pedro@empresa.example.
2. **Pedro sai da empresa.** A equipe de TI apaga a caixa de entrada dele.
3. **Uma loja ainda tem o endereço.** Pedro se cadastrou na newsletter da loja dois anos atrás.
4. **A loja envia uma promoção.** O e-mail chega ao servidor da empresa.
5. **O servidor recusa.** Ele responde com o código `550 5.1.1`. Isso significa que a caixa de entrada não existe.
6. **A loja recebe o aviso.** A ferramenta de envio da loja marca o endereço como hard bounce.

Se a loja enviar de novo na semana seguinte, o resultado é o mesmo. A caixa de entrada não volta a existir.

## Os dois tipos de hard bounce

Os dois tipos aparecem como "hard bounce" no relatório da campanha. Mas eles têm causas diferentes e soluções diferentes.

### Tipo 1: o endereço está errado

A caixa de entrada não existe, o domínio não existe ou o endereço tem um erro de digitação. O domínio é a parte do endereço depois do @.

- O Gmail responde com `550 5.1.1 The email account that you tried to reach does not exist`. Ou seja, a conta de e-mail não existe.
- A Microsoft responde com `5.1.1 Bad destination mailbox address`. Ou seja, o endereço da caixa de destino está errado.

Um endereço fechado quando um funcionário saiu da empresa também entra neste grupo. É o caso do Pedro no exemplo acima.

**Exemplo:** Ana digita ana@example.cmo no seu formulário, com "cmo" no lugar de "com". Esse domínio não recebe e-mail. Todo envio para ele vira um hard bounce.

### Tipo 2: o seu e-mail está bloqueado

O endereço é real, mas o servidor não aceita e-mail seu. Esses códigos começam com `5.7`.

- O código `550 5.7.26` do Gmail significa que o seu domínio não está autenticado. Autenticação é o conjunto de registros que prova que o e-mail saiu mesmo do seu domínio.
- O código `5.7.23` da Microsoft significa que o seu e-mail não passou na verificação SPF. O SPF é um desses registros de autenticação.

A sua ferramenta de envio conta esses códigos como hard bounces, porque eles começam com 5. Mas o endereço está certo. O problema está na configuração do seu e-mail.

**Exemplo:** uma empresa troca de ferramenta de envio e esquece de atualizar o SPF. No dia seguinte, centenas de e-mails voltam com `5.7.23`. Os endereços estão todos certos. Basta corrigir o registro.

## Por que os hard bounces importam

Os provedores de e-mail contam quantas vezes você envia para endereços que não existem. Muitos hard bounces mostram a eles que a sua lista não foi verificada. Assim, mais e-mails seus podem ir para a pasta de spam.

O Amazon SES, o serviço de envio de e-mail da Amazon, publica os seus limites:

| Taxa de bounce | O que o Amazon SES faz |
|---|---|
| Abaixo de 2 por cento | É o nível recomendado |
| 5 por cento | Coloca a conta em revisão |
| 10 por cento | Pode pausar a conta |

A taxa de bounce é a parte dos seus e-mails que voltou. Exemplo: 50 bounces em 1.000 envios são 5 por cento.

## O que fazer com um hard bounce

A ação certa depende do código.

1. **Se o código for `5.1.1`, `5.1.2` ou outro erro de endereço, remova o endereço da lista agora.** Não envie mais para ele. O Mailchimp remove esses endereços do seu público automaticamente. A Amazon diz aos remetentes para removê-los "immediately", ou seja, imediatamente.
2. **Se o código começar com `5.7`, mantenha o endereço.** Corrija os seus registros SPF, DKIM e DMARC ou a sua reputação de remetente. Depois envie de novo para o mesmo endereço.

A tabela completa de códigos e a ação para cada um está no guia [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Como um verificador lida com isso

Um verificador faz a mesma pergunta ao servidor de destino, mas antes de você enviar. Um [validador de e-mail](/email-checker) se conecta ao servidor e pergunta se ele aceita e-mail para aquele endereço exato. Se o servidor responder `550 5.1.1`, o verificador marca o endereço como inválido. Você remove o endereço antes da campanha, e nenhum e-mail foi enviado, então a sua reputação não muda. Para conferir uma lista inteira, use um [validador de e-mail em massa](/bulk-email-verifier). A [verificação de e-mail](/) não corrige um bloqueio `5.7`, porque esse problema está na sua configuração, não no endereço.
