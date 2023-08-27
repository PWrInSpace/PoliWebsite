import React from "react";
import styles from "./assets/join-department-container.module.scss";

interface IProps {
  image: string;
  header: string;
  text: string;
  onClick?: () => void;
}

export default function JoinDepartmentContainer(props: IProps) {
  return (
    <div className={styles.container}>
      <img
        src={props.image}
        alt="Join us image"
        className={styles.image}
        onClick={props.onClick}
      />
      <div className={styles.textWrapper}>
        <div className={styles.header}>{props.header}</div>
        <div className={styles.text}>
          {props.text.split("\n").map((line) => (
            <p>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
