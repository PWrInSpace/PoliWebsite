import React from 'react';
import { IconProps } from '../../src/Contract';

export default function IconMenu(props: IconProps) {
    const height = props.height ?? 24;
    const width = props.width ?? 24;
    const color = props.color ?? '#000000';
    return (
        <svg fill="none" height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}>
            <path d="M4 6H20M4 12H20M4 18H20" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </svg>
    );
}