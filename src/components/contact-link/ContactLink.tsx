import React from 'react';
import styles from './assets/contact-link.module.scss';

interface IProps {
    text: string;
    icon: JSX.Element;
    link: string;
}

export default function ContactLink (props: IProps) {
    return(
        <div className={styles.container} onClick={() => window.location.href = props.link}>
            {props.icon}
            {props.text}
        </div>
    );
}