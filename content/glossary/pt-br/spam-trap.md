---
title: Spam trap
description: O que é uma spam trap, os três tipos e como cada um entra em uma lista, o que acontece quando você envia para uma e como mantê-las fora da sua lista.
slug: spam-trap
date: 2026-09-29
updated: 2026-09-29
keyword: spam trap
short: Uma spam trap é um endereço de e-mail que existe só para detectar remetentes. Ninguém se cadastra com ele. Os provedores de e-mail e as organizações antispam o monitoram. Enviar para uma spam trap significa que a sua lista foi comprada, extraída ou nunca foi limpa.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Remova os endereços mortos antes que eles virem spam traps
---

## O que é uma spam trap

Uma spam trap é um endereço de e-mail que existe só para detectar remetentes com listas ruins. Ninguém usa esse endereço. Ninguém se cadastrou com ele. Quando um e-mail chega a uma spam trap, a organização que a administra sabe uma coisa com certeza. O remetente não pegou aquele endereço de um formulário de cadastro.

A documentação da Amazon para o seu serviço de e-mail diz que as spam traps são administradas por provedores de internet, provedores de e-mail e organizações antispam. Os endereços são secretos. Você descobre que enviou para uma depois. O seu e-mail começa a ir para o spam, ou o seu endereço IP entra em uma [lista negra](/glossary/email-blacklist).

## Os três tipos de spam trap

**Traps puras.** Endereços criados só como armadilhas. Eles são colocados em páginas da web onde ferramentas de extração os encontram. Nunca são usados para mais nada. Só listas extraídas ou compradas contêm esses endereços.

**Traps recicladas.** Endereços reais que foram abandonados. O provedor fechou o endereço e deixou o e-mail dar bounce por um tempo. Depois o provedor reabriu o endereço como armadilha. A Amazon descreve esses endereços como "that were once valid, but have been unused (and bouncing) for an extended period of time", ou seja, que já foram válidos, mas ficaram sem uso e dando bounce por muito tempo. Listas que nunca são limpas acumulam esses endereços com o tempo.

**Traps de erro de digitação.** Endereços em domínios que parecem um domínio real com um erro de digitação. Exemplo: uma versão escrita errada do domínio de um grande provedor. Elas detectam remetentes que não verificam o que as pessoas digitaram no formulário de cadastro.

## O que acontece quando você envia para uma spam trap

Você não recebe nenhum bounce. A armadilha aceita o e-mail. A organização que administra a armadilha registra o seu endereço IP e o seu domínio. O que acontece depois depende da organização:

- O seu endereço IP pode entrar em uma lista de bloqueio.
- A sua reputação naquele provedor pode cair.
- O seu serviço de envio pode colocar a sua conta em revisão.

A Amazon não diz quantos acertos em spam traps geram ação. Ela diz: "even a small number of spamtrap hits can have a very negative effect", ou seja, mesmo um número pequeno de acertos pode ter um efeito muito negativo.

## Como manter as spam traps fora da sua lista

Ninguém pode dar a você uma lista de endereços de spam trap. Você protege a sua lista com estes passos:

- Não compre, alugue ou extraia endereços. As traps puras só chegam por esse caminho.
- Remova todo endereço que dá hard bounce. Faça isso imediatamente. A Amazon diz para removê-los "long before they are converted to spamtraps", ou seja, muito antes de eles serem convertidos em armadilhas.
- Pare de enviar para pessoas que não abrem nem clicam há meses. As traps recicladas estão entre elas.
- Verifique os endereços no cadastro para pegar erros de digitação enquanto a pessoa ainda está na página.

## O que um verificador pode e não pode fazer

Um [verificador de endereços de e-mail](/email-checker) não consegue detectar uma spam trap. Uma trap reciclada é uma caixa de entrada que existe e aceita e-mail, então ela é verificada como válida.

A verificação ajuda de duas formas. Ela remove os endereços mortos antes de eles serem reciclados como armadilhas. Ela detecta domínios com erro de digitação antes do primeiro envio. Ela não protege você de uma lista comprada. Isso é uma decisão, não uma verificação.
