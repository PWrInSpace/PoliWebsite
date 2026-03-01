import React from "react";
import styles from "./subpage-wrapper.module.scss";
import { SubpageTitle } from "../subpage-title/SubpageTitle";

interface IProps {
  children: React.ReactElement;
  title: string;
  bottomMargin?: boolean;
  compact?: boolean;
  upperMargin?: boolean;
}

export const SubpageWrapper = (props: IProps) => {
  return (
    <div
      className={classes(
        styles.container,
        props.bottomMargin && styles.bottomMargin,
        props.compact && styles.compact,
        props.upperMargin === false && styles.noUpperMargin,
      )}
    >
      <div className={styles.background}></div>
      <div className={styles.wrapper}>
        <SubpageTitle title={props.title} />
        {props.children}
      </div>
    </div>
  );
};
