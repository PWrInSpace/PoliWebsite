import React, { useEffect } from "react";
import styles from "./about-us.module.scss";
import { IconCircle } from "../../assets/icons/IconCircle";
import { AboutUsParagraph } from "./components/AboutUsParagraph";
import { NumberContainerComponent } from "../../components/number-container-component/NumberContainerComponent";
import { Paragraphs } from "../../common/data/aboutParagraphList";
import { SubpageWrapper } from "../../components/subpage-wrapper/SubpageWrapper";
import { HeadComponent } from "../../components/head-component/HeadComponent";

export const AboutUs = () => {
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
        <AboutUsParagraph
          title={__(paragraph.title)}
          subtitle={__(paragraph.subtitle)}
          text={__(paragraph.text)}
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
      title={__("aboutUsPage.meta.title")}
      description={__("aboutUsPage.meta.description")}
      image={"../../assets/images/about-us-page/image2.png"}
    >
      <SubpageWrapper title={__("aboutUsPage.header")}>
        <>
          <div>
            <div className={styles.firstIconCircle}>
              <IconCircle />
            </div>
            <div className={styles.secondIconCircle}>
              <IconCircle />
            </div>
          </div>
          {createParagraph()}
          <div className={styles.numbersContainer}>
            <NumberContainerComponent
              number={60}
              title={__("aboutUsPage.numbers.firstNumber")}
            />
            <NumberContainerComponent
              number={2017}
              title={__("aboutUsPage.numbers.secondNumber")}
            />
            <NumberContainerComponent
              number={16}
              title={__("aboutUsPage.numbers.thirdNumber")}
            />
          </div>
        </>
      </SubpageWrapper>
    </HeadComponent>
  );
};
