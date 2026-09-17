'use client'

import ContactPageL10n, { type ContactContent } from '@/components/l10n/ContactPage'

const content: ContactContent = {
  "path": "/es/contacto",
  "crumb": "Contacto",
  "h1Lead": "Habla con",
  "h1Accent": "nosotros",
  "intro": "Dudas sobre la verificación de correo, ayuda para empezar o un volumen a medida: escríbenos y te respondemos normalmente en menos de 24 horas.",
  "formTitle": "Envíanos un mensaje",
  "success": "¡Gracias! Te respondemos en menos de 24 horas.",
  "failed": "No se pudo enviar",
  "labels": {
    "name": "Nombre y apellidos",
    "email": "Correo electrónico",
    "company": "Empresa",
    "phone": "Teléfono",
    "message": "Mensaje"
  },
  "placeholders": {
    "name": "María García",
    "email": "maria@empresa.com",
    "company": "Tu empresa S.A.",
    "phone": "+34 91 123 45 67",
    "message": "Cuéntanos qué necesitas..."
  },
  "submit": "Enviar el mensaje",
  "submitting": "Enviando...",
  "humans": "Personas reales, listas para ayudarte. Respondemos normalmente en menos de 24 horas, en inglés o en español.",
  "emailTitle": "Escríbenos",
  "phoneTitle": "Llámanos",
  "phoneHours": "Lun a vie, 9:00 a 18:00 (hora de Londres)",
  "addressTitle": "Sede",
  "addressLines": [
    "Office 17366",
    "182-184 High Street North",
    "East Ham, Londres E6 2JA, Reino Unido"
  ],
  "ctaTitle": "¿Prefieres no esperar?",
  "ctaText": "Empieza a verificar ahora mismo con 1.000 créditos gratis. Sin tarjeta.",
  "ctaButton": "Empezar gratis",
  "ctaHref": "/es/registro"
}

export default function Page() {
  return <ContactPageL10n locale="es" content={content} />
}
