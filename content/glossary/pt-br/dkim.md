---
title: DKIM
description: O que é DKIM, como a assinatura DKIM funciona, como é um registro DKIM no DNS, por que o Gmail exige DKIM e como conferir se ele passa.
slug: dkim
date: 2026-10-12
updated: 2026-10-12
keyword: o que é dkim
short: DKIM é uma assinatura digital que o servidor de envio coloca em cada e-mail. Ela prova que o e-mail saiu do seu domínio e que ninguém mudou o conteúdo no caminho. O servidor de destino confere a assinatura com uma chave pública que você publica no DNS.
related: spf, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, bimi
cta: Assinatura DKIM pronta? Agora confira a sua lista
---

## O que é DKIM?

DKIM significa DomainKeys Identified Mail. É uma assinatura digital que vai dentro de cada e-mail que você envia. O padrão está definido na RFC 6376.

A assinatura DKIM prova duas coisas ao servidor que recebe o e-mail:

- O e-mail foi enviado por um servidor autorizado pelo seu domínio. O domínio é a parte do endereço depois do @.
- O texto e os principais cabeçalhos não foram alterados depois do envio. Cabeçalhos são as linhas de informação no topo do e-mail, como De, Para, Assunto e Data.

## Como o DKIM funciona: um exemplo

Uma loja online usa o domínio example.com. Uma cliente, Carla, faz uma compra. A loja envia o recibo para o Gmail dela. Veja o que acontece:

1. O servidor de e-mail da loja prepara o recibo.
2. Ele usa uma chave privada para criar uma assinatura. A chave privada é um código secreto que fica só no servidor da loja.
3. A assinatura é colocada no recibo, em um cabeçalho chamado DKIM-Signature.
4. O recibo chega ao Gmail.
5. O Gmail lê o cabeçalho e vê que a assinatura é de example.com.
6. O Gmail busca no DNS de example.com a chave pública correspondente. O DNS é o sistema público que guarda informações sobre cada domínio.
7. O Gmail usa a chave pública para conferir a assinatura. Se o recibo foi alterado no caminho, a assinatura não confere.
8. A assinatura confere. O resultado é DKIM pass.

Só quem tem a chave privada consegue criar uma assinatura que confere com a chave pública. Por isso um golpista não consegue assinar e-mails em nome de example.com.

## A assinatura DKIM no e-mail

A assinatura DKIM fica no cabeçalho DKIM-Signature. Ele tem várias partes, chamadas tags. Duas são as mais úteis para entender:

- **d=** é o domínio que assinou o e-mail. No exemplo, `d=example.com`.
- **s=** é o seletor. É um nome curto que indica qual chave foi usada. Exemplo: `s=s2026a`.

Com o domínio e o seletor, o servidor de destino sabe exatamente onde buscar a chave pública.

## O registro DKIM no DNS

O registro DKIM é um [registro DNS TXT](/glossary/dns-txt-record). Um registro TXT é uma linha de texto que você adiciona às configurações de DNS do seu domínio. O registro DKIM fica em um endereço com este formato:

```
s2026a._domainkey.example.com
```

O valor do registro é assim, com a chave encurtada:

```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

- `v=DKIM1` diz que é um registro DKIM.
- `k=rsa` é o tipo de chave.
- `p=` é a chave pública.

A chave privada nunca vai para o DNS. Ela fica só no servidor que envia o e-mail. Use uma chave de 2048 bits. O Gmail aceita no mínimo 1024 bits e recomenda 2048. A RFC 8301 recomenda que quem assina use 2048 bits.

## Por que o DKIM importa

O DKIM resolve um problema que o [SPF](/glossary/spf) não resolve. Quando alguém encaminha o seu e-mail, o servidor que encaminha usa o próprio endereço IP. Um endereço IP é o número que identifica um servidor na internet. Esse IP não está no seu registro SPF, então o SPF falha. A assinatura DKIM continua válida, porque o conteúdo não mudou.

O DKIM também é uma das duas checagens que o [DMARC](/glossary/dmarc) usa. Sem DKIM, o seu DMARC depende só do SPF.

As diretrizes para remetentes do Google exigem SPF, DKIM e DMARC de quem envia 5.000 ou mais e-mails por dia para contas do Gmail. A Microsoft exige os mesmos três registros para o mesmo volume enviado ao Outlook.com, Hotmail e Live.

## Como configurar o DKIM

O caminho depende de quem envia o seu e-mail.

- **Você usa um serviço de e-mail**, como Google Workspace, Microsoft 365, Mailchimp ou SendGrid. O serviço cria a chave para você. Ele mostra o nome e o valor do registro. Você copia esses dados para o painel de DNS do seu domínio e ativa o DKIM no serviço.
- **Você tem o seu próprio servidor de e-mail.** Você precisa criar o par de chaves. O nosso [gerador de DKIM](/dkim-generator) (em inglês) cria a chave e o registro no seu navegador. Depois você instala a chave privada no servidor e publica o registro no DNS.

## Como conferir se o DKIM passa

1. Envie um e-mail do seu domínio para uma conta pessoal do Gmail.
2. Abra o e-mail no Gmail.
3. Clique nos três pontos e escolha Mostrar original.
4. Procure a linha DKIM. Ela deve dizer PASS, com o seu domínio.

Se aparecer FAIL, confira se o registro DNS já foi publicado. Confira também se o seletor no servidor é igual ao seletor no DNS.

## DKIM e verificação de e-mail

O DKIM prova que o e-mail é seu, mas não diz se o endereço do destinatário existe. Um e-mail com assinatura válida ainda volta como [hard bounce](/glossary/hard-bounce) se a caixa de entrada não existir. Um [validador de e-mail](/email-checker) confere cada endereço antes do envio. Um [validador de e-mail em massa](/bulk-email-verifier) faz isso para a lista toda. Com DKIM e [verificação de e-mail](/) juntos, o seu e-mail é autenticado e vai para endereços que existem.
