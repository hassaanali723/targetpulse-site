---
title: Spam trap
description: O que é uma spam trap, os três tipos e como cada um entra em uma lista, o que acontece quando você envia para uma e como mantê-las fora da sua lista.
slug: spam-trap
date: 2026-09-29
updated: 2026-10-12
keyword: spam trap
short: Uma spam trap é um endereço de e-mail que nenhuma pessoa real usa. Ela existe só para pegar remetentes que enviam e-mail sem permissão. Se você envia para uma spam trap, isso mostra que a sua lista foi comprada, copiada de sites ou ficou muito tempo sem limpeza.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Remova os endereços mortos antes que eles virem spam traps
---

## O que é uma spam trap?

Uma spam trap é um endereço de e-mail que parece normal, mas ninguém lê. Ninguém se cadastrou em uma newsletter com ele. Ninguém deu esse endereço a uma empresa.

Por isso, quando um e-mail chega a uma spam trap, a organização que cuida dela sabe uma coisa com certeza. O remetente não pegou aquele endereço da própria pessoa. Ele comprou o endereço, copiou de um site ou guardou em uma lista antiga por tempo demais.

Quem administra as spam traps? A documentação da Amazon para o seu serviço de envio de e-mail (Amazon SES) responde. Elas são administradas por provedores de internet, provedores de e-mail, como os grandes serviços gratuitos, e organizações antispam. Os endereços são secretos de propósito. Se os remetentes soubessem quais são, bastaria apagá-los da lista.

## Um exemplo simples

Veja como uma empresa envia para uma spam trap sem perceber.

1. **Uma loja compra uma lista.** A "Loja Online Ltda" compra 10.000 endereços de e-mail de um site que vende contatos.
2. **A lista contém uma armadilha.** Um dos endereços é info@pagina-escondida.example. Uma organização antispam colocou esse endereço em uma página da web anos atrás. Ninguém nunca usou o endereço.
3. **A loja envia uma promoção.** O e-mail vai para os 10.000 endereços, incluindo a armadilha.
4. **Nada parece errado.** A spam trap não devolve o e-mail. Ela aceita a mensagem como qualquer caixa de entrada. A loja não vê nenhum erro.
5. **A armadilha registra o remetente.** A organização anota o servidor de envio e o domínio da loja. O domínio é a parte do endereço depois do @.
6. **Os problemas aparecem depois.** Alguns dias depois, mais e-mails da loja vão para a pasta de spam. Alguns clientes param de receber a confirmação do pedido. A loja não sabe por quê.

A loja nunca recebe um aviso dizendo "você enviou para uma spam trap". Ela só vê o resultado.

## Os três tipos de spam trap

### 1. Traps puras (nunca usadas por ninguém)

Esses endereços foram criados só para ser armadilhas. Eles ficam escondidos em páginas da web. Lá, ferramentas que copiam endereços da internet, chamadas ferramentas de extração, encontram esses endereços.

**Exemplo:** um endereço como contato-7731@algum-dominio.example aparece no código de uma página. Um visitante real não vê o endereço. Uma ferramenta de extração copia o endereço.

Só listas compradas ou extraídas contêm traps puras. Uma pessoa que se cadastrou no seu site nunca é uma trap pura.

### 2. Traps recicladas (endereços antigos que viraram armadilhas)

Esses endereços já foram reais. Depois a pessoa parou de usar. Por muito tempo, o provedor deu bounce em todo e-mail enviado para eles. Bounce significa que o provedor devolveu o e-mail como não entregue. Depois disso, o provedor reativou o endereço como armadilha.

A Amazon descreve esses endereços como "that were once valid, but have been unused (and bouncing) for an extended period of time". Ou seja, eles já foram válidos, mas ficaram sem uso e dando bounce por muito tempo.

**Exemplo:** Sara se cadastrou na sua newsletter em 2019 com sara.m@empregoantigo.example. Ela saiu daquele emprego. O endereço começou a dar bounce, mas você continuou enviando. Anos depois, o endereço virou uma spam trap. O seu próximo e-mail cai nela.

Listas que nunca são limpas acumulam traps recicladas com o tempo.

### 3. Traps de erro de digitação (domínios escritos errado)

Essas armadilhas ficam em domínios que parecem um domínio conhecido, mas têm um pequeno erro de digitação.

**Exemplo:** uma pessoa digita o endereço no seu formulário de cadastro com uma letra errada no domínio. O domínio fica parecido com o de um grande provedor de e-mail, mas não é igual. Se esse domínio escrito errado for usado como spam trap, todo e-mail que você enviar para esse endereço fica registrado.

As traps de erro de digitação pegam remetentes que nunca conferem o que as pessoas digitam nos formulários.

## O que acontece quando você envia para uma spam trap

Você não recebe nenhum bounce. A spam trap aceita o e-mail como uma caixa de entrada normal. Depois a organização registra os dados do seu envio. Ela anota o seu endereço IP, que é o número que identifica o servidor de onde o e-mail saiu. Ela anota também o seu domínio.

O que acontece depois depende de quem administra a spam trap:

- **O seu endereço IP ou domínio pode entrar em uma [lista negra](/glossary/email-blacklist).** Muitos servidores de e-mail consultam essas listas e recusam e-mail de quem está nelas.
- **A sua reputação naquele provedor pode cair.** Assim, mais e-mails seus vão para a pasta de spam.
- **O seu serviço de envio pode colocar a sua conta em revisão.** Ele pode pausar os envios até você limpar a lista.

Quantos acertos em spam traps geram ação? A Amazon não dá um número. Ela diz: "even a small number of spamtrap hits can have a very negative effect". Ou seja, mesmo um número pequeno de acertos pode ter um efeito muito negativo.

## Como manter as spam traps fora da sua lista

Ninguém pode dar a você uma lista de endereços de spam trap. Eles são secretos. Por isso você protege a sua lista com bons hábitos:

1. **Nunca compre, alugue ou extraia endereços de e-mail.** É o único caminho pelo qual as traps puras entram em uma lista.
2. **Remova na hora todo endereço que der [hard bounce](/glossary/hard-bounce).** Um hard bounce significa que o endereço não existe. A Amazon diz para remover esses endereços "long before they are converted to spamtraps". Ou seja, muito antes de eles serem convertidos em armadilhas.
3. **Pare de enviar para quem não abre nem clica há meses.** As traps recicladas ficam entre os endereços antigos e silenciosos.
4. **Confira os endereços no momento do cadastro.** Um erro de digitação pego na página de cadastro nunca vira uma trap na sua lista.

## O que um verificador pode e não pode fazer

Um [validador de e-mail](/email-checker) não consegue encontrar toda spam trap. Uma trap reciclada é uma caixa de entrada real que aceita e-mail. Por isso ela pode passar na verificação como válida. Desconfie de qualquer ferramenta que prometa encontrar todas as armadilhas.

O que a [verificação de e-mail](/) faz é remover os endereços que virariam armadilhas. Ela encontra endereços que não existem mais, para você apagá-los antes que um provedor os recicle. Ela também pega domínios digitados errado antes do primeiro envio. Para limpar uma lista inteira de uma vez, use um [validador de e-mail em massa](/bulk-email-verifier). Nada disso torna segura uma lista comprada. Não comprar listas é uma decisão, não uma verificação.
