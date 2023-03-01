import React from 'react';
import styles from './assets/contact-page.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';
import PersonPicture from '../../components/person-picture/PersonPicture';
import WiktoriaMrowiec from '../../assets/contact/wiktoria-mrowiec.png';
import LiliyaSizhuk from '../../assets/contact/liliya-sizhuk.png';
import ContactLink from '../../components/contact-link/ContactLink';
import MailIcon from '../../icons/MailIcon';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import LocationComponent from '../../components/location-component/LocationComponent';

const crew = {
    firstPerson: {
        image: WiktoriaMrowiec,
        title: 'contactPage.prPresident',
        name: 'Wiktoria Mrowiec',
        mail: 'mrowiec.w.wm@gmail.com'
    },
    secondPerson: {
        image: LiliyaSizhuk,
        title: 'contactPage.president',
        name: 'Liliya Sizhuk',
        mail: 'liliya.sizhuk@gmail.com'
    },
};

const locations = {
    'workshop': {
        'header': 'contactPage.locations.workshop',
        'text': [
            'ul. Fabryczna 16H',
            '53-609 Wrocław',
            'ACADEMIC BOX',
            'Wrocławski Park Technologiczny'
        ],
        'map': 'workshop'
    },
    'location': {
        'header': 'contactPage.locations.location',
        'text': [
            'ul. Łukasiewicza 5/7',
            '50-370 Wrocław',
            'Wydział Mechaniczny',
            'Politechnika Wrocławska'
        ],
        'map': 'location'
    }
};

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
                    <PersonPicture image={crew.firstPerson.image} title={__(crew.firstPerson.title)} name={crew.firstPerson.name} mail={crew.firstPerson.mail}/>
                    <div className={styles.textWrapper}>
                        <div className={styles.subtitle}>
                            {__('contactPage.subtitle')}
                        </div>
                        <ContactLink text={'pwrinspace@pwr.edu.pl'} icon={<MailIcon/>} onClick={() => window.location.href = 'mailto:pwrinspace@pwr.edu.pl'}/>
                        <ContactLink text={'PWr in Space'} icon={<FacebookIcon color={{ primaryColor: 'black', secondaryColor: 'white' }}/>} onClick={() => window.open('https://www.facebook.com/pwrinspace', '_blank')}/>
                        <ContactLink text={'@poliwrocket'} icon={<InstagramIcon color={{ primaryColor: 'black', secondaryColor: 'white' }}/>} onClick={() => window.open('https://www.instagram.com/poliwrocket/', '_blank')}/>
                    </div>
                    <PersonPicture image={crew.secondPerson.image} title={__(crew.secondPerson.title)} name={crew.secondPerson.name} mail={crew.secondPerson.mail}/>
                </div>
                <div className={styles.title}>
                    {__('contactPage.findUs')}
                </div>
                <div className={styles.contactLocation}>
                    <LocationComponent header={__(locations.location.header)} text={locations.location.text} map={locations.location.map}/>
                    <LocationComponent header={__(locations.workshop.header)} text={locations.workshop.text} map={locations.workshop.map}/>
                </div>
            </div>
        </div>
    );
}