import React from 'react';
import styles from './assets/rocket-panel.module.scss';

interface IProps {
    rocket: string;
    length: string;
    thrust: string;
    weight: string;
    velocity: string;
}

export default function RocketPanel(props: IProps) {
    return(
        <div className={styles.panelContainer}>
            <div className={styles.panelWrapper}>
                <div className={styles.rocketTitle}>
                    {props.rocket}
                </div>
                <div className={styles.rocketSubtitle}>
                    {__('ourProjects.rockets.' + props.rocket + '.name')}
                </div>
                <div className={styles.rocketDescription}>
                    {__('ourProjects.rockets.' + props.rocket + '.description')}
                </div>
            </div>
        </div>
    );
}