---
title: Aquecimento de e-mail (email warm up)
description: O que é aquecimento de e-mail, por que um domínio novo precisa dele, um exemplo de cronograma semana a semana e os erros que desfazem o aquecimento.
slug: aquecimento-de-e-mail
date: 2026-10-12
updated: 2026-10-12
keyword: aquecimento de e-mail
short: Aquecimento de e-mail é aumentar aos poucos a quantidade de e-mails que um endereço ou domínio novo envia por dia. Assim o Gmail, o Outlook e outros provedores conhecem o novo remetente e passam a confiar nele. Sem aquecimento, um volume alto logo no início pode levar os seus e-mails ao spam.
related: ip-warming, domain-reputation, sender-reputation, deliverability, bounce-rate, spam-filter
cta: Verifique a lista antes da primeira campanha
---

## O que é aquecimento de e-mail?

Aquecimento de e-mail, ou email warm up, é começar a enviar devagar com um endereço ou domínio novo. Você envia poucos e-mails por dia no início. Depois aumenta a quantidade semana a semana.

O domínio é a parte do endereço de e-mail depois do @. Em vendas@lojaverde.com.br, o domínio é lojaverde.com.br.

O objetivo é construir um histórico. Os provedores de caixa de entrada, como Gmail e Outlook, decidem onde colocar um e-mail com base no histórico de quem envia. Um remetente novo ainda não tem esse histórico.

## Por que um domínio novo precisa de aquecimento

Um domínio registrado na semana passada nunca enviou e-mail. O Gmail não sabe se quem está por trás dele é uma empresa real ou um remetente de spam.

Quem envia spam costuma registrar domínios novos e enviar muitos e-mails de uma vez. Por isso os provedores tratam um domínio novo com cuidado. Se ele enviar 5.000 e-mails no primeiro dia, muitos podem ir para o spam ou ser recusados.

Com o aquecimento, o provedor vê um padrão diferente. Poucos e-mails, enviados para pessoas que abrem e respondem. Esse histórico forma a [reputação do domínio](/glossary/domain-reputation).

## Um exemplo de cronograma de aquecimento

Marcos abriu uma consultoria e criou o domínio consultoriamarcos.com.br. Ele quer enviar e-mails de prospecção para empresas. Este é um exemplo de cronograma. Os números são ilustrativos.

| Semana | E-mails por dia (exemplo) | Para quem |
| --- | --- | --- |
| 1 | cerca de 20 | Contatos que conhecem Marcos e devem responder |
| 2 | cerca de 40 | Contatos conhecidos e os primeiros clientes em potencial |
| 3 | cerca de 80 | Clientes em potencial com endereços verificados |
| 4 | cerca de 150 | Clientes em potencial com endereços verificados |
| 5 em diante | Aumento gradual até o volume desejado | Sempre com a lista verificada |

Os cronogramas reais variam. Eles dependem do provedor, do tipo de e-mail e de como as pessoas reagem. Se as respostas forem boas, Marcos pode aumentar mais rápido. Se muitos e-mails voltarem ou forem para o spam, ele deve manter o volume ou reduzir.

## Aquecimento manual e ferramentas de aquecimento

Existem duas formas de aquecer um domínio.

**Aquecimento manual.** Você mesmo envia e-mails reais, para pessoas reais, aumentando o volume aos poucos. Você começa pelos contatos com mais chance de abrir e responder.

**Ferramentas de aquecimento.** Alguns serviços conectam a sua caixa de e-mail a uma rede de outras caixas. A ferramenta envia e-mails automáticos entre essas caixas. As outras caixas abrem os seus e-mails, respondem e os tiram da pasta de spam quando caem lá. A ideia é criar sinais de interação enquanto o volume real ainda é baixo.

As duas formas têm o mesmo objetivo. Nenhuma substitui uma lista boa e e-mails que as pessoas querem receber.

## Aquecimento de e-mail e aquecimento de IP

Os dois termos se parecem, mas tratam de coisas diferentes.

- **Aquecimento de e-mail** constrói a reputação de um endereço ou de um domínio novo.
- **[Aquecimento de IP](/glossary/ip-warming)** constrói a reputação de um endereço IP novo. Um endereço IP é o número que identifica um servidor na internet. Isso importa quando você passa a usar um IP dedicado, só seu.

Se você usa um IP compartilhado de um ESP, o IP já tem histórico. Você ainda precisa aquecer um domínio novo.

## Erros que desfazem o aquecimento

- **Enviar para uma lista não verificada.** Na primeira semana, você envia para endereços antigos. Muitos não existem e voltam como [hard bounce](/glossary/hard-bounce). O provedor vê um remetente novo com muitos bounces. Isso é exatamente o sinal que o aquecimento tenta evitar.
- **Pular etapas.** Sair de 40 para 1.000 e-mails por dia de uma vez cria um pico de volume, e os provedores desconfiam de picos.
- **Parar e voltar.** Ficar semanas sem enviar e depois enviar um volume grande parece o comportamento de um remetente novo.
- **Ignorar os sinais.** Se a [taxa de bounce](/glossary/bounce-rate) ou as reclamações subirem, pare de aumentar o volume.
- **Esquecer a autenticação.** Configure [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc) antes do primeiro e-mail.

## Aquecimento de e-mail e verificação de e-mail

Verifique a lista antes da primeira campanha real. Um [validador de e-mail em massa](/bulk-email-verifier) confere cada endereço e separa os que não existem. Para conferir um endereço só, use um [validador de e-mail](/email-checker). Com a [verificação de e-mail](/), o domínio novo começa o histórico com poucos bounces, e o aquecimento não é desfeito na primeira semana.
