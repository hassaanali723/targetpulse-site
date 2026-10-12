---
title: Blacklist de e-mail
description: O que é uma blacklist de e-mail, como um IP ou domínio entra nela, como conferir se você está listado e como pedir a remoção.
slug: blacklist-de-e-mail
date: 2026-10-12
updated: 2026-10-12
keyword: email blacklist
short: Uma blacklist de e-mail é uma lista pública de endereços IP e domínios que enviaram spam. Os servidores de e-mail consultam essa lista e bloqueiam e-mails de quem está nela. Se o seu IP ou domínio entrar em uma blacklist, os seus e-mails começam a voltar.
related: dnsbl, blocklist, spam-trap, ip-reputation, domain-reputation, hard-bounce
cta: Mantenha a sua lista longe de spam traps
---

## O que é uma blacklist de e-mail?

Uma blacklist de e-mail, ou lista negra de e-mail, é uma lista de remetentes conhecidos por enviar spam. Ela guarda dois tipos de dado:

- **Endereços IP.** Um endereço IP é o número que identifica um servidor na internet, como `203.0.113.10`.
- **Domínios.** O domínio é a parte do endereço depois do @, como example.com.

As blacklists são mantidas por organizações antispam. A mais conhecida é o Spamhaus. Os servidores de e-mail consultam essas listas a cada e-mail que chega. Se o remetente está na lista, o servidor pode recusar o e-mail ou mandá-lo para o spam.

## Um exemplo: e-mails voltando por causa do Spamhaus

Uma empresa de software envia e-mails para os clientes todo dia. Numa segunda-feira, muitos e-mails começam a voltar. A mensagem de erro é parecida com esta:

```
554 5.7.1 Service unavailable; Client host [203.0.113.10] blocked using zen.spamhaus.org
```

Veja o que cada parte quer dizer:

- `554` e `5.7.1` são [códigos de erro SMTP](/glossary/smtp-error-codes). Um código que começa com 5 é uma recusa permanente.
- `Client host [203.0.113.10]` é o endereço IP do servidor da empresa.
- `blocked using zen.spamhaus.org` diz que o servidor de destino consultou o Spamhaus e encontrou esse IP lá.

A empresa investiga e descobre a causa. Na sexta-feira, alguém enviou uma campanha para uma lista antiga, com muitos endereços abandonados. Alguns deles eram spam traps.

## Blacklists de IP e blacklists de domínio

| Tipo | O que lista | Exemplo de consequência |
| --- | --- | --- |
| Blacklist de IP | O endereço IP do servidor que envia | Todo e-mail que sai desse servidor é bloqueado, de qualquer domínio |
| Blacklist de domínio | O domínio do remetente ou os domínios dos links no e-mail | Todo e-mail com esse domínio é bloqueado, de qualquer servidor |

Se você usa um IP compartilhado de um ESP, um serviço que envia e-mail por você, o IP pode entrar em uma blacklist por causa de outro cliente. Nesse caso, quem resolve é o ESP.

## Blacklist ou blocklist

Os dois nomes descrevem a mesma coisa. "Blacklist" é o nome mais antigo e ainda muito usado. O Spamhaus e outras organizações usam "blocklist". Você também vai ver [blocklist](/glossary/blocklist) em mensagens de erro e em documentação técnica. Muitas dessas listas são consultadas pelo DNS, o sistema público que guarda informações sobre domínios e IPs. Por isso também se chamam [DNSBL](/glossary/dnsbl).

## Como um remetente entra em uma blacklist

- **Spam traps.** Um [spam trap](/glossary/spam-trap) é um endereço que existe só para pegar remetentes com listas ruins. Enviar para ele pode colocar o seu IP ou domínio em uma lista.
- **Reclamações.** Muitas pessoas marcam os seus e-mails como spam.
- **Conta invadida.** Um golpista entra em uma conta de e-mail ou em um servidor e usa para enviar spam.
- **Volume repentino de um IP novo.** Um IP sem histórico que de repente envia milhares de e-mails chama a atenção das organizações antispam.

## Como conferir se você está em uma blacklist

O MXToolbox e outras ferramentas parecidas consultam dezenas de blacklists de uma vez. Você digita o seu IP ou o seu domínio e vê em quais listas ele aparece. O Spamhaus também tem uma página própria de consulta.

Faça essa checagem quando os seus bounces subirem de repente. Leia também a mensagem de erro do bounce. Muitas vezes ela diz o nome da lista.

## Como sair de uma blacklist

1. **Encontre a causa.** Confira a última campanha, a origem da lista e se alguma conta foi invadida.
2. **Corrija a causa.** Remova os endereços ruins, troque senhas, pare a campanha problemática.
3. **Peça a remoção.** Cada blacklist tem a sua página de remoção. Siga as instruções da lista que aparece no erro.
4. **Espere e acompanhe.** Algumas listas removem o IP sozinhas depois de um tempo sem problemas. Outras pedem uma solicitação.

Se você pedir a remoção sem corrigir a causa, o IP volta para a lista.

## Blacklists de e-mail e verificação de e-mail

Endereços antigos e endereços inventados levam a spam traps, e spam traps levam a blacklists. Um [validador de e-mail em massa](/bulk-email-verifier) remove da lista os endereços que não existem mais, antes que eles sejam transformados em spam traps. Um [verificador de e-mail](/email-checker) no formulário de cadastro pega erros de digitação no domínio. A [verificação de e-mail](/) não detecta um spam trap ativo, porque ele aceita e-mail como qualquer caixa real. Ela reduz o risco removendo os endereços mortos.
