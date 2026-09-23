---
title: "Verificar e-mails atrás de gateways de segurança"
description: Proofpoint, Mimecast e Barracuda aceitam qualquer endereço e quebram a checagem comum. Veja o que acontece nesses domínios e como obter uma resposta real.
slug: verificar-emails-atras-de-gateways-de-seguranca
date: 2026-09-23
keyword: verificar e-mails atrás de gateways de segurança
cta: Recupere os contatos atrás de gateways
---

Se você já exportou um relatório de verificação e percebeu que um número suspeito dos seus melhores contatos enterprise voltou como desconhecido, há uma boa chance de um secure email gateway estar no caminho. Não um domínio catch-all, embora o sintoma seja idêntico. Um gateway.

A diferença importa porque a solução é outra, e porque os contatos atrás de gateways costumam ser justamente os que você queria. Empresas pequenas raramente usam um. Bancos, seguradoras, hospitais, universidades e a maior parte da Fortune 500 usam.

## O que o verificador faz quando falha

Uma verificação padrão é uma conversa curta. Seu verificador se conecta ao servidor de e-mail listado nos registros MX do domínio, cumprimenta, informa um remetente, depois informa o destinatário e espera. Um servidor que mantém uma lista real das suas caixas responde com honestidade. Diz sim para um endereço que existe e não para um que não existe, e seu verificador anota a resposta.

Um secure email gateway é uma camada de filtragem na frente do servidor de e-mail real. Toda mensagem para o domínio chega primeiro ao gateway, é analisada em busca de malware, phishing e violações de política, e só então é repassada para dentro. Proofpoint, Mimecast, Barracuda, Cisco e uma dúzia de fornecedores menores funcionam assim.

O gateway não tem motivo para saber quais caixas existem. O trabalho dele é filtrar, não consultar diretório. Então, quando seu verificador pergunta por um destinatário específico, o gateway aceita. Aceita endereços reais, aceita erros de digitação, aceita nomes de pessoas que saíram em 2019. A aceitação acontece no perímetro, e a decisão sobre a existência da caixa acontece em algum lugar lá atrás, onde seu verificador nunca chega.

Visto de fora, esse comportamento é indistinguível de um domínio catch-all. Mesma conversa, mesma resposta, mesmo resultado inútil.

## Por que "arriscado" é o lugar errado para parar

A maioria dos verificadores responde a isso marcando o endereço. O rótulo varia por fornecedor. Você vai ver risky, unknown, accept-all, catch-all ou ok_for_all, dependendo de qual exportação está lendo. O significado é o mesmo em todos os casos: não conseguimos saber.

Como resposta, é honesta. O problema é o que vem depois. As ferramentas de envio costumam tratar esses rótulos como um não suave, e a maioria das pessoas faz o mesmo, porque ninguém quer apostar a reputação de remetente num talvez. Então os endereços são filtrados da campanha e esquecidos em silêncio.

Numa lista B2B isso é cerca de 30% dos seus contatos. Numa lista puxada para enterprise é mais. Você pagou para conseguir esses contatos e pagou de novo para verificá-los, e o resultado foi um dar de ombros.

## O que uma checagem que entende gateways faz de diferente

Resumindo: você para de fazer ao gateway uma pergunta que ele não sabe responder e encontra outra pergunta que ele sabe.

Gateways não são mudos. Eles se comportam segundo padrões que dependem do produto, da configuração e do endereço específico. O tempo de resposta muda entre um endereço que o gateway vai acabar encaminhando e um que vai acabar recusando. Os códigos de erro e o texto exato deles mudam entre fornecedores e entre versões. Alguns gateways mostram uma recusa mais tarde na transação, depois do ponto em que a maioria dos verificadores para de ouvir. Alguns se comportam de forma diferente para uma caixa real e para uma sequência aleatória no mesmo domínio, se você souber o que comparar.

