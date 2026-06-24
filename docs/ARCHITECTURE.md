# 🏗️ Arquitectura - Academy Education

## Vista General

Academy Education es una aplicación educativa multiplataforma con arquitectura modular.

## Estructura de Carpetas

```
Academy-Education/
├── web/                           # Aplicación web (React + Vite)
│   ├── src/
│   │   ├── components/            # Componentes reutilizables
│   │   ├── modules/               # Los 17 módulos educativos
│   │   ├── pages/                 # Páginas principales
│   │   ├── store/                 # Redux Toolkit
│   │   ├── services/              # Servicios (Firebase, IA)
│   │   ├── hooks/                 # Custom hooks
│   │   ├── utils/                 # Utilidades
│   │   ├── styles/                # Estilos globales
│   │   └── App.tsx
│   ├── vite.config.ts
│   └── package.json
│
├── mobile/                        # Aplicación móvil (React Native)
│   ├── src/
│   │   ├── components/
│   │   ├── modules/
│   │   ├── screens/
│   │   ├── store/
│   │   ├── services/
│   │   ├── navigation/
│   │   └── App.tsx
│   ├── app.json
│   └── package.json
│
├── shared/                        # Código compartido
│   ├── types/                     # Tipos TypeScript
│   ├── utils/                     # Utilidades compartidas
│   ├── constants/                 # Constantes
│   └── config/                    # Configuración
│
├── docs/                          # Documentación
│   ├── ARCHITECTURE.md            # Este archivo
│   ├── MODULES.md                 # Documentación de módulos
│   ├── DEVELOPMENT.md             # Guía de desarrollo
│   └── API.md                     # Referencia de APIs
│
└── config/                        # Configuración global
    ├── firebase.config.ts
    ├── ai.config.ts
    └── plans.config.ts
```

## Los 17 Módulos

### 1. Libros con IA 📚
- Generación automática de libros
- Usa OpenAI y Anthropic
- Exportación a PDF

### 2. Sistema Solar 🌍
- Simulador 3D
- 8 planetas + Sol
- Información detallada de cada cuerpo celeste

### 3. Idiomas 🌐
- Estilo Duolingo
- Múltiples idiomas
- Lecciones interactivas

### 4. Ajedrez ♟️
- Juego completo funcional
- IA inteligente
- Análisis de partidas

### 5. Matemáticas 🧮
- Calculadora avanzada
- Gráficas
- Resolución de problemas

### 6. Música 🎵
- Juego interactivo
- Teclas: D, R, M, F, S, L, T
- Grabación de audios

### 7. Historia 📖
- Enciclopedia interactiva
- Romanos, Griegos, Sumerios, Egipcios
- Guerras históricas
- Eras y períodos

### 8. Lenguaje ✍️
- Biblioteca educativa
- Sustantivos, verbos, adjetivos, etc.
- Ejemplos y ejercicios

### 9. Álgebra 🔢
- Asistente IA
- Resolución de ecuaciones
- Explicaciones paso a paso

### 10. Ciencias 🧪
- Chatbot científico
- Múltiples disciplinas
- Explicaciones interactivas

### 11. ChatGPT 💬
- Asistente IA general
- Conversaciones ilimitadas
- Multidisciplinario

### 12. Recordatorios Espaciales ⏰
- Sistema de repetición espaciada
- Algoritmo SRS
- Notificaciones inteligentes

### 13. Cámara 📷
- Captura de fotos/vídeos
- Integración con módulos
- Reconocimiento de imágenes (opcional)

### 14. Configuración ⚙️
- Modo oscuro/claro
- Idioma de la aplicación
- Preferencias de notificaciones
- Gestión de cuenta

### 15. Drive ☁️
- Almacenamiento propio
- 5TB máximo
- Sincronización en la nube

### 16. Racha y Notificaciones 🔥
- Sistema de gamificación
- Racha de días consecutivos
- Notificaciones push
- Badges y logros

### 17. Repaso de Errores 📊
- Análisis de errores
- Estadísticas de desempeño
- Recomendaciones de estudio
- (Solo en planes pagos)

## Base de Datos

### Firebase Firestore

**Colecciones:**

```
users/
├── {userId}/
│   ├── profile
│   ├── plan
│   ├── subscription
│   ├── settings
│   └── stats

modules/
├── languages/
├── chess/
├── math/
└── ... (uno por cada módulo)

lessons/
├── {moduleId}/
│   └── {lessonId}

errors/
├── {userId}/
│   └── {errorId}

drive/
├── {userId}/
│   └── {fileId}
```

## Autenticación

- Firebase Authentication
- Email/Password
- Google OAuth
- GitHub OAuth

## Servicios IA

### OpenAI
- Chat completions
- Text generation
- Image generation (futura)

### Anthropic Claude
- Chat completions
- Análisis de textos
- Resolución de problemas

## Estado Global (Redux)

```typescript
store/
├── slices/
│   ├── auth.ts          // Autenticación
│   ├── user.ts          // Datos del usuario
│   ├── modules.ts       // Estado de módulos
│   ├── ui.ts            // UI global
│   └── notifications.ts // Notificaciones
└── store.ts
```

## Flujo de Autenticación

1. Usuario se registra
2. Plan Gratis automático
3. Datos guardados en Firestore
4. Token JWT generado
5. Acceso a módulos según plan

## Sistema de Planes

| Plan | Precio | Features |
|------|--------|----------|
| Gratis | $0 | Acceso básico |
| Super AI Educ | $9.99 | Repaso errores + IA avanzada |
| Go | $19.99 | +1TB Storage |
| Plus | $29.99 | +2TB Storage + Prioridad |
| Pro | $49.99 | +3TB Storage + Soporte |
| Max | $79.99 | +4TB Storage + Features exclusivas |
| Ultra | $99.99 | +5TB Storage + Beta features |

## Pago

- Transferencia manual (Chile)
- Verificación manual
- Activación automática tras verificación

## Seguridad

- Firebase Security Rules
- API Keys protegidas
- Validación de entrada
- Rate limiting
- HTTPS only

## Performance

- Code splitting
- Lazy loading de módulos
- Caching inteligente
- Optimización de imágenes
- Compresión de datos