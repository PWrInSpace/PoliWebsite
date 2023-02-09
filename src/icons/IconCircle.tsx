import React from 'react';
import { IconProps } from '../../src/Contract';

export default function IconCircle(props: IconProps) {
    const height = props.height ?? 24;
    const width = props.width ?? 24;
    const color = props.color ?? 'white';

    return (
        <svg width="1231" height="1037" viewBox="0 0 1231 1037" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="616" cy="422" r="154.5" stroke="white" stroke-opacity="0.15"/>
            <circle cx="616" cy="422" r="369.5" stroke="white" stroke-opacity="0.15"/>
            <path d="M1230.5 422C1230.5 761.379 955.156 1036.5 615.5 1036.5C275.844 1036.5 0.5 761.379 0.5 422C0.5 82.6214 275.844 -192.5 615.5 -192.5C955.156 -192.5 1230.5 82.6214 1230.5 422Z" stroke="white" stroke-opacity="0.15"/>
        </svg>

    );
}
