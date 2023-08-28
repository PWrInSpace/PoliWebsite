import React from 'react';
import styles from './contact-link.module.scss';

interface IProps {
    text: string;
    icon: React.ReactElement;
    onClick: () => void;
}

export const ContactLink = (props: IProps) => {
    return(
        <div className={styles.container} onClick={props.onClick}>
            {props.icon}
            {props.text}
        </div>
    );
};