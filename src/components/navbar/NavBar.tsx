import React, { useEffect, useRef, useState } from 'react';
import { NavMenuItem } from 'src/Contract';
import IconLogo from '../../../src/icons/IconLogo';
import NavBarItem from './NavBarItem';
import styles from './assets/navbar.module.scss';
import IconMenu from '../../../src/icons/IconMenu';
import IconClose from '../../../src/icons/IconClose';
import SocialMediaComponentNoBackground from '../social-media-component/SocialMediaComponentNoBackground';
import useWindowScroll from '../../hooks/useWindowScroll';

interface ISelfProps {
    menuItems: NavMenuItem[];
}

export default function NavBar(props: ISelfProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, scrollApi] = useWindowScroll();

    const scrollToTop = () => {
        scrollApi.scrollToTop();
        setMenuOpen(false);
    };

    return (
        <div className={classes(styles.headerContainer, scrollPosition?.scrollTop > 10 && styles.withBlackBackground)}>
            <div className={classes(styles.headerWrapper, menuOpen && styles.withBlackBackground)}>
                <div className={styles.headerLogo}>
                    <IconLogo onClick={() => window.location.href = window.appContext.baseUrl}/>
                </div>
                <div className={classes(styles.linksWrapper, !menuOpen && styles.linksHidden)}>
                    <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
                        {!menuOpen && <IconMenu color='white' size={42}/>}
                        {menuOpen && <IconClose color='white' size={42}/>}
                    </div>
                    {props.menuItems.map((item, key) => <NavBarItem item={item} key={key} onClick={() => scrollToTop()}/>)}
                    {menuOpen && <SocialMediaComponentNoBackground/>}
                </div>
            </div>
        </div>        
    );
}