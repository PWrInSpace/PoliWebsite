import React from 'react';
import styles from './assets/main-page.module.scss';
import LandingSection from './LandingSection';
import AboutUsSection from './AboutUsSection';
import OurProjects from './OurProjects';

export default function MainPage(props: any) {
    return (
        <div className={styles.pageContainer}>
            <LandingSection/>
            {/*<AboutUsSection/>*/}
            <OurProjects/>
        </div>
    );
}