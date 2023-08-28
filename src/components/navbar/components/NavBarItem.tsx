import React from "react";
import { NavMenuItem } from "src/common/interfaces/SharedInterfaces";
import { NavLink } from "react-router-dom";
import styles from "./navbar-item.module.scss";

interface ISelfProps {
  item: NavMenuItem;
  onClick?: () => void;
}

export const NavBarItem = (props: ISelfProps) => {
  return (
    <div>
      <NavLink
        to={props.item.url}
        onClick={props.onClick}
        className={({ isActive }) =>
          isActive ? classes(styles.link, styles.active) : styles.link
        }
      >
        {props.item.name}
      </NavLink>
    </div>
  );
};
