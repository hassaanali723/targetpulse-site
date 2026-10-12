---
title: Provedor de serviço de e-mail (ESP)
description: O que é um provedor de serviço de e-mail (ESP), exemplos como Mailchimp e SendGrid, a diferença para Gmail e Outlook e por que o ESP se importa com os seus bounces.
slug: provedor-de-e-mail
date: 2026-10-12
updated: 2026-10-12
keyword: provedor de e-mail
short: Um provedor de serviço de e-mail, ou ESP, é uma empresa cujo serviço envia e-mails por você, como newsletters, recibos e avisos. Exemplos são Mailchimp, Brevo e SendGrid. Ele é diferente do Gmail e do Outlook, que são os lugares onde as pessoas leem e-mail.
related: smtp, mta, deliverability, sender-reputation, bounce-rate, list-cleaning
cta: Verifique a lista antes de enviar para o seu ESP
---

## O que é um provedor de serviço de e-mail (ESP)?

Um provedor de serviço de e-mail é uma empresa que envia e-mails em nome de outras empresas. A sigla vem do inglês: ESP, de email service provider. Você cria uma conta, envia a sua lista de contatos e escreve o e-mail. O ESP cuida do envio para todos os endereços.

Uma observação sobre o nome. No Brasil, "provedor de e-mail" também é usado para serviços como Gmail, Outlook e Yahoo, onde as pessoas têm a sua caixa de entrada. Nesta página, provedor de serviço de e-mail quer dizer a empresa que **envia** e-mail por você. A diferença está explicada mais abaixo.

## Um exemplo: a newsletter de uma padaria

A Padaria Pão Quente tem 3.000 clientes cadastrados. Todo mês, ela envia uma newsletter com as novidades do cardápio.

Se a dona da padaria tentar enviar pelo Gmail pessoal, ela tem problemas. O Gmail limita quantos e-mails uma conta comum envia por dia. Não há link de descadastro automático. Ela também não sabe quem abriu o e-mail.

Então ela usa um ESP. Veja como funciona:

1. Ela cria uma conta em um ESP, por exemplo o Brevo.
2. Ela importa a lista com os 3.000 endereços dos clientes.
3. Ela monta a newsletter em um editor dentro do ESP.
4. Ela clica em Enviar.
5. Os servidores do ESP enviam um e-mail para cada cliente.
6. No dia seguinte, ela vê um relatório com aberturas, cliques e bounces.

## Exemplos de ESPs

- **Mailchimp:** muito usado para newsletters e campanhas de marketing.
- **Brevo:** oferece e-mail de marketing e e-mail transacional.
- **SendGrid:** muito usado por desenvolvedores para enviar e-mail a partir de aplicativos.
- **Amazon SES:** o serviço de envio de e-mail da Amazon Web Services.
- **Postmark:** focado em e-mail transacional, como recibos e redefinição de senha.

## ESP e provedor de caixa de entrada: qual a diferença

Os dois são empresas de e-mail, mas fazem trabalhos opostos.

| | ESP | Provedor de caixa de entrada |
| --- | --- | --- |
| O que faz | Envia e-mail em nome de uma empresa | Guarda o e-mail que as pessoas recebem |
| Quem usa | Empresas que enviam para muitas pessoas | Qualquer pessoa que lê e-mail |
| Exemplos | Mailchimp, Brevo, SendGrid, Amazon SES, Postmark | Gmail, Outlook, Yahoo |

No exemplo da padaria, o Brevo é o ESP. O Gmail e o Outlook dos clientes são os provedores de caixa de entrada. São eles que decidem se a newsletter vai para a caixa de entrada ou para o spam.

## ESP de marketing e ESP transacional

Os ESPs costumam se dividir em dois tipos de envio.

- **E-mail de marketing** é enviado para muitas pessoas ao mesmo tempo. Exemplos: newsletters, promoções, convites para eventos.
- **E-mail transacional** é enviado para uma pessoa, por causa de algo que ela fez. Exemplos: recibo de compra, confirmação de cadastro, código de login.

Alguns ESPs fazem os dois. Outros se dedicam a um só. Algumas empresas usam um ESP para cada tipo. Assim um problema nas campanhas de marketing não atrasa os recibos.

## O que um ESP faz por você

- **Servidores de envio.** O ESP mantém os servidores que enviam o e-mail pelo [SMTP](/glossary/smtp), o conjunto de regras que os servidores de e-mail usam para conversar.
- **Links de descadastro.** Ele coloca um link para a pessoa sair da lista e remove quem clica.
- **Tratamento de bounces.** Quando um e-mail volta, ele registra o motivo. Em muitos ESPs, os endereços com [hard bounce](/glossary/hard-bounce) deixam de receber e-mails automaticamente.
- **Relatórios.** Ele mostra quantas pessoas abriram, clicaram, se descadastraram ou marcaram como spam.
- **Autenticação.** Ele ajuda a configurar [SPF](/glossary/spf) e [DKIM](/glossary/dkim) no seu domínio.

## Por que o ESP se importa com os seus bounces

O ESP envia e-mails de muitos clientes pelos mesmos servidores. Se um cliente envia para muitos endereços que não existem, a reputação desses servidores cai. Os outros clientes também são prejudicados.

Por isso muitos ESPs acompanham a [taxa de bounce](/glossary/bounce-rate) de cada conta. Uma conta com bounces demais pode receber um aviso. Ela também pode ser colocada em revisão ou ter os envios pausados. Cada ESP publica as suas próprias regras.

## Provedor de serviço de e-mail e verificação de e-mail

O melhor momento para verificar a lista é antes de importá-la no seu ESP. Um [validador de e-mail em massa](/bulk-email-verifier) confere cada endereço da lista e separa os que não existem. Para um endereço só, como um cadastro novo, use um [verificador de e-mail](/email-checker). Com a [verificação de e-mail](/) feita antes do envio, menos e-mails voltam e a sua conta no ESP fica longe dos limites de bounce.
