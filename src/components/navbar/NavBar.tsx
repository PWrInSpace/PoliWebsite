import React, { useState } from 'react';
import { NavMenuItem } from 'src/Contract';
import IconLogo from '../../../src/icons/IconLogo';
import NavBarItem from './NavBarItem';
import styles from './assets/navbar.module.scss';
import IconMenu from '../../../src/icons/IconMenu';
import IconClose from '../../../src/icons/IconClose';

interface ISelfProps {
    menuItems: NavMenuItem[];
}

export default function NavBar(props: ISelfProps) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <IconLogo onClick={() => window.location.href = window.appContext.baseUrl}/> 
                <div className={classes(styles.linksWrapper, !menuOpen && styles.linksHidden)}>
                    <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
                        {!menuOpen && <IconMenu size={42} color={'white'}/>}
                        {menuOpen && <IconClose size={42} color={'white'}/>}
                    </div>
                    {props.menuItems.map(item => <NavBarItem item={item} />)}
                </div>
            </div>
        </div>
        
    );
}