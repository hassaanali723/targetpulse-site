---
title: "Melhores verificadores de e-mail de 2026, testados"
description: Seis verificadores de e-mail testados com endereços catch-all e protegidos por SEG, com a mecânica SMTP por trás de cada resultado e o preço de cada um.
slug: melhores-verificadores-de-email
date: 2026-09-23
keyword: melhores verificadores de e-mail
image: /blog/best-email-verification-tools-comparison-v2.png
imageAlt: As melhores ferramentas de verificação de e-mail de 2026 para endereços catch-all, accept-all e protegidos por SEG
cta: Resolva as linhas catch-all e SEG que os outros só marcam
---

## A versão curta

Este é um teste de seis ferramentas de verificação de e-mail com os endereços que derrubam a maioria dos verificadores. O ranking completo de 28 ferramentas por tratamento de catch-all, suporte a SEG e preço está no [guia das melhores ferramentas de verificação de e-mail](/alternatives) (em inglês).

A parte mais difícil de escolher uma ferramenta de verificação de e-mail em 2026 são os endereços catch-all e os protegidos por SEG. Cerca de 30% de uma lista B2B fica em domínios catch-all (também chamados de accept-all) ou protegidos por SEG, os dois casos em que o servidor de e-mail não conta ao verificador se uma caixa existe de verdade. Em domínios catch-all o servidor aceita qualquer endereço, então os verificadores devolvem Arriscado. Em domínios protegidos por SEG um gateway de segurança esconde o servidor real, então devolvem Desconhecido. Este guia explica do zero a verificação de catch-all e SEG e depois compara os seis melhores verificadores de 2026 pelo que importa: se eles realmente resolvem esses endereços ou só os marcam. Ele responde à pergunta real: existe uma forma verdadeira de verificar e-mails catch-all e protegidos por SEG e, se existe, por que nem toda ferramenta faz isso? As respostas vão ajudar você a escolher o verificador que combina com a sua lista.

## Primeiro, o que um verificador realmente pergunta

A verificação de e-mail é uma única pergunta ao servidor de e-mail do destino: você aceita e-mail para esta caixa exata?

Em um domínio comum o servidor responde com honestidade. Pergunte por uma caixa real e ele aceita, pergunte por uma que não existe e ele recusa com uma resposta "no such user". A partir dessa resposta a ferramenta devolve um resultado limpo: Válido ou Inválido.

Domínios catch-all e protegidos por SEG são as duas configurações em que o servidor se recusa a dar uma resposta direta. Eles falham por motivos diferentes e produzem resultados diferentes, e o resto deste guia é sobre como diferenciá-los.

## 1. O que é um domínio catch-all

Um domínio catch-all (ou accept-all) é configurado para aceitar e-mail enviado para qualquer endereço daquele domínio, exista a caixa ou não. Depois ele organiza, encaminha ou descarta em silêncio esse e-mail internamente.

Digamos que uma empresa mantenha brand.com como catch-all. Você escreve para uma caixa real, um alias de departamento ou um erro de digitação: jane@brand.com, sales@brand.com e xqwp@brand.com são todos aceitos.

Os três são aceitos. As empresas fazem isso de propósito para nunca perder uma mensagem por causa de um endereço mal digitado, e isso é comum em domínios do Google Workspace e do Microsoft 365. O efeito colateral é que um verificador não consegue mais provar que uma caixa específica existe.

**Por que as ferramentas marcam catch-all como Arriscado, e não como Desconhecido.** O servidor responde, só que responde "aceito" tanto para a caixa real quanto para o erro de digitação. O verificador recebe uma resposta, mas não tem como distinguir os dois, então os dois endereços são marcados como Arriscados. Se você enviar, ou dá bounce ou não dá, e a ferramenta deixa essa decisão com você.

![Verificação de e-mail em um domínio comum e em um domínio catch-all, e por que endereços catch-all são marcados como Arriscados](/blog/catch-all-vs-standard-domain.svg)
Em um domínio comum o servidor recusa um endereço falso, então o verificador devolve Válido ou Inválido. Um servidor catch-all aceita todos os endereços do mesmo jeito, então tanto a caixa real quanto o erro de digitação voltam como Arriscados.

Há um guia detalhado sobre o tema aqui: [O que é um e-mail catch-all](/blog/what-is-a-catch-all-email-address).

## 2. Por que o catch-all importa para a sua lista

Em uma lista B2B típica, cerca de 30% dos contatos ficam em domínios catch-all ou protegidos por SEG. Marcados como Arriscados, eles colocam você diante de uma escolha ruim:

