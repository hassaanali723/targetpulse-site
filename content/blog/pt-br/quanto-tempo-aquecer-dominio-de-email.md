---
title: Quanto tempo leva para aquecer um domínio de e-mail antes de uma campanha
seoTitle: Quanto tempo para aquecer um domínio de e-mail antes da campanha (2026)
description: "Reserve de 2 a 4 semanas de aquecimento para um domínio novo, depois que ele envelhecer. Prazos por situação, um plano dia a dia e os sinais de que está pronto."
slug: quanto-tempo-aquecer-dominio-de-email
date: 2026-10-19
updated: 2026-10-19
keyword: quanto tempo para aquecer um domínio de e-mail
image: /blog/covers/pt-br/quanto-tempo-aquecer-dominio-de-email.webp
imageAlt: Quanto tempo para aquecer um domínio de e-mail, cerca de 30 dias de idade do domínio, 2 a 4 semanas de aumento gradual e envio quando os bounces ficam abaixo de 2 por cento
cta: Verifique a lista da sua primeira campanha antes de enviar
---

Um domínio de e-mail novo precisa de cerca de 2 a 4 semanas de aquecimento antes de uma campanha real. Essa contagem só deve começar depois que o domínio tiver algumas semanas de idade. Uma caixa de e-mail nova em um domínio que já envia e-mails normais de trabalho costuma ficar pronta em cerca de 2 semanas. Se você quer saber quanto tempo leva para aquecer um domínio de e-mail antes de uma campanha, esses são os números para planejar. Depois, as suas próprias taxas de bounce e de reclamação decidem quando você está pronto de fato.

Nenhum provedor de e-mail publica uma duração oficial de aquecimento. Google, Microsoft e Yahoo não dão um número de dias para e-mails enviados de caixas normais. Os números que você encontra na internet, de 14 dias a 12 semanas, vêm principalmente de empresas que vendem ferramentas de aquecimento. Este guia mostra em que cada prazo se baseia, para você escolher o certo para a sua situação.

Se você precisa primeiro do básico sobre o que é aquecimento, comece pelo nosso verbete de glossário sobre [aquecimento de e-mail](/glossary/email-warmup).

## Quanto tempo aquecer um domínio de e-mail, por situação

O prazo certo depende do que é novo: o domínio, a caixa de e-mail, a conta no seu provedor de e-mail ou o IP de envio.

| Situação | Planeje | Em que se baseia |
|---|---|---|
| Domínio totalmente novo, caixas novas | Deixe o domínio envelhecer cerca de 30 dias, depois 2 a 4 semanas de aumento gradual | A Spamhaus coloca domínios recém-registrados em uma lista de bloqueio nas primeiras 24 horas. O especialista em entregabilidade Al Iverson recomenda um domínio com pelo menos 30 dias antes do aquecimento. |
| Caixa nova em um domínio que já envia e-mails normais | Cerca de 2 semanas de aumento gradual | O domínio já tem histórico de envio. Só o volume da caixa nova é novo. |
| Nova conta do Microsoft 365 (tenant) | 60 dias até o limite total de envio externo | A Microsoft está reduzindo o limite de destinatários externos para 10% nos primeiros 30 dias de um tenant e para 25% do dia 31 ao 60. Tenants de teste caem para 500 destinatários externos por dia. |
| Domínio voltando depois de uma pausa | Recomece devagar, como se fosse novo | A Twilio SendGrid diz para aquecer um IP de novo depois de mais de 30 dias sem envios. |
| IP dedicado em uma plataforma de e-mail | 30 a 45 dias, seguindo o cronograma da plataforma | O Amazon SES faz o aumento em 45 dias, a Twilio SendGrid em 41 dias e o Mandrill, do Mailchimp, em cerca de 30 dias. O Postmark prevê de 3 a 6 semanas. |

Os limites do Microsoft 365 importam mais para equipes que criam um tenant novo só para prospecção. A Microsoft anunciou a mudança em agosto de 2026 e está aplicando a mudança entre meados de setembro e o fim de novembro de 2026. Até que um tenant novo tenha dois meses, ele não consegue enviar com volume externo total, diga o que disser a sua ferramenta de aquecimento.

