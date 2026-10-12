---
title: Reputação do domínio
description: O que é a reputação do domínio no e-mail, a diferença para a reputação de IP, o que prejudica a reputação e como conferir e proteger a sua.
slug: reputacao-do-dominio
date: 2026-10-12
updated: 2026-10-12
keyword: domain reputation
short: A reputação do domínio é o quanto os provedores de caixa de entrada confiam no domínio que envia os seus e-mails, a parte do endereço depois do @. Ela é formada pelo histórico dos seus envios. Ela acompanha você mesmo quando você troca de serviço de envio.
related: ip-reputation, sender-reputation, postmaster-tools, dmarc, bounce-rate, email-warmup
cta: Proteja o seu domínio com uma lista verificada
---

## O que é a reputação do domínio?

O domínio é a parte do endereço de e-mail depois do @. Em contato@lojaverde.com.br, o domínio é lojaverde.com.br.

A reputação do domínio, ou domain reputation, é a confiança que provedores como Gmail, Outlook e Yahoo têm nesse domínio. Eles guardam o histórico de cada domínio que envia e-mail para os seus usuários. Esse histórico inclui quantos e-mails voltaram, quantas pessoas reclamaram e se os e-mails foram autenticados.

Com uma reputação boa, os seus e-mails chegam à caixa de entrada. Com uma ruim, eles vão para o spam ou são bloqueados.

## Um exemplo: a reputação acompanha o domínio

A Loja Verde envia newsletters há três anos pelo Mailchimp, com o domínio lojaverde.com.br. Os clientes abrem os e-mails e quase ninguém reclama. A reputação do domínio é boa.

Um dia, a loja decide trocar o Mailchimp pelo Brevo. Veja o que muda e o que não muda:

1. A loja cria a conta no Brevo e configura o domínio lojaverde.com.br.
2. Os e-mails agora saem dos servidores do Brevo. O endereço IP de envio é outro. Um endereço IP é o número que identifica um servidor na internet.
3. A reputação do IP antigo fica no Mailchimp.
4. O domínio continua o mesmo. O Gmail reconhece lojaverde.com.br e o histórico de três anos.
5. Os e-mails da loja continuam chegando à caixa de entrada.

O contrário também vale. Se um domínio tem reputação ruim, trocar de serviço de envio não resolve o problema.

## Reputação do domínio e reputação de IP

| | Reputação do domínio | Reputação de IP |
| --- | --- | --- |
| Está ligada a | O seu domínio, depois do @ | O servidor que envia |
| Quando você troca de ESP | Continua com você | Fica no ESP antigo |
| Quem controla | Você | O ESP, se o IP for compartilhado |
| Pode ser compartilhada | Não, o domínio é só seu | Sim, em um IP compartilhado |

Os provedores olham as duas. Veja mais em [reputação de IP](/glossary/ip-reputation).

## O que prejudica a reputação do domínio

- **Bounces.** Muitos e-mails para endereços que não existem mostram que a lista não foi cuidada. Isso faz a [taxa de bounce](/glossary/bounce-rate) subir.
- **Reclamações de spam.** Cada vez que alguém clica em Denunciar spam, o provedor registra contra o seu domínio.
- **Spam traps.** Um [spam trap](/glossary/spam-trap) é um endereço que existe só para pegar quem envia para listas ruins.
- **Falta de autenticação.** Sem [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc), o provedor não consegue ter certeza de que o e-mail é seu. O Google exige os três de quem envia 5.000 ou mais e-mails por dia para o Gmail.

## Como conferir a reputação do domínio

O Gmail não mostra a reputação do seu domínio diretamente na caixa de entrada. Mas o Google oferece uma ferramenta gratuita para isso, o [Google Postmaster Tools](/glossary/postmaster-tools).

Você adiciona o seu domínio e prova que é o dono com um registro DNS. O DNS é o sistema público que guarda informações sobre cada domínio. Depois disso, a ferramenta mostra dados sobre os e-mails que o seu domínio envia ao Gmail. Entre eles estão a taxa de spam e os resultados de autenticação. Os dados só aparecem quando você envia um volume suficiente para o Gmail.

Outros provedores não têm uma ferramenta tão direta. Um sinal prático é acompanhar as taxas de abertura e de bounce por provedor na sua ferramenta de envio.

## Como proteger a reputação do domínio

1. **Autentique o domínio.** Configure SPF, DKIM e DMARC.
2. **Verifique a lista.** Remova os endereços que não existem antes de enviar.
3. **Remova os hard bounces.** Não envie de novo para um endereço que deu hard bounce.
4. **Separe o cold email.** Cold email é o e-mail enviado para pessoas que não pediram para recebê-lo. Envie esse tipo de e-mail por outro domínio ou subdomínio, como contato-lojaverde.com.br ou vendas.lojaverde.com.br. Se algo der errado, o domínio principal fica protegido.
5. **Aqueça domínios novos.** Um domínio novo não tem histórico. Aumente o volume aos poucos, com um [aquecimento de e-mail](/glossary/email-warmup).
6. **Facilite o descadastro.** Se a pessoa não encontra o link de descadastro, ela pode clicar em Denunciar spam.

## Reputação do domínio e verificação de e-mail

Os bounces ficam registrados contra o seu domínio, e a verificação reduz os bounces. Um [validador de e-mail](/email-checker) confere se um endereço existe antes de você enviar. Um [validador de e-mail em massa](/bulk-email-verifier) faz isso para a lista inteira e separa os endereços inválidos. A [verificação de e-mail](/) não resolve reclamações nem autenticação, mas remove da lista os endereços que voltariam como bounce.
