import React from "react";
import styles from "./assets/planet-component.module.scss";

interface IProps {
  icon: JSX.Element;
  text: string;
}

export default function PlanetComponent(props: IProps) {
  return (
    <div className={styles.planetContainer}>
      {props.icon}
      {props.text}
    </div>
  );
}
