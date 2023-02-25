import React from 'react';
import styles from './assets/sponsors-page.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';
import airproducts from '../../assets/sponsors/airproducts.png';
import ataszek from '../../assets/sponsors/ataszek.png';
import computercontrols from '../../assets/sponsors/computercontrols.png';
import ilot from '../../assets/sponsors/ilot.png';
import mitutoyo from '../../assets/sponsors/mitutoyo.png';
import solidexpert from '../../assets/sponsors/solidexpert.png';
import wenagroup from '../../assets/sponsors/wenagroup.png';

export default function SponsorsPage() {
    return(
        <div className={styles.container}>
            <img src={subpageBackground} alt="subpage background" className={styles.background}/>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {__('sponsorsPage.header')}
                </div>
                <div className={styles.divider}></div>
                <div className={styles.logoContainer}>
                    <img src={airproducts} alt={'Air Products logo'} className={styles.logo}/>
                    <img src={ataszek} alt={'Ataszek logo'} className={styles.logo}/>
                    <img src={computercontrols} alt={'Computer Controls logo'} className={styles.logo}/>
                    <img src={ilot} alt={'ILot logo'} className={styles.logo}/>
                    <img src={mitutoyo} alt={'Mitutoyo logo'} className={styles.logo}/>
                    <img src={solidexpert} alt={'Solid Expert logo'} className={styles.logo}/>
                    <img src={wenagroup} alt={'Wena Group logo'} className={styles.logo}/>
                </div>
            </div>
        </div>
    );
}