---
title: "Tasa de rebote del correo: cifras y cómo reducirla"
description: Qué es la tasa de rebote del correo, las cifras de referencia para marketing, transaccional y cold email, y una secuencia que funciona para bajar una tasa alta.
slug: como-reducir-la-tasa-de-rebote
date: 2026-09-23
updated: 2026-09-26
keyword: tasa de rebote del correo
image: /blog/covers/es/como-reducir-la-tasa-de-rebote.webp
imageAlt: Tasa de rebote del correo: cifras y cómo reducirla
cta: Pon bajo control tu tasa de rebote
---

Una tasa de rebote alta rara vez es un solo problema. Suelen ser tres o cuatro pequeños problemas acumulados, y la gente tiende a atacarlos en el orden equivocado: primero el trabajo técnico interesante y al final la aburrida limpieza de la lista que habría resuelto casi todo.

Así que esto está ordenado según lo que vale de verdad cada paso, no según lo satisfactorio que resulta hacerlo.

## ¿Qué es la tasa de rebote del correo?

La tasa de rebote del correo es la parte de los mensajes de un envío que volvió sin entregarse: mensajes rebotados divididos entre mensajes enviados, en porcentaje. Envías 10.000, vuelven 250, y la tasa de rebote es del 2,5 por ciento. La mayoría de las herramientas la muestra por campaña y la divide en rebotes duros (la dirección o el dominio no existe) y rebotes suaves (buzón lleno, servidor ocupado, bloqueo temporal). Los proveedores de correo vigilan sobre todo la parte de rebotes duros, porque es la señal más clara de una lista que nunca se verificó.

## Cifras de referencia de la tasa de rebote

La cifra aceptable depende del tipo de correo, porque los proveedores juzgan cada uno de forma distinta.

| Tipo de envío | Sana | Vigilar | Dañina |
|---|---|---|---|
| Marketing a una lista con consentimiento | menos del 1% | del 1 al 2% | más del 2% |
| Transaccional (recibos, restablecimientos) | menos del 0,5% | del 0,5 al 1% | más del 1% |
| Outreach en frío | menos del 2% | del 2 al 5% | más del 5% |

![Bandas sana, de vigilancia y dañina de la tasa de rebote para correo de marketing, transaccional y en frío](/blog/fig-es-bounce-rate-bands.webp)
La misma tasa de rebote está bien en un tipo de envío y es un problema en otro.

El cold email tiene una banda más amplia porque la lista es más fría por definición, pero también se juzga con más dureza cuando cruza la línea: una campaña en frío al 6 por ciento atrae bloqueos más rápido que un boletín con la misma tasa. Estas bandas son las que usan en la práctica los equipos de entregabilidad; las reglas de Google y Yahoo para remitentes masivos ponen el límite de quejas por spam en el 0,3 por ciento, y una tasa de rebote por encima de estas bandas suele ir acompañada de quejas.

## ¿Cuál es la tasa de rebote media del correo?

La cifra que más se repite ronda el 2 o 2,5 por ciento entre todos los remitentes. Tómala como un dato curioso y no como un objetivo, porque esa media junta a remitentes cuyas listas no tienen casi nada en común, y la dispersión que hay dentro es mucho mayor de lo que el número sugiere.

Si buscas la tasa de rebote media por sector encontrarás una tabla repetida en decenas de sitios, con cifras ordenadas para ecommerce, sanidad, educación y demás. Esos números proceden casi todos de una sola página de referencias de Mailchimp, y hoy esa página solo publica tasas de apertura, de clic y de baja. No hay tabla de rebotes por sector. Los sitios que citan esas cifras se citan en gran parte entre ellos, y varios venden verificación de correo.

El sector es de todos modos un mal predictor. Dos empresas SaaS de la misma categoría tendrán tasas de rebote que difieren en un orden de magnitud si una construyó su lista con formularios y la otra la compró. Lo que de verdad predice el número es de dónde salieron las direcciones y cuánto tiempo hace.

| De dónde salió la lista | Rebote total típico | Por qué |
|---|---|---|
| Consumidor con consentimiento, enviada en los últimos 90 días | menos del 0,5% | Las direcciones las da la propia persona y se confirmaron hace poco |
| Empresa con consentimiento, enviada en los últimos 90 días | menos del 1% | Igual, pero los buzones corporativos se cierran cuando alguien se va |
| Empresa con consentimiento, sin uso durante 12 meses | del 2 al 5% | Cerca de una cuarta parte de los datos de contacto B2B caduca en un año |
| B2B en frío, verificada antes de enviar | del 1 al 3% | Lo que queda son sobre todo dominios catch-all que el verificador no pudo resolver |
| B2B en frío, sin verificar | del 5 al 15% | Nada ha quitado las direcciones que ya no existen |
| Comprada o extraída, sin verificar | del 10 al 30% | Los datos revendidos envejecen en el almacén del proveedor antes de llegar a ti |

