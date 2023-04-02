import React from 'react';
import { IconPropsWithColor } from '../../utils/Contract';

export default function TikTokIcon(props: IconPropsWithColor) {
    const size = props.size ?? 33;
    const color = props.color?.primaryColor ?? 'white';
    const secondaryColor = props.color?.secondaryColor ?? 'black';

    return (
        <svg width={size} height={size} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}>
            <path d="M32.3853 16.4401C32.3853 25.3164 25.187 32.5137 16.3094 32.5137C7.42993 32.5137 0.231689 25.3164 0.231689 16.4401C0.231689 7.56191 7.42993 0.364697 16.3094 0.364697C25.187 0.364697 32.3853 7.56191 32.3853 16.4401Z" fill={color}/>
            <path d="M24.6582 14.5876C24.4937 14.6031 24.3283 14.6122 24.1629 14.6122C22.3508 14.6131 20.6614 13.699 19.6682 12.1834V20.4546C19.6682 23.8302 16.931 26.5679 13.555 26.5679C10.178 26.5679 7.43994 23.8302 7.43994 20.4546C7.43994 17.0782 10.178 14.3414 13.555 14.3414C13.6822 14.3414 13.8067 14.3532 13.933 14.3614V17.3735C13.8067 17.358 13.6831 17.3353 13.555 17.3353C11.8311 17.3353 10.4343 18.7319 10.4343 20.4555C10.4343 22.1783 11.8311 23.5749 13.555 23.5749C15.278 23.5749 16.8001 22.2174 16.8001 20.4946L16.8301 6.44727H19.7127C19.9853 9.03049 22.0691 11.0495 24.6609 11.2394V14.5876" fill={secondaryColor}/>
        </svg>
    );
}
