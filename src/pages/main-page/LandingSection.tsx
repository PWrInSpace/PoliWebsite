import React from 'react';
import styles from './assets/landing-section.module.scss';
import mainBackground from '../../assets/mainBackground.png';
import mainBackgroundOverlay from '../../assets/mainBackgroundOverlay.png';
import IconCircle from '../../../src/icons/IconCircle';
import ArrowIcon from '../../icons/ArrowIcon';

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
                    <button className={classes(styles.sectionButton, styles.sectionProjectButton)}>
                        {__('landingSection.buttons.projects')}
                    </button>
                    <button className={classes(styles.sectionButton, styles.sectionSponsorButton)}>
                        {__('landingSection.buttons.sponsors')}
                    </button>
                </div>
                <div className={styles.sectionNumberContainer}>
                    <div className={classes(styles.sectionMemberNumber, styles.sectionNumberTitle)}>
                        <div className={styles.sectionNumber}>
                            60
                        </div>
                        {__('landingSection.numbers.members')}
                    </div>
                    <div className={classes(styles.sectionYearNumber, styles.sectionNumberTitle)}>
                        <div className={styles.sectionNumber}>
                            2017
                        </div>
                        {__('landingSection.numbers.year')}
                    </div>
                    <div className={classes(styles.sectionStartNumber, styles.sectionNumberTitle)}>
                        <div className={styles.sectionNumber}>
                            12
                        </div>
                        {__('landingSection.numbers.starts')}
                    </div>
                </div>
                <div className={styles.sectionArrow}>
                    {/*<ArrowIcon/>*/}
                </div>
            </div>
        </div>
    );
}