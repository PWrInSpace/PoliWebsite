import styles from './assets/social-media-component-no-background.module.scss';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import InstagramIcon from '../../assets/icons/InstagramIcon';
import React from 'react';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';

export default function SocialMediaComponentNoBackground() {
    return(
        <div className={styles.socialMediaContainerNoBackground}>
            <FacebookIcon onClick={() => window.open('https://www.facebook.com/pwrinspace', '_blank')}/>
            <InstagramIcon onClick={() => window.open('https://www.instagram.com/poliwrocket/', '_blank')}/>
            <LinkedInIcon
                onClick={() => window.open('https://www.linkedin.com/company/pwr-in-space/', '_blank')}
                color={{ primaryColor: 'black', secondaryColor: 'white' }}
            />
        </div>
    );
}
