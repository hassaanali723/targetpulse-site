// ─────────────────────────────────────────────────────────────────────────────
// Registry for the programmatic /integrations/zapier/{app} pages.
// One entry per app that connects to Giggal.ai through Zapier. Apps that
// Giggal.ai integrates DIRECTLY in the dashboard (Mailchimp, SendGrid,
// ActiveCampaign, Campaign Monitor, GetResponse, AWeber, MailerLite, Drip,
// Elastic Email, Mailgun, Mailjet, Reply.io, Zoho CRM) are intentionally NOT
// here; they have their own direct integration and should never be pitched
// through Zapier.
//
// COPY RULES: no em dashes, no "verdict" (use "result"), factual app blurbs.
// Logos live in /public/integrations/zapier-integration/Generic/logos/{slug}.png
// ─────────────────────────────────────────────────────────────────────────────

export interface ZapierApp {
  slug: string
  name: string
  /** Primary domain, used for the outbound "visit website" link. */
  domain: string
  category: string
  /** Factual one-liner about the app, shown in the About box. */
  about: string
  /** Completes the sentence "When {triggerExample}, ..." in page copy. */
  triggerExample: string
}

export const ZAPIER_APPS: ZapierApp[] = [
  { slug: 'act-on', name: 'Act-On', domain: 'act-on.com', category: 'Marketing Automation', about: 'Act-On is a marketing automation platform for multi-channel campaign management, lead scoring and nurture programs.', triggerExample: 'a new contact enters an Act-On program' },
  { slug: 'activetrail', name: 'ActiveTrail', domain: 'activetrail.com', category: 'Email Marketing', about: 'ActiveTrail is an email marketing and automation platform with SMS campaigns and landing pages.', triggerExample: 'a new subscriber joins an ActiveTrail list' },
  { slug: 'agile-crm', name: 'Agile CRM', domain: 'agilecrm.com', category: 'CRM', about: 'Agile CRM combines sales, marketing and service automation in one CRM for small businesses.', triggerExample: 'a new contact is added in Agile CRM' },
  { slug: 'bevy-commerce', name: 'Bevy Commerce', domain: 'bevycommerce.com', category: 'Ecommerce', about: 'Bevy Commerce builds Shopify apps for popups, upsells and store personalization.', triggerExample: 'a shopper signs up through a Bevy Commerce popup' },
  { slug: 'bombbomb', name: 'BombBomb', domain: 'bombbomb.com', category: 'Sales & Outreach', about: 'BombBomb lets sales teams record and send personal videos in email to build trust faster.', triggerExample: 'a new contact is created in BombBomb' },
  { slug: 'brevo', name: 'Brevo', domain: 'brevo.com', category: 'Email Marketing', about: 'Brevo, formerly Sendinblue, is an email and SMS marketing platform with automation and a built-in CRM.', triggerExample: 'a new contact is added in Brevo' },
  { slug: 'cleverreach', name: 'CleverReach', domain: 'cleverreach.com', category: 'Email Marketing', about: 'CleverReach is a German email marketing tool for newsletters and automated campaigns.', triggerExample: 'a new recipient joins a CleverReach group' },
  { slug: 'clickfunnels', name: 'ClickFunnels', domain: 'clickfunnels.com', category: 'Marketing Automation', about: 'ClickFunnels builds sales funnels, landing pages and checkout flows without code.', triggerExample: 'a lead opts in through a ClickFunnels funnel' },
  { slug: 'cognito-forms', name: 'Cognito Forms', domain: 'cognitoforms.com', category: 'Forms & Surveys', about: 'Cognito Forms is an online form builder with calculations, payments and conditional logic.', triggerExample: 'a new Cognito Forms entry is submitted' },
  { slug: 'commcare', name: 'CommCare', domain: 'dimagi.com', category: 'Forms & Surveys', about: 'CommCare by Dimagi is a mobile data collection platform used by frontline teams worldwide.', triggerExample: 'a new CommCare form is received' },
  { slug: 'constant-contact', name: 'Constant Contact', domain: 'constantcontact.com', category: 'Email Marketing', about: 'Constant Contact is a long-running email marketing platform for newsletters, events and automation.', triggerExample: 'a new contact is added in Constant Contact' },
  { slug: 'curated', name: 'Curated', domain: 'curated.co', category: 'Email Marketing', about: 'Curated is a newsletter tool for collecting links and publishing curated email digests.', triggerExample: 'a new subscriber joins your Curated publication' },
  { slug: 'customer-io', name: 'Customer.io', domain: 'customer.io', category: 'Marketing Automation', about: 'Customer.io sends automated messages driven by real-time behavioral data across email, push and SMS.', triggerExample: 'a person is created or updated in Customer.io' },
  { slug: 'emailoctopus', name: 'EmailOctopus', domain: 'emailoctopus.com', category: 'Email Marketing', about: 'EmailOctopus is a low-cost email marketing platform for newsletters and drip campaigns.', triggerExample: 'a new contact subscribes to an EmailOctopus list' },
  { slug: 'enalyzer', name: 'Enalyzer', domain: 'enalyzer.com', category: 'Forms & Surveys', about: 'Enalyzer is a survey and reporting platform for collecting and visualizing feedback.', triggerExample: 'a new Enalyzer survey response arrives' },
  { slug: 'formdesk', name: 'Formdesk', domain: 'formdesk.com', category: 'Forms & Surveys', about: 'Formdesk lets teams build online forms and manage submissions with notifications and integrations.', triggerExample: 'a new Formdesk submission comes in' },
  { slug: 'formitize', name: 'Formitize', domain: 'formitize.com', category: 'Forms & Surveys', about: 'Formitize digitizes paperwork with mobile forms, job management and CRM for field teams.', triggerExample: 'a new Formitize form is submitted' },
  { slug: 'formkeep', name: 'FormKeep', domain: 'formkeep.com', category: 'Forms & Surveys', about: 'FormKeep is a form backend for designers and developers, collecting submissions without server code.', triggerExample: 'a new FormKeep submission lands' },
  { slug: 'formlets', name: 'Formlets', domain: 'formlets.com', category: 'Forms & Surveys', about: 'Formlets is a simple online form builder for registrations, applications and surveys.', triggerExample: 'a new Formlets response is submitted' },
  { slug: 'formsite', name: 'Formsite', domain: 'formsite.com', category: 'Forms & Surveys', about: 'Formsite builds secure online forms and surveys with payments and workflow rules.', triggerExample: 'a new Formsite result is submitted' },
  { slug: 'freshsales', name: 'Freshsales', domain: 'freshworks.com', category: 'CRM', about: 'Freshsales by Freshworks is a sales CRM with built-in phone, email and AI-based lead scoring.', triggerExample: 'a new contact is created in Freshsales' },
  { slug: 'fulcrum', name: 'Fulcrum', domain: 'fulcrumapp.com', category: 'Forms & Surveys', about: 'Fulcrum is a field inspection platform for mobile data collection with GPS and photos.', triggerExample: 'a new Fulcrum record is created' },
  { slug: 'fyrebox', name: 'Fyrebox', domain: 'fyrebox.com', category: 'Forms & Surveys', about: 'Fyrebox creates interactive quizzes that capture leads and qualify prospects.', triggerExample: 'someone completes a Fyrebox quiz' },
  { slug: 'getsitecontrol', name: 'Getsitecontrol', domain: 'getsitecontrol.com', category: 'Website & Popups', about: 'Getsitecontrol adds popups, surveys and signup widgets to any website.', triggerExample: 'a visitor subscribes through a Getsitecontrol widget' },
  { slug: 'google-contacts', name: 'Google Contacts', domain: 'contacts.google.com', category: 'CRM', about: 'Google Contacts stores and syncs your address book across Google Workspace.', triggerExample: 'a new contact is added in Google Contacts' },
  { slug: 'google-forms', name: 'Google Forms', domain: 'forms.google.com', category: 'Forms & Surveys', about: 'Google Forms collects survey responses and signups straight into Google Sheets.', triggerExample: 'a new Google Forms response arrives' },
  { slug: 'google-sheets', name: 'Google Sheets', domain: 'sheets.google.com', category: 'Spreadsheets & Data', about: 'Google Sheets is the collaborative spreadsheet at the center of countless lead lists and workflows.', triggerExample: 'a new row is added to a Google Sheet' },
  { slug: 'highrise', name: 'Highrise', domain: 'highrisehq.com', category: 'CRM', about: 'Highrise is a simple CRM from the makers of Basecamp for tracking contacts and follow-ups.', triggerExample: 'a new contact is added in Highrise' },
  { slug: 'hubspot', name: 'HubSpot', domain: 'hubspot.com', category: 'CRM', about: 'HubSpot is the leading inbound marketing, sales and service platform with a free CRM at its core.', triggerExample: 'a new contact is created in HubSpot' },
  { slug: 'insightly', name: 'Insightly', domain: 'insightly.com', category: 'CRM', about: 'Insightly is a CRM with project management built in, popular with mid-size teams.', triggerExample: 'a new lead is created in Insightly' },
  { slug: 'intercom', name: 'Intercom', domain: 'intercom.com', category: 'Support', about: 'Intercom is a customer messaging platform for support, onboarding and product tours.', triggerExample: 'a new lead or user is created in Intercom' },
  { slug: 'jotform', name: 'Jotform', domain: 'jotform.com', category: 'Forms & Surveys', about: 'Jotform is a popular online form builder with thousands of templates and payment integrations.', triggerExample: 'a new Jotform submission arrives' },
  { slug: 'keap', name: 'Keap', domain: 'keap.com', category: 'CRM', about: 'Keap, formerly Infusionsoft, combines CRM, sales pipeline and marketing automation for small businesses.', triggerExample: 'a new contact is added in Keap' },
  { slug: 'kit', name: 'Kit', domain: 'kit.com', category: 'Email Marketing', about: 'Kit, formerly ConvertKit, is the email marketing platform built for creators and newsletter authors.', triggerExample: 'a new subscriber joins your Kit audience' },
  { slug: 'klaviyo', name: 'Klaviyo', domain: 'klaviyo.com', category: 'Email Marketing', about: 'Klaviyo powers email and SMS marketing for ecommerce brands with deep Shopify integration.', triggerExample: 'a new profile is created in Klaviyo' },
  { slug: 'leadsquared', name: 'LeadSquared', domain: 'leadsquared.com', category: 'CRM', about: 'LeadSquared is a sales execution CRM used heavily in education, healthcare and financial services.', triggerExample: 'a new lead is captured in LeadSquared' },
  { slug: 'listrak', name: 'Listrak', domain: 'listrak.com', category: 'Email Marketing', about: 'Listrak is a cross-channel marketing platform for retail brands covering email, SMS and identity.', triggerExample: 'a new contact is added in Listrak' },
  { slug: 'mailup', name: 'MailUp', domain: 'mailup.com', category: 'Email Marketing', about: 'MailUp is an Italian email and SMS marketing platform for newsletters and transactional sending.', triggerExample: 'a new recipient is added in MailUp' },
  { slug: 'marketo-engage', name: 'Marketo Engage', domain: 'marketo.com', category: 'Marketing Automation', about: 'Adobe Marketo Engage is enterprise marketing automation for lead management and account-based marketing.', triggerExample: 'a new lead is created in Marketo Engage' },
  { slug: 'medallia', name: 'Medallia', domain: 'medallia.com', category: 'Forms & Surveys', about: 'Medallia is an enterprise experience management platform capturing customer and employee feedback.', triggerExample: 'a new Medallia survey response is recorded' },
  { slug: 'naturalforms', name: 'naturalForms', domain: 'naturalforms.com', category: 'Forms & Surveys', about: 'naturalForms turns paper forms into digital ones with handwriting, photo and signature capture on tablets.', triggerExample: 'a new naturalForms document is submitted' },
  { slug: 'neto', name: 'Neto', domain: 'netohq.com', category: 'Ecommerce', about: 'Neto, now Maropost Commerce Cloud, is an Australian ecommerce platform for retail and wholesale.', triggerExample: 'a new customer registers in your Neto store' },
  { slug: 'nocrm-io', name: 'noCRM.io', domain: 'nocrm.io', category: 'Sales & Outreach', about: 'noCRM.io is a lead management tool built around next actions instead of heavy CRM data entry.', triggerExample: 'a new lead is created in noCRM.io' },
  { slug: 'omniconvert', name: 'Omniconvert', domain: 'omniconvert.com', category: 'Website & Popups', about: 'Omniconvert runs A/B tests, surveys and personalization for conversion rate optimization.', triggerExample: 'a visitor completes an Omniconvert survey' },
  { slug: 'onepagecrm', name: 'OnePageCRM', domain: 'onepagecrm.com', category: 'CRM', about: 'OnePageCRM is an action-focused CRM that turns every contact into a next step.', triggerExample: 'a new contact is added in OnePageCRM' },
  { slug: 'ortto', name: 'Ortto', domain: 'ortto.com', category: 'Marketing Automation', about: 'Ortto, formerly Autopilot, unifies customer data, messaging journeys and analytics.', triggerExample: 'a new person enters an Ortto audience' },
  { slug: 'outgrow', name: 'Outgrow', domain: 'outgrow.co', category: 'Forms & Surveys', about: 'Outgrow builds interactive calculators, quizzes and assessments that capture qualified leads.', triggerExample: 'a lead completes an Outgrow experience' },
  { slug: 'paperform', name: 'Paperform', domain: 'paperform.co', category: 'Forms & Surveys', about: 'Paperform is a form builder that reads like a document, with payments and logic built in.', triggerExample: 'a new Paperform submission arrives' },
  { slug: 'pipedrive', name: 'Pipedrive', domain: 'pipedrive.com', category: 'CRM', about: 'Pipedrive is a sales-first CRM built around visual pipelines and activity-based selling.', triggerExample: 'a new person is added in Pipedrive' },
  { slug: 'pointerpro', name: 'Pointerpro', domain: 'pointerpro.com', category: 'Forms & Surveys', about: 'Pointerpro creates assessments and surveys that return personalized PDF reports to respondents.', triggerExample: 'a new Pointerpro assessment is completed' },
  { slug: 'powr', name: 'POWR', domain: 'powr.io', category: 'Website & Popups', about: 'POWR offers a library of no-code website plugins including forms, popups and countdowns.', triggerExample: 'a visitor submits a POWR form' },
  { slug: 'qualaroo', name: 'Qualaroo', domain: 'qualaroo.com', category: 'Forms & Surveys', about: 'Qualaroo runs on-site micro-surveys called Nudges to gather user insights in context.', triggerExample: 'a new Qualaroo response is captured' },
  { slug: 'quicktapsurvey', name: 'QuickTapSurvey', domain: 'quicktapsurvey.com', category: 'Forms & Surveys', about: 'QuickTapSurvey collects surveys offline on tablets and kiosks at events and in stores.', triggerExample: 'a new QuickTapSurvey response syncs' },
  { slug: 'referral-rock', name: 'Referral Rock', domain: 'referralrock.com', category: 'Marketing Automation', about: 'Referral Rock runs referral and affiliate programs that turn customers into promoters.', triggerExample: 'a new member joins your Referral Rock program' },
  { slug: 'salesflare', name: 'Salesflare', domain: 'salesflare.com', category: 'CRM', about: 'Salesflare is an automated CRM for small B2B teams that fills itself out from email and calendar data.', triggerExample: 'a new contact is created in Salesflare' },
  { slug: 'salesforce', name: 'Salesforce', domain: 'salesforce.com', category: 'CRM', about: 'Salesforce is the world’s largest CRM platform, the system of record for sales teams everywhere.', triggerExample: 'a new lead is created in Salesforce' },
  { slug: 'salesmate', name: 'Salesmate', domain: 'salesmate.io', category: 'CRM', about: 'Salesmate is a CRM for growing teams with built-in calling, sequences and automation journeys.', triggerExample: 'a new contact is added in Salesmate' },
  { slug: 'sendlane', name: 'Sendlane', domain: 'sendlane.com', category: 'Email Marketing', about: 'Sendlane unifies email and SMS marketing for ecommerce with behavior-based automation.', triggerExample: 'a new contact subscribes in Sendlane' },
  { slug: 'sendpulse', name: 'SendPulse', domain: 'sendpulse.com', category: 'Email Marketing', about: 'SendPulse is a multi-channel marketing platform spanning email, SMS, chatbots and web push.', triggerExample: 'a new subscriber is added in SendPulse' },
  { slug: 'sendx', name: 'SendX', domain: 'sendx.io', category: 'Email Marketing', about: 'SendX is an affordable email marketing platform with unlimited sends on every plan.', triggerExample: 'a new contact joins a SendX list' },
  { slug: 'sharpspring', name: 'SharpSpring', domain: 'sharpspring.com', category: 'Marketing Automation', about: 'SharpSpring, now part of Constant Contact, is marketing automation with CRM and dynamic forms.', triggerExample: 'a new lead is created in SharpSpring' },
  { slug: 'smartsurvey', name: 'SmartSurvey', domain: 'smartsurvey.co.uk', category: 'Forms & Surveys', about: 'SmartSurvey is a UK-based survey platform trusted by government and enterprise teams.', triggerExample: 'a new SmartSurvey response is submitted' },
  { slug: 'smoove', name: 'Smoove', domain: 'smoove.io', category: 'Marketing Automation', about: 'Smoove is an Israeli marketing automation platform for email, landing pages and customer journeys.', triggerExample: 'a new contact is added in Smoove' },
  { slug: 'stripe', name: 'Stripe', domain: 'stripe.com', category: 'Payments', about: 'Stripe is the payments infrastructure powering checkout and billing for millions of businesses.', triggerExample: 'a new customer is created in Stripe' },
  { slug: 'surveymethods', name: 'SurveyMethods', domain: 'surveymethods.com', category: 'Forms & Surveys', about: 'SurveyMethods provides online surveys with advanced analytics and email newsletter tools.', triggerExample: 'a new SurveyMethods response arrives' },
  { slug: 'typeform', name: 'Typeform', domain: 'typeform.com', category: 'Forms & Surveys', about: 'Typeform makes conversational forms and surveys people actually finish.', triggerExample: 'a new Typeform response is submitted' },
  { slug: 'verticalresponse', name: 'VerticalResponse', domain: 'verticalresponse.com', category: 'Email Marketing', about: 'VerticalResponse is an email marketing tool for small businesses and nonprofits.', triggerExample: 'a new contact is added in VerticalResponse' },
  { slug: 'vision6', name: 'Vision6', domain: 'vision6.com.au', category: 'Email Marketing', about: 'Vision6 is an Australian email and SMS marketing platform popular with agencies and government.', triggerExample: 'a new contact is added in Vision6' },
  { slug: 'wavo', name: 'Wavo', domain: 'wavo.co', category: 'Sales & Outreach', about: 'Wavo runs cold email campaigns at scale for ecommerce agencies.', triggerExample: 'a new prospect is added to a Wavo campaign' },
  { slug: 'woobox', name: 'Woobox', domain: 'woobox.com', category: 'Marketing Automation', about: 'Woobox runs giveaways, contests and polls that collect entrant emails.', triggerExample: 'a new participant enters a Woobox campaign' },
  { slug: 'wufoo', name: 'Wufoo', domain: 'wufoo.com', category: 'Forms & Surveys', about: 'Wufoo by SurveyMonkey is a veteran online form builder for registrations and lead capture.', triggerExample: 'a new Wufoo entry is submitted' },
  { slug: 'zendesk', name: 'Zendesk', domain: 'zendesk.com', category: 'Support', about: 'Zendesk is a customer service platform for ticketing, help centers and messaging.', triggerExample: 'a new user is created in Zendesk' },
  { slug: 'zoho-forms', name: 'Zoho Forms', domain: 'zoho.com', category: 'Forms & Surveys', about: 'Zoho Forms is the form builder of the Zoho suite, feeding data into Zoho CRM and beyond.', triggerExample: 'a new Zoho Forms entry is submitted' },
]

export function getZapierApp(slug: string): ZapierApp | undefined {
  return ZAPIER_APPS.find((a) => a.slug === slug)
}

/** Up to `count` other apps from the same category, padded with others. */
export function relatedZapierApps(slug: string, count = 6): ZapierApp[] {
  const app = getZapierApp(slug)
  if (!app) return ZAPIER_APPS.slice(0, count)
  const sameCategory = ZAPIER_APPS.filter((a) => a.slug !== slug && a.category === app.category)
  const others = ZAPIER_APPS.filter((a) => a.slug !== slug && a.category !== app.category)
  return [...sameCategory, ...others].slice(0, count)
}

export const ZAPIER_APP_LOGO_DIR = '/integrations/zapier-integration/Generic/logos'

/** SEO-named logo path for a Zapier app. Files on disk follow the same pattern. */
export function zapierAppLogo(slug: string): string {
  return `${ZAPIER_APP_LOGO_DIR}/giggal-catch-all-email-verification-${slug}.png`
}

/** Descriptive alt text for an app logo: readable, keyword-relevant, not stuffed. */
export function zapierAppLogoAlt(name: string): string {
  return `${name} email verification with Giggal.ai catch-all email verifier`
}
