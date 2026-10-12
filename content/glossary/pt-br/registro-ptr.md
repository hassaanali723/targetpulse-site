---
title: Registro PTR
description: O que é um registro PTR, por que os servidores de e-mail o verificam, o que acontece quando um IP remetente não tem registro PTR e como configurar um.
slug: registro-ptr
date: 2026-09-29
updated: 2026-10-12
keyword: registro ptr
short: Um registro PTR liga um endereço IP a um nome, como mail.example.com, e é o contrário de um registro DNS normal. Os servidores de e-mail consultam o registro PTR do endereço IP que envia e-mail para eles. Alguns servidores recusam e-mail de endereços IP sem registro PTR.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Verifique a sua lista, não só o seu DNS
---

## O que é um registro PTR?

Um registro PTR diz qual nome pertence a um endereço IP. Antes de continuar, veja o que cada palavra quer dizer:

- **Endereço IP:** o número que identifica um computador na internet. Exemplo: `203.0.113.10`.
- **Nome de host:** o nome de um computador específico. Exemplo: `mail.example.com`.
- **DNS:** o diretório público que liga nomes a endereços IP. Cada informação guardada nele se chama registro.

Um registro DNS normal liga um nome a um endereço IP. Por exemplo, `mail.example.com` aponta para `203.0.113.10`. Um registro PTR faz o contrário. Ele liga `203.0.113.10` a `mail.example.com`. Isso se chama DNS reverso.

PTR significa Pointer, ou "ponteiro". O registro PTR não fica no DNS do seu domínio. Ele fica em uma zona DNS separada, que pertence ao dono do endereço IP. Normalmente o dono é o seu provedor de hospedagem ou o seu provedor de e-mail. Para criar ou alterar um registro PTR, você pede a eles.

## Um exemplo simples

Marcos administra o servidor de e-mail da empresa dele. Veja como o registro PTR entra no envio.

1. **Marcos envia um e-mail para um cliente no Gmail.** O e-mail sai do servidor da empresa, que tem o endereço IP `203.0.113.10`.
2. **O Gmail vê o endereço IP.** Ele ainda não sabe quem é esse remetente.
3. **O Gmail consulta o registro PTR de `203.0.113.10`.** A resposta é `mail.example.com`.
4. **O Gmail confere o caminho de volta.** Ele pergunta ao DNS para qual endereço IP `mail.example.com` aponta. A resposta é `203.0.113.10`.
5. **Os dois lados batem.** O servidor do Marcos parece um servidor de e-mail configurado de propósito.

Agora imagine que o servidor não tem registro PTR. No passo 3, o Gmail não recebe nenhum nome. Ele pode recusar o e-mail com um código de erro.

## Por que os servidores de e-mail verificam o registro PTR

Quando o seu servidor se conecta a um servidor de destino, o servidor de destino vê o seu endereço IP. Ele consulta o registro PTR desse IP. Depois ele verifica duas coisas:

1. O endereço IP tem um registro PTR?
2. O nome de host no registro PTR aponta de volta para o mesmo endereço IP?

Se as duas respostas forem sim, o remetente parece um servidor de e-mail real que alguém configurou de propósito. Se não houver registro PTR, o remetente parece uma destas três coisas:

- uma conexão residencial, como a internet de uma casa;
- um computador infectado por um vírus;
- um servidor que ninguém configurou.

O spam costuma vir desses três tipos de origem.

## O que acontece sem registro PTR

Alguns provedores recusam o e-mail. A referência de erros do Gmail lista `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. Ou seja, a mensagem foi bloqueada porque o endereço IP que enviou não tem registro PTR.

É uma recusa permanente. A sua ferramenta de envio registra isso como [hard bounce](/glossary/hard-bounce), mesmo que o endereço do destinatário exista.

Outros provedores aceitam o e-mail, mas dão a ele uma pontuação pior. Uma pontuação pior significa que o e-mail tem mais chance de ir para a pasta de spam.

## Como configurar um registro PTR

1. Encontre o endereço IP de onde o seu e-mail é enviado.
2. Escolha o nome de host para o qual ele deve apontar. Exemplo: `mail.example.com`.
3. Confira se esse nome de host tem um registro DNS normal apontando para o mesmo endereço IP.
4. Peça ao seu provedor de hospedagem ou de e-mail para criar o registro PTR do endereço IP com esse nome de host.

Você precisa mesmo fazer isso? Depende de como você envia:

| Como você envia | Precisa configurar o registro PTR? |
|---|---|
| Google Workspace, Microsoft 365, SendGrid ou Amazon SES | Não. Os endereços IP pertencem ao provedor, e cada registro PTR já está configurado. |
| O seu próprio servidor de e-mail | Sim. |
| Um endereço IP dedicado, ou seja, só seu | Sim. |

## Registros PTR e verificação

Um registro PTR afeta o endereço IP de quem envia. Ele não afeta o endereço de quem recebe. Um [verificador de e-mail](/email-checker) não precisa do seu registro PTR para conferir a sua lista.

Mas o próprio verificador precisa de um registro PTR em cada endereço IP que ele usa. Sem esse registro PTR, os servidores de destino não conversam com ele. Esta é uma das razões pelas quais um serviço de verificação recebe respostas diferentes de um script rodando em um notebook.

O seu registro PTR ajuda o seu e-mail a ser aceito. A [verificação de e-mail](/) faz outra coisa: ela encontra os endereços que não existem antes do envio. Um [validador de e-mail em massa](/bulk-email-verifier) faz isso para a lista inteira de uma vez. Um registro PTR correto e uma lista verificada evitam dois tipos diferentes de hard bounce.
