// src/i18n.ts
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'
import ar from './locales/ar.json'


const messages = { en, fr, ar }

const i18n = createI18n({
  locale: 'en', // default locale
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages
})

export default i18n
