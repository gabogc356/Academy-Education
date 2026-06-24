export type PlanType = 'free' | 'super-ai-educ' | 'go' | 'plus' | 'pro' | 'max' | 'ultra';

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  language: string;
  darkMode: boolean;
  plan: PlanType;
  createdAt: string;
}

export interface UserStats {
  streak: number;
  totalLessons: number;
  totalMinutes: number;
  errors: number;
}

export interface User {
  id: string;
  profile: UserProfile;
  stats: UserStats;
}

export const PLANS: Record<PlanType, { name: string; price: number; features: string[] }> = {
  'free': {
    name: 'Gratis',
    price: 0,
    features: ['Acceso básico', 'Módulos limitados', 'Sin repaso de errores'],
  },
  'super-ai-educ': {
    name: 'Super AI Educ',
    price: 9.99,
    features: ['Repaso de errores', 'IA avanzada', 'Storage 500MB'],
  },
  'go': {
    name: 'Go',
    price: 19.99,
    features: ['Storage 1TB', 'IA avanzada', 'Repaso de errores', 'Prioridad en IA'],
  },
  'plus': {
    name: 'Plus',
    price: 29.99,
    features: ['Storage 2TB', 'Prioridad', 'Soporte prioritario', 'Features avanzadas'],
  },
  'pro': {
    name: 'Pro',
    price: 49.99,
    features: ['Storage 3TB', 'Soporte 24/7', 'Features exclusivas', 'API access'],
  },
  'max': {
    name: 'Max',
    price: 79.99,
    features: ['Storage 4TB', 'Features exclusivas', 'Beta features', 'Soporte dedicado'],
  },
  'ultra': {
    name: 'Ultra',
    price: 99.99,
    features: ['Storage 5TB', 'Todo ilimitado', 'Beta features', 'Consultor personal'],
  },
};
