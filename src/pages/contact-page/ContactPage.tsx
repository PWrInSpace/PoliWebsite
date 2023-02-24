import React from 'react';
import styles from './assets/contact-page.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';

export default function ContactPage() {
    return(
        <div className={styles.container}>
            <img src={subpageBackground} alt="subpage background" className={styles.background}/>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {__('contactPage.header')}
                </div>
                <div className={styles.divider}></div>
                <div className={styles.title}>
                    {__('contactPage.title')}
                </div>
                <div className={styles.contactWrapper}>
                    <div className={styles.textWrapper}>
                        {__('contactPage.subtitle')}
                    </div>
                </div>
            </div>
        </div>
    );
}