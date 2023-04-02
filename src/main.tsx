import React from 'react';
import App from './pages/app/App';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
//import resources from 'virtual:i18next-loader';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './utils/locales/en/defaults.json';
import pl from './utils/locales/pl/defaults.json';
import Cookies from 'js-cookie';
import localConfig from './../vite.local.config';

function initi18n() {
    const langCookieKey = 'i18next';
    const storedLang = Cookies.get(langCookieKey) ?? 'pl';
    
    i18n.use(LanguageDetector).init({
        fallbackLng: 'pl',
        resources: {
            en: { translation: en },
            pl: { translation: pl }
        },
        lng: storedLang, 
        detection: {
            lookupCookie: langCookieKey,
            caches: ['cookie'],
            cookieMinutes: 60*24*30
        }
    });

    window.__ = (str: string) => i18n.t(str);
    window.classes = (...args: string[]) => args.join(' ');
    if (!window.appContext) {
        window.appContext = {
            baseUrl: (localConfig as any).base ?? '/'
        };
    }
}

function loadPage() {
    document.getElementById('dev-loading')?.remove();
    const container = document.createElement('div');
    container.id = 'root';
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
    document.body.appendChild(container);
}

window.onload = () => {
    initi18n();
    loadPage();
};
