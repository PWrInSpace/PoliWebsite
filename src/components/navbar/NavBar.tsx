import React from 'react';
import { NavMenuItem } from 'src/Contract';
import IconLogo from '../../../src/icons/IconLogo';
import NavBarItem from './NavBarItem';
import styles from './assets/navbar.module.scss';

interface ISelfProps {
    menuItems: NavMenuItem[];
}

export default function NavBar(props: ISelfProps) {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <IconLogo/> 
                <div className={styles.linksWrapper}>
                    {props.menuItems.map(item => <NavBarItem item={item} />)}
                </div>
            </div>
        </div>
        
    );
}