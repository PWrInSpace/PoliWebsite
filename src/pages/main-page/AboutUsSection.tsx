import React from 'react';
import styles from './assets/about-us-section.module.scss';
import FirstPlanet from '../../components/planets/FirstPlanet';
import SecondPlanet from '../../components/planets/SecondPlanet';
import ThirdPlanet from '../../components/planets/ThirdPlanet';

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
                    <FirstPlanet text={__('aboutUs.planet1')}/>
                    <SecondPlanet text={__('aboutUs.planet2')}/>
                    <ThirdPlanet text={__('aboutUs.planet3')}/>
                </div>
            </div>
        </div>
    );
}