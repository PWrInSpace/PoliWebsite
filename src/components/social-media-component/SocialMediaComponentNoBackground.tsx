import styles from "./assets/social-media-component-no-background.module.scss";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import React from "react";

export default function SocialMediaComponentNoBackground() {
  return (
    <div className={styles.socialMediaContainerNoBackground}>
      <FacebookIcon
        onClick={() =>
          window.open("https://www.facebook.com/pwrinspace", "_blank")
        }
      />
      <InstagramIcon
        onClick={() =>
          window.open("https://www.instagram.com/poliwrocket/", "_blank")
        }
      />
    </div>
  );
}
