---
title: DMARC
description: O que é DMARC, como ele protege o seu domínio contra e-mails falsos, as três políticas none, quarantine e reject e como começar.
slug: dmarc
date: 2026-10-12
updated: 2026-10-12
keyword: o que é dmarc
short: DMARC é uma regra que você publica no DNS do seu domínio. Ela diz aos servidores de destino o que fazer com um e-mail que usa o seu domínio mas não passa nas checagens SPF e DKIM. Ela também diz para onde enviar relatórios sobre esses e-mails.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: DMARC configurado? Agora confira a sua lista
---

## O que é DMARC?

DMARC significa Domain-based Message Authentication, Reporting and Conformance. É uma regra pública que o dono de um domínio publica no DNS. O DNS é o sistema público que guarda informações sobre cada domínio, como o endereço do site e dos servidores de e-mail.

A regra DMARC responde a duas perguntas para os servidores que recebem e-mail:

- O que fazer com um e-mail que diz ser do meu domínio, mas não passa nas checagens de segurança?
- Para onde enviar relatórios sobre os e-mails enviados em meu nome?

O DMARC existe porque qualquer pessoa pode escrever qualquer endereço no campo De de um e-mail. Sem DMARC, o servidor de destino não sabe o que o dono do domínio quer que ele faça com um e-mail falso.

## Um exemplo de DMARC em ação

A empresa do exemplo usa o domínio example.com. Um golpista envia este e-mail para um cliente dela:

```
De: financeiro@example.com
Assunto: Sua fatura está vencida
Pague aqui: http://pagar-agora.example.net
```

O cliente vê example.com e confia. Mas a empresa nunca enviou esse e-mail. Veja o que acontece se example.com tiver um registro DMARC com `p=reject`:

1. O e-mail falso chega ao Gmail do cliente.
2. O Gmail roda as checagens [SPF](/glossary/spf) e [DKIM](/glossary/dkim).
3. O e-mail não veio de um servidor da empresa e não tem a assinatura dela. As duas checagens falham para example.com.
4. O Gmail lê o registro DMARC de example.com. Ele diz `p=reject`.
5. O Gmail bloqueia o e-mail. O cliente nunca o vê.

Os e-mails reais da empresa passam nas mesmas checagens. Eles chegam normalmente.

## Como o DMARC decide: o alinhamento

O SPF e o DKIM sozinhos têm uma falha. Um golpista pode passar nas duas checagens com o próprio domínio dele e, mesmo assim, mostrar o seu domínio no campo De.

O DMARC resolve esse problema com uma regra. O SPF ou o DKIM precisa passar para o mesmo domínio que aparece no campo De. Essa correspondência se chama [alinhamento DMARC](/glossary/dmarc-alignment). Basta uma das duas checagens passar com alinhamento. Se nenhuma passar, o e-mail falha no DMARC.

## As três políticas DMARC

A política é a parte `p=` do registro. Ela diz o que fazer com um e-mail que falha.

| Política | O que acontece com o e-mail que falha | Quando usar |
| --- | --- | --- |
| p=none | Nada muda. O e-mail é entregue como antes e você recebe relatórios. | No começo, enquanto você descobre quem envia e-mail pelo seu domínio. |
| p=quarantine | O e-mail vai para a pasta de spam. | Quando todos os seus envios reais já passam. |
| p=reject | O e-mail é bloqueado. | Quando você tem certeza de que nenhum e-mail real vai falhar. |

## Um registro DMARC simples

O registro DMARC é um [registro DNS TXT](/glossary/dns-txt-record) publicado em `_dmarc.example.com`. Um registro inicial é assim:

```
v=DMARC1; p=none; rua=mailto:relatorios@example.com
```

- `v=DMARC1` diz que é um registro DMARC.
- `p=none` diz para não mudar nada na entrega por enquanto.
- `rua=mailto:relatorios@example.com` diz para onde enviar os relatórios diários. Eles mostram quais servidores enviaram e-mail com o seu domínio e se passaram nas checagens.

Um domínio só pode ter um registro DMARC. Se o servidor de destino encontrar dois, ele ignora os dois. O guia [What is a DMARC record](/blog/what-is-a-dmarc-record) (em inglês) explica cada tag do registro e como ler os relatórios.

## Como começar com DMARC

A maioria dos domínios segue estes passos:

1. Publique um registro com `p=none` e um endereço `rua`.
2. Leia os relatórios por algumas semanas. Anote cada serviço que envia e-mail por você, como a ferramenta de newsletter e o sistema de suporte.
3. Configure SPF e DKIM em cada um desses serviços até todos passarem.
4. Mude para `p=quarantine` e continue lendo os relatórios.
5. Mude para `p=reject` quando nada real estiver falhando.

O nosso [gerador de DMARC](/dmarc-generator) (em inglês) monta o registro para cada passo.

## Quem exige DMARC

As diretrizes para remetentes do Google exigem um registro DMARC de quem envia 5.000 ou mais e-mails por dia para contas pessoais do Gmail. A Microsoft exige o mesmo para quem envia esse volume ao Outlook.com, Hotmail e Live. Nos dois casos, `p=none` já cumpre o mínimo. Mas `p=none` não bloqueia e-mails falsos.

O padrão atual do DMARC é a RFC 9989, publicada em maio de 2026.

## DMARC e verificação de e-mail

O DMARC protege o seu domínio contra e-mails falsos. Ele não diz nada sobre os endereços da sua lista. Um e-mail que passa no DMARC ainda volta se a caixa de entrada do destinatário não existir. Um [verificador de e-mail](/email-checker) confere se cada endereço existe antes do envio, e um [validador de e-mail em massa](/bulk-email-verifier) faz isso para a lista inteira. Com DMARC e [verificação de e-mail](/), o seu e-mail é autenticado e menos mensagens voltam como bounce.
