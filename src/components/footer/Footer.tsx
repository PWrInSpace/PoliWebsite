import React from 'react';
import styles from './assets/footer.module.scss';
import footerBackground from '../../assets/footerBackground.png';
import { NavMenuItem } from '../../Contract';
import NavBarItem from '../navbar/NavBarItem';
import IconLogo from '../../icons/IconLogo';

interface ISelfProps {
    menuItems: NavMenuItem[];
}

export default function Footer(props: ISelfProps) {
    return(
        <footer className={styles.footerContainer}>
            <img src={footerBackground} alt="footer background" className={styles.footerBackground}/>
            <div className={styles.footerWrapper}>
                <div className={styles.footerNav}>
                    {props.menuItems.map(item => <NavBarItem item={item} />)}
                </div>
                <div className={styles.footerDivider}></div>
            </div>
            <div className={styles.footerContent}>
                <IconLogo onClick={() => window.location.href = window.appContext.baseUrl}/>
                <div className={styles.footerContentText}>
                    NAPISZ DO NAS MAILA!<br></br>
                    <b>pwrinspace@pwr.edu.pl</b>
                </div>
            </div>
        </footer>
    );
}