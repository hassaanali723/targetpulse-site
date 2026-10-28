---
title: "SPF, DKIM e DMARC: o que são e como funcionam"
seoTitle: "SPF, DKIM e DMARC: o que são e como funcionam juntos (2026)"
description: "O SPF confere o servidor, o DKIM a assinatura e o DMARC se um deles bate com o domínio do From. Os registros a publicar, as falhas comuns e o que mudou em 2026."
slug: spf-dkim-e-dmarc
date: 2026-10-19
updated: 2026-10-19
keyword: spf, dkim e dmarc
image: /blog/covers/pt-br/spf-dkim-e-dmarc.webp
imageAlt: Banner azul-escuro com SPF, DKIM e DMARC e três colunas com a explicação técnica de cada um
cta: Autentique o domínio e depois verifique a lista
---

SPF, DKIM e DMARC são três registros DNS. Cada um responde a uma pergunta diferente sobre um e-mail. O SPF (Sender Policy Framework) lista os servidores autorizados a enviar e-mails pelo seu domínio. O DKIM (DomainKeys Identified Mail) acrescenta uma assinatura a cada mensagem, para que o destinatário saiba que nada foi alterado depois que ela saiu de você. O DMARC (Domain-based Message Authentication, Reporting and Conformance) confere se pelo menos um desses dois bate com o domínio do seu endereço From. Ele também diz ao servidor de destino o que fazer quando nenhum dos dois bate. Desde 2024 eles deixaram de ser opcionais: o Gmail e o Outlook.com agora recusam muitos e-mails que falham nessas verificações, em vez de só mandá-los para o spam.

| Registro | O que verifica | Onde fica |
| --- | --- | --- |
| SPF | Quais servidores podem enviar pelo seu domínio | Registro TXT no seu domínio |
| DKIM | Uma assinatura digital em cada mensagem | Registro TXT em selector._domainkey.yourdomain |
| DMARC | Se o SPF ou o DKIM bate com o domínio do From, e o que fazer se não bater | Registro TXT em _dmarc.yourdomain |

## Por que você não pode mais deixá-los de lado

Desde 1º de fevereiro de 2024, o Google aplica regras obrigatórias para quem envia e-mails para contas pessoais do Gmail. Por esses requisitos básicos, todo remetente precisa configurar SPF ou DKIM. Também precisa ter DNS direto e reverso válidos, com registros PTR correspondentes para os IPs de envio, usar criptografia TLS na transmissão e seguir as especificações da RFC 5322. A sua taxa de spam no Google Postmaster Tools precisa ficar abaixo de 0,3%, e o Google recomenda mantê-la abaixo de 0,1%. Se você envia e-mails sem autenticação, o Google avisa que as mensagens podem ir para a pasta de spam ou ser recusadas com o código de erro 5.7.26.

Se você envia 5.000 ou mais mensagens por dia para endereços pessoais do Gmail, o Google classifica você como remetente em massa, e as regras ficam mais rígidas. Remetentes em massa não podem escolher entre SPF e DKIM. Eles precisam configurar os dois protocolos. Também precisam publicar um registro DMARC, manter o alinhamento entre o domínio do cabeçalho From visível e o SPF ou o DKIM, e incluir um mecanismo de descadastro com um clique que funcione nas mensagens de marketing. O Google conta esse limite de 5.000 mensagens somando o domínio principal e todos os subdomínios em um período de 24 horas. Quando o seu domínio atinge esse limite, o Google considera o status de remetente em massa permanente. Desde novembro de 2025, o Gmail passou a aumentar a fiscalização sobre o tráfego fora das regras, com atrasos temporários de entrega e recusas permanentes. Essas diretrizes valem para contas pessoais do Gmail, não para caixas corporativas do Google Workspace.

