import React from 'react';
import styles from './assets/location-component.module.scss';

interface IProps {
    header: string;
    text: string[];
}

export default function LocationComponent(props: IProps) {
    const createText = () => {
        return props.text.map(line => {
            return (
                <div className={styles.text}>
                    {line}
                </div>
            );
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {props.header}
            </div>
            {createText()}
        </div>
    );
}