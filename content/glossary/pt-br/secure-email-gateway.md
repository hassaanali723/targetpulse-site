---
title: Secure email gateway (SEG)
description: O que é um secure email gateway, como ele filtra o e-mail antes da caixa de entrada, como identificá-lo pelo registro MX e por que ele afeta a verificação.
slug: secure-email-gateway
date: 2026-10-22
updated: 2026-10-22
keyword: secure email gateway
short: Um secure email gateway, ou SEG, é um filtro que fica na frente das caixas de entrada de uma empresa. Ele verifica cada e-mail recebido em busca de spam, phishing e arquivos perigosos antes que alguém o receba. Exemplos comuns são Mimecast, Proofpoint e Barracuda.
related: spam-filter, mx-record, catch-all-email, greylisting, email-spoofing, dmarc
cta: Verifique endereços atrás de secure email gateways
---

## O que é um secure email gateway?

Um secure email gateway, ou SEG, é um filtro de segurança para o e-mail de uma empresa. Em português, também se diz gateway de e-mail seguro. Ele fica entre a internet e as caixas de entrada da empresa.

Todo e-mail enviado para a empresa passa primeiro pelo gateway. O gateway analisa o e-mail. Ele procura spam, links de phishing e anexos perigosos. O e-mail seguro segue para a caixa de entrada. O e-mail perigoso é bloqueado ou retido.

Grandes empresas, bancos, hospitais e órgãos do governo costumam usar um gateway. Os produtos mais conhecidos incluem Mimecast, Proofpoint e Barracuda.

## Um exemplo simples

1. **Daniel envia um e-mail para um banco.** Daniel vende software. Ele escreve para um gerente de um banco.
2. **O gateway recebe o e-mail primeiro.** O e-mail do banco passa por um gateway da Proofpoint.
3. **O gateway analisa o e-mail.** Ele verifica os links e o anexo do e-mail de Daniel.
4. **O e-mail é entregue.** Nada parece perigoso, então o gateway passa o e-mail para a caixa de entrada do gerente.

Daniel nunca vê o gateway. Se o e-mail dele tivesse um link perigoso, ele teria parado ali.

## Como identificar um gateway

Veja o [registro MX](/glossary/mx-record) do domínio. O registro MX informa qual servidor recebe e-mail para um domínio. Quando há um gateway, o registro MX aponta para o gateway em vez do provedor da caixa de entrada.

| Gateway | O registro MX costuma terminar em |
|---|---|
| **Mimecast** | `mimecast.com` |
| **Proofpoint** | `pphosted.com` |
| **Barracuda** | `barracudanetworks.com` |

Você pode consultar o registro MX de qualquer domínio com uma ferramenta de consulta MX.

## Por que os gateways afetam a verificação de e-mail

Um verificador de e-mail pergunta ao servidor de destino se um endereço existe. Em um domínio com gateway, quem responde é o gateway, não o servidor de e-mail real.

Alguns gateways se recusam a responder a qualquer verificação. A maioria das ferramentas então devolve "desconhecido", mesmo quando a pessoa é real. Outros gateways respondem sim para todo endereço, o que parece igual a um domínio [catch-all](/glossary/catch-all-email).

Isso afeta mais as listas B2B, porque os contatos que trabalham em grandes empresas muitas vezes ficam atrás de gateways.

## Como um verificador ajuda

O Giggal.ai reconhece 15 gateways pelo nome, incluindo Mimecast, Proofpoint e Barracuda, e devolve um resultado real para os endereços atrás deles. Para ver como isso funciona passo a passo, leia [como verificar e-mails atrás de um secure email gateway](/blog/how-to-verify-emails-behind-secure-email-gateways).
