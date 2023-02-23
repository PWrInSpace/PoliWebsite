import React from 'react';
import styles from './assets/our-projects.module.scss';
import background from '../../assets/ourProjectsBackground.png';

const rockets = [
    'R1',
    'R2',
    'R3',
    'R2S',
    'R4S',
    'R4',
    'R4V2',
    'R5'
];

export default function OurProjects() {
    const createButtons = () => {
        return rockets.map(rocket => {
            return (
                <button className={styles.sectionButton}>
                    {rocket}
                </button>
            );
        });
    };

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionWrapper}>
                <img src={background} alt="our projects background" className={styles.sectionBackground}/>
                <div className={styles.sectionTitle}>
                    {__('ourProjects.title')}
                </div>
                <div className={styles.sectionDivider}></div>
                <div className={styles.sectionButtonContainer}>
                    {createButtons()}
                </div>
            </div>
        </div>
    );
}