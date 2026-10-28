---
title: "O que é um registro DMARC?"
seoTitle: "O que é um registro DMARC? Tags, exemplos e relatórios (2026)"
description: "Um registro DMARC é um TXT em _dmarc.seudominio que diz aos servidores o que fazer com e-mails que falham na autenticação. Todas as tags do padrão de 2026."
slug: o-que-e-um-registro-dmarc
date: 2026-10-19
updated: 2026-10-19
keyword: registro dmarc
image: /blog/covers/pt-br/o-que-e-um-registro-dmarc.webp
imageAlt: Guia sobre o que é um registro DMARC, com a explicação das tags e um resumo das políticas
cta: Proteja o domínio e depois limpe a lista
---

Um registro DMARC é uma linha curta de texto que você adiciona às configurações de DNS do seu domínio. Ele diz aos outros servidores de e-mail o que fazer com um e-mail que diz vir do seu domínio, mas falha nas verificações de segurança. Ele também diz para onde enviar relatórios sobre os e-mails que eles recebem em seu nome.

**Em uma frase:** o DMARC é uma regra pública que diz "se um e-mail diz ser do meu domínio, mas não é meu de verdade, mande para o spam ou bloqueie, e me envie um relatório".

## O DMARC explicado com um exemplo

### O problema

Qualquer pessoa pode enviar um e-mail e colocar o seu endereço na linha From. Imagine que o seu domínio é `example.com`. Um golpista envia este e-mail para o seu cliente:

```text
From: billing@example.com
Subject: Your invoice is overdue
Pay here: http://pay-now.example.net
```

O seu cliente vê `example.com` e confia. Mas você nunca enviou esse e-mail.

### As duas verificações que já existem

Provedores de e-mail como Gmail e Outlook já conseguem fazer duas verificações em cada e-mail:

- **SPF:** este e-mail veio de um servidor que `example.com` autoriza a enviar os seus e-mails?
- **DKIM:** este e-mail tem a assinatura digital de `example.com`?

Sozinhas, essas verificações têm uma falha. O golpista consegue passar nelas com o próprio domínio, enquanto a linha From continua mostrando o seu. Nada liga a verificação ao endereço que o seu cliente vê.

### O que o DMARC acrescenta

O DMARC acrescenta uma regra. O SPF ou o DKIM precisa passar para o mesmo domínio que aparece na linha From. Essa correspondência se chama **alinhamento**. Se nenhuma das verificações passar para esse domínio, o e-mail falha no DMARC.

O DMARC também deixa você decidir o que acontece com um e-mail que falha.

### Um registro DMARC, parte por parte

Você adiciona esta linha às configurações de DNS de `example.com`:

```text
v=DMARC1; p=reject; rua=mailto:reports@example.com
```

Isto é o que cada parte diz:

- `v=DMARC1`: "Esta é a minha regra DMARC."
- `p=reject`: "Se um e-mail diz ser de example.com, mas falha na verificação, bloqueie."
- `rua=mailto:reports@example.com`: "Me envie um relatório diário sobre todos que enviam e-mails em meu nome."

### O que acontece com o e-mail falso

1. O e-mail do golpista, vindo de `billing@example.com`, chega ao Gmail.
2. O Gmail faz o SPF e o DKIM. Nenhuma das verificações passa para `example.com`.
3. O Gmail lê o seu registro DMARC. Ele diz `p=reject`.
4. O Gmail bloqueia o e-mail. O seu cliente nunca o vê.

Os seus e-mails reais passam nas mesmas verificações, então são entregues normalmente.

### As três opções para p

| Configuração | O que acontece com um e-mail que falha no DMARC | Quando usar |
| --- | --- | --- |
| p=none | Nada. Ele é entregue normalmente, e você recebe relatórios. | No começo, enquanto você encontra todos os seus remetentes reais |
| p=quarantine | Ele vai para a pasta de spam. | Quando todos os seus remetentes reais passam |
| p=reject | Ele é bloqueado por completo. | Quando você tem certeza de que nada real vai falhar |