A Microsoft começou a aplicar as suas próprias regras de autenticação em 5 de maio de 2025, para remetentes que enviam 5.000 ou mais mensagens por dia para contas pessoais do Outlook.com, Hotmail e Live. Remetentes acima desse limite precisam passar no SPF, ter uma assinatura DKIM válida e publicar um registro DMARC com p=none ou mais rígido, alinhado com o SPF ou o DKIM. Se você não cumprir esses requisitos, a Microsoft bloqueia as suas mensagens com o código de bounce 550 5.7.515 Access denied, sending domain does not meet the required authentication level (acesso negado, o domínio de envio não atende ao nível de autenticação exigido). O Yahoo criou regras parecidas para remetentes em massa em 2024.

| Código | O que falhou |
| --- | --- |
| 4.7.27 e 5.7.27 | O SPF não passou |
| 4.7.30 e 5.7.30 | O DKIM não passou |
| 4.7.31 | Falta o registro DMARC ou não há política |
| 4.7.32 | O domínio do From não está alinhado com o SPF ou o DKIM |
| 4.7.23 e 5.7.25 | Problemas no registro PTR |

O Google usa os códigos 4.x para limitações temporárias de taxa e os códigos 5.x para bloqueios permanentes de entrega. Quando as suas campanhas derem bounce, não tente adivinhar o que deu errado pelo painel da sua ferramenta de marketing. Analise os cabeçalhos brutos da recusa do servidor, como explicamos no nosso guia sobre [como ler mensagens de bounce](/blog/550-5-7-1-error).

## SPF: quais servidores podem enviar pelo seu domínio

O Sender Policy Framework, padronizado na RFC 7208, verifica o remetente de envelope de uma mensagem recebida. O remetente de envelope é o endereço Return-Path ou MAIL FROM que os servidores de e-mail usam para devolver bounces. O SPF também pode avaliar o nome do servidor informado no HELO ou EHLO, no início da conexão. Como o SPF só analisa o remetente de envelope e ignora o endereço From visível que as pessoas veem na caixa de entrada, o SPF sozinho não impede que um atacante falsifique o nome da sua marca.

Um [registro SPF](/glossary/spf) fica no DNS como um único registro TXT. Ele diz aos servidores de destino quais endereços IP, servidores MX e plataformas de terceiros podem enviar e-mails pelo seu domínio. Um registro típico tem esta forma:

```text
v=spf1 include:_spf.google.com include:spf.your-esp.example ~all
```

Todo registro começa com `v=spf1`. A instrução `include:_spf.google.com` diz aos servidores de destino para consultar o registro SPF do Google e autorizar os endereços IP listados nele. O segundo include dá autorização de envio aos servidores da sua plataforma de marketing ou do seu serviço de e-mail transacional.

A diretiva no final diz aos servidores de destino como tratar remetentes que não estão na lista. O qualificador softfail, escrito como `~all`, indica que servidores fora da lista provavelmente não estão autorizados, mas sugere que o servidor de destino aceite a mensagem e aplique o filtro de spam. O qualificador fail, escrito como `-all`, marca servidores fora da lista como falha definitiva, e alguns servidores de destino recusam esses e-mails direto. Quem revisa configurações complexas costuma começar com `~all`, para que e-mails legítimos da empresa não sejam descartados por engano.

A RFC 7208 define dois limites rígidos que você não pode ultrapassar. Primeiro, um domínio só pode publicar um registro SPF. Publicar dois registros gera um permerror, que invalida o SPF de todos os seus e-mails enviados. Segundo, o SPF limita a avaliação a no máximo 10 consultas DNS entre `include`, `a`, `mx`, `ptr`, `exists` e `redirect`. Se resolver o seu registro exigir uma décima primeira consulta, os servidores de destino devolvem um permerror. O encaminhamento também quebra o SPF. Quando um destinatário encaminha a sua mensagem, o IP do servidor que encaminha não bate com o seu registro, e o SPF falha.

## DKIM: uma assinatura que prova que a mensagem não foi alterada

