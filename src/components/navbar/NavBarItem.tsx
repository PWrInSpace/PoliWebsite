import React from 'react';
import { NavMenuItem } from 'src/Contract';
import { Link } from 'react-router-dom';
import styles from './assets/navbar-item.module.scss';

interface ISelfProps {
    item: NavMenuItem;
}

export default function NavBarItem(props: ISelfProps) {
    return (
        <div>
            <Link to={props.item.url} className={styles.link}>{props.item.name}</Link>
        </div>
    );
}