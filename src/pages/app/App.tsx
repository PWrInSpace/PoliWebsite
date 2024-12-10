import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { initializeI18n } from "../../common/locales/initialize-i18n";

import { NavBar } from "../../components/navbar/NavBar";
import { MainPage } from "../main-page/MainPage";
import { SocialMediaComponent } from "../../components/social-media-component/SocialMediaComponent";
import { Footer } from "../../components/footer/Footer";
import { ContactPage } from "../contact-page/ContactPage";
import { SponsorsPage } from "../sponsors-page/SponsorsPage";
import { AboutUs } from "../about-us/AboutUs";
import "./app.module.scss";
import { JoinUs } from "../join-us/JoinUs";
import { NavMenuItem } from "../../common/interfaces/SharedInterfaces";
import Cookies from "js-cookie";
import { Projects } from "../projects/Projects";

const App = () => {
  initializeI18n();

  const menuItems: NavMenuItem[] = [
    {
      name: __("navbar.home"),
      url: "/",
      component: () => <MainPage />,
    },
    {
      name: __("navbar.aboutUs"),
      url: "/about-us",
      component: () => <AboutUs />,
    },
    {
      name: __("navbar.projects"),
      url: "/projects",
      component: () => <Projects />,
    }
  ];
  const storedLang = Cookies.get("i18next") ?? "pl";
  if(storedLang === "pl") {
    menuItems.push(
      {
        name: __("navbar.joinUs"),
        url: "/join-us",
        component: () => <JoinUs />,
      }
    );
  }

  menuItems.push(
    {
      name: __("navbar.sponsors"),
      url: "/sponsors",
      component: () => <SponsorsPage />,
    },
    {
      name: __("navbar.contact"),
      url: "/contact",
      component: () => <ContactPage />,
    }
  );

  return (
    <HashRouter>
      <div>
        <NavBar menuItems={menuItems} />
        <SocialMediaComponent />
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          {menuItems.map((item, key) => (
            <Route path={item.url} element={item.component()} key={key} />
          ))}
        </Routes>
        <Footer menuItems={menuItems} />
      </div>
    </HashRouter>
  );
};

export default App;
