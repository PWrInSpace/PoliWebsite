import React from "react";
import styles from "./footer.module.scss";
import { NavMenuItem } from "../../common/interfaces/SharedInterfaces";
import { NavBarItem } from "../navbar/components/NavBarItem";
import { IconLogo } from "../../assets/icons/IconLogo";
import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { InstagramIcon } from "../../assets/icons/InstagramIcon";
import { TikTokIcon } from "../../assets/icons/TikTokIcon";
import { YouTubeIcon } from "../../assets/icons/YouTubeIcon";
import { LinkedInIcon } from "../../assets/icons/LinkedInIcon";

interface ISelfProps {
  menuItems: NavMenuItem[];
}

export const Footer = (props: ISelfProps) => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerNavWrapper}>
          <div className={styles.footerNav}>
            {props.menuItems.map((item, key) => {
              return <NavBarItem item={item} key={key} />;
            })}
          </div>
          <div className={styles.footerDivider}></div>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <IconLogo size={{ width: 232, height: 84 }} />
          </div>
          <div>
            <div className={styles.footerContentText}>
              {__("footer.mailUs")}
            </div>
            <div
              className={styles.footerMailText}
              onClick={() =>
                (window.location.href = "mailto:pwrinspace@pwr.edu.pl")
              }
            >
              pwrinspace@pwr.edu.pl
            </div>
          </div>
        </div>
        <div className={styles.footerSocialWrapper}>
          <FacebookIcon
            color={{ primaryColor: "black", secondaryColor: "white" }}
          />
          <InstagramIcon
            color={{ primaryColor: "black", secondaryColor: "white" }}
          />
          <TikTokIcon />
          <YouTubeIcon />
          <LinkedInIcon />
        </div>
      </div>
    </footer>
  );
};
