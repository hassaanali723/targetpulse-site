---
title: "Hard bounce e soft bounce: o que cada um significa e o que fazer"
seoTitle: "Hard bounce e soft bounce: significado e o que fazer"
description: Hard bounce e soft bounce explicados de forma simples: como ler o código, por que as ferramentas classificam de jeitos diferentes e qual taxa é segura.
slug: hard-bounce-e-soft-bounce
date: 2026-09-27
updated: 2026-09-27
keyword: hard bounce e soft bounce
image: /blog/covers/pt-br/hard-bounce-e-soft-bounce.webp
imageAlt: Hard bounce e soft bounce, um 5 no código significa permanente e um 4 significa tentar de novo
cta: Encontre os hard bounces antes de enviar
---

Um hard bounce é uma falha permanente. O endereço de e-mail não existe, o domínio não existe, ou o servidor de destino bloqueou você. Se você enviar de novo, vai dar bounce de novo.

Um soft bounce é uma falha temporária. O endereço é real, mas algo impediu a entrega por enquanto. A caixa de entrada está cheia, o servidor está ocupado, ou o servidor pede para você tentar mais tarde. Se você enviar de novo, o e-mail costuma chegar.

Essas são as definições. Há mais três coisas que você precisa saber, e elas importam mais do que as definições:

- Cada ferramenta de envio usa regras diferentes. O mesmo bounce pode contar como hard em uma ferramenta e como soft em outra.
- Um endereço correto e ativo ainda pode dar hard bounce. Isso acontece quando a configuração do seu e-mail está errada, não o endereço.
- A taxa de bounce que faz sua conta ser suspensa nem sempre é a que você vê no relatório da campanha.

Este guia cobre os três pontos.

## Hard bounce e soft bounce: a diferença

| | Hard bounce | Soft bounce |
|---|---|---|
| O que significa | Permanente. O e-mail não será entregue | Temporário. Pode ser entregue em uma tentativa posterior |
| Código na mensagem de bounce | Começa com 5 (550, 5.1.1, 5.7.1) | Começa com 4 (421, 450, 4.2.2) |
| Causas comuns | Endereço não existe, domínio não existe, remetente bloqueado | Caixa cheia, servidor ocupado, e-mails demais de uma vez |
| O que sua ferramenta de envio faz | Para de enviar para esse endereço, normalmente na hora | Tenta de novo por um tempo, muitas vezes até 72 horas |
| O que você deve fazer | Remover o endereço. Não enviar de novo | Esperar. Remover só se continuar dando bounce |
| Dano à sua reputação | Alto. Muitos hard bounces dizem aos provedores que sua lista é ruim | Baixo para um bounce. Acumula se os mesmos endereços continuam dando bounce |

## O que é um hard bounce?

Um hard bounce significa que o servidor de destino recusou seu e-mail de vez. Tentar de novo não ajuda.

O padrão do e-mail, a RFC 5321, chama isso de falha permanente. As palavras exatas são que o remetente "should not retry", ou seja, não deve repetir a mesma solicitação.

Existem dois tipos de hard bounce. No relatório eles parecem iguais, mas precisam de correções diferentes.

**Tipo um: o endereço está errado.** A caixa não existe. Ou o domínio não existe. Ou o endereço está escrito errado. Uma lista verificada nunca deveria produzir esses bounces. Eles se parecem com isto:

- O Gmail diz: `550 5.1.1 The email account that you tried to reach does not exist`
- A Microsoft diz: `5.1.1 Bad destination mailbox address`
- A Microsoft também diz: `5.4.1 Recipient address rejected: Access denied`. A documentação da Microsoft explica esse código assim: "the recipient's address doesn't exist", o endereço do destinatário não existe.

Um endereço que foi encerrado quando alguém saiu da empresa também entra nesse grupo.

**Tipo dois: você está bloqueado.** O endereço é real. Mas o servidor de destino não aceita e-mail seu. Esses bounces têm códigos que começam com 5.7:

- `550 5.7.1` significa um bloqueio por política.
- `550 5.7.26` significa que o Gmail recusou seu e-mail porque seu domínio não está autenticado.
- `550 5.7.30` significa que seu e-mail falhou na verificação DKIM.

Sua ferramenta de envio conta esses como hard bounces, porque o código começa com 5. Mas o endereço está bom. O problema está do seu lado. Explicamos isso mais abaixo, porque desde 2025 essa é a causa de hard bounces que mais cresce em listas limpas.

## O que é um soft bounce?

