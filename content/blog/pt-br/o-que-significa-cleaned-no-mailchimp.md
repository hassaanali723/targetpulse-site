---
title: "O que significa Cleaned no Mailchimp?"
seoTitle: "O que significa Cleaned no Mailchimp? Causas e o que fazer"
description: "Cleaned no Mailchimp significa que o endereço deu hard bounce ou soft bounces repetidos e o Mailchimp parou de enviar para ele. Causas, custo e o que fazer."
slug: o-que-significa-cleaned-no-mailchimp
date: 2026-10-19
updated: 2026-10-19
keyword: o que significa cleaned no mailchimp
image: /blog/covers/pt-br/o-que-significa-cleaned-no-mailchimp.webp
imageAlt: Guia do status Cleaned no público do Mailchimp com as causas de bounce e as diferenças entre os status
cta: Encontre os endereços inválidos antes que o Mailchimp os marque como Cleaned
---

Cleaned no Mailchimp significa que o Mailchimp parou de enviar para aquele endereço. O motivo é que ele deu hard bounce, ou deu soft bounce vezes demais, e o Mailchimp o considera inválido. O nome confunde as pessoas, porque cleaned (limpo) dá a impressão de que o Mailchimp arrumou ou consertou algo para você. Na verdade, nada foi consertado. O contato continua no seu público com a etiqueta Cleaned, não pode receber nenhum e-mail seu e não conta para o seu limite mensal de contatos.

## Por que o Mailchimp marca um endereço como Cleaned

Hard bounces são falhas de entrega permanentes, em que um servidor de destino recusa um e-mail direto. Os motivos comuns citados pelo Mailchimp são uma caixa de e-mail que não existe e um servidor de destino que bloqueou a entrega de forma permanente. Erros de digitação, como escrever con em vez de com, e endereços antigos de pessoas que saíram de uma empresa são exemplos típicos. Na maioria dos casos, o Mailchimp marca como Cleaned na hora, de forma automática, os endereços que dão hard bounce. Assim, eles ficam de fora de todas as próximas campanhas enviadas ao seu público.

Os soft bounces funcionam de outro jeito, porque são falhas de entrega temporárias. Quando um endereço dá soft bounce, o Mailchimp tenta entregar de novo nos próximos envios, em vez de cortar o endereço na hora. Mas, se um endereço continua falhando várias vezes, o Mailchimp transforma a falha em hard bounce e marca o endereço como Cleaned. O Mailchimp usa uma contagem específica nesse processo. Ele marca um endereço como Cleaned depois de 7 soft bounces se o contato não tem atividade anterior como assinante. Para contatos com atividade anterior, ele aceita até 15 soft bounces.

O Mailchimp lista vários motivos para uma mensagem de campanha dar soft bounce. A caixa do destinatário pode estar cheia, inativa ou mal configurada. O servidor de e-mail dele pode estar fora do ar, ou a sua campanha pode ter enviado e-mails demais para esse servidor em pouco tempo. Outros motivos de soft bounce incluem mensagens grandes demais, domínios que não existem temporariamente, filtros de conteúdo ou mensagens que não podem ser repassadas. Um e-mail também pode dar soft bounce se não cumprir os requisitos de antivírus, antispam ou de remetente do servidor de destino, ou se a mensagem [falhar no DMARC](/blog/spf-dkim-dmarc-explained).

