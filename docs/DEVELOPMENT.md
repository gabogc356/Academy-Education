# 🚀 Guía de Desarrollo - Academy Education

## Configuración Inicial

### Requisitos
- Node.js 18+
- npm o yarn
- Git
- Editor de código (VS Code recomendado)

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/gabogc356/Academy-Education.git
cd Academy-Education

# Instalar dependencias de todos los proyectos
npm run install:all

# O manualmente
npm install
cd web && npm install && cd ..
cd mobile && npm install && cd ..
```

### Variables de Entorno

Crear `.env.local` en la raíz:

```bash
# Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# IA APIs
VITE_OPENAI_API_KEY=
VITE_ANTHROPIC_API_KEY=

# Drive
VITE_DRIVE_API_URL=http://localhost:3001

# Environment
VITE_ENV=development
```

## Estructura de Desarrollo

### Web (React + Vite)

```bash
cd web
npm run dev      # Inicia servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Vista previa del build
npm run lint     # Ejecutar linter
```

### Mobile (React Native)

```bash
cd mobile
npm start        # Inicia Expo
npm run ios      # Ejecutar en iOS
npm run android  # Ejecutar en Android
```

## Estructura de Componentes

### Web Components

```typescript
// web/src/components/Header/Header.tsx
import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
```

### Módulos

Cada módulo sigue esta estructura:

```
web/src/modules/[ModuleName]/
├── components/
│   ├── [ModuleName].tsx
│   └── [ModuleName].module.css
├── pages/
│   └── [ModuleName]Page.tsx
├── store/
│   └── [moduleName]Slice.ts
├── services/
│   └── [moduleName]Service.ts
├── types/
│   └── [moduleName].types.ts
└── index.ts
```

## Integración con Firebase

### Configuración

```typescript
// shared/config/firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

### Servicios de Autenticación

```typescript
// shared/services/auth.service.ts
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase.config';
import { setDoc, doc } from 'firebase/firestore';

export const authService = {
  async register(email: string, password: string) {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
    // Crear documento del usuario
    await setDoc(doc(db, 'users', user.uid), {
      email,
      plan: 'free',
      createdAt: new Date(),
      profile: {},
    });
    
    return user;
  },

  async login(email: string, password: string) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  },
};
```

## Integración con IA

### OpenAI

```typescript
// shared/services/openai.service.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const openaiService = {
  async generateText(prompt: string) {
    const message = await openai.messages.create({
      model: 'gpt-4',
      max_tokens: 1024,
      messages: [
        { role: 'user', content: prompt },
      ],
    });
    
    return message.content[0].type === 'text' ? message.content[0].text : '';
  },
};
```

### Anthropic

```typescript
// shared/services/anthropic.service.ts
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});

export const anthropicService = {
  async chat(messages: Array<{ role: 'user' | 'assistant'; content: string }>) {
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages,
    });
    
    return response.content[0].type === 'text' ? response.content[0].text : '';
  },
};
```

## Redux Store

```typescript
// web/src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import userReducer from './slices/user';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## Rutas

```typescript
// web/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Módulos */}
        <Route path="/modules/languages" element={<LanguagesPage />} />
        <Route path="/modules/chess" element={<ChessPage />} />
        {/* ... más rutas */}
      </Routes>
    </Router>
  );
}

export default App;
```

## Tipado TypeScript

```typescript
// shared/types/user.types.ts
export type PlanType = 'free' | 'super-ai-educ' | 'go' | 'plus' | 'pro' | 'max' | 'ultra';

export interface User {
  id: string;
  email: string;
  plan: PlanType;
  createdAt: Date;
  profile: UserProfile;
  stats: UserStats;
}

export interface UserProfile {
  name?: string;
  avatar?: string;
  language: string;
  darkMode: boolean;
}

export interface UserStats {
  streak: number;
  totalLessons: number;
  totalMinutes: number;
  errors: number;
}
```

## Testing

```bash
# Web
cd web
npm test              # Ejecutar tests
npm run test:coverage # Cobertura

# Mobile
cd mobile
npm test
```

## Mejores Prácticas

1. **Componentes**: Mantener componentes pequeños y reutilizables
2. **Tipos**: Usar TypeScript para todo
3. **Estado**: Usar Redux para estado global
4. **Async**: Usar async/await y manejo de errores
5. **Estilos**: CSS Modules o Tailwind
6. **Rendimiento**: Lazy load y code splitting
7. **Seguridad**: Nunca exponer keys en cliente
8. **Git**: Commits descriptivos y ramas por feature

## Convenciones de Nombres

- **Componentes**: PascalCase (Header, UserCard)
- **Funciones**: camelCase (getUserData, handleClick)
- **Constantes**: UPPER_SNAKE_CASE (MAX_RETRIES, API_URL)
- **Archivos**: Según el tipo (Component.tsx, component.module.css)
- **Ramas Git**: feature/nombre, bugfix/nombre, hotfix/nombre

## Debugging

### Chrome DevTools
- F12 para abrir
- Network tab para APIs
- Console para errores

### React DevTools
- Extensión de Chrome
- Inspeccionar componentes
- Ver props y estado

### Redux DevTools
- Extensión de Chrome
- Ver acciones
- Time-travel debugging

## Build para Producción

```bash
# Web
cd web
npm run build

# Mobile
cd mobile
eas build --platform ios
eas build --platform android
```

## Deployment

- **Web**: Vercel, Netlify o AWS S3
- **Mobile**: App Store y Google Play
- **Backend**: Cloud Functions o servidor Node.js