# 🎓 Academy Education - App de Estudio Integral

Una aplicación educativa avanzada con 17 módulos interactivos potenciados con IA, diseñada para aprender de forma divertida y efectiva.

## ✨ Características Principales

### 🤖 Módulos Educativos (17 Total)

1. **📚 Libros con IA** - Generador de libros usando OpenAI/Anthropic
2. **🌍 Sistema Solar** - Simulador interactivo con 8 planetas + Sol
3. **🌐 Idiomas** - Estilo Duolingo, aprende múltiples idiomas
4. **♟️ Ajedrez** - Juego completo funcional con IA
5. **🧮 Matemáticas** - Calculadora avanzada
6. **🎵 Música** - Juego interactivo (teclas: D, R, M, F, S, L, T)
7. **📖 Historia** - Enciclopedia interactiva (Romanos, Griegos, Sumerios, Egipcios, Guerras, Eras)
8. **✍️ Lenguaje** - Biblioteca educativa (sustantivos, verbos, etc.)
9. **🔢 Álgebra** - IA asistente en ecuaciones
10. **🧪 Ciencias** - Chatbot científico multidisciplinario
11. **💬 ChatGPT** - Asistente IA tipo ChatGPT
12. **⏰ Recordatorios Espaciales** - Spaced Repetition
13. **📷 Cámara** - Integración de cámara
14. **⚙️ Configuración** - Modo oscuro, idioma, etc.
15. **☁️ Drive** - Almacenamiento propio (5TB)
16. **🔥 Racha y Notificaciones** - Sistema de gamificación
17. **📊 Repaso de Errores** - Analiza tus equivocaciones

### 💳 Sistema de Planes

| Plan | Precio | Características |
|------|--------|----------|
| **Gratis** | $0 | Acceso básico (sin repaso de errores) |
| **Super AI Educ** | $9.99/mes | Repaso de errores, IA avanzada |
| **Go** | $19.99/mes | Todo + Storage 1TB |
| **Plus** | $29.99/mes | Todo + Storage 2TB + Prioridad |
| **Pro** | $49.99/mes | Todo + Storage 3TB + Soporte |
| **Max** | $79.99/mes | Todo + Storage 4TB + Features exclusivas |
| **Ultra** | $99.99/mes | Todo + Storage 5TB + Beta features |

**Pago**: Transferencia manual (Chile 🇨🇱)

### 🛠️ Stack Tecnológico

- **Frontend Web**: React + TypeScript + Tailwind CSS
- **Frontend Mobile**: React Native / Expo
- **Base de datos**: Firebase Firestore
- **Autenticación**: Firebase Auth
- **IA**: OpenAI API + Anthropic API
- **Almacenamiento**: Servidor propio (Drive)
- **Estado**: Redux Toolkit
- **Notificaciones**: Firebase Cloud Messaging

### 📁 Estructura del Proyecto

```
Academy-Education/
├── web/                    # Aplicación web React
├── mobile/                 # Aplicación móvil React Native
├── shared/                 # Código compartido
├── docs/                   # Documentación
└── config/                 # Configuración global
```

---

## 🚀 Comenzar

### Requisitos
- Node.js 18+
- npm o yarn
- Cuentas de API: OpenAI, Anthropic, Firebase

### Instalación Web

```bash
cd web
npm install
npm run dev
```

### Instalación Mobile

```bash
cd mobile
npm install
npm start
```

### Variables de Entorno

Crear `.env.local` en `web/` y `mobile/`:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_OPENAI_API_KEY=
VITE_ANTHROPIC_API_KEY=
VITE_DRIVE_API_URL=
```

---

## 📖 Documentación

- [Arquitectura](./docs/ARCHITECTURE.md)
- [Guía de Desarrollo](./docs/DEVELOPMENT.md)
- [API Reference](./docs/API.md)
- [Módulos](./docs/MODULES.md)

---

## 📞 Contacto

Creado por **gabogc356** 🇨🇱

---

**Licencia**: MIT