O DKIM, definido na RFC 6376, atua sobre a própria mensagem, e não sobre o servidor. Quando o seu servidor prepara uma mensagem para envio, ele cria um hash criptográfico de alguns cabeçalhos e do corpo. Depois assina esse hash com uma chave privada e grava o resultado em um cabeçalho `DKIM-Signature`. O cabeçalho traz dois valores principais: o domínio que assina, na tag `d=`, e o seletor, na tag `s=`. O DKIM só diz se a assinatura é válida. Decidir o que fazer com uma falha é tarefa do DMARC.

Quando a mensagem chega, o servidor de destino lê o seletor e o domínio no cabeçalho, consulta no DNS a chave pública em `s._domainkey.d` e confere a assinatura. O DKIM assina cabeçalhos e conteúdo. Ele não criptografa o e-mail. O corpo viaja em texto legível, mas a assinatura prova que ninguém alterou a linha de assunto, os dados do remetente ou o texto do corpo no caminho.

Como o encaminhamento comum de e-mails mantém os cabeçalhos e o corpo intactos, uma assinatura DKIM válida normalmente continua válida depois do encaminhamento. Isso torna o DKIM mais confiável do que o SPF para e-mails encaminhados. Mesmo assim, listas de discussão que acrescentam um rodapé ou marcam a linha de assunto ainda podem quebrar a assinatura. O Gmail exige chaves de pelo menos 1024 bits e recomenda 2048.

Um registro de chave pública DKIM no DNS tem esta forma:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

A tag `v=DKIM1` indica a versão do protocolo, `k=rsa` identifica o algoritmo da chave e `p=` contém a chave pública codificada em base64. Se você administra o seu próprio servidor de e-mail, pode criar um par de chaves com o nosso [gerador de DKIM](/dkim-generator).

Uma armadilha frequente acontece quando os remetentes dependem das assinaturas padrão da plataforma. Muitas plataformas de e-mail assinam os e-mails enviados com o próprio domínio compartilhado por padrão (`d=shared-esp.example`). A assinatura passa, mas o domínio que assina não bate com o domínio From visível, e o alinhamento DMARC falha. Você precisa configurar um DKIM personalizado nas configurações da plataforma, para que a assinatura use o seu domínio na tag `d=`.

## DMARC: a verificação que liga os dois ao seu endereço From

O Domain-based Message Authentication, Reporting, and Conformance liga as verificações de envelope e as assinaturas criptográficas ao endereço From visível que as pessoas leem. Alinhamento significa que o domínio que passou no SPF ou no DKIM é o mesmo domínio da linha From. O DMARC passa quando o SPF ou o DKIM passa na autenticação E está alinhado com o domínio do cabeçalho From. A mensagem não precisa ter os dois alinhados ao mesmo tempo. Mas o Google recomenda alinhar os dois e diz que exigir os dois pode acontecer no futuro.

Imagine que a sua empresa envia uma newsletter semanal. A mensagem mostra `From: news@example.com`. Para tratar os bounces, o seu serviço de e-mail usa o próprio endereço de envelope e define o Return-Path como `bounce-123@bounces.esp-mail.example`. O seu serviço também assina a mensagem com DKIM personalizado usando `d=example.com`.

Quando o servidor de destino processa essa mensagem:
1. O SPF verifica o domínio de envelope `bounces.esp-mail.example` e passa, mas `esp-mail.example` não bate com `example.com`. Então o SPF não fica alinhado para o DMARC.
2. O DKIM verifica a assinatura de `example.com`, confere o hash criptográfico e bate com o domínio do cabeçalho From, `example.com`. Então o DKIM passa e fica alinhado para o DMARC.
3. Como o DKIM passou e está alinhado, a mensagem passa no DMARC.

