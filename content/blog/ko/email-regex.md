---
title: "이메일 정규식: JavaScript, Python, HTML에서 쓰는 테스트된 패턴과 정규식의 한계"
seoTitle: "이메일 정규식(정규표현식): JavaScript, Python, HTML 패턴(2026년)"
description: "JavaScript, Python, HTML5 양식에서 쓸 수 있는 테스트된 이메일 정규식 패턴을 소개합니다. 표준 패턴과 RFC 5322 정규식의 차이, 예외적인 경우, 정규식만으로 메일함을 검증할 수 없는 이유도 설명합니다."
slug: email-regex
date: 2026-11-04
updated: 2026-11-04
keyword: 이메일 정규식
image: /blog/covers/ko/email-regex.webp
imageAlt: "이메일 정규식과 그 한계. RFC를 완전히 따르는 정규식은 6,500자 이상, 주소 길이 상한은 254자, 주요 업체가 요구하는 반송률 기준은 2%"
cta: Giggal.ai로 이메일 리스트 검증하기
---

정규식(정규표현식)으로 이메일 주소의 유효성을 검사하는 것은 간단해 보입니다. 하지만 실제 주소를 다루기 시작하면 이야기가 달라집니다. `alex+newsletter@sub.domain.co.uk` 같은 주소는 완전히 유효합니다. 반면 `user@localhost`나 `test..123@domain.com`은 운영 환경에서 문제를 일으킵니다.

공식 표준(RFC 5321과 RFC 5322)을 따라 유효한 경우를 모두 처리하는 정규식을 작성하려면, 6,500자가 넘는 식이 필요합니다. 이 식은 괄호 안의 주석, 공백이 들어간 따옴표 문자열, IP 주소를 쓰는 도메인 리터럴까지 허용합니다. 실제 웹 애플리케이션에서는 이 공식 패턴을 쓸 수 없습니다. 느리고, 읽기 어렵고, 오늘날 어떤 이메일 서비스도 쓰지 않는 이상한 문자열까지 받아들이기 때문입니다.

실무에 필요한 것은 현실적인 정규식입니다. 즉, 실제 사용자를 막지 않으면서 명백한 오타를 잡는 정규식입니다.

| 패턴 유형 | 로컬 파트에서 쓸 수 있는 문자 | 하위 도메인과 TLD 지원 | 적합한 용도 |
| --- | --- | --- | --- |
| **운영 환경용 표준** | 영문자, 숫자, `._%+*-` | 여러 하위 도메인, 2자 이상의 TLD | 웹 가입 양식, 회원 가입 |
| **HTML5 기본** | RFC 부분 집합 전체(ASCII) | Punycode, 영숫자 | 빠른 HTML 양식 유효성 검사 |
| **최소 패턴** | 공백과 `@` 기호를 제외한 모든 문자 | `@` 뒤에 점이 있는 모든 문자열 | 느슨한 입력 확인, 간단한 스크립트 |

---

## 운영 환경에 권장하는 이메일 정규식

대부분의 웹 애플리케이션에는 표준적인 이름 규칙을 지키게 하면서 새로운 확장자도 허용하는 패턴이 필요합니다.

