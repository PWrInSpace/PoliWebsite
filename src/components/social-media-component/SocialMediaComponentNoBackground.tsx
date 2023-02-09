import styles from './assets/social-media-component-no-background.module.scss';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import React from 'react';

export default function SocialMediaComponentNoBackground() {
    return(
        <div className={styles.socialMediaContainerNoBackground}>
            <FacebookIcon/>
            <InstagramIcon/>
        </div>
    );
}
