import React from "react";
import styles from "./our-projects.module.scss";
import { RocketPanel } from "./components/RocketPanel";
import { SectionTitle } from "../../../components/section-title/SectionTitle";
import { Rockets } from "../../../common/data/rocketList";

interface OurProjectsProps {
  disableBackground?: boolean;
  gridColumn?: string;
  disableTitle?: boolean;
}

export const OurProjects = (props: OurProjectsProps) => {
  const {
    disableBackground,
    gridColumn,
    disableTitle
  } = props;

  const [selectedButton, setSelectedButton] = React.useState<string>("R6");

  const handleButtonChange = (rocket: string) => {
    if (rocket === selectedButton) {
      return styles.sectionButtonSelected;
    } else {
      return styles.sectionButton;
    }
  };

  const createButtons = () => {
    return Rockets.map((rocket, key) => {
      return (
        <button
          className={handleButtonChange(rocket.name)}
          onClick={() => setSelectedButton(rocket.name)}
          key={key}
        >
          {rocket.name}
        </button>
      );
    });
  };

  const chooseRocketPanel = () => {
    for (const rocket of Rockets) {
      if (rocket.name === selectedButton) {
        return (
          <RocketPanel
            rocket={rocket.name}
            length={rocket.length}
            thrust={rocket.thrust}
            weight={rocket.weight}
            velocity={rocket.velocity}
            image={String(rocket.image)}
          />
        );
      }
    }
  };

  return (
    <div className={styles.sectionContainer} style={{ background: disableBackground ? 'unset' : undefined }}>
      <div className={styles.sectionWrapper} style={{ gridColumn: gridColumn ? gridColumn : undefined }}>
        {!disableTitle && <SectionTitle title={__('mainPage.ourProjects.title')} />}
        <div className={styles.sectionButtonContainer}>{createButtons()}</div>
        {chooseRocketPanel()}
      </div>
    </div>
  );
};
