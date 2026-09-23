---
title: "Cómo verificar correos en Claude y ChatGPT"
description: Conecta una herramienta de verificación a Claude, ChatGPT, Cursor o VS Code por MCP y comprueba direcciones en la conversación en vez de exportar un CSV.
slug: verificar-correos-en-claude-y-chatgpt
date: 2026-09-23
keyword: verificar correos en claude y chatgpt
cta: Verifica correos sin salir del chat
---

La mayor parte de la verificación de correo sigue haciéndose igual que en 2015. Exportas un CSV, abres una pestaña del navegador, subes el archivo, esperas, descargas otro CSV y lo importas en algún sitio. Funciona. También son cuatro cambios de contexto para lo que en el fondo es una sola pregunta: ¿este buzón es real?

Si ya haces parte de tu trabajo dentro de Claude o ChatGPT, ahora hay un camino más corto. El Model Context Protocol permite que un asistente llame directamente a una herramienta externa, así que la verificación puede ocurrir en la conversación que ya estás teniendo.

## Qué es realmente MCP

MCP es una especificación de cómo un asistente de IA habla con un servicio externo. Anthropic la publicó a finales de 2024 y desde entonces se ha adoptado mucho más allá de Claude. El modelo mental útil es el de un estándar de enchufe. Antes, cada asistente necesitaba una integración a medida para cada herramienta. Ahora un servicio publica un único servidor MCP y cualquier cliente compatible puede usarlo.

Para una herramienta de verificación, la superficie es pequeña. Solo hay un puñado de cosas que pedirías: comprueba esta dirección, comprueba esta lista, muéstrame el detalle completo, dime cuántos créditos me quedan. Giggal.ai expone exactamente eso como tres herramientas, `verify_emails`, `get_verification_details` y `get_credit_balance`.

Lo que lo hace distinto de una API es que la llamada no la escribes tú. Dices lo que quieres en la frase que ibas a escribir de todos modos, y el asistente decide qué herramienta invocar y con qué argumentos.

## Para qué sirve, y para qué no

Ser honesto con el límite ahorra decepciones.

Sirve cuando la verificación es un paso dentro de algo más grande que ya estás haciendo en la conversación. Pegaste una lista de asistentes a una conferencia y quieres quitar los muertos antes de escribir el outreach. Estás depurando un flujo de registro y quieres saber si una dirección concreta es real. Estás redactando una secuencia y quieres comprobar los doce nombres de la cuenta objetivo antes de comprometerte. En todos esos casos la alternativa es salir de la conversación, y la llamada a la herramienta es de verdad más rápida.

No sirve para limpiar una lista de 200.000 filas. Eso es trabajo para una carga en bloque o para la API, y pasarlo por una interfaz de chat no aporta nada salvo una espera más larga y muchos tokens. Para eso usa el panel o el endpoint REST, que existen justo para ello. Para comprobar rápido una sola dirección también puedes [validar el correo](/email-checker) en la web.

## Configuración

Necesitas una cuenta de Giggal.ai y una clave de API. La clave está en la pestaña Developer API de la aplicación, no en Ajustes, un detalle que confunde a la gente más a menudo de lo que debería.

El servidor es remoto, así que no hay nada que instalar ni SDK. Está en `https://mcp.giggal.ai/mcp` y se autentica con tu clave de API.

En Claude Desktop, abre Ajustes, luego Conectores, y añade un conector personalizado que apunte a esa URL. Claude Code acepta el mismo servidor con `claude mcp add`. Cursor y VS Code leen los servidores MCP de un archivo de configuración JSON en el directorio del proyecto o del usuario, y la estructura de ese archivo está documentada en la [página de MCP](/mcp) (en inglés) junto con los fragmentos exactos. ChatGPT admite servidores MCP remotos desde sus ajustes de conectores en los planes donde la función está activada.

Una vez conectado, el asistente muestra las tres herramientas y puedes empezar a preguntar.

## Cómo se usa

No necesitas una redacción especial. Todo esto funciona:

- Verifica hello@stripe.com y dime si es un buzón real
- Aquí tienes once direcciones de un registro a un webinar, comprueba cuáles van a rebotar
- Cuáles de estos son dominios catch-all, y existen de verdad los buzones
- Cuántos créditos de verificación me quedan antes de lanzar esto

El asistente llama a `verify_emails`, recibe un resultado por dirección y lo explica en la respuesta. Si preguntaste por una lista, puedes seguir en la misma conversación. Pídele que quite todo lo no válido, agrupe las restantes por dominio y las escriba como un bloque CSV que puedas pegar directamente en tu herramienta de envío. Esa segunda parte es la que hace que valga la pena, porque el asistente ya tiene los datos y puede reorganizarlos sin otra ida y vuelta.

## La parte catch-all importa aquí más de lo habitual

Cerca del 30% de una lista B2B está en dominios que aceptan correo para cualquier dirección posible, real o no. La mayoría de los verificadores los devuelve etiquetados como arriesgados o accept-all, es decir, no pudieron saberlo.

Esa etiqueta es incómoda en un panel. En una conversación es peor, porque el asistente transmitirá fielmente lo que recibió y acabarás con una respuesta que dice que cuatro de tus once direcciones son inciertas, justo donde estabas antes de preguntar. Giggal.ai las resuelve en válidas o no válidas, junto con los buzones detrás de quince secure email gateways identificados, así que lo que llega al asistente es una respuesta y no un encogimiento de hombros.

## Coste y una precaución sensata

Las verificaciones por MCP gastan los mismos créditos que en cualquier otro canal. Cada verificación de una dirección cuesta 1 crédito fijo (incluidas las direcciones catch-all y protegidas por SEG), y el plan gratuito son 1.000 créditos sin tarjeta. Los créditos no caducan.

La precaución es sencilla: un asistente hará lo que pidas, incluso lanzar un trabajo más grande de lo que querías. Pide el saldo de créditos antes de algo grande, y pega las direcciones en lugar de señalarle un archivo que no has mirado. Ninguna de las dos cosas es exclusiva de la verificación, pero con una API de pago por uso el fallo es más molesto de lo normal.

## ¿Merece la pena configurarlo?

Si abres Claude o ChatGPT casi todos los días y las listas de correo forman parte de tu trabajo, lleva unos dos minutos y elimina un paso que hacías a mano. Si la verificación es un trabajo mensual en bloque que haces en el navegador, el panel es de verdad la mejor herramienta y esto no te cambiará la vida.

Las instrucciones de configuración y los fragmentos para cada cliente están en la [página de MCP](/mcp) (en inglés). La [referencia de la API](/public/docs) (en inglés) cubre las mismas operaciones por REST si prefieres automatizarlo con un script.
