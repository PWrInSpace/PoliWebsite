import React from 'react';
import styles from './assets/contact-page.module.scss';
import subpageBackground from '../../assets/images/backgrounds/subpageBackground.png';
import PersonPicture from './components/assets/PersonPicture';
import ContactLink from './components/ContactLink';
import MailIcon from '../../assets/icons/MailIcon';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import InstagramIcon from '../../assets/icons/InstagramIcon';
import LocationComponent from './components/LocationComponent';
import { SubpageTitle } from '../../components/subpage-title/SubpageTitle';
import { Locations } from '../../utils/enums/locationList';
import { Crew } from '../../utils/enums/contactCrew';

export default function ContactPage() {
    return(
        <div className={styles.container}>
            <img src={subpageBackground} alt="subpage background" className={styles.background}/>
            <div className={styles.wrapper}>
                <SubpageTitle title={__('contactPage.header')}/>
                <div className={styles.title}>
                    {__('contactPage.title')}
                </div>
                <div className={styles.contactWrapper}>
                    <PersonPicture
                        image={Crew.pr.image}
                        title={__(Crew.pr.title)}
                        name={Crew.pr.name}
                        mail={Crew.pr.mail}
                    />
                    <div className={styles.textWrapper}>
                        <div className={styles.subtitle}>
                            {__('contactPage.subtitle')}
                        </div>
                        <ContactLink
                            text={'pwrinspace@pwr.edu.pl'}
                            icon={<MailIcon/>}
                            onClick={() => window.location.href = 'mailto:pwrinspace@pwr.edu.pl'}
                        />
                        <ContactLink
                            text={'PWr in Space'}
                            icon={<FacebookIcon
                                color={{ primaryColor: 'black', secondaryColor: 'white' }}
                            />}
                            onClick={() => window.open('https://www.facebook.com/pwrinspace', '_blank')}
                        />
                        <ContactLink
                            text={'@poliwrocket'}
                            icon={<InstagramIcon
                                color={{ primaryColor: 'black', secondaryColor: 'white' }}
                            />}
                            onClick={() => window.open('https://www.instagram.com/poliwrocket/', '_blank')}
                        />
                    </div>
                    <PersonPicture
                        image={Crew.ceo.image}
                        title={__(Crew.ceo.title)}
                        name={Crew.ceo.name}
                        mail={Crew.ceo.mail}
                    />
                </div>
                <div className={styles.title}>
                    {__('contactPage.findUs')}
                </div>
                <div className={styles.contactLocation}>
                    <LocationComponent
                        header={__(Locations.location.header)}
                        text={Locations.location.text}
                        map={Locations.location.map}
                    />
                    <LocationComponent
                        header={__(Locations.workshop.header)}
                        text={Locations.workshop.text}
                        map={Locations.workshop.map}
                    />
                </div>
            </div>
        </div>
    );
}