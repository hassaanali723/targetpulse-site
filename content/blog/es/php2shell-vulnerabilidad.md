---
title: "PHP2Shell (CVE-2026-109618 y CVE-2026-109619): qué es y cómo parchear PHP"
seoTitle: "PHP2Shell: la vulnerabilidad de PHP y cómo parchear"
description: "PHP2Shell son dos vulnerabilidades críticas de PHP que permiten ejecutar código en servidores web. Versiones seguras, cómo parchear y qué revisar después."
slug: php2shell-vulnerabilidad
date: 2026-11-08
updated: 2026-11-08
keyword: php2shell vulnerabilidad
image: /blog/covers/es/php2shell-vulnerabilidad.webp
imageAlt: "PHP2Shell: CVE-2026-109618 y CVE-2026-109619, gravedad de 9,2 sobre 10, corregidas en PHP 8.5.12, 8.4.27, 8.3.36 y 8.2.35"
cta: Comprueba que tu dominio no esté en una lista negra
---

PHP2Shell es el nombre de dos fallos críticos en el propio PHP: CVE-2026-109618 y CVE-2026-109619. Permiten a un atacante ejecutar su propio código en un servidor web que usa PHP. El atacante no necesita una contraseña ni una cuenta. PHP corrigió los dos fallos el 21 de octubre de 2026, y los atacantes ya los están usando.

Si solo lees una línea, que sea esta. Actualiza PHP a **8.5.12, 8.4.27, 8.3.36 u 8.2.35** (o posterior), y luego **reinicia PHP**. Un paquete nuevo no sirve de nada hasta que se reinician los procesos de PHP.

![Qué hacer ante PHP2Shell en 4 pasos: localiza cada instalación de PHP, actualiza PHP a una versión corregida, reinicia PHP y busca señales de una intrusión](/blog/fig-es-php2shell-what-to-do.webp)

## Qué es PHP2Shell, en palabras sencillas

PHP es el lenguaje que hay detrás de una gran parte de los sitios web. WordPress, Laravel, Drupal, Magento y phpBB funcionan con él. La mayoría de estos sitios se ejecutan en un servidor donde PHP atiende cada petición de página.

PHP2Shell no es un fallo de WordPress ni de tu propio código. Es un fallo de PHP, el motor que está debajo. Por eso cualquier sitio PHP en un servidor sin parchear está expuesto, aunque el código del sitio sea perfecto.

PHP calificó los dos fallos con un 9,2 sobre 10 (CVSS v4.0). Esa es la franja "crítica". El nombre PHP2Shell viene del resultado: una shell, es decir, el atacante puede escribir comandos en tu servidor.

## Cómo funciona PHP2Shell, paso a paso

Primero necesitas cuatro datos sobre cómo PHP atiende una página web.

1. Un servidor PHP mantiene en marcha unos cuantos "workers" de PHP. Cada worker atiende una petición web, luego la siguiente, y así sucesivamente.
2. Para cada petición, PHP reserva memoria para los datos de esa petición. Esto incluye campos de formularios, cookies, archivos subidos y datos de sesión.
3. Cuando la petición termina, PHP limpia esa memoria. La siguiente petición debería empezar sin nada sobrante.
4. Cada petición tiene un límite de memoria, fijado por `memory_limit` en `php.ini`. Si una petición lo supera, PHP la detiene.

Los dos fallos de PHP2Shell son errores en los pasos 2 y 3. PHP confunde qué memoria es válida.

### Fallo 1 (CVE-2026-109618): PHP se queda sin memoria a mitad de camino

1. El atacante envía una petición preparada para usar mucha memoria.
2. PHP llega a su límite de memoria mientras todavía está rellenando los datos de la petición. Parte de esos datos queda escrita a medias.
3. PHP detiene la petición y ejecuta su limpieza.
4. La limpieza trata los datos escritos a medias como completos. Así PHP trabaja con memoria que contiene basura, o datos que eligió el atacante.

La solución temporal que da PHP para este fallo es quitar el límite de memoria y mantener pequeñas las subidas. Eso indica que el ataque depende de alcanzar el límite con una petición grande.

### Fallo 2 (CVE-2026-109619): restos de una petición anterior

1. Una petición termina, y PHP libera la memoria que usó.
2. Por error, PHP guarda una nota que dice dónde estaba parte de esa memoria liberada.
3. El mismo worker recoge la siguiente petición. Esa petición puede venir del atacante.
4. Antes de que PHP borre la nota, la nueva petición la sigue. Lee o escribe memoria que ahora contiene otra cosa.

