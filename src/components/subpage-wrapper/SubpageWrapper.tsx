import React from 'react';
import styles from './assets/subpage-wrapper.module.scss';
import { SubpageTitle } from '../subpage-title/SubpageTitle';

interface IProps {
    children: JSX.Element;
    title: string;
    bottomMargin?: boolean;
}

export function SubpageWrapper(props: IProps) {
    return (
        <div className={classes(styles.container, props.bottomMargin && styles.bottomMargin)}>
            <div className={styles.background}></div>
            <div className={styles.wrapper}>
                <SubpageTitle title={props.title}/>
                {props.children}
            </div>
        </div>
    );
}
