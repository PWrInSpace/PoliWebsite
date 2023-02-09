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

interface ISelfProps {
    menuItems: NavMenuItem[];
}

export default function Footer(props: ISelfProps) {
    return(
        <footer className={styles.footerContainer}>
            <img src={footerBackground} alt="footer background" className={styles.footerBackground}/>
            <div className={styles.footerNavWrapper}>
                <div className={styles.footerNav}>
                    {props.menuItems.map(item => <NavBarItem item={item} />)}
                </div>
                <div className={styles.footerDivider}></div>
            </div>
            <div className={styles.footerContent}>
                <IconLogo width={232} height={84} onClick={() => window.location.href = window.appContext.baseUrl}/>
                <div>
                    <div className={styles.footerContentText}>
                    NAPISZ DO NAS MAILA!
                    </div>
                    <div className={styles.footerMailText}>
                        pwrinspace@pwr.edu.pl
                    </div>
                </div>
            </div>
            <div className={styles.footerSocialWrapper}>
                <FacebookIcon color={'black'} secondaryColor={'white'}/>
                <InstagramIcon color={'black'} secondaryColor={'white'}/>
                <TikTokIcon/>
                <YouTubeIcon/>
            </div>
        </footer>
    );
}