### Como a maioria dos domínios configura

1. Comece com `p=none` e leia os relatórios diários.
2. Encontre todos os serviços reais que enviam e-mails por você, como a sua ferramenta de e-mail e o seu helpdesk. Garanta que cada um passe.
3. Passe para `p=quarantine` e depois para `p=reject`. A partir daí, ninguém consegue falsificar o seu domínio nos servidores de destino que seguem a sua política.

Por isso, a maioria dos domínios começa com um registro como este, que só observa:

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

O resto deste guia explica com mais detalhes cada parte de um registro DMARC e as opções extras que você pode acrescentar depois.

## SPF, DKIM e o endereço From em mais detalhes

O DMARC funciona em cima do SPF e do DKIM. O nosso guia sobre [SPF e DKIM](/blog/spf-dkim-dmarc-explained) explica os dois por completo. A versão curta está abaixo.

**SPF** é uma lista dos servidores que podem enviar e-mails pelo seu domínio. O servidor de destino verifica se o e-mail veio de um servidor dessa lista.

**DKIM** é uma assinatura digital acrescentada a cada e-mail. O servidor de destino confere a assinatura com uma chave publicada no seu DNS. Se a assinatura é válida, o e-mail não foi alterado no caminho e foi assinado pelo seu domínio.

**O endereço From** é o endereço do remetente que o destinatário vê na caixa de entrada, por exemplo `hello@example.com`. O DMARC confere se o SPF ou o DKIM passou para esse mesmo domínio.

## Como é um registro DMARC

### Onde ele fica no DNS

O DNS é a lista pública de configurações do seu domínio. Você a edita no seu provedor de DNS, que normalmente é a empresa onde você comprou o domínio ou o seu provedor de hospedagem. Um registro DMARC é um registro TXT, ou seja, uma entrada de DNS que guarda texto simples.

Você o adiciona no nome de host `_dmarc`. A maioria dos painéis de DNS acrescenta o seu domínio no final automaticamente, então `_dmarc` vira `_dmarc.example.com`.

Cuidado com um erro comum. Alguns painéis esperam só `_dmarc`. Se você digitar ali o nome completo `_dmarc.example.com`, o registro vai parar em `_dmarc.example.com.example.com`. Os servidores de destino não vão encontrá-lo ali.

### As regras para escrever o registro

