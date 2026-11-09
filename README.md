# Portal IFCD083PO

Página inicial para agrupar actividades de repaso de Informática forense y ciberseguridad (IFCD083PO).

## Aviso de uso

Este portal es material docente de práctica y repaso. No es un examen oficial, una certificación ni una prueba de identidad.

- No solicita datos personales.
- No envía resultados a un servidor.
- No guarda datos en `localStorage`.
- No utiliza analítica, cookies propias ni peticiones externas.
- Las actividades enlazadas pueden mostrar sus respuestas en el código fuente.
- Cada actividad debe revisarse antes de publicarla.

## Estructura recomendada

```text
portal-ifcd083po/
├── index.html
├── styles.css
├── portal.js
├── actividades.js
├── README.md
├── .nojekyll
├── test-repaso/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── preguntas.js
│   └── README.md
└── test-original/
    ├── index.html
    ├── styles.css
    ├── app.js
    ├── preguntas.js
    └── README.md
```

## Cómo añadir una actividad

Abre `actividades.js` y añade un objeto nuevo antes del corchete final `];`:

```javascript
,
{
  titulo: "Nombre de la actividad",
  descripcion: "Explica brevemente qué hará el alumno.",
  url: "nombre-carpeta/index.html",
  textoBoton: "Abrir actividad",
  etiqueta: "Unidad o tema"
}
```

La página inicial mostrará automáticamente la nueva tarjeta. No es necesario modificar `index.html` ni `portal.js`.

## Publicación en GitHub Pages

1. Crea un repositorio público, por ejemplo `ifcd083po-portal`.
2. Sube los archivos y carpetas de esta versión descomprimida a la raíz del repositorio.
3. No subas el ZIP sin descomprimir.
4. Comprueba que `index.html` está directamente en la raíz.
5. Entra en **Settings > Pages**.
6. En **Build and deployment**, selecciona **Deploy from a branch**.
7. Selecciona `main` y `/ (root)`.
8. Pulsa **Save**.
9. Espera el despliegue y abre la URL generada.

La URL tendrá normalmente este aspecto:

```text
https://tuusuario.github.io/ifcd083po-portal/
```

## Comprobaciones antes de publicar

- Abrir `index.html` fuera del ZIP.
- Comprobar que las dos actividades se abren desde el portal.
- Probar el portal en móvil y en otro navegador.
- Comprobar que no se han subido PDFs, imágenes, capturas, informes ni documentos internos.
- Revisar que no haya nombres, correos, IPs, contraseñas, rutas internas ni datos personales.
- Confirmar que los enlaces funcionan tras subir los archivos.
- No incluir materiales internos en el mismo repositorio público.

## Límites

Este portal no controla identidad, no registra notas ni garantiza la disponibilidad de las actividades enlazadas. Cada test es material de práctica; sus respuestas son visibles en el código y su resultado descargable puede modificarse.
