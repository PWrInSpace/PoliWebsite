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
                    <div className={styles.footerLogo}>
                        <IconLogo size={{ width: 232, height: 84 }} onClick={() => window.location.href = window.appContext.baseUrl}/>
                    </div>
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
                    <FacebookIcon onClick={() => window.open('https://www.facebook.com/pwrinspace', '_blank')} color={{ primaryColor: 'black', secondaryColor: 'white' }}/>
                    <InstagramIcon onClick={() => window.open('https://www.instagram.com/poliwrocket/', '_blank')} color={{ primaryColor: 'black', secondaryColor: 'white' }}/>
                    <TikTokIcon onClick={() => window.open('https://www.tiktok.com/@poliwrocket', '_blank')}/>
                    <YouTubeIcon onClick={() => window.open('https://www.youtube.com/@poliwrocket1294', '_blank')}/>
                    <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/company/pwr-in-space/', '_blank')}/>
                </div>
            </div>
        </footer>
    );
}