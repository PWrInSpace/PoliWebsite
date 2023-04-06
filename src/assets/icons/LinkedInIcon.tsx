import React from 'react';
import { IconPropsWithColor } from '../../common/interfaces/Contract';

export default function LinkedInIcon(props: IconPropsWithColor) {
    const size = props.size ?? 33;
    const color = props.color?.primaryColor ?? 'white';
    const secondaryColor = props.color?.secondaryColor ?? 'black';

    return (
        <svg width={size} height={size} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}>
            <path d="M32.1536 16.0744C32.1536 24.9516 24.9553 32.1489 16.0777 32.1489C7.19824 32.1489 0 24.9516 0 16.0744C0 7.1962 7.19824 -0.000106812 16.0777 -0.000106812C24.9553 -0.000106812 32.1536 7.1962 32.1536 16.0744Z" fill={color}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.7326 11.9449V25H7.00036V11.9449H11.7326ZM18.866 11.9208V12.6901C19.5568 12.2442 20.3535 11.985 21.5615 11.985C25.4959 11.985 26 15.0395 26 17.7005V24.9996H21.244V18.0643C21.244 16.8979 20.8267 16.6767 20.055 16.6767C19.3214 16.6767 18.866 16.9098 18.866 18.0643V24.9996H14.1101V11.9208H18.866ZM9.3661 6C10.6716 6 11.7322 7.06176 11.7322 8.36608C11.7322 9.6704 10.6716 10.7322 9.36609 10.7322C8.06178 10.7322 7 9.6704 7 8.36607C7 7.06177 8.06177 6 9.3661 6Z" fill={secondaryColor}/>
        </svg>
    );
}
