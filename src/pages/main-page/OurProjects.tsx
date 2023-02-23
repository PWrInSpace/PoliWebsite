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
    const [selectedButton, setSelectedButton] = React.useState<string>('R4V2');

    const handleButtonChange = (rocket) => {
        if (rocket === selectedButton) {
            return styles.sectionButtonSelected;
        } else {
            return styles.sectionButton;
        }
    };

    const createButtons = () => {
        return rockets.map(rocket => {
            return (
                <button className={handleButtonChange(rocket)} onClick={() => setSelectedButton(rocket)}>
                    {rocket}
                </button>
            );
        });
    };

    const chooseRocketPanel = () => {
        switch (selectedButton) {

        }
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