Los programadores llaman a esto un fallo "use after free". PHP da un resultado como confirmado: el atacante puede leer memoria que no debería ver. La solución temporal de PHP desactiva el progreso de subida de sesión. Es una función que informa de cuánto ha avanzado la subida de un archivo. Está activada por defecto.

### Por qué un error de memoria permite ejecutar código

La memoria de un programa contiene dos tipos de cosas. Una son los datos, como texto y números. La otra es la ubicación de las próximas instrucciones que el programa va a ejecutar.

Si un atacante puede elegir qué escribe PHP en una memoria que no debería usar, puede cambiar esas ubicaciones. Entonces PHP ejecuta las instrucciones del atacante en lugar de las suyas. Esto se llama corrupción de memoria. Así es como los dos fallos se convierten en ejecución remota de código (RCE): alguien en internet ejecuta comandos en tu servidor.

![Cómo PHP2Shell convierte una petición web en el control de un servidor: el atacante envía una petición manipulada sin iniciar sesión, PHP gestiona mal la memoria de la petición, los datos del atacante sustituyen a los de PHP y PHP ejecuta los comandos del atacante](/blog/fig-es-php2shell-how-it-works.webp)

PHP dice que el riesgo es mayor en Apache con mod_php. Ahí el ataque puede empezar antes de que se ejecute el código de tu sitio. Tu sitio no necesita tener un fallo propio.

### Los dos fallos, uno al lado del otro

| | CVE-2026-109618 | CVE-2026-109619 |
|---|---|---|
| Nombre que le da PHP | RCE via OOM corruption | RCE via stale global state |
| Qué falla | PHP se queda sin memoria durante la preparación y luego confía en datos construidos a medias | PHP reutiliza memoria que quedó de una petición anterior |
| Qué necesita el atacante | Una petición web, sin iniciar sesión | Peticiones al mismo worker de PHP, sin iniciar sesión |
| Resultados confirmados | Ejecución remota de código | Ejecución remota de código, lectura de memoria |
| Gravedad (CVSS v4.0) | 9,2 crítica | 9,2 crítica |

## Cómo se descubrió

La PHP Foundation reconoció a varios equipos, entre ellos Calif, OpenAI y Wiz. Calif y Wiz dijeron que usaron modelos de IA en su investigación. PHP avisó con antelación de la corrección el 20 de octubre y la publicó el 21 de octubre.

Los atacantes fueron más rápidos que la corrección. Amazon vio un intento de usar el fallo el 17 de octubre, cuatro días antes de la publicación.

## Qué puede hacer un atacante con PHP2Shell

Cuando el atacante ejecuta código a través de PHP, actúa como la cuenta con la que se ejecuta PHP. En muchos servidores Linux esa cuenta es `www-data`. Esa cuenta puede leer y cambiar los archivos de tu sitio web.

| Qué puede hacer el atacante | Qué significa para ti |
|---|---|
| Ejecutar comandos en el servidor | Leer, cambiar o borrar los archivos de tu sitio. Publicar páginas falsas. |
| Leer secretos de la memoria | Wiz dice que la memoria filtrada puede exponer contraseñas, tokens, claves API y certificados de las peticiones de otros visitantes. |
| Leer tus archivos de configuración | Archivos como `wp-config.php` y `.env` guardan las contraseñas de la base de datos. Con ellas, el atacante puede copiar datos de clientes. |
| Instalar una puerta trasera | Un archivo PHP oculto le permite volver a entrar después de que parchees. El NCSC te pide que las busques. |
| Enviar spam y phishing desde tu servidor | Tu dominio y tu IP acaban en listas negras, y tus correos reales dejan de llegar. |
| Tomar el control de toda la máquina | Dream Research informó de atacantes que combinaron PHP2Shell con un fallo del kernel de Linux (CVE-2026-46300) para obtener el control total de 24 firewalls. Tenable no ha confirmado este informe. |

## A quién afecta

El aviso de PHP nombra todas las configuraciones de PHP que atienden peticiones web:

- PHP-FPM (la configuración más común con Nginx)
- Apache con mod_php
- php-cgi
- FrankenPHP
- LiteSpeed

El National Cyber Security Centre (NCSC) del Reino Unido va más allá. Dice que cualquier organización que use PHP debe dar por hecho que está expuesta, sea cual sea la versión. Eso incluye PHP integrado en productos que compras, como appliances y herramientas alojadas.

El 26 de octubre, la empresa de seguridad Trail of Bits dijo que hay exploits que funcionan contra PHP 8.2 a 8.5 sin parchear. Los mostró contra MediaWiki, Symfony, Laravel y phpBB.

