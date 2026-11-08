---
title: "PHP2Shell (CVE-2026-109618 e CVE-2026-109619): o que é e como corrigir o PHP"
seoTitle: "PHP2Shell: a vulnerabilidade do PHP e como corrigir"
description: "PHP2Shell são duas vulnerabilidades críticas do PHP que permitem executar código em servidores web. Versões seguras, como corrigir e o que checar depois."
slug: php2shell-vulnerabilidade
date: 2026-11-08
updated: 2026-11-08
keyword: php2shell vulnerabilidade
image: /blog/covers/pt-br/php2shell-vulnerabilidade.webp
imageAlt: "PHP2Shell: CVE-2026-109618 e CVE-2026-109619, gravidade 9,2 de 10, corrigidas no PHP 8.5.12, 8.4.27, 8.3.36 e 8.2.35"
cta: Confira se o seu domínio está em uma blacklist
---

PHP2Shell é o nome de duas falhas críticas no próprio PHP: CVE-2026-109618 e CVE-2026-109619. Elas permitem que um atacante execute o próprio código em um servidor web que roda PHP. O atacante não precisa de senha nem de conta. O PHP corrigiu as duas falhas em 21 de outubro de 2026, e os atacantes já estão usando essas falhas.

Se você for ler uma linha só, leia esta. Atualize o PHP para **8.5.12, 8.4.27, 8.3.36 ou 8.2.35** (ou mais recente) e depois **reinicie o PHP**. Um pacote novo não faz nada até os processos do PHP reiniciarem.

![O que fazer contra o PHP2Shell em 4 passos: encontre cada instalação do PHP, atualize o PHP para uma versão corrigida, reinicie o PHP e depois procure sinais de invasão](/blog/fig-pt-br-php2shell-what-to-do.webp)

## O que é o PHP2Shell, em palavras simples

O PHP é a linguagem por trás de uma grande parte dos sites. WordPress, Laravel, Drupal, Magento e phpBB rodam em PHP. A maioria desses sites roda em um servidor onde o PHP atende cada requisição de página.

O PHP2Shell não é uma falha do WordPress nem do seu código. É uma falha do PHP, o motor que fica por baixo. Por isso, todo site PHP em um servidor sem correção está exposto, mesmo que o código do site seja perfeito.

O PHP deu nota 9,2 de 10 para as duas falhas (CVSS v4.0). Essa é a faixa "crítica". O nome PHP2Shell vem do resultado: uma shell, ou seja, o atacante pode digitar comandos no seu servidor.

## Como o PHP2Shell funciona, passo a passo

Primeiro você precisa de quatro fatos sobre como o PHP atende uma página web.

1. Um servidor PHP mantém alguns "workers" do PHP em execução. Cada worker atende uma requisição web, depois a próxima, e assim por diante.
2. Para cada requisição, o PHP reserva memória para os dados dessa requisição. Isso inclui campos de formulário, cookies, arquivos enviados e dados de sessão.
3. Quando a requisição termina, o PHP limpa essa memória. A próxima requisição deveria começar sem nenhuma sobra.
4. Cada requisição tem um limite de memória, definido por `memory_limit` no `php.ini`. Se uma requisição passa desse limite, o PHP interrompe a requisição.

As duas falhas do PHP2Shell são erros nos passos 2 e 3. O PHP confunde qual memória é válida.

### Falha 1 (CVE-2026-109618): o PHP fica sem memória no meio do caminho

1. O atacante envia uma requisição montada para usar muita memória.
2. O PHP atinge o limite de memória enquanto ainda está preenchendo os dados da requisição. Parte desses dados fica escrita só pela metade.
3. O PHP interrompe a requisição e executa a limpeza.
4. A limpeza trata os dados escritos pela metade como completos. Assim o PHP trabalha com memória que contém lixo, ou dados escolhidos pelo atacante.

A solução provisória do próprio PHP para essa falha é remover o limite de memória e manter os uploads pequenos. Isso mostra que o ataque depende de atingir o limite com uma requisição grande.

### Falha 2 (CVE-2026-109619): sobras de uma requisição anterior

1. Uma requisição termina, e o PHP libera a memória que usou.
2. Por engano, o PHP guarda uma anotação que diz onde estava parte dessa memória liberada.
3. O mesmo worker pega a próxima requisição. Essa requisição pode vir do atacante.
4. Antes de o PHP apagar a anotação, a nova requisição segue essa anotação. Ela lê ou escreve memória que agora contém outra coisa.

