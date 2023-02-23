import React from 'react';
import styles from './assets/number-container-component.module.scss';

interface IProps {
    customClasses: string[];
    number: number;
    title: string;
}

export default function NumberContainerComponent(props: IProps) {
    return (
        <div className={classes(...props.customClasses ?? [])}>
            <div className={styles.sectionNumber}>
                {props.number}
            </div>
            {__(props.title)}
        </div>
    );
}