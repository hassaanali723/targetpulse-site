// Localized strings for the shared home blocks (review badges, review wall,
// MCP section), one entry per locale. Product UI labels inside Claude and
// ChatGPT (Settings, Connectors, Plugins, Allow...) stay as the apps show them
// in English. French: no-break space before ":" "?" "!" and inside « ».
import type { ReviewBadgeStrings } from '@/components/landing/ReviewBadges'
import type { ReviewWallStrings } from '@/components/landing/ReviewWall'
import type { McpStrings } from '@/components/landing/McpSection'
import type { L10nLocale } from '@/lib/i18n/strings'

const B = ({ children }: { children: React.ReactNode }) => <span className="font-semibold text-white">{children}</span>
const M = ({ children }: { children: React.ReactNode }) => <span className="font-mono text-white">{children}</span>
const CODEX_ENV = `echo 'export GIGGAL_API_KEY="tp_live_..."' >> ~/.zshrc\nsource ~/.zshrc`
const EnvBlock = () => (
  <span className="mt-2 block bg-white/5 border border-white/10 rounded-lg p-2.5 font-mono text-[11px] text-slate-200 whitespace-pre-wrap">{CODEX_ENV}</span>
)
const decimalComma = (n: number) => n.toFixed(1).replace('.', ',')

export const REVIEW_BADGES: Record<L10nLocale, ReviewBadgeStrings> = {
  it: {
    heading: 'Recensito da team reali',
    readOn: (p) => `Leggi le recensioni di Giggal.ai su ${p}`,
    rating: decimalComma,
    reviews: (n) => `${n} recensioni`,
    verified: 'Recensioni di utenti verificati',
    read: 'Leggi le recensioni',
    used: 'Usi Giggal.ai?',
    leave: 'Lascia una recensione su Trustpilot',
    points: [
      { title: '1.000 crediti gratis', text: 'Nessuna carta richiesta per iniziare.' },
      { title: 'I crediti non scadono mai', text: 'Li compri una volta e li usi quando ti servono.' },
      { title: 'Risposte vere sui catch-all', text: 'Valida o non valida, non "rischiosa".' },
      { title: 'Nessun costo per i risultati sconosciuti', text: 'Paghi solo per un risultato chiaro.' },
    ],
  },
  de: {
    heading: 'Bewertet von echten Teams',
    readOn: (p) => `Giggal.ai-Bewertungen auf ${p} lesen`,
    rating: decimalComma,
    reviews: (n) => `${n} Bewertungen`,
    verified: 'Bewertungen verifizierter Nutzer',
    read: 'Bewertungen lesen',
    used: 'Sie nutzen Giggal.ai?',
    leave: 'Bewerten Sie uns auf Trustpilot',
    points: [
      { title: '1.000 Gratis-Credits', text: 'Zum Start ist keine Karte nötig.' },
      { title: 'Credits verfallen nie', text: 'Einmal kaufen und nutzen, wann Sie sie brauchen.' },
      { title: 'Echte Antworten bei Catch-all', text: 'Gültig oder ungültig, nicht „riskant“.' },
      { title: 'Keine Kosten für unbekannte Ergebnisse', text: 'Sie zahlen nur für ein klares Ergebnis.' },
    ],
  },
  es: {
    heading: 'Valorado por equipos reales',
    readOn: (p) => `Leer las reseñas de Giggal.ai en ${p}`,
    rating: decimalComma,
    reviews: (n) => `${n} reseñas`,
    verified: 'Reseñas de usuarios verificados',
    read: 'Leer reseñas',
    used: '¿Usas Giggal.ai?',
    leave: 'Deja una reseña en Trustpilot',
    points: [
      { title: '1.000 créditos gratis', text: 'No necesitas tarjeta para empezar.' },
      { title: 'Los créditos nunca caducan', text: 'Los compras una vez y los usas cuando los necesites.' },
      { title: 'Respuestas reales en catch-all', text: 'Válido o no válido, no "arriesgado".' },
      { title: 'Sin costo por resultados desconocidos', text: 'Solo pagas por un resultado claro.' },
    ],
  },
  'pt-br': {
    heading: 'Avaliada por equipes de verdade',
    readOn: (p) => `Ler as avaliações da Giggal.ai no ${p}`,
    rating: decimalComma,
    reviews: (n) => `${n} avaliações`,
    verified: 'Avaliações de usuários verificados',
    read: 'Ler avaliações',
    used: 'Usa a Giggal.ai?',
    leave: 'Deixe uma avaliação no Trustpilot',
    points: [
      { title: '1.000 créditos grátis', text: 'Não precisa de cartão para começar.' },
      { title: 'Os créditos nunca expiram', text: 'Você compra uma vez e usa quando precisar.' },
      { title: 'Respostas reais em catch-all', text: 'Válido ou inválido, não "arriscado".' },
      { title: 'Sem custo por resultados desconhecidos', text: 'Você só paga por um resultado claro.' },
    ],
  },
  fr: {
    heading: 'Noté par de vraies équipes',
    readOn: (p) => `Lire les avis Giggal.ai sur ${p}`,
    rating: decimalComma,
    reviews: (n) => `${n} avis`,
    verified: 'Avis d’utilisateurs vérifiés',
    read: 'Lire les avis',
    used: 'Vous utilisez Giggal.ai ?',
    leave: 'Laissez un avis sur Trustpilot',
    points: [
      { title: '1 000 crédits offerts', text: 'Aucune carte requise pour commencer.' },
      { title: 'Les crédits n’expirent jamais', text: 'Vous les achetez une fois et les utilisez quand vous en avez besoin.' },
      { title: 'De vraies réponses sur les catch-all', text: 'Valide ou invalide, pas « risquée ».' },
      { title: 'Aucun frais pour les résultats inconnus', text: 'Vous ne payez que pour un résultat clair.' },
    ],
  },
}