```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### 이 패턴이 작동하는 방식(토큰별 설명)

각 부분을 나누어 보면, 이 패턴이 흔한 입력 오류를 어떻게 막는지 알 수 있습니다.

1. `^`: 문자열의 시작을 나타내며, 부분 일치를 막습니다.
2. `[a-zA-Z0-9._%+-]+`: 사용자 이름(로컬 파트)에 허용되는 문자 하나 이상과 일치합니다. 소문자, 대문자, 숫자, 점, 밑줄, 퍼센트 기호, 더하기 기호, 하이픈이 포함됩니다.
3. `@`: 반드시 있어야 하는 `@` 기호와 정확히 한 번 일치합니다.
4. `[a-zA-Z0-9.-]+`: 도메인 이름과 일치합니다. 영문자, 숫자, 하이픈과 하위 도메인용 점을 허용합니다(예: `mail.marketing.example`).
5. `\.`: 도메인 이름과 최상위 도메인(TLD)을 구분하는 문자 그대로의 점(.)과 일치합니다.
6. `[a-zA-Z]{2,}`: TLD가 영문자 2자 이상이어야 합니다. `.com`, `.org`와 `.technology`, `.engineering` 같은 새 확장자를 허용하면서, `user@domain.c` 같은 한 글자 오타는 막습니다.
7. `$`: 문자열의 끝을 나타냅니다.

---

## 다른 패턴

사용자 입력을 어디에서 검사하느냐에 따라, 더 엄격한 패턴이나 더 느슨한 패턴이 나을 수 있습니다.

### 1. HTML5 W3C 표준 정규식

World Wide Web Consortium(W3C)은 브라우저의 `<input type="email">` 요소 전용 이메일 유효성 검사 정규식을 정의합니다.

```regex
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$
```

이 패턴은 HTML5 규격과 일치합니다. 로컬 파트에 `!`, `~` 같은 특수 문자를 허용하며, 도메인의 각 레이블이 63자를 넘지 않는지 확인합니다.

### 2. 최소한의 정규식

백엔드 검증 서비스로 넘기기 전에, 사용자가 주소처럼 보이는 값을 입력했는지만 확인하고 싶다면 다음 패턴을 씁니다.

```regex
^[^\s@]+@[^\s@]+\.[^\s@]+$
```

이 패턴은 세 가지를 확인합니다. `@` 앞에 공백이 아닌 문자가 있는지, `@` 뒤에 공백이 아닌 문자가 있는지, 도메인에 점이 하나 이상 있는지입니다. 흔하지 않은 해외 이름을 잘못 거부하는 일이 전혀 없습니다.

---

## JavaScript, Python, HTML에서 구현하기

최신 프로그래밍 환경에서 이메일 정규식으로 유효성 검사를 구현하는 방법입니다.

### 1. JavaScript에서 이메일 유효성 검사(브라우저와 Node.js)

JavaScript에서 이메일 주소를 검사할 때는 테스트하기 전에 항상 앞뒤 공백을 제거하고 입력을 소문자로 바꾸십시오.

```javascript
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  
  // Trim leading/trailing whitespace
  const cleanEmail = email.trim();
  
  // Guard against excessive string lengths (RFC limit is 254 chars)
  if (cleanEmail.length === 0 || cleanEmail.length > 254) {
    return false;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(cleanEmail);
}

// Test cases
console.log(isValidEmail("sarah.connor+work@cyberdyne.com")); // true
console.log(isValidEmail("invalid..dots@domain.com"));        // true (syntax check)
console.log(isValidEmail("missing-at-domain.com"));           // false
console.log(isValidEmail("user@domain"));                     // false
```

코드 안의 주석은 다음과 같은 뜻입니다. 첫 번째 주석은 앞뒤 공백을 제거하는 처리, 두 번째 주석은 지나치게 긴 문자열을 막는 처리(RFC 상한은 254자)입니다. 두 번째 테스트 케이스에서는 점이 연속된 주소도 구문 검사로는 true가 된다는 점에 주의하십시오.

### 2. Python에서 이메일 정규식 쓰기

Python에서 주소 리스트를 처리한다면 정규식을 한 번만 컴파일하고 `re.fullmatch`를 사용하십시오.

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

# Test cases
print(validate_email_address("dev@company.io"))      # True
print(validate_email_address("bad email@domain.com")) # False
print(validate_email_address("user@.domain.com"))     # False
```

### 3. HTML5 양식의 기본 유효성 검사(JavaScript 없이)

최신 브라우저는 `type="email"` 속성을 쓰면 이메일 구문을 기본으로 검사합니다. `pattern` 속성과 함께 쓰면 최상위 도메인을 필수로 만들 수 있습니다.

```html
<form action="/signup" method="POST">
  <label for="user-email">Work Email</label>
  <input 
    type="email" 
    id="user-email" 
    name="email" 
    required 
    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    placeholder="you@company.com"
  />
  <button type="submit">Continue</button>
</form>
```

사용자가 이 양식을 제출할 때 문자열이 패턴과 일치하지 않으면, 브라우저는 제출을 막고 사용자의 언어로 안내 메시지를 표시합니다. 한국어 사이트에서 쓴다면 레이블(Work Email), 플레이스홀더, 버튼(Continue)의 문구를 한국어로 바꾸십시오.

---

## 대부분의 이메일 정규식이 실패하는 예외적인 경우

정규식 패턴을 정하기 전에, 애플리케이션이 다음 네 가지 흔한 예외적인 경우를 처리해야 하는지 확인하십시오.

### 1. 플러스 주소(하위 주소)
Gmail, Outlook, Fastmail 같은 서비스에서는 사용자 이름 뒤에 더하기 기호와 임의의 태그를 붙일 수 있습니다(예: `alex+finance@gmail.com`). 문자 클래스에서 `+`를 뺀 지나치게 엄격한 정규식은 이런 정상적인 주소를 거부해 사용자를 불편하게 합니다.

