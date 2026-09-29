---
title: Registro PTR
description: O que é um registro PTR, por que os servidores de e-mail o verificam, o que acontece quando um IP remetente não tem registro PTR e como configurar um.
slug: registro-ptr
date: 2026-09-29
updated: 2026-09-29
keyword: registro ptr
short: Um registro PTR é um registro DNS que liga um endereço IP a um nome de host. É o contrário de um registro DNS normal. Os servidores de e-mail verificam o registro PTR do endereço IP que envia para eles. Alguns servidores rejeitam e-mail de endereços IP sem registro PTR.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Verifique a sua lista, não só o seu DNS
---

## O que é um registro PTR

Um registro DNS normal liga um nome a um endereço IP. Por exemplo, `mail.exemplo.com` aponta para `203.0.113.10`. Um registro PTR faz o contrário. Ele liga `203.0.113.10` a `mail.exemplo.com`. Isso se chama DNS reverso.

PTR significa Pointer. O registro PTR não fica no DNS do seu domínio. Ele fica em uma zona DNS separada que pertence ao dono do endereço IP. Normalmente é o seu provedor de hospedagem ou o seu provedor de e-mail. Para criar ou alterar um registro PTR, você pede a eles.

## Por que os servidores de e-mail verificam o registro PTR

Quando o seu servidor se conecta a um servidor de destino, o servidor de destino vê o seu endereço IP. Ele consulta o registro PTR desse IP. Depois ele verifica duas coisas:

- O endereço IP tem um registro PTR?
- O nome de host no registro PTR aponta de volta para o mesmo endereço IP?

Se as duas coisas forem verdadeiras, o remetente parece um servidor de e-mail real que alguém configurou de propósito. Se não houver registro PTR, o remetente parece uma destas três coisas: uma conexão residencial, um computador infectado ou um servidor que ninguém configurou. O spam costuma vir deles.

## O que acontece sem registro PTR

Alguns provedores rejeitam o e-mail. A referência de erros do Gmail lista `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. É uma rejeição permanente. A sua ferramenta de envio registra isso como [hard bounce](/glossary/hard-bounce) mesmo que o endereço exista.

Outros provedores aceitam o e-mail, mas dão a ele uma pontuação pior. Uma pontuação pior significa que o e-mail tem mais chance de ir para a pasta de spam.

## Como configurar um registro PTR

- Encontre o endereço IP de onde o seu e-mail é enviado.
- Escolha o nome de host para o qual ele deve apontar. Exemplo: `mail.seudominio.com`.
- Confira se esse nome de host tem um registro DNS normal apontando para o mesmo endereço IP.
- Peça ao seu provedor de hospedagem ou de e-mail para definir o registro PTR do endereço IP com esse nome de host.

Se você envia pelo Google Workspace, Microsoft 365, SendGrid ou Amazon SES, os endereços IP remetentes pertencem ao provedor. Os registros PTR já estão configurados. Você só precisa configurar um registro PTR se administra o seu próprio servidor de e-mail ou usa um endereço IP dedicado.

## Registros PTR e verificação

Um registro PTR afeta o endereço IP do remetente. Ele não afeta o endereço do destinatário. Um [verificador de endereços de e-mail](/email-checker) não precisa do seu registro PTR para verificar a sua lista.

Um verificador precisa de registros PTR nos seus próprios endereços IP. Sem eles, os servidores de destino não conversam com ele. Esta é uma das razões pelas quais um serviço de verificação recebe respostas diferentes de um script rodando em um notebook.