// The reviews themselves stay in English as written (plans/08 D4), so the
// subtitle says so.
export const REVIEW_WALL: Record<L10nLocale, ReviewWallStrings> = {
  it: {
    title: 'Cosa dicono i clienti di Giggal.ai',
    sub: 'Recensioni originali in inglese, da G2, Product Hunt e SourceForge.',
    showAll: 'Mostra altre {n} recensioni',
    showFewer: 'Mostra meno recensioni',
  },
  de: {
    title: 'Was Kunden über Giggal.ai sagen',
    sub: 'Originalbewertungen auf Englisch von G2, Product Hunt und SourceForge.',
    showAll: 'Alle {n} weiteren Bewertungen anzeigen',
    showFewer: 'Weniger Bewertungen anzeigen',
  },
  es: {
    title: 'Lo que dicen los clientes de Giggal.ai',
    sub: 'Reseñas originales en inglés, de G2, Product Hunt y SourceForge.',
    showAll: 'Ver las otras {n} reseñas',
    showFewer: 'Ver menos reseñas',
  },
  'pt-br': {
    title: 'O que os clientes dizem sobre a Giggal.ai',
    sub: 'Avaliações originais em inglês, do G2, Product Hunt e SourceForge.',
    showAll: 'Ver as outras {n} avaliações',
    showFewer: 'Ver menos avaliações',
  },
  fr: {
    title: 'Ce que les clients disent de Giggal.ai',
    sub: 'Avis originaux en anglais, issus de G2, Product Hunt et SourceForge.',
    showAll: 'Voir les {n} autres avis',
    showFewer: 'Voir moins d’avis',
  },
}

