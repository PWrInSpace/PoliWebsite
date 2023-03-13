import React, { useContext, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { NavMenuItem } from './Contract';
import MainPage from './pages/main-page/MainPage';
import ReactCustomScrollbars, { Scrollbars, positionValues } from 'react-custom-scrollbars-2';
import localConfig from './../vite.local.config';
import SocialMediaComponent from './components/social-media-component/SocialMediaComponent';
import Footer from './components/footer/Footer';
import ContactPage from './pages/contact-page/ContactPage';
import SponsorsPage from './pages/sponsors-page/SponsorsPage';
import AboutUs from './pages/about-us/AboutUs';
import './app.module.scss';
import { IAppWindowScrollContext, AppWindowScrollContext } from './context/AppWindowScrollContext';
import JoinUs from './pages/join-us/JoinUs';
import AppWindowScrollContextProvider from './context/AppWindowScrollContext';

interface NavMenuModel extends NavMenuItem {
    component: () => JSX.Element;
}

const config = localConfig as any;

interface AppComponentProps {
    getWindowScroll: () => positionValues;
    setWindowScroll: (v: positionValues) => void;
}

function  AppComponent(props: AppComponentProps) {
    const getNavMenuModel = (name: string, url: string, component: JSX.Element) : NavMenuModel =>  {
        return {
            name: name,
            url: url,
            component: () => component
        };
    };

    const DummyComp = () => {
        return (
            <div></div>
        );
    };

    const menuItems: NavMenuModel[] = [
        getNavMenuModel(__('navbar.home'), '/', <MainPage/>),
        getNavMenuModel(__('navbar.aboutUs'), '/about-us', <AboutUs/>),
        // getNavMenuModel(__('navbar.awards'), '/awards', DummyComp()),
        // getNavMenuModel(__('navbar.projects'), '/projects', DummyComp()),
        // getNavMenuModel(__('navbar.departments'), '/departments', DummyComp()),
        // getNavMenuModel(__('navbar.joinUs'), '/join-us', <JoinUs/>),
        getNavMenuModel(__('navbar.sponsors'), '/sponsors', <SponsorsPage/>),
        // getNavMenuModel(__('navbar.news'), '/news', DummyComp()),
        getNavMenuModel(__('navbar.contact'), '/contact', <ContactPage/>),
    ];

    const scrollContext = useContext(AppWindowScrollContext);

    const minHeight = CSS.supports('height', '100dvh') ? '100dvh' : '100vh';
    return (
        <AppWindowScrollContextProvider getWindowScroll={props.getWindowScroll}>
            <HashRouter>
                <div>
                    <NavBar menuItems={menuItems}/>
                    <SocialMediaComponent/>
                    <ReactCustomScrollbars  autoHeight autoHeightMin={minHeight} autoHide onScrollFrame={(v) => props.setWindowScroll(v)} ref={scrollContext.scrollRef}>
                        <Routes>
                            <Route path={'/'} element={<MainPage/>} />
                            {menuItems.map((item, key) => <Route path={item.url} element={item.component()} key={key}/>)}
                        </Routes>
                        <Footer menuItems={menuItems}/>
                    </ReactCustomScrollbars>
                </div>
            </HashRouter>
        </AppWindowScrollContextProvider>

    );
}

function App() {
    const [windowScroll, setWindowScroll] = useState<positionValues>();

    return (
        <AppWindowScrollContextProvider getWindowScroll={() => windowScroll}>
            <AppComponent getWindowScroll={() => windowScroll} setWindowScroll={(v) => setWindowScroll(v)}/>
        </AppWindowScrollContextProvider>
    );
}

export default App;
