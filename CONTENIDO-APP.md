# CONTENIDO-APP — Jaime393/campo-de-frecuencias

Descripción de la aplicación a partir del texto leído de `index.html`,
`manifest.json`, `sw.js` y `AVISO_LEGAL.md`, en el commit
`3e0a6d44edc0695f38afdbbbbe69b4d8e0ae9410` (2026-08-23T16:14:33Z).
Verificado en vivo el 2026-11-08. Fuente: borrador local de minería
`~/workspace/mineria/campo-de-frecuencias/MINERIA.md` (§1.4).

## Qué es

- Campo de Frecuencias es una herramienta de sonido ambiental: genera
  tonos sostenidos, tonos binaurales y ruido de fondo (blanco/rosa) para
  acompañar momentos de descanso, concentración o relajación.
- El `README.md` (2.373 bytes) dice que es "un módulo de investigación
  del ecosistema MIU (Modular Intelligence Universe) dedicado al análisis,
  modelado y aplicación de teoría de frecuencias en sistemas inteligentes
  y modelos de información" y que contiene "herramientas, marcos teóricos
  y experimentos para la caracterización espectral de fenómenos complejos
  dentro de la arquitectura MIU". También nombra como integraciones
  `miu-agents`, `Grimorio`, `IFT (Información Fluctuation Theory)` y
  "otros módulos portables (miu-portable-*)".
- El `README.md` termina con la nota: "Este README fue generado
  automáticamente basándose en convenciones del ecosistema MIU. Debe ser
  revisado y completado por un miembro del equipo de desarrollo antes de
  publicarse formalmente. Se requiere reemplazar todos los placeholders
  `` con información real y específica del proyecto."

## La aplicación (`index.html`, 43.706 bytes)

- Se titula "Campo de Frecuencias · MIU" y dice que los tonos son
  "sonido ambiental para relajación y enfoque — una herramienta de
  bienestar, no un tratamiento médico".
- Muestra tres categorías: "Tonos puros", "Binaurales (usar auriculares)"
  y "Ambientales (fondo, se pueden superponer)".
- Cada pista se genera en el navegador — no se sube ni descarga nada de
  un servidor — y dura 5 minutos en formato WAV.
- Controles leídos: volumen (55%), atenuación de entrada/salida, forma de
  onda (senoidal) y exportación/importación de configuración.
- Versión de la aplicación: `1.0.0`.

## Manifiesto (`manifest.json`, 780 bytes)

- `name`: "Campo de Frecuencias — MIU".
- `short_name`: "Campo MIU".
- Descripción: "Tonos sostenidos, binaurales y ambientales para descanso
  y enfoque. Funciona sin conexión."
- `start_url`: `./index.html`, `id`: `miu-campo-frecuencias`,
  `display`: `standalone`, `lang`: `es`, colores `#0a0a0a`.
- Categorías: `["health", "lifestyle", "music"]`.
- Tres íconos: `icons/icon-192.png`, `icons/icon-512.png`,
  `icons/icon-512-maskable.png`.

## Sin conexión (`sw.js`, 2.703 bytes)

- Service worker con `CACHE_VERSION = 'miu-v1.0.0'` y `CACHE_NAME`
  `campo-frecuencias-miu-v1.0.0`.
- Cachea `./`, `./index.html`, `./manifest.json` y los 4 íconos de
  `icons/`.
- Intenta además
  `https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js`
  como CDN opcional (comentado como "solo para el botón 'descargar todo
  en ZIP'").
- En `fetch` responde desde caché o red, devolviendo `./index.html` para
  navegación sin conexión y un 504 "Sin conexión y sin caché" en los
  demás casos.

## Aviso legal (`AVISO_LEGAL.md`, 2.637 bytes)

- La aplicación "no es un dispositivo médico" y "no diagnostica, trata,
  cura ni previene ninguna enfermedad o condición".
- Las frecuencias incluidas (174 Hz–963 Hz) provienen de una tradición
  popular conocida como "frecuencias Solfeggio", y las asociaciones
  atribuidas (por ejemplo, "528 Hz asociado a reparación del ADN") son
  "de origen cultural y numerológico, no hallazgos de la literatura
  científica revisada por pares".
- La aplicación "no recolecta datos personales, no usa cookies de
  rastreo, no tiene servidor backend, y no envía información a ningún
  tercero".
- La configuración "se guarda únicamente en el almacenamiento local del
  propio dispositivo del usuario (localStorage del navegador)".
- Última línea del archivo: "Última actualización: julio de 2026."
