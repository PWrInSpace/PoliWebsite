import React from 'react';
import { IconPropsWithColor } from '../../utils/Contract';

export default function YouTubeIcon(props: IconPropsWithColor) {
    const size = props.size ?? 33;
    const color = props.color?.primaryColor ?? 'white';
    const secondaryColor = props.color?.secondaryColor ?? 'black';

    return (
        <svg width={size} height={size} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}>
            <path d="M33 16.0744C33 24.9516 25.8018 32.1489 16.9241 32.1489C8.04468 32.1489 0.846436 24.9516 0.846436 16.0744C0.846436 7.1962 8.04468 -0.000106812 16.9241 -0.000106812C25.8018 -0.000106812 33 7.1962 33 16.0744Z" fill={color}/>
            <path d="M19.7264 16.4189L15.2999 18.6088C15.1254 18.7021 14.5365 18.5769 14.5365 18.3795V13.8847C14.5365 13.6848 15.1309 13.5595 15.3045 13.6586L19.542 15.9635C19.7192 16.0646 19.9055 16.3209 19.7264 16.4189ZM25.5315 13.7774C25.5315 11.6468 23.8031 9.9176 21.6712 9.9176H11.7994C9.66742 9.9176 7.93896 11.6468 7.93896 13.7774V18.3706C7.93896 20.5031 9.66742 22.2305 11.7994 22.2305H21.6712C23.8031 22.2305 25.5315 20.5031 25.5315 18.3706V13.7774Z" fill={secondaryColor}/>
        </svg>
    );
}
