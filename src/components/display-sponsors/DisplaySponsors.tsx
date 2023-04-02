import React from 'react';
import { Images } from '../../utils/enums/sponsorsList';
import styles from './assets/display-sponsors.module.scss';

export function DisplaySponsors() {
    const createLogo = () => {
        return Images.map((logo, key) => {
            return (
                <img
                    src={String(logo.src)}
                    alt={logo.alt}
                    className={styles.logo}
                    key={key}
                    onClick={() => window.open(logo.webpage, '_blank')}
                />
            );
        });
    };

    return(
        <div className={styles.container}>
            {createLogo()}
        </div>
    );
}