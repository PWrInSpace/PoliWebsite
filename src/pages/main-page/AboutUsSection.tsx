import React from 'react';
import styles from './assets/about-us-section.module.scss';
import FirstPlanet from '../../icons/FirstPlanet';
import SecondPlanet from '../../icons/SecondPlanet';
import ThirdPlanet from '../../icons/ThirdPlanet';
import PlanetComponent from '../../components/planet-component/PlanetComponent';

export default function AboutUsSection() {
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
                    <PlanetComponent icon={<FirstPlanet/>} text={'aboutUs.planet1'}/>
                    <PlanetComponent icon={<SecondPlanet/>} text={'aboutUs.planet2'}/>
                    <PlanetComponent icon={<ThirdPlanet/>} text={'aboutUs.planet3'}/>
                </div>
            </div>
        </div>
    );
}