export const MCP: Record<L10nLocale, McpStrings> = {
  it: {
    title: 'Collega la tua AI preferita.',
    subtitle: 'Aggiungi Giggal.ai al tuo agente AI tramite MCP e verifica le email, catch-all inclusi, direttamente in Claude, Cursor, VS Code e altri.',
    toolsAria: 'Strumenti AI',
    groups: ['App di chat', 'Editor di codice'],
    pasteInto: 'Incolla in',
    or: ' oppure ',
    serverUrl: 'URL del server MCP',
    copy: 'Copia',
    copied: 'Copiato',
    copyAria: 'Copia negli appunti',
    restart: 'Riavvia il client dopo aver aggiunto il server, poi chiedi:',
    askBefore: '“',
    askAfter: ' è consegnabile?”',
    guide: 'Guida completa (in inglese)',
    tools: {
      claude: {
        subtitle: 'Aggiungi Giggal.ai come connettore personalizzato in Claude. Nessun file di configurazione, nessuna chiave API da incollare.',
        steps: [
          <>In Claude (web o desktop), apri <B>Settings → Connectors</B>.</>,
          <>Clicca <B>Add</B> → <B>Add custom connector</B>.</>,
          <>Chiamalo <M>Giggal.ai</M>, incolla l&apos;URL MCP qui sotto, poi clicca <B>Add</B>.</>,
          <>Apri il connettore <B>Giggal.ai</B> e clicca <B>Connect</B>.</>,
          <>Clicca <B>Allow</B> per concedere <M>verify:read</M>, che copre la verifica degli indirizzi, il controllo dei crediti e lo storico delle verifiche.</>,
        ],
      },
      chatgpt: {
        subtitle: 'Aggiungi Giggal.ai come plugin personalizzato in ChatGPT, collegato tramite OAuth, senza chiave API da incollare.',
        steps: [
          <>In ChatGPT, apri <B>Plugins</B> dalla barra laterale, poi clicca il <B>+</B> in alto a destra.</>,
          <>Chiamalo <M>Giggal.ai</M>, imposta <B>Server URL</B> sull&apos;URL MCP qui sotto, scegli <B>Authentication → OAuth</B>, spunta la conferma, poi clicca <B>Create</B>.</>,
          <>Apri il plugin <B>Giggal.ai</B>, clicca <B>Connect</B>, poi <B>Sign in with Giggal.ai</B>.</>,
          <>Clicca <B>Allow</B> per concedere <M>verify:read</M>, che copre la verifica degli indirizzi, il controllo dei crediti e lo storico delle verifiche.</>,
        ],
      },
      'claude-code': { note: <>Sostituisci <M>YOUR_API_KEY</M> con la chiave della tua dashboard Giggal.ai. Hai già un server <M>giggal</M>? Esegui prima <M>claude mcp remove giggal --scope user</M>, poi aggiungilo di nuovo.</> },
      codex: { note: <>Codex legge il token da una variabile d&apos;ambiente. Impostala, ricarica la shell, poi chiudi e riapri Codex ed esegui <M>/mcp</M> per confermare:<EnvBlock /></> },
      cursor: { note: <>Sostituisci <M>YOUR_API_KEY</M> con la chiave della tua dashboard Giggal.ai.</> },
      windsurf: { note: <>Sostituisci <M>YOUR_API_KEY</M> con la chiave della tua dashboard Giggal.ai.</> },
      vscode: { note: <>Sostituisci <M>YOUR_API_KEY</M> con la chiave della tua dashboard Giggal.ai. VS Code usa <M>&quot;servers&quot;</M> invece di <M>&quot;mcpServers&quot;</M>.</> },
      cline: { note: <>Sostituisci <M>YOUR_API_KEY</M> con la chiave della tua dashboard Giggal.ai. Il percorso è quello di macOS, adattalo al tuo sistema.</> },
      zed: { note: <>Sostituisci <M>YOUR_API_KEY</M> con la chiave della tua dashboard Giggal.ai.</> },
    },
  },
  de: {
    title: 'Verbinden Sie Ihre Lieblings-KI.',
    subtitle: 'Binden Sie Giggal.ai per MCP an Ihren KI-Agenten an und prüfen Sie E-Mails, Catch-all inklusive, direkt in Claude, Cursor, VS Code und weiteren Tools.',
    toolsAria: 'KI-Tools',
    groups: ['Chat-Apps', 'Code-Editoren'],
    pasteInto: 'Einfügen in',
    or: ' oder ',
    serverUrl: 'MCP-Server-URL',
    copy: 'Kopieren',
    copied: 'Kopiert',
    copyAria: 'In die Zwischenablage kopieren',
    restart: 'Starten Sie den Client nach dem Hinzufügen neu und fragen Sie dann:',
    askBefore: '„Ist ',
    askAfter: ' zustellbar?“',
    guide: 'Vollständige Anleitung (auf Englisch)',
    tools: {
      claude: {
        subtitle: 'Fügen Sie Giggal.ai in Claude als benutzerdefinierten Connector hinzu. Keine Konfigurationsdateien, kein API-Schlüssel nötig.',
        steps: [
          <>Öffnen Sie in Claude (Web oder Desktop) <B>Settings → Connectors</B>.</>,
          <>Klicken Sie auf <B>Add</B> → <B>Add custom connector</B>.</>,
          <>Nennen Sie ihn <M>Giggal.ai</M>, fügen Sie die unten stehende MCP-URL ein und klicken Sie auf <B>Add</B>.</>,
          <>Öffnen Sie den Connector <B>Giggal.ai</B> und klicken Sie auf <B>Connect</B>.</>,
          <>Klicken Sie auf <B>Allow</B>, um die Berechtigung <M>verify:read</M> zu erteilen: Adressen prüfen, Credits abfragen und frühere Prüfungen nachschlagen.</>,
        ],
      },
      chatgpt: {
        subtitle: 'Fügen Sie Giggal.ai in ChatGPT als benutzerdefiniertes Plugin hinzu. Die Verbindung läuft über OAuth, ohne API-Schlüssel.',
        steps: [
          <>Öffnen Sie in ChatGPT <B>Plugins</B> in der Seitenleiste und klicken Sie oben rechts auf <B>+</B>.</>,
          <>Nennen Sie es <M>Giggal.ai</M>, tragen Sie unter <B>Server URL</B> die unten stehende MCP-URL ein, wählen Sie <B>Authentication → OAuth</B>, bestätigen Sie und klicken Sie auf <B>Create</B>.</>,
          <>Öffnen Sie das Plugin <B>Giggal.ai</B>, klicken Sie auf <B>Connect</B> und dann auf <B>Sign in with Giggal.ai</B>.</>,
          <>Klicken Sie auf <B>Allow</B>, um die Berechtigung <M>verify:read</M> zu erteilen: Adressen prüfen, Credits abfragen und frühere Prüfungen nachschlagen.</>,
        ],
      },
      'claude-code': { note: <>Ersetzen Sie <M>YOUR_API_KEY</M> durch den Schlüssel aus Ihrem Giggal.ai-Dashboard. Sie haben schon einen <M>giggal</M>-Server? Führen Sie zuerst <M>claude mcp remove giggal --scope user</M> aus und fügen Sie ihn dann neu hinzu.</> },
      codex: { note: <>Codex liest das Token aus einer Umgebungsvariable. Setzen Sie sie, laden Sie die Shell neu, starten Sie Codex neu und prüfen Sie mit <M>/mcp</M>:<EnvBlock /></> },
      cursor: { note: <>Ersetzen Sie <M>YOUR_API_KEY</M> durch den Schlüssel aus Ihrem Giggal.ai-Dashboard.</> },
      windsurf: { note: <>Ersetzen Sie <M>YOUR_API_KEY</M> durch den Schlüssel aus Ihrem Giggal.ai-Dashboard.</> },
      vscode: { note: <>Ersetzen Sie <M>YOUR_API_KEY</M> durch den Schlüssel aus Ihrem Giggal.ai-Dashboard. VS Code nutzt <M>&quot;servers&quot;</M> statt <M>&quot;mcpServers&quot;</M>.</> },
      cline: { note: <>Ersetzen Sie <M>YOUR_API_KEY</M> durch den Schlüssel aus Ihrem Giggal.ai-Dashboard. Gezeigt ist der macOS-Pfad, passen Sie ihn an Ihr System an.</> },
      zed: { note: <>Ersetzen Sie <M>YOUR_API_KEY</M> durch den Schlüssel aus Ihrem Giggal.ai-Dashboard.</> },
    },
  },
  es: {
    title: 'Conecta tu IA favorita.',
    subtitle: 'Añade Giggal.ai a tu agente de IA por MCP y verifica correos, incluidos los catch-all, directamente en Claude, Cursor, VS Code y más.',
    toolsAria: 'Herramientas de IA',
    groups: ['Apps de chat', 'Editores de código'],
    pasteInto: 'Pégalo en',
    or: ' o ',
    serverUrl: 'URL del servidor MCP',
    copy: 'Copiar',
    copied: 'Copiado',
    copyAria: 'Copiar al portapapeles',
    restart: 'Reinicia el cliente después de añadirlo y pregunta:',
    askBefore: '“¿',
    askAfter: ' es entregable?”',
    guide: 'Guía completa (en inglés)',
    tools: {
      claude: {
        subtitle: 'Añade Giggal.ai como conector personalizado en Claude. Sin archivos de configuración ni clave de API que pegar.',
        steps: [
          <>En Claude (web o escritorio), abre <B>Settings → Connectors</B>.</>,
          <>Haz clic en <B>Add</B> → <B>Add custom connector</B>.</>,
          <>Ponle de nombre <M>Giggal.ai</M>, pega la URL MCP de abajo y haz clic en <B>Add</B>.</>,
          <>Abre el conector <B>Giggal.ai</B> y haz clic en <B>Connect</B>.</>,
          <>Haz clic en <B>Allow</B> para conceder <M>verify:read</M>, que permite verificar direcciones, consultar créditos y ver el historial de verificaciones.</>,
        ],
      },
      chatgpt: {
        subtitle: 'Añade Giggal.ai como plugin personalizado en ChatGPT, conectado por OAuth, sin clave de API que pegar.',
        steps: [
          <>En ChatGPT, abre <B>Plugins</B> en la barra lateral y haz clic en el <B>+</B> de arriba a la derecha.</>,
          <>Ponle de nombre <M>Giggal.ai</M>, pon en <B>Server URL</B> la URL MCP de abajo, elige <B>Authentication → OAuth</B>, marca la casilla de confirmación y haz clic en <B>Create</B>.</>,
          <>Abre el plugin <B>Giggal.ai</B>, haz clic en <B>Connect</B> y luego en <B>Sign in with Giggal.ai</B>.</>,
          <>Haz clic en <B>Allow</B> para conceder <M>verify:read</M>, que permite verificar direcciones, consultar créditos y ver el historial de verificaciones.</>,
        ],
      },
      'claude-code': { note: <>Cambia <M>YOUR_API_KEY</M> por la clave de tu panel de Giggal.ai. ¿Ya tienes un servidor <M>giggal</M>? Ejecuta primero <M>claude mcp remove giggal --scope user</M> y vuelve a añadirlo.</> },
      codex: { note: <>Codex lee el token de una variable de entorno. Defínela, recarga la shell, reinicia Codex y ejecuta <M>/mcp</M> para comprobarlo:<EnvBlock /></> },
      cursor: { note: <>Cambia <M>YOUR_API_KEY</M> por la clave de tu panel de Giggal.ai.</> },
      windsurf: { note: <>Cambia <M>YOUR_API_KEY</M> por la clave de tu panel de Giggal.ai.</> },
      vscode: { note: <>Cambia <M>YOUR_API_KEY</M> por la clave de tu panel de Giggal.ai. VS Code usa <M>&quot;servers&quot;</M> en lugar de <M>&quot;mcpServers&quot;</M>.</> },
      cline: { note: <>Cambia <M>YOUR_API_KEY</M> por la clave de tu panel de Giggal.ai. La ruta es la de macOS; adáptala a tu sistema.</> },
      zed: { note: <>Cambia <M>YOUR_API_KEY</M> por la clave de tu panel de Giggal.ai.</> },
    },
  },
  'pt-br': {
    title: 'Conecte sua IA favorita.',
    subtitle: 'Conecte a Giggal.ai ao seu agente de IA via MCP e verifique e-mails, inclusive catch-all, direto no Claude, Cursor, VS Code e outros.',
    toolsAria: 'Ferramentas de IA',
    groups: ['Apps de chat', 'Editores de código'],
    pasteInto: 'Cole em',
    or: ' ou ',
    serverUrl: 'URL do servidor MCP',
    copy: 'Copiar',
    copied: 'Copiado',
    copyAria: 'Copiar para a área de transferência',
    restart: 'Reinicie o cliente depois de adicionar o servidor e pergunte:',
    askBefore: '“O e-mail ',
    askAfter: ' é entregável?”',
    guide: 'Guia completo (em inglês)',
    tools: {
      claude: {
        subtitle: 'Adicione a Giggal.ai como conector personalizado no Claude. Sem arquivos de configuração, sem chave de API para colar.',
        steps: [
          <>No Claude (web ou desktop), abra <B>Settings → Connectors</B>.</>,
          <>Clique em <B>Add</B> → <B>Add custom connector</B>.</>,
          <>Use o nome <M>Giggal.ai</M>, cole a URL MCP abaixo e clique em <B>Add</B>.</>,
          <>Abra o conector <B>Giggal.ai</B> e clique em <B>Connect</B>.</>,
          <>Clique em <B>Allow</B> para liberar <M>verify:read</M>, que permite verificar endereços, consultar créditos e ver verificações anteriores.</>,
        ],
      },
      chatgpt: {
        subtitle: 'Adicione a Giggal.ai como plugin personalizado no ChatGPT, conectado via OAuth, sem chave de API para colar.',
        steps: [
          <>No ChatGPT, abra <B>Plugins</B> na barra lateral e clique no <B>+</B> no canto superior direito.</>,
          <>Use o nome <M>Giggal.ai</M>, cole a URL MCP abaixo em <B>Server URL</B>, escolha <B>Authentication → OAuth</B>, marque a confirmação e clique em <B>Create</B>.</>,
          <>Abra o plugin <B>Giggal.ai</B>, clique em <B>Connect</B> e depois em <B>Sign in with Giggal.ai</B>.</>,
          <>Clique em <B>Allow</B> para liberar <M>verify:read</M>, que permite verificar endereços, consultar créditos e ver verificações anteriores.</>,
        ],
      },
      'claude-code': { note: <>Troque <M>YOUR_API_KEY</M> pela chave do seu painel da Giggal.ai. Já tem um servidor <M>giggal</M>? Rode primeiro <M>claude mcp remove giggal --scope user</M> e adicione-o de novo.</> },
      codex: { note: <>O Codex lê o token de uma variável de ambiente. Defina-a, recarregue o shell, feche e abra o Codex de novo e rode <M>/mcp</M> para confirmar:<EnvBlock /></> },
      cursor: { note: <>Troque <M>YOUR_API_KEY</M> pela chave do seu painel da Giggal.ai.</> },
      windsurf: { note: <>Troque <M>YOUR_API_KEY</M> pela chave do seu painel da Giggal.ai.</> },
      vscode: { note: <>Troque <M>YOUR_API_KEY</M> pela chave do seu painel da Giggal.ai. O VS Code usa <M>&quot;servers&quot;</M> em vez de <M>&quot;mcpServers&quot;</M>.</> },
      cline: { note: <>Troque <M>YOUR_API_KEY</M> pela chave do seu painel da Giggal.ai. O caminho mostrado é o do macOS; ajuste-o para o seu sistema.</> },
      zed: { note: <>Troque <M>YOUR_API_KEY</M> pela chave do seu painel da Giggal.ai.</> },
    },
  },
  fr: {
    title: 'Connectez votre IA préférée.',
    subtitle: 'Branchez Giggal.ai sur votre agent IA via MCP et vérifiez des emails, catch-all compris, directement dans Claude, Cursor, VS Code et bien d’autres.',
    toolsAria: 'Outils IA',
    groups: ['Apps de chat', 'Éditeurs de code'],
    pasteInto: 'Collez dans',
    or: ' ou ',
    serverUrl: 'URL du serveur MCP',
    copy: 'Copier',
    copied: 'Copié',
    copyAria: 'Copier dans le presse-papiers',
    restart: 'Redémarrez le client après l’ajout, puis demandez :',
    askBefore: '« ',
    askAfter: ' est-elle délivrable ? »',
    guide: 'Guide complet (en anglais)',
    tools: {
      claude: {
        subtitle: 'Ajoutez Giggal.ai comme connecteur personnalisé dans Claude. Aucun fichier de configuration, aucune clé API à coller.',
        steps: [
          <>Dans Claude (web ou application de bureau), ouvrez <B>Settings → Connectors</B>.</>,
          <>Cliquez sur <B>Add</B> → <B>Add custom connector</B>.</>,
          <>Nommez-le <M>Giggal.ai</M>, collez l’URL MCP ci-dessous, puis cliquez sur <B>Add</B>.</>,
          <>Ouvrez le connecteur <B>Giggal.ai</B> et cliquez sur <B>Connect</B>.</>,
          <>Cliquez sur <B>Allow</B> pour accorder <M>verify:read</M>, qui couvre la vérification d’adresses, le suivi des crédits et l’historique des vérifications.</>,
        ],
      },
      chatgpt: {
        subtitle: 'Ajoutez Giggal.ai comme plugin personnalisé dans ChatGPT, connecté via OAuth, sans clé API à coller.',
        steps: [
          <>Dans ChatGPT, ouvrez <B>Plugins</B> dans la barre latérale, puis cliquez sur le <B>+</B> en haut à droite.</>,
          <>Nommez-le <M>Giggal.ai</M>, indiquez l’URL MCP ci-dessous dans <B>Server URL</B>, choisissez <B>Authentication → OAuth</B>, cochez la confirmation, puis cliquez sur <B>Create</B>.</>,
          <>Ouvrez le plugin <B>Giggal.ai</B>, cliquez sur <B>Connect</B>, puis sur <B>Sign in with Giggal.ai</B>.</>,
          <>Cliquez sur <B>Allow</B> pour accorder <M>verify:read</M>, qui couvre la vérification d’adresses, le suivi des crédits et l’historique des vérifications.</>,
        ],
      },
      'claude-code': { note: <>Remplacez <M>YOUR_API_KEY</M> par la clé de votre tableau de bord Giggal.ai. Vous avez déjà un serveur <M>giggal</M>&nbsp;? Lancez d’abord <M>claude mcp remove giggal --scope user</M>, puis ajoutez-le de nouveau.</> },
      codex: { note: <>Codex lit le jeton dans une variable d’environnement. Définissez-la, rechargez le shell, quittez puis rouvrez Codex et lancez <M>/mcp</M> pour vérifier&nbsp;:<EnvBlock /></> },
      cursor: { note: <>Remplacez <M>YOUR_API_KEY</M> par la clé de votre tableau de bord Giggal.ai.</> },
      windsurf: { note: <>Remplacez <M>YOUR_API_KEY</M> par la clé de votre tableau de bord Giggal.ai.</> },
      vscode: { note: <>Remplacez <M>YOUR_API_KEY</M> par la clé de votre tableau de bord Giggal.ai. VS Code utilise <M>&quot;servers&quot;</M> au lieu de <M>&quot;mcpServers&quot;</M>.</> },
      cline: { note: <>Remplacez <M>YOUR_API_KEY</M> par la clé de votre tableau de bord Giggal.ai. Le chemin indiqué est celui de macOS&nbsp;: adaptez-le à votre système.</> },
      zed: { note: <>Remplacez <M>YOUR_API_KEY</M> par la clé de votre tableau de bord Giggal.ai.</> },
    },
  },
}
