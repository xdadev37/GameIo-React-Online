import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enlng from '../locales/en/translation.json'
import falng from '../locales/fa/translation.json'

const resources = {
    en: {
        translation: enlng
    },
    fa: {
        translation: falng
    }
}
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    resources,
    lng: ['en', 'fa'],
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    }
})

export default i18n;