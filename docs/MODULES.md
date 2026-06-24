# 📚 Documentación de Módulos

## 1. Libros con IA 📚

**Descripción**: Genera libros completos usando IA

**Características:**
- Generación automática de contenido
- Múltiples géneros
- Exportación a PDF
- Personalización de portada

**APIs usadas:**
- OpenAI GPT-4
- Anthropic Claude

**Base de datos:**
```typescript
books/
├── {bookId}/
│   ├── title
│   ├── description
│   ├── content
│   ├── author (IA)
│   ├── chapters
│   ├── createdAt
│   └── userId
```

---

## 2. Sistema Solar 🌍

**Descripción**: Simulador 3D del sistema solar

**Planetas:**
- Mercurio
- Venus
- Tierra
- Marte
- Júpiter
- Saturno
- Urano
- Neptuno
- + Sun

**Características:**
- Órbitas realistas
- Información de cada planeta
- Escala ajustable
- Pausa/Play
- Velocidad variable

**Librerías:**
- Three.js para 3D
- Babylon.js (alternativa)

---

## 3. Idiomas 🌐

**Descripción**: Aprendizaje de idiomas estilo Duolingo

**Idiomas disponibles:**
- Inglés
- Francés
- Alemán
- Portugués
- Italiano
- Ruso
- Japonés
- Mandarin

**Características:**
- Lecciones progresivas
- Ejercicios de pronunciación
- Traducción
- Vocabulario
- Gramática
- Racha de días

**Base de datos:**
```typescript
languages/
├── {languageId}/
│   ├── name
│   ├── lessons/
│   │   └── {lessonId}
│   │       ├── title
│   │       ├── vocabulary
│   │       ├── grammar
│   │       └── exercises
│   └── progressByUser
```

---

## 4. Ajedrez ♟️

**Descripción**: Juego de ajedrez completo con IA

**Características:**
- Juego real contra IA
- Movimientos válidos
- Historial de movimientos
- Análisis de partida
- Dificultades ajustables
- Modo 2 jugadores

**Librerías:**
- chess.js
- Stockfish.js (engine)

**Base de datos:**
```typescript
chessGames/
├── {gameId}/
│   ├── moves
│   ├── status (ongoing/won/lost/draw)
│   ├── whitePlayer
│   ├── blackPlayer
│   ├── startTime
│   └── endTime
```

---

## 5. Matemáticas 🧮

**Descripción**: Calculadora avanzada y resolución de problemas

**Características:**
- Operaciones básicas
- Funciones trigonométricas
- Cálculo
- Gráficas 2D/3D
- Resolución de ecuaciones
- Matrices

**Librerías:**
- math.js
- plotly.js

---

## 6. Música 🎵

**Descripción**: Juego interactivo de música

**Notas (Teclas):**
- D = Do
- R = Re
- M = Mi
- F = Fa
- S = Sol
- L = La
- T = Si

**Características:**
- Reproducción de notas
- Grabación de audios
- Reconocimiento de canciones
- Lecciones de música
- Desafíos de ritmo

**Librerías:**
- Tone.js (síntesis de audio)
- Web Audio API

---

## 7. Historia 📖

**Descripción**: Enciclopedia histórica interactiva

**Temas principales:**

### Civilizaciones antiguas:
- **Romanos** (Imperio, República, caída)
- **Griegos** (Ciudad-estado, filosofía, democracia)
- **Sumerios** (Primeros escritores, Mesopotamia)
- **Egipcios** (Pirámides, Faraones, tecnología)

### Guerras:
- Primera Guerra Mundial
- Segunda Guerra Mundial
- Guerra del Pacífico
- Guerras Napoleónicas
- Conquista Americana

### Eras:
- Edad Antigua
- Edad Media
- Renacimiento
- Era Moderna
- Era Contemporánea

**Características:**
- Línea de tiempo interactiva
- Mapas históricos
- Biografías
- Eventos principales
- Documentos históricos

---

## 8. Lenguaje ✍️

**Descripción**: Biblioteca educativa de gramática y vocabulario

