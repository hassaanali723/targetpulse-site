---
title: Backscatter
description: O que é backscatter, por que você recebe mensagens de bounce por e-mails que nunca enviou, se a sua conta foi hackeada e como impedir isso no seu domínio.
slug: backscatter
date: 2026-10-22
updated: 2026-10-22
keyword: backscatter e-mail
short: Backscatter são mensagens de bounce que você recebe por e-mails que nunca enviou. Um spammer colocou o seu endereço no campo do remetente dos e-mails dele. Quando esses e-mails falharam, as mensagens de bounce voltaram para você.
related: email-spoofing, ndr, mailer-daemon, spf, dmarc, email-blacklist
cta: Mantenha os seus próprios bounces baixos com uma lista limpa
---

## O que é backscatter?

Backscatter são mensagens de bounce que você recebe por e-mails que nunca enviou.

Tudo começa com spam. Um spammer envia milhares de e-mails e digita o seu endereço no campo do remetente. Muitos desses e-mails vão para endereços que não existem. Os servidores de destino enviam uma mensagem de bounce de volta para o endereço do remetente. Esse endereço é o seu, então os bounces chegam à sua caixa de entrada.

Uma mensagem de bounce é o aviso automático que um servidor envia quando um e-mail não pode ser entregue. O nome formal é [relatório de não entrega](/glossary/ndr).

## Um exemplo simples

Veja como o backscatter chega a uma pequena empresa.

1. **Lena tem uma floricultura.** O endereço dela é hello@flowers.example.
2. **Um spammer copia o endereço dela.** O spammer envia 10.000 e-mails falsos. Cada um diz que vem de hello@flowers.example.
3. **Muitos e-mails falham.** Cerca de um terço vai para endereços que não existem.
4. **Alguns servidores aceitam primeiro e verificam depois.** Esses servidores recebem o e-mail e só então descobrem que a caixa de entrada não existe.
5. **Os bounces vão para Lena.** Esses servidores enviam avisos de bounce para hello@flowers.example.
6. **A caixa de entrada de Lena enche.** Uma manhã, ela encontra centenas de mensagens "Undeliverable" por e-mails que nunca escreveu.

Esses números são só um exemplo. O padrão é comum.

## A minha conta foi hackeada?

Normalmente não. Enviar um e-mail com um endereço de remetente falso não exige acesso à sua conta. É como escrever o endereço de devolução de outra pessoa em um envelope. Ninguém precisou da chave dessa pessoa para fazer isso.

Confira a sua pasta Enviados. Se os e-mails não estiverem lá, a sua conta não os enviou. Se estiverem lá, troque a sua senha e ative a verificação em duas etapas.

## Por que isso acontece

O backscatter acontece porque alguns servidores aceitam um e-mail primeiro e verificam o endereço depois. Quando a verificação falha, eles enviam um bounce para o endereço do remetente. Eles não têm como saber que o endereço do remetente era falso.

Servidores bem configurados verificam o endereço enquanto o outro servidor ainda está conectado. Se o endereço não existe, eles recusam o e-mail na hora. Nenhuma mensagem de bounce é criada, então nenhum backscatter chega a ninguém.

## Como impedir isso no seu domínio

Você não pode impedir que spammers digitem o seu endereço. Você pode fazer os servidores de destino recusarem os e-mails falsos deles. Faça isso com três registros no seu domínio.

| Registro | O que faz |
|---|---|
| [SPF](/glossary/spf) | Lista os servidores autorizados a enviar e-mail pelo seu domínio |
| [DKIM](/glossary/dkim) | Adiciona uma assinatura que prova que um e-mail veio mesmo de você |
| [DMARC](/glossary/dmarc) | Diz aos servidores de destino o que fazer com e-mails que falham nessas verificações |

Comece o DMARC com `p=none` e leia os relatórios. Quando só os seus próprios serviços passarem, mude para `p=quarantine` e depois para `p=reject`. Com `p=reject`, os servidores recusam os e-mails falsos em vez de devolvê-los como bounce para você.

Até lá, você pode filtrar as mensagens de bounce para uma pasta. Não responda a elas.

## Por que os donos de servidores se importam

Se você administra um servidor de e-mail, confira como ele trata endereços desconhecidos. Um servidor que aceita o e-mail e dá bounce depois envia backscatter para pessoas inocentes. Algumas listas de bloqueio (blocklists) listam servidores que fazem isso, por exemplo a lista em backscatterer.org. Estar em uma lista de bloqueio pode impedir que o seu próprio e-mail seja entregue.

## Como um verificador ajuda

A [verificação de e-mail](/) não impede o backscatter, porque você não enviou esses e-mails. Ela ajuda com os bounces que você mesmo causa. Remova os endereços inativos da sua própria lista antes de enviar. Assim, cada bounce na sua caixa de entrada é um que você consegue explicar.
