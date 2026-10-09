import React, { useEffect } from "react";
import styles from "./join-us.module.scss";
import { JoinDepartmentContainer } from "./components/JoinDepartmentContainer";
import { Departments } from "../../common/data/departmentsList";
import { SubpageWrapper } from "../../components/subpage-wrapper/SubpageWrapper";
import { HeadComponent } from "../../components/head-component/HeadComponent";
import { RecrutationData } from "../main-page/components/LandingSection";
import { Countdown } from "../../components/timer/Countdown";

export const JoinUs = () => {
  const buttonVisible =
    RecrutationData.isRecrutationSeasson &&
    !RecrutationData.isBeforeRecrutationActive() &&
    RecrutationData.isRecrutationActive();
  const buttonLink = RecrutationData.formLink;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createParagraphs = () => {
    return false && Departments.map((department, index) => {
      return (
        <JoinDepartmentContainer
          image={String(department.image ?? "")}
          header={__(department.header)}
          text={__(department.text)}
          key={index}
          onClick={() => window.open(buttonLink, "_blank")}
        />
      );
    });
  };

  return (
    <HeadComponent
      title={__("joinUsPage.meta.title")}
      description={__("joinUsPage.meta.description")}
      image={"../../assets/images/about-us-page/image2.png"}
    >
      <SubpageWrapper title={__("joinUsPage.header")}>
        <>
          {buttonVisible ? (
            <div className={styles.recrutation}>
              <Countdown
                date={RecrutationData.recrutationEnd}
                title={__("joinUsPage.recrutationEnds")}
              />
              <button
                className={styles.button}
                onClick={() => window.open(buttonLink, "_blank")}
              >
                {__("joinUsPage.form")}
              </button>
            </div>
          ) : (
            <div className={styles.notNow}>{__("joinUsPage.notNow")}</div>
          )}
          <div className={styles.textContainer}>{createParagraphs()}</div>
        </>
      </SubpageWrapper>
    </HeadComponent>
  );
};