### 2. 긴 일반 최상위 도메인(gTLD)
예전 정규식 가이드는 모든 도메인이 `.com`, `.net`, `.org`로 끝난다고 가정하고 `\.[a-zA-Z]{2,4}$`로 끝나는 경우가 많았습니다. 지금은 `.management`, `.technology`, `.international` 등 더 긴 확장자가 수백 개 있습니다. 임의의 상한을 두지 말고 항상 `[a-zA-Z]{2,}`를 쓰십시오.

### 3. 국제화 도메인 이름(IDN)
독일, 프랑스, 스페인, 아시아의 사용자를 대상으로 한다면, 수신자 도메인에 ASCII가 아닌 문자가 들어갈 수 있습니다(`kontakt@münchen.de`나 `info@académie.fr` 등). 일반적인 ASCII 정규식은 이런 문자열을 거부합니다. 시스템에서 국제화 도메인을 받는다면, 구문 검사 전에 Punycode(`xn--...`)로 도메인 부분을 ASCII로 변환하십시오.

### 4. 연속된 점
기술적으로 RFC 5322는 따옴표로 묶은 문자열 안의 점을 허용합니다(`"john..doe"@domain.com`). 하지만 따옴표 없이 연속된 점(`john..doe@domain.com`)을 허용하는 메일 서버는 거의 없습니다. 로컬 파트에서 연속된 점을 막아야 한다면 부정형 전방 탐색 구문 `(?!.*\.\.)`을 추가할 수 있습니다.

---

## 정규식의 한계: 이메일 도달률의 사각지대

정규식이 확인하는 것은 **구문 구조** 하나뿐입니다. 정규식이 답하는 질문은 “이 문자열이 이메일 주소처럼 보이는가?”입니다.

정작 중요한 질문인 “이 주소로 보낸 이메일이 받은편지함에 도착하는가?”에는 답하지 못합니다.

### 설계 관점에서 본 분석: 정규식만으로 이메일 유효성을 검사할 수 없는 이유

소프트웨어 개발에서 이메일 유효성 검사를 단순한 패턴 일치 문제로 다루는 것은 흔한 설계상의 함정입니다. 아래 동영상(영어)에서 소프트웨어 아키텍트 Derek Comartin(Code Opinion)은 RFC를 따르는 이메일을 정규식으로 해석하면 코드가 쉽게 깨지는 이유와, 구문 확인과 메일함 존재 검증이 완전히 다른 일인 이유를 설명합니다.

```youtube
M6itpAfbvas
동영상: [Regex for Email Validation? Think Again!](https://www.youtube.com/watch?v=M6itpAfbvas)(Derek Comartin, Code Opinion)
```

이 설명의 핵심은 다음과 같습니다.
- **RFC 규격의 함정**: RFC의 예외적인 경우를 모두 처리하려고 하면 수천 자의 읽을 수 없는 정규식이 만들어지며, 최근의 이메일 주소에서 자주 깨집니다.
- **형식과 메일함 존재는 다릅니다**: `nonexistent.user.991@gmail.com` 같은 주소는 모든 정규식 규칙을 문제없이 통과하지만, 수신 메일 서버에 일치하는 계정이 없으므로 바로 반송됩니다.
- **여러 단계로 확인하는 방법**: 운영 중인 애플리케이션은 프런트엔드에서 명백한 오타를 잡는 가벼운 패턴만 쓰고, 연락처를 데이터베이스에 저장하기 전에는 실제 메일함 검증에 의존해야 합니다.

정규식과 깔끔하게 일치해도 메시지를 보낼 때 실패할 수 있는 이유는 다섯 가지입니다. 다음 그림은 사용자가 fake.account.8821@gmail.com을 입력한 경우의 흐름입니다. 정규식 구문 검사는 통과합니다(허용된 문자이고, @ 기호와 TLD가 있음). DNS MX 레코드 검사도 통과합니다(gmail.com에는 실제 Google 메일 서버가 있음). 하지만 SMTP 메일함 검사에서 실패하며(Google 서버가 550 5.1.1 User Unknown으로 응답), 결과는 하드 바운스입니다.

```
[ User types: fake.account.8821@gmail.com ]
                      │
                      ▼
 1. Regex Syntax Check ────────► PASSES (Valid characters, has @, has TLD)
                      │
                      ▼
 2. DNS MX Record Check ───────► PASSES (gmail.com has real Google mail servers)
                      │
                      ▼
 3. SMTP Mailbox Check ────────► FAILS (Google server responds: 550 5.1.1 User Unknown)
                      │
                      ▼
          [ RESULT: HARD BOUNCE ]
```

