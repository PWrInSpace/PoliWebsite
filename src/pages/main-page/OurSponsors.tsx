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
import pwr from '../../assets/sponsors/pwr.png';
import w12n from '../../assets/sponsors/w12n.png';
import w10 from '../../assets/sponsors/w10.png';
import manus from '../../assets/sponsors/manus.png';

const images = {
    'pwr': {
        src: pwr,
        alt: 'Politechnika Wrocławska',
        webpage: 'https://pwr.edu.pl/'
    },
    'w12n': {
        src: w12n,
        alt: 'Wydział Elektroniki, Fotoniki i Mikrosystemów Politechniki Wrocławskiej',
        webpage: 'https://wefim.pwr.edu.pl/'
    },
    'w10': {
        src: w10,
        alt: 'Wydział Mechaniczny Politechniki Wrocławskiej',
        webpage: 'https://wm.pwr.edu.pl/'
    },
    'manus': {
        src: manus,
        alt: 'Fundacja Manus przy Politechnice Wrocławskiej',
        webpage: 'https://manus.pl/'
    },
    'airproducts': {
        src: airproducts,
        alt: 'Air Products logo',
        webpage: 'https://www.airproducts.com.pl/'
    },
    'ataszek': {
        src: ataszek,
        alt: 'Ataszek logo',
        webpage: 'https://ataszek.pl/'
    },
    'computercontrols': {
        src: computercontrols,
        alt: 'Computer Controls logo',
        webpage: 'https://www.ccontrols.net/'
    },
    'ilot': {
        src: ilot,
        alt: 'ILot logo',
        webpage: 'https://ilot.lukasiewicz.gov.pl/'
    },
    'mitutoyo': {
        src: mitutoyo,
        alt: 'Mitutoyo logo',
        webpage: 'https://mitutoyo.pl/'
    },
    'solidexpert': {
        src: solidexpert,
        alt: 'Solid Expert logo',
        webpage: 'https://solidexpert.com/'
    },
    'wenagroup': {
        src: wenagroup,
        alt: 'Wena Group logo',
        webpage: 'http://www.wenagroup.com/'
    }
};

export default function OurSponsors() {
    const createLogo = () => {
        return Object.keys(images).map((logo, key) => {
            return(
                <img src={images[logo].src} alt={images[logo].alt} className={styles.logo} key={key} onClick={() => window.open(images[logo].webpage, '_blank')}/>
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