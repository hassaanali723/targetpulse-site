---
title: Spoofing de e-mail
description: O que é spoofing de e-mail, por que é possível falsificar o remetente, como reconhecer um e-mail falso e como proteger o seu domínio com SPF, DKIM e DMARC.
slug: spoofing-de-e-mail
date: 2026-10-12
updated: 2026-10-12
keyword: o que é spoofing
short: Spoofing de e-mail é enviar um e-mail com um endereço de remetente falso, para parecer que ele veio de outra pessoa ou empresa. O golpista escreve no campo De um endereço que não é dele. Os registros SPF, DKIM e DMARC permitem que os servidores de destino detectem e bloqueiem esses e-mails.
related: dmarc, spf, dkim, dmarc-alignment, bimi, return-path
cta: Proteja o domínio e confira a lista
---

## O que é spoofing de e-mail?

Spoofing vem do inglês e quer dizer falsificação. No e-mail, spoofing é enviar uma mensagem com um remetente falso. O e-mail mostra um endereço no campo De, mas foi enviado por outra pessoa.

O objetivo quase sempre é enganar quem recebe. O golpista quer que a pessoa pague uma conta falsa, informe uma senha ou abra um arquivo.

## Um exemplo de spoofing de e-mail

A empresa do exemplo usa o domínio example.com. O diretor-geral se chama Roberto. Numa sexta-feira à tarde, Juliana, do setor financeiro, recebe este e-mail:

```
De: Roberto Lima <roberto@example.com>
Assunto: Pagamento urgente
Juliana, preciso que você pague esta fatura hoje.
Estou em reunião, não consigo atender o telefone.
```

O nome e o endereço são os do diretor. Mas Roberto não enviou esse e-mail. Um golpista escreveu roberto@example.com no campo De e enviou a mensagem do próprio servidor dele. A conta bancária da fatura é do golpista.

Se Juliana pagar, o dinheiro vai para o golpista. Esse tipo de golpe é comum porque o pedido parece vir de alguém com autoridade.

## Por que o spoofing é possível

O e-mail foi criado sem uma checagem do remetente. O [SMTP](/glossary/smtp), o conjunto de regras que os servidores usam para enviar e-mail, não confere o campo De. Quem envia pode escrever qualquer endereço ali.

Um e-mail tem, na verdade, dois endereços de remetente:

- O endereço **De**, que o leitor vê no programa de e-mail.
- O [Return-Path](/glossary/return-path), um endereço técnico para onde os bounces são enviados. O leitor normalmente não vê esse endereço.

O golpista pode colocar endereços diferentes em cada um. As checagens SPF, DKIM e DMARC foram criadas depois, para resolver esse problema.

## Como reconhecer um e-mail falso

Alguns sinais aparecem no próprio e-mail:

- **O pedido é urgente e envolve dinheiro ou senha.** Exemplo: "pague hoje", "confirme a sua senha agora".
- **O endereço de resposta é diferente.** Você clica em Responder e o campo Para mostra outro endereço. Esse endereço vem do cabeçalho Reply-To, que o golpista também pode escolher.
- **A pessoa pede para não ligar ou não confirmar por outro meio.**

Outros sinais aparecem nos detalhes técnicos. No Gmail, abra o e-mail, clique nos três pontos e escolha Mostrar original. O Gmail mostra o resultado de três checagens:

- **SPF:** o e-mail veio de um servidor autorizado pelo domínio?
- **DKIM:** o e-mail tem a assinatura digital do domínio?
- **DMARC:** pelo menos uma das duas checagens passou para o domínio do campo De?

Se aparecer FAIL em DMARC, o e-mail provavelmente não veio de quem diz ter vindo.

## Como proteger o seu domínio contra spoofing

Você não impede que alguém escreva o seu endereço no campo De. Mas você pode pedir aos servidores de destino que bloqueiem esses e-mails. São três registros no DNS do seu domínio. O DNS é o sistema público que guarda informações sobre cada domínio.

1. **[SPF](/glossary/spf):** lista os servidores autorizados a enviar e-mail pelo seu domínio.
2. **[DKIM](/glossary/dkim):** coloca uma assinatura digital em cada e-mail que você envia.
3. **[DMARC](/glossary/dmarc):** diz o que fazer com um e-mail que falha nas duas checagens.

Com DMARC em `p=reject`, o Gmail, o Outlook e outros provedores bloqueiam o e-mail falso do exemplo. Juliana nunca o recebe. Com `p=none`, o e-mail falso ainda é entregue.

## Spoofing, phishing e domínios parecidos

Esses termos aparecem juntos, mas não são a mesma coisa.

| Termo | O que é | Exemplo |
| --- | --- | --- |
| Spoofing | O e-mail usa o endereço real de outra pessoa no campo De. | roberto@example.com, enviado por um golpista |
| Phishing | Qualquer e-mail que tenta enganar alguém para roubar dinheiro, senhas ou dados. Pode usar spoofing ou não. | Um e-mail com um link para uma página falsa de login |
| Domínio parecido | O golpista registra um domínio com uma letra diferente. | roberto@exampel.com |

O DMARC protege contra o spoofing do seu domínio exato. Ele não protege contra um domínio parecido, porque exampel.com pertence ao golpista. Esse domínio pode ter SPF, DKIM e DMARC próprios.

## O que fazer se você receber um e-mail falso

1. Não clique em links e não abra anexos.
2. Não responda ao e-mail.
3. Confirme o pedido por outro meio, como um telefone que você já conhece.
4. Use o botão Denunciar spam ou Denunciar phishing do seu programa de e-mail.
5. Se for um e-mail de trabalho, avise a equipe de TI.

## Spoofing de e-mail e verificação de e-mail

A verificação não detecta spoofing. Um [verificador de e-mail](/email-checker) diz se um endereço existe e aceita e-mail. Ele não diz quem realmente enviou uma mensagem. No exemplo, roberto@example.com é um endereço real, então ele seria verificado como válido. A [verificação de e-mail](/) serve para outra coisa: com um [validador de e-mail em massa](/bulk-email-verifier), você remove da sua lista os endereços que não existem antes de enviar, e menos e-mails voltam como bounce.
