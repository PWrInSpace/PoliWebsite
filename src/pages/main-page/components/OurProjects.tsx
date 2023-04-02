import React from 'react';
import styles from './assets/our-projects.module.scss';
import RocketPanel from './components/RocketPanel';
import SectionTitle from '../../../components/section-title/SectionTitle';
import { rockets } from '../../../utils/enums/rocketList';

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
                <button
                    className={handleButtonChange(rocket)}
                    onClick={() => setSelectedButton(rocket)}
                    key={key}
                >
                    {rocket}
                </button>
            );
        });
    };

    const chooseRocketPanel = () => {
        for (const rocket in rockets) {
            if (rocket === selectedButton) {
                return <RocketPanel
                    rocket={rocket}
                    length={rockets[rocket].length}
                    thrust={rockets[rocket].thrust}
                    weight={rockets[rocket].weight}
                    velocity={rockets[rocket].velocity}
                    image={rockets[rocket].image}
                />;
            }
        }
    };

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionWrapper}>
                <SectionTitle title={__('mainPage.ourProjects.title')}/>
                <div className={styles.sectionButtonContainer}>
                    {createButtons()}
                </div>
                {chooseRocketPanel()}
            </div>
        </div>
    );
}