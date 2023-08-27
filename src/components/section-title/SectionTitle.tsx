import React from "react";
import styles from "./assets/section-title.module.scss";

interface IProps {
  title: string;
}

export default function SectionTitle(props: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.divider}></div>
    </div>
  );
}