- **Ele precisa começar com `v=DMARC1`.** Essa tem que ser a primeira parte do registro. `DMARC1` precisa estar em maiúsculas. Se você escrever `v=dmarc1`, colocar outra parte antes ou errar a grafia, os servidores de destino ignoram o registro inteiro. O seu domínio passa a ser tratado como se não tivesse política DMARC.
- **Separe as partes com ponto e vírgula.** Espaços em volta do ponto e vírgula são permitidos.
- **Se a política estiver faltando.** Imagine que a parte `p` está faltando ou errada, mas o registro tem um endereço de relatório válido em `rua`. Nesse caso, os servidores de destino tratam a política como `p=none`. Se `p` e `rua` estiverem faltando ou errados, os servidores de destino ignoram o DMARC do seu domínio por completo.
- **Publique só um registro DMARC.** Se um servidor de destino encontra dois ou mais registros TXT que começam com `v=DMARC1`, ele descarta todos. Essa regra vem da [RFC 9989](https://www.rfc-editor.org/info/rfc9989), o padrão DMARC atual. Dois registros não dão a você duas políticas. Eles deixam o seu domínio sem nenhuma proteção.

### Como conferir o seu registro

Você pode consultar o seu registro com um comando no terminal do seu computador:

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

Use `dig` no Linux e no macOS. Ele mostra o seu registro em uma linha, entre aspas. Use `nslookup` no Windows. Ele mostra o registro que o seu servidor DNS devolve.

Se o comando não devolver nada, uma de duas coisas é verdade. Ou o registro ainda não se propagou pelo DNS, ou ele foi adicionado no nome de host errado.

## Todas as tags DMARC e quais você precisa

Cada parte de um registro DMARC, como `p=none`, se chama tag. O padrão atual, de maio de 2026, tem onze tags.

| Tag | O que faz, em palavras simples | Valores possíveis | Se você deixar de fora | Você precisa dela? |
| --- | --- | --- | --- | --- |
| v | Diz "isto é um registro DMARC". Precisa vir primeiro. | DMARC1 | Obrigatória | Sim |
| p | A sua política: o que fazer com e-mails que falham. Vale para o seu domínio e os subdomínios. | none, quarantine, reject | Tratada como none, se rua for válida | Sim |
| rua | Para onde enviar os relatórios de resumo diários | Um ou mais endereços mailto:, separados por vírgulas | Você não recebe relatórios | Sim |
| sp | Uma política separada para subdomínios que existem, como news.example.com | none, quarantine, reject | Igual a p | Só se os subdomínios precisarem de regras diferentes |
| np | Uma política para subdomínios que não existem no DNS | none, quarantine, reject | Igual a sp, ou a p se não houver sp | Só para bloquear subdomínios inventados |
| adkim | O quanto a correspondência do domínio DKIM precisa ser exata. r = relaxado, s = estrito | r, s | r | Raramente. Relaxado é a escolha normal |
| aspf | O quanto a correspondência do domínio SPF precisa ser exata. r = relaxado, s = estrito | r, s | r | Raramente. Relaxado é a escolha normal |
| t | Modo de teste. Faz os servidores de destino aplicarem a sua política um nível mais branda | y, n | n | Só enquanto você passa para uma política mais rígida |
| ruf | Para onde enviar um relatório sobre cada e-mail que falhou | Um ou mais endereços mailto:, separados por vírgulas | Você não recebe relatórios | Raramente, por causa de limites de privacidade |
| fo | Opções para os relatórios de e-mails individuais | 0, 1, d, s | 0 | Só se você usar ruf |
| psd | Marca um domínio de sufixo público | y, n, u | u | Só para sufixos públicos ou grandes organizações que delegam partes do seu DNS |

O relaxado e o estrito funcionam assim. No relaxado, um subdomínio conta como correspondência, então `mail.example.com` corresponde a `example.com`. No estrito, os dois domínios precisam ser exatamente iguais.

Três tags antigas foram aposentadas no padrão de 2026. São a tag de porcentagem (`pct`), a tag de formato de relatório (`rf`) e a tag de intervalo de relatório (`ri`). Um `pct=100` que ficou no registro não causa problema. Um `pct` abaixo de 100 era usado para aplicar uma política a só uma parte dos seus e-mails durante uma implantação. A nova tag `t` faz esse trabalho agora.

**O que a maioria dos domínios precisa:** só `v`, `p` e `rua`.

- Acrescente `sp` ou `np` se os seus subdomínios precisarem de regras diferentes.
- Não mexa em `psd`. Você só precisa dela se administra uma grande organização que delega partes do seu DNS (`psd=n`), ou um sufixo público como `co.uk` (`psd=y`).
- A correspondência relaxada (`adkim=r` e `aspf=r`) é o padrão e funciona para quase todos os domínios. Você só precisa das tags de alinhamento se regras rígidas de conformidade proibirem assinar com um subdomínio.

Você pode montar um registro com essas tags, ou limpar um registro antigo, com o nosso [gerador de DMARC](/dmarc-generator).

## O que p=none, quarantine e reject fazem de fato

A tag `p` é a parte mais importante do registro. Ela diz aos servidores de destino o que fazer com um e-mail que falha no DMARC. Há três opções. Cada uma é uma etapa no caminho para a proteção completa.

**p=none: só observar.** Os servidores de destino não fazem nada especial com e-mails que falham. Eles são entregues normalmente, e só os filtros de spam comuns se aplicam. Junto com os relatórios em `rua`, a RFC 9989 chama isso de Monitoring Mode (modo de monitoramento). Ele mostra todos os serviços que enviam e-mails como o seu domínio, sem nenhum risco para a sua entrega.

**p=quarantine: mandar para o spam.** Os servidores de destino tratam os e-mails que falham como suspeitos. Na maioria dos provedores de e-mail, eles vão para a pasta de spam do destinatário. Isso protege os seus destinatários contra e-mails falsos. E-mails reais de uma ferramenta mal configurada não se perdem, porque ainda podem ser encontrados na pasta de spam.

**p=reject: bloquear.** Os servidores de destino recusam os e-mails que falham. A maioria faz isso durante a entrega, com um código de erro permanente que começa com 5. O e-mail nunca chega a uma caixa. O servidor que enviou recebe uma mensagem de bounce.

### Os servidores de destino nem sempre seguem a sua política

A sua política é um pedido, não uma ordem. O padrão diz que os servidores de destino não devem recusar um e-mail só por causa do `p=reject`. Se não sabem mais nada sobre o e-mail, devem tratá-lo como quarantine. Os provedores de e-mail também usam os próprios dados de reputação do remetente e os próprios filtros de spam junto com a sua política.

### Por que o reject precisa de DKIM, e não só de SPF

O encaminhamento quebra o SPF. Imagine que alguém encaminha os e-mails do trabalho para uma conta pessoal. O servidor que encaminha envia o e-mail a partir do próprio endereço IP. Esse endereço não está no seu registro SPF, então a verificação SPF falha.

O DKIM continua válido depois do encaminhamento. A assinatura viaja dentro do próprio e-mail, então ela continua válida e ainda corresponde ao seu domínio. Por isso, um domínio com `p=reject` precisa usar DKIM e não depender só do SPF.

### Modo de teste com t=y

A RFC 9989 acrescenta um modo de teste. Defina `t=y` e os servidores de destino aplicam a sua política um nível mais branda do que a publicada:

- `reject` é tratado como `quarantine`.
- `quarantine` é tratado como `none`.

O modo de teste não muda os seus relatórios. Ele também não faz nada quando a sua política é `p=none`. Ele permite ver como uma política mais rígida se comporta com e-mails reais antes de torná-la permanente.

## Subdomínios: sp e np

Um subdomínio é um nome extra na frente do seu domínio, como `marketing.example.com` ou `support.example.com`. Muitas empresas enviam e-mails a partir de subdomínios. As tags `sp` e `np` definem as regras para eles, para qualquer subdomínio que não tenha um registro DMARC próprio.

### Como um servidor de destino encontra o registro certo

1. Primeiro, o servidor de destino procura um registro DMARC para o domínio exato da linha From. Se você envia de `news.example.com` e `_dmarc.news.example.com` existe, ele usa esse registro.
2. Se não há registro ali, ele procura o seu registro principal em `_dmarc.example.com`. Ele o encontra subindo pelo nome de domínio, uma parte de cada vez, em direção ao final do nome. Ele não usa a Public Suffix List para isso.
3. Quando encontra o seu registro principal, ele verifica se o subdomínio de envio existe no DNS.

Depois, ele escolhe a regra:

- Se o subdomínio existe, ele aplica `sp`. Se não há `sp`, ele aplica `p`.
- Se o subdomínio não existe (o DNS devolve NXDOMAIN, que significa "esse nome não existe"), ele aplica `np`. Se não há `np`, ele usa `sp`. Se também não há `sp`, ele usa `p`.

### Um exemplo

Imagine que este registro está publicado em `_dmarc.example.com`:

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

Ele define três regras diferentes:

- **E-mails do próprio `example.com`** usam `p=reject`. Se falharem no DMARC, os servidores de destino são orientados a bloqueá-los.
- **E-mails de `news.example.com`**, um subdomínio que existe no DNS, usam `sp=quarantine`. Imagine que uma newsletter falha porque um fornecedor configurou algo errado. Ela vai para o spam em vez de dar bounce.
- **E-mails de um nome inventado como `invoices-2026.example.com`**, que não existe no DNS, usam `np=reject`. Um subdomínio que alguém simplesmente inventou recebe a regra rígida, mesmo que os seus subdomínios reais recebam quarantine.

## O que é um relatório DMARC?

O DMARC tem dois tipos de relatório:

- **Relatórios agregados**, definidos com `rua`. São resumos diários.
- **Relatórios de falha**, definidos com `ruf`. Eles descrevem e-mails individuais que falharam.

### Relatórios agregados (rua)

Um relatório agregado é um resumo enviado por um provedor de e-mail, como o Gmail. Ele lista todos os e-mails que esse provedor recebeu dizendo ser do seu domínio. É um arquivo XML, um arquivo de texto estruturado feito para ser lido por software. Os provedores o enviam como anexo de e-mail, como um arquivo `.xml` simples ou como um arquivo compactado, por exemplo `.xml.gz`.

Cada relatório normalmente cobre um dia UTC. O padrão diz que os servidores de destino devem enviar relatórios agregados pelo menos a cada 24 horas. Eles não são obrigados a enviar nenhum.

Este é um exemplo resumido de relatório:

```xml
<feedback>
  <report_metadata>
    <org_name>mail.receiver.example</org_name>
    <report_id>20261003.example.com</report_id>
    <date_range>
      <begin>1790985600</begin>
      <end>1791071999</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>example.com</domain>
    <p>none</p>
    <sp>none</sp>
  </policy_published>
  <record>
    <row>
      <source_ip>192.0.2.10</source_ip>
      <count>412</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>example.com</header_from>
      <envelope_from>bounces.esp-mail.example</envelope_from>
    </identifiers>
    <auth_results>
      <dkim><domain>example.com</domain><result>pass</result></dkim>
      <spf><domain>bounces.esp-mail.example</domain><result>pass</result></spf>
    </auth_results>
  </record>
</feedback>
```

Isto é o que ele diz, bloco por bloco:

- **`<report_metadata>`**: o relatório veio de `mail.receiver.example`. Ele cobre um dia UTC completo.
- **`<policy_published>`**: a política que o servidor de destino viu para `example.com`. Aqui ela é `p=none` e `sp=none`.
- **`<row>`**: 412 e-mails chegaram do endereço IP `192.0.2.10`.
- **SPF**: em `<auth_results>`, o SPF passou, mas para o domínio `bounces.esp-mail.example`. Esse domínio não é o seu domínio From, `example.com`. Então, em `<policy_evaluated>`, o SPF aparece como `fail`, porque não houve correspondência.
- **DKIM**: em `<auth_results>`, o DKIM passou para `example.com`. Isso corresponde ao domínio From mostrado em `<identifiers>`. Então o DKIM passou e correspondeu, e esses 412 e-mails passaram no DMARC.

O ponto principal é simples. `<auth_results>` mostra as verificações SPF e DKIM brutas. `<policy_evaluated>` mostra se cada verificação também correspondeu ao seu domínio From. O DMARC usa a segunda.

### Relatórios de falha (ruf)

Os relatórios de falha, muitas vezes chamados de relatórios forenses, descrevem um e-mail que falhou cada. Eles podem incluir os cabeçalhos do e-mail e detalhes sobre o destinatário. Por causa desse risco de privacidade, muitos servidores de destino removem a maior parte dos detalhes ou não enviam relatórios de falha. A tag `fo` define opções para esses relatórios. Ela só importa se você usa `ruf`.

### Como ler os relatórios

O padrão recomenda usar software para ler os relatórios agregados, e não ler à mão. Se você envia para muitos provedores de e-mail, cada um manda o próprio relatório, todos os dias.

## Por que estou recebendo e-mails de DMARC?

Você recebe esses e-mails diários porque a tag `rua` do seu registro DMARC contém o seu endereço. Todo provedor de e-mail que recebe e-mails em seu nome envia um resumo diário para cada endereço dessa tag.

A linha de assunto segue um formato fixo, definido pela [RFC 9990](https://www.rfc-editor.org/info/rfc9990):

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

O Submitter é o provedor que verificou o e-mail, como o Google ou a Microsoft. O relatório XML vem anexado, muitas vezes compactado.

Não envie esses relatórios para uma caixa pessoal. Aponte a `rua` para uma caixa separada ou para um serviço de processamento de relatórios. Se você não lembra de ter configurado isso, confira o seu registro DMARC. Um administrador anterior, ou o guia de configuração de uma plataforma de e-mail, pode ter acrescentado a tag.

### Enviar relatórios para outro domínio

Imagine que o seu domínio é `example.com` e você quer que os relatórios sejam enviados para um endereço em `reports.example.net`. O domínio que recebe precisa concordar em aceitá-los. Ele faz isso publicando um registro TXT no próprio DNS. Sem esse registro, os servidores de destino ignoram o endereço e não enviam relatórios.

O registro fica neste nome de host:

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

Serviços de relatório muitas vezes publicam um registro curinga (`*._report._dmarc.reports.example.net`). Esse único registro cobre todos os domínios de clientes, então não é preciso configurar cada um.

## Como passar de p=none para reject sem perder e-mails

Não pule direto para o reject. Suba um nível de cada vez:

1. **Comece observando.** Publique um registro DMARC em `_dmarc` com `p=none` e um endereço `rua` que funcione. Você começa a receber relatórios, e nada muda na sua entrega.
2. **Corrija os seus remetentes.** Leia os relatórios. Encontre todos os serviços reais que enviam e-mails pelo seu domínio e falham nas verificações, e corrija a configuração deles.
3. **Passe para quarantine.** Mude para `p=quarantine` quando todos os seus remetentes reais passarem de forma consistente. Confira as pastas de spam para garantir que nenhum e-mail real vá parar lá.
4. **Passe para reject.** Mude para `p=reject`. E-mails falsos em seu nome passam a ser bloqueados antes de chegar a qualquer pessoa.

Isso pode levar um tempo. O padrão diz que fazer todos os remetentes passarem pode levar muitos meses, dependendo da frequência com que você envia. Ferramentas de cobrança, helpdesks e plataformas de marketing são fáceis de esquecer, então continue analisando os seus relatórios.

**Se os seus usuários postam em listas de discussão**, vá mais devagar. O padrão sugere pelo menos um mês em `p=none` e depois o mesmo tempo em quarantine. Compare os resultados antes de passar para reject. Listas de discussão muitas vezes mudam linhas de assunto, acrescentam rodapés ou reenviam mensagens. Essas mudanças quebram o SPF e às vezes quebram o DKIM também. Comparar várias semanas de relatórios mostra esses problemas antes que o reject comece a bloquear e-mails.

**Use o modo de teste na última etapa.** Com `t=y`, você pode publicar `p=reject` enquanto os servidores de destino ainda aplicam quarantine. Você vê como os servidores de destino reagem ao reject, mas os e-mails que falham ainda vão para o spam em vez de dar bounce.

**Uma observação sobre SPF estrito.** Se o seu registro SPF termina com `-all`, alguns servidores de destino recusam os e-mails que falham já na verificação SPF, antes do DMARC. Esses e-mails nunca chegam à verificação DMARC. Eles também não aparecem nos seus relatórios diários.

## Erros comuns em registros DMARC

### Dois registros DMARC

Isso costuma acontecer quando alguém acrescenta um segundo registro TXT em vez de editar o primeiro. Os servidores de destino veem os dois e descartam os dois, como diz a RFC 9989. O seu domínio passa a funcionar como se não tivesse registro DMARC.

**Correção:** confira o seu DNS e junte todas as tags em um único registro TXT.

### O registro está no domínio principal, e não em _dmarc

Se você coloca `example.com` como nome de host, o registro é criado no seu domínio principal, e não em `_dmarc.example.com`. Os servidores de e-mail só procuram o DMARC no nome `_dmarc`, então nunca o encontram.

**Correção:** defina o nome de host como `_dmarc`.

### v=DMARC1 não vem primeiro, ou está com maiúsculas e minúsculas erradas

Digitar `v=dmarc1`, ou começar com `p=none; v=DMARC1`, quebra o registro. Os servidores de destino o ignoram.

**Correção:** coloque `v=DMARC1` como a primeira coisa do registro, seguida de um ponto e vírgula.

### Endereços de relatório sem mailto:

Escrever `rua=dmarc@example.com` em vez de `rua=mailto:dmarc@example.com` quebra o formato do endereço. Os servidores de destino não conseguem usar um endereço sem o prefixo, então nenhum relatório chega.

**Correção:** comece todos os endereços em `rua` e `ruf` com `mailto:`.

### Relatórios enviados para outro domínio sem permissão

Se você envia relatórios para o domínio de um fornecedor, e esse domínio não publicou o registro de permissão, você não recebe relatórios.

**Correção:** garanta que todo endereço de relatório externo tenha um registro `_report._dmarc` correspondente, como explicamos acima.

### Reject só com SPF

O encaminhamento muda o endereço IP que envia o e-mail, então os e-mails encaminhados falham no SPF. Sem DKIM, e-mails reais encaminhados falham no DMARC e dão bounce com uma política reject.

**Correção:** configure a assinatura DKIM em todos os serviços que enviam os seus e-mails antes de sair do `p=none`.

### Tags aposentadas de guias antigos

Muitos guias antigos acrescentavam uma tag de porcentagem, com valores como 100, ou 20 para uma implantação parcial. Um `pct=100` que ficou no registro não causa problema, mas implantações por porcentagem não fazem mais parte do padrão.

**Correção:** remova as tags de porcentagem antigas. Use `t=y` se precisar de uma política mais branda enquanto faz mudanças.

## Perguntas frequentes

**Eu preciso mesmo de um registro DMARC?**
Sim, se você envia e-mails para contas pessoais do Gmail ou do Outlook. O Google e a Microsoft exigem que remetentes de 5.000 ou mais e-mails por dia publiquem um registro DMARC, com o domínio From correspondente. Remetentes menores também devem ter um. Um registro `p=none` com `rua` não custa nada, e os relatórios mostram quem envia e-mails em seu nome.

**Como confiro o meu registro DMARC?**
Rode `dig TXT _dmarc.yourdomain.com +short` no terminal, ou `nslookup -type=TXT _dmarc.yourdomain.com` no Windows. O resultado deve ser o seu registro, começando com `v=DMARC1`. Você também pode enviar um e-mail de teste para uma conta do Gmail, abrir a mensagem e escolher Mostrar original. Ali aparece se o DMARC passou.

**O que significa falha no DMARC?**
Significa que o e-mail falhou nas duas verificações. Nem o SPF nem o DKIM passaram para um domínio que corresponde ao domínio From visível. Os servidores de destino então seguem a sua política. Alguns devolvem uma recusa clara, como `550 5.7.1 Email rejected per DMARC policy for example.com`. Você pode descobrir a causa [lendo a mensagem de bounce](/blog/550-5-7-1-error). O Gmail usa o código de erro `4.7.31` quando falta o registro DMARC e `4.7.32` quando o domínio From não corresponde.

**Posso ter mais de um registro DMARC?**
Não. Um domínio só pode publicar um registro DMARC. A RFC 9989 diz que, se um servidor de destino encontra mais de um, precisa descartar todos. O seu domínio fica sem política DMARC. Edite o registro que já existe em vez de acrescentar um segundo.

**O DMARC impede domínios parecidos?**
Não. O DMARC só protege o domínio exato do seu DNS. Ele não impede que alguém registre um domínio com aparência parecida, por exemplo um com duas letras trocadas ou com outra terminação, como .net. Ele também não impede um nome de exibição falso. Domínios parecidos precisam de outras medidas, como acompanhar novos registros de domínio que copiam o seu nome.

Um registro DMARC prova que o seu e-mail vem mesmo de você. Ele não ajuda quando você envia para endereços que não existem mais. Passe a sua lista pelo [Giggal.ai](/email-list-cleaning) (em inglês) antes do próximo envio para remover endereços inválidos e manter a sua taxa de bounce baixa.
