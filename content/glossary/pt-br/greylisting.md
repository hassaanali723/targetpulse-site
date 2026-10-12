---
title: Greylisting
description: O que é greylisting, por que um servidor rejeita o seu primeiro e-mail e aceita o segundo, quanto dura o atraso e como isso afeta a verificação.
slug: greylisting
date: 2026-09-29
updated: 2026-10-12
keyword: greylisting
short: Greylisting é uma defesa contra spam em que o servidor recusa o primeiro e-mail de um remetente desconhecido e aceita o mesmo e-mail na nova tentativa, alguns minutos depois. Servidores de e-mail reais tentam de novo. A maioria dos programas de spam não tenta.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Obtenha uma resposta real nos endereços que aplicam greylisting às suas verificações
---

## O que é greylisting?

Greylisting é uma defesa contra spam que usa um atraso. O servidor que recebe o e-mail recusa a primeira tentativa de um remetente novo. Depois ele aceita a segunda tentativa. O greylisting está descrito na RFC 6647, um documento técnico de padrões da internet.

Duas palavras ajudam a entender:

- **Servidor de e-mail:** o computador que envia ou recebe e-mails para um domínio.
- **Endereço IP:** o número que identifica um servidor na internet.

Um servidor de destino com greylisting mantém um registro de todos os remetentes que já viu. Ele olha três coisas juntas:

1. o endereço IP de quem envia;
2. o endereço de e-mail do remetente;
3. o endereço de e-mail do destinatário.

Se ele nunca viu essa combinação, recusa o e-mail com um erro temporário. Um servidor de e-mail bem configurado guarda o e-mail em uma fila e tenta de novo. A maioria dos programas de spam envia uma vez e não tenta de novo.

Quando a nova tentativa chega, o servidor aceita o e-mail e guarda o remetente no seu registro. Depois disso, o e-mail do mesmo remetente é aceito na primeira tentativa.

## Um exemplo simples

Veja o greylisting acontecendo, passo a passo.

1. **Renata envia uma proposta às 10h00.** Ela escreve para compras@fornecedor.example pela primeira vez.
2. **O servidor do fornecedor não conhece Renata.** Ele nunca viu essa combinação de IP, remetente e destinatário.
3. **O servidor recusa por enquanto.** Ele responde com o código `451` e uma mensagem como "greylisted, try again later". Ou seja, "tente de novo mais tarde".
4. **O servidor da Renata espera.** Ele guarda o e-mail em uma fila.
5. **Às 10h20, ele tenta de novo.** Já passou o tempo de espera do greylisting.
6. **O servidor do fornecedor aceita.** A proposta chega à caixa de entrada.
7. **Na próxima vez, não há atraso.** O servidor já conhece Renata e aceita o e-mail na primeira tentativa.

Renata não fez nada. O servidor dela resolveu tudo sozinho. Os horários deste exemplo são só ilustrativos.

## Como o remetente vê isso

A primeira tentativa recebe um código que começa com 4. Normalmente é `450` ou `451`, com uma mensagem como "greylisted, try again later". O seu servidor de e-mail trata isso como um [soft bounce](/glossary/soft-bounce). Um soft bounce é uma falha temporária de entrega. O servidor tenta de novo no seu próprio cronograma.

O servidor de destino decide quanto tempo espera antes de aceitar a nova tentativa. Cerca de 15 minutos é o comum. Alguns servidores usam um atraso mais curto ou mais longo.

Normalmente você não percebe o greylisting. O e-mail chega alguns minutos depois. Se a sua ferramenta mostrar algum aviso de bounce, ele se resolve sozinho.

## Quando o greylisting importa

O greylisting não afeta uma campanha normal. Ele importa em dois casos.

**E-mail urgente.** Uma redefinição de senha ou um código de uso único que chega 15 minutos atrasado não serve para o usuário.

**Exemplo:** Felipe pede um código de login às 9h00. O código vale por 10 minutos. Por causa do greylisting, ele chega às 9h15. O código já expirou.

Por isso os remetentes de e-mail transacional às vezes pedem aos domínios de destino para colocar os seus endereços IP em uma lista de permissão. E-mail transacional é o e-mail automático ligado a uma ação do usuário, como um recibo ou um código.

**Verificação.** Um verificador confere um endereço iniciando uma conversa SMTP e parando antes de enviar qualquer coisa. SMTP é o conjunto de regras que os servidores usam para trocar e-mails. Em um servidor com greylisting, a primeira tentativa recebe uma resposta `4xx`. Um verificador que para depois de uma tentativa informa o endereço como desconhecido. Mas o endereço pode ser válido.

## Greylisting e gateways de e-mail seguro

Muitos domínios de empresas usam um [gateway de e-mail seguro](/glossary/secure-email-gateway), como Proofpoint ou Mimecast. Um gateway é um servidor que filtra o e-mail antes de ele chegar à empresa. Esses gateways aplicam greylisting a remetentes desconhecidos por padrão. Esta é uma das razões pelas quais uma verificação básica devolve desconhecido em muitos endereços B2B, ou seja, endereços de empresas.

## Como um verificador lida com isso

Um bom [verificador de e-mail](/email-checker) trata uma resposta `4xx` como "tentar de novo", não como um resultado. Ele espera, tenta de novo do mesmo endereço IP e informa a resposta que o servidor dá depois do atraso do greylisting. O Giggal.ai faz isso quando resolve domínios com gateway. É assim que ele devolve válido ou inválido onde uma verificação de uma única tentativa devolve desconhecido. O [validador de e-mail em massa](/bulk-email-verifier) faz o mesmo para cada endereço da lista, e a [verificação de e-mail](/) encontra os endereços que não existem antes do seu envio.
