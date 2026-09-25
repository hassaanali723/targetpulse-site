---
title: "Taxa de bounce de e-mail: referências e como reduzir"
description: O que é a taxa de bounce de e-mail, as referências para marketing, transacional e cold e-mail, e uma sequência que funciona para derrubar uma taxa alta.
slug: como-reduzir-a-taxa-de-bounce
date: 2026-09-23
keyword: taxa de bounce de e-mail
image: /blog/covers/pt-br/como-reduzir-a-taxa-de-bounce.webp
imageAlt: Taxa de bounce de e-mail: referências e como reduzir
cta: Coloque sua taxa de bounce sob controle
---

Uma taxa de bounce alta raramente é um problema só. Normalmente são três ou quatro pequenos problemas empilhados, e as pessoas costumam atacá-los na ordem errada: primeiro o trabalho técnico interessante, por último a chata limpeza da lista que teria resolvido quase tudo.

Por isso esta lista está ordenada pelo quanto cada passo realmente vale, não pelo quanto é satisfatório fazê-lo.

## O que é a taxa de bounce de e-mail?

A taxa de bounce de e-mail é a parcela das mensagens de um envio que voltou sem ser entregue: mensagens com bounce divididas pelas mensagens enviadas, em porcentagem. Você envia 10.000, voltam 250, e a taxa de bounce é de 2,5 por cento. A maioria das ferramentas mostra a taxa por campanha e a divide em hard bounces (o endereço ou o domínio não existe) e soft bounces (caixa cheia, servidor ocupado, bloqueio temporário). Os provedores de e-mail observam principalmente a parcela de hard bounces, porque ela é o sinal mais claro de uma lista que nunca foi verificada.

## Referências de taxa de bounce

O número aceitável depende do tipo de e-mail, porque os provedores julgam cada um de forma diferente.

| Tipo de envio | Saudável | Atenção | Prejudicial |
|---|---|---|---|
| Marketing para uma lista com consentimento | abaixo de 1% | de 1 a 2% | acima de 2% |
| Transacional (recibos, redefinições) | abaixo de 0,5% | de 0,5 a 1% | acima de 1% |
| Prospecção fria | abaixo de 2% | de 2 a 5% | acima de 5% |

O cold e-mail tem uma faixa mais larga porque a lista é mais fria por definição, mas também é julgado com mais rigor quando passa do limite: uma campanha fria com 6 por cento atrai bloqueios mais rápido do que uma newsletter com a mesma taxa. Essas faixas são as que as equipes de entregabilidade usam na prática; as regras do Google e do Yahoo para remetentes em massa colocam o teto de reclamações de spam em 0,3 por cento, e uma taxa de bounce acima dessas faixas costuma vir acompanhada de reclamações.

## Primeiro, saiba que tipo você tem

Sua ferramenta de envio divide os bounces em hard e soft. Eles significam coisas diferentes, e a solução de um não faz nada pelo outro.

Um hard bounce é permanente. A caixa não existe, o domínio não existe ou o servidor recusou você de vez. Enviar de novo vai dar sempre o mesmo resultado. É a categoria que prejudica você, porque os provedores leem um padrão de hard bounces como um remetente que não sabe quem são seus destinatários, que é exatamente como um spammer parece visto de fora.

Um soft bounce é temporário. A caixa está cheia, o servidor está fora do ar, a mensagem era grande demais ou você caiu em greylisting e foi orientado a tentar de novo em pouco tempo. A maioria das ferramentas de envio tenta de novo automaticamente, e boa parte se resolve sozinha.

Pegue o relatório da sua última campanha e veja a divisão antes de fazer qualquer outra coisa. Se o bounce é principalmente hard, é um problema de lista, e o resto deste artigo trata principalmente disso. Se é principalmente soft, com taxa estável em todas as campanhas, o problema é mais provavelmente de reputação ou de infraestrutura, e limpar a lista não vai mudar muito.

## O que conta como ruim

Não existe um limite universal, mas os números com que se trabalha são bem consistentes.

| Taxa de hard bounce | O que significa |
|---|---|
| Abaixo de 2% | Normal para uma lista bem cuidada |
| De 2% a 5% | A lista está envelhecendo ou não foi verificada antes do envio |
| Acima de 5% | Os provedores provavelmente já estão limitando você |
| Acima de 10% | Espere suspensão na maioria das plataformas de envio |

A prospecção fria fica na parte alta do normal porque os dados são comprados ou raspados em vez de coletados com consentimento. Abaixo de 3% é uma meta razoável para uma lista fria limpa, e se você trabalha com uma lista quente de pessoas que se cadastraram, deveria ficar bem abaixo de 1%.

## O passo que resolve quase tudo

Verifique a lista antes de enviar. Esse é o passo inteiro, e ele explica a grande maioria dos hard bounces em quase todas as listas que vemos.