- Você apaga, e joga fora compradores reais e alcançáveis escondidos nesses domínios.
- Você mantém e envia, e os endereços mortos entre eles dão bounce, derrubando sua reputação de remetente e sua entrega na caixa de entrada.

Esse é o problema inteiro. Uma ferramenta que deixa 30% da sua lista marcada não terminou o trabalho, ela devolveu para você a parte mais difícil. As ferramentas que valem o que custam são as que vão um passo além e resolvem esses endereços em um Válido ou Inválido de verdade, confirmando se a própria caixa existe, mesmo em um domínio que aceita tudo.

## 3. O que é um Secure Email Gateway (SEG)

Um Secure Email Gateway é uma camada de segurança que fica na frente do servidor de e-mail real de uma organização e filtra cada mensagem recebida contra spam, phishing e malware antes que ela chegue a uma caixa. A organização aponta o registro MX do domínio para o gateway, então todo e-mail passa primeiro pelo SEG e só o e-mail limpo segue para o servidor real.

### Quem usa, e por que alguns domínios têm e outros não

Um SEG é implantado pela equipe de TI ou de segurança da organização que recebe. Grandes empresas e qualquer organização que lida com dados sensíveis, finanças, saúde, escritórios de advocacia e governo, quase sempre têm um. Uma pequena startup no Google Workspace normalmente não tem. Esse é todo o motivo de alguns endereços serem protegidos por SEG e outros não: depende de a empresa do outro lado ter colocado um gateway na frente do seu e-mail. Não tem nada a ver com o endereço em si.

### Como saber se um domínio está atrás de um SEG

Normalmente dá para ler direto no registro MX. Se os servidores de e-mail de um domínio apontam para um provedor de gateway conhecido, esse domínio é protegido por SEG.

| Secure Email Gateway | Fornecedor | Impressão digital MX | Normalmente usado por |
|---|---|---|---|
| Proofpoint | Proofpoint | *.pphosted.com | Grandes empresas, finanças, saúde |
| Mimecast | Mimecast | *.mimecast.com | Empresas médias e grandes, advocacia |
| Barracuda | Barracuda | *.barracudanetworks.com | De pequenas a médias empresas |
| Secure Email | Cisco (IronPort) | *.iphmx.com | Grandes empresas, telecomunicações |
| Defender for O365 | Microsoft | *.mail.protection.outlook.com | Qualquer organização no Microsoft 365 |
| Email Security.cloud | Broadcom (Symantec) | *.messagelabs.com | Grandes empresas |
| FortiMail | Fortinet | varia conforme a instalação | TI padronizada em Fortinet |
| Sophos Email | Sophos | *.sophos.com | De pequenas a médias empresas |

As impressões digitais são os padrões comuns; algumas organizações passam o e-mail por um SEG sem um nome MX evidente, então o registro é um indício forte, não uma prova.

**Por que as ferramentas marcam e-mails protegidos por SEG como Desconhecidos.** O gateway intercepta a sonda e nunca revela se a caixa por trás dele existe. Sem uma resposta útil do servidor real, uma ferramenta padrão não tem o que avaliar, então devolve Desconhecido. Em vez de um 250 claro (existe) ou 550 (no such user), o gateway costuma devolver respostas temporárias ou evasivas que nem confirmam nem negam a caixa, por exemplo: 451 4.7.1 greylisted, 421 service not available, 450 4.2.1 mailbox temporarily unavailable, ou a conexão simplesmente expira.

![Um Secure Email Gateway interceptando uma sonda de verificação, e por que e-mails protegidos por SEG voltam como Desconhecidos](/blog/seg-gateway-email-verification.svg)
O gateway responde ele mesmo à sonda e só passa e-mail limpo para o servidor real, então um verificador padrão nunca descobre se a caixa existe e devolve Desconhecido.

Como o gateway protege a caixa, verificar um endereço protegido por SEG exige mais do que uma única sonda. Uma ferramenta ou tem um jeito de confirmar a caixa atrás do gateway, ou desiste e devolve Desconhecido. Essa capacidade é exatamente o que separa as ferramentas abaixo.

## 4. Existe um jeito de verificar catch-all e passar pelo SEG?

Sim, mas isso só ficou possível nos últimos anos. Para entender como, vale olhar como as ferramentas faziam antes.

### Antes de 2023

Antes de 2023, verificar um endereço catch-all era quase um mistério, e a maioria das pessoas nem sabia que existiam Secure Email Gateways. Quase toda ferramenta usava o mesmo método: uma checagem SMTP, muitas vezes chamada de SMTP ping.

