import React from 'react';
import styles from './assets/landing-section.module.scss';
import ArrowIcon from '../../../assets/icons/ArrowIcon';
import { Link } from 'react-router-dom';
import NumberContainerComponent from '../../../components/number-container-component/NumberContainerComponent';
import background from '../../../assets/images/backgrounds/background.mp4';
import backgroundPlaceholder from '../../../assets/images/backgrounds/background-placeholder.jpg';

export default function LandingSection() {
    const [videoLoaded, setVideoLoaded] = React.useState(false);

    const scroll = () => {
        const section = document.querySelector( '#about-us' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return (
        <div className={styles.sectionContainer}>
            {!videoLoaded ?
                <img
                    src={backgroundPlaceholder}
                    className={classes(styles.sectionVideo, styles.videoPlaceholder)}
                    alt={'Placeholder image for a video'}
                />
                : null}
            <video
                src={background}
                className={styles.sectionVideo}
                autoPlay
                muted
                loop
                onLoad={() => setVideoLoaded(!videoLoaded)}
            />
            <div className={styles.sectionWrapper}>
                <div className={styles.sectionTitle}>
                    {__('mainPage.landingSection.title')}
                </div>
                <div className={styles.sectionDescription}>
                    {__('mainPage.landingSection.description')}
                </div>
                <div className={styles.sectionButtons}>
                    <Link to={'/contact'} className={classes(styles.sectionButton, styles.sectionProjectButton)}>
                        {__('mainPage.landingSection.buttons.projects')}
                    </Link>
                    <Link to={'/sponsors'} className={classes(styles.sectionButton, styles.sectionSponsorButton)}>
                        {__('mainPage.landingSection.buttons.sponsors')}
                    </Link>
                </div>
                <div className={styles.sectionNumberContainer}>
                    <NumberContainerComponent number={60} title={__('mainPage.landingSection.numbers.members')}/>
                    <NumberContainerComponent number={2017} title={__('mainPage.landingSection.numbers.year')}/>
                    <NumberContainerComponent number={12} title={__('mainPage.landingSection.numbers.starts')}/>
                </div>
                <div className={styles.sectionArrow} onClick={scroll}>
                    <ArrowIcon size={'100%'}/>
                </div>
            </div>
        </div>
    );
}