![Tasa de rebote típica según el origen de la lista, desde consumidor con consentimiento por debajo del 0,5 por ciento hasta comprada y sin verificar entre el 10 y el 30 por ciento](/blog/fig-es-bounce-by-list-source.webp)
Entre la primera fila y la última hay sesenta veces de diferencia. Ninguna media sectorial abarca un rango parecido.

El B2B está por encima del B2C en cada etapa equivalente, por una razón que nada tiene que ver con el sector: la gente cambia de trabajo, y el buzón corporativo suele cerrarse cuando eso ocurre. Una dirección personal en un proveedor gratuito puede pasar años sin uso y seguir aceptando correo.

Así que la pregunta útil no es cómo se compara tu tasa con la de tu sector. Es cuál de las filas de arriba describe tu lista, y si has dado el único paso que la mueve.

## Primero, saber qué tipo tienes

Tu herramienta de envío divide los rebotes en duros y suaves. Significan cosas distintas y la solución de uno no hace nada por el otro.

Un rebote duro es permanente. El buzón no existe, el dominio no existe o el servidor te ha rechazado sin más. Volver a enviar dará siempre el mismo resultado. Es la categoría que te perjudica, porque los proveedores leen un patrón de rebotes duros como un remitente que no sabe quiénes son sus destinatarios, que es exactamente como se ve un spammer desde fuera.

Un rebote suave es temporal. El buzón está lleno, el servidor está caído, el mensaje era demasiado grande o te aplicaron greylisting y te pidieron que lo intentes en un rato. La mayoría de las herramientas de envío los reintenta automáticamente y una buena parte se resuelve sola.

Saca el informe de tu última campaña y mira la división antes de hacer cualquier otra cosa. Si rebotas sobre todo en duro, es un problema de lista y el resto de este artículo trata sobre todo de eso. Si rebotas sobre todo en suave, a una tasa constante en todas las campañas, el problema es más probablemente de reputación o de infraestructura, y limpiar la lista no lo moverá mucho.

## Qué se considera malo

No hay un umbral universal, pero las cifras con las que se trabaja son bastante constantes.

| Tasa de rebote duro | Qué significa |
|---|---|
| Menos del 2% | Normal para una lista cuidada |
| Del 2% al 5% | La lista está envejeciendo o no se verificó antes de enviar |
| Más del 5% | Probablemente los proveedores ya te están limitando |
| Más del 10% | Espera la suspensión en la mayoría de las plataformas de envío |

El outreach en frío está en la parte alta de lo normal porque los datos son comprados o extraídos de la web en lugar de con consentimiento. Menos del 3% es un objetivo razonable para una lista en frío limpia, y si trabajas con una lista caliente de personas que se suscribieron, deberías estar muy por debajo del 1%.

## El paso que arregla casi todo

Verifica la lista antes de enviar. Ese es todo el paso, y explica la gran mayoría de los rebotes duros en casi todas las listas que vemos.

Un verificador comprueba la sintaxis, confirma que el dominio existe y tiene servidores de correo configurados, y luego comprueba si el buzón concreto es real. Pásalo por toda la lista antes de una campaña, y vuelve a pasarlo por todo lo que tenga más de unos seis meses, porque las direcciones B2B se deterioran rápido. La gente cambia de trabajo. Las empresas se reorganizan. Una dirección que era buena en febrero no tiene por qué serlo en agosto, y cerca de una cuarta parte de los datos de contacto B2B queda desactualizada en un año. Para una sola dirección puedes [validar el correo](/email-checker) gratis.

Hay una cosa a vigilar aquí, y es la razón por la que mucha gente verifica y aun así rebota. Cerca del 30% de una lista empresarial está en dominios catch-all, que aceptan correo para cualquier dirección posible, exista o no el buzón. La mayoría de los verificadores no puede resolverlos y los devuelve como arriesgados, desconocidos o accept-all. Entonces tienes dos malas opciones: borrar un tercio de tu lista, o enviar y descubrirlo por las malas.

![Gráfico de anillo: alrededor del 70 por ciento de una lista B2B se resuelve con claridad y alrededor del 30 por ciento está en dominios catch-all](/blog/fig-es-catch-all-share.webp)
La porción naranja es la parte que una comprobación estándar devuelve sin respuesta, y de ahí salen los rebotes que no esperabas.

