import React from 'react';
import { IconPropsWithColor } from '../../utils/interfaces/Contract';

export default function FacebookIcon(props: IconPropsWithColor) {
    const size = props.size ?? 33;
    const color = props.color?.primaryColor ?? 'white';
    const secondaryColor = props.color?.secondaryColor ?? 'black';

    return (
        <svg width={size} height={size} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}>
            <path d="M33 16.4975C33 7.38659 25.6122 -0.000102997 16.5009 -0.000102997C7.38773 -0.000102997 0 7.38659 0 16.4975C0 24.7319 6.03442 31.5562 13.9221 32.7947V21.2656H9.73345V16.4975H13.9221V12.8625C13.9221 8.72759 16.3862 6.44378 20.1542 6.44378C21.9599 6.44378 23.8486 6.76644 23.8486 6.76644V10.8258H21.7668C19.7177 10.8258 19.0788 12.0978 19.0788 13.4024V16.4975H23.6546L22.9234 21.2656H19.0788V32.7947C26.9665 31.5562 33 24.7319 33 16.4975Z" fill={secondaryColor}/>
            <path d="M22.9238 21.2652L23.655 16.4971H19.0793V13.402C19.0793 12.0974 19.7181 10.8254 21.7672 10.8254H23.849V6.76604C23.849 6.76604 21.9603 6.44338 20.1547 6.44338C16.3867 6.44338 13.9225 8.72719 13.9225 12.8621V16.4971H9.73389V21.2652H13.9225V32.7943C14.7628 32.9258 15.6237 32.9948 16.5013 32.9948C17.3781 32.9948 18.2389 32.9258 19.0793 32.7943V21.2652H22.9238" fill={color}/>
        </svg>
    );
}
