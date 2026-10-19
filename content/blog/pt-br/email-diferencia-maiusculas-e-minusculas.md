---
title: "O e-mail diferencia maiúsculas e minúsculas?"
seoTitle: "O e-mail diferencia maiúsculas e minúsculas? (Gmail e Outlook)"
description: "Quase nunca. Gmail e Outlook ignoram maiúsculas, mas o padrão deixa a parte antes do @ diferenciar. Quando isso importa e como guardar os endereços."
slug: email-diferencia-maiusculas-e-minusculas
date: 2026-10-19
updated: 2026-10-19
keyword: email diferencia maiúsculas e minúsculas
image: /blog/covers/pt-br/email-diferencia-maiusculas-e-minusculas.webp
imageAlt: Capa sobre maiúsculas e minúsculas no e-mail com as regras para domínios, Gmail, Outlook e bancos de dados
cta: Confira se o endereço de e-mail existe
---

Na maioria dos casos, endereços de e-mail não diferenciam maiúsculas e minúsculas. Digite John.Smith@gmail.com ou john.smith@gmail.com e a mensagem chega na mesma caixa de entrada. A parte depois do @ ignora maiúsculas por completo. O ponto de atenção é a parte antes do @. Tecnicamente, o padrão do e-mail permite que um servidor trate Smith e smith como duas pessoas diferentes. Vale saber disso se você tem um formulário de cadastro ou uma lista de e-mails.

## A parte depois do @ nunca diferencia

O nome de domínio que vem depois do @ nunca diferencia maiúsculas e minúsculas. A RFC 5321 diz que os domínios das caixas de e-mail seguem as regras normais do DNS, e o DNS ignora se a letra é maiúscula ou minúscula. Isso significa que GMAIL.COM, Gmail.com e gmail.com apontam para o mesmo servidor de e-mail. Você pode digitar o domínio em maiúsculas ou minúsculas sem mudar o destino da mensagem.

## O e-mail diferencia maiúsculas antes do @?

A parte local, o nome de usuário à esquerda do @, funciona de outro jeito. Segundo a seção 2.4 da RFC 5321, "a parte local de uma caixa de e-mail DEVE SER tratada como sensível a maiúsculas e minúsculas". Os servidores que repassam a sua mensagem precisam manter as letras maiúsculas e minúsculas exatamente como foram escritas. O servidor de destino, onde fica a caixa, decide se `Smith` e `smith` pertencem a duas pessoas diferentes.

A mesma seção também avisa que "explorar a sensibilidade a maiúsculas e minúsculas das partes locais das caixas de e-mail prejudica a interoperabilidade e não é recomendado". Imagine dois colegas na mesma empresa, JSmith@ e jsmith@, e quantas vezes os e-mails deles seriam trocados. Os grandes provedores evitam isso ignorando a diferença por completo.

## Gmail e Outlook

Os provedores que cuidam da maior parte dos e-mails pessoais decidiram ignorar maiúsculas e minúsculas por completo. Especialistas de produto da comunidade de ajuda do Gmail confirmam que o Gmail ignora maiúsculas, tanto na criação da conta quanto na chegada dos e-mails. Se alguém escreve para `JaneDoe@gmail.com` ou para `janedoe@gmail.com`, o Google entrega as duas mensagens na mesma caixa. O Google também trata `@googlemail.com` e `@gmail.com` como o mesmo endereço.

O Gmail também ignora pontos em endereços pessoais, então `jane.doe@gmail.com` e `janedoe@gmail.com` chegam na mesma caixa de entrada. Mas não presuma que isso vale em todo lugar. A documentação do Google diz que os pontos importam em contas do Google Workspace gerenciadas por domínios de trabalho ou de escola. Pontos e maiúsculas são regras separadas. Não presuma que outro provedor ignora pontos só porque o Gmail ignora.

A resposta da Microsoft é parecida. Em uma resposta no fórum de suporte da Microsoft, um participante explica três coisas. A parte depois do @ nunca diferencia maiúsculas e minúsculas. No nome de usuário, isso depende do provedor. E grandes provedores como Outlook e Gmail ignoram a diferença. A mesma resposta acrescenta que algumas empresas usam servidores próprios que diferenciam maiúsculas e minúsculas.

## Quando as maiúsculas ainda podem causar problemas

O problema costuma aparecer no login. Imagine que você se cadastra como `Sarah@example.com` no celular, porque o teclado colocou a primeira letra em maiúscula. Depois você faz login digitando `sarah@example.com`, e um sistema mal feito diz que a conta não existe. O usuário não mudou o endereço. O formulário de login é que comparou o texto diferenciando maiúsculas e minúsculas.

Listas e CRMs têm a sua própria versão do problema. Quando alguém se cadastra como `Bob@company.com` e depois baixa um material como `bob@company.com`, muitas plataformas contam dois leads separados. Isso infla as suas métricas e faz as pessoas receberem campanhas duplicadas. Remova os registros duplicados ignorando maiúsculas e minúsculas antes de [verificar ou enviar](/email-list-cleaning) (em inglês) para uma lista de marketing.

