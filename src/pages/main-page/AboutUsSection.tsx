import React from 'react';
import styles from './assets/about-us-section.module.scss';
import FirstPlanet from '../../icons/FirstPlanet';
import SecondPlanet from '../../icons/SecondPlanet';
import ThirdPlanet from '../../icons/ThirdPlanet';

export default function AboutUsSection(props: any) {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionWrapper}>
                <div className={styles.sectionTitle}>
                    {__('aboutUs.header')}
                </div>
                <div className={styles.sectionDivider}></div>
                <div className={styles.sectionContent}>
                    {__('aboutUs.text')}
                </div>
                <div className={styles.sectionPlanets}>
                    <div className={styles.planetContainer}>
                        <FirstPlanet/>
                        {__('aboutUs.planet1')}
                    </div>
                    <div className={styles.planetContainer}>
                        <SecondPlanet/>
                        {__('aboutUs.planet2')}
                    </div>
                    <div className={styles.planetContainer}>
                        <ThirdPlanet/>
                        {__('aboutUs.planet3')}
                    </div>
                </div>
            </div>
        </div>
    );
}