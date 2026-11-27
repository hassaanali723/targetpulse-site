// es words for the 11 brand alternative pages: competitor facts (keyed by
// slug, same fields as the English in lib/competitorPricing.ts) and the labels
// of the wide layout. Numbers never live here.
import type { AltFacts, AltWideUi } from '@/lib/i18n/altBrands/types'

export const FACTS: Record<string, AltFacts> = {
  leadmagic: {
    freeTier: 'Sin créditos gratis',
    creditsExpire: 'Los créditos mensuales no usados se acumulan, hasta el doble de la cuota mensual',
    catchAllCreditCost: '0,25 créditos por resultado concluyente; un resultado desconocido es gratis',
    claimedAccuracy: 'Declara 99,5% en la validación',
    pricingBasisNote: 'LeadMagic se vende como suscripción mensual con un solo fondo de créditos: Essential 99 $ (5.000 créditos), Growth 249 $ (20.000), Professional 499 $ (50.000), Ultimate 849 $ (100.000). Una validación concluyente cuesta 0,25 créditos y un resultado desconocido es gratis. Las cifras de arriba son el plan mensual más pequeño que cubre esas validaciones. Con el pago anual, dos meses son gratis. Las cifras de Giggal.ai son precios únicos de pago por uso.',
    betterFitFor: [
      'Muchos datos de enriquecimiento además de la verificación: números de móvil, datos de empresa, cambios de empleo y datos de publicidad',
      'Publica su propia comparativa de verificación catch-all, algo que la mayoría de los proveedores no hace',
      'Equipos que quieren búsqueda, enriquecimiento y verificación en una sola suscripción',
      'Una API pensada para desarrolladores, con precios en créditos por endpoint',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  anymailfinder: {
    freeTier: 'Prueba de 7 días con 100 créditos; se comprueba la tarjeta, pero no se cobra',
    creditsExpire: 'Los créditos se acumulan sin límite mientras la suscripción está activa, y caducan al final del periodo de facturación si cancelas',
    catchAllCreditCost: '0,2 créditos por verificación, igual que cualquier otra verificación',
    claimedAccuracy: 'Declara 98,9% de precisión con 86,4% de cobertura',
    pricingBasisNote: 'Anymail Finder se vende como suscripción mensual, con tramos de créditos desde 400 créditos por 29 $ al mes hasta 100.000 por 799 $. Verificar un correo que encontraste en otro sitio cuesta 0,2 créditos. Las cifras de arriba son los planes mensuales más pequeños que cubren esas verificaciones. El pago anual ahorra un 33%. Un millón de verificaciones al mes supera el tramo mensual más alto. Las cifras de Giggal.ai son precios únicos de pago por uso.',
    betterFitFor: [
      'Encontrar direcciones de correo a partir de un nombre y un dominio, algo que Giggal.ai no hace',
      'Una garantía de entrega declarada del 97% o más',
      'Créditos que se acumulan sin límite mientras sigas suscrito',
      'Una marca con muchos años y mucho contenido publicado',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  findymail: {
    freeTier: '10 créditos al registrarse, sin tarjeta',
    creditsExpire: 'Los créditos no usados se acumulan, hasta el doble de la cuota mensual',
    catchAllCreditCost: '1 crédito, igual que cualquier otra verificación',
    claimedAccuracy: 'Garantiza una tasa de rebote inferior al 5%, con reembolso de créditos si la supera',
    pricingBasisNote: 'Findymail vende planes según el uso, de 99 $ a 999 $ al mes, que no indican un número de créditos. También tiene un plan con créditos: Starter, a 99 $ al mes con 5.000 créditos de búsqueda y 5.000 créditos de verificación. Todo lo que supera eso se cotiza como Enterprise. Por eso no hay una cifra publicada para 10.000, 100.000 o un millón de verificaciones al mes. Las cifras de Giggal.ai son precios únicos de pago por uso.',
    betterFitFor: [
      'Encontrar direcciones de correo, algo que Giggal.ai no hace en absoluto',
      'Una garantía sobre la tasa de rebote, con reembolso de créditos',
      'Una extensión de Chrome que encuentra y verifica correos en LinkedIn y Sales Navigator',
      'SOC 2 Tipo 2 y alojamiento en la UE',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  listmint: {
    freeTier: 'Inicio gratis, cantidad no publicada',
    creditsExpire: 'No publicado',
    catchAllCreditCost: 'Créditos catch-all aparte: 5.000 al mes en el plan de 99 $',
    pricingBasisNote: 'Listmint se vende como suscripción mensual con dos fondos de créditos. Starter cuesta 99 $ al mes por 20.000 créditos estándar y 5.000 créditos catch-all. Agency cuesta 187 $ al mes por 50.000 créditos estándar y 10.000 créditos catch-all. Los volúmenes mayores son Enterprise, con precio bajo petición. Las cifras de Giggal.ai son precios únicos de pago por uso.',
    betterFitFor: [
      'Una verificación catch-all que, según Listmint, se hace a mano',
      'Verificación catch-all en tiempo real',
      'Una cuota mensual grande de créditos estándar en el plan de entrada',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  allegrow: {
    freeTier: 'Prueba de 14 días para hasta 1.000 direcciones',
    creditsExpire: 'La cuota del plan es mensual; la prueba caduca a los 14 días',
    catchAllCreditCost: '1 contacto de la cuota del plan',
    claimedAccuracy: 'Declara 99%',
    pricingBasisNote: 'Allegrow se vende como suscripción mensual. Starter cuesta 99 $ al mes por 5.000 contactos, y los créditos adicionales cuestan 8 $ por cada 1.000. Así, 10.000 al mes salen a 139 $. Es nuestro cálculo con sus precios publicados, no un plan que Allegrow ofrezca. Las filas de 100.000 y 1.000.000 son Scale Plus Unlimited, a 1340 $ al mes con pago anual, que es verificación ilimitada. Las cifras de Giggal.ai son precios únicos de pago por uso.',
    betterFitFor: [
      'Un plan de verificación ilimitada, que Giggal.ai no tiene',
      'Puntuación de la reputación del remitente y seguimiento de la ubicación en la bandeja de entrada, además de la verificación',
      'Integraciones nativas con HubSpot, Outreach y Salesloft, con SSO e informes SOC 2',
      'Un estudio publicado sobre falsos positivos con direcciones inventadas',
    ],
    estimateNote: 'Cálculo nuestro a partir de los precios publicados de Allegrow, no un plan que Allegrow ofrezca.',
    notes: { unlimited: 'ilimitado' },
  },
  no2bounce: {
    freeTier: '100 créditos sin tarjeta, que no caducan nunca',
    creditsExpire: 'Los créditos no caducan nunca, sin límite de uso mensual',
    catchAllCreditCost: '1 crédito por correo, igual que la verificación estándar',
    claimedAccuracy: 'Declara 99,6%',
    betterFitFor: [
      'Muchos tramos de precio, desde 10.000 créditos hasta 50 millones',
      'Créditos que no caducan nunca, igual que en Giggal.ai',
      'Planes mensuales y anuales con un 15% y un 20% menos que el pago por uso',
      'Un buscador de correos y una búsqueda por dominio con los mismos créditos',
    ],
  },
  quickemailverification: {
    freeTier: '100 créditos al día, gratis',
    creditsExpire: 'Los créditos permanentes de pago por uso no caducan nunca',
    catchAllCreditCost: 'Se devuelve con el estado catch-all, sin confirmar',
    claimedAccuracy: 'Declara 99%',
    betterFitFor: [
      '100 créditos gratis cada día, más una cuota gratuita mensual',
      'Créditos permanentes de pago por uso que no caducan nunca',
      'Un precio de entrada bajo, desde 4 $ por 500 créditos',
      'Una API en tiempo real ya consolidada',
    ],
  },
  myemailverifier: {
    freeTier: '100 créditos al día, gratis',
    creditsExpire: 'Los créditos no caducan nunca',
    catchAllCreditCost: 'Se devuelve con el estado catch-all, sin confirmar',
    betterFitFor: [
      'Un precio base muy bajo, de 0,0025 $ por verificación',
      '100 créditos gratis cada día, que se renuevan en lugar de acabar tras una prueba',
      'Créditos que no caducan nunca, con promociones de créditos extra en grandes volúmenes',
      'Un buen historial de reseñas públicas en G2, Capterra y Trustpilot',
    ],
  },
  scrubby: {
    freeTier: '200 créditos',
    creditsExpire: 'Los créditos de pago por uso no caducan nunca; los créditos del plan se acumulan',
    catchAllCreditCost: '1 crédito con Quick Verification; Deep Verification cuesta 3 créditos y tarda hasta 72 horas',
    claimedAccuracy: 'No publicado en su página de precios',
    betterFitFor: [
      'Una opción Deep Verification que envía correos reales a direcciones difíciles de verificar',
      'Una cuota gratuita de 200 créditos sin tarjeta',
      'Pago por uso y planes mensuales, con créditos del plan que se acumulan',
      'Una sola tarea concreta en lugar de una suite amplia',
    ],
    notes: { 'Quote only': 'Precio bajo petición' },
  },
  mailfloss: {
    freeTier: '500 verificaciones al mes, más una prueba de 7 días en las suscripciones',
    creditsExpire: 'Los créditos prepagados no caducan nunca; los créditos de suscripción se reinician cada mes',
    catchAllCreditCost: 'Marcado, sin resolver',
    betterFitFor: [
      'Limpieza diaria automática conectada directamente a tu plataforma de correo',
      '41 integraciones nativas, entre ellas Mailchimp, Klaviyo y HubSpot',
      'Una suscripción que funciona sola una vez configurada, en lugar de subir listas a mano',
      'Suscripción o créditos prepagados, a elegir',
    ],
  },
  bounceless: {
    freeTier: '1.000 créditos al mes con un correo de empresa, sin tarjeta',
    creditsExpire: 'Los créditos no caducan nunca, tanto en paquetes como en suscripciones',
    catchAllCreditCost: 'Los indicios de catch-all van incluidos en la verificación de 1 crédito',
    betterFitFor: [
      'Una cuota gratuita de 1.000 créditos cada mes con un correo de empresa',
      'Paquetes únicos y suscripciones mensuales, con créditos que no caducan nunca',
      'Herramientas extra en una sola cuenta: estado del remitente, ubicación en la bandeja de entrada y verificación de formularios de registro',
      'Un precio bajo con volúmenes muy grandes, 579 $ por un millón',
    ],
  },
}

export const WIDE_UI: AltWideUi | null = {
  keyFacts: (n) => `${n}: los datos principales`,
  factRows: { price10k: '10.000 verificaciones', free: 'Créditos gratis', expiry: 'Caducidad de los créditos', catchAll: 'Catch-all' },
  perMonth: ' al mes',
  notPublished: 'No publicado',
}