Programadores chamam isso de falha "use after free". O PHP lista um resultado como confirmado: o atacante pode ler memória que não deveria ver. A solução provisória do PHP desativa o progresso de upload da sessão. É um recurso que informa quanto um upload de arquivo já avançou. Ele vem ativado por padrão.

### Por que um erro de memória permite executar código

A memória de um programa guarda dois tipos de coisa. Um são os dados, como texto e números. O outro é a localização das próximas instruções que o programa vai executar.

Se um atacante pode escolher o que o PHP escreve em uma memória que ele não deveria usar, ele pode mudar essas localizações. Aí o PHP executa as instruções do atacante no lugar das próprias. Isso se chama corrupção de memória. É assim que as duas falhas viram execução remota de código (RCE): alguém na internet executa comandos no seu servidor.

![Como o PHP2Shell transforma uma requisição web no controle de um servidor: o atacante envia uma requisição forjada sem login, o PHP trata mal a memória da requisição, os dados do atacante substituem os dados do PHP e o PHP executa os comandos do atacante](/blog/fig-pt-br-php2shell-how-it-works.webp)

O PHP diz que o risco é maior no Apache com mod_php. Ali, o ataque pode começar antes de qualquer código do seu site rodar. O seu site não precisa ter uma falha própria.

### As duas falhas lado a lado

| | CVE-2026-109618 | CVE-2026-109619 |
|---|---|---|
| Nome dado pelo PHP | RCE via OOM corruption | RCE via stale global state |
| O que dá errado | O PHP fica sem memória durante a preparação e depois confia em dados montados pela metade | O PHP reutiliza memória que sobrou de uma requisição anterior |
| Do que o atacante precisa | Uma requisição web, sem login | Requisições ao mesmo worker do PHP, sem login |
| Resultados confirmados | Execução remota de código | Execução remota de código, leitura de memória |
| Gravidade (CVSS v4.0) | 9,2 crítica | 9,2 crítica |

## Como as falhas foram descobertas

A PHP Foundation deu crédito a várias equipes, entre elas Calif, OpenAI e Wiz. Calif e Wiz disseram que usaram modelos de IA na pesquisa. O PHP avisou da correção com antecedência em 20 de outubro e a lançou em 21 de outubro.

Os atacantes foram mais rápidos que a correção. A Amazon viu uma tentativa de usar a falha em 17 de outubro, quatro dias antes do lançamento.

## O que um atacante pode fazer com o PHP2Shell

Quando o atacante executa código pelo PHP, ele age como a conta com que o PHP roda. Em muitos servidores Linux essa conta é `www-data`. Essa conta pode ler e alterar os arquivos do seu site.

| O que o atacante pode fazer | O que isso significa para você |
|---|---|
| Executar comandos no servidor | Ler, alterar ou apagar os arquivos do seu site. Publicar páginas falsas. |
| Ler segredos da memória | A Wiz diz que a memória vazada pode expor senhas, tokens, chaves de API e certificados das requisições de outros visitantes. |
| Ler seus arquivos de configuração | Arquivos como `wp-config.php` e `.env` guardam senhas do banco de dados. Com elas, o atacante pode copiar dados de clientes. |
| Instalar um backdoor | Um arquivo PHP escondido permite que ele volte depois que você corrigir. O NCSC pede que você procure esses arquivos. |
| Enviar spam e phishing do seu servidor | Seu domínio e seu IP entram em blacklists, e seus e-mails reais deixam de chegar. |
| Tomar o controle da máquina inteira | A Dream Research relatou atacantes que combinaram o PHP2Shell com uma falha do kernel Linux (CVE-2026-46300) para obter controle total de 24 firewalls. A Tenable não confirmou esse relato. |

## Quem é afetado

O alerta do PHP cita todas as configurações do PHP que atendem requisições web:

- PHP-FPM (a configuração mais comum com Nginx)
- Apache com mod_php
- php-cgi
- FrankenPHP
- LiteSpeed

O National Cyber Security Centre (NCSC) do Reino Unido vai além. Ele diz que toda organização que roda PHP deve presumir que está exposta, qualquer que seja a versão. Isso inclui o PHP embutido em produtos que você compra, como appliances e ferramentas hospedadas.

Em 26 de outubro, a empresa de segurança Trail of Bits disse que exploits funcionais atingem o PHP 8.2 a 8.5 sem correção. Ela mostrou esses exploits contra MediaWiki, Symfony, Laravel e phpBB.