O DMARC oferece dois modos de alinhamento, tanto para o SPF quanto para o DKIM. O alinhamento relaxado é o padrão e permite que subdomínios do seu domínio organizacional se alinhem com o domínio raiz. Por exemplo, um e-mail enviado de `news.example.com` fica alinhado com um domínio SPF ou DKIM `example.com`. O alinhamento estrito, configurado com `aspf=s` ou `adkim=s`, exige que o domínio seja exatamente igual e não aceita diferenças de subdomínio.

O seu registro DMARC publica uma de três políticas possíveis:
- `p=none`: coloca o DMARC em modo de monitoramento. Os servidores de destino entregam os e-mails normalmente e coletam relatórios de autenticação.
- `p=quarantine`: pede aos servidores de destino que mandem os e-mails que falham no DMARC para a pasta de spam ou de lixo eletrônico.
- `p=reject`: pede aos servidores de destino que recusem os e-mails que falham no DMARC.

A tag rua diz aos servidores de destino para onde enviar os relatórios agregados. Normalmente são arquivos XML diários que mostram quais endereços IP enviaram e-mails usando o seu domínio. Um registro inicial padrão, publicado em `_dmarc.example.com`, tem esta forma:

```text
_dmarc.example.com TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

Em maio de 2026, a Internet Engineering Task Force publicou a RFC 9989 no Standards Track, junto com a RFC 9990 para relatórios agregados e a RFC 9991 para relatórios de falha. Esses novos padrões tornam oficialmente obsoletas a RFC 7489 e a RFC 9091. Registros existentes que começam com `v=DMARC1` continuam funcionando, mas a especificação atualizada ajusta várias tags operacionais. A tag de porcentagem (`pct`) e a tag de formato de relatório (`rf`) foram aposentadas e não fazem mais parte do padrão, enquanto a tag de intervalo de relatório (`ri`) passou a ser classificada como histórica. Quem testa a implantação de uma política agora usa a nova tag `t` para o modo de teste, e os administradores podem definir políticas para subdomínios que não existem usando a tag `np`. Se o seu registro DNS atual tem uma tag de porcentagem, planeje removê-la. Você pode montar um registro atualizado ou limpar tags antigas com o nosso [gerador de DMARC](/dmarc-generator).

## Como um servidor de destino verifica uma mensagem

Quando um e-mail chega a um gateway de destino, o servidor faz as verificações de autenticação em uma ordem específica:

1. O servidor aceita a conexão de rede, anota o endereço IP do remetente e avalia a saudação HELO ou EHLO.
2. O servidor extrai o domínio do Return-Path do envelope e consulta o DNS para verificar as permissões de SPF do IP de envio.
3. O servidor localiza o cabeçalho `DKIM-Signature`, consulta no DNS a chave pública em `selector._domainkey.domain` e recalcula os hashes criptográficos dos cabeçalhos e do conteúdo do corpo.
4. O servidor analisa o cabeçalho From visível e consulta no DNS um registro de política DMARC em `_dmarc.domain`.
5. O servidor avalia o alinhamento de domínio, verificando se o domínio autenticado do SPF ou o domínio autenticado do DKIM bate com o domínio From visível.
6. O servidor aplica a política DMARC publicada, none, quarantine ou reject, de acordo com o resultado do alinhamento.
7. Se você pediu relatórios com rua, o servidor inclui o resultado no próximo relatório agregado enviado a você.

No Gmail, você pode ver os três resultados com a opção Mostrar original em qualquer mensagem.

## Onde SPF, DKIM e DMARC costumam falhar

Publicar dois registros SPF é um erro frequente ao adicionar um novo serviço de e-mail. Um administrador pode seguir a documentação de configuração, adicionar `v=spf1 include:sendgrid.net ~all` e publicar um segundo registro TXT ao lado de um registro do Google que já existe. A RFC 7208 proíbe mais de um registro SPF em um mesmo domínio. Quando os servidores de destino encontram dois registros, eles param com um permerror e o SPF falha. A correção é juntar todos os fornecedores autorizados em um único texto: `v=spf1 include:_spf.google.com include:sendgrid.net ~all`.

Passar do limite de 10 consultas causa outra falha de entrega silenciosa. Toda tag `include`, `a`, `mx`, `ptr`, `exists` ou `redirect` conta para esse limite, e os includes dentro dos registros dos fornecedores também contam. Se o seu registro exigir uma décima primeira consulta, os servidores de destino devolvem um permerror automático. Para corrigir o excesso de consultas, remova registros de fornecedores antigos, use ferramentas de auditoria de consultas ou troque includes por faixas `ip4` explícitas. Faça essa troca só para IPs de envio que você controla e que não mudam.

Conectar um novo serviço de envio sem adicioná-lo ao DNS deixa os seus e-mails expostos aos filtros de spam. Equipes de vendas ou de suporte muitas vezes conectam ferramentas de agendamento, plataformas de helpdesk ou sistemas de faturas sem avisar quem cuida do DNS. Como esses novos servidores não estão no seu registro SPF e não assinam com as suas chaves DKIM, as mensagens deles falham na autenticação e caem no spam. A correção é uma regra simples: quem conectar uma ferramenta nova avisa quem cuida do DNS. Também confira nos seus relatórios DMARC se há remetentes que você não reconhece.

Depender do DKIM assinado pela plataforma quebra o alinhamento DMARC, mesmo que a assinatura seja válida do ponto de vista criptográfico. Quando um serviço de e-mail assina as mensagens com `d=platform-mail.example` e a sua linha From mostra `From: support@yourcompany.example`, o DKIM passa nas verificações técnicas, mas falha no alinhamento com o seu domínio. Para corrigir essa diferença, abra as configurações da plataforma, gere chaves DKIM personalizadas para o seu domínio e publique os registros do seletor no painel do seu DNS.

O encaminhamento de mensagens quebra o SPF sempre que um destinatário encaminha e-mails de trabalho para uma caixa pessoal. O servidor intermediário repassa a mensagem usando o próprio endereço IP, que não bate com o seu registro SPF. Você não controla as configurações de encaminhamento externas. Mas garantir que as suas mensagens tenham assinaturas DKIM válidas permite que elas continuem válidas depois do encaminhamento e cumpram os requisitos do DMARC nos servidores seguintes.

Enviar campanhas em massa por outra plataforma com um endereço From gratuito `@gmail.com` falha no DMARC por definição. As diretrizes para remetentes do Google avisam de forma explícita que se passar por endereços do Gmail a partir de servidores externos prejudica a entregabilidade. Como plataformas de terceiros não conseguem gerar assinaturas criptográficas válidas nem passar no SPF para o domínio do Google, os provedores de e-mail recusam ou colocam em quarentena esses e-mails. Os remetentes devem sempre fazer prospecção a partir de um domínio próprio.

Deixar o DMARC em `p=none` para sempre deixa o seu domínio vulnerável à falsificação. Uma política de monitoramento atende ao mínimo do Gmail e da Microsoft, mas `p=none` diz aos servidores de destino para não tomar nenhuma ação de proteção quando aparece um e-mail falsificado. Com essa configuração, o DMARC não impede alguém que falsifique o seu domínio exato. Analise os seus relatórios agregados diários por algumas semanas, confirme que todas as fontes de envio legítimas estão alinhadas e avance a sua política para `p=quarantine` e depois para `p=reject`.

## Checklist de configuração de SPF, DKIM e DMARC

Siga estes passos em ordem:

1. Liste todos os serviços internos, plataformas de marketing, ferramentas de suporte e ferramentas transacionais que enviam e-mails usando o seu domínio.
2. Publique um único [registro SPF](/glossary/spf) unificado que cubra os servidores de envio autorizados, com menos de 10 consultas no total. O [SPF checker](/spf-checker) conta as consultas para você.
3. Ative a assinatura DKIM personalizada com o seu próprio domínio em todas as plataformas de envio e publique no DNS os registros de seletor correspondentes.
4. Garanta que os seus endereços IP de envio tenham DNS direto válido e um [registro PTR](/glossary/ptr-record) correspondente configurado no DNS reverso.
5. Publique um [registro DMARC](/blog/what-is-a-dmarc-record) inicial em `_dmarc` com `p=none` e uma caixa `rua` ativa, para começar a receber relatórios agregados em XML.
6. Cadastre o seu domínio de envio no [Google Postmaster Tools](/glossary/postmaster-tools) para acompanhar a reputação do domínio, os erros de entrega e as taxas de reclamação de spam.
7. Analise os seus relatórios DMARC agregados por algumas semanas para confirmar que todo fluxo de envio legítimo está alinhado no SPF ou no DKIM.
8. Avance a sua política DMARC de `p=none` para `p=quarantine`, avalie a estabilidade da entrega e depois passe a política para `p=reject`.
9. Envie uma mensagem de teste para uma conta pessoal do Gmail e abra Mostrar original para confirmar que SPF, DKIM e DMARC dizem PASS.

## Perguntas frequentes

**O DMARC precisa de SPF e DKIM ao mesmo tempo?**
Não. O DMARC exige que o SPF ou o DKIM passe na autenticação e esteja alinhado com o domínio do cabeçalho From visível. Ter os dois protocolos ativos no seu domínio dá mais segurança quando o encaminhamento quebra o SPF, e o Google recomenda configurar os dois para envios de alto volume. Mesmo assim, uma mensagem passa no DMARC se apenas um dos mecanismos tiver um alinhamento válido.

**Qual é a diferença entre SPF e DMARC?**
O SPF autoriza endereços IP de servidores de e-mail específicos a enviar e-mails pelo endereço técnico do remetente de envelope, que fica no cabeçalho Return-Path. O DMARC analisa o endereço From visível que as pessoas veem no programa de e-mail. Ele confere se o SPF ou o DKIM está alinhado com esse domínio visível e diz aos servidores de destino se devem aceitar, colocar em quarentena ou recusar as mensagens que falham na validação.

**Preciso de DMARC se envio menos de 5.000 e-mails por dia?**
O Gmail só exige DMARC de remetentes em massa. Então você não vai ser bloqueado por não ter DMARC com volume baixo, mas continua precisando de SPF ou DKIM. Mesmo assim, vale a pena publicar um registro p=none com rua. Os relatórios mostram quais serviços enviam usando o seu domínio, inclusive os que você esqueceu e qualquer pessoa que esteja falsificando o seu domínio.

**Posso ter dois registros SPF?**
Não. A RFC 7208 proíbe publicar mais de um registro SPF em um domínio. Se os servidores de destino encontram vários registros SPF no DNS, eles interrompem a avaliação na hora com um permerror e tratam o SPF como falho. Você precisa juntar todos os endereços IP autorizados e os includes de terceiros em um único registro que começa com `v=spf1`.

**Qual é a forma mais simples de explicar o DMARC?**
O SPF confere se o servidor que envia a mensagem tem autorização para enviar pelo seu domínio. O DKIM confere uma assinatura que mostra que a mensagem não foi alterada. O DMARC é a verificação final: ele confirma que um desses dois pertence ao mesmo domínio do endereço From. Se nenhum pertence, o DMARC diz ao servidor de destino se deve entregar a mensagem mesmo assim, mandá-la para o spam ou recusá-la.

Esses registros provam quem você é, mas não resolvem para onde você envia. E-mails para endereços desativados continuam dando bounce. O nosso guia sobre [como reduzir a taxa de bounce de e-mail](/blog/how-to-reduce-email-bounce-rate) cobre esse lado, e você pode passar a sua lista pelo [Giggal.ai](/email-list-cleaning) (em inglês) antes do próximo envio.
