import React from 'react';
import { NavMenuItem } from 'src/utils/interfaces/Contract';
import { NavLink } from 'react-router-dom';
import styles from './assets/navbar-item.module.scss';

interface ISelfProps {
    item: NavMenuItem;
    onClick?: () => void;
}

export default function NavBarItem(props: ISelfProps) {
    return (
        <div>
            <NavLink 
                to={props.item.url}
                onClick={props.onClick}
                className={({ isActive }) =>
                    isActive ?  classes(styles.link, styles.active) : styles.link
                }>
                {props.item.name}
            </NavLink>
        </div>
    );
}