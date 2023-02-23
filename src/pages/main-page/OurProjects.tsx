import React from 'react';
import styles from './assets/our-projects.module.scss';
import background from '../../assets/ourProjectsBackground.png';

export default function OurProjects() {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionWrapper}>
                <img src={background} alt="our projects background" className={styles.sectionBackground}/>
                <div className={styles.sectionTitle}>
                    {__('ourProjects.title')}
                </div>
                <div className={styles.sectionDivider}></div>
            </div>
        </div>
    );
}