import React from 'react';
import styles from './social-media-component.module.scss';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import InstagramIcon from '../../assets/icons/InstagramIcon';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';

export default function SocialMediaComponent() {
    return(
        <div className={styles.socialMediaContainer}>
            <div className={styles.socialMediaWrapper}>
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon color={{ primaryColor: 'black', secondaryColor: 'white' }}/>
            </div>
        </div>
    );
}
