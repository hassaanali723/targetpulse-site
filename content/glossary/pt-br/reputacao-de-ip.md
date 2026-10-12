---
title: Reputação de IP
description: O que é reputação de IP no e-mail, a diferença entre IP compartilhado e IP dedicado, o que prejudica a reputação e como conferir e melhorar a sua.
slug: reputacao-de-ip
date: 2026-10-12
updated: 2026-10-12
keyword: ip reputation
short: A reputação de IP é o quanto os provedores de caixa de entrada confiam no endereço IP que envia os seus e-mails. Um endereço IP é o número que identifica um servidor na internet. Uma reputação boa ajuda o e-mail a chegar à caixa de entrada, e uma ruim o leva ao spam ou ao bloqueio.
related: domain-reputation, sender-reputation, ip-warming, email-blacklist, dnsbl, spam-trap
cta: Proteja a reputação do seu IP com uma lista verificada
---

## O que é reputação de IP?

Todo e-mail sai de um servidor. Um servidor é um computador que fica ligado o tempo todo e presta um serviço pela internet. Cada servidor tem um endereço IP, um número como `203.0.113.25`.

A reputação de IP, ou IP reputation, é a confiança que os provedores de caixa de entrada têm nesse endereço. Gmail, Outlook e Yahoo guardam o histórico de cada IP que envia e-mail para eles. Se esse IP envia e-mails que as pessoas querem, a reputação sobe. Se envia spam, ela cai.

Com uma reputação boa, os seus e-mails chegam à caixa de entrada. Com uma ruim, eles vão para o spam ou são recusados.

## Um exemplo: dois remetentes no mesmo IP

Duas empresas usam o mesmo ESP, um serviço que envia e-mails por elas. O ESP coloca as duas no mesmo endereço IP.

- **A Loja Verde** envia uma newsletter por semana para clientes que se cadastraram no site.
- **A Empresa X** compra uma lista de 50.000 endereços e envia uma promoção para todos de uma vez.

Muitos endereços da lista comprada não existem. Os e-mails voltam como bounce. Muitas pessoas que receberam marcam o e-mail como spam. Alguns endereços são [spam traps](/glossary/spam-trap), endereços que existem só para pegar quem envia para listas ruins.

O Gmail registra tudo isso contra o IP. A reputação do IP cai. Na semana seguinte, a newsletter da Loja Verde também vai para o spam, porque sai do mesmo IP. A Loja Verde não fez nada de errado.

Por isso os ESPs acompanham de perto os bounces e as reclamações de cada conta.

## IP compartilhado e IP dedicado

| | IP compartilhado | IP dedicado |
| --- | --- | --- |
| Quem usa | Vários clientes do ESP | Só você |
| Reputação | Depende de todos os remetentes do IP | Depende só dos seus envios |
| Para quem serve | Quem envia pouco ou não envia todo dia | Quem envia grandes volumes com regularidade |
| Aquecimento | Não precisa, o IP já tem histórico | Precisa, um IP novo não tem histórico |

Um IP dedicado não é sempre melhor. Se você envia pouco, os provedores não têm dados suficientes para formar uma opinião sobre o seu IP. Nesse caso, um IP compartilhado bem cuidado pelo ESP costuma funcionar melhor.

## O que melhora e o que prejudica a reputação de IP

O que ajuda:

- Enviar um volume regular, sem picos repentinos.
- Enviar só para pessoas que pediram para receber os seus e-mails.
- Ter poucos bounces e poucas reclamações de spam.

O que prejudica:

- **Bounces.** Muitos e-mails para endereços que não existem mostram que a lista não foi cuidada.
- **Spam traps.** Enviar para um spam trap mostra que a lista foi comprada ou nunca foi limpa.
- **Reclamações.** Cada clique em Denunciar spam conta contra o IP.
- **Blacklists.** Um IP listado em uma [blacklist de e-mail](/glossary/email-blacklist) é bloqueado por muitos servidores.
- **Volume repentino.** Um IP que de repente envia muito mais do que o normal chama a atenção dos filtros de spam.

## Como conferir a reputação do seu IP

- **Checagem de blacklists.** O MXToolbox e outras ferramentas parecidas consultam dezenas de blacklists de uma vez. Você digita o seu IP e vê em quais listas ele aparece. Muitas dessas listas funcionam como [DNSBL](/glossary/dnsbl), listas consultadas pelo DNS.
- **Microsoft SNDS.** O Smart Network Data Services é uma ferramenta gratuita da Microsoft. Ela mostra dados sobre os e-mails que os seus IPs enviam para o Outlook.com, como volume e taxa de reclamações. Você precisa provar que controla o IP para ver os dados.

Se você usa um IP compartilhado do seu ESP, quem acompanha esses dados é o ESP.

## Como melhorar a reputação de IP

1. Descubra a causa. Confira a sua taxa de bounce, as reclamações e as blacklists.
2. Limpe a sua lista. Remova os endereços que não existem e os que deram hard bounce.
3. Pare de enviar para quem não abre os seus e-mails há muitos meses.
4. Se o IP estiver em uma blacklist, corrija a causa e peça a remoção na página da lista.
5. Em um IP novo, aumente o volume aos poucos. Isso se chama [aquecimento de IP](/glossary/ip-warming).
6. Mantenha um ritmo de envio estável.

## Reputação de IP e reputação de domínio

A reputação de IP é ligada ao servidor que envia. A [reputação do domínio](/glossary/domain-reputation) é ligada ao seu domínio, a parte do endereço depois do @. Se você troca de ESP, o seu IP muda, mas o seu domínio continua o mesmo. Os provedores olham as duas reputações.

## Reputação de IP e verificação de e-mail

Bounces prejudicam a reputação de um IP, e a verificação atua nesse ponto. Um [verificador de e-mail](/email-checker) confere se um endereço existe antes do envio. Um [validador de e-mail em massa](/bulk-email-verifier) faz isso para a lista inteira e separa os endereços que dariam hard bounce. A [verificação de e-mail](/) também remove endereços mortos antes que eles virem spam traps.
