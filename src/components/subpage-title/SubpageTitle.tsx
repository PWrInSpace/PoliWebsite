import React from 'react';
import styles from './subpage-title.module.scss';

interface IProps {
    title: string;
}

export const SubpageTitle = (props: IProps) => {
    return(
        <>
            <div className={styles.header}>
                {props.title}
            </div>
            <div className={styles.divider}></div>
        </>
    );
};