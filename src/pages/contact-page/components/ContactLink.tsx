import React from 'react';
import styles from './assets/contact-link.module.scss';

interface IProps {
    text: string;
    icon: React.ReactElement;
    onClick: () => void;
}

export default function ContactLink (props: IProps) {
    return(
        <div className={styles.container} onClick={props.onClick}>
            {props.icon}
            {props.text}
        </div>
    );
}