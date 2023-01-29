
import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { NavMenuItem } from './Contract';
import MainPage from './pages/main-page/MainPage';
import ReactCustomScrollbars from 'react-custom-scrollbars-2';

interface NavMenuModel extends NavMenuItem {
    component: () => JSX.Element;
}

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
        getNavMenuModel(__('navbar.aboutUs'), '/about-us', DummyComp()),
        getNavMenuModel(__('navbar.awards'), '/awards', DummyComp()),
        getNavMenuModel(__('navbar.projects'), '/projects', DummyComp()),
        getNavMenuModel(__('navbar.departments'), '/departments', DummyComp()),
        getNavMenuModel(__('navbar.joinUs'), '/join-us', DummyComp()),
        getNavMenuModel(__('navbar.sponsors'), '/sponsors', DummyComp()),
        getNavMenuModel(__('navbar.nwes'), '/news', DummyComp()),
        getNavMenuModel(__('navbar.contact'), '/contact', DummyComp()),
    ];

    const Router = process.env.NODE_ENV === 'ghPages' ? HashRouter : BrowserRouter;
    return (
        <Router>
            <div>
                <NavBar menuItems={menuItems}/>
                <ReactCustomScrollbars autoHeight autoHeightMin={'100vh'} autoHide>
                    <Routes>
                        <Route path={'/'} element={<MainPage/>} />
                        {menuItems.map(item => <Route path={item.url} element={item.component()} />)}
                    </Routes>                
                </ReactCustomScrollbars>

            </div>
        </Router>
    );
}

export default App;
