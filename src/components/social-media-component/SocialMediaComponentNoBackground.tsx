import styles from './assets/social-media-component-no-background.module.scss';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import React from 'react';

export default function SocialMediaComponentNoBackground() {
    return(
        <div className={styles.socialMediaContainerNoBackground}>
            <FacebookIcon onClick={() => window.location.href = 'https://www.facebook.com/pwrinspace'}/>
            <InstagramIcon onClick={() => window.location.href = 'https://www.instagram.com/poliwrocket/'}/>
        </div>
    );
}
