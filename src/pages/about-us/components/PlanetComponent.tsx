import React from 'react';
import styles from './planet-component.module.scss';

interface IProps {
    icon: React.ReactElement;
    text: string;
}

export default function PlanetComponent(props: IProps) {
    return (
        <div className={styles.planetContainer}>
            {props.icon}
            {props.text}
        </div>
    );
}