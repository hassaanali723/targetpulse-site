---
title: "Por que e-mails dão bounce? Causas e o que fazer"
description: Por que e-mails dão bounce, hard bounce e soft bounce, as causas mais comuns em campanhas frias, o que significa um e-mail devolvido e o que fazer com ele.
slug: por-que-emails-dao-bounce
date: 2026-09-23
keyword: por que e-mails dão bounce
image: /blog/covers/pt-br/por-que-emails-dao-bounce.webp
imageAlt: Por que e-mails dão bounce? Causas e o que fazer
cta: Reduza sua taxa de bounce antes do próximo envio
---

Cold e-mails dão bounce quando o servidor que recebe recusa a mensagem e a devolve em vez de entregá-la. Se você acabou de rodar uma campanha e quer saber por que os e-mails frios dão mais bounce do que o seu e-mail normal, quase tudo se resume a duas coisas. Você está escrevendo para pessoas que nunca pediram contato, então a lista é mais fria e menos precisa, e está enviando de um domínio com o qual o servidor do destinatário não tem histórico. As causas específicas ficam por baixo dessas duas.

## O que é um e-mail que deu bounce?

Um e-mail que deu bounce é uma mensagem que o servidor de e-mail do destino recusou e devolveu com um código de motivo, em vez de colocá-la em uma caixa. A resposta vem do servidor, não da pessoa, e chega como um relatório de não entrega (NDR) na caixa do remetente ou no registro de bounces da ferramenta de envio. O código desse relatório é a parte útil: um código 5xx é uma recusa permanente, um código 4xx é temporária. Quase toda dúvida sobre o que significa um e-mail devolvido se resolve lendo esse código.

## Hard bounce e soft bounce não são o mesmo problema

A primeira coisa a conferir é que tipo de bounce você recebeu, porque isso muda o que fazer em seguida.

Um hard bounce é permanente. O endereço não existe, o domínio não existe ou o servidor recusou de vez. Uma mensagem com hard bounce nunca será entregue, e o endereço deve sair da sua lista na hora. Um soft bounce é temporário. A caixa estava cheia, o servidor estava ocupado ou a mensagem foi retida para uma análise mais cuidadosa. Soft bounces às vezes se resolvem sozinhos, e a ferramenta de envio normalmente tenta de novo por você.

A distinção importa por causa da reputação. Os provedores de e-mail observam com que frequência você envia para endereços que dão hard bounce, e um padrão repetido marca você como alguém que trabalha com uma lista ruim. Um endereço morto é ruído. Uma campanha cheia deles é um sinal.

## As causas mais comuns, da mais frequente à menos

Os bounces se concentram em poucas causas. Mais ou menos na ordem em que aparecem em campanhas frias:

- O endereço não existe mais. As pessoas mudam de emprego e a caixa é apagada, enquanto o contato continua vivo em uma base comprada ou raspada da web.
- O próprio domínio acabou. Empresas pequenas fecham, o domínio deixa de resolver e não sobra servidor para aceitar nada.
- A caixa está cheia. Comum em endereços abandonados ou pessoais, e normalmente um soft bounce.
- O servidor de destino recusou o seu domínio de envio. É um bloqueio por reputação ou política, não um problema do destinatário.
- Greylisting. O servidor recusa temporariamente a primeira tentativa de um remetente desconhecido e aceita a nova tentativa alguns minutos depois.
- Filtro de spam. A mensagem foi recusada por conteúdo ou política antes de chegar à caixa de entrada.

A ordem importa porque as duas primeiras, endereços mortos e domínios mortos, são as que a verificação pega, e também as mais comuns em uma lista comprada ou raspada. As causas mais abaixo dependem mais do momento do envio e da sua própria configuração do que do endereço.

Muitas vezes dá para ler a causa direto na mensagem de bounce. Uma linha como 550 5.1.1 user unknown é um hard bounce de um endereço que não existe. Um 451 4.7.1 greylisted, try again later é uma recusa temporária que costuma se resolver na nova tentativa. Saber ler o código evita adivinhar o motivo.

