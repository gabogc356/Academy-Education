export type PlanType = 'free' | 'super-ai-educ' | 'go' | 'plus' | 'pro' | 'max' | 'ultra'

export interface User {
  id: string
  email: string
  plan: PlanType
  createdAt: Date
  profile: UserProfile
  stats: UserStats
}

export interface UserProfile {
  name?: string
  avatar?: string
  language: string
  darkMode: boolean
}

export interface UserStats {
  streak: number
  totalLessons: number
  totalMinutes: number
  errors: number
}

export const PLANS: Record<PlanType, { name: string; price: number; features: string[] }> = {
  'free': {
    name: 'Gratis',
    price: 0,
    features: ['Acceso básico', 'Módulos básicos'],
  },
  'super-ai-educ': {
    name: 'Super AI Educ',
    price: 9.99,
    features: ['Repaso de errores', 'IA avanzada'],
  },
  'go': {
    name: 'Go',
    price: 19.99,
    features: ['Storage 1TB', 'IA avanzada', 'Repaso de errores'],
  },
  'plus': {
    name: 'Plus',
    price: 29.99,
    features: ['Storage 2TB', 'Prioridad', 'Todo +'],
  },
  'pro': {
    name: 'Pro',
    price: 49.99,
    features: ['Storage 3TB', 'Soporte', 'Todo +'],
  },
  'max': {
    name: 'Max',
    price: 79.99,
    features: ['Storage 4TB', 'Features exclusivas', 'Todo +'],
  },
  'ultra': {
    name: 'Ultra',
    price: 99.99,
    features: ['Storage 5TB', 'Beta features', 'Todo +'],
  },
}