Funciona assim. A ferramenta se conecta ao servidor de e-mail do destino e começa os passos de um envio: HELO, MAIL FROM e depois RCPT TO com o endereço que está checando. Ela lê o código com que o servidor responde e para ali, sem enviar nada. Esse código de resposta é o que a ferramenta usa para decidir se o endereço é válido.

A maioria das ferramentas procurava um só código: 250, que significa que o servidor aceitou o destinatário. Se viam 250 marcavam o endereço como válido, e com qualquer outra coisa como inválido. Muitos bounces vinham exatamente daí, porque 250 não é o único código e nem sempre quer dizer que a caixa existe. Outros códigos também importam:

- **250**: Aceito. A caixa vai receber e-mail, mas um servidor catch-all diz isso para qualquer endereço, real ou falso.
- **251 / 252**: Aceito para encaminhamento, ou não é possível verificar mas a entrega será tentada. Ambíguo, não é um sim claro.
- **450 / 451 / 452**: Falha temporária por greylisting, limitação ou servidor ocupado. Tente mais tarde. Ferramentas ingênuas leem isso como inválido.
- **421**: Serviço indisponível no momento. Temporário, não é uma resposta real sobre a caixa.
- **550**: No such user. A caixa realmente não existe.
- **551 / 553**: Usuário não local, ou endereço não permitido.
- **552**: Caixa cheia ou acima da cota.

Tratar isso como "250 é bom, o resto é ruim" causa dois problemas. Um servidor catch-all responde 250 para qualquer endereço, real ou falso, então um 250 não prova que a caixa existe, e as ferramentas que confiavam nele mandavam endereços mortos para as campanhas. O greylisting responde com um 4xx temporário na primeira tentativa e aceita numa tentativa posterior, então as ferramentas que liam esse 4xx como inválido descartavam endereços bons, e as que liam como desconhecido desistiam deles.

Então a checagem SMTP funcionava bem em domínios comuns, mas sofria com catch-all e e-mail protegido por gateway. E há um segundo problema que a maioria das ferramentas ignora: a resposta que você recebe depende do endereço IP de onde você checa.

### Por que a infraestrutura de IP importa

Quando uma ferramenta se conecta a um servidor de e-mail, o servidor olha antes de tudo o endereço IP de onde vem a conexão. Se o IP tem boa reputação, o servidor responde normalmente. Se o IP é novo, desconhecido ou já está em uma lista de bloqueio, o servidor pode responder com um 4xx temporário, bloquear a conexão ou dar uma resposta que não tem nada a ver com a existência da caixa.

É por isso que o mesmo e-mail pode sair Válido em uma ferramenta e Arriscado ou Desconhecido em outra. O endereço é o mesmo. As ferramentas só se conectaram de IPs diferentes, e o servidor tratou cada uma de um jeito.

![O mesmo endereço de e-mail com resultados diferentes em duas ferramentas por causa da reputação do IP](/blog/email-verification-ip-reputation.svg)
O endereço é idêntico. A ferramenta A checa de um IP em que o provedor confia e recebe um resultado preciso, a ferramenta B checa de um IP marcado e é adiada ou bloqueada. Os resultados mudam de ferramenta para ferramenta porque o servidor julga a conexão, não só a caixa.

Um bom IP é o que consegue uma resposta precisa do servidor. Manter um conjunto de bons IPs é caro. Eles precisam de DNS reverso correto, histórico de envio limpo, monitoramento e troca assim que um é marcado. Uma ferramenta com reputação e recursos consegue manter essa infraestrutura. Uma mais barata rodando em poucos IPs de baixa qualidade não consegue, e os resultados dela são menos confiáveis por isso. Então comparar ferramentas não é só sobre o método que elas usam, é também sobre se o servidor de e-mail confia no IP de onde elas checam.

### Então como as ferramentas mais novas fazem?

Depois de 2023, algumas ferramentas encontraram formas de verificar caixas catch-all e passar pelos gateways SEG. Explicar os métodos reais exigiria um artigo próprio, mas vale dizer o que eles não são.

Não são padrões de nome, como supor que nome.sobrenome@ existe. Não são um palpite de IA. Não são um grande banco de endereços, nem o seu histórico de verificações passadas. Nada disso responde à pergunta real: essa caixa existe agora, no momento em que você checa?

O que funciona é encontrar uma brecha no jeito como os grandes provedores respondem, uma forma de passar pela marcação de catch-all e pelo gateway e ver se a caixa está mesmo lá.

