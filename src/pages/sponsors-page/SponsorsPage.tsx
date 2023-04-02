import React from 'react';
import styles from './assets/sponsors-page.module.scss';
import subpageBackground from '../../assets/images/backgrounds/subpageBackground.png';
import { images } from '../../utils/enums/sponsorsList';

export default function SponsorsPage() {
    const createLogo = () => {
        return Object.keys(images).map((logo, key) => {
            return(
                <img src={images[logo].src} alt={images[logo].alt} className={styles.logo} key={key} onClick={() => window.open(images[logo].webpage, '_blank')}/>
            );
        });
    };

    return(
        <div className={styles.container}>
            <img src={subpageBackground} alt="subpage background" className={styles.background}/>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {__('sponsorsPage.header')}
                </div>
                <div className={styles.divider}></div>
                <div className={styles.logoContainer}>
                    {createLogo()}
                </div>
            </div>
        </div>
    );
}