## ¿Alguien la usa en ataques reales?

Sí. No es una teoría.

![Cronología de PHP2Shell: primer intento de ataque visto el 17 de octubre, corrección publicada el 21 de octubre, añadida a la lista KEV de CISA el 26 de octubre, plazo federal de EE. UU. para parchear el 29 de octubre](/blog/fig-es-php2shell-timeline.webp)

- **17 de octubre:** el equipo de inteligencia de amenazas de Amazon vio un intento de usar el fallo. Fue cuatro días antes de que saliera la corrección.
- **21 de octubre:** PHP publicó las versiones corregidas. Cloudflare dijo que ese mismo día ya veía los primeros ataques.
- **26 de octubre:** CISA, la agencia de ciberdefensa de EE. UU., añadió los dos fallos a su catálogo Known Exploited Vulnerabilities (KEV). Esa lista solo incluye fallos con pruebas de ataques reales.
- **29 de octubre:** el plazo que CISA dio a las agencias federales de EE. UU. para parchear.

## Qué versiones de PHP son seguras

Busca tu rama de PHP en la tabla. Si tu versión es inferior a la versión corregida, estás expuesto.

| Tu rama de PHP | Expuesta si es inferior a | Versión corregida | Notas |
|---|---|---|---|
| 8.5 | 8.5.12 | 8.5.12 | |
| 8.4 | 8.4.27 | 8.4.27 | |
| 8.3 | 8.3.36 | 8.3.36 | |
| 8.2 | 8.2.35 | 8.2.35 | 8.2 deja de recibir correcciones el 31 de diciembre de 2026 |
| 8.1, 8.0, 7.4 | todas las versiones | sin versión oficial | PHP publicó pequeños parches de código fuente. Tu proveedor de Linux puede tener una corrección. |
| de 7.3 a 5.4 | todas las versiones | ninguna | Sin soporte. Actualiza a una rama nueva. |

**Las distribuciones de Linux usan otros números de versión.** Debian, Ubuntu y Red Hat suelen añadir una corrección a una versión antigua sin cambiar el número. Por eso `php -v` puede mostrar un número "antiguo" en un servidor que ya es seguro. En estos sistemas, revisa el aviso de seguridad de tu proveedor sobre CVE-2026-109618, no solo el número.

## Cómo comprobar tu versión de PHP

Elige el método que corresponde a tu configuración.

| Dónde funciona tu sitio | Cómo ver la versión de PHP |
|---|---|
| Tu propio servidor (SSH) | Ejecuta `php -v`. Para la versión que usa la web, revisa también el paquete de PHP-FPM o de Apache. |
| WordPress | Ve a **Herramientas**, luego **Salud del sitio**, luego **Información**, luego **Servidor**. |
| Hosting con cPanel | Abre **MultiPHP Manager**. Muestra la versión de PHP de cada dominio. |
| Otro hosting compartido | Mira en el panel de tu hosting, o pregunta a soporte. |

La línea de comandos y la web pueden usar versiones de PHP distintas en el mismo servidor. Revisa la que sirve las páginas web.

## Cómo parchear

La solución es instalar la nueva versión de PHP y reiniciar PHP. En palabras de PHP: "No hay mitigaciones completas, actualizar es la única opción segura."

**Hosting compartido.** Tu proveedor de hosting parchea PHP por ti. Pide a soporte que confirme que el servidor usa una versión corregida. Si tu panel te deja elegir la versión de PHP, elige una rama con soporte.

**Servidor Debian o Ubuntu.**

```bash
sudo apt update
sudo apt upgrade
sudo systemctl restart php8.3-fpm   # use your version number
sudo systemctl restart apache2      # only if you use Apache
```

**Servidor Red Hat, AlmaLinux o Rocky Linux.**

```bash
sudo dnf upgrade 'php*'
sudo systemctl restart php-fpm
sudo systemctl restart httpd        # only if you use Apache
```

**Docker.** Cambia tu imagen a una etiqueta corregida, por ejemplo `php:8.4.27-fpm`. Reconstruye y vuelve a desplegar cada contenedor. Un contenedor antiguo en marcha sigue expuesto.

Después de cualquiera de estos pasos, vuelve a comprobar. Ejecuta `php -v` o recarga la página Salud del sitio de WordPress. Confirma la nueva versión, o confirma el paquete corregido de tu proveedor.

## Si hoy no puedes parchear

PHP enumera algunos ajustes que reducen el riesgo. PHP deja claro que no hacen seguro un servidor. Úsalos solo mientras preparas la actualización.

