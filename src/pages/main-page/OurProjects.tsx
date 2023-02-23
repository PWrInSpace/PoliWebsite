import React from 'react';
import styles from './assets/our-projects.module.scss';
import background from '../../assets/ourProjectsBackground.png';
import RocketPanel from '../../components/rocket-panel/RocketPanel';
import r1 from '../../assets/rockets/r1.png';
import r2 from '../../assets/rockets/r2.png';
import r3 from '../../assets/rockets/r3.png';
import r4 from '../../assets/rockets/r4.png';
import r4v2 from '../../assets/rockets/r4v2.png';

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
            return <RocketPanel rocket={selectedButton} length={'750 MM'} thrust={'210 N'} weight={'0.8 KG'} velocity={'120 M/S'} image={r1}/>;
        case 'R2':
            return <RocketPanel rocket={selectedButton} length={'1900 MM'} thrust={'450 N'} weight={'5.5 KG'} velocity={'160 M/S'} image={r2}/>;
        case 'R3':
            return <RocketPanel rocket={selectedButton} length={'3050 MM'} thrust={'1600 N'} weight={'20 KG'} velocity={'260 M/S'} image={r3}/>;
        case 'R2S':
            return <RocketPanel rocket={selectedButton} length={'... MM'} thrust={'... N'} weight={'... KG'} velocity={'... M/S'} image={r4v2}/>;
        case 'R4S':
            return <RocketPanel rocket={selectedButton} length={'... MM'} thrust={'... N'} weight={'... KG'} velocity={'... M/S'} image={r4v2}/>;
        case 'R4':
            return <RocketPanel rocket={selectedButton} length={'... MM'} thrust={'... N'} weight={'... KG'} velocity={'... M/S'} image={r4}/>;
        case 'R4V2':
            return <RocketPanel rocket={selectedButton} length={'4084 MM'} thrust={'2500 N'} weight={'35 KG'} velocity={'272 M/S'} image={r4v2}/>;
        case 'R5':
            return <RocketPanel rocket={selectedButton} length={'... MM'} thrust={'... N'} weight={'... KG'} velocity={'... M/S'} image={r4v2}/>;
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