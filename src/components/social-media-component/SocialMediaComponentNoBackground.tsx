import styles from './assets/social-media-component-no-background.module.scss';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import InstagramIcon from '../../assets/icons/InstagramIcon';
import React from 'react';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';

export default function SocialMediaComponentNoBackground() {
    return(
        <div className={styles.socialMediaContainerNoBackground}>
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon color={{ primaryColor: 'black', secondaryColor: 'white' }} />
        </div>
    );
}
