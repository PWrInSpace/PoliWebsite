import React from 'react';
import styles from './assets/our-projects.module.scss';
import background from '../../assets/ourProjectsBackground.png';
import RocketPanel from '../../components/rocket-panel/RocketPanel';

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
        case 'R1':
            break;
        case 'R2':
            break;
        case 'R3':
            break;
        case 'R2S':
            break;
        case 'R4S':
            break;
        case 'R4':
            break;
        case 'R4V2':
            return <RocketPanel rocket={selectedButton} length={'4084 MM'} thrust={'2500 N'} weight={'35 KG'} velocity={'272 M/S'}/>;
        case 'R5':
            break;
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
                {chooseRocketPanel()}
            </div>
        </div>
    );
}