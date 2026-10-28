---
title: "Regex de Email: Padrões Testados para JavaScript, Python e HTML (e Onde o Regex Para)"
seoTitle: "Regex de Email: Padrões para JavaScript, Python e HTML"
description: "Padrões regex testados para validar email em JavaScript, Python e formulários HTML5. Entenda o RFC 5322, casos de borda e por que regex não verifica a caixa postal."
slug: regex-de-email
date: 2026-10-27
updated: 2026-10-27
keyword: regex email
image: /blog/covers/pt-br/regex-de-email.webp
imageAlt: Padrões de regex para validação de email e camadas de entrega
cta: Valide sua lista de emails com a Giggal.ai
---

Validar um endereço de email com expressão regular parece algo simples até que você se depara com dados reais em produção. Um endereço como `lucas+novidades@sub.dominio.com.br` é totalmente legítimo, enquanto `usuario@localhost` ou `teste..123@dominio.com.br` causam problemas imediatos.

Ao consultar as normas oficiais (RFC 5321 e RFC 5322), surge um obstáculo: construir uma expressão regular capaz de cobrir todas as combinações permitidas exige mais de 6.500 caracteres. Esse padrão teórico aceita comentários entre parênteses, textos entre aspas com espaços e endereços IP diretos. Em uma aplicação web moderna, essa regex é inviável: consome processamento desnecessário, é ilegível e aceita formatos arcaicos que nenhum provedor de email aceita atualmente.

Na prática, o que você precisa é de um padrão pragmático: uma expressão regular que bloqueie erros óbvios de digitação sem barrar usuários reais.

| Tipo de Padrão | Parte Local (antes do @) | Subdomínios e TLD | Uso Recomendado |
| --- | --- | --- | --- |
| **Padrão de Produção** | Letras, números, `._%+*-` | Múltiplos subdomínios, TLD de 2+ letras | Cadastros em sites, aplicações web |
| **Nativo HTML5** | Subconjunto RFC (ASCII) | Punycode / Alfanumérico | Checagem rápida no navegador |
| **Minimalista** | Qualquer caractere menos espaços e `@` | Pelo menos um ponto após o `@` | Validação tolerante, scripts internos |

---

## O padrão regex recomendado para produção

Para a grande maioria dos projetos web, recomendamos um padrão que valide as regras usuais de nomenclatura e aceite terminações modernas de domínio:

```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### Explicação do padrão token por token

Entender cada parte da expressão demonstra como ela evita falhas comuns de entrada:

1. `^`: Marca o início do texto, impedindo correspondências parciais.
2. `[a-zA-Z0-9._%+-]+`: Aceita um ou mais caracteres permitidos no nome de usuário (parte local): letras maiúsculas e minúsculas, dígitos, pontos, underscores, porcentagens, sinais de mais e hifens.
3. `@`: Exige exatamente um caractere arroba.
4. `[a-zA-Z0-9.-]+`: Valida o nome do domínio, permitindo letras, números, hifens e pontos para subdomínios (como `mail.marketing.exemplo`).
5. `\.`: Identifica o ponto que separa o domínio da extensão.
6. `[a-zA-Z]{2,}`: Exige no mínimo duas letras para o domínio de topo (TLD). Aceita `.br`, `.com` e novas extensões como `.technology` ou `.digital`, bloqueando entradas incompletas como `usuario@dominio.c`.
7. `$`: Marca o encerramento da cadeia de texto.

---

## Padrões alternativos para diferentes necessidades

Dependendo do ponto em que o dado é verificado, você pode adotar uma regra mais rígida ou mais flexível.

### 1. O padrão W3C para HTML5

O consórcio W3C adota a seguinte expressão para validação nativa em campos `<input type="email">`:

```regex
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$
```

Essa especificação segue o HTML5. Ela permite caracteres especiais como `!` e `~` na parte local e garante que cada rótulo do domínio tenha no máximo 63 caracteres.

### 2. O regex minimalista

Se a intenção for apenas checar no navegador se a pessoa não enviou um campo em branco ou texto aleatório antes de acionar um validador no backend:

```regex
^[^\s@]+@[^\s@]+\.[^\s@]+$
```

Esse padrão confere três itens: sem espaços antes do `@`, sem espaços depois do `@` e pelo menos um ponto no domínio. Não gera rejeições indevidas em formatos raros.

---

## Implementação em JavaScript, Python e HTML

Veja como implementar a checagem nos ambientes de desenvolvimento mais comuns.

### 1. Validação de email em JavaScript (Frontend e Node.js)

Em JavaScript, sempre remova espaços em branco nas extremidades e confira o tamanho total da string:

```javascript
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  
  // Remove espaços no início e no final
  const cleanEmail = email.trim();
  
  // Limite máximo segundo o RFC (254 caracteres)
  if (cleanEmail.length === 0 || cleanEmail.length > 254) {
    return false;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(cleanEmail);
}

