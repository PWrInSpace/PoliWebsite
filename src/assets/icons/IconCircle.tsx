import React from 'react';
import { AdvancedIconProps } from '../../utils/Contract';

export default function IconCircle(props: AdvancedIconProps) {
    const height = props.size?.height ?? 1037;
    const width = props.size?.width ?? 1231;
    const color = props.color ?? 'white';

    return (
        <svg width={width} height={height} viewBox="0 0 1231 1037" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="616" cy="422" r="154.5" stroke="white" strokeOpacity="0.15"/>
            <circle cx="616" cy="422" r="369.5" stroke="white" strokeOpacity="0.15"/>
            <path d="M1230.5 422C1230.5 761.379 955.156 1036.5 615.5 1036.5C275.844 1036.5 0.5 761.379 0.5 422C0.5 82.6214 275.844 -192.5 615.5 -192.5C955.156 -192.5 1230.5 82.6214 1230.5 422Z" stroke={color} strokeOpacity="0.15"/>
        </svg>
    );
}