Um verificador checa a sintaxe, confirma que o domínio existe e tem servidores de e-mail configurados, e depois checa se a caixa específica é real. Rode na lista inteira antes de uma campanha, e rode de novo em tudo que tiver mais de uns seis meses, porque endereços B2B envelhecem rápido. As pessoas mudam de emprego. As empresas se reestruturam. Um endereço bom em fevereiro não é necessariamente bom em agosto, e cerca de um quarto dos dados de contato B2B fica desatualizado em um ano. Para um único endereço, faça a [verificação de e-mail](/email-checker) grátis.

Há uma coisa para ficar de olho aqui, e é o motivo de muita gente verificar e ainda assim ter bounce. Cerca de 30% de uma lista empresarial fica em domínios catch-all, que aceitam e-mail para qualquer endereço possível, exista a caixa ou não. A maioria dos verificadores não consegue resolvê-los e os devolve como arriscados, desconhecidos ou accept-all. Aí você tem duas opções ruins: apagar um terço da lista, ou enviar e descobrir do jeito difícil.

Apagar é a mais segura das duas e é o que quase todo mundo faz, e por isso uma lista verificada ainda pode parecer magra. Um verificador que resolve endereços catch-all em um válido ou inválido de verdade tira você dessa escolha. É para isso que a Giggal.ai foi feita, com a sua [verificação catch-all](/catch-all-verification), e ela aplica o mesmo tratamento às caixas atrás de secure email gateways como Proofpoint e Mimecast, que falham de modo parecido por outro motivo.

## Depois, remova os endereços que nunca iam funcionar

Vale a pena tirar duas categorias mesmo quando elas passam como válidas.

Endereços de função são aliases compartilhados: info@, vendas@, suporte@, admin@. Normalmente existem, então passam na verificação, mas caem em uma caixa compartilhada que ninguém possui pessoalmente. O engajamento é fraco e as reclamações são mais altas que a média. Para prospecção fria, valem quase nada.

Endereços descartáveis vêm de serviços de e-mail temporário e existem por alguns minutos. Passam na verificação enquanto estão vivos e somem depois. Qualquer verificador decente marca as duas categorias separadas dos válidos, então é um passo de filtro, não trabalho a mais.

## Conserte a entrada, não só a lista

Se endereços ruins continuam chegando, limpar vira esteira.

Coloque verificação em tempo real nos seus formulários de cadastro, para que um erro de digitação seja pego enquanto a pessoa ainda está na página. A maior parte do valor está em pegar gmial.com e hotmial.com no momento em que são digitados, o que melhora a entregabilidade e também a experiência de quem realmente queria receber seus e-mails.

Tire o segundo campo de "confirme seu e-mail". Ele não funciona. As pessoas copiam e colam do primeiro campo, e você acrescentou atrito sem nenhum benefício.

Se você compra listas, verifique-as no dia em que chegam, não no dia em que envia. Os fornecedores vendem os mesmos dados várias vezes, e eles envelhecem na prateleira deles, não só na sua.

## O trabalho de autenticação

Isso não reduz bounces diretamente, e vale deixar isso claro, porque é recomendado o tempo todo como solução para bounce. SPF, DKIM e DMARC controlam se os servidores de destino confiam que você é quem diz ser. Se estiverem errados, as mensagens são recusadas ou vão para o spam, o que em alguns relatórios aparece junto com os bounces e confunde o diagnóstico.

Configure direito, confira uma vez com qualquer um dos verificadores de DMARC gratuitos e depois pare de pensar nisso. Se os seus bounces são erros de caixa inexistente, nenhum trabalho de DNS vai ajudar.

## Aqueça o domínio se ele for novo

Um domínio de envio recém-criado que manda 5.000 mensagens no primeiro dia vai ser limitado, e a limitação produz soft bounces que parecem problema de lista.

Comece com volume baixo e aumente ao longo de duas a quatro semanas. A maioria das plataformas de envio já automatiza isso. Se a sua não, aumente à mão e resista à vontade de pular etapas, porque a reputação que você está construindo é o que decide se a próxima campanha chega.

## Uma sequência que funciona

Leia a divisão entre hard e soft da sua última campanha. Verifique a lista inteira, incluindo a parte catch-all, em vez de descartá-la. Remova endereços de função e descartáveis. Coloque verificação no formulário de cadastro para o problema não voltar. Confira SPF, DKIM e DMARC uma vez. Aqueça o domínio se ele for novo. Depois envie, leia os novos números e repita a verificação a cada trimestre.

A maioria das listas sai de um número desagradável para um aceitável só com o segundo passo. O resto da sequência existe para ela não voltar a piorar.

Se quiser ver onde a sua lista atual está, a Giggal.ai dá 1.000 créditos grátis sem cartão, e eles funcionam também em um envio em massa. Leitura relacionada: [o que é um endereço catch-all](/blog/what-is-a-catch-all-email-address), [o que arriscado significa em um relatório de verificação](/blog/what-does-risky-mean-in-email-verification) e [uma boa taxa de bounce para cold e-mail](/blog/good-bounce-rate-for-cold-email).
