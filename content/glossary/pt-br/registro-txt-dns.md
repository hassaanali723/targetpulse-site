---
title: Registro DNS TXT
description: O que é um registro DNS TXT, para que ele serve no e-mail (SPF, DKIM e DMARC), como adicionar um, os erros que o quebram e como verificá-lo. Com exemplos.
slug: registro-txt-dns
date: 2026-10-22
updated: 2026-10-22
keyword: registro txt dns
short: Um registro DNS TXT é uma linha de texto guardada nas configurações do seu domínio. Os servidores de e-mail leem registros TXT para verificar SPF, DKIM e DMARC. Outros serviços leem esses registros para confirmar que o domínio é seu.
related: spf, dkim, dmarc, mx-record, ptr-record, bimi
cta: Os seus registros estão prontos. Agora verifique os endereços para quem você envia
---

## O que é um registro DNS TXT?

Um registro DNS TXT é uma linha de texto guardada nas configurações do seu domínio. Qualquer pessoa na internet pode ler esse registro.

Primeiro, o que é DNS. DNS significa Domain Name System, ou sistema de nomes de domínio. Ele funciona como uma lista telefônica pública de domínios. Quando alguém digita o seu domínio, o DNS diz ao computador dessa pessoa onde encontrá-lo. O DNS guarda diferentes tipos de informação, chamados registros. Cada tipo de registro tem uma função.

Um registro TXT guarda texto simples. Ele não leva ninguém a lugar nenhum. É uma nota presa ao seu domínio. Outros sistemas leem a nota e agem com base nela.

## Para que servem os registros TXT

No e-mail, os registros TXT guardam as regras que provam que os seus e-mails são verdadeiros.

| Uso | Onde fica o registro | Valor de exemplo |
|---|---|---|
| **[SPF](/glossary/spf)** | o seu domínio, por exemplo `example.com` | `v=spf1 include:_spf.google.com ~all` |
| **[DKIM](/glossary/dkim)** | `selector._domainkey.example.com` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
| **[DMARC](/glossary/dmarc)** | `_dmarc.example.com` | `v=DMARC1; p=none; rua=mailto:reports@example.com` |
| **Propriedade do domínio** | o seu domínio | `google-site-verification=abc123...` |

Os valores acima são exemplos encurtados. Os seus valores reais vêm do seu provedor de e-mail ou do serviço que você está conectando.

## Um exemplo simples

Veja como um registro TXT é adicionado.

1. **Marco começa a usar o Google Workspace.** Ele quer que os e-mails de marco@studio.example cheguem às caixas de entrada.
2. **O Google passa um valor para ele.** O guia de configuração pede que ele adicione um registro SPF com `v=spf1 include:_spf.google.com ~all`.
3. **Marco abre as configurações do domínio.** Ele entra no site onde comprou o domínio. Esse site se chama registrador ou provedor de DNS.
4. **Ele adiciona um registro TXT.** Ele escolhe o tipo TXT, deixa o nome como o seu domínio e cola o valor.
5. **Ele espera.** A mudança pode levar de alguns minutos a algumas horas para aparecer em todo lugar.
6. **Agora os servidores podem verificar Marco.** Quando Marco envia um e-mail, o servidor de destino lê o registro TXT dele. Ele vê que os servidores do Google podem enviar e-mail por studio.example.

## Erros comuns que quebram registros TXT

A maioria dos problemas com registros TXT vem de alguns erros simples.

- **Só um registro SPF por domínio.** Se um domínio tem dois registros TXT que começam com `v=spf1`, o SPF falha. Junte os dois em um único registro.
- **Valores longos são divididos.** Um trecho de texto em um registro TXT pode ter até 255 caracteres. Valores longos, como chaves DKIM, são guardados em vários trechos. A maioria dos provedores de DNS faz isso por você.
- **Use o nome exato.** Um registro DMARC precisa ficar em `_dmarc`, não no seu domínio principal. Um registro DKIM precisa ficar no nome do seletor (selector) que o seu provedor informa.
- **Copie o valor exatamente.** Um caractere faltando torna o registro inútil.

## Como verificar um registro TXT

Você pode ler os registros TXT de qualquer domínio. Em um computador Mac ou Linux, abra o terminal e digite `dig TXT example.com`. No Windows, digite `nslookup -type=TXT example.com`.

Você também pode usar o nosso [SPF checker](/spf-checker). Ele lê o registro SPF de um domínio e explica o que ele permite.

## Como os registros TXT se relacionam com a verificação

Os registros TXT protegem o e-mail que você envia. Eles provam que o e-mail vem de você. Eles não dizem nada sobre se a pessoa para quem você escreve ainda tem uma caixa de entrada.

Essa é outra verificação. Um [verificador de e-mail](/email-checker) pergunta ao servidor de destino se um endereço existe. Você precisa das duas coisas: registros corretos no seu domínio e uma lista limpa de endereços reais.
