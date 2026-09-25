---
title: "Qual a precisão dos verificadores de e-mail?"
description: Todo verificador diz entre 97 e 99 por cento. O que esse número mede, por que todos se parecem e como testar uma ferramenta na sua própria lista.
slug: qual-a-precisao-dos-verificadores-de-email
date: 2026-09-23
keyword: precisão dos verificadores de e-mail
image: /blog/covers/pt-br/qual-a-precisao-dos-verificadores-de-email.webp
imageAlt: Qual a precisão dos verificadores de e-mail?
cta: Teste na sua própria lista
---

Abra a página de preços de dez verificadores de e-mail quaisquer e você vai encontrar dez promessas de precisão entre 97% e 99,9%. Nós também publicamos uma. Os números ficam tão próximos que quase não trazem informação, um resultado estranho para uma métrica que deveria ajudar você a escolher.

A semelhança não é conspiração. Ela acontece porque não existe uma definição comum do que está sendo medido, então cada fornecedor escolhe uma medição verdadeira e favorável, e medições verdadeiras e favoráveis acabam convergindo.

## O que o número costuma medir

A definição comum é algo assim: dos endereços para os quais demos um resultado definitivo, que parcela acertamos. Leia com atenção, porque essa condição faz um trabalho enorme.

Endereços que a ferramenta se recusou a julgar não entram no denominador. Se um verificador devolve válido ou inválido para 70% da sua lista e marca os outros 30% como arriscados, a precisão dele é calculada sobre os 70%. O terço difícil, justamente a parte em que você precisava de ajuda, fica fora da nota por construção.

Por isso a precisão sozinha diz muito pouco, e por isso um segundo número importa pelo menos tanto quanto: a cobertura, ou seja, a parcela da lista sobre a qual a ferramenta aceitou se comprometer. Uma ferramenta com 99% de precisão e 70% de cobertura faz menos por você do que uma com 97% de precisão e 95% de cobertura, mesmo que o primeiro número pareça melhor. Pouquíssimos fornecedores publicam a cobertura. O Anymail Finder publica, com 86,4% de cobertura ao lado de 98,9% de precisão, e esse par é mais útil do que qualquer um dos dois números sozinho.

## Por que toda ferramenta acerta na parte fácil

Num domínio comum, com um servidor de e-mail normal, a verificação está praticamente resolvida. O servidor mantém uma lista das suas caixas e responde com honestidade quando perguntado, então o verificador lê a resposta e anota. Não há muito espaço para um fornecedor ser melhor ou pior nisso.

Ou seja, a precisão anunciada mede sobretudo o desempenho na parte do trabalho que não é difícil. As diferenças entre ferramentas aparecem em outro lugar.

## Onde elas realmente diferem

Duas categorias quebram a checagem padrão, e o modo como uma ferramenta lida com elas é a verdadeira diferença de produto.

Domínios catch-all aceitam e-mail para qualquer endereço possível, real ou não. O servidor é configurado para aceitar tudo, para que aliases compartilhados, erros de digitação e funcionários que saíram caiam em algum lugar. Pergunte sobre uma caixa que nunca foi criada e ele diz sim. Cerca de 30% de uma lista B2B típica fica em domínios assim.

Secure email gateways produzem o mesmo sintoma por outro motivo. Proofpoint, Mimecast, Barracuda e produtos parecidos filtram o e-mail no perímetro e aceitam tudo antes de decidir o que fazer, então a aceitação que você recebe não diz nada sobre a existência da caixa. Domínios enterprise estão muito presentes aqui, o que significa que os contatos que mais importam para você são os mais afetados.

Juntas, essas duas categorias são onde uma ferramenta de verificação justifica o preço ou não.

## Como ler direito a promessa de um fornecedor

Três perguntas passam pelo marketing.

Qual é o denominador? Pergunte se o número de precisão inclui os endereços devolvidos como arriscados ou desconhecidos. Se não incluir, pergunte que porcentagem de uma lista típica cai nesse grupo. Um fornecedor que não responde à segunda pergunta já disse alguma coisa.

O teste foi independente? A maioria dos benchmarks publicados é feita pelos próprios fornecedores, e esses benchmarks tendem muito a colocar o fornecedor em primeiro lugar. Citamos um neste site, um teste da LeadMagic de fevereiro de 2026 com 10.000 endereços B2B reais, 28% em domínios catch-all. São dados realmente úteis, e a LeadMagic se colocou em primeiro lugar nele, o que você deve levar em conta. A Giggal.ai não estava entre as ferramentas medidas.

Precisão significa o mesmo que entregabilidade? Não. Uma caixa pode existir e ainda assim recusar sua mensagem por filtragem, reputação ou conteúdo. A verificação diz que o endereço é real. Ela não promete que a mensagem chega. Fornecedores que misturam isso vendem algo que não podem entregar.

## Testar você mesmo, a única coisa que resolve

Leva uma tarde e vale mais do que qualquer promessa em qualquer página de preços.

Monte uma amostra de uns 500 endereços dos seus próprios dados, e não de um conjunto de teste público. Misture de propósito: alguns que você sabe que estão ativos porque essas pessoas já responderam, alguns que você sabe que estão mortos por bounces anteriores, e uma boa parte de domínios catch-all e enterprise. Os endereços sabidamente bons e sabidamente mortos são o seu controle, porque você pode conferir a resposta da ferramenta com um fato que já tem.

Passe essa amostra por duas ou três ferramentas. Depois compare três coisas.

Primeiro, os endereços conhecidos. Quantos ativos foram corretamente marcados como válidos, e quantos mortos corretamente como inválidos. Uma ferramenta que marca como inválidos seus contatos sabidamente ativos é pior do que inútil, porque você vai apagar leads reais por causa dela.

Segundo, a cobertura. Conte as linhas devolvidas como arriscadas, desconhecidas, accept-all ou catch-all. Esse número é a parte da sua lista em que a ferramenta não conseguiu ajudar, e costuma ser o número mais revelador de todo o exercício.

Terceiro, e só se puder, envie para uma parte do que cada ferramenta marcou como válido nos domínios catch-all e acompanhe a taxa de bounce real. É a única medição que testa a promessa e não o marketing, e é por isso que um plano grátis que só permite consultas individuais mal é um plano grátis. Você precisa de processamento em massa para fazer isso.

## O que nós afirmamos, e quanto isso vale

A Giggal.ai afirma 98,5% de precisão em listas empresariais comuns e taxas de bounce típicas abaixo de 3% numa lista limpa. São os nossos números, medidos por nós, e você deve tratá-los com a mesma desconfiança que aplica aos de todo mundo até rodar o teste acima.

Preferimos ser julgados pela cobertura. O objetivo do projeto era devolver válido ou inválido em endereços catch-all e protegidos por gateway em vez de um rótulo, em quinze gateways identificados, para que o grupo de risco seja pequeno e não um terço do arquivo. Se isso se sustenta nos seus dados é uma pergunta que a sua própria amostra de 500 endereços responde melhor do que esta página.

O plano grátis tem 1.000 créditos, sem cartão, e funciona num envio em massa justamente para que o teste seja possível. Para um único endereço, faça antes a [verificação de e-mail](/email-checker). Se quiser o contexto primeiro, explicamos [o que é um endereço catch-all](/blog/what-is-a-catch-all-email-address), [o que arriscado realmente significa](/blog/what-does-risky-mean-in-email-verification) e [como caixas protegidas por gateway são verificadas](/blog/how-to-verify-emails-behind-secure-email-gateways).
