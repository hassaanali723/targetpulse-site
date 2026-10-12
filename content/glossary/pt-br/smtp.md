---
title: SMTP
description: O que é SMTP, como um e-mail vai de um servidor a outro, o que é um servidor SMTP, as portas 25, 587 e 465 e o que significam os erros SMTP.
slug: smtp
date: 2026-10-12
updated: 2026-10-12
keyword: o que é smtp
short: SMTP é o conjunto de regras que os servidores de e-mail usam para enviar e-mail uns para os outros. Quando você clica em Enviar, é o SMTP que leva a mensagem até o servidor de quem vai receber. Ele só envia e-mail, e outros protocolos servem para ler.
related: mta, mx-record, smtp-error-codes, esp, hard-bounce, greylisting
cta: Pergunte ao servidor SMTP se o endereço existe antes de enviar
---

## O que é SMTP?

SMTP significa Simple Mail Transfer Protocol. Em português, protocolo simples de transferência de e-mail. Um protocolo é um conjunto de regras que dois computadores seguem para conversar.

O SMTP define como um servidor de e-mail envia uma mensagem para outro. Um servidor é um computador que fica ligado o tempo todo e presta um serviço pela internet. A versão atual do SMTP está descrita na RFC 5321. Uma RFC é um documento público que define um padrão da internet.

## Como o SMTP funciona: um exemplo passo a passo

Ana usa uma conta do Gmail. Ela envia um e-mail para Bruno, que usa o Outlook da empresa onde trabalha. O endereço dele é bruno@empresa.com.br. Veja o que acontece:

1. Ana escreve o e-mail e clica em Enviar.
2. O Gmail entrega a mensagem ao servidor SMTP do Google.
3. Esse servidor lê o domínio do destinatário. O domínio é a parte depois do @, aqui empresa.com.br.
4. O servidor consulta o DNS para saber qual servidor recebe e-mail desse domínio. O DNS é o sistema público que liga nomes de domínio a endereços de servidores. A resposta vem do [registro MX](/glossary/mx-record) do domínio.
5. O servidor do Google se conecta ao servidor de e-mail da empresa de Bruno.
6. Os dois trocam comandos SMTP. O servidor do Google diz quem envia e para quem é a mensagem. O servidor da empresa responde a cada comando.
7. O servidor da empresa aceita a mensagem e a guarda na caixa de entrada de Bruno.
8. Bruno abre o Outlook e lê o e-mail.

Tudo isso leva poucos segundos. Ana não vê nenhum desses passos.

## O que é um servidor SMTP

Um servidor SMTP é o servidor que envia e-mail. Ele recebe a sua mensagem e a entrega ao servidor de destino. O nome técnico do programa que faz esse trabalho é [MTA](/glossary/mta), ou agente de transferência de e-mail.

Cada serviço de e-mail tem o seu servidor SMTP. O do Gmail se chama smtp.gmail.com. Se você configura um programa de e-mail, como o Outlook ou o Thunderbird, ele pede esse endereço. Ele também pede o seu usuário e a sua senha. Assim o servidor sabe que você pode enviar por ele.

Empresas que enviam muitos e-mails usam um [provedor de serviço de e-mail](/glossary/esp), como SendGrid ou Amazon SES. Esses serviços oferecem os seus próprios servidores SMTP.

## Portas SMTP: 25, 587 e 465

Uma porta é um número que indica qual serviço de um servidor você quer usar. O SMTP usa três portas principais.

| Porta | Para que serve |
| --- | --- |
| 25 | Envio de servidor para servidor. É a porta que o Google usa para entregar o e-mail de Ana. |
| 587 | Envio de um aplicativo ou programa de e-mail para o seu servidor SMTP. A conexão começa aberta e passa a ser criptografada com o comando STARTTLS. |
| 465 | Também é envio de um aplicativo para o servidor. A conexão é criptografada desde o primeiro momento. |

Criptografar significa embaralhar os dados para que ninguém no caminho consiga lê-los. Se você configura um programa de e-mail ou um site para enviar e-mail, use a porta 587 ou a 465. Muitas operadoras de internet bloqueiam a porta 25 em conexões residenciais.

## SMTP, IMAP e POP3: qual a diferença

O SMTP só envia. Ele leva o e-mail até a caixa de entrada do destinatário. Para ler o e-mail, o seu programa usa outro protocolo.

- **SMTP** envia o e-mail de um servidor para outro.
- **IMAP** permite ler o e-mail que fica guardado no servidor. Se você lê no celular e no computador, os dois mostram as mesmas mensagens.
- **POP3** baixa o e-mail do servidor para um único aparelho. Em muitas configurações, a cópia no servidor é apagada depois.

No exemplo, o Gmail de Ana usa SMTP para enviar. O Outlook de Bruno usa IMAP ou um protocolo da Microsoft para mostrar a mensagem a ele.

## Quando o servidor SMTP diz não

O servidor de destino pode recusar uma mensagem. Ele responde com um código de três dígitos. O primeiro dígito diz o tipo de resposta.

- **Códigos que começam com 2** significam sucesso. Exemplo: `250 OK`.
- **Códigos que começam com 4** são erros temporários. O servidor de quem envia tenta de novo mais tarde. Isso vira um [soft bounce](/glossary/soft-bounce) se continuar falhando.
- **Códigos que começam com 5** são erros permanentes. O e-mail não será entregue. Isso é um [hard bounce](/glossary/hard-bounce).

Exemplo: se Ana errar o endereço e escrever brunno@empresa.com.br, o servidor pode responder `550 5.1.1 User unknown`. Isso quer dizer que a caixa de entrada não existe. A lista completa está em [códigos de erro SMTP](/glossary/smtp-error-codes).

Alguns servidores respondem com um código 4 de propósito na primeira tentativa. Essa técnica se chama [greylisting](/glossary/greylisting).

## SMTP e verificação de e-mail

Um [validador de e-mail](/email-checker) usa o próprio SMTP para conferir um endereço. Ele consulta o registro MX do domínio, se conecta ao servidor de destino e pergunta se ele aceita e-mail para aquele endereço exato. O servidor responde com um código, e o verificador encerra a conversa antes de enviar qualquer mensagem. Um [validador de e-mail em massa](/bulk-email-verifier) faz essa mesma checagem para uma lista inteira. Com a [verificação de e-mail](/) feita antes da campanha, os endereços que dariam `550` saem da lista e menos e-mails voltam.
