import React from "react";
import styles from "./subpage-wrapper.module.scss";
import { SubpageTitle } from "../subpage-title/SubpageTitle";

interface IProps {
  children: React.ReactElement;
  title: string;
  bottomMargin?: boolean;
}

export const SubpageWrapper = (props: IProps) => {
  return (
    <div
      className={classes(
        styles.container,
        props.bottomMargin && styles.bottomMargin,
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
