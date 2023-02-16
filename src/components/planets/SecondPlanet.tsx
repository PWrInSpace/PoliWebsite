import React from 'react';
import { IconPropsWithText } from '../../Contract';
import styles from './assets/planets.module.scss';

export default function SecondPlanet(props: IconPropsWithText) {
    const size = props.size ?? 101;
    const color = props.color ?? '#018EDF';

    return (
        <div className={styles.planetContainer}>
            <svg width={size} height={size} viewBox="0 0 102 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M51.0543 0C23.2339 0 0.60083 22.6335 0.60083 50.4535C0.60083 78.2734 23.2339 100.907 51.0543 100.907C78.8746 100.907 101.508 78.2734 101.508 50.4535C101.508 22.6335 78.8746 0 51.0543 0ZM57.5644 30.923H86.7395C88.4103 33.9638 89.7022 37.2402 90.555 40.6881H57.5644V30.923ZM73.8397 50.4535V60.2186H64.0746V50.4535H73.8397ZM22.8478 21.1579H28.2688V30.923H15.3691C17.3614 27.2973 19.8904 24.0068 22.8478 21.1579ZM11.5534 40.6883H44.544V50.4535H10.3659C10.3659 47.0881 10.7798 43.818 11.5534 40.6883ZM25.0138 69.9839H15.3691C13.6982 66.9431 12.4063 63.6667 11.5536 60.2188H25.0138V69.9839ZM79.2607 79.749H44.5442V69.9839H86.7397C84.7471 73.6096 82.2182 76.9001 79.2607 79.749ZM83.6048 60.2186V50.4535H91.7424C91.7424 53.8189 91.3288 57.0889 90.555 60.2186H83.6048Z" fill={color}/>
                </g>
            </svg>
            {props.text}
        </div>
    );
}