E existe o servidor raro de empresa que diferencia maiúsculas e minúsculas, a exceção que a resposta da Microsoft cita. Se um contato escreve o endereço como `M.MacDonald@specialtycorp.com` no cartão de visita, mantenha essas maiúsculas quando escrever para ele. Isso não atrapalha os sistemas comuns e evita problemas de entrega nos sistemas que diferenciam.

## Se você armazena endereços de e-mail

Se você desenvolve aplicações web ou gerencia bancos de dados de contatos, use uma abordagem que preserve as maiúsculas. Guarde o endereço exatamente como o usuário digitou, mas faça todas as comparações, buscas e verificações de unicidade em minúsculas.

Preservar o texto original respeita a forma como o usuário quer ver o endereço no perfil e nos cabeçalhos de e-mail. Já a normalização em minúsculas evita contas duplicadas. Se alguém se cadastra como `IStillUse@AOL.COM`, não force o nome exibido para minúsculas. Mas trate `iSTilLUSE@aol.com` como uma duplicata dele.

Para garantir unicidade no PostgreSQL, crie um índice sobre a expressão em minúsculas em vez de uma restrição unique simples:

```sql
CREATE UNIQUE INDEX users_email_lower ON users (lower(email));
```

O PostgreSQL também oferece a extensão `citext`, que compara textos sem diferenciar maiúsculas e minúsculas. No MySQL, a collation padrão (`utf8mb4_0900_ai_ci`) já não diferencia maiúsculas e minúsculas. Então as chaves unique comuns já tratam duplicatas com letras diferentes, sem funções extras.

Cuidado com a armadilha da conversão para minúsculas em linguagens de backend, principalmente em Java. Em Java, chamar `email.toLowerCase()` usa o locale padrão do servidor. Em um locale turco, a letra latina maiúscula `I` vira `ı` (um i minúsculo sem pingo) em vez de `i`. Isso quebra endereços como `INFO@example.com`. Para evitar esse bug, passe `Locale.ROOT`:

```java
// Locale.ROOT avoids language-specific letter mapping like Turkish dotless i
String cleanEmail = email.toLowerCase(Locale.ROOT);
```

O `toLowerCase()` do JavaScript não tem esse problema, porque usa os mapeamentos padrão do Unicode e não as configurações de locale do servidor. Só o `toLocaleLowerCase()` depende do locale.

Para pegar formatos quebrados e entradas ruins antes que cheguem ao seu banco de dados, valide os endereços no cadastro com uma [API de validação de e-mail](/email-validation-api) (em inglês). Ela pega erros de digitação e domínios desativados enquanto a pessoa ainda está na página.

## Perguntas frequentes

**O Gmail diferencia maiúsculas e minúsculas?**
Não. O Gmail ignora maiúsculas e minúsculas na criação da conta e na entrega das mensagens. Se o seu endereço é john.doe@gmail.com, você recebe mensagens enviadas para JOHN.DOE@gmail.com e para John.Doe@googlemail.com. Não é possível registrar uma conta nova cujas letras só mudam de maiúscula para minúscula em relação a um usuário que já existe.

**Faz diferença digitar meu e-mail com letras maiúsculas?**
Em envios normais para caixas pessoais e corporativas, letras maiúsculas não impedem a entrega. O servidor de destino ignora a diferença e entrega a mensagem normalmente. Você só precisa tomar cuidado com formulários de login que comparam endereços de e-mail como textos exatos.

**Um ID de e-mail diferencia maiúsculas e minúsculas?**
Na prática, não. ID de e-mail é só outro nome para endereço de e-mail, e o Gmail, o Outlook e os outros grandes provedores ignoram maiúsculas nele. O padrão permite que um servidor trate maiúsculas antes do @ como diferentes, mas isso é raro. Então escrever o seu ID com maiúsculas para facilitar a leitura dificilmente vai fazer você perder algum e-mail.

**Devo salvar os endereços de e-mail em minúsculas?**
Você deve comparar e indexar os endereços de e-mail em minúsculas para evitar contas duplicadas e falhas de login. Manter as maiúsculas originais do usuário em uma coluna de exibição permite formatar as notificações de forma limpa. Se você só pode manter uma coluna, guarde o endereço como foi digitado e compare usando lower(), para não perder o original.

**Letras maiúsculas podem fazer um e-mail dar bounce?**
Muito raramente. Isso só acontece em um servidor incomum configurado para tratar Admin@ e admin@ como caixas separadas. Se um endereço com maiúsculas der bounce, procure outra causa primeiro, como um erro de digitação ou uma caixa que não existe mais. O código na mensagem de bounce diz qual é, como explicamos em [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce).

Maiúsculas não impedem um e-mail de chegar, mas [um erro de digitação](/email-checker) impede. Se você vai limpar uma lista de contatos antes do próximo envio, passe a lista pelo [Giggal.ai](/email-list-cleaning) (em inglês) para encontrar antes as caixas desativadas e os domínios quebrados.
