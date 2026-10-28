---
title: BIMI (e-mail)
description: O que é BIMI no e-mail, como o logo da marca aparece no Gmail, o que você precisa antes (DMARC, SVG Tiny PS, VMC ou CMC) e como é o registro BIMI.
slug: bimi
date: 2026-10-12
updated: 2026-10-12
keyword: bimi email
short: BIMI é um padrão de e-mail que mostra o logo da sua marca ao lado dos seus e-mails, nas caixas de entrada que o aceitam. Você publica o logo no DNS do seu domínio. O logo só aparece se o seu domínio já tiver DMARC com quarantine ou reject.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: Logo pronto? Agora confira a sua lista
---

## O que é BIMI no e-mail?

BIMI significa Brand Indicators for Message Identification. Em português, indicadores de marca para identificação de mensagens. É um padrão de e-mail que mostra o logo de uma empresa ao lado dos e-mails que ela envia.

O logo aparece na lista de mensagens e no e-mail aberto. Ele só aparece nas caixas de entrada que aceitam BIMI. O padrão é mantido por um grupo de empresas chamado BIMI Group.

## Um exemplo no Gmail

Pedro abre o Gmail. Na lista de mensagens, cada remetente tem um círculo à esquerda.

- Um e-mail de uma loja sem BIMI mostra só a primeira letra do nome dela, por exemplo um "L" em um círculo colorido.
- Um e-mail de uma marca com BIMI mostra o logo da marca nesse círculo.

Pedro reconhece o logo antes de abrir o e-mail. O logo só aparece depois que o e-mail passa nas checagens de autenticação. Por isso um e-mail falso com o mesmo nome de remetente não mostra o logo.

## O que você precisa antes do BIMI

O BIMI tem três requisitos. Sem eles, o logo não aparece.

**1. DMARC com quarantine ou reject.** O [DMARC](/glossary/dmarc) é uma regra no DNS que diz o que fazer com e-mails falsos que usam o seu domínio. O DNS é o sistema público que guarda informações sobre cada domínio. O Google diz que o BIMI não funciona com a política `p=none`. A política precisa ser `p=quarantine` ou `p=reject`.

**2. O logo no formato SVG Tiny PS.** SVG é um formato de imagem feito de linhas e formas, não de pixels. O SVG Tiny PS é uma versão reduzida dele, criada para exibir imagens com segurança na caixa de entrada. As regras principais:

- A imagem precisa ser quadrada.
- O arquivo precisa ter um elemento de título com o nome da marca.
- Scripts, animações, imagens embutidas e links para arquivos externos não são permitidos.
- O arquivo deve ter menos de 32 KB.

Um SVG exportado de um programa de design comum quase sempre quebra pelo menos uma dessas regras.

**3. Um certificado de marca, para o Gmail.** O Gmail só mostra o logo quando o registro aponta para um certificado. Existem dois tipos:

| Certificado | O que exige | O que o Gmail mostra |
| --- | --- | --- |
| VMC (Verified Mark Certificate) | Uma marca registrada | O logo e um selo azul de verificação |
| CMC (Common Mark Certificate) | Não exige marca registrada | O logo, sem o selo azul |

Esses certificados são emitidos por poucas autoridades certificadoras. O Google publica a lista das que ele aceita.

## Como é o registro BIMI

O registro BIMI é um [registro DNS TXT](/glossary/dns-txt-record). Um registro TXT é uma linha de texto que você adiciona às configurações de DNS do seu domínio. O registro BIMI fica neste endereço:

```
default._bimi.example.com
```

O valor do registro é assim:

```
v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/cert.pem
```

- `v=BIMI1` diz que é um registro BIMI.
- `l=` é o endereço HTTPS do arquivo SVG do logo.
- `a=` é o endereço HTTPS do certificado VMC ou CMC.

A palavra `default` é o seletor. Você só precisa de outro seletor se quiser logos diferentes para tipos diferentes de e-mail.

## Quais caixas de entrada mostram o logo BIMI

Cada provedor tem as suas próprias regras:

- **Gmail** mostra o logo com um VMC ou um CMC.
- **Apple Mail** mostra o logo só com um VMC.
- **Yahoo** e **Fastmail** podem mostrar o logo a partir de um registro sem certificado.

Um provedor pode levar algum tempo para começar a mostrar um registro novo.

## Como configurar o BIMI

1. Coloque o DMARC do seu domínio em `p=quarantine` ou `p=reject`.
2. Prepare o logo como um arquivo SVG Tiny PS.
3. Decida qual certificado você precisa, VMC ou CMC, e solicite a uma autoridade certificadora.
4. Hospede o SVG e o certificado em endereços HTTPS.
5. Publique o registro TXT em `default._bimi.seudominio`.

O nosso [gerador de BIMI](/bimi-generator) monta o registro e confere o seu SVG com as regras do Tiny PS, no seu navegador.

O BIMI não melhora a entrega diretamente. Ele só mostra um logo em e-mails que já passam no DMARC. O trabalho de configurar SPF, DKIM e DMARC corretamente é o que ajuda o seu e-mail a chegar.

## BIMI e verificação de e-mail

O BIMI só aparece em e-mails que chegam à caixa de entrada. Um e-mail enviado para um endereço que não existe volta como bounce, e ninguém vê o logo. Um [verificador de e-mail](/email-checker) confere se um endereço existe antes do envio. Um [validador de e-mail em massa](/bulk-email-verifier) faz isso para a lista inteira, e os endereços mortos saem antes da campanha. A [verificação de e-mail](/) não mostra o seu logo, mas faz com que mais e-mails cheguem a pessoas reais.
