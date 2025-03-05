import React, { useEffect } from "react";
import styles from "./join-us.module.scss";
import { JoinDepartmentContainer } from "./components/JoinDepartmentContainer";
import { Departments } from "../../common/data/departmentsList";
import { SubpageWrapper } from "../../components/subpage-wrapper/SubpageWrapper";
import { HeadComponent } from "../../components/head-component/HeadComponent";

export const JoinUs = () => {
  const buttonVisible = true;
  const buttonLink =
    "https://forms.gle/cSzfGSwZjMYj1o7d7";

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
          {buttonVisible && (
            <button
              className={styles.button}
              onClick={() => window.open(buttonLink, "_blank")}
            >
              {__("joinUsPage.form")}
            </button>
          )}
          <div className={styles.textContainer}>{createParagraphs()}</div>
        </>
      </SubpageWrapper>
    </HeadComponent>
  );
};