## Alguém está usando a falha em ataques reais?

Sim. Isso não é teoria.

![Linha do tempo do PHP2Shell: primeira tentativa de ataque vista em 17 de outubro, correção lançada em 21 de outubro, incluída na lista KEV da CISA em 26 de outubro, prazo federal dos EUA para correção em 29 de outubro](/blog/fig-pt-br-php2shell-timeline.webp)

- **17 de outubro:** a equipe de inteligência de ameaças da Amazon viu uma tentativa de usar a falha. Isso foi quatro dias antes de a correção sair.
- **21 de outubro:** o PHP lançou as versões corrigidas. A Cloudflare disse que já via os primeiros ataques no mesmo dia.
- **26 de outubro:** a CISA, agência de defesa cibernética dos EUA, incluiu as duas falhas no seu catálogo Known Exploited Vulnerabilities (KEV). Essa lista só tem falhas com prova de ataques reais.
- **29 de outubro:** o prazo que a CISA deu às agências federais dos EUA para corrigir.

## Quais versões do PHP são seguras

Encontre o seu branch do PHP na tabela. Se a sua versão for menor que a versão corrigida, você está exposto.

| Seu branch do PHP | Exposto se for menor que | Versão corrigida | Observações |
|---|---|---|---|
| 8.5 | 8.5.12 | 8.5.12 | |
| 8.4 | 8.4.27 | 8.4.27 | |
| 8.3 | 8.3.36 | 8.3.36 | |
| 8.2 | 8.2.35 | 8.2.35 | O 8.2 deixa de receber correções em 31 de dezembro de 2026 |
| 8.1, 8.0, 7.4 | todas as versões | nenhuma versão oficial | O PHP publicou pequenos patches do código-fonte. O fornecedor da sua distribuição Linux pode ter uma correção. |
| 7.3 até 5.4 | todas as versões | nenhuma | Sem suporte. Atualize para um branch novo. |

**Distribuições Linux usam outros números de versão.** Debian, Ubuntu e Red Hat muitas vezes aplicam uma correção a uma versão antiga sem mudar o número. Por isso o `php -v` pode mostrar um número "antigo" em um servidor que já está seguro. Nesses sistemas, confira o aviso de segurança do fornecedor sobre a CVE-2026-109618, e não só o número.

## Como verificar a sua versão do PHP

Escolha o método que combina com a sua configuração.

| Onde o seu site roda | Como ver a versão do PHP |
|---|---|
| Seu próprio servidor (SSH) | Execute `php -v`. Para a versão que o site usa, confira também o pacote do PHP-FPM ou do Apache. |
| WordPress | Vá em **Ferramentas**, depois **Diagnóstico**, depois **Informação**, depois **Servidor**. |
| Hospedagem com cPanel | Abra o **MultiPHP Manager**. Ele mostra a versão do PHP de cada domínio. |
| Outra hospedagem compartilhada | Procure no painel da hospedagem, ou pergunte ao suporte. |

A linha de comando e o site podem usar versões diferentes do PHP no mesmo servidor. Confira a que atende as páginas web.

## Como corrigir

A correção é instalar a nova versão do PHP e reiniciar o PHP. Nas palavras do PHP: "Não há mitigações completas, atualizar é a única escolha segura."

**Hospedagem compartilhada.** A sua hospedagem corrige o PHP para você. Peça ao suporte para confirmar que o servidor roda uma versão corrigida. Se o seu painel deixa escolher a versão do PHP, escolha um branch com suporte.

**Servidor Debian ou Ubuntu.**

```bash
sudo apt update
sudo apt upgrade
sudo systemctl restart php8.3-fpm   # use your version number
sudo systemctl restart apache2      # only if you use Apache
```

**Servidor Red Hat, AlmaLinux ou Rocky Linux.**

```bash
sudo dnf upgrade 'php*'
sudo systemctl restart php-fpm
sudo systemctl restart httpd        # only if you use Apache
```

**Docker.** Troque a sua imagem por uma tag corrigida, por exemplo `php:8.4.27-fpm`. Recrie e faça o deploy de novo de cada container. Um container antigo em execução continua exposto.

Depois de qualquer um desses passos, confira de novo. Execute `php -v` ou recarregue a página Diagnóstico do WordPress. Confirme a nova versão, ou confirme o pacote corrigido do seu fornecedor.

## Se você não puder corrigir hoje

O PHP lista algumas configurações que reduzem o risco. O PHP deixa claro que elas não tornam um servidor seguro. Use essas configurações só enquanto prepara a atualização.

