import React, { ReactElement } from 'react';
import styles from './assets/rocket-specs-wrapper.module.scss';

interface IProps {
  icon: ReactElement;
  text: string;
  value: string;
}

export default function RocketSpecsWrapper(props: IProps) {
    return (
        <div className={styles.specsWrapper}>
            {props.icon}
            {props.text}
            <div className={styles.specsDivider}></div>
            <div className={styles.specsHighlight}>{props.value}</div>
        </div>
    );
}
