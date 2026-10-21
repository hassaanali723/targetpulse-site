---
title: Return-Path
description: O que é o endereço Return-Path, como ele difere do endereço De, para onde vão as mensagens de bounce e por que o SPF e o DMARC o verificam. Com um exemplo simples.
slug: return-path
date: 2026-10-22
updated: 2026-10-22
keyword: return path
short: O Return-Path é o endereço para onde vão as mensagens de bounce. O servidor que envia o e-mail define esse endereço, e ele costuma ser diferente do endereço De que você vê na caixa de entrada. O SPF verifica o domínio do Return-Path.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: Remova os endereços inativos antes que deem bounce
---

## O que é o Return-Path?

O Return-Path é o endereço para onde vão as mensagens de bounce. Uma mensagem de bounce é o aviso automático que um servidor envia quando um e-mail não pode ser entregue.

Todo e-mail tem dois endereços de remetente. O primeiro é o endereço **De** (From). É o nome e o endereço que o leitor vê na caixa de entrada. O segundo é o **Return-Path**. O leitor não vê esse endereço. Os servidores de e-mail usam ele.

Pense em uma carta de papel. A carta dentro do envelope tem o seu nome no topo. Esse é o endereço De. O envelope tem um endereço de devolução no canto. Os Correios só usam esse endereço quando não conseguem entregar a carta. Esse é o Return-Path.

O Return-Path também é chamado de remetente do envelope (envelope sender) ou endereço de bounce. O servidor que envia passa esse endereço ao servidor de destino no início da entrega. O servidor de destino então escreve o endereço em uma linha no topo do e-mail que começa com `Return-Path:`.

## Um exemplo simples

Veja como o Return-Path funciona quando um e-mail dá bounce.

1. **Tom envia uma newsletter.** Tom tem uma padaria. Ele envia uma newsletter mensal por um provedor de e-mail. Um provedor é uma empresa que envia e-mails em massa por você.
2. **Dois endereços são definidos.** O endereço De é tom@bakery.example. O provedor define o Return-Path com o próprio endereço de bounce, por exemplo bounces@mail.provider.example.
3. **Uma cliente saiu.** Uma cliente da lista mudou de emprego. O endereço antigo dela não existe mais.
4. **O bounce vai para o Return-Path.** O servidor de destino envia o aviso de bounce para bounces@mail.provider.example, não para Tom.
5. **O provedor age.** O provedor lê o bounce e para de enviar para esse endereço. Tom nunca vê o aviso.

Por isso os bounces de newsletters muitas vezes não chegam à sua própria caixa de entrada. Eles vão para o Return-Path, e o seu provedor cuida deles.

## Return-Path vs endereço De

| | Endereço De | Return-Path |
|---|---|---|
| **Quem vê** | O leitor, na caixa de entrada | Os servidores de e-mail |
| **Quem define** | Você, ou o seu programa de e-mail | O servidor que envia |
| **Para que serve** | Mostrar quem enviou o e-mail | Receber as mensagens de bounce |
| **Verificado pelo SPF** | Não | Sim |

Os dois endereços podem ser iguais. Quando você envia um e-mail normal pelo Gmail ou pelo Outlook, eles costumam ser iguais. Quando você envia por um provedor, eles costumam ser diferentes.

## Como encontrar o Return-Path de um e-mail

Abra os cabeçalhos completos do e-mail. No Gmail, abra o e-mail, clique nos três pontos e escolha **Mostrar original**. No Outlook, abra as propriedades da mensagem. Procure perto do topo uma linha como esta:

`Return-Path: <bounces@mail.provider.example>`

## Por que isso importa para o SPF e o DMARC

O [SPF](/glossary/spf) é uma regra no seu domínio que lista os servidores autorizados a enviar o seu e-mail. O SPF verifica o domínio do Return-Path. Ele não verifica o endereço De.

O [DMARC](/glossary/dmarc) acrescenta um segundo teste. Ele pergunta se o domínio que passou no SPF é o mesmo domínio do endereço De. Se o seu provedor usa o próprio domínio no Return-Path, o SPF pode passar para o provedor sem corresponder ao domínio do seu endereço De.

Muitos provedores permitem definir um Return-Path no seu próprio domínio. Isso costuma se chamar domínio de bounce personalizado (custom bounce domain). Com ele, o SPF passa para o seu próprio domínio, e o DMARC pode contar esse resultado.

**Exemplo:** o endereço De de Tom está em bakery.example. O provedor dele permite definir o Return-Path como bounces.bakery.example. Agora o domínio que passa no SPF corresponde ao domínio do endereço De.

## Como um verificador ajuda

Todo bounce da sua lista vai para o Return-Path. O seu provedor conta esses bounces. Quando voltam bounces demais, muitos provedores pausam a conta ou pedem que você limpe a lista.

Um [verificador de e-mail](/email-checker) pergunta ao servidor de destino se um endereço existe antes de você enviar qualquer coisa. Os endereços inativos são removidos primeiro, então muito menos bounces chegam ao Return-Path.
