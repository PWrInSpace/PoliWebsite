import React from 'react';
import styles from './assets/subpage-title.module.scss';

interface IProps {
    title: string;
}

export function SubpageTitle(props: IProps) {
    return(
        <>
            <div className={styles.header}>
                {props.title}
            </div>
            <div className={styles.divider}></div>
        </>
    );
}