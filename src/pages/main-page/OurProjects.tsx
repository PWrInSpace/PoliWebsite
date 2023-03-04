import React from 'react';
import styles from './assets/our-projects.module.scss';
import background from '../../assets/ourProjectsBackground.jpeg';
import RocketPanel from '../../components/rocket-panel/RocketPanel';
import r1 from '../../assets/rockets/r1.png';
import r2 from '../../assets/rockets/r2.png';
import r2s from '../../assets/rockets/r2s.png';
import r3 from '../../assets/rockets/r3.png';
import r4 from '../../assets/rockets/r4.png';
import r4v2 from '../../assets/rockets/r4v2.png';
import r5 from '../../assets/rockets/r5.png';

const rockets = {
    'R1': {
        'length': '750 MM',
        'thrust': '210 N',
        'weight': '0.8 KG',
        'velocity': '120 M/S',
        'image': r1
    },
    'R2': {
        'length': '1900 MM',
        'thrust': '450 N',
        'weight': '5.5 KG',
        'velocity': '160 M/S',
        'image': r2
    },
    'R3': {
        'length': '3000 MM',
        'thrust': '1600 N',
        'weight': '20 KG',
        'velocity': '260 M/S',
        'image': r3
    },
    'R2S': {
        'length': '2500 MM',
        'thrust': '1500 N',
        'weight': '10 KG',
        'velocity': '300 M/S',
        'image': r2s
    },
    'R4S': {
        'length': '2600 MM',
        'thrust': '1500 N',
        'weight': '15 KG',
        'velocity': '130 M/S',
        'image': r4
    },
    'R4': {
        'length': '4000 MM',
        'thrust': '2500 N',
        'weight': '35 KG',
        'velocity': '272 M/S',
        'image': r4
    },
    'R4V2': {
        'length': '4007 MM',
        'thrust': '2550 N',
        'weight': '36 KG',
        'velocity': '240 M/S',
        'image': r4v2
    },
    'R5': {
        'length': '??? MM',
        'thrust': '??? N',
        'weight': '??? KG',
        'velocity': '??? M/S',
        'image': r5
    }
};

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
        return Object.keys(rockets).map((rocket, key) => {
            return (
                <button className={handleButtonChange(rocket)} onClick={() => setSelectedButton(rocket)} key={key}>
                    {rocket}
                </button>
            );
        });
    };

    const chooseRocketPanel = () => {
        for (const rocket in rockets) {
            if (rocket === selectedButton) {
                return <RocketPanel rocket={rocket} length={rockets[rocket].length} thrust={rockets[rocket].thrust} weight={rockets[rocket].weight} velocity={rockets[rocket].velocity} image={rockets[rocket].image}/>;
            }
        }
    };

    return (
        <div className={styles.sectionContainer}>
            <img src={background} alt="our projects background" className={styles.sectionBackground}/>
            <div className={styles.sectionWrapper}>
                <div className={styles.sectionTitle}>
                    {__('mainPage.ourProjects.title')}
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