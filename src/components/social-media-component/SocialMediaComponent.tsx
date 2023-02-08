import React from 'react';
import styles from './assets/social-media-component.module.scss';
import FacebookIcon from './assets/FacebookIcon';
import InstagramIcon from './assets/InstagramIcon';

export default function SocialMediaComponent() {
    return(
        <div className={styles.socialMediaContainer}>
            <div className={styles.socialMediaWrapper}>
                <FacebookIcon/>
                <InstagramIcon/>
            </div>
        </div>
    );
}