O Mailchimp diz que não consegue prever se um e-mail vai dar bounce antes do envio, e que cada provedor de e-mail devolve mensagens com base nas próprias regras. Quando o envio de uma campanha termina, os avisos de bounce ficam disponíveis nos relatórios de e-mail do Mailchimp por 30 dias. Você pode ler mais sobre como os servidores de e-mail classificam problemas de entrega no nosso guia sobre [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce), ou consultar o guia do Mailchimp sobre [Soft vs. Hard Bounces](https://mailchimp.com/help/soft-vs-hard-bounces/).

## Cleaned, Unsubscribed, Archived e os outros tipos de contato

O Mailchimp divide os contatos em categorias diferentes. Elas definem se o contato pode receber mensagens e se você paga por ele:

| Status | O que significa | Pode receber | Conta para o limite de contatos |
| --- | --- | --- | --- |
| Subscribed (inscrito) | Aceitou receber as suas campanhas de e-mail | E-mails de marketing, SMS de marketing, anúncios, e-mails transacionais | Sim |
| Unsubscribed (descadastrado) | Pediu para não receber as suas campanhas de marketing | Anúncios e e-mails transacionais | Sim |
| Non-subscribed (não inscrito) | Interagiu com você (uma loja, uma integração ou uma importação), mas nunca aceitou receber e-mails | Anúncios e e-mails transacionais | Sim |
| Cleaned (limpo) | O endereço teve um hard bounce ou soft bounces repetidos e não pode receber entregas | Nada | Não |
| Pending (pendente) | Preencheu um formulário de cadastro, mas não confirmou o double opt-in | Nada | Não |
| Archived (arquivado) | Saiu do público ativo, mas os dados do perfil foram mantidos | Nada | Não |
| Deleted (excluído) | Removido de vez. Não dá para desfazer | Nada | Não |

Os status Cleaned e Unsubscribed impedem você de enviar campanhas de marketing para um endereço de e-mail. Mas a diferença importa na sua fatura mensal. Unsubscribed é uma escolha do assinante, e o Mailchimp continua contando esse contato no seu limite mensal de contatos. Cleaned é uma decisão do Mailchimp depois que a entrega falha. O endereço não pode receber nada, e o Mailchimp não cobra por ele. Contatos Pending que continuam sem confirmação saem do seu público automaticamente depois de 60 dias. Contas em planos pagos antigos, criadas antes de 15 de maio de 2019, podem ter regras diferentes de limite de contatos.

## O que fazer com os contatos Cleaned

O Mailchimp recomenda arquivar os contatos Cleaned em vez de excluí-los. Arquivar mantém o histórico do contato e mantém o endereço ruim registrado no seu público. Segundo o Mailchimp, isso ajuda você a não dar bounce nele de novo. O Mailchimp recomenda excluir contatos só para pedidos de conformidade com o GDPR, porque a exclusão apaga o registro de vez e não pode ser desfeita. Arquivar contatos Cleaned não reduz a sua fatura mensal, porque endereços Cleaned já não contam para o limite do seu plano. O Mailchimp explica essa política na documentação [About Cleaned Contacts](https://mailchimp.com/help/about-cleaned-contacts/).

Para revisar ou exportar todos os endereços Cleaned do seu público no Mailchimp, você pode separá-los com segmentos:

1. Abra a aba Audience (Público) no painel do Mailchimp e clique em Segments (Segmentos).
2. Clique em Create segment (Criar segmento).
3. Defina o critério do segmento para que Email subscription status (status da inscrição de e-mail) seja Cleaned.
4. Clique em Use segment (Usar segmento), dê um nome ao segmento e salve.
5. Abra o segmento salvo, clique em Export segment (Exportar segmento) e confirme o pedido de exportação.
6. Clique em View exports (Ver exportações) no aviso de notificação e depois em Download CSV para salvar o arquivo.

Quando um contato é marcado como Cleaned por causa de um erro de digitação simples, como user@gmai.com ou name@conpany.com, você não consegue editar o registro do contato. Para corrigir o erro, adicione o endereço corrigido como um contato totalmente novo. Como o Mailchimp não cobra por endereços Cleaned, manter o registro original com o erro de digitação não custa nada.

Às vezes, endereços de e-mail válidos dão hard bounce. Antes de agir, confira o motivo do bounce no relatório da campanha. Um firewall corporativo rígido ou um filtro de spam pode ter recusado a mensagem com respostas SMTP como Denied, Unacceptable Content ou Blocked (negado, conteúdo inaceitável ou bloqueado). Em ambientes corporativos, um filtro da empresa pode bloquear todos os IPs de envio do Mailchimp. A equipe de TI do destinatário pode corrigir isso adicionando os IPs do Mailchimp à lista de permitidos. Em outros casos, um grande provedor de e-mail pode estar bloqueando você temporariamente. Segundo o Mailchimp, esse bloqueio pode cair em um ou dois dias, quando as reclamações de spam diminuem. Você pode entender as respostas de erro de cada servidor [lendo as mensagens de bounce](/blog/550-5-7-1-error). Se o endereço é com certeza válido e a barreira de entrega foi removida, o contato precisa se cadastrar de novo pelo seu formulário para voltar ao seu público. O Mailchimp não permite que você mude manualmente um contato Cleaned de volta para Subscribed.

## Quando muitos contatos viram Cleaned de uma vez

Se uma campanha recente fez um grande grupo de contatos virar Cleaned de uma vez, a sua conta pode correr risco de suspensão automática. O Mailchimp suspende contas automaticamente quando um único envio passa dos limites estabelecidos no setor para bounces, descadastros ou denúncias de abuso. O Mailchimp diz que os provedores de internet e as organizações antispam exigem que ele aplique esses limites. Se o Mailchimp suspender a sua conta, os envios ficam desativados enquanto as equipes de conformidade investigam. Mas o login, as chamadas de API e o acesso aos dados continuam funcionando normalmente.

Listas antigas são a causa mais provável, porque as pessoas mudam de emprego, abandonam caixas de e-mail e encerram contas. Se você não envia e-mails para o seu público há algum tempo, o Mailchimp sugere reconfirmar os seus contatos antes de agendar uma campanha grande, pedindo aos assinantes que confirmem que ainda querem receber as suas mensagens.

O Mailchimp também recomenda fortemente autenticar o seu domínio de envio, [configurar o DMARC](/blog/what-is-a-dmarc-record) e nunca usar um endereço de e-mail gratuito do Gmail ou do Yahoo como endereço From.

## Como evitar que contatos virem Cleaned

A forma mais direta de evitar que endereços virem Cleaned é verificar as suas listas antes de importá-las ou de enviar campanhas. Uma ferramenta de verificação de e-mail testa se cada caixa existe de fato no servidor de destino antes que a campanha saia. Isso impede que endereços inválidos deem bounce na sua conta. É aqui que o [Giggal pode se conectar ao Mailchimp](/integrations) usando uma chave de API. Ele importa os contatos Subscribed do seu público, confere se cada caixa existe e resolve os endereços em [domínios catch-all](/catch-all-verification). Quando a verificação termina, você baixa os resultados em um arquivo CSV e arquiva ou descadastra manualmente os endereços ruins dentro do Mailchimp. A integração não muda nada no seu público do Mailchimp.

Verificar antes de enviar mantém os bounces baixos. Se você tem um segmento mais antigo que não recebe e-mails há algum tempo, passe esse segmento por um verificador ou envie uma campanha de reconfirmação antes de incluí-lo em uma newsletter principal. Garanta que os registros de autenticação do seu domínio continuem válidos no DNS, porque uma falha de alinhamento DMARC é um dos motivos de soft bounce reconhecidos pelo Mailchimp. Lembre que verificar o seu público não recupera contatos que o Mailchimp já marcou como Cleaned. Depois que um endereço recebe o status Cleaned, o Mailchimp só permite que a pessoa volte por um novo cadastro no seu formulário.

## Perguntas frequentes

**Contatos Cleaned contam na minha fatura do Mailchimp?**
Não. Contatos Cleaned não contam para o seu limite mensal de contatos, e o Mailchimp não cobra por eles. Entre os tipos de contato, só os contatos Subscribed, Unsubscribed e Non-subscribed contam para o limite de contatos do seu plano.

**Posso reinscrever um contato Cleaned?**
Não. Você não consegue mudar manualmente um contato Cleaned de volta para Subscribed no painel do Mailchimp. O assinante precisa informar os dados de novo pelo formulário de cadastro hospedado no Mailchimp ou por um formulário incorporado no seu site para voltar a se inscrever.

**Quantos soft bounces até o Mailchimp marcar um contato como Cleaned?**
O Mailchimp marca um endereço como Cleaned depois de 7 soft bounces se o contato não tem atividade anterior como assinante registrada. Se o contato tem atividade anterior como assinante, o Mailchimp aceita até 15 soft bounces antes de transformar o endereço em hard bounce e marcá-lo como Cleaned.

**Devo excluir os contatos Cleaned?**
Não. O Mailchimp recomenda arquivar os contatos Cleaned em vez de excluí-los. Arquivar mantém o registro no seu público, o que, segundo o Mailchimp, ajuda você a não dar bounce nesse endereço de novo. O Mailchimp diz para excluir contatos só por motivos de GDPR.

**Por que o Mailchimp marcou como Cleaned um endereço que eu sei que é válido?**
Endereços de e-mail válidos podem dar hard bounce se um filtro de spam ou um firewall corporativo bloquear os servidores do Mailchimp com respostas SMTP como Denied ou Blocked. Se o destinatário pedir ao administrador da rede para colocar os IPs de envio do Mailchimp na lista de permitidos, ele pode voltar ao seu público pelo seu formulário de cadastro.

A etiqueta Cleaned é o Mailchimp protegendo a sua reputação de envio depois do problema. Verificar antes impede que o bounce aconteça. Passe a sua lista de assinantes pelo [Giggal.ai](/email-list-cleaning) (em inglês) antes do próximo envio para encontrar os endereços inválidos antes que o Mailchimp os marque como Cleaned.
