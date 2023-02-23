import React from 'react';
import styles from './assets/landing-section.module.scss';
import mainBackground from '../../assets/mainBackground.png';
import mainBackgroundOverlay from '../../assets/mainBackgroundOverlay.png';
import IconCircle from '../../../src/icons/IconCircle';
import ArrowIcon from '../../icons/ArrowIcon';
import { Link } from 'react-router-dom';
import NumberContainerComponent from '../../components/number-container-component/NumberContainerComponent';

export default function LandingSection(props: any) {
    
    return (
        <div className={styles.sectionContainer}>
            <div>
                <img src={mainBackground} className={styles.background}/>
                <img src={mainBackgroundOverlay} className={styles.overlay}/>
                <IconCircle/>
            </div>
            <div className={styles.sectionWrapper}>
                <div className={styles.sectionTitle}>
                    {__('landingSection.title')}
                </div>
                <div className={styles.sectionDescription}>
                    {__('landingSection.description')}
                </div>
                <div className={styles.sectionButtons}>
                    <Link to={'/projects'} className={classes(styles.sectionButton, styles.sectionProjectButton)}>
                        {__('landingSection.buttons.projects')}
                    </Link>
                    <Link to={'/sponsors'} className={classes(styles.sectionButton, styles.sectionSponsorButton)}>
                        {__('landingSection.buttons.sponsors')}
                    </Link>
                </div>
                <div className={styles.sectionNumberContainer}>
                    <NumberContainerComponent customClasses={styles.sectionMemberNumber} number={60} title={__('landingSection.numbers.members')}/>
                    <NumberContainerComponent customClasses={styles.sectionYearNumber} number={2017} title={__('landingSection.numbers.year')}/>
                    <NumberContainerComponent customClasses={styles.sectionStartNumber} number={12} title={__('landingSection.numbers.starts')}/>
                </div>
                <div className={styles.sectionArrow}>
                    <ArrowIcon/>
                </div>
            </div>
        </div>
    );
}