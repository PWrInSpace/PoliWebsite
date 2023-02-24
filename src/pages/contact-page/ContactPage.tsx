import React from 'react';
import styles from './assets/contact-page.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';
import PersonPicture from '../../components/person-picture/PersonPicture';
import WiktoriaMrowiec from '../../assets/contact/wiktoria-mrowiec.png';
import LiliyaSizhuk from '../../assets/contact/liliya-sizhuk.png';

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
                    <PersonPicture image={WiktoriaMrowiec} title={'Lider Marketingu'} name={'Wiktoria Mrowiec'} mail={'wiktoriamrowiec@gmail.com'}/>
                    <div className={styles.textWrapper}>
                        {__('contactPage.subtitle')}
                    </div>
                    <PersonPicture image={LiliyaSizhuk} title={'Prezes Koła'} name={'Liliya Sizhuk'} mail={'liliyasizhuk@gmail.com'}/>
                </div>
            </div>
        </div>
    );
}