| Configuração | Ajuda contra | Onde definir |
|---|---|---|
| `memory_limit=-1` | CVE-2026-109618 | `php.ini`, de um jeito que os apps não possam sobrescrever |
| `post_max_size` baixo | CVE-2026-109618 | `php.ini` |
| `session.upload_progress.enabled=0` | CVE-2026-109619 | `php.ini` ou a configuração do pool do FPM. Não `ini_set()` nem `.user.ini` |
| `fatal_error_backtraces=0` | CVE-2026-109619, só PHP 8.5 | `php.ini` |

Reinicie cada worker do PHP depois de mudar essas configurações. O PHP também avisa para não usar `RLIMIT_AS` nem `RLIMIT_DATA` como limite de memória. Eles podem disparar a falha.

O NCSC dá mais uma opção. Se você não puder atualizar nem reduzir o risco rápido, tire o sistema do ar até poder.

## Verifique se você já foi invadido

Os atacantes saíram na frente. A primeira tentativa veio quatro dias antes da correção. Por isso, um servidor corrigido agora pode ter sido invadido antes.

O NCSC pede que você verifique os sistemas sem correção em busca de sinais de invasão e de backdoors. Sinais comuns em um servidor PHP:

- Novos arquivos `.php` que você não criou, muitas vezes em pastas de upload ou de cache.
- Novos usuários administradores no WordPress ou no seu app.
- Conexões de saída incomuns, ou uso de CPU que você não consegue explicar.
- Um aumento repentino de e-mails saindo do seu servidor.
- Bounces dizendo que o seu IP ou domínio está em uma blacklist.

Os dois últimos importam mesmo que o seu site pareça normal. Um servidor invadido costuma ser usado para enviar spam ou phishing a partir do seu domínio. Isso pode colocar o seu domínio em blacklists, e aí os seus e-mails reais deixam de chegar à caixa de entrada. Nosso guia sobre [como verificar se o seu domínio de e-mail está em uma blacklist](/blog/how-to-check-if-email-domain-is-blacklisted) mostra como consultar e resolver uma listagem.

Se você encontrar sinais de invasão, corrigir não basta. O atacante pode ter deixado um backdoor. Restaure a partir de um backup limpo ou chame uma equipe de resposta a incidentes.

## Dois problemas relacionados que você deve conhecer

**CVE-2026-115560.** Em 23 de outubro, o PHP publicou um alerta separado sobre o progresso de upload da sessão. O PHP considera improvável que essa falha seja usada. A configuração `session.upload_progress.enabled=0` da tabela acima também cobre esse caso.

**Um problema do SimpleXML nas versões corrigidas.** O PHP 8.4.27 e o 8.5.12 podem travar alguns apps que usam SimpleXML (php-src issue #24488). A causa é uma mudança separada, não a correção de segurança. Em 26 de outubro, uma correção tinha sido incorporada, mas ainda não lançada. Teste o seu app depois de atualizar. Não fique na versão vulnerável por causa disso.

## Assista: como a equipe de segurança do PHP lidou com o caso

```youtube
No3T8JQqhtM
Assistir: [PHP2Shell: How the PHP Security Team Handled It (with Volker Dusch)](https://www.youtube.com/watch?v=No3T8JQqhtM) por Laravel News
```

## Respostas rápidas

| Pergunta | Resposta |
|---|---|
| O que é o PHP2Shell? | Duas falhas críticas do PHP, CVE-2026-109618 e CVE-2026-109619, que permitem que atacantes executem código em um servidor. |
| É preciso fazer login? | Não. Um atacante na internet pode usar a falha sem uma conta. |
| A falha é usada em ataques? | Sim. A CISA incluiu as duas falhas no seu catálogo KEV em 26 de outubro de 2026. |
| Quais versões corrigem? | 8.5.12, 8.4.27, 8.3.36 e 8.2.35. |
| Basta atualizar o pacote? | Não. Reinicie também o PHP-FPM, o Apache ou os seus containers. |
| Um firewall resolve? | Não. Regras de um firewall web podem bloquear alguns ataques, mas só a atualização corrige a falha. |

## Fontes

- [PHP news archive 2026](https://www.php.net/archive/2026.php): notas de versão e o alerta de segurança
- [NCSC: Critical security issue affecting PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php)
- [CISA Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [Tenable: PHP2Shell FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote): relatos de ataques da Amazon, Cloudflare e Trail of Bits