![Prazos de aquecimento de domínio de e-mail por situação: domínio totalmente novo, caixa nova em um domínio existente, novo tenant do Microsoft 365, domínio pausado e IP dedicado](/blog/fig-pt-br-warm-up-time-by-situation.webp)

## Por que os números da internet não batem

Pesquise essa pergunta e você vai encontrar 14 dias, 3 semanas, no mínimo 30 dias, 4 a 6 semanas e 45 dias. Essa variação tem três motivos.

Primeiro, não existe um número oficial para copiar. As diretrizes para remetentes do Google dizem para "começar com um volume baixo de envio para usuários engajados e aumentar o volume aos poucos ao longo do tempo". Elas não dizem por quanto tempo. As boas práticas para remetentes do Yahoo não falam de aumento gradual.

Segundo, alguns números são atribuídos a fontes que não os contêm. Alguns guias atribuem à Microsoft um prazo de "4 a 8 semanas" e uma regra de aumentar o volume 1,5 vez a cada etapa. Não encontramos nenhum desses números em nenhuma página da Microsoft. O único período de aumento gradual que a Microsoft publica é o do seu produto de e-mail do Azure Communication Services: "de duas a quatro semanas".

Terceiro, a maioria das páginas que aparecem para essa pergunta pertence a empresas que vendem ferramentas de aquecimento. Um período recomendado mais longo também significa mais semanas de assinatura paga.

O comportamento real dos remetentes é bem mais curto do que os conselhos. A Smartlead analisou mais de 850 milhões de e-mails enviados pela sua plataforma no primeiro semestre de 2026. Ela concluiu que "o remetente médio aquece uma caixa nova por 8 dias antes da primeira campanha, contra 9,4 dias um ano antes". A própria Smartlead observa que isso é o que os remetentes fazem, e não um mínimo seguro comprovado.

## O que decide quanto tempo o seu aquecimento leva

Cinco fatores afetam o prazo.

**Idade do domínio.** Um domínio registrado nesta semana não tem histórico nenhum. A Spamhaus coloca domínios recém-registrados e domínios que estavam inativos em uma lista de bloqueio nas primeiras 24 horas, e alguns servidores de destino usam essa lista. Comprar os seus domínios de prospecção um mês antes de precisar deles não custa nada e elimina esse risco.

**Quanto você precisa enviar.** O Google diz que "quanto mais e-mails você envia, mais devagar deve aumentar o volume de envio". Uma equipe que precisa de 30 e-mails por dia em uma caixa termina muito antes de uma equipe que precisa de 3.000.

**Com que frequência você envia.** O Google também diz que você pode "aumentar o volume de envio mais rápido quando envia todos os dias em vez de toda semana". Um domínio que envia um pouco em todos os dias úteis cria histórico mais rápido do que um que envia em picos semanais.

**Quais provedores os seus destinatários usam.** E-mails para Gmail, Outlook.com e servidores de empresas são avaliados separadamente. O Amazon SES observa que, com alguns provedores, "você pode construir uma reputação positiva em cerca de duas semanas, enquanto com outros pode levar até seis semanas".

**Qualidade da lista.** Bounces e reclamações de spam durante o aquecimento atrasam o prazo, às vezes em semanas. Esse é o fator que a maioria das equipes consegue controlar diretamente, e falamos dele mais abaixo.

## Um plano de aquecimento dia a dia

Um aumento seguro cresce em passos pequenos e mantém cada passo por tempo suficiente para ver os resultados. O guia de aquecimento de domínio da Customer.io usa passos de cerca de 1,5 vez o volume anterior, e cada etapa dura de 2 a 3 dias. Este é esse padrão para uma caixa que quer chegar a 50 cold e-mails por dia.

| Dias | E-mails por dia | Avance só se |
|---|---|---|
| Antes do dia 1 | Domínio envelhecido, SPF, DKIM e DMARC configurados, e-mails reais circulando | A autenticação passa em um e-mail de teste |
| 1 a 3 | 10 | Nenhum hard bounce, nenhuma reclamação de spam |
| 4 a 6 | 15 | Taxa de bounce abaixo de 2% |
| 7 a 9 | 22 | Respostas chegando, nenhum adiamento |
| 10 a 12 | 33 | Taxa de bounce abaixo de 2%, taxa de spam abaixo de 0,08% |
| 13 a 15 | 50 | O mesmo que acima, e depois mantenha esse nível |

