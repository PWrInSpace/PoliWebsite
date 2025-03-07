import React from "react";
import styles from "./landing-section.module.scss";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";
import { Link } from "react-router-dom";
import { NumberContainerComponent } from "../../../components/number-container-component/NumberContainerComponent";
import background from "../../../assets/images/backgrounds/background.mp4";
import backgroundPlaceholder from "../../../assets/images/backgrounds/background-placeholder.jpg";
import { Countdown } from "../../../components/timer/Countdown";

export const LandingSection = () => {
  const [videoLoaded, setVideoLoaded] = React.useState<boolean>(false);

  const scroll = () => {
    const section = document.querySelector("#about-us");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isRecrutationSeasson = true;
  const recrutationStart = new Date(Date.UTC(2025, 2, 3, 23, 0, 0));
  const recrutationEnd = new Date(Date.UTC(2025, 2, 17, 23, 0, 0));
  const isBeforeRecrutationActive = (+recrutationStart - +new Date()) > 0;
  const isRecrutationActive = (+recrutationEnd - +new Date()) > 0;
  const recrutationText = isBeforeRecrutationActive ? __("mainPage.landingSection.beforeRecrutation")
    : (isRecrutationActive ? __("mainPage.landingSection.activeRecrutation") : __("mainPage.landingSection.afterRecrutation"));

  const recrutationDate = isBeforeRecrutationActive ? recrutationStart : recrutationEnd;

  return (
    <div className={styles.sectionContainer}>
      {!videoLoaded ? (
        <img
          src={backgroundPlaceholder}
          className={classes(styles.sectionVideo, styles.videoPlaceholder)}
          alt={"Placeholder image for a video"}
        />
      ) : null}
      <video
        src={background}
        className={styles.sectionVideo}
        autoPlay
        muted
        loop
        onLoad={() => setVideoLoaded(!videoLoaded)}
      />
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionTitle}>
          {__("mainPage.landingSection.title")}
        </div>
        <div className={styles.sectionDescription}>
          {__("mainPage.landingSection.description")}
        </div>
        {isRecrutationSeasson && <Countdown 
          date={recrutationDate} 
          title={recrutationText}
          link={isRecrutationActive ? "https://forms.gle/cSzfGSwZjMYj1o7d7" : undefined}
        />}
        <div className={styles.sectionButtons}>
          <Link
            to={"/contact"}
            className={classes(
              styles.sectionButton,
              styles.sectionProjectButton,
            )}
          >
            {__("mainPage.landingSection.buttons.projects")}
          </Link>
          <Link
            to={"/sponsors"}
            className={classes(
              styles.sectionButton,
              styles.sectionSponsorButton,
            )}
          >
            {__("mainPage.landingSection.buttons.sponsors")}
          </Link>
        </div>
        <div className={styles.sectionNumberContainer}>
          <NumberContainerComponent
            number={60}
            title={__("mainPage.landingSection.numbers.members")}
          />
          <NumberContainerComponent
            number={2017}
            title={__("mainPage.landingSection.numbers.year")}
          />
          <NumberContainerComponent
            number={16}
            title={__("mainPage.landingSection.numbers.starts")}
          />
        </div>
        <div className={styles.sectionArrow} onClick={scroll}>
          <ArrowIcon size={"100%"} />
        </div>
      </div>
    </div>
  );
};
