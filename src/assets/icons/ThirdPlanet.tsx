import React from 'react';
import { IconProps } from '../../common/interfaces/Contract';

export default function ThirdPlanet(props: IconProps) {
    const size = props.size ?? 101;
    const color = props.color ?? '#018EDF';

    return (
        <svg width={size} height={size} viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.0094 47.1657H100.799C100.581 43.7528 100.025 40.4053 99.1452 37.1623H38.4755V30.5815H96.8541C95.343 27.0549 93.4254 23.7003 91.1219 20.5781H57.0094V13.9971H85.33C75.8972 4.96297 63.5572 0 50.4534 0C36.9769 0 24.3069 5.24795 14.7773 14.7773C5.24795 24.3069 0 36.9769 0 50.4535C0 63.93 5.24795 76.6 14.7773 86.1296C24.3069 95.659 36.9769 100.907 50.4534 100.907C63.5546 100.907 75.8924 95.9461 85.3249 86.9145H55.0585V80.3337H91.1183C93.4224 77.2117 95.3407 73.857 96.8521 70.3303H40.4266V63.7495H99.144C100.024 60.5067 100.58 57.1592 100.799 53.7463H57.0094V47.1657Z" fill={color}/>
        </svg>
    );
}