Um soft bounce significa que o servidor de destino disse "agora não". A RFC 5321 chama isso de falha temporária. As palavras são: "the error condition is temporary and the action may be requested again", a condição de erro é temporária e a ação pode ser solicitada de novo. Sua ferramenta de envio leva isso ao pé da letra e tenta mais tarde.

Estas são as causas comuns, com os códigos que você vai ver:

- **Caixa cheia.** O Gmail diz `452 4.2.2 The recipient's inbox is out of storage space`. A pessoa pode apagar alguns e-mails e liberar espaço.
- **E-mails demais, rápido demais.** O Gmail diz `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Ou `421 4.7.28` quando vê e-mail demais vindo do seu IP. A Microsoft diz de `4.7.500` a `4.7.699 Access denied, please try again later` enquanto analisa sua atividade.
- **Greylisting.** Alguns servidores, e muitos secure email gateways, recusam o primeiro e-mail de um remetente que não conhecem. Depois aceitam na segunda tentativa. A espera costuma ser de uns 15 minutos.
- **Servidor fora do ar.** Um código `421` significa que o servidor não está disponível. Um `4.4.1` ou `4.4.2` significa que a conexão falhou ou o tempo esgotou.
- **E-mail expirado.** Um código `4.4.7` significa que seu servidor continuou tentando e depois desistiu. A RFC 5321 diz que os servidores devem continuar tentando por uns quatro ou cinco dias.

Um soft bounce é normal. Um soft bounce que se repete é um problema. Se uma caixa está "cheia" em todo envio por seis semanas, essa caixa não está cheia. Está abandonada. Toda ferramenta de envio acaba tratando assim.

## Como ler o código de uma mensagem de bounce

Toda mensagem de bounce tem um código. Quando você sabe ler, não precisa do rótulo de ninguém. Você vê por conta própria o que aconteceu.

Há dois códigos em cada mensagem.

**O primeiro código tem três dígitos**, como 550 ou 421. Aqui só o primeiro dígito importa. Um 4 significa temporário. Um 5 significa permanente.

**O segundo código tem três números com pontos**, como 5.1.1. O primeiro número repete a mesma regra: 4 é temporário, 5 é permanente. O segundo e o terceiro número dizem o motivo:

- `.1.1` significa que a caixa não existe (a parte antes do @ está errada).
- `.1.2` significa que o domínio não existe (a parte depois do @ está errada).
- `.2.2` significa que a caixa está cheia.
- `.7.1` significa que o servidor recusou você por causa de uma política.

![Como ler um código de bounce: o primeiro dígito diz se é hard ou soft, o código estendido diz o motivo, e a ação depende dos dois](/blog/fig-pt-br-bounce-code-reading.webp)
Leia o primeiro dígito para saber o tipo. Leia o código completo para saber o motivo. Depois aja de acordo com o motivo.

A tabela abaixo lista os códigos que você vai ver de verdade. O texto das mensagens foi copiado da documentação oficial do Gmail e da Microsoft.

| Código | Onde você vê | O que significa | Tipo | O que fazer |
|---|---|---|---|---|
| 550 5.1.1 | Gmail, Microsoft, quase todos os servidores | A caixa não existe | Hard | Remova o endereço |
| 5.1.2 | Qualquer servidor | O domínio não existe | Hard | Remova o endereço |
| 5.4.1 Recipient address rejected: Access denied | Microsoft | O endereço não existe | Hard | Remova o endereço |
| 550 5.2.1 | Gmail | A conta está inativa | Hard | Remova o endereço |
| 552 5.2.2 | Gmail | Caixa cheia e conta inativa | Hard | Remova o endereço |
| 452 4.2.2 | Gmail | Caixa cheia | Soft | Espere. Remova se continuar acontecendo |
| 450 4.2.1 | Gmail | A pessoa está recebendo e-mails demais | Soft | Espere |
| 421 4.7.28 | Gmail | E-mail demais vindo do seu IP | Soft | Envie mais devagar. Revise sua lista |
| 550 5.7.28 | Gmail | E-mail indesejado demais vindo do seu IP | Hard | Pare de enviar. Corrija sua lista e seu volume |
| 550 5.7.1 | Gmail, Microsoft | Bloqueado por uma política | Hard, mas o endereço está bom | Verifique sua autenticação e reputação |
| 550 5.7.26 | Gmail | Seu domínio não está autenticado | Hard, mas o endereço está bom | Configure SPF e DKIM |
| 550 5.7.30 | Gmail | Seu e-mail falhou no DKIM | Hard, mas o endereço está bom | Corrija sua configuração DKIM |
| 5.7.23 | Microsoft | Seu e-mail falhou no SPF | Hard, mas o endereço está bom | Corrija seu registro SPF |
| 5.7.606 a 5.7.649 | Microsoft | Seu IP de envio está banido | Hard, mas o endereço está bom | Peça à Microsoft para remover o banimento e corrija a causa |
| 4.7.500 a 4.7.699 | Microsoft | Atividade suspeita, bloqueado por enquanto | Soft | Espere. Libera sozinho se você for um remetente legítimo |
| 4.4.7 | Qualquer servidor | O e-mail expirou depois de dias de tentativas | Soft, mas desistiu | Remova o endereço se repetir |

Olhe a última coluna. Dois códigos podem ser ambos hard bounce e pedir ações opostas. Um `5.1.1` significa apague o endereço. Um `5.7.26` significa mantenha o endereço e corrija seu DNS.

## Por que o mesmo bounce é hard em uma ferramenta e soft em outra

As pessoas comparam taxas de bounce entre ferramentas e ficam confusas. Este é o motivo.

O servidor de destino envia um código. É só isso que ele faz. Depois, sua ferramenta de envio decide o que fazer com esse código. Cada ferramenta tem sua própria regra, e as regras são diferentes. O guia da Twilio diz isso com clareza: "not all ISPs adhere to that code consistently", nem todos os provedores seguem esse código de forma consistente.

Aqui estão quatro ferramentas populares e suas regras:

| Ferramenta | O que faz com um soft bounce | Quando um soft bounce vira hard bounce |
|---|---|---|
| Mailchimp | Tenta de novo e mantém o contato | Depois de 7 soft bounces se o contato nunca abriu nada. Depois de 15 se já abriu antes |
| HubSpot | Chama de "pending" e tenta por até 72 horas. Depois registra um soft bounce | Não automaticamente. Mas o HubSpot coloca "caixa cheia" no grupo de hard bounces, não de soft |
| SendGrid | Tenta de novo por até 72 horas | Depois de 72 horas para de tentar. Hard bounces vão para uma lista de bloqueio |
| Amazon SES | Tenta por um tempo e depois avisa que parou | Nunca automaticamente. Só hard bounces contam para sua taxa de bounce. Respostas automáticas não contam nada |

![Quatro plataformas de envio e suas regras sobre quando um soft bounce vira hard bounce](/blog/fig-pt-br-bounce-rules-by-platform.webp)
O mesmo código, quatro regras diferentes. Mude uma lista do Mailchimp para o HubSpot e o número de hard bounces muda, mesmo que os endereços sejam os mesmos.

Então uma caixa cheia é um soft bounce no Gmail. É um hard bounce no HubSpot. E no Amazon SES é um soft bounce que nunca vira hard. Se sua taxa de bounce mudar depois de trocar de ferramenta, confira as regras antes de culpar a lista.

A solução simples é parar de confiar no rótulo e ler o código. Toda ferramenta deixa você exportar a mensagem de bounce. O código dentro dela é o mesmo, não importa qual ferramenta coletou.

## Qual é uma taxa de hard bounce aceitável?

O limite é definido pela empresa que envia seu e-mail. A maioria não publica. O Amazon SES publica, e seus números são um bom guia de como os provedores pensam.

| Taxa de hard bounce | O que o Amazon SES faz |
|---|---|
| Abaixo de 2% | O nível abaixo do qual o SES manda você ficar "for best results", para os melhores resultados |
| 5% ou mais | Sua conta entra em revisão |
| 10% ou mais | Seu envio pode ser pausado até você corrigir |

Dois detalhes importam. O SES conta só hard bounces. Soft bounces e bounces por IP bloqueado não contam contra você. E o SES não usa uma janela de tempo fixa. Ele olha um volume típico do seu envio, então um remetente pequeno é julgado do mesmo jeito que um grande.

Reclamações de spam andam junto com bounces. As diretrizes para remetentes do Google dizem para manter sua taxa de reclamações abaixo de 0,10 por cento e nunca deixar chegar a 0,30 por cento. O Amazon SES revisa contas a 0,1 por cento e pode pausar a 0,5 por cento. Uma lista que dá hard bounce acima de 2 por cento normalmente recebe reclamações também. As duas coisas vêm da mesma causa: pessoas que não pediram seu e-mail, e endereços que ninguém conferiu.

O artigo sobre [referências de taxa de bounce de e-mail](/blog/how-to-reduce-email-bounce-rate) divide os limites seguros por tipo de e-mail e por origem da lista.

## Você deve remover os hard bounces da sua lista?

Sim. Na hora.

As palavras exatas da Amazon são: "you should immediately remove the recipient's email address from your mailing list", você deve remover imediatamente o endereço do destinatário da sua lista. A mesma página avisa que, se você continuar enviando para endereços com hard bounce, seu envio pode ser pausado. O Mailchimp nem dá escolha. Endereços com hard bounce são "cleaned from your audience automatically and immediately", limpos da sua audiência de forma automática e imediata, e nunca mais recebem nada.

Não tente de novo. Não guarde para a próxima campanha caso a caixa volte. Um endereço `5.1.1` que deu bounce no mês passado vai dar bounce no mês que vem. Cada tentativa extra diz ao provedor que você envia para endereços que não conhece.

Há uma exceção. Se o código for `5.7.26`, `5.7.30`, `5.7.23`, ou um código de IP banido como `5.7.6xx`, o endereço não é o problema. Apagar não resolve nada. Corrija sua autenticação ou sua reputação. Depois envie de novo para o mesmo endereço.

Soft bounces são o oposto. Deixe em paz. Sua ferramenta de envio vai tentar de novo sozinha. Se sua ferramenta não tem uma regra para bounces repetidos, crie uma. Um endereço que dá soft bounce em três envios seguidos em um mês não vai voltar. A regra de sete do Mailchimp é um limite seguro para qualquer um.

## Por que um endereço correto dá hard bounce?

Porque um hard bounce mede se o e-mail foi aceito. Ele não mede se o endereço existe. Quatro coisas causam um bounce 5xx em uma caixa real e ativa.

**Seu e-mail não está autenticado.** Em 5 de maio de 2025, a Microsoft começou a exigir SPF, DKIM e DMARC de qualquer domínio que envie mais de 5.000 e-mails por dia para endereços Outlook.com, Hotmail e Live. Primeiro ela moveu o e-mail fora do padrão para a pasta de lixo eletrônico. Depois começou a recusar com `550 5.7.15 Access denied, sending domain does not meet the required authentication level`. O Google exige os mesmos três registros de remetentes em massa. Os códigos `550 5.7.26` e `550 5.7.30` do Gmail são o que você vê do seu lado quando falta um registro. Todos esses códigos começam com 5. Então eles caem na sua coluna de hard bounce, mesmo que os endereços tivessem aceitado o e-mail.

**A empresa bloqueia endereços desconhecidos na porta.** O Microsoft Exchange pode ser configurado para recusar qualquer endereço que não esteja no diretório da empresa. Ele faz isso com `5.4.1 Recipient address rejected: Access denied`. Na maioria das vezes é um hard bounce de verdade. Às vezes é um funcionário novo cuja caixa ainda não foi criada. Por isso um verificador que confere a caixa em si dá uma resposta melhor do que o bounce.

**Há um secure email gateway na frente da caixa.** Muitas empresas passam todo o e-mail que chega por um [secure email gateway](/blog/what-is-a-secure-email-gateway) como Proofpoint, Mimecast ou Barracuda. O gateway responde pelo domínio inteiro. Ele analisa cada e-mail e recusa qualquer um que quebre uma de suas regras, normalmente com um código de política `5.7.1`. Isso é um hard bounce contra uma caixa que existe. Gateways também causam bounces atrasados. O gateway aceita o e-mail na porta sem conferir se a caixa existe. O bounce chega minutos ou horas depois, quando o servidor atrás do gateway não encontra a caixa. Seu relatório mostra um hard bounce, mas ele chegou depois do envio, não durante.

**O domínio é catch-all.** É o problema inverso. Um [domínio catch-all](/blog/what-is-a-catch-all-email-address) aceita e-mail para qualquer endereço, real ou não. Então ele nunca diz `5.1.1` na porta. O e-mail é aceito, depois dá bounce mais tarde, ou some sem aviso. Cerca de 30 por cento de uma lista B2B fica nesses domínios. É de lá que vêm os hard bounces que você não esperava.

Se quiser saber [por que e-mails dão bounce](/blog/why-cold-emails-bounce) em cold outreach especificamente, as causas se somam de outro jeito. Lá, a idade da lista causa a maior parte do dano.

## Como evitar hard bounces antes de enviar

Quase todo `5.1.1` em um relatório de campanha podia ter sido evitado. A caixa já tinha sumido antes de você apertar enviar. A verificação faz ao servidor de destino a mesma pergunta que o bounce faria, mas antes da campanha em vez de depois.

Um [verificador de endereços de e-mail](/email-checker) faz três checagens em ordem:

- **Sintaxe.** Pega coisas como `nome@gmail..com` antes que custem um envio.
- **Domínio.** Pega erros de digitação como `gmial.com` e domínios expirados.
- **Caixa.** Abre uma conexão com o servidor de destino e pergunta se ele aceita e-mail para aquele endereço exato. Se a resposta for `5.1.1`, é o mesmo bounce que você teria recebido na campanha. Mas não custa reputação, porque nenhum e-mail foi enviado.

A verificação padrão para de funcionar em um ponto. Em um domínio catch-all, o servidor diz sim para qualquer endereço. Então a checagem volta como "desconhecido" ou "arriscado", e você tem que adivinhar. O Giggal.ai foi construído para transformar essa parte da lista em uma resposta real: válido ou inválido. A página de [verificação catch-all](/catch-all-verification) explica como.

Gateways causam o mesmo problema. Um gateway aceita a pergunta do verificador para qualquer endereço, então uma checagem padrão volta como "desconhecido" ali também. O Giggal.ai confere esses endereços de outro jeito. O artigo sobre [verificar e-mails atrás de secure email gateways](/blog/how-to-verify-emails-behind-secure-email-gateways) explica o que o gateway faz e como a checagem passa por ele.

Para formulários de cadastro, adicione uma chamada de [verificação em tempo real](/public/docs) no envio do formulário. Um endereço digitado errado é pego enquanto a pessoa ainda está na página. É o único passo que reduz bounces em listas que você ainda nem montou.

Depois, cuide de dois tipos de endereço que passam na verificação mas ainda prejudicam você. Endereços de função como info@ e support@ existem, então passam. Mas ninguém é dono pessoal deles, e eles recebem mais reclamações. Endereços descartáveis passam enquanto existem e somem depois. Qualquer bom verificador marca os dois. Uma lista de [cold email](/blog/good-bounce-rate-for-cold-email) em particular deve tirá-los antes do primeiro envio.

## Perguntas frequentes

**Qual é a diferença entre taxa de hard bounce e taxa de soft bounce?**
Cada uma é aquele tipo de bounce dividido pelos e-mails que você enviou. A taxa de hard bounce é a que coloca você em apuros, porque mostra a qualidade da sua lista. O Amazon SES, por exemplo, só conta hard bounces quando decide revisar ou pausar uma conta. A taxa de soft bounce diz mais sobre sua velocidade de envio, seu volume e sua reputação. Leia separadamente.

**Devo apagar os e-mails que deram bounce?**
Apague na hora os hard bounces com códigos de endereço: `5.1.1`, `5.1.2`, `5.2.1` e parecidos. Mantenha os hard bounces com códigos de autenticação, `5.7.26`, `5.7.30` e `5.7.23`, e corrija sua autenticação. Mantenha os soft bounces e deixe a nova tentativa rodar. Remova qualquer endereço que dê soft bounce várias vezes seguidas.

**Um soft bounce pode virar hard bounce?**
Sim, de duas formas. O servidor de destino pode mudar a resposta. O Gmail informa uma caixa cheia como `452 4.2.2` enquanto a conta está ativa, e como `552 5.2.2` quando a conta fica inativa. Ou sua ferramenta de envio pode mudar o rótulo. O Mailchimp transforma um endereço em hard bounce depois de 7 soft bounces sem atividade, ou 15 com atividade.

**Soft bounces prejudicam a reputação do remetente?**
Um não. Um fluxo constante sim. Os provedores veem você enviando de novo e de novo para caixas que não conseguem receber. E uma taxa alta de soft bounce costuma ser um aviso por si só. Um código como `421 4.7.28` é o provedor dizendo diretamente para você desacelerar.

**Por que meu e-mail deu hard bounce se o endereço está correto?**
Quase sempre por causa da autenticação. O Gmail e o Outlook.com agora recusam e-mail em massa sem SPF, DKIM e DMARC. Essa recusa é um código 5xx, então sua ferramenta registra como hard bounce. Olhe o código. Se começar com `5.7`, o endereço não é o problema.

Um relatório de bounce só é útil se você souber ler. Leia o primeiro dígito. Depois leia o motivo. Depois aja de acordo com o motivo. Os endereços que dariam bounce com `5.1.1` são a parte fácil, porque você pode encontrá-los antes de enviar. Passe a lista pelo [Giggal.ai](/) primeiro. A coluna de hard bounce do seu próximo relatório vai ter quase só coisas que você não tinha como saber.
