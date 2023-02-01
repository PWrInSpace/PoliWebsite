import React from 'react';
import styles from './assets/landing-section.module.scss';
import mainBackground from '../../assets/mainBackground.png';
import mainBackgroundOverlay from '../../assets/mainBackgroundOverlay.png';
import IconCircle from '../../../src/icons/IconCircle';

export default function LandingSection(props: any) {
    
    return (
        <div className={styles.sectionContainer}>
            <div>
                <img src={mainBackground} className={styles.background}/>
                <img src={mainBackgroundOverlay} className={styles.overlay}/>
                <IconCircle/>
            </div>
        </div>
    );
}