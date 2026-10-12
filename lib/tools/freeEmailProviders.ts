/**
 * Free and personal email domains, grouped by provider.
 * Every domain had working MX records when checked on 2026-10-12, and where the
 * provider's mail servers have a known name (Google, Microsoft, Yahoo, Apple, Proton,
 * Tuta, Zoho, GMX, WEB.DE, mail.com, Yandex, Mail.ru, QQ), the MX records pointed there.
 * Domains with no MX, a null MX or another company's mail servers were left out.
 * Rebuild: scratchpad fep/verify.mjs (see targetpulse-seo/plans/19-free-email-providers-plan.md).
 */

export type ProviderKind = 'webmail' | 'privacy' | 'isp'

export interface FreeEmailProvider {
  name: string
  company: string
  /** ISO 3166 country code of the company. */
  country: string
  kind: ProviderKind
  domains: string[]
}

export const FREE_LIST_CHECKED = '2026-10-12'

export const FREE_EMAIL_PROVIDERS: FreeEmailProvider[] = [
  { name: "Gmail", company: "Google", country: 'US', kind: 'webmail', domains: ['gmail.com', 'googlemail.com'] },
  { name: "Outlook.com", company: "Microsoft", country: 'US', kind: 'webmail', domains: ['outlook.com', 'hotmail.com', 'live.com', 'msn.com', 'windowslive.com', 'passport.com', 'outlook.fr', 'outlook.de', 'outlook.it', 'outlook.es', 'outlook.com.br', 'outlook.jp', 'outlook.in', 'outlook.com.au', 'outlook.be', 'outlook.ie', 'outlook.at', 'outlook.cl', 'outlook.com.ar', 'outlook.sa', 'outlook.kr', 'outlook.ph', 'outlook.my', 'outlook.sg', 'outlook.co.id', 'outlook.co.th', 'outlook.dk', 'outlook.pt', 'outlook.cz', 'outlook.com.gr', 'outlook.com.tr', 'outlook.com.vn', 'hotmail.co.uk', 'hotmail.fr', 'hotmail.de', 'hotmail.it', 'hotmail.es', 'hotmail.be', 'hotmail.nl', 'hotmail.ca', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.co.jp', 'hotmail.co.in', 'hotmail.com.ar', 'hotmail.se', 'hotmail.dk', 'hotmail.no', 'hotmail.fi', 'hotmail.gr', 'hotmail.ch', 'hotmail.at', 'hotmail.cl', 'hotmail.com.tr', 'hotmail.co.za', 'hotmail.my', 'hotmail.sg', 'hotmail.ph', 'hotmail.co.th', 'hotmail.com.vn', 'hotmail.co.id', 'hotmail.co.kr', 'hotmail.com.tw', 'hotmail.com.hk', 'hotmail.co.nz', 'hotmail.ie', 'hotmail.pt', 'hotmail.cz', 'hotmail.sk', 'hotmail.hu', 'hotmail.rs', 'live.co.uk', 'live.fr', 'live.de', 'live.it', 'live.nl', 'live.ca', 'live.com.au', 'live.be', 'live.com.mx', 'live.jp', 'live.se', 'live.dk', 'live.no', 'live.ie', 'live.at', 'live.ch', 'live.cl', 'live.com.ar', 'live.com.pt', 'live.co.za', 'live.in', 'live.ru', 'live.cn', 'live.hk', 'live.com.my', 'live.com.sg', 'live.com.ph', 'msn.cn'] },
  { name: "Yahoo Mail", company: "Yahoo", country: 'US', kind: 'webmail', domains: ['yahoo.com', 'myyahoo.com', 'ymail.com', 'rocketmail.com', 'yahoo.co.uk', 'yahoo.fr', 'yahoo.de', 'yahoo.it', 'yahoo.es', 'yahoo.ca', 'yahoo.com.au', 'yahoo.com.br', 'yahoo.co.in', 'yahoo.in', 'yahoo.com.mx', 'yahoo.com.ar', 'yahoo.com.sg', 'yahoo.com.ph', 'yahoo.co.id', 'yahoo.com.my', 'yahoo.com.vn', 'yahoo.co.th', 'yahoo.com.tw', 'yahoo.com.hk', 'yahoo.co.nz', 'yahoo.gr', 'yahoo.ie', 'yahoo.se', 'yahoo.dk', 'yahoo.no', 'yahoo.pl', 'yahoo.ro', 'yahoo.at', 'yahoo.be', 'yahoo.nl', 'yahoo.fi', 'yahoo.pt', 'yahoo.cl', 'yahoo.co.za', 'yahoo.com.tr', 'yahoo.com.pe', 'yahoo.com.co', 'yahoo.com.ve', 'yahoo.co.kr'] },
  { name: "Yahoo! Mail Japan", company: "LY Corporation", country: 'JP', kind: 'webmail', domains: ['yahoo.co.jp', 'ybb.ne.jp'] },
  { name: "AOL Mail", company: "Yahoo", country: 'US', kind: 'webmail', domains: ['aol.com', 'aim.com', 'aol.co.uk', 'aol.fr', 'aol.de', 'aol.it', 'aol.es', 'aol.nl', 'aol.be', 'aol.com.au', 'aol.com.br', 'aol.com.mx', 'aol.jp', 'ygm.com', 'wow.com', 'verizon.net'] },
  { name: "iCloud Mail", company: "Apple", country: 'US', kind: 'webmail', domains: ['icloud.com', 'me.com', 'mac.com'] },
  { name: "Proton Mail", company: "Proton AG", country: 'CH', kind: 'privacy', domains: ['proton.me', 'protonmail.com', 'protonmail.ch', 'pm.me'] },
  { name: "Tuta", company: "Tutao GmbH", country: 'DE', kind: 'privacy', domains: ['tuta.com', 'tutanota.com', 'tutanota.de', 'tutamail.com', 'tuta.io', 'keemail.me'] },
  { name: "Zoho Mail", company: "Zoho", country: 'IN', kind: 'webmail', domains: ['zohomail.com', 'zoho.com', 'zohomail.in', 'zohomail.eu'] },
  { name: "GMX", company: "United Internet", country: 'DE', kind: 'webmail', domains: ['gmx.com', 'gmx.net', 'gmx.de', 'gmx.at', 'gmx.ch', 'gmx.fr', 'gmx.co.uk', 'gmx.us', 'gmx.es', 'gmx.it', 'gmx.eu', 'gmx.info', 'gmx.biz', 'gmx.org', 'gmx.ca', 'gmx.tm', 'gmx.ph', 'gmx.sg', 'gmx.cn', 'gmx.li', 'gmx.pt', 'gmx.com.br', 'gmx.com.my'] },
  { name: "WEB.DE", company: "United Internet", country: 'DE', kind: 'webmail', domains: ['web.de'] },
  { name: "mail.com", company: "United Internet", country: 'US', kind: 'webmail', domains: ['mail.com', 'email.com', 'usa.com', 'consultant.com', 'myself.com', 'post.com', 'europe.com', 'dr.com', 'engineer.com', 'techie.com', 'writeme.com', 'cheerful.com', 'iname.com', 'accountant.com', 'asia.com', 'artlover.com', 'contractor.net', 'graphic-designer.com', 'musician.org', 'doctor.com', 'lawyer.com', 'linuxmail.org', 'programmer.net', 'workmail.com', 'uymail.com', 'chemist.com', 'minister.com', 'activist.com', 'adexec.com', 'cyberservices.com', 'dallasmail.com', 'earthling.net', 'innocent.com', 'journalist.com', 'publicist.com', 'religious.com', 'toothfairy.com', 'tvstar.com', 'mail.org', 'photographer.net'] },
  { name: "Yandex Mail", company: "Yandex", country: 'RU', kind: 'webmail', domains: ['yandex.com', 'yandex.ru', 'ya.ru', 'yandex.by', 'yandex.kz', 'narod.ru'] },
  { name: "Mail.ru", company: "VK", country: 'RU', kind: 'webmail', domains: ['mail.ru', 'inbox.ru', 'list.ru', 'bk.ru', 'internet.ru'] },
  { name: "Rambler", company: "Rambler&Co", country: 'RU', kind: 'webmail', domains: ['rambler.ru', 'lenta.ru', 'autorambler.ru', 'myrambler.ru', 'ro.ru'] },
  { name: "QQ Mail", company: "Tencent", country: 'CN', kind: 'webmail', domains: ['qq.com', 'foxmail.com', 'vip.qq.com'] },
  { name: "NetEase Mail", company: "NetEase", country: 'CN', kind: 'webmail', domains: ['163.com', '126.com', 'yeah.net', '188.com'] },
  { name: "Sina Mail", company: "Sina", country: 'CN', kind: 'webmail', domains: ['sina.com', 'sina.cn', 'sina.com.cn', 'sohu.com', 'aliyun.com', '139.com', '189.cn'] },
  { name: "Naver Mail", company: "Naver", country: 'KR', kind: 'webmail', domains: ['naver.com'] },
  { name: "Daum Mail", company: "Kakao", country: 'KR', kind: 'webmail', domains: ['daum.net', 'hanmail.net', 'kakao.com'] },
  { name: "Rediffmail", company: "Rediff.com", country: 'IN', kind: 'webmail', domains: ['rediffmail.com'] },
  { name: "Libero Mail", company: "Italiaonline", country: 'IT', kind: 'webmail', domains: ['libero.it', 'virgilio.it', 'inwind.it', 'iol.it', 'blu.it', 'giallo.it'] },
  { name: "Seznam Email", company: "Seznam.cz", country: 'CZ', kind: 'webmail', domains: ['seznam.cz', 'email.cz', 'post.cz', 'spoluzaci.cz'] },
  { name: "WP Poczta", company: "Wirtualna Polska", country: 'PL', kind: 'webmail', domains: ['wp.pl', 'o2.pl', 'tlen.pl'] },
  { name: "Interia Poczta", company: "Interia", country: 'PL', kind: 'webmail', domains: ['interia.pl', 'interia.eu', 'poczta.fm'] },
  { name: "Onet Poczta", company: "Ringier Axel Springer", country: 'PL', kind: 'webmail', domains: ['onet.pl', 'op.pl', 'onet.eu', 'vp.pl'] },
  { name: "La Poste Mail", company: "La Poste", country: 'FR', kind: 'webmail', domains: ['laposte.net'] },
  { name: "UOL Mail", company: "UOL", country: 'BR', kind: 'webmail', domains: ['uol.com.br', 'bol.com.br'] },
  { name: "Terra Mail", company: "Terra", country: 'BR', kind: 'webmail', domains: ['terra.com.br', 'ig.com.br'] },
  { name: "ukr.net", company: "ukr.net", country: 'UA', kind: 'webmail', domains: ['ukr.net', 'i.ua', 'meta.ua'] },
  { name: "ABV.bg", company: "Net Info", country: 'BG', kind: 'webmail', domains: ['abv.bg', 'mail.bg', 'dir.bg'] },
  { name: "freemail.hu", company: "Central Médiacsoport", country: 'HU', kind: 'webmail', domains: ['freemail.hu', 'citromail.hu'] },
  { name: "Azet", company: "Azet.sk", country: 'SK', kind: 'webmail', domains: ['azet.sk', 'centrum.sk', 'centrum.cz', 'atlas.cz', 'volny.cz'] },
  { name: "SAPO Mail", company: "MEO", country: 'PT', kind: 'webmail', domains: ['sapo.pt'] },
  { name: "Walla Mail", company: "Walla", country: 'IL', kind: 'webmail', domains: ['walla.co.il', 'walla.com'] },
  { name: "Inbox.lv", company: "Inbox.lv", country: 'LV', kind: 'webmail', domains: ['inbox.lv', 'inbox.lt', 'inbox.eu', 'mail.ee'] },
  { name: "Comcast Xfinity", company: "Comcast", country: 'US', kind: 'isp', domains: ['comcast.net'] },
  { name: "AT&T Mail", company: "AT&T", country: 'US', kind: 'isp', domains: ['att.net', 'sbcglobal.net', 'bellsouth.net', 'pacbell.net', 'swbell.net', 'ameritech.net', 'flash.net', 'prodigy.net', 'nvbell.net', 'snet.net', 'wans.net'] },
  { name: "Spectrum / Charter", company: "Charter Communications", country: 'US', kind: 'isp', domains: ['charter.net', 'twc.com', 'roadrunner.com', 'rr.com'] },
  { name: "Cox Mail", company: "Cox", country: 'US', kind: 'isp', domains: ['cox.net'] },
  { name: "EarthLink", company: "EarthLink", country: 'US', kind: 'isp', domains: ['earthlink.net', 'mindspring.com'] },
  { name: "Optimum", company: "Altice USA", country: 'US', kind: 'isp', domains: ['optonline.net', 'optimum.net'] },
  { name: "CenturyLink", company: "Lumen", country: 'US', kind: 'isp', domains: ['centurylink.net', 'q.com', 'embarqmail.com'] },
  { name: "Frontier", company: "Frontier", country: 'US', kind: 'isp', domains: ['frontier.com', 'frontiernet.net'] },
  { name: "Juno / NetZero", company: "United Online", country: 'US', kind: 'isp', domains: ['juno.com', 'netzero.net', 'netzero.com'] },
  { name: "BT Mail", company: "BT", country: 'GB', kind: 'isp', domains: ['btinternet.com', 'btopenworld.com', 'talk21.com'] },
  { name: "Sky Mail", company: "Sky", country: 'GB', kind: 'isp', domains: ['sky.com'] },
  { name: "Virgin Media Mail", company: "Virgin Media O2", country: 'GB', kind: 'isp', domains: ['virginmedia.com', 'ntlworld.com', 'blueyonder.co.uk'] },
  { name: "TalkTalk", company: "TalkTalk", country: 'GB', kind: 'isp', domains: ['talktalk.net', 'tiscali.co.uk'] },
  { name: "Rogers / Shaw", company: "Rogers", country: 'CA', kind: 'isp', domains: ['rogers.com', 'shaw.ca'] },
  { name: "Bell / Sympatico", company: "Bell Canada", country: 'CA', kind: 'isp', domains: ['sympatico.ca', 'bell.net'] },
  { name: "Vidéotron", company: "Vidéotron", country: 'CA', kind: 'isp', domains: ['videotron.ca'] },
  { name: "Telstra BigPond", company: "Telstra", country: 'AU', kind: 'isp', domains: ['bigpond.com', 'bigpond.net.au'] },
  { name: "Optus", company: "Optus", country: 'AU', kind: 'isp', domains: ['optusnet.com.au'] },
  { name: "iiNet", company: "TPG Telecom", country: 'AU', kind: 'isp', domains: ['iinet.net.au', 'tpg.com.au', 'internode.on.net'] },
  { name: "Xtra", company: "One NZ / Spark", country: 'NZ', kind: 'isp', domains: ['xtra.co.nz'] },
  { name: "T-Online", company: "Deutsche Telekom", country: 'DE', kind: 'isp', domains: ['t-online.de', 'magenta.de'] },
  { name: "freenet Mail", company: "freenet", country: 'DE', kind: 'webmail', domains: ['freenet.de'] },
  { name: "Orange Mail", company: "Orange", country: 'FR', kind: 'isp', domains: ['orange.fr', 'wanadoo.fr'] },
  { name: "Free", company: "Iliad", country: 'FR', kind: 'isp', domains: ['free.fr', 'aliceadsl.fr'] },
  { name: "SFR Mail", company: "Altice France", country: 'FR', kind: 'isp', domains: ['sfr.fr', 'neuf.fr', 'club-internet.fr', 'cegetel.net'] },
  { name: "Bouygues Telecom", company: "Bouygues", country: 'FR', kind: 'isp', domains: ['bbox.fr'] },
  { name: "TIM Mail", company: "TIM", country: 'IT', kind: 'isp', domains: ['alice.it', 'tim.it', 'tin.it', 'tiscali.it', 'fastwebnet.it'] },
  { name: "Telefónica", company: "Telefónica", country: 'ES', kind: 'isp', domains: ['telefonica.net'] },
  { name: "Swisscom Bluewin", company: "Swisscom", country: 'CH', kind: 'isp', domains: ['bluewin.ch', 'hispeed.ch', 'sunrise.ch'] },
  { name: "A1 / Magenta Austria", company: "A1 Telekom", country: 'AT', kind: 'isp', domains: ['aon.at', 'a1.net', 'chello.at'] },
  { name: "KPN / Ziggo", company: "KPN, VodafoneZiggo", country: 'NL', kind: 'isp', domains: ['kpnmail.nl', 'planet.nl', 'home.nl', 'ziggo.nl', 'hetnet.nl', 'chello.nl', 'casema.nl', 'zeelandnet.nl'] },
  { name: "Proximus / Telenet", company: "Proximus, Telenet", country: 'BE', kind: 'isp', domains: ['skynet.be', 'telenet.be'] },
  { name: "Telia", company: "Telia", country: 'SE', kind: 'isp', domains: ['spray.se', 'comhem.se'] },
  { name: "Eir", company: "Eir", country: 'IE', kind: 'isp', domains: ['eircom.net'] },
  { name: "Telkom / MWEB", company: "Telkom, MWEB", country: 'ZA', kind: 'isp', domains: ['telkomsa.net', 'mweb.co.za', 'vodamail.co.za', 'webmail.co.za'] },
  { name: "Globo / Vivo", company: "Various", country: 'BR', kind: 'isp', domains: ['globo.com', 'oi.com.br'] },
]

/** Domain -> provider, for the checker. */
export const FREE_DOMAIN_INDEX: Map<string, FreeEmailProvider> = new Map(
  FREE_EMAIL_PROVIDERS.flatMap((p) => p.domains.map((d) => [d, p] as [string, FreeEmailProvider]))
)

export const FREE_DOMAIN_COUNT = FREE_DOMAIN_INDEX.size
