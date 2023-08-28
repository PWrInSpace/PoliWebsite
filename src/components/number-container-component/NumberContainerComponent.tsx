import React from "react";
import styles from "./number-container-component.module.scss";

interface IProps {
  customClasses?: string;
  number: number;
  title: string;
}

export const NumberContainerComponent = (props: IProps) => {
  return (
    <div
      className={classes(styles.sectionNumberTitle, props.customClasses ?? "")}
    >
      <div className={styles.sectionNumber}>{props.number}</div>
      {props.title}
    </div>
  );
};
