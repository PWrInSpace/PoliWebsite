import React, { useState } from 'react';
import { NavMenuItem } from 'src/common/interfaces/Contract';
import IconLogo from '../../assets/icons/IconLogo';
import NavBarItem from './components/NavBarItem';
import styles from './assets/navbar.module.scss';
import IconMenu from '../../assets/icons/IconMenu';
import IconClose from '../../assets/icons/IconClose';
import SocialMediaComponentNoBackground from '../social-media-component/SocialMediaComponentNoBackground';
import useWindowScroll from '../../common/hooks/useWindowScroll';

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
        <div className={scrollPosition?.scrollTop > 100 ? classes(styles.smallerHeaderContainer, styles.withBlackBackground) : classes(styles.headerContainer, styles.withoutBlackBackground)}>
            <div className={classes(scrollPosition?.scrollTop > 100 ? (menuOpen ? styles.headerWrapper : styles.smallerHeaderWrapper) : styles.headerWrapper, menuOpen && styles.withBlackBackground)}>
                <div className={styles.headerLogo}>
                    <IconLogo />
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