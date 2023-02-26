import React from 'react';
import styles from './assets/location-component.module.scss';

interface IProps {
    header: string;
    text: string[];
    map: string;
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

    const createMap = () => {
        if (props.map === 'workshop') {
            return <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=ul.%20Fabryczna%2016,%20Wroc%C5%82aw,%20Poland+(Warsztat)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>;
        } else if (props.map === 'location') {
            return <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=ul.%20%C5%81ukasiewicza%205/7,%20Wroc%C5%82aw,%20Poland+(Lokalizacja)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {props.header}
                </div>
                {createText()}
            </div>
            <div>
                {createMap()}
            </div>
        </div>
    );
}