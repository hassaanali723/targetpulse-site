---
title: Google Postmaster Tools
description: O que o Google Postmaster Tools mostra sobre os seus e-mails para o Gmail, como configurar, os limites de taxa de spam do Google e o que ele não mostra.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-10-12
keyword: google postmaster tools
short: O Google Postmaster Tools é um painel gratuito do Google que mostra como o Gmail avalia o seu domínio. Ele informa a sua taxa de spam, a reputação do domínio e do IP, a autenticação e os erros de entrega. Ele cobre só os e-mails enviados para usuários do Gmail.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: O Postmaster Tools informa os problemas depois do envio. A verificação os evita
---

## O que é o Google Postmaster Tools?

O Google Postmaster Tools é um site do Google para quem envia e-mails. Ele mostra como o Gmail trata os e-mails do seu domínio. O domínio é a parte do endereço depois do @, como example.com em vendas@example.com.

É gratuito. É a única fonte oficial de informação sobre como o Gmail avalia o seu domínio.

Ele cobre só o Gmail. E-mails enviados para Outlook.com, Yahoo ou servidores de empresas não aparecem. A Microsoft tem um serviço separado para a sua rede.

## Um exemplo simples

Uma loja online, a Loja Example, envia newsletters do domínio example.com. Veja como ela começa a usar o Google Postmaster Tools.

1. **Camila, da loja, entra no Google Postmaster Tools.** Ela usa a conta Google da empresa.
2. **Ela adiciona o domínio example.com.**
3. **O Google pede uma prova de que o domínio é da loja.** Ele mostra um código para adicionar ao DNS. O DNS é o diretório público com as informações de cada domínio. Cada informação nele se chama registro.
4. **Camila adiciona o registro no painel de DNS do domínio.** O Google confere e confirma o domínio.
5. **A loja continua enviando as newsletters.** Os gráficos aparecem quando o volume para o Gmail é suficiente.
6. **Camila vê um problema.** A taxa de spam subiu depois de uma campanha. Ela sabe qual envio revisar.

## O que ele mostra

| Dado | O que significa |
|---|---|
| **Taxa de spam** | A porcentagem do seu e-mail entregue que os usuários do Gmail marcaram como spam. As diretrizes para remetentes do Google se referem a este número. |
| **Reputação de domínio e reputação de IP** | Uma avaliação para cada uma: bad, low, medium ou high. High significa que o Gmail raramente filtra o seu e-mail. Bad significa que a maior parte do seu e-mail vai para o spam ou é recusada. |
| **Autenticação** | A porcentagem do seu e-mail que passa em [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc). São registros que provam que o e-mail saiu mesmo do seu domínio. |
| **Criptografia** | A porcentagem do seu e-mail enviada com TLS. TLS é a tecnologia que protege o e-mail com criptografia no caminho entre os servidores. |
| **Erros de entrega** | A porcentagem do seu e-mail que o Gmail recusou ou atrasou, com o motivo. |
| **Feedback loop** | Taxas de reclamação por campanha, para grandes remetentes que usam o cabeçalho Feedback-ID. Um cabeçalho é uma linha de informação técnica no topo do e-mail. |

O endereço IP é o número que identifica o servidor que envia o seu e-mail. Por isso existe uma reputação para o domínio e outra para o IP.

## Os limites que o Google publica

As diretrizes para remetentes do Google dizem:

1. Mantenha a taxa de spam mostrada no Postmaster Tools abaixo de 0,10 por cento.
2. Nunca chegue a uma taxa de spam de 0,30 por cento ou mais.
3. Remetentes de 5.000 ou mais mensagens por dia precisam ter SPF, DKIM e DMARC.
4. O e-mail de marketing desses remetentes precisa ter cancelamento de inscrição com um clique.

Remetentes acima de 0,30 por cento têm o seu e-mail filtrado ou recusado. Esses limites são pequenos. Em 10.000 e-mails entregues, 0,30 por cento são 30 reclamações.

## O que ele não mostra

O Google Postmaster Tools informa sobre o e-mail que foi entregue. Ele não pode mostrar endereços que não existem.

Veja por quê. Um e-mail para um endereço morto é recusado durante a conexão SMTP. SMTP é o conjunto de regras que os servidores usam para trocar e-mails. Essa recusa é um bounce, ou seja, um e-mail que volta sem ser entregue. Os bounces não fazem parte da taxa de spam.

**Exemplo:** uma empresa envia para uma lista antiga com muitos endereços inválidos. No Postmaster Tools, a taxa de spam parece baixa. Ao mesmo tempo, a taxa de bounce está alta e prejudica a reputação. O painel não mostra esse segundo problema.

O Postmaster Tools também precisa de volume. Se o seu domínio envia pouco e-mail para o Gmail, os gráficos ficam vazios. O Google não publica o volume mínimo.

## Como ele se encaixa na verificação

O Google Postmaster Tools informa os problemas depois do envio. A [verificação de e-mail](/) remove as causas antes do envio. Passar um endereço por um [verificador de e-mail](/email-checker), ou a lista inteira por um [validador de e-mail em massa](/bulk-email-verifier), remove os endereços que dão bounce. Também remove os endereços descartáveis e de função que causam reclamações. Depois disso, o Postmaster Tools tem menos a informar. O guia sobre a [taxa de bounce de e-mail](/blog/how-to-reduce-email-bounce-rate) explica os dois lados.
