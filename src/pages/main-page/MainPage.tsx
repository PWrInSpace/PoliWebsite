import React from 'react';
import styles from './assets/main-page.module.scss';
import LandingSection from './LandingSection';
import AboutUsSection from './AboutUsSection';
import ReactCustomScrollbars from 'react-custom-scrollbars-2';

export default function MainPage(props: any) {
    return (
        <div className={styles.pageContainer}>
            <LandingSection/>
            <AboutUsSection/>
        </div>
    );
}