import { useEffect } from "react";
import styles from "./project.module.scss";
import { IconCircle } from "../../assets/icons/IconCircle";
import { ProjectParagraph } from "./components/ProjectParagraph";
import { NumberContainerComponent } from "../../components/number-container-component/NumberContainerComponent";
import { Paragraphs } from "../../common/data/projectParagraphList";
import { SubpageWrapper } from "../../components/subpage-wrapper/SubpageWrapper";
import { HeadComponent } from "../../components/head-component/HeadComponent";
import { OurProjects } from "../main-page/components/OurProjects";

export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createParagraph = () => {
    return Paragraphs.map((paragraph, key) => (
      <div className={styles.paragraph} key={key}>
        {paragraph.image.position === "left" ? (
          <img
            src={String(paragraph.image.src)}
            alt={paragraph.image.alt}
            className={styles.paragraphImage}
          />
        ) : null}
        <ProjectParagraph
          title={__(paragraph.title)}
          subtitle={__(paragraph.subtitle)}
          text={__(paragraph.text)}
          details={paragraph.specification && __(paragraph.specification.details)}
          detailsImage={paragraph.specification?.image}
          wrapper={
            paragraph.image.position === "right"
              ? styles.firstWrapper
              : styles.secondWrapper
          }
        />
        {paragraph.image.position === "right" ? (
          <img
            src={String(paragraph.image.src)}
            alt={paragraph.image.alt}
            className={styles.paragraphImage}
          />
        ) : null}
      </div>
    ));
  };

  return (
    <HeadComponent
      title={__("projects.meta.title")}
      description={__("projects.meta.description")}
      image={"../../assets/images/rockets/r6.png"}
    >
      <SubpageWrapper title={__("projects.header")}>
        <>
          <div>
            <div className={styles.firstIconCircle}>
              <IconCircle />
            </div>
            <div className={styles.secondIconCircle}>
              <IconCircle />
            </div>
          </div>
          <OurProjects disableBackground disableTitle gridColumn="1 / 4"/>
          {createParagraph()}
          <div className={styles.numbersContainer}>
            <NumberContainerComponent
              number={7}
              title={__("projects.numbers.firstNumber")}
            />
            <NumberContainerComponent
              number={9}
              title={__("projects.numbers.secondNumber")}
            />
            <NumberContainerComponent
              number={5}
              title={__("projects.numbers.thirdNumber")}
            />
          </div>
        </>
      </SubpageWrapper>
    </HeadComponent>
  );
};
