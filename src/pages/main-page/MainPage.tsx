import React from 'react';
import styles from './assets/main-page.module.scss';
import LandingSection from './components/LandingSection';
import AboutUsSection from './components/AboutUsSection';
import OurProjects from './components/OurProjects';
import OurSponsors from './components/OurSponsors';
import { Helmet } from 'react-helmet';

export default function MainPage() {
    return (
        <div className={styles.pageContainer}>
            <Helmet>
                <title>{__('mainPage.meta.title')}</title>
                <meta name="description" content={__('mainPage.meta.description')}/>
                <meta property="og:title" content={__('mainPage.meta.title')}/>
                <meta property="og:description" content={__('mainPage.meta.description')}/>
            </Helmet>
            <LandingSection/>
            <AboutUsSection/>
            <OurProjects/>
            <OurSponsors/>
        </div>
    );
}