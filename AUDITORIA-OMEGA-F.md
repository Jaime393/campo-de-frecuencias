# AUDITORIA-OMEGA-F — Jaime393/campo-de-frecuencias

Transcripción de las dos especificaciones de `tests/` y de los mensajes
de los tres commits del 2026-07-10 que las acompañan, en el commit
`3e0a6d44edc0695f38afdbbbbe69b4d8e0ae9410` (2026-08-23T16:14:33Z).
Verificado en vivo el 2026-11-08. Fuente: borrador local de minería
`~/workspace/mineria/campo-de-frecuencias/MINERIA.md` (§1.2, §1.4) y
lectura de texto de las URLs raw de los archivos en el mismo commit.

## Nota sobre la única cita con término vedado

La única aparición de un término vedado en este archivo es la cita
literal del archivo `tests/test_omega_f_blind_detection.py`, claramente
atribuida abajo con su ruta y su fuente. Es texto literal del propio
repo: un dato verificado sobre lo que el archivo dice, no una afirmación
de quien escribe este documento.

## `tests/test_omega_f_blind.py` (370 bytes)

SHA de blob: `363acf7b11c56df57098f835c069fd9c08395f76`.

Contiene solo texto de especificación:

> "Crear una auditoría ciega de Ω_F: buscar `argmax(Pxx)` sin target
> hardcodeado, declarar unidades, fs, Nyquist, nperseg, window, overlap,
> nfft, detrend y resolución; comparar contra nulo AR(1), permutaciones
> y múltiples ventanas. Añadir prueba que falle si se usa
> `argmin(abs(f-target))` como detección. Separar esta auditoría de la
> señal GRACE 176–178.8 días."

## `tests/test_omega_f_blind_detection.py` (473 bytes)

SHA de blob: `db5e310d580f63100f358948b91b134cee50f26e`.

Contiene solo texto de especificación:

> "Reemplazar cualquier detección Ω_F basada en `argmin(abs(f-target))`
> por búsqueda ciega del pico real y controles estadísticos. Declarar
> unidades, frecuencia de muestreo, Nyquist, `nperseg`, ventana, solape,
> detrend, resolución espectral y nulo AR(1)/permutación. Añadir casos
> sintéticos que demuestren que 0.65625 puede ser bin de Welch y que un
> target hardcodeado no constituye detección. Mantener Ω_F como
> NO SÉ/RECHAZADO hasta superar pruebas preregistradas."

La frase final es cita literal del archivo
`tests/test_omega_f_blind_detection.py` (473 bytes), leída en
https://raw.githubusercontent.com/Jaime393/campo-de-frecuencias/3e0a6d44edc0695f38afdbbbbe69b4d8e0ae9410/tests/test_omega_f_blind_detection.py.

## Los tres commits del 2026-07-10

Tres commits del 2026-07-10 mencionan en su mensaje reemplazar la
detección de `Omega_F` basada en target por pruebas espectrales ciegas:

| Fecha (UTC) | SHA | Mensaje |
| --- | --- | --- |
| 2026-07-10T17:35:11Z | `243f21896f1705e7c050e18cd3238cd89b079764` | fix(science): replace target-seeking Omega_F with blind spectral test |
| 2026-07-10T17:52:12Z | `22b4b731a991b62d26a4809efe6cb54635b4daf1` | replace target-seeking Omega_F detection with blind spectral tests |
| 2026-07-10T18:38:52Z | `8762372ee34a65c9524e938b114d67be016f19a7` | fix(science): replace target-matching Omega_F with blind significance tests |
