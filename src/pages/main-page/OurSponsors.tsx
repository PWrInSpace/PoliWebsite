import React from 'react';
import styles from './assets/our-sponsors.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';
import airproducts from '../../assets/sponsors/airproducts.png';
import ataszek from '../../assets/sponsors/ataszek.png';
import computercontrols from '../../assets/sponsors/computercontrols.png';
import ilot from '../../assets/sponsors/ilot.png';
import mitutoyo from '../../assets/sponsors/mitutoyo.png';
import solidexpert from '../../assets/sponsors/solidexpert.png';
import wenagroup from '../../assets/sponsors/wenagroup.png';

const images = {
    'airproducts': {
        src: airproducts,
        alt: 'Air Products logo'
    },
    'ataszek': {
        src: ataszek,
        alt: 'Ataszek logo'
    },
    'computercontrols': {
        src: computercontrols,
        alt: 'Computer Controls logo'
    },
    'ilot': {
        src: ilot,
        alt: 'ILot logo'
    },
    'mitutoyo': {
        src: mitutoyo,
        alt: 'Mitutoyo logo'
    },
    'solidexpert': {
        src: solidexpert,
        alt: 'Solid Expert logo'
    },
    'wenagroup': {
        src: wenagroup,
        alt: 'Wena Group logo'
    }
};

export default function OurSponsors() {
    const createLogo = () => {
        return Object.keys(images).map((logo, key) => {
            return(
                <img src={images[logo].src} alt={images[logo].alt} className={styles.logo} key={key}/>
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