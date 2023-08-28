import React from 'react';
import { AdvancedIconProps } from '../../common/interfaces/SharedInterfaces';

export default function SmallWeightIcon(props: AdvancedIconProps) {
    const height = props.size?.height ?? 33;
    const width = props.size?.width ?? 31;
    const color = props.color ?? 'white';

    return (
        <svg width={width} height={height} viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4924 2.69083H19.4327V6.88536H22.0079V1.34542C22.0079 0.600161 21.4335 0 20.7203 0H10.2048C9.49161 0 8.91724 0.600161 8.91724 1.34542V6.88536H11.4924V2.69083Z" fill={color}/>
            <path d="M22.1658 23.7426C21.4147 24.1911 20.4869 24.4219 19.376 24.4219C18.1452 24.4219 17.1669 24.0658 16.4599 23.3535C15.7467 22.6412 15.3933 21.6585 15.3933 20.4054C15.3933 19.1458 15.7846 18.1169 16.5609 17.3255C17.3373 16.5341 18.3724 16.1384 19.66 16.1384C20.4742 16.1384 21.1875 16.2571 21.8123 16.4879V18.1829C21.219 17.8267 20.4995 17.6487 19.6411 17.6487C18.9215 17.6487 18.3409 17.8927 17.8864 18.3807C17.4383 18.8688 17.2111 19.5151 17.2111 20.3263C17.2111 21.1507 17.413 21.7838 17.817 22.2389C18.2209 22.6874 18.7701 22.9182 19.458 22.9182C19.8683 22.9182 20.2028 22.8589 20.4427 22.7335V21.1705H18.9089V19.7261H22.1721V23.7426H22.1658ZM12.9569 24.2768L10.7225 20.7946C10.6783 20.7286 10.6089 20.5835 10.5206 20.3527H10.4953V24.2768H8.76588V16.2637H10.4953V20.0559H10.5206C10.5647 19.9504 10.6342 19.8053 10.7352 19.6074L12.8559 16.2637H14.9136L12.2374 20.0889L15.1408 24.2834H12.9569V24.2768ZM30.9076 30.7533L27.5939 9.57617H3.32512L0.0177385 30.7533C-0.0453794 31.1424 0.061921 31.5447 0.308081 31.8415C0.554241 32.1449 0.914012 32.3163 1.29272 32.3163H29.6453C30.024 32.3163 30.3838 32.1449 30.6299 31.8415C30.8634 31.5381 30.9708 31.1424 30.9076 30.7533Z" fill={color}/>
        </svg>
    );
}
