import React from "react";
import styles from "./person-picture.module.scss";

interface IProps {
  image: string;
  title?: string;
  name?: string;
  mail?: string;
}

export const PersonPicture = (props: IProps) => {
  return (
    <div className={styles.container}>
      <img src={props.image} alt={props.name + " profile picture"} />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.name}>{props.name}</div>
      <div
        className={styles.mail}
        onClick={() => (window.location.href = "mailto:" + props.mail)}
      >
        {props.mail}
      </div>
    </div>
  );
};
