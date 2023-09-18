import React, { useEffect, useState } from "react";
import { NavMenuItem } from "src/common/interfaces/SharedInterfaces";
import { IconLogo } from "../../assets/icons/IconLogo";
import { NavBarItem } from "./components/NavBarItem";
import styles from "./navbar.module.scss";
import { IconMenu } from "../../assets/icons/IconMenu";
import { IconClose } from "../../assets/icons/IconClose";
import { SocialMediaComponentNoBackground } from "../social-media-component/SocialMediaComponentNoBackground";
import { ChangeLanguageButton } from "../change-language-button/ChangeLanguageButton";

interface ISelfProps {
  menuItems: NavMenuItem[];
}

export const NavBar = (props: ISelfProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scrollPosition > 25
          ? classes(styles.smallerHeaderContainer, styles.withBlackBackground)
          : classes(styles.headerContainer, styles.withoutBlackBackground)
      }
    >
      <div
        className={classes(
          scrollPosition > 25
            ? menuOpen
              ? styles.headerWrapper
              : styles.smallerHeaderWrapper
            : styles.headerWrapper,
          menuOpen && styles.withBlackBackground,
        )}
      >
        <div className={styles.headerLogo}>
          <IconLogo />
        </div>
        <div
          className={classes(
            styles.linksWrapper,
            !menuOpen && styles.linksHidden,
          )}
        >
          <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
            {!menuOpen && <IconMenu color="white" size={42} />}
            {menuOpen && <IconClose color="white" size={42} />}
          </div>
          {props.menuItems.map((item, key) => (
            <NavBarItem item={item} key={key} />
          ))}
          <ChangeLanguageButton />
          {menuOpen && <SocialMediaComponentNoBackground />}
        </div>
      </div>
    </div>
  );
};