### 1. 존재하지 않는 도메인
`contact@thisdomaindoesnotexist99238.com`이라는 문자열은 일반적인 정규식 패턴과 일치합니다. 하지만 이 도메인은 한 번도 등록된 적이 없고, 메일을 받을 서버를 알려 주는 MX(Mail Exchange) 레코드도 없습니다. 이 주소로 메일을 보내면 바로 반송됩니다.

### 2. 삭제되었거나 사용하지 않는 메일함
`alex.smith@largecorp.example`라는 주소는 모든 정규식 규칙과 일치합니다. 하지만 Alex가 6개월 전에 퇴사했다면 메일함은 삭제되었습니다. 발신 메일 서버가 그 회사의 메일 서버에 연결하면, 서버는 `550 5.1.1: Recipient address rejected: User unknown` 오류로 응답합니다. 이는 하드 바운스로 집계되어 도메인 평판에 영향을 줍니다.

### 3. 임시 이메일과 일회용 이메일
10MinuteMail, GuerrillaMail, Mailinator 같은 서비스는 임시 주소를 만듭니다(예: `temp992@guerrillamail.com`). 이런 주소는 정규식 구문 테스트를 문제없이 통과하지만, 메일함은 몇 분 안에 만료됩니다. 이런 주소로 온보딩 메일이나 영수증을 보내면, 이후에 보내는 이메일은 반송됩니다.

### 4. 캐치올 메일 서버
많은 회사 도메인은 특정 메일함이 존재하는지와 관계없이 들어오는 모든 메시지를 받도록 메일 서버를 설정합니다. 이를 캐치올(catch-all)이라고 합니다. 정규식 검사로는 `steve.jobs@company.com`이 현재 근무 중인 직원인지, 형식만 있는 주소인지 알 수 없습니다.

### 5. 스팸 트랩
스팸 트랩 주소는 일반 개인 이메일과 똑같아 보입니다(예: `info.audits@security-network.org`). 정규식 검사를 통과하고, 들어오는 SMTP 연결도 받습니다. 이 주소로 메일을 보내면 발송 IP가 Spamhaus 같은 차단 목록에 등록됩니다.

---

## 2단계 유효성 검사 전략

사용자 가입을 불편 없이 유지하면서 잘못된 데이터가 데이터베이스에 들어오지 않게 하려면, 유효성 검사를 두 단계로 나누십시오. 다음 그림처럼 1단계는 프런트엔드에서 하는 빠른 구문 검사(HTML5와 가벼운 정규식)입니다. 입력 오류를 실시간으로 잡고, @ 기호가 빠지거나 TLD가 깨지는 것을 막고, 사용자에게 바로 결과를 알려 줍니다. 2단계는 백엔드에서 하는 전송 가능 여부 검증(DNS와 SMTP 검사)입니다. 도메인의 DNS MX 레코드를 확인하고, 이메일을 보내지 않고 SMTP 연결 과정을 재현하고, 일회용 도메인과 캐치올 서버를 감지합니다.

```
┌────────────────────────────────────────────────────────┐
│                   TIER 1: FRONTEND                     │
│  Fast Syntax Validation (HTML5 + Lightweight Regex)    │
│  - Catches typing errors in real time                  │
│  - Prevents missing @ and broken TLDs                  │
│  - Instant feedback to the user                        │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                   TIER 2: BACKEND                      │
│  Deliverability Verification (DNS + SMTP Check)        │
│  - Checks DNS MX records for the domain                │
│  - Simulates SMTP handshake without sending email      │
│  - Detects disposable domains and catch-all servers    │
└────────────────────────────────────────────────────────┘
```

1. **클라이언트 쪽(즉시 결과 안내)**: 프런트엔드에서는 표준 이메일 정규식이나 HTML5 기본 `<input type="email">` 요소를 사용합니다. 이렇게 하면 마침표 대신 쉼표를 입력하는 것(`user@gmail,com`) 같은 실수가 그대로 제출되는 것을 막을 수 있습니다.
2. **서버 쪽(실시간 전송 가능 여부 확인)**: 사용자가 양식을 제출하면, 데이터베이스에 저장하기 전에 메일함이 존재하는지 검증합니다. 주소를 하나씩 확인하려면 [무료 이메일 유효성 검사 도구](/email-checker)를, 일회용 계정을 걸러 내려면 [일회용 이메일 판별 도구](/disposable-email-checker)를 쓸 수 있습니다. [이메일 검증 API](/public/docs)로 검사를 자동화할 수도 있습니다.

정규식으로 형식을 확인하는 것은 꼭 필요한 첫 단계입니다. 여기에 전송 가능 여부 검사를 더하면 발신자 평판을 지키고, 반송률을 주요 메일 서비스 제공업체가 요구하는 2% 기준보다 낮게 유지할 수 있습니다.
