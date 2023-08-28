import React from "react";
import styles from "./our-sponsors.module.scss";
import { DisplaySponsors } from "../../../components/display-sponsors/DisplaySponsors";

export const OurSponsors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionTitle}>
          {__("mainPage.ourSponsors.header")}
        </div>
        <div className={styles.sectionDivider}></div>
        <DisplaySponsors />
      </div>
    </div>
  );
};
