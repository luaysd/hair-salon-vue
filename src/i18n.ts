// src/i18n.ts
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'
import it from './locales/it.json'
import tr from './locales/tr.json'
import de from './locales/de.json'
import es from './locales/es.json'
import ar from './locales/ar.json'


const messages = { en, fr, ar, it , tr, de, es }

const i18n = createI18n({
  locale: 'en', // default locale
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages
})

export default i18n
