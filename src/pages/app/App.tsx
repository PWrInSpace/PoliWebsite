import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import { NavMenuItem } from '../../common/interfaces/SharedInterfaces';
import MainPage from '../main-page/MainPage';
import SocialMediaComponent from '../../components/social-media-component/SocialMediaComponent';
import Footer from '../../components/footer/Footer';
import ContactPage from '../contact-page/ContactPage';
import SponsorsPage from '../sponsors-page/SponsorsPage';
import AboutUs from '../about-us/AboutUs';
import './app.module.scss';
import JoinUs from '../join-us/JoinUs';
import Cookies from 'js-cookie';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../../common/locales/en/defaults.json';
import pl from '../../common/locales/pl/defaults.json';
import localConfig from '../../../vite.local.config';

interface NavMenuModel extends NavMenuItem {
    component: () => React.ReactElement;
}

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

function App() {

    initi18n();

    const getNavMenuModel = (name: string, url: string, component: React.ReactElement) : NavMenuModel =>  {
        return {
            name: name,
            url: url,
            component: () => component
        };
    };

    const menuItems: NavMenuModel[] = [
        getNavMenuModel(__('navbar.home'), '/', <MainPage/>),
        getNavMenuModel(__('navbar.aboutUs'), '/about-us', <AboutUs/>),
        getNavMenuModel(__('navbar.joinUs'), '/join-us', <JoinUs/>),
        getNavMenuModel(__('navbar.sponsors'), '/sponsors', <SponsorsPage/>),
        getNavMenuModel(__('navbar.contact'), '/contact', <ContactPage/>),
    ];

    return (
        <HashRouter>
            <div>
                <NavBar menuItems={menuItems}/>
                <SocialMediaComponent/>
                <Routes>
                    <Route path={'/'} element={<MainPage/>} />
                    {menuItems.map((item, key) => <Route path={item.url} element={item.component()} key={key}/>)}
                </Routes>
                <Footer menuItems={menuItems}/>
            </div>
        </HashRouter>
    );
}

export default App;
