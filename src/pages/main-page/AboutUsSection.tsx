import React from 'react';
import styles from './assets/about-us-section.module.scss';
import FirstPlanet from '../../icons/FirstPlanet';
import SecondPlanet from '../../icons/SecondPlanet';
import ThirdPlanet from '../../icons/ThirdPlanet';
import PlanetComponent from '../../components/planet-component/PlanetComponent';
import SectionTitle from '../../components/section-title/SectionTitle';

export default function AboutUsSection() {
    return (
        <div className={styles.sectionContainer} id="about-us">
            <div className={styles.sectionWrapper}>
                <SectionTitle title={__('mainPage.aboutUs.header')} />
                <div className={styles.sectionContent}>
                    {__('mainPage.aboutUs.text')}
                </div>
                <div className={styles.sectionPlanets}>
                    <PlanetComponent icon={<FirstPlanet/>} text={__('mainPage.aboutUs.planet1')}/>
                    <PlanetComponent icon={<SecondPlanet/>} text={__('mainPage.aboutUs.planet2')}/>
                    <PlanetComponent icon={<ThirdPlanet/>} text={__('mainPage.aboutUs.planet3')}/>
                </div>
            </div>
        </div>
    );
}