// Casos de teste
console.log(isValidEmail("juliana.costa+trabalho@empresa.com.br")); // true
console.log(isValidEmail("pontos..duplos@dominio.com.br"));        // true (validação de sintaxe)
console.log(isValidEmail("sem-arroba.com.br"));                    // false
console.log(isValidEmail("usuario@dominio"));                     // false
```

### 2. Regex de email em Python

Em Python, compile a expressão uma única vez com `re.compile` e use `re.fullmatch`:

```python
import re

EMAIL_PATTERN = re.compile(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")

def validate_email_address(email: str) -> bool:
    if not isinstance(email, str):
        return False
    
    clean_email = email.strip()
    if len(clean_email) > 254:
        return False
        
    return bool(EMAIL_PATTERN.fullmatch(clean_email))

# Casos de teste
print(validate_email_address("dev@empresa.com.br"))        # True
print(validate_email_address("email com espaco@web.com"))  # False
print(validate_email_address("usuario@.dominio.com.br"))   # False
```

### 3. Formulário nativo HTML5 (sem JavaScript)

Os navegadores modernos conferem o formato diretamente por meio do atributo `type="email"`. Combinado com o atributo `pattern`, você pode exigir a presença de uma extensão completa:

```html
<form action="/cadastro" method="POST">
  <label for="user-email">Email profissional</label>
  <input 
    type="email" 
    id="user-email" 
    name="email" 
    required 
    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    placeholder="nome@empresa.com.br"
  />
  <button type="submit">Continuar</button>
</form>
```

Se o texto não bater com o padrão, o navegador interrompe o envio e exibe um alerta automático no idioma do usuário.

---

## Casos de borda que quebram muitos padrões regex

Antes de definir a regra no seu sistema, confira se o projeto precisa suportar estes quatro cenários:

### 1. Sufixos com sinal de mais (Subaddressing)
Provedores como Gmail, Outlook e Fastmail permitem que o usuário insira um sinal de mais e uma palavra identificadora (por exemplo, `lucas+financeiro@gmail.com`). Padrões muito rígidos que esquecem o caractere `+` rejeitam esses endereços válidos e prejudicam conversões.

### 2. Extensões de domínio longas (gTLDs)
Antigos tutoriais terminavam com `\.[a-zA-Z]{2,4}$`, assumindo que só existiam extensões como `.br`, `.com` ou `.org`. Hoje existem centenas de extensões com muitos caracteres, como `.tecnologia`, `.consultoria` ou `.international`. Use sempre `[a-zA-Z]{2,}` sem impor um limite máximo arbitrário.

### 3. Domínios internacionalizados (IDN)
No Brasil e em outros países, nomes de domínio podem conter caracteres acentuados ou cedilha (como `contato@fundação.br` ou `vendas@comércio.br`). As expressões regulares em ASCII não reconhecem esses caracteres. Se a aplicação aceitar esses domínios, converta o domínio para ASCII usando Punycode (`xn--...`) antes da checagem de sintaxe.

### 4. Pontos consecutivos
O RFC 5322 aceita teoricamente pontos seguidos entre aspas (`"joao..silva"@dominio.com.br`), mas os servidores de email recusam quase que universalmente pontos consecutivos sem aspas (`joao..silva@dominio.com.br`). Para restringir pontos seguidos no nome de usuário, adicione uma asserção negativa `(?!.*\.\.)`.

---

## Onde o regex para: o ponto cego da entregabilidade

Uma expressão regular confere uma única dimensão: **a estrutura da sintaxe**. Ela responde apenas: *“Esse texto tem formato de endereço de email?”*

Ela não é capaz de responder à pergunta decisiva: *“Uma mensagem enviada para esse endereço vai de fato chegar a uma caixa postal ativa?”*

### Análise arquitetural: por que regex não valida a existência de uma caixa postal

Na engenharia de software, encarar a validação de email como um mero problema de correspondência de texto é uma armadilha comum. No vídeo a seguir, o arquiteto de software Derek Comartin (Code Opinion) detalha por que tentar cobrir todas as normas RFC com expressões regulares produz código frágil, e por que checar a sintaxe é algo completamente diferente de confirmar se uma caixa postal de fato existe:

```youtube
M6itpAfbvas
Assistir: [Regex for Email Validation? Think Again!](https://www.youtube.com/watch?v=M6itpAfbvas) por Derek Comartin (Code Opinion)
```

Principais lições desta análise:
- **A armadilha das especificações RFC**: Tentar cobrir todas as exceções teóricas gera expressões de milhares de caracteres ilegíveis que frequentemente falham em endereços atuais.
- **Sintaxe versus existência da conta**: Um endereço como `conta.inexistente.883@gmail.com` é aprovado com louvor em qualquer regex, mas sofre bounce imediato ao enviar porque o provedor não possui esse usuário cadastrado.
- **A estratégia em duas etapas**: Sistemas em produção devem utilizar um padrão simples no frontend para barrar erros óbvios de digitação e recorrer a uma checagem real de entregabilidade antes de salvar o contato no banco de dados.

Apresentamos cinco motivos pelos quais um endereço formalmente aprovado no regex falha na entrega:

```
[ Usuário digita: conta.inexistente.883@gmail.com ]
                        │
                        ▼
 1. Checagem de Sintaxe Regex ───► APROVADO (Caracteres válidos, possui @ e TLD)
                        │
                        ▼
 2. Consulta de Registros DNS MX ► APROVADO (gmail.com possui servidores de email reais)
                        │
                        ▼
 3. Checagem SMTP da Caixa ──────► REPROVADO (Servidor Google responde: 550 5.1.1 User Unknown)
                        │
                        ▼
            [ RESULTADO: HARD BOUNCE ]
```

### 1. Domínios que não existem
O endereço `contato@este-dominio-nao-existe-992.com.br` cumpre todas as exigências do regex. Entretanto, o domínio nunca foi registrado e não tem registros MX. Qualquer envio gera um bounce instantâneo.

### 2. Caixas postais deletadas ou inativas
O email `carlos.almeida@grandeempresa.com.br` é perfeito do ponto de vista sintático. Se Carlos foi desligado há meses, a caixa postal foi removida. Na negociação SMTP, o servidor de destino responde `550 5.1.1 Recipient rejected: User unknown`. Isso gera um hard bounce imediato e prejudica a reputação do seu domínio de disparo.

### 3. Caixas temporárias e descartáveis
Serviços como 10MinuteMail ou GuerrillaMail criam emails que deixam de existir em poucos minutos. A regex aceita o formato normalmente. Se você enviar mensagens posteriores, como faturas ou comunicações periódicas, todas falharão.

### 4. Servidores configurados como Catch-All
Muitas empresas configuram seus servidores para aceitar qualquer mensagem que chegue ao domínio, sem checar se a pessoa existe. Um padrão regex não consegue diferenciar se aquele email pertence a um colaborador real ou se o servidor simplesmente aceita qualquer nome.

### 5. Contas armadilha (Spam Traps)
As armadilhas de spam se parecem com qualquer email profissional ou pessoal. Elas passam na checagem de sintaxe e aceitam conexões SMTP. Fazer envios para essas contas resulta no bloqueio do seu IP em listas como Spamhaus.

---

## A estratégia de validação em duas camadas

Para garantir que o cadastro seja ágil sem permitir que contatos inválidos entrem na sua base, organize a verificação em duas etapas:

```
┌────────────────────────────────────────────────────────┐
│                   CAMADA 1: FRONTEND                   │
│  Validação rápida de sintaxe (HTML5 + Regex leve)      │
│  - Bloqueia erros de digitação em tempo real           │
│  - Evita arrobas esquecidas ou extensões cortadas      │
│  - Resposta instantânea para quem preenche o campo     │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                   CAMADA 2: BACKEND                    │
│  Verificação de entregabilidade (DNS + Checagem SMTP)  │
│  - Checa os registros MX do domínio                    │
│  - Simula o diálogo SMTP sem enviar emails reais       │
│  - Identifica domínios descartáveis e catch-all        │
└────────────────────────────────────────────────────────┘
```

1. **No cliente (Retorno em tempo real)**: Aplique a expressão regular padrão ou use o campo nativo HTML5 `<input type="email">`. Isso impede enganos comuns, como digitar vírgula no lugar do ponto (`usuario@gmail,com`).
2. **No servidor (Entregabilidade real)**: Antes de salvar o registro no banco de dados, certifique-se de que a caixa existe. Você pode avaliar endereços individuais com o nosso [verificador de email gratuito](/email-checker), filtrar contas descartáveis com o [detector de emails temporários](/disposable-email-checker) ou automatizar as consultas por meio da nossa [API de verificação de emails](/public/docs).

Usar regex para inspecionar a formatação é o primeiro passo obrigatório. Associar a isso uma checagem de entregabilidade mantém a reputação do seu remetente protegida e segura a taxa de rejeição abaixo do teto de 2% cobrado pelos grandes provedores.
