import React from 'react';
import styles from './assets/about-us.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';
import IconCircle from '../../icons/IconCircle';

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <div>
                <img src={subpageBackground} alt="subpage background" className={styles.background}/>
                <div className={styles.firstIconCircle}>
                    <IconCircle/>
                </div>
                <div className={styles.secondIconCircle}>
                    <IconCircle/>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.title}>

                </div>
            </div>
        </div>
    );
}