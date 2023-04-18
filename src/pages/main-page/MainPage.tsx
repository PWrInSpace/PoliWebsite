import React from 'react';
import styles from './assets/main-page.module.scss';
import LandingSection from './components/LandingSection';
import AboutUsSection from './components/AboutUsSection';
import OurProjects from './components/OurProjects';
import OurSponsors from './components/OurSponsors';
import HeadComponent from '../../components/head-component/HeadComponent';

export default function MainPage() {
    return (
        <HeadComponent
            title={__('mainPage.meta.title')}
            description={__('mainPage.meta.description')}
            image={'../../assets/images/about-us-page/image2.png'}
        >
            <div className={styles.pageContainer}>
                <LandingSection/>
                <AboutUsSection/>
                <OurProjects/>
                <OurSponsors/>
            </div>
        </HeadComponent>
    );
}