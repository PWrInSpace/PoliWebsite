import React from 'react';
import styles from './assets/social-media-component.module.scss';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';

export default function SocialMediaComponent() {
    return(
        <div className={styles.socialMediaContainer}>
            <div className={styles.socialMediaWrapper}>
                <FacebookIcon onClick={() => window.open('https://www.facebook.com/pwrinspace', '_blank')}/>
                <InstagramIcon onClick={() => window.open('https://www.instagram.com/poliwrocket/', '_blank')}/>
            </div>
        </div>
    );
}