Se existe um jeito de fazer isso, por que nem toda ferramenta faz? Porque não é uma regra fixa e confiável. É um passo grande, e essas brechas podem se fechar a qualquer momento. Se um provedor muda o jeito de responder, o método pode parar de funcionar e o sistema inteiro chega a um beco sem saída, então a ferramenta precisa achar outro caminho. É por isso que várias ferramentas grandes, como NeverBounce e Reoon, ainda não deram esse passo.

E nem as ferramentas que fazem isso podem prometer resultados perfeitos. Nenhuma ferramenta consegue garantir com honestidade nem 90% de precisão na verificação de catch-all e SEG, porque esses métodos ainda dependem do IP e da reputação dele. Seja qual for o caminho, no fim você ainda precisa chegar ao servidor do provedor de e-mail, e esse servidor ainda julga você pelo IP de onde você se conecta.

Então as ferramentas que valem a escolha são as que fazem as duas coisas: um método que funciona nos endereços difíceis e a infraestrutura de IP que torna o resultado confiável. É isso que a comparação abaixo observa.

## 5. Como as ferramentas de verificação de e-mail de 2026 se comparam, e como escolher a melhor

Todas as ferramentas desta lista já fazem bem o básico: checagem de sintaxe, detecção de e-mails descartáveis e de função, detecção de catch-all, uma API REST e integrações com terceiros. Isso é padrão em toda a categoria, então não decide nada. Selecionei e comparei as seis nos pontos que realmente mudam seus resultados e seu custo:

- A precisão que declaram
- A taxa de bounce ou a garantia que oferecem
- Se verificam endereços catch-all ou só os marcam
- Se conseguem verificar atrás de um SEG
- Se você pode usá-las dentro de ferramentas de IA como Claude e ChatGPT via MCP
- A avaliação dos clientes no G2 e no Trustpilot
- O preço inicial

**Recursos em resumo.**

| Ferramenta | Catch-all | Passa pelo SEG | IA (MCP) | Avaliação (G2 · Trustpilot) |
|---|---|---|---|---|
| Giggal.ai | Sim | Sim | Nativo (Claude + ChatGPT) | 4.8 · 4.1 |
| BounceBan | Sim | Sim | MCP oficial | 4.8 · 3.1 |
| ZeroBounce | Sim | Não documentado | MCP oficial | 4.7 · 4.8 |
| MillionVerifier | Só detecção | Não | Via Apify | 4.2 · 4.1 |
| Reoon | Só detecção | Não | Não | 4.8 · Nenhuma |
| NeverBounce | Só detecção | Não | Não | 4.1 · 2.0 |

**Precisão e preços.**

| Ferramenta | Precisão | Política de bounce | A partir de |
|---|---|---|---|
| Giggal.ai | 98.5% | Abaixo de 3% | 1.000 grátis, $9.90/10k |
| BounceBan | 97%+ | Abaixo de 3% | 100 grátis, ~$34/10k |
| ZeroBounce | 99.6% | Sem compromisso | 5 grátis/mês, $99/10k |
| MillionVerifier | 99% | Reembolso se >4% | 500 grátis, $39/10k |
| Reoon | 99% | Reembolsa desconhecidos | 600 grátis +20/dia, $12/10k |
| NeverBounce | 97-99% | Abaixo de 2% | 10 grátis, $8/1k |

### Giggal.ai

Feito para os endereços difíceis. Verifica caixas [catch-all](/catch-all-verification), accept-all e protegidas por SEG e devolve um válido ou inválido de verdade onde a maioria das ferramentas para em arriscado ou desconhecido. Declara 98,5% de precisão em mais de 500 milhões de e-mails verificados e mantém a taxa de bounce abaixo de 3%. Reembolsa os créditos do resultado Desconhecido. Conecta-se por uma API REST e roda de forma nativa dentro do Claude e do ChatGPT via MCP, sem arquivos de configuração. Os créditos não expiram, segundo a política de preços, e tem uma sólida avaliação de 4,8 no G2. Para um único endereço, faça a [verificação de e-mail](/email-checker) grátis.

**[Integrações](/integrations):** HubSpot, Mailchimp, ActiveCampaign, SendGrid, Zapier e n8n, mais de 80 outras e clientes de IA (Claude, ChatGPT, Cursor, VS Code e outros) via MCP.

**[Preços](/pricing):** 1.000 grátis, depois $9.90 / 10.000

### BounceBan