Ler esses sinais significa primeiro identificar o gateway e depois aplicar uma checagem feita para aquele produto específico em vez da genérica. Por isso a cobertura de gateways costuma ser informada como um número. A Giggal.ai detecta quinze, entre eles Proofpoint, Mimecast e Barracuda. Outras ferramentas que tentam isso citam três ou cinco. Um verificador que não cita nenhum quase certamente devolve o resultado genérico e o marca como arriscado.

Vale ser direto sobre os limites. Isso é inferência a partir do comportamento observado, não consulta de diretório, então não é infalível, e nenhum fornecedor honesto vai dizer o contrário. O que ela faz de forma confiável é transformar um segmento grande e inutilizável em um majoritariamente utilizável, o que é uma afirmação diferente e mais modesta do que perfeição.

## Descobrir quanto da sua lista é afetado

Você não precisa de ferramenta para saber se os gateways são o seu problema. Precisa dos registros MX dos domínios da sua lista.

Pegue a parte de domínio de cada endereço, remova duplicados e consulte os registros MX de cada um. Um domínio atrás do Proofpoint aponta para hostnames com pphosted ou ppe-hosted. Domínios Mimecast apontam para hosts mimecast.com, geralmente com um código de região. Barracuda aparece como barracudanetworks.com. Cisco aparece como iphmx.com. Domínios Microsoft 365 e Google Workspace apontam para hosts outlook.com e google.com, respectivamente, e esses não são gateways, embora ainda possam estar configurados como catch-all.

Cruze essa lista com os endereços em que seu verificador desistiu. Se a sobreposição for grande, o gateway é a explicação, e rodar a mesma ferramenta de novo não vai mudar o resultado.

## Escolher uma ferramenta para isso

Três perguntas separam um verificador que resolve isso de um que não resolve.

Ele cita os gateways que detecta? Um fornecedor que faz trabalho real aqui publica uma lista ou ao menos um número, porque é exatamente isso que está vendendo. Linguagem vaga sobre detecção avançada sem produtos citados geralmente significa detecção, não resolução: a ferramenta consegue dizer que há um gateway e mesmo assim não consegue dizer se a caixa é real.

Ele devolve válido ou inválido, ou devolve um rótulo? Pergunte especificamente como fica a saída para um endereço atrás do Mimecast. Se a resposta for uma marcação de arriscado com uma pontuação de confiança, você comprou um rótulo um pouco melhor.

Quanto custa nos endereços que exigem o trabalho? Resolver gateways e catch-all custa mais para o fornecedor, então a maioria cobra de outro jeito. Alguns cobram um múltiplo do crédito padrão. Outros descontam de uma cota separada e menor, que acaba antes da padrão. Nenhuma das duas coisas é absurda, mas é bom saber antes de subir uma lista com 40% de domínios enterprise. A Giggal.ai cobra todas as verificações a 1 crédito fixo por endereço, do mesmo saldo de todo o resto.

## A sequência prática

Passe sua lista pelo que você usa hoje e guarde a exportação. Separe cada linha que voltou como arriscada, desconhecida ou accept-all. Confira os registros MX desses domínios para ver quantos são gateways e não simples catch-all. Depois passe só esse segmento por uma ferramenta feita para isso e compare as duas exportações lado a lado.

A comparação é o que importa. Todo fornecedor, nós incluídos, faz promessas de precisão que soam parecidas numa página de preços. O único número que significa algo é quantos dos seus próprios contatos dados como mortos voltam à vida, e se os marcados como válidos realmente aceitaram e-mail quando você enviou.

Se quiser testar, a Giggal.ai dá 1.000 créditos grátis sem cartão, e eles funcionam num envio em massa em vez de um endereço por vez, que é a única forma de esse teste dizer alguma coisa. Para um único endereço, use a [verificação de e-mail](/email-checker). Você também pode ler mais sobre [como verificamos domínios catch-all e accept-all](/catch-all-verification), ou sobre a [abordagem de verificação SEG](/seg-email-verification) (em inglês) em mais detalhe.
