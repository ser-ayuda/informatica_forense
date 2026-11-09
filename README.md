# Test IFCD083PO
Web de repaso original: 30 preguntas (tres por cada una de las nueve unidades y tres generales).

## Uso local
Descomprime TODO el ZIP y abre index.html. No abras el HTML dentro del ZIP.
No necesita instalación, npm, servidor, Internet ni cuenta de alumno. Las preguntas se cargan por script local, no por fetch.

## Publicación en GitHub Pages
1. Crea un repositorio (público para el camino sencillo con GitHub Free).
2. Sube los archivos de ESTA carpeta a la raíz, no el ZIP sin descomprimir.
3. Comprueba que index.html queda directamente en la raíz.
4. Settings > Pages > Build and deployment > Source: Deploy from a branch.
5. Selecciona main (o tu rama real), /(root), Save.
6. Espera el despliegue y abre la URL que muestra Pages.
7. Comprueba la URL en móvil y en otro navegador antes de compartirla.
Si faltan permisos o Pages no aparece, revisar permisos del repositorio y políticas de la organización. La disponibilidad depende del plan y de la visibilidad.

Documentación: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Funciones
Selección por unidad; orden aleatorio; modo práctica con pistas; simulacro con corrección final; puntuación orientativa; revisión completa; repaso de errores; descarga JSON del resultado.
Las pistas NO descuentan puntos, se contabilizan. Sin cronómetro ni presión temporal.

## Privacidad y límites
Sin analítica, cookies, localStorage, registro ni peticiones externas desde la aplicación. GitHub como proveedor de alojamiento puede procesar datos de acceso según sus políticas. Cerrar o recargar borra la sesión. El JSON solo se descarga al solicitarlo y no se envía al docente.
Las preguntas y respuestas son públicas en el código. No usar como evaluación segura, certificación oficial, acreditación de identidad ni prueba de nota no manipulable. El resultado descargado puede editarse.
Contenido educativo general: revisar preguntas y adecuación al grupo antes de publicar. No es banco oficial ITS INF-105 ni asesoramiento jurídico.

## Editar el banco
preguntas.js contiene UNITS y QUESTIONS. Cada pregunta usa id único, unit (0 general, 1–9), question, options (cuatro textos), correct (índice 0–3), hint, explanation.
Añade una coma entre objetos. Mantén opciones inequívocas y evita datos personales. Prueba el modo práctica y simulacro tras editar.

## Comprobación manual antes de clase
- Abrir index.html fuera del ZIP.
- Completar una unidad en ambos modos.
- Confirmar respuesta sin selección: debe pedir elegir.
- Ver una pista y comprobar el contador al final.
- Fallar una pregunta y usar Repasar errores.
- Descargar y abrir resultado-repaso.json.
- Navegar por Tab, Espacio y Enter; probar móvil.
- Repetir desde la URL de Pages y comprobar rutas de scripts.

No se ha ejecutado una prueba automatizada en navegador en esta entrega; sí se valida la estructura del banco al generar el paquete.
