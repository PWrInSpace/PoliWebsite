import React from 'react';
import styles from './assets/our-sponsors.module.scss';
import { images } from '../../../utils/enums/sponsorsList';

export default function OurSponsors() {
    const createLogo = () => {
        return Object.keys(images).map((logo, key) => {
            return(
                <img
                    src={images[logo].src}
                    alt={images[logo].alt}
                    className={styles.logo}
                    key={key}
                    onClick={() => window.open(images[logo].webpage, '_blank')}
                />
            );
        });
    };

    return(
        <div className={styles.container}>
            <div className={styles.sectionWrapper}>
                <div className={styles.sectionTitle}>
                    {__('mainPage.ourSponsors.header')}
                </div>
                <div className={styles.sectionDivider}></div>
                <div className={styles.logoContainer}>
                    {createLogo()}
                </div>
            </div>
        </div>
    );
}