Focado nos mesmos casos difíceis que a Giggal. Declara mais de 97% de precisão geral e de 85 a 95% em endereços catch-all, com greylisting e protegidos por SEG, tudo em tempo real sem enviar e-mail. Oferece um servidor MCP oficial para clientes de IA. Os créditos pré-pagos acumulam e não expiram, e tem uma sólida avaliação de 4,8 no G2.

**Integrações:** Google Sheets, Clay, n8n, um plugin para Claude Code e um GPT para ChatGPT, além da API REST.

**[Preços](https://bounceban.com/pricing):** 100 grátis, ~$34 / 10.000

### ZeroBounce

Uma plataforma madura e completa com 99,6% de precisão declarada e uma garantia de reembolso de 5 vezes, que só cobre os endereços que ela marca como válidos, não catch-all ou desconhecidos. Verifica endereços catch-all, mas não documenta publicamente como lida com e-mail protegido por SEG atrás de gateways como Proofpoint e Mimecast. Oferece um servidor MCP oficial para Claude, Cursor e VS Code, além de mais de 60 integrações. Tem as avaliações públicas mais altas desta lista, G2 4,7 e Trustpilot 4,8, e fica na faixa premium de preço.

**[Integrações](https://www.zerobounce.net/integrations):** mais de 60 nativas, incluindo HubSpot, Salesforce, Mailchimp, Constant Contact, MailerLite, AWeber, Zoho CRM, Shopify e WordPress, além do Zapier.

**[Preços](https://www.zerobounce.net/pricing):** 5 grátis/mês, $99 / 10.000

### MillionVerifier

Antes de 2023 era a única opção realmente barata em escala, com um milhão de créditos por $449 e créditos que nunca expiram. Depois de 2023, BounceBan e [Giggal](/) chegaram com preços muito melhores. Detecta domínios catch-all e os marca, mas não resolve a caixa individual, e não verifica atrás de um SEG. Garante os resultados com reembolso se os hard bounces passarem de 4% e não cobra resultados catch-all ou desconhecidos. Um servidor MCP está disponível via Apify.

**Integrações:** Mailchimp, HubSpot, ActiveCampaign, Salesforce, ConvertKit e Intercom entre mais de 30, além de Zapier e Make, com a limpeza automática diária EverClean.

**[Preços](https://www.millionverifier.com/):** 500 grátis, $39 / 10.000

### Reoon

Verificação em massa rápida e barata com 99% de precisão declarada. Detecta domínios catch-all e os marca, mas não resolve a caixa individual, e não lida com endereços protegidos por SEG. Reembolsa os créditos do resultado Desconhecido. Não tem acesso por MCP nem para clientes de IA. Tem uma das entradas mais baratas da categoria, com uma cota grátis diária e pacotes de créditos vitalícios.

**Integrações:** Mailchimp, HubSpot, Salesforce, SendGrid e ActiveCampaign, via Zapier, Make, Pabbly Connect, Albato e um plugin para WordPress.

**[Preços](https://www.reoon.com/email-verifier/):** 600 grátis + 20/dia, $12 / 10.000

### NeverBounce

Um verificador padrão confiável, com API em tempo real e uma garantia que reembolsa o crédito se um endereço verificado der bounce. Detecta catch-all e marca, mas não resolve a caixa, e não verifica atrás de um SEG. Não tem MCP. O preço por e-mail começa em cerca de $0,008 e cai para cerca de $0,003 em grandes volumes.

**[Integrações](https://www.neverbounce.com/integrations):** Mailchimp, HubSpot, Marketo, Salesforce Marketing Cloud, Drip, Campaign Monitor, iContact e MailerLite, além do Zapier.

**[Preços](https://www.neverbounce.com/pricing):** 10 grátis, $8 / 1.000

## Conclusão

Se as suas listas são feitas principalmente de domínios comuns, qualquer verificador confiável desta lista resolve. A maioria das listas B2B não é assim. Cerca de um terço dos seus contatos fica em domínios catch-all ou protegidos por SEG, e são justamente eles que dão bounce em silêncio e custam reputação de remetente. Para essas listas você precisa de uma ferramenta que resolva os endereços difíceis em vez de marcá-los e devolver a decisão para você.

Então o teste é simples. Pegue uma amostra da sua própria lista, rode nas ferramentas que você está avaliando e fique com a que transforma a maior parte desses endereços difíceis em um resultado claro sem bounce. Para listas cheias de catch-all e SEG essa seleção é curta, e a [Giggal.ai](/) faz parte dela.