Envie primeiro para os seus contatos mais engajados. A orientação do Google é começar "com usuários engajados". Na prática, isso significa pessoas que conhecem você, clientes atuais e quem respondeu recentemente.

Duas regras fazem o plano funcionar. Se uma etapa vai mal, repita a etapa em vez de avançar. E envie em todos os dias úteis. A Mailgun lembra que os seus limites de aquecimento pressupõem envio diário: se você para, "não pode retomar com o limite do dia oito".

Se você precisa de mais de 50 e-mails por dia, acrescente mais caixas aquecidas em vez de forçar uma única caixa.

![Um plano de aquecimento de e-mail dia a dia, de 10 a 50 e-mails por dia em passos de cerca de 1,5 vez, com as verificações de taxa de bounce e de spam que liberam cada passo](/blog/fig-pt-br-warm-up-ramp-schedule.webp)

## Como saber que o seu domínio está pronto

Um domínio está pronto quando os números continuam saudáveis enquanto o volume sobe. Confira estes pontos antes da primeira campanha real:

- **Taxa de bounce abaixo de 2%.** A Customer.io diz que taxas de bounce acima de 2% "indicam problemas de higiene de lista que você deve resolver antes de avançar". O nosso [guia de taxa de bounce para cold e-mail](/blog/good-bounce-rate-for-cold-email) explica as faixas.
- **Taxa de reclamação de spam abaixo de 0,08%.** Essa é a meta de aquecimento da Customer.io. O limite rígido do Google para o Gmail é 0,3%, então ficar bem abaixo dele dá margem para erros.
- **Nenhum erro de limite de taxa.** Se o Gmail devolve o código 421 4.7.28, ele "detectou um volume incomum de e-mails" vindo de você. Diminua o ritmo. O conselho do Google é reduzir o volume até os erros pararem e "depois aumentar devagar de novo".
- **A autenticação passa.** Envie um teste para uma conta do Gmail, abra "Mostrar original" e confira se SPF, DKIM e DMARC dizem PASS. O nosso [guia de SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-explained) explica cada registro.
- **Respostas reais estão chegando.** Respostas de pessoas reais são um sinal melhor do que qualquer pontuação em um painel.

O Google Postmaster Tools pode ajudar, com uma limitação. O painel de status de conformidade está aberto a todos os remetentes. Mas o Google diz que os dados podem faltar "nos dias em que o volume de e-mails enviados é baixo", que é exatamente a situação durante o aquecimento. Não espere o Postmaster Tools mostrar dados para confiar nos seus próprios números de bounce e de reclamação.

## Ferramentas de aquecimento deixam o processo mais rápido?

Ferramentas automáticas de aquecimento enviam e-mails entre uma rede de caixas. Os e-mails são abertos, respondidos e tirados do spam automaticamente. A ideia é dar ao seu domínio um engajamento positivo antes de a campanha real começar.

As evidências de que isso encurta o aquecimento são fracas:

- **O Google não usa aberturas.** As diretrizes para remetentes dizem: "O Google não rastreia taxas de abertura."
- **O engajamento artificial pode não contar.** A Customer.io, uma plataforma de e-mail, afirma que "os provedores de caixa de entrada detectam engajamento artificial e não dão nenhum crédito de reputação por ele". Ela não oferece suporte a esses serviços.
- **E-mails de aquecimento chegam de um jeito diferente dos e-mails reais.** Os próprios dados da Smartlead mostram que os e-mails de aquecimento chegam à caixa de entrada cerca de 99% das vezes. A Smartlead acrescenta que essa é a entrega dos e-mails de aquecimento, "não das campanhas de cold e-mail".
- **O Google já reagiu antes.** A GMass, uma ferramenta de e-mail, diz que no outono de 2022 (no hemisfério norte) o Google mandou desligar o seu sistema de aquecimento, sob pena de perder o acesso à API do Gmail.

