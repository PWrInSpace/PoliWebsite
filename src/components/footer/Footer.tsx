import React from 'react';
import styles from './assets/footer.module.scss';
import footerBackground from '../../assets/footerBackground.png';
import { NavMenuItem } from '../../Contract';
import NavBarItem from '../navbar/NavBarItem';
import IconLogo from '../../icons/IconLogo';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import TikTokIcon from '../../icons/TikTokIcon';
import YouTubeIcon from '../../icons/YouTubeIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';

interface ISelfProps {
    menuItems: NavMenuItem[];
}

export default function Footer(props: ISelfProps) {
    return(
        <footer className={styles.footerContainer}>
            <img src={footerBackground} alt="footer background" className={styles.footerBackground}/>
            <div className={styles.footerWrapper}>
                <div className={styles.footerNavWrapper}>
                    <div className={styles.footerNav}>
                        {props.menuItems.map(item => <NavBarItem item={item} />)}
                    </div>
                    <div className={styles.footerDivider}></div>
                </div>
                <div className={styles.footerContent}>
                    <IconLogo size={{ width: 232, height: 84 }} onClick={() => window.location.href = window.appContext.baseUrl}/>
                    <div>
                        <div className={styles.footerContentText}>
                            {__('footer.mailUs')}
                        </div>
                        <div className={styles.footerMailText} onClick={() => window.location.href = 'mailto:pwrinspace@pwr.edu.pl'}>
                            pwrinspace@pwr.edu.pl
                        </div>
                    </div>
                </div>
                <div className={styles.footerSocialWrapper}>
                    <FacebookIcon onClick={() => window.location.href = 'https://www.facebook.com/pwrinspace'} color={{ primaryColor: 'black', secondaryColor: 'white' }}/>
                    <InstagramIcon onClick={() => window.location.href = 'https://www.instagram.com/poliwrocket/'} color={{ primaryColor: 'black', secondaryColor: 'white' }}/>
                    <TikTokIcon onClick={() => window.location.href = 'https://www.tiktok.com/@poliwrocket'}/>
                    <YouTubeIcon onClick={() => window.location.href = 'https://www.youtube.com/@poliwrocket1294'}/>
                    <LinkedInIcon onClick={() => window.location.href = 'https://www.linkedin.com/company/pwr-in-space/'}/>
                </div>
            </div>
        </footer>
    );
}