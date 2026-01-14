import React, { useEffect } from "react";
import { TeamPageContent } from "./Components/TeamPageContent";
import { SubpageWrapper } from "../../components/subpage-wrapper/SubpageWrapper";
import { HeadComponent } from "../../components/head-component/HeadComponent";

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
      <SubpageWrapper title={__("TeamPage.header")} bottomMargin={true}>
        <TeamPageContent/>
      </SubpageWrapper>
    </HeadComponent>
  );
};