import React from 'react';
import styles from './assets/join-department-container.module.scss';

interface IProps {
    image: string;
    header: string;
    text: string;
    imageOnLeft: boolean;
    onClick: () => void;
}

export default function JoinDepartmentContainer(props: IProps){
    return(
        <div className={styles.container}>
            { props.imageOnLeft ? <img src={props.image} alt="Join us image" className={styles.image} onClick={props.onClick}/> : null }
            <div className={styles.textWrapper}>
                <div className={ props.imageOnLeft ? classes(styles.header, styles.textLeft) : classes(styles.header, styles.textRight) }>
                    {props.header}
                </div>
                <div className={styles.text}>
                    {props.text.split('/n').map(line => <p>{line}</p>)}
                </div>
            </div>
            { props.imageOnLeft ? null : <img src={props.image} alt="Join us image" className={styles.image} onClick={props.onClick}/> }
        </div>
    );
}