---
title: Entregabilidade de e-mail
description: O que é entregabilidade de e-mail, a diferença entre entrega e entregabilidade, o que afeta a sua taxa de caixa de entrada e como melhorá-la.
slug: entregabilidade-de-e-mail
date: 2026-10-12
updated: 2026-10-12
keyword: entregabilidade
short: Entregabilidade de e-mail é a capacidade dos seus e-mails de chegar à caixa de entrada. Um e-mail que vai para a pasta de spam foi entregue, mas teve uma entregabilidade ruim. Ela depende da autenticação do seu domínio, da sua reputação de remetente e da qualidade da sua lista.
related: inbox-placement, sender-reputation, bounce-rate, spam-filter, email-warmup, postmaster-tools
cta: Melhore a entregabilidade começando pela lista
---

## O que é entregabilidade de e-mail?

Entregabilidade de e-mail é a capacidade dos seus e-mails de chegar à caixa de entrada das pessoas. Não basta o e-mail ser aceito pelo servidor de destino. Ele precisa aparecer na caixa de entrada, e não na pasta de spam.

Um e-mail enviado pode ter três destinos:

- **Caixa de entrada.** A pessoa vê o e-mail. Esse é o objetivo.
- **Pasta de spam.** O e-mail chegou, mas a pessoa provavelmente não vai vê-lo.
- **Bloqueado ou devolvido.** O servidor de destino recusou o e-mail. Isso se chama [bounce](/glossary/email-bounce).

## Entrega e entregabilidade: qual a diferença

As duas palavras parecem iguais, mas medem coisas diferentes.

- **Entrega** mede quantos e-mails o servidor de destino aceitou.
- **Entregabilidade** mede quantos dos e-mails aceitos chegaram à caixa de entrada.

Veja um exemplo com números ilustrativos. Digamos que você envie 1.000 e-mails.

| Etapa | E-mails | O que aconteceu |
| --- | --- | --- |
| Enviados | 1.000 | Todos saíram da sua ferramenta de envio. |
| Devolvidos | 40 | Os endereços não existiam ou o servidor recusou. |
| Entregues | 960 | O servidor de destino aceitou. |
| Caixa de entrada | 800 | A pessoa vê o e-mail. |
| Pasta de spam | 160 | O e-mail foi aceito, mas o filtro o separou. |

A sua ferramenta de envio mostra uma taxa de entrega de 96 por cento. Mas só 800 pessoas viram o e-mail na caixa de entrada. A entregabilidade é o que decide esse número. A medida de quantos e-mails chegam à caixa de entrada também se chama [inbox placement](/glossary/inbox-placement).

## O que afeta a entregabilidade

Os provedores de caixa de entrada, como Gmail e Outlook, olham vários sinais antes de decidir onde colocar um e-mail.

- **Autenticação.** O seu domínio tem [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc)? Esses registros provam que o e-mail é realmente seu. O Google exige os três de quem envia 5.000 ou mais e-mails por dia para o Gmail.
- **Reputação do remetente.** A [reputação do remetente](/glossary/sender-reputation) é a confiança que os provedores têm no seu domínio e no endereço IP que envia. Um endereço IP é o número que identifica um servidor na internet. Ela é construída com o histórico dos seus envios.
- **Bounces.** Muitos e-mails para endereços que não existem mostram que a sua lista não foi cuidada. Isso faz a [taxa de bounce](/glossary/bounce-rate) subir.
- **Reclamações de spam.** Cada vez que alguém clica em Denunciar spam, o provedor registra. As diretrizes do Google pedem uma taxa de spam abaixo de 0,3 por cento no Google Postmaster Tools e recomendam ficar abaixo de 0,1 por cento.
- **Qualidade da lista.** Listas compradas ou antigas têm endereços mortos e [spam traps](/glossary/spam-trap).
- **Conteúdo.** Links encurtados, assuntos todos em maiúsculas e frases agressivas de venda podem fazer um [filtro de spam](/glossary/spam-filter) desconfiar.

## Como medir a entregabilidade

A sua ferramenta de envio mostra a entrega, mas não mostra onde o e-mail caiu. Há duas formas comuns de descobrir.

- **Teste com lista semente.** Você envia o e-mail para um grupo de endereços de teste em vários provedores. Depois confere em cada um se o e-mail chegou à caixa de entrada ou ao spam. Esse grupo se chama [seed list](/glossary/seed-list).
- **Google Postmaster Tools.** É uma ferramenta gratuita do Google para quem envia e-mail ao Gmail. Ela mostra dados sobre a sua taxa de spam e a autenticação dos seus e-mails. Veja [Google Postmaster Tools](/glossary/postmaster-tools).

## Como melhorar a entregabilidade

1. Configure SPF, DKIM e DMARC no seu domínio.
2. Verifique a lista antes de enviar e remova os endereços que não existem.
3. Remova da lista todo endereço que deu hard bounce.
4. Envie só para pessoas que pediram para receber os seus e-mails.
5. Coloque um link de descadastro fácil de encontrar em cada e-mail.
6. Aqueça um domínio novo aos poucos, com um [aquecimento de e-mail](/glossary/email-warmup).
7. Pare de enviar para quem não abre os seus e-mails há muitos meses.
8. Acompanhe a sua taxa de spam no Google Postmaster Tools.

## Entregabilidade de e-mail e verificação de e-mail

A verificação atua em um dos sinais da entregabilidade: os bounces. Um [verificador de e-mail](/email-checker) confere se um endereço existe antes de você enviar. Um [validador de e-mail em massa](/bulk-email-verifier) faz isso para a lista inteira e separa os endereços inválidos. Com menos bounces, a sua reputação de remetente fica protegida. A [verificação de e-mail](/) não resolve a autenticação nem o conteúdo, mas remove da lista os endereços que nunca receberiam o seu e-mail.
