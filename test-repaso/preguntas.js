const UNITS = ["Repaso general", "Cibercrimen y delitos informáticos", "Investigación y análisis forense en sistemas informáticos", "Laboratorio y herramientas forenses", "La cadena de custodia", "Análisis forense en sistemas", "Análisis forense de redes e Internet", "Análisis forense de dispositivos móviles", "Preservación de la evidencia electrónica", "Responsabilidad civil y penal en el ámbito informático"];
const QUESTIONS = [
  {
    "id": 1,
    "unit": 1,
    "question": "¿Qué afecta directamente una publicación no autorizada de datos reservados?",
    "options": [
      "Confidencialidad",
      "Disponibilidad necesariamente",
      "Compresión",
      "Redundancia"
    ],
    "correct": 0,
    "hint": "Piensa en quién puede acceder.",
    "explanation": "La exposición afecta a la confidencialidad; no determina quién la causó."
  },
  {
    "id": 2,
    "unit": 1,
    "question": "¿Qué describe el phishing?",
    "options": [
      "Una copia de seguridad",
      "Un engaño para obtener datos o inducir acciones",
      "Un formato de disco",
      "Un hash"
    ],
    "correct": 1,
    "hint": "La técnica busca influir en la víctima.",
    "explanation": "El phishing utiliza engaño; recibirlo no demuestra que se haya consumado un acceso."
  },
  {
    "id": 3,
    "unit": 1,
    "question": "Una cuenta aparece en un registro de acceso. ¿Qué se puede concluir?",
    "options": [
      "Su titular estuvo físicamente presente",
      "Se conoce al culpable",
      "Debe investigarse el uso de esa cuenta",
      "Existió necesariamente malware"
    ],
    "correct": 2,
    "hint": "Cuenta y persona no son lo mismo.",
    "explanation": "La atribución física necesita corroboración; hay que examinar el registro y su contexto."
  },
  {
    "id": 4,
    "unit": 2,
    "question": "¿Qué debe delimitarse antes de iniciar un análisis?",
    "options": [
      "La conclusión definitiva",
      "La culpabilidad",
      "El color del informe",
      "El objeto, la autorización y el alcance"
    ],
    "correct": 3,
    "hint": "Empieza por lo que se te pide y permite hacer.",
    "explanation": "El alcance y la autorización guían las fuentes y operaciones permitidas."
  },
  {
    "id": 5,
    "unit": 2,
    "question": "¿Qué significa un resultado negativo en una búsqueda?",
    "options": [
      "No se encontró con esas fuentes y condiciones",
      "El hecho nunca ocurrió",
      "El dato no puede existir",
      "La herramienta siempre falla"
    ],
    "correct": 0,
    "hint": "Distingue el alcance de una búsqueda de una afirmación universal.",
    "explanation": "No localizar algo no demuestra su ausencia absoluta."
  },
  {
    "id": 6,
    "unit": 2,
    "question": "¿Qué facilita reproducir un análisis?",
    "options": [
      "Solo una captura",
      "Versiones, parámetros, fuentes y registros",
      "Solo la conclusión",
      "Solo el nombre del analista"
    ],
    "correct": 1,
    "hint": "Otra persona necesita reconstruir las operaciones.",
    "explanation": "La reproducibilidad requiere contexto y documentación, no solo el resultado final."
  },
  {
    "id": 7,
    "unit": 3,
    "question": "Que una aplicación arranque demuestra que:",
    "options": [
      "Todos sus resultados son correctos",
      "Está certificada judicialmente",
      "Puede ejecutarse en ese entorno",
      "No altera ningún dato"
    ],
    "correct": 2,
    "hint": "Una prueba de arranque tiene un alcance limitado.",
    "explanation": "La validación de funciones necesita muestras y resultados esperados."
  },
  {
    "id": 8,
    "unit": 3,
    "question": "¿Qué función caracteriza al carving?",
    "options": [
      "Identificar al autor",
      "Bloquear tráfico",
      "Autenticar voces",
      "Recuperar contenido mediante patrones y estructura"
    ],
    "correct": 3,
    "hint": "No depende exclusivamente del nombre del archivo.",
    "explanation": "Puede recuperar contenido sin conservar nombres o rutas originales."
  },
  {
    "id": 9,
    "unit": 3,
    "question": "¿Qué intercambio puede comprometer el aislamiento de una VM?",
    "options": [
      "Una carpeta compartida mal configurada",
      "El nombre de la VM",
      "Un fondo oscuro",
      "La resolución de pantalla"
    ],
    "correct": 0,
    "hint": "Piensa en vías de entrada y salida.",
    "explanation": "Carpetas compartidas, USB y portapapeles deben configurarse según el riesgo."
  },
  {
    "id": 10,
    "unit": 4,
    "question": "¿Qué aporta un registro de custodia?",
    "options": [
      "La culpabilidad",
      "Trazabilidad del manejo y las transferencias",
      "La verdad de un documento",
      "Recuperación automática"
    ],
    "correct": 1,
    "hint": "Debe permitir reconstruir el recorrido.",
    "explanation": "Registra personas, operaciones, momentos e incidencias."
  },
  {
    "id": 11,
    "unit": 4,
    "question": "Una coincidencia SHA-256 entre dos archivos sustenta:",
    "options": [
      "La autoría",
      "La verdad del contenido",
      "La coincidencia de contenido de los objetos comparados",
      "La legitimidad de su obtención"
    ],
    "correct": 2,
    "hint": "Precisa qué objetos se compararon.",
    "explanation": "La comparación no acredita por sí sola procedencia, autoría ni veracidad."
  },
  {
    "id": 12,
    "unit": 4,
    "question": "Si aparece una incidencia durante el manejo, procede:",
    "options": [
      "Ocultarla",
      "Inventar un registro anterior",
      "Borrar el expediente",
      "Documentarla y evaluar su efecto"
    ],
    "correct": 3,
    "hint": "La transparencia permite revisar el trabajo.",
    "explanation": "Una incidencia necesita explicación y comprobaciones; su efecto no se presume automáticamente."
  },
  {
    "id": 13,
    "unit": 5,
    "question": "Un USB registrado permite por sí solo afirmar que:",
    "options": [
      "Existe un artefacto que debe contrastarse",
      "Se copiaron todos los archivos",
      "El titular actuó",
      "Hubo un delito"
    ],
    "correct": 0,
    "hint": "Conexión y transferencia son hechos distintos.",
    "explanation": "La copia de archivos concretos exige fuentes adicionales."
  },
  {
    "id": 14,
    "unit": 5,
    "question": "Que un archivo recuperado se abra significa que:",
    "options": [
      "Es necesariamente idéntico al original",
      "Es funcional en esa comprobación",
      "Se conoce su autor",
      "Conserva todos sus metadatos"
    ],
    "correct": 1,
    "hint": "Legibilidad y coincidencia completa no son equivalentes.",
    "explanation": "Para comparar integridad hace falta una referencia y un método adecuado."
  },
  {
    "id": 15,
    "unit": 5,
    "question": "Al correlacionar fechas conviene revisar:",
    "options": [
      "Solo el nombre del usuario",
      "Solo el tamaño del disco",
      "Zona horaria, reloj y significado del campo",
      "Solo la extensión"
    ],
    "correct": 2,
    "hint": "Dos fuentes pueden representar tiempos de forma distinta.",
    "explanation": "Conservar la referencia temporal original ayuda a evitar errores de cronología."
  },
  {
    "id": 16,
    "unit": 6,
    "question": "Una consulta DNS demuestra por sí sola:",
    "options": [
      "Una exfiltración",
      "Una visita humana voluntaria",
      "Una infección",
      "Una solicitud de resolución registrada"
    ],
    "correct": 3,
    "hint": "También consultan las aplicaciones automáticas.",
    "explanation": "La consulta no prueba visita humana, infección ni transferencia."
  },
  {
    "id": 17,
    "unit": 6,
    "question": "Un PCAP representa:",
    "options": [
      "Tráfico observado desde un punto y periodo de captura",
      "Toda la actividad mundial",
      "Todos los archivos borrados",
      "Toda comunicación cifrada en claro"
    ],
    "correct": 0,
    "hint": "Piensa en la visibilidad del punto de captura.",
    "explanation": "Filtros, pérdidas, ubicación y cifrado limitan el análisis."
  },
  {
    "id": 18,
    "unit": 6,
    "question": "Una petición web con aspecto de ataque demuestra:",
    "options": [
      "Una explotación exitosa siempre",
      "Una solicitud que debe contrastarse con respuestas y efectos",
      "La identidad física del atacante",
      "La modificación de la base de datos"
    ],
    "correct": 1,
    "hint": "Intento y éxito no son equivalentes.",
    "explanation": "La respuesta del servidor y otras fuentes permiten investigar el impacto."
  },
  {
    "id": 19,
    "unit": 7,
    "question": "WHERE eliminado = 1 consulta:",
    "options": [
      "La RAM",
      "Todos los registros destruidos",
      "Filas presentes que cumplen la condición",
      "Una copia física del chip"
    ],
    "correct": 2,
    "hint": "Una marca lógica puede estar dentro de una fila existente.",
    "explanation": "No equivale a recuperar filas físicamente eliminadas."
  },
  {
    "id": 20,
    "unit": 7,
    "question": "La decisión de aislar o apagar un móvil depende de:",
    "options": [
      "Una receta universal",
      "Solo el color",
      "La preferencia del alumno",
      "Estado, cifrado, riesgo y procedimiento autorizado"
    ],
    "correct": 3,
    "hint": "Cada acción puede tener efectos sobre los datos.",
    "explanation": "Las decisiones de preservación deben justificarse según el caso."
  },
  {
    "id": 21,
    "unit": 7,
    "question": "Una extracción física garantiza:",
    "options": [
      "No garantiza por sí sola datos descifrados ni completos",
      "Todas las conversaciones legibles",
      "Todos los mensajes borrados",
      "La identidad del propietario real"
    ],
    "correct": 0,
    "hint": "Obtener datos no equivale a poder interpretarlos.",
    "explanation": "El cifrado y el estado del dispositivo condicionan el resultado."
  },
  {
    "id": 22,
    "unit": 8,
    "question": "Un snapshot de una VM:",
    "options": [
      "Siempre sustituye un backup",
      "Puede depender de otros archivos",
      "Demuestra autoría",
      "No necesita documentación"
    ],
    "correct": 1,
    "hint": "Revisa las dependencias de la plataforma.",
    "explanation": "No equivale necesariamente a una copia autónoma ni completa."
  },
  {
    "id": 23,
    "unit": 8,
    "question": "Una imagen RAW y un fichero E01:",
    "options": [
      "Tienen siempre el mismo hash de archivo",
      "Son siempre idénticos como archivo",
      "Pueden contener representaciones distintas del mismo flujo adquirido",
      "No se pueden verificar"
    ],
    "correct": 2,
    "hint": "Contenedor y datos adquiridos son objetos diferentes.",
    "explanation": "Hay que distinguir el hash del contenedor del hash de los datos que representa."
  },
  {
    "id": 24,
    "unit": 8,
    "question": "Al exportar registros cloud hay que documentar:",
    "options": [
      "Solo la marca del PC",
      "Solo el título del informe",
      "Solo el navegador",
      "Cuenta, periodo, filtros, método y zona horaria"
    ],
    "correct": 3,
    "hint": "Otra persona debe poder entender qué se exportó.",
    "explanation": "También deben considerarse retención, permisos y lagunas."
  },
  {
    "id": 25,
    "unit": 9,
    "question": "Una conclusión defendible debe:",
    "options": [
      "Responder al objeto con fuentes y límites",
      "Ser siempre rotunda",
      "Ocultar resultados negativos",
      "Atribuir culpabilidad sin más"
    ],
    "correct": 0,
    "hint": "El fundamento importa más que la contundencia.",
    "explanation": "La conclusión debe mantener un alcance proporcionado a la evidencia."
  },
  {
    "id": 26,
    "unit": 9,
    "question": "Si no se dispone de una fuente necesaria, corresponde:",
    "options": [
      "Inventar el resultado",
      "Declarar la limitación y su efecto",
      "Omitirlo del informe",
      "Confundirlo con una comprobación realizada"
    ],
    "correct": 1,
    "hint": "Distingue lo comprobado de lo pendiente.",
    "explanation": "La honestidad metodológica exige identificar lo no verificado."
  },
  {
    "id": 27,
    "unit": 9,
    "question": "¿Qué diferencia hay entre integridad y autoría?",
    "options": [
      "Son equivalentes",
      "El hash prueba ambas",
      "Una trata del contenido; la otra de quién realizó una acción",
      "La integridad identifica al usuario"
    ],
    "correct": 2,
    "hint": "Un contenido conservado no identifica a una persona.",
    "explanation": "La autoría necesita análisis y corroboración adicionales."
  },
  {
    "id": 28,
    "unit": 0,
    "question": "El mínimo privilegio significa:",
    "options": [
      "Dar permisos de administrador a todos",
      "Compartir una cuenta",
      "Eliminar controles",
      "Dar solo permisos necesarios"
    ],
    "correct": 3,
    "hint": "Limita la capacidad de actuación innecesaria.",
    "explanation": "Reduce exposición y consecuencias potenciales de comprometer una cuenta."
  },
  {
    "id": 29,
    "unit": 0,
    "question": "Una copia de seguridad debe:",
    "options": [
      "Probarse mediante restauraciones controladas",
      "Darse por válida sin verificar",
      "Sustituir todas las medidas",
      "Impedir cualquier ataque"
    ],
    "correct": 0,
    "hint": "Tener una copia y poder recuperar son cosas distintas.",
    "explanation": "Las pruebas permiten comprobar la recuperación prevista."
  },
  {
    "id": 30,
    "unit": 0,
    "question": "La autenticación multifactor busca:",
    "options": [
      "Hacer pública la contraseña",
      "Añadir un factor de verificación",
      "Eliminar registros",
      "Sustituir toda la seguridad"
    ],
    "correct": 1,
    "hint": "No depender de una sola credencial.",
    "explanation": "Reduce dependencia exclusiva de la contraseña sin eliminar todos los riesgos."
  }
];