import React from 'react';
import styles from './assets/rocket-panel.module.scss';
import RocketSpecs from './RocketSpecs';

interface IProps {
    rocket: string;
    length: string;
    thrust: string;
    weight: string;
    velocity: string;
    image: string;
}

export default function RocketPanel(props: IProps) {
    return(
        <div className={styles.panelContainer}>
            <img src={props.image} className={styles.rocketImage} alt={props.rocket} />
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
                <RocketSpecs length={props.length} thrust={props.thrust} weight={props.weight} velocity={props.velocity}/>
            </div>
        </div>
    );
}