Google e Microsoft não publicaram nenhuma regra específica sobre ferramentas de aquecimento. Se você usa uma, trate a pontuação de caixa de entrada dela como uma métrica da ferramenta, não como prova de que a sua campanha vai chegar à caixa de entrada. Conversas reais com contatos reais criam o histórico que conta.

## O que o aquecimento não resolve: a lista da sua primeira campanha

Um envio ruim pode desfazer semanas de aquecimento. A causa mais comum é a lista da primeira campanha. Listas de leads envelhecem conforme as pessoas mudam de emprego e as empresas desativam caixas. Envie para algumas centenas de endereços antigos no dia 16 e a taxa de bounce pode passar bem de 2%.

Bounces nessa fase atingem um domínio que só tem duas semanas de histórico. Não há histórico bom suficiente para compensar. O Google pede aos remetentes que reduzam o volume quando os bounces sobem, então o aumento gradual precisa recomeçar.

Por isso, confira a lista antes da primeira campanha, e não depois que os bounces chegarem:

1. Passe a lista por uma [verificação de e-mail](/email-checker) ou por uma [limpeza de lista de e-mail](/email-list-cleaning) (em inglês) completa.
2. Remova endereços inválidos, descartáveis e de função.
3. Mantenha os endereços catch-all em um grupo separado e mais lento. Um domínio catch-all aceita qualquer endereço, então uma verificação básica não consegue dizer se a pessoa existe. A [verificação catch-all](/catch-all-verification) consegue.
4. Envie a primeira campanha para a parte mais limpa da lista e depois amplie.

## Depois do aquecimento: mantenha o volume estável

O aquecimento não termina com uma troca única para o volume total. O Google pede aos remetentes que "enviem e-mails em um ritmo constante" e que "evitem enviar e-mails em picos". Ele dá um exemplo claro do que não fazer: "dobrar de repente os volumes enviados antes pode resultar em limitação de taxa ou em queda de reputação".

O Amazon SES dá o mesmo conselho para os seus IPs dedicados: "Você deve evitar enviar grandes volumes de e-mail logo depois que o processo de aquecimento terminar." Cresça a partir do último nível do aquecimento com os mesmos passos pequenos e continue enviando em um ritmo regular nos dias úteis.

## Perguntas frequentes

**Posso aquecer um domínio de e-mail em 7 dias?**
Você pode começar a enviar pequenas quantidades depois de uma semana, e muitos remetentes fazem isso. Os dados da Smartlead colocam a média em 8 dias. Mas um aquecimento de 7 dias em um domínio totalmente novo dá muito pouco histórico para absorver um envio ruim. Se o domínio é novo, planeje pelo menos 2 semanas de aumento gradual depois que ele envelhecer.

**Quantos e-mails por dia devo enviar durante o aquecimento?**
Comece com cerca de 10 por dia por caixa e cresça cerca de 1,5 vez a cada 2 ou 3 dias, como no plano acima. Mantenha o nível de que você precisa. Guias de prospecção a frio costumam limitar uma caixa a 30 a 50 e-mails por dia.

**Um domínio antigo precisa de aquecimento?**
Menos, se ele já envia e-mails normais todos os dias. Um domínio que ficou parado por um mês ou mais deve ser tratado quase como um domínio novo. A Twilio SendGrid usa 30 dias sem envios como o ponto em que um IP precisa ser aquecido de novo.

**Devo manter o aquecimento rodando depois que a campanha começar?**
Mantenha os seus envios estáveis e reais. Os fornecedores de ferramentas de aquecimento costumam recomendar deixar um nível baixo de aquecimento rodando. Respostas reais e uma lista limpa importam mais do que o volume de aquecimento.

**O Google publica um plano oficial de aquecimento?**
Não. O Google diz aos remetentes para começar com pouco volume para destinatários engajados, aumentar devagar e evitar picos repentinos. Ele não dá um número de dias.

**Por que os meus e-mails estão dando bounce durante o aquecimento?**
Normalmente por causa da lista, não do aquecimento. Confira os endereços com uma [verificação de e-mail](/email-checker) e veja por que cold e-mails dão bounce [neste guia](/blog/why-cold-emails-bounce).
