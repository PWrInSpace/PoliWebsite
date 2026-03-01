import React, { useEffect } from "react";
import { TeamPageContent, TeamPageContentProjects } from "./Components/TeamPageContent";
import { SubpageWrapper } from "../../components/subpage-wrapper/SubpageWrapper";
import { HeadComponent } from "../../components/head-component/HeadComponent";
import styles from "./team-page.module.scss";

export const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HeadComponent
      image={"../../assets/images/about-us-page/image2.png"}
      title={__("TeamPage.meta.title")}
      description={__("TeamPage.meta.description")}
    >
      <>
        <SubpageWrapper title={__("TeamPage.header")} bottomMargin={false} compact>
          <TeamPageContent />
        </SubpageWrapper>
        <div className={styles.dividerWrapper}>
          <div className={styles.divider} />
        </div>
        <SubpageWrapper title={__("ProjectsSection.header")} upperMargin={false} bottomMargin={true}>
          <TeamPageContentProjects />
        </SubpageWrapper>
      </>
    </HeadComponent>
  );
}; //