const TOOLS = [
  {
    "category": "Integridad",
    "name": "sha256sum",
    "description": "Calcula una huella para comparar contenido.",
    "example": "sha256sum foto.jpg"
  },
  {
    "category": "Metadatos",
    "name": "ExifTool",
    "description": "Lee metadatos de fotografías y otros archivos.",
    "example": "exiftool -a -G1 -s foto.jpg"
  },
  {
    "category": "Adquisición",
    "name": "dc3dd",
    "description": "Herramienta de adquisición con registro y cálculo de hashes.",
    "example": "dc3dd --help"
  },
  {
    "category": "Adquisición",
    "name": "Guymager",
    "description": "Interfaz gráfica de adquisición; comprobar siempre origen y destino.",
    "example": "Consultar ayuda y seleccionar únicamente material autorizado."
  },
  {
    "category": "Discos",
    "name": "mmls",
    "description": "Muestra la distribución de particiones de una imagen.",
    "example": "mmls imagen.dd"
  },
  {
    "category": "Discos",
    "name": "fsstat",
    "description": "Describe el sistema de archivos. El offset debe obtenerse del caso.",
    "example": "fsstat -o OFFSET imagen.dd"
  },
  {
    "category": "Discos",
    "name": "fls",
    "description": "Lista entradas del sistema de archivos.",
    "example": "fls -o OFFSET -r imagen.dd"
  },
  {
    "category": "Discos",
    "name": "icat",
    "description": "Extrae contenido de una entrada identificada previamente.",
    "example": "icat -o OFFSET imagen.dd ID > salida.txt"
  },
  {
    "category": "Discos",
    "name": "Autopsy",
    "description": "Plataforma gráfica para examinar fuentes y documentar hallazgos.",
    "example": "Crear caso y añadir una imagen de práctica."
  },
  {
    "category": "Recuperación",
    "name": "PhotoRec",
    "description": "Recuperación basada en patrones de contenido; puede perder nombres y rutas.",
    "example": "photorec imagen.dd"
  },
  {
    "category": "Recuperación",
    "name": "TestDisk",
    "description": "Diagnóstico y recuperación de estructuras de disco. Algunas opciones escriben cambios.",
    "example": "Consultar ayuda y trabajar sobre copias."
  },
  {
    "category": "Memoria",
    "name": "Volatility 3",
    "description": "Analiza volcados compatibles; el ejecutable depende de la instalación.",
    "example": "Consultar ayuda; plugin windows.info sobre un volcado de práctica."
  },
  {
    "category": "Redes",
    "name": "Wireshark",
    "description": "Analiza tráfico capturado, sujeto al punto de captura y al cifrado.",
    "example": "Abrir captura.pcap y filtrar por dns."
  },
  {
    "category": "Redes",
    "name": "tshark",
    "description": "Análisis de capturas desde terminal.",
    "example": "tshark -r captura.pcap -Y dns"
  },
  {
    "category": "Redes",
    "name": "tcpdump",
    "description": "Lee o captura paquetes. Aquí se propone lectura offline.",
    "example": "tcpdump -r captura.pcap"
  },
  {
    "category": "Multimedia",
    "name": "ffprobe",
    "description": "Muestra información técnica de audio y vídeo.",
    "example": "ffprobe video.mp4"
  },
  {
    "category": "Multimedia",
    "name": "GIMP",
    "description": "Permite revisar y editar imágenes; editar modifica el material de trabajo.",
    "example": "Abrir una copia de laboratorio."
  },
  {
    "category": "Bases de datos",
    "name": "sqlite3",
    "description": "Examina bases SQLite. Utilizar modo de solo lectura cuando proceda.",
    "example": "sqlite3 -readonly copia.db \".tables\""
  },
  {
    "category": "Binarios",
    "name": "strings",
    "description": "Extrae secuencias de texto de un binario sin ejecutarlo.",
    "example": "strings muestra.bin"
  },
  {
    "category": "Binarios",
    "name": "file",
    "description": "Identifica formatos según características del archivo.",
    "example": "file muestra.bin"
  },
  {
    "category": "Binarios",
    "name": "YARA",
    "description": "Busca patrones definidos en reglas. Una coincidencia requiere interpretación.",
    "example": "yara reglas.yar muestra.bin"
  },
  {
    "category": "Binarios",
    "name": "Ghidra",
    "description": "Entorno de análisis e ingeniería inversa de binarios.",
    "example": "Importar una muestra docente autorizada sin ejecutarla."
  },
  {
    "category": "Sistema",
    "name": "diff",
    "description": "Compara archivos de texto.",
    "example": "diff -u antes.txt despues.txt"
  },
  {
    "category": "Sistema",
    "name": "stat",
    "description": "Muestra metadatos del sistema de archivos, distintos de EXIF.",
    "example": "stat foto.jpg"
  }
];