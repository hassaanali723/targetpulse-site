---
title: "O que é um e-mail catch-all e como verificá-lo"
description: Um e-mail catch-all fica em um domínio que aceita e-mail para qualquer nome, real ou não. O que isso significa, por que empresas usam e como verificar.
slug: o-que-e-um-email-catch-all
date: 2026-09-23
keyword: o que é um e-mail catch-all
image: /blog/what-is-a-catch-all-email-address.webp
imageAlt: Ilustração sobre o que é um e-mail catch-all
cta: Descubra o que seus endereços catch-all realmente são
---

Um e-mail catch-all é um endereço em um domínio configurado para aceitar mensagens para qualquer nome possível, exista ou não uma caixa real por trás. Se você acabou de ver um endereço marcado como catch-all em um relatório de verificação e pesquisou o que é um e-mail catch-all, a versão curta é que o rótulo descreve o domínio, não a pessoa. O domínio aceita tudo. Uma mensagem para vendas@, um nome digitado errado ou um funcionário que saiu há anos chegam a algum lugar em vez de serem recusados.

Essa única decisão de configuração é o motivo de os endereços catch-all serem difíceis de lidar, e vale entendê-la antes de decidir o que fazer com os que estão na sua lista.

## Onde você costuma ver o rótulo

A maioria das pessoas encontra o termo em um de dois lugares. O primeiro é uma exportação de verificação, em que uma linha aparece marcada como catch-all ou accept-all ao lado de um endereço que parece totalmente comum. O segundo é uma ferramenta de envio que para em um endereço e pede que você decida, porque não consegue classificá-lo com clareza.

Nos dois casos o endereço em si não revela nada. Um domínio catch-all pode pertencer a uma grande empresa ou a uma agência de duas pessoas, e o nome antes da arroba é igual a qualquer outro. Você só sabe que está diante de um por causa do rótulo que a ferramenta coloca, e é por isso que o termo pega as pessoas de surpresa na primeira vez.

## Por que uma empresa faz o domínio inteiro aceitar tudo

A maioria dos domínios catch-all não resulta de nada incomum. Eles são configurados de propósito, por motivos que fazem sentido para quem administra o servidor de e-mail.

Os aliases compartilhados de departamento são o motivo mais comum. Endereços como info@, vagas@ e financeiro@ não pertencem a uma única pessoa, e com uma configuração catch-all nenhum deles precisa ser criado à mão. A tolerância a erros de digitação é outro. Se um cliente escreve para jon em vez de john, um domínio que aceita tudo entrega a mensagem mesmo assim em vez de devolvê-la.

A rotatividade de pessoal empurra as empresas na mesma direção. Quando alguém sai, continuam chegando mensagens para o endereço antigo por meses, e encaminhá-las para um gestor ou uma caixa compartilhada é mais fácil do que recusá-las. Fusões e aquisições aumentam a pilha, porque duas empresas costumam unificar vários domínios e preferem aceitar tudo a revisar cada endereço herdado.

Na prática, a maioria dos domínios catch-all é mantida por uma pequena equipe de TI que decidiu que aceitar e-mail dava menos trabalho do que manter uma lista de destinatários válidos.

## E-mail catch-all e accept-all: a mesma configuração

Você vai ver os dois termos, às vezes na mesma tela de resultados. Catch-all é o rótulo mais antigo e mais comum. Accept-all é o que alguns provedores e ferramentas mostram no lugar. Não há diferença de comportamento entre eles. Os dois querem dizer que o servidor de destino concordou em receber mensagens endereçadas a qualquer nome do domínio. Se uma ferramenta diz catch-all e outra diz accept-all, estão dizendo a mesma coisa.

## Por que um endereço catch-all é difícil de verificar

A verificação normalmente funciona fazendo uma pergunta ao servidor de destino. O verificador inicia o processo de entrega para um endereço específico e lê como o servidor responde. Um servidor que mantém uma lista de caixas reais recusa um nome que não reconhece, e essa recusa é o sinal de que o endereço é inválido.

Um servidor catch-all nunca dá esse sinal. Como está configurado para aceitar qualquer destinatário, ele responde a um nome real e a um claramente falso com a mesma resposta de sucesso, um simples SMTP 250. O verificador perguntou se a caixa existe e recebeu um sim que viria para qualquer nome. Então o teste comum vai até o fim e não devolve nada que você possa usar.

## O que um resultado catch-all significa para a sua lista

Um resultado catch-all não resolve nada sozinho. Não quer dizer que o endereço é inválido, nem confirma que a caixa é real. Quer dizer que a checagem padrão não conseguiu responder à pergunta. A caixa por trás pode ser de um funcionário ativo ou estar morta há anos, e o rótulo sozinho não separa uma coisa da outra.

É por isso que as ferramentas guardam os endereços catch-all em um status cauteloso, muitas vezes Arriscado ou Catch-All, em vez de válido ou inválido. Em uma lista B2B a fatia raramente é pequena. Tratar o grupo inteiro como lixo remove pessoas reais em silêncio, e tratá-lo como seguro convida bounces.

## Com que frequência você encontra esses endereços

Não são um caso raro. Em uma lista B2B típica, uma minoria considerável dos endereços fica em domínios catch-all, e o número sobe quanto mais seus contatos trabalham em empresas médias e grandes, onde aliases compartilhados e e-mail gerenciado são a regra. Os grandes provedores de e-mail gratuito quase nunca se comportam assim, então uma lista de endereços pessoais mostra muito poucos. Uma lista de endereços corporativos pode mostrar muitos. Essa mistura é o motivo de o rótulo catch-all aparecer justamente nas listas que importam para vendas e prospecção, e de valer alguns minutos decidir como tratá-lo em vez de aplicar uma regra geral.

## O que fazer com eles em seguida

Para checar agora um único endereço catch-all, faça a [verificação de e-mail](/email-checker) grátis: ela roda a verificação completa e devolve válido ou inválido em vez do rótulo catch-all.

Você tem três escolhas honestas. Apagar todos os endereços catch-all e aceitar que está jogando fora contatos que teriam aberto seu e-mail. Enviar mesmo assim e aceitar uma taxa de bounce maior e o custo de reputação que vem junto. Ou checá-los em um nível mais profundo do que o teste SMTP padrão, a única opção que mantém os contatos reais sem os bounces.

Se esse último caminho é o que você quer, use a [verificação catch-all](/catch-all-verification) em vez de adivinhar de que lado da linha cada endereço fica.
