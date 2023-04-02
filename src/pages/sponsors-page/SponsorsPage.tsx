import React from 'react';
import styles from './assets/sponsors-page.module.scss';
import subpageBackground from '../../assets/images/backgrounds/subpageBackground.png';
import { DisplaySponsors } from '../../components/display-sponsors/DisplaySponsors';
import { SubpageTitle } from '../../components/subpage-title/SubpageTitle';

export default function SponsorsPage() {
    return(
        <div className={styles.container}>
            <img src={subpageBackground} alt="subpage background" className={styles.background}/>
            <div className={styles.wrapper}>
                <SubpageTitle title={__('sponsorsPage.header')}/>
                <DisplaySponsors/>
            </div>
        </div>
    );
}