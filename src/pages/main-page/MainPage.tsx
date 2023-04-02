import React from 'react';
import styles from './assets/main-page.module.scss';
import LandingSection from './components/LandingSection';
import AboutUsSection from './components/AboutUsSection';
import OurProjects from './components/OurProjects';
import OurSponsors from './components/OurSponsors';

export default function MainPage() {
    return (
        <div className={styles.pageContainer}>
            <LandingSection/>
            <AboutUsSection/>
            <OurProjects/>
            <OurSponsors/>
        </div>
    );
}