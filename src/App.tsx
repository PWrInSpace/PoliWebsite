import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { NavMenuItem } from './Contract';
import MainPage from './pages/main-page/MainPage';
import ReactCustomScrollbars, { positionValues } from 'react-custom-scrollbars-2';
import localConfig from './../vite.local.config';
import SocialMediaComponent from './components/social-media-component/SocialMediaComponent';
import Footer from './components/footer/Footer';
import ContactPage from './pages/contact-page/ContactPage';
import SponsorsPage from './pages/sponsors-page/SponsorsPage';
import AboutUs from './pages/about-us/AboutUs';
import './app.module.scss';
import AppWindowScrollContext, { IAppWindowScrollContext } from './context/AppWindowScrollContext';
import JoinUs from './pages/join-us/JoinUs';

interface NavMenuModel extends NavMenuItem {
    component: () => JSX.Element;
}

const config = localConfig as any;

function App() {
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
        getNavMenuModel(__('navbar.joinUs'), '/join-us', <JoinUs/>),
        getNavMenuModel(__('navbar.sponsors'), '/sponsors', <SponsorsPage/>),
        // getNavMenuModel(__('navbar.news'), '/news', DummyComp()),
        getNavMenuModel(__('navbar.contact'), '/contact', <ContactPage/>),
    ];

    const isGhPages = config.ghPages === true;
    const Router = isGhPages ? HashRouter : BrowserRouter;

    const [windowScroll, setWndowScroll] = useState<positionValues>();
    const windowScrollContext: IAppWindowScrollContext = {
        getWindowScroll: () => windowScroll,
        setWindowScroll: setWndowScroll
    };

    return (
        <AppWindowScrollContext.Provider value={windowScrollContext}>
            <Router>
                <div>
                    <NavBar menuItems={menuItems}/>
                    <SocialMediaComponent/>
                    <ReactCustomScrollbars autoHeight autoHeightMin={'100vh'} autoHide onScrollFrame={setWndowScroll}>
                        <Routes>
                            <Route path={'/'} element={<MainPage/>} />
                            {menuItems.map(item => <Route path={item.url} element={item.component()} />)}
                        </Routes>
                        <Footer menuItems={menuItems}/>
                    </ReactCustomScrollbars>
                </div>
            </Router>
        </AppWindowScrollContext.Provider>

    );
}

export default App;