## O que significa "e-mail devolvido"?

E-mail devolvido, ou bounce back, é o nome do dia a dia para a mesma coisa: a sua mensagem voltou para você. O texto do relatório varia conforme o provedor. O Gmail diz "Address not found", o Microsoft 365 diz "Recipient address rejected" e servidores do tipo Postfix citam a linha SMTP crua, 550 5.1.1 User unknown. As três querem dizer que a caixa não existe. Um e-mail devolvido que fala em "mailbox full", "greylisted" ou "try again later" é temporário e costuma se resolver com a nova tentativa da sua ferramenta de envio.

## Nem todo bounce é problema da lista

É tentador ler cada bounce como endereço ruim, mas uma parte real dos bounces em e-mails frios não tem nada a ver com a sua lista. Se o seu domínio de envio é novo e não passou por aquecimento, os servidores o tratam com desconfiança e recusam mais mensagens. Um domínio recém-criado que envia algumas centenas de e-mails frios no primeiro dia vai ver bounces que um domínio de seis meses com a mesma lista não veria. Se os seus registros SPF, DKIM ou DMARC estão faltando ou mal configurados, alguns provedores recusam você antes mesmo de olhar o destinatário.

Nenhuma dessas duas coisas se resolve limpando endereços. São problemas do lado do remetente, e aparecem como bounces idênticos aos de um endereço morto até você ler o motivo por trás.

## O que eu faço com um e-mail que deu bounce?

Um único endereço: leia o código. Um 5.1.1 ou "user unknown" quer dizer que a caixa sumiu; tire o endereço e, se o contato importa, procure o endereço atual em vez de tentar de novo. Um 4.x.x ou "mailbox full" quer dizer esperar; a ferramenta tenta sozinha. Um 5.7.1 ou "blocked" aponta para o seu domínio de envio, não para o destinatário, então confira SPF, DKIM e DMARC antes de enviar qualquer outra coisa. Se não tem certeza de que um endereço ainda está ativo, faça a [verificação de e-mail](/email-checker) grátis antes de escrever de novo.

## O que fazer depois que uma campanha deu bounce

Comece tirando da lista todo hard bounce e nunca mais envie para esses endereços. Não tente de novo nem deixe para o próximo envio na esperança de que voltem, porque não voltam, e cada tentativa repetida custa reputação. Deixe os soft bounces em paz; a ferramenta de envio cuida dessas novas tentativas.

Depois olhe a proporção. Se uma parte grande de uma lista nova deu bounce no primeiro envio, a lista já era ruim antes de você mexer nela, e a solução está antes, no ponto em que você coleta ou compra os endereços. Limpar depois ajuda o próximo envio, mas não desfaz o estrago na reputação deste.

## A origem da lista costuma ser a verdadeira história

De onde a lista veio prevê como ela vai dar bounce. Uma lista exportada do seu próprio CRM, com pessoas que já responderam a você, dá muito pouco bounce. Uma lista raspada da web ou comprada de um fornecedor dá muito mais, porque os endereços foram coletados uma vez e nunca mais conferidos, e uma parte morreu nesse meio-tempo. Se você sabe que a lista é comprada ou raspada, parta do princípio de que uma parte está velha e verifique antes do primeiro envio, em vez de descobrir pelo relatório de bounces.

## Onde a verificação ajuda e onde não ajuda

A verificação remove antes do envio os endereços que dariam hard bounce, e é a maior alavanca em uma lista fria. Conferir a lista antes transforma um palpite em um número conhecido, e vale a pena em qualquer lista que você não construiu.

O que ela não faz é consertar um registro DNS mal configurado nem aquecer um domínio frio. São problemas do remetente, e nenhuma limpeza de lista mexe neles. Então separe os bounces por causa. Se forem endereços que não existem mais, passe a lista pela [verificação de e-mail](/) antes do próximo envio, com a [verificação catch-all](/catch-all-verification) incluída. Se forem falhas de autenticação ou de reputação, o trabalho está no seu próprio domínio, não na lista.