Borrar es la más segura de las dos y es lo que hace casi todo el mundo, por eso una lista verificada puede seguir pareciendo escasa. Un verificador que resuelve las direcciones catch-all en un válido o no válido real te saca de esa elección. Para eso está hecho [Giggal.ai](/), con su [verificación catch-all](/catch-all-verification), y aplica el mismo tratamiento a los buzones detrás de secure email gateways como Proofpoint y Mimecast, que fallan de forma parecida por otro motivo.

## Después, quita las direcciones que nunca iban a funcionar

Hay dos categorías que vale la pena eliminar aunque se verifiquen como válidas.

Las direcciones de rol son alias compartidos: info@, ventas@, soporte@, admin@. Normalmente existen, así que pasan la verificación, pero llegan a un buzón compartido que nadie posee personalmente. La interacción es pobre y la tasa de quejas es más alta que la media. Para el outreach en frío casi no valen nada.

Las direcciones desechables vienen de servicios de correo temporal y existen unos minutos. Pasan la verificación mientras están vivas y desaparecen después. Cualquier verificador decente marca ambas categorías aparte de las válidas, así que es un paso de filtrado y no trabajo extra.

## Arregla la entrada, no solo la lista

Si siguen llegando direcciones malas, limpiar es una cinta de correr.

Pon verificación en tiempo real en tus formularios de registro para que un error de escritura se detecte mientras la persona sigue en la página. La mayor parte del valor está en atrapar gmial.com y hotmial.com en el momento en que se escriben, lo que mejora la entregabilidad y también la experiencia de alguien que de verdad quería saber de ti.

Quita el segundo campo de "confirma tu correo". No funciona. La gente copia y pega desde el primer campo, y has añadido fricción sin ningún beneficio.

Si compras listas, verifícalas el día que llegan y no el día que envías. Los proveedores venden los mismos datos varias veces, y envejecen en su estantería, no solo en la tuya.

## El trabajo de autenticación

Esto figuraba entre las cosas que no reducen los rebotes, y ese consejo ha envejecido mal. SPF, DKIM y DMARC controlan si los servidores receptores confían en que eres quien dices ser, y dos de los proveedores más grandes ya rechazan el correo directamente cuando faltan.

Microsoft empezó a rechazar el correo masivo sin autenticar hacia direcciones de Outlook.com, Hotmail y Live el 5 de mayo de 2025. Quien envía más de 5.000 mensajes al día sin los tres registros recibe `550 5.7.15 Access denied, sending domain does not meet the required authentication level`. Es un código 5xx, así que tu herramienta de envío lo anota como rebote duro, contra un buzón que existe y que habría aceptado el mensaje. Google apretó en la misma dirección en noviembre de 2025, y pasó de archivar el correo sospechoso en spam a rechazarlo en el nivel SMTP.

El efecto práctico es que hoy un fallo de autenticación aparece en tu informe de rebotes en lugar de aparecer, en silencio, en tu tasa de apertura. Si una parte importante de tus rebotes lleva códigos 5.7.x y tus destinatarios se concentran en Outlook o Gmail, el problema no es la lista, y volver a verificarla no servirá.

Configura bien los tres registros, compruébalos una vez con cualquiera de los verificadores de DMARC gratuitos, y deja de pensar en ellos. Si en cambio tus rebotes son errores de buzón inexistente, que llevan el código 5.1.1, ningún trabajo de DNS los cambiará.

## Calienta el dominio si es nuevo

Un dominio de envío recién creado que manda 5.000 mensajes el primer día será limitado, y la limitación produce rebotes suaves que parecen un problema de lista.

Empieza con poco volumen y aumenta a lo largo de dos a cuatro semanas. La mayoría de las plataformas de envío ya lo automatiza. Si la tuya no, sube a mano y resiste la tentación de saltarte pasos, porque la reputación que estás construyendo es lo que decide si la próxima campaña llega.

## Una secuencia que funciona

Lee la división entre duros y suaves de tu última campaña. Verifica toda la lista, incluida la parte catch-all, en lugar de descartarla. Quita las direcciones de rol y desechables. Pon verificación en el formulario de registro para que el problema no vuelva. Comprueba SPF, DKIM y DMARC una vez. Calienta el dominio si es nuevo. Después envía, lee las nuevas cifras y repite la verificación cada trimestre.

La mayoría de las listas pasa de una cifra desagradable a una aceptable solo con el segundo paso. El resto de la secuencia está para que no vuelva a empeorar.

Si quieres ver dónde está tu lista actual, Giggal.ai da 1.000 créditos gratis sin tarjeta, y funcionan también con una carga en bloque. Para seguir leyendo: [qué es una dirección catch-all](/blog/what-is-a-catch-all-email-address), [qué significa arriesgado en un informe de verificación](/blog/what-does-risky-mean-in-email-verification) y [una tasa de rebote aceptable en cold email](/blog/good-bounce-rate-for-cold-email).
