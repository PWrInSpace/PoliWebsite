import React from 'react';
import { AdvancedIconProps } from '../../utils/interfaces/Contract';

export default function SmallLengthIcon(props: AdvancedIconProps) {
    const height = props.size?.height ?? 43;
    const width = props.size?.width ?? 29;
    const color = props.color ?? 'white';

    return (
        <svg width={width} height={height} viewBox="0 0 33 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.21248 44.2354C1.45464 44.8566 2.05072 45.29 2.74304 45.3476C3.43536 45.4068 4.10285 45.0814 4.45833 44.5105C5.50768 42.8186 7.13759 40.9166 9.47379 40.0307C7.37198 35.604 6.12239 31.6625 5.38349 28.4561C2.60178 30.398 -2.27863 35.3038 1.21248 44.2354Z" fill={color}/>
            <path d="M26.8101 28.4795C26.0681 31.68 24.8216 35.6171 22.7183 40.0363C25.0374 40.9297 26.6564 42.8242 27.7027 44.5059C28.0566 45.0797 28.7241 45.4007 29.4164 45.343C30.1087 45.2823 30.7033 44.849 30.9454 44.2278C34.4195 35.3435 29.5918 30.4451 26.8101 28.4795Z" fill={color}/>
            <path d="M25.9873 19.7727C26.0913 9.9315 20.4533 3.34998 17.5707 0.633073C17.1361 0.223392 16.5446 -0.00437335 15.9299 6.36312e-05C15.3183 0.0059796 14.7331 0.244098 14.3047 0.662653C11.5121 3.39435 6.10236 9.967 6.20482 19.7712C6.20482 19.7712 5.68945 28.8286 12.1532 41.2669H16.0293H16.1628H20.0389C26.5011 28.8286 25.9873 19.7727 25.9873 19.7727ZM13.5177 11.8453C13.423 11.9932 11.7356 14.7308 12.4388 19.0599C12.5956 20.033 11.894 20.9426 10.8726 21.0935C10.7779 21.1068 10.6832 21.1142 10.5869 21.1142C9.6804 21.1142 8.88408 20.4856 8.74126 19.6056C7.80989 13.8671 10.2454 10.1105 10.3479 9.95369C10.9005 9.12249 12.057 8.87402 12.9294 9.39907C13.794 9.92115 14.061 11.0156 13.5177 11.8453ZM15.16 3.44464C16.3087 3.44464 17.2416 4.33204 17.2416 5.42945C17.2416 6.52686 16.3071 7.41574 15.16 7.41574C14.0066 7.41574 13.0737 6.52686 13.0737 5.42945C13.0737 4.33204 14.0066 3.44464 15.16 3.44464Z" fill={color}/>
            <path d="M21.7977 43.3804H10.5374V46.6312H21.7977V43.3804Z" fill={color}/>
        </svg>
    );
}
