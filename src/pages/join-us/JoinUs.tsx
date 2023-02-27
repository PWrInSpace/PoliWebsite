import React from 'react';
import styles from './assets/join-us.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';

export default function JoinUs(){
    return(
        <div className={styles.container}>
            <img src={subpageBackground} alt="subpage background" className={styles.background}/>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {__('joinUsPage.header')}
                </div>
                <div className={styles.divider}></div>
                <div className={styles.textContainer}>

                </div>
            </div>
        </div>
    );
}