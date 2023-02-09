import React from 'react';
import styles from './assets/social-media-component.module.scss';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';

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
