import React from 'react';
import styles from './assets/join-department-container.module.scss';

interface IProps {
    image: string;
    header: string;
    text: string;
    imageOnLeft: boolean;
}

export default function JoinDepartmentContainer(props: IProps){
    return(
        <div className={styles.container}>
            { props.imageOnLeft ? <img src={props.image} alt="Join us image" className={styles.image}/> : null }
            <div className={styles.textWrapper}>
                <div className={ props.imageOnLeft ? classes(styles.header, styles.textLeft) : classes(styles.header, styles.textRight) }>
                    {props.header}
                </div>
                <div className={styles.text}>
                    {props.text}
                </div>
            </div>
            { props.imageOnLeft ? null : <img src={props.image} alt="Join us image" className={styles.image}/> }
        </div>
    );
}