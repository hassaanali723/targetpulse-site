---
title: Spam score (pontuação de spam)
description: O que é spam score, como o SpamAssassin soma pontos até 5,0, o que aumenta a pontuação de spam de um e-mail e como conferir e reduzir a sua.
slug: pontuacao-de-spam
date: 2026-10-12
updated: 2026-10-12
keyword: spam score
short: O spam score é a pontuação que um filtro de spam dá a um e-mail. Quanto maior a pontuação, maior a chance de o e-mail ir para a pasta de spam. Cada problema encontrado no e-mail soma pontos.
related: spam-filter, spam-trap, deliverability, sender-reputation, email-blacklist, complaint-rate
cta: Conteúdo revisado? Agora confira a lista
---

## O que é spam score?

O spam score, ou pontuação de spam, é um número que um [filtro de spam](/glossary/spam-filter) dá a cada e-mail que chega. Um filtro de spam é um programa que decide se um e-mail vai para a caixa de entrada ou para a pasta de spam.

O filtro confere o e-mail contra uma lista de regras. Cada regra que o e-mail quebra soma pontos. Quando o total passa de um limite, o e-mail é marcado como spam.

## Um exemplo com o SpamAssassin

O SpamAssassin é um filtro de spam gratuito e de código aberto. Muitos servidores de e-mail o usam. Por padrão, ele marca um e-mail como spam quando a pontuação chega a 5,0 pontos.

Digamos que uma loja envie uma promoção com o assunto "GANHE DINHEIRO AGORA!!!". O SpamAssassin confere o e-mail e encontra três problemas. Os pontos abaixo são só um exemplo. Os valores reais mudam de regra para regra e de versão para versão.

| Problema encontrado | Pontos (exemplo) |
| --- | --- |
| O assunto está todo em letras maiúsculas | 1,5 |
| O e-mail não tem assinatura DKIM válida | 1,0 |
| O endereço IP de envio está em uma blacklist | 2,7 |
| **Total** | **5,2** |

O total é 5,2. Passa do limite de 5,0. O e-mail vai para a pasta de spam.

Se a loja corrigir o assunto, o total cai para 3,7. O e-mail fica abaixo do limite. Mas o problema do IP continua lá e pode prejudicar os próximos envios.

O Gmail e o Outlook usam os seus próprios filtros. Eles não mostram uma pontuação. Mas a ideia é a mesma: vários sinais somados decidem onde o e-mail cai.

## O que aumenta o spam score

- **Falta de autenticação.** O domínio não tem [SPF](/glossary/spf), [DKIM](/glossary/dkim) ou [DMARC](/glossary/dmarc). Esses registros provam que o e-mail é realmente seu.
- **IP em uma blacklist.** O endereço IP que envia o e-mail está em uma [blacklist de e-mail](/glossary/email-blacklist). Um endereço IP é o número que identifica um servidor na internet.
- **Palavras e formatação agressivas.** Frases como "dinheiro fácil" ou "última chance", assuntos em maiúsculas e muitos pontos de exclamação.
- **HTML quebrado.** HTML é o código que define a aparência do e-mail. Um código mal feito ou um e-mail que é só uma imagem grande parecem suspeitos.
- **Links encurtados.** Links como bit.ly escondem o destino real. Filtros e leitores desconfiam deles.

## Spam score de sites não é a mesma coisa

Você pode encontrar o termo "Spam Score" em ferramentas de SEO. O Moz tem uma métrica com esse nome. Ela mede sites, não e-mails. Ela estima o risco de um site ser penalizado nos resultados de busca. Não tem relação com a pasta de spam do seu e-mail.

## Como conferir o spam score do seu e-mail

- **mail-tester.com:** você envia o seu e-mail para um endereço que o site mostra. Ele devolve uma nota de 0 a 10 e a lista dos problemas encontrados, incluindo SPF, DKIM e blacklists.
- **Verificador de palavras de spam:** o nosso [spam word checker](/spam-word-checker) (em inglês) destaca palavras arriscadas, maiúsculas, links encurtados e tags de personalização que não foram preenchidas. Ele roda no seu navegador e não dá uma nota, porque nenhuma ferramenta sabe como uma caixa de entrada específica vai tratar o seu e-mail.

## Como reduzir a sua pontuação de spam

1. Configure SPF, DKIM e DMARC no seu domínio.
2. Confira se o seu IP e o seu domínio estão em alguma blacklist.
3. Escreva o assunto em letras normais, sem uma fila de pontos de exclamação.
4. Troque frases agressivas por frases simples e diretas.
5. Use links completos, sem encurtadores.
6. Envie um e-mail com texto de verdade, não só uma imagem.
7. Teste o e-mail no mail-tester.com antes de enviar a campanha.

Um conteúdo limpo não garante a caixa de entrada. Os provedores dão mais peso a quem envia e a como as pessoas reagem. Isso inclui a [taxa de reclamação de spam](/glossary/complaint-rate) e os bounces.

## Spam score e verificação de e-mail

A verificação não muda a pontuação do conteúdo, porque um [verificador de e-mail](/email-checker) não lê o seu texto. Ele confere se o endereço do destinatário existe. Um [validador de e-mail em massa](/bulk-email-verifier) faz isso para a lista toda e remove os endereços mortos antes que eles virem [spam traps](/glossary/spam-trap). Menos bounces e menos spam traps protegem a reputação do seu IP e do seu domínio. A [verificação de e-mail](/) cuida da lista, e o conteúdo você revisa à parte.
