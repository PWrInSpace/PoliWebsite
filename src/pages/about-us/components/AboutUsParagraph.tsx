import React from "react";
import styles from "./assets/about-us-paragraph.module.scss";

interface IProps {
  title: string;
  subtitle: string;
  text: string;
  wrapper: string;
}

export default function AboutUsParagraph(props: IProps) {
  return (
    <div className={classes(styles.textWrapper, props.wrapper)}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.subtitle}>{props.subtitle}</div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