**Temas:**
- Sustantivos (propios, comunes, abstractos)
- Verbos (tiempos, modos)
- Adjetivos
- Adverbios
- Preposiciones
- Conjunciones
- Oraciones
- Figuras literarias

**Características:**
- Definiciones claras
- Ejemplos
- Ejercicios
- Análisis sintáctico
- Ejercicios de escritura

---

## 9. Álgebra 🔢

**Descripción**: Asistente IA para ecuaciones algebraicas

**Características:**
- Resolución de ecuaciones
- Factorización
- Simplificación
- Explicaciones paso a paso
- Gráficas
- Verificación de respuestas

**APIs:**
- OpenAI (explicaciones)
- Anthropic (resolución)

---

## 10. Ciencias 🧪

**Descripción**: Chatbot científico multidisciplinario

**Disciplinas:**
- Física
- Química
- Biología
- Astronomía
- Geología
- Meteorología

**Características:**
- Q&A con IA
- Explicaciones simples y avanzadas
- Experimentos virtuales
- Visualizaciones

---

## 11. ChatGPT 💬

**Descripción**: Asistente IA general

**Características:**
- Conversaciones sin límite
- Multidisciplinario
- Generación de texto
- Código
- Traducción

**API:**
- OpenAI GPT-4

---

## 12. Recordatorios Espaciales ⏰

**Descripción**: Sistema SRS (Spaced Repetition)

**Algoritmo:**
- Basado en SM-2
- Intervalos inteligentes
- Priorización de débiles

**Características:**
- Notificaciones automáticas
- Estadísticas
- Predicción de retención

---

## 13. Cámara 📷

**Descripción**: Integración de cámara/galería

**Características:**
- Captura de fotos
- Captura de vídeos
- Acceso a galería
- Filtros básicos
- Integración con módulos

---

## 14. Configuración ⚙️

**Descripción**: Panel de configuración del usuario

**Opciones:**
- **Apariencia**: Modo oscuro/claro
- **Idioma**: Español, Inglés, etc.
- **Notificaciones**: On/Off, frecuencia
- **Cuenta**: Email, contraseña
- **Privacidad**: Datos, cookies
- **Almacenamiento**: Gestión de archivos
- **Respaldo**: Sincronización

---

## 15. Drive ☁️

**Descripción**: Almacenamiento en la nube personalizado

**Características:**
- Almacenamiento de archivos
- Límite según plan (hasta 5TB)
- Sincronización automática
- Compartir archivos
- Historial de versiones
- Búsqueda rápida

**Límites por plan:**
- Gratis: 100MB
- Super AI Educ: 500MB
- Go: 1TB
- Plus: 2TB
- Pro: 3TB
- Max: 4TB
- Ultra: 5TB

---

## 16. Racha y Notificaciones 🔥

**Descripción**: Gamificación y sistema de notificaciones

**Características:**
- Contador de racha
- Notificaciones push
- Recordatorios diarios
- Badges y logros
- Tabla de clasificación
- Desafíos semanales

**Notificaciones:**
- Lecciones disponibles
- Racha en peligro
- Logros desbloqueados
- Desafíos nuevos

---

## 17. Repaso de Errores 📊

**Descripción**: Análisis y repaso de errores cometidos

**Disponible en:**
- Super AI Educ (y planes superiores)

**Características:**
- Historial de errores
- Análisis de patrones
- Recomendaciones personalizadas
- Estadísticas detalladas
- Ejercicios de refuerzo
- Reportes de progreso

**Restricción:**
- ❌ NO disponible en plan Gratis
- ✅ Disponible en Super AI Educ+

---

## Integración entre Módulos

```
Libros con IA
    ↓
Historia (referencia en libros históricos)
Ciencias (referencia en libros científicos)

Idiomas
    ↓
Todos los módulos (textos multiidioma)

Ajedrez, Música
    ↓
Cámara (captura de partidas/sesiones)

Todos los módulos
    ↓
Drive (guardar progresos/archivos)
Racha y Notificaciones (gamificación)
Repaso de Errores (análisis)
Recordatorios Espaciales (revisión automática)
```