| Ajuste | Ayuda contra | Dónde configurarlo |
|---|---|---|
| `memory_limit=-1` | CVE-2026-109618 | `php.ini`, de forma que las aplicaciones no puedan cambiarlo |
| `post_max_size` bajo | CVE-2026-109618 | `php.ini` |
| `session.upload_progress.enabled=0` | CVE-2026-109619 | `php.ini` o la configuración del pool de FPM. No `ini_set()` ni `.user.ini` |
| `fatal_error_backtraces=0` | CVE-2026-109619, solo PHP 8.5 | `php.ini` |

Reinicia cada worker de PHP después de cambiar estos ajustes. PHP también advierte de que no se usen `RLIMIT_AS` ni `RLIMIT_DATA` como límite de memoria. Pueden activar el fallo.

El NCSC da una opción más. Si no puedes actualizar ni reducir el riesgo pronto, desconecta el sistema hasta que puedas.

## Comprueba si ya sufriste una intrusión

Los atacantes tuvieron ventaja. El primer intento llegó cuatro días antes de la corrección. Por eso un servidor parcheado ahora puede haber sufrido una intrusión antes.

El NCSC pide revisar los sistemas sin parchear en busca de señales de intrusión y de puertas traseras. Señales comunes en un servidor PHP:

- Archivos `.php` nuevos que no creaste, a menudo en carpetas de subidas o de caché.
- Usuarios administradores nuevos en WordPress o en tu aplicación.
- Conexiones salientes inusuales, o un uso de CPU que no sabes explicar.
- Un aumento repentino del correo saliente de tu servidor.
- Rebotes que dicen que tu IP o tu dominio está en una lista negra.

Las dos últimas importan aunque tu sitio parezca estar bien. Un servidor comprometido se usa a menudo para enviar spam o phishing desde tu dominio. Eso puede meter tu dominio en listas negras, y entonces tus correos reales dejan de llegar a las bandejas de entrada. Nuestra guía sobre [cómo saber si tu dominio de correo está en una lista negra](/blog/how-to-check-if-email-domain-is-blacklisted) explica cómo consultar y resolver una inclusión.

Si encuentras señales de una intrusión, parchear no basta. El atacante puede haber dejado una puerta trasera. Restaura desde una copia de seguridad limpia o recurre a un equipo de respuesta a incidentes.

## Dos problemas relacionados que debes conocer

**CVE-2026-115560.** El 23 de octubre, PHP publicó un aviso aparte sobre el progreso de subida de sesión. PHP considera poco probable que se use. El ajuste `session.upload_progress.enabled=0` de la tabla anterior también lo cubre.

**Un problema de SimpleXML en las versiones corregidas.** PHP 8.4.27 y 8.5.12 pueden hacer fallar algunas aplicaciones que usan SimpleXML (php-src issue #24488). La causa es un cambio aparte, no la corrección de seguridad. A 26 de octubre, se había integrado una corrección, pero aún no se había publicado. Prueba tu aplicación después de actualizar. No te quedes en la versión vulnerable por esto.

## Video: cómo gestionó el caso el equipo de seguridad de PHP

```youtube
No3T8JQqhtM
Ver video: [PHP2Shell: How the PHP Security Team Handled It (with Volker Dusch)](https://www.youtube.com/watch?v=No3T8JQqhtM) por Laravel News
```

## Respuestas rápidas

| Pregunta | Respuesta |
|---|---|
| ¿Qué es PHP2Shell? | Dos fallos críticos de PHP, CVE-2026-109618 y CVE-2026-109619, que permiten a los atacantes ejecutar código en un servidor. |
| ¿Hace falta iniciar sesión? | No. Un atacante en internet puede usarla sin una cuenta. |
| ¿Se usa en ataques? | Sí. CISA añadió los dos fallos a su catálogo KEV el 26 de octubre de 2026. |
| ¿Qué versiones la corrigen? | 8.5.12, 8.4.27, 8.3.36 y 8.2.35. |
| ¿Basta con actualizar el paquete? | No. Reinicia también PHP-FPM, Apache o tus contenedores. |
| ¿La soluciona un firewall? | No. Las reglas de un firewall web pueden bloquear algunos ataques, pero solo actualizar corrige el fallo. |

## Fuentes

- [PHP news archive 2026](https://www.php.net/archive/2026.php): notas de versión y el aviso de seguridad
- [NCSC: Critical security issue affecting PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php)
- [CISA Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [Tenable: PHP2Shell FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote): informes de ataques de Amazon, Cloudflare y Trail of Bits
