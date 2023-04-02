import React from 'react';
import { AdvancedIconProps } from '../../utils/interfaces/Contract';

export default function IconLogo(props: AdvancedIconProps) {
    const height = props.size?.height ?? 42;
    const width = props.size?.width ?? 116;
    const color = props.color ?? 'white';

    return (
        <svg width={width} height={height} viewBox="0 0 116 42" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}>
            <path d="M37.752 29.6432V18.3122L38.3613 19.1811C40.3346 21.9977 43.4677 23.5236 46.9013 23.3414C48.5691 23.2526 49.4282 23.0273 50.9006 22.2903C52.2758 21.6021 53.7689 20.2809 54.6367 18.9836L55.1847 18.1651V40.9741H53.8056V32.4279H52.0533L52.0198 35.9631L51.9871 39.4994L49.118 35.9631L46.2489 32.4279H43.6463V40.9741H40.7613V32.4279H39.0057V40.9741H37.752V29.6432ZM45.402 37.4299C45.402 35.4804 45.4497 33.9394 45.5079 34.0049C45.5661 34.0704 46.5074 35.2271 47.5984 36.5756C48.6904 37.923 49.946 39.4642 50.3887 40.0005L51.1934 40.9741H45.402V37.4299ZM41.6555 19.8747C41.2638 19.4823 41.4521 19.153 42.3765 18.6118C45.1961 16.9621 45.9586 16.5912 46.5281 16.5936C47.7604 16.5977 47.8857 16.7823 47.2866 17.7174C46.9166 18.2963 46.8999 18.3049 44.684 19.1291C41.768 20.2138 41.9491 20.169 41.6555 19.8747ZM41.4137 18.5776C41.1952 18.3585 41.2263 18.1539 41.5575 17.6263C42.576 16.0014 43.9103 13.5147 43.8626 13.3309C43.8313 13.2118 43.9071 12.9217 44.03 12.6851L44.2542 12.2558L44.1848 12.7889C43.9765 14.3835 45.2488 15.8367 46.8527 15.8384H47.4716L47.0929 16.0702C46.8846 16.1973 46.5138 16.3395 46.2689 16.3851C46.0233 16.4314 44.9113 16.9773 43.7962 17.5983C42.6819 18.2202 41.7241 18.7286 41.6675 18.7286C41.6107 18.7286 41.4968 18.6607 41.4137 18.5776ZM40.1216 17.9325C40.0093 17.6863 40.1304 17.2803 40.8771 15.3876C41.3659 14.1486 41.8078 13.0735 41.8597 12.9984C41.9107 12.9225 42.2274 12.6522 42.5631 12.3972C43.3033 11.8353 43.4572 11.9113 43.5802 12.9008L43.6678 13.6018L42.576 15.505C41.9752 16.5521 41.3467 17.5928 41.1793 17.8175C40.806 18.3169 40.3203 18.3697 40.1216 17.9325ZM45.7672 15.2941C45.4626 15.1332 45.0446 14.76 44.838 14.466C44.4974 13.9816 44.4615 13.8376 44.4615 12.9448C44.4615 12.1455 44.5109 11.893 44.7224 11.6051C45.0134 11.208 47.1807 10.0682 48.9767 9.36801C50.4126 8.80755 50.8935 8.70769 50.9868 8.9516C51.1471 9.36964 50.3799 11.6972 49.3557 13.9008C48.8724 14.9407 48.7733 15.0686 48.2653 15.3147C47.4957 15.688 46.4962 15.68 45.7672 15.2941ZM54.8496 8.31932C53.6819 6.26819 51.3386 4.54015 48.8515 3.89355C47.4582 3.53137 45.3429 3.53464 43.963 3.90071C42.9723 4.16365 41.5717 4.79511 40.8316 5.31301C40.0793 5.83991 38.7106 7.23932 38.2353 7.96921L37.752 8.71178V0H55.1847V4.39937C55.1847 6.81903 55.171 8.79813 55.1535 8.79731C55.1361 8.7965 54.9997 8.58062 54.8496 8.31768V8.31932Z" fill={color}/>
            <path d="M60.6095 41.1325C58.9584 40.9966 57.3257 40.4667 56.2792 39.728L55.9323 39.4826L56.3351 38.959C56.5567 38.6705 56.7537 38.4125 56.7737 38.3853C56.7938 38.358 57.2499 38.5363 57.7875 38.7824C59.3668 39.5066 60.1764 39.6785 62.0196 39.684C63.2735 39.6865 63.8008 39.6361 64.3025 39.462C65.8306 38.932 66.212 37.446 64.9836 36.8099C64.5991 36.6108 63.248 36.415 61.455 36.2983C58.5214 36.108 57.096 35.6493 56.5808 34.7307C56.0901 33.8564 56.3278 32.4408 57.08 31.7518C57.5491 31.3225 58.5604 30.8679 59.4147 30.7007C60.6374 30.4617 63.5559 30.6039 64.6535 30.9556C65.6338 31.2697 66.6594 31.7582 66.7926 31.974C66.8422 32.053 66.6657 32.3305 66.3899 32.6071L65.8992 33.0978L65.1494 32.7925C63.7505 32.2235 62.8539 32.0467 61.3296 32.0428C60.537 32.0403 59.65 32.1075 59.3604 32.1922C58.637 32.4031 58.0691 32.9028 58.0691 33.328C58.0691 34.2177 58.8332 34.5269 61.5179 34.7268C64.5761 34.9537 65.9272 35.2695 66.7297 35.9466C67.4315 36.5379 67.6932 37.4268 67.4707 38.4667C67.0439 40.4587 64.4891 41.4513 60.6095 41.1317V41.1325ZM96.9098 40.9486C95.3866 40.5289 94.0816 39.497 93.5264 38.2742C93.1252 37.3885 93.1405 35.7722 93.5583 34.9163C94.4365 33.1171 96.3779 32.0882 98.8927 32.0882C100.258 32.0882 101.089 32.2714 102.139 32.8036C102.711 33.0946 103.972 34.1537 103.972 34.3448C103.972 34.3919 103.658 34.5294 103.273 34.6509L102.575 34.8715L101.916 34.4166C101.047 33.8173 100.24 33.5805 99.0181 33.5695C97.154 33.5511 95.8666 34.1746 95.2645 35.3847C94.2635 37.3988 95.6633 39.3556 98.3377 39.6817C99.6409 39.8407 101.282 39.3867 102.254 38.5987L102.605 38.3141L103.296 38.6762L103.986 39.039L103.523 39.5138C102.95 40.102 101.869 40.6903 100.894 40.9447C99.9903 41.1804 97.7603 41.1829 96.9098 40.9494V40.9486ZM69.9838 36.6754V32.3393H73.8261C76.502 32.3393 77.8246 32.3864 78.1841 32.4936C78.9762 32.7309 79.7068 33.5374 79.8959 34.3814C80.1846 35.6771 79.6949 36.8113 78.5903 37.4037C78.1069 37.6634 77.8676 37.685 74.8748 37.7434L71.6772 37.8066L71.6072 41.0118H69.9838V36.6754ZM77.8946 35.8682C78.489 35.2728 78.3685 34.4166 77.6371 34.0379C77.3419 33.8844 76.7199 33.8476 74.4426 33.8476H71.6143V36.2359H77.5279L77.8946 35.8682ZM80.554 40.9175C80.5819 40.8655 81.6386 38.9144 82.9038 36.5811L85.2032 32.3393L86.2785 32.3418L87.3545 32.344L89.6429 36.5899C90.9023 38.9255 91.9321 40.8751 91.9321 40.923C91.9321 40.9711 91.5419 41.0102 91.0643 41.0102H90.1971L89.2192 39.1878L86.2729 39.1542L83.3265 39.1199L82.8319 40.0638L82.3374 41.0069L81.421 41.0085C80.9168 41.0085 80.5268 40.967 80.554 40.9158V40.9175ZM88.2948 37.5467C88.2948 37.4061 86.3487 33.8517 86.2713 33.8492C86.1796 33.8467 84.2813 37.3366 84.2813 37.5068C84.2813 37.5676 85.1842 37.6179 86.288 37.6179C87.3919 37.6179 88.2948 37.586 88.2948 37.5467ZM106.481 36.6754V32.3393H115.51V33.8476H108.111V35.7332H113.253V37.2414H108.101L108.137 38.3404L108.174 39.4403L111.967 39.4739L115.762 39.5066V41.0118H106.481V36.6754ZM0 27.8679V23.5229L3.91944 23.5637C7.81274 23.6038 7.84296 23.606 8.45961 23.9187C8.80102 24.0912 9.25228 24.4501 9.46219 24.7155C9.80033 25.1415 9.84893 25.3087 9.88568 26.1607C9.94081 27.449 9.63371 28.0598 8.65094 28.6184L7.96425 29.0087L4.79684 29.0502L1.63026 29.0909V32.2139H0V27.8679ZM7.65081 27.3436C8.43164 26.9528 8.45471 25.8393 7.69308 25.339C7.3868 25.1376 7.03416 25.1129 4.52098 25.1129H1.69335L1.62148 27.5634H4.41644C6.82609 27.5634 7.27184 27.5331 7.65081 27.3436ZM13.4071 31.8676C13.1152 31.1011 10.661 23.754 10.661 23.6461C10.661 23.5829 11.063 23.5469 11.5551 23.5678L12.4501 23.6044L13.4678 27.1446C14.0277 29.0917 14.5143 30.6575 14.5486 30.6248C14.5829 30.592 15.0631 28.999 15.6151 27.0846L16.6176 23.6044H18.6236L19.6286 27.0823C20.1806 28.995 20.6622 30.5904 20.699 30.6264C20.7349 30.6632 21.117 29.4658 21.5462 27.9655C21.976 26.4652 22.4426 24.8563 22.5831 24.3901L22.8383 23.5414H23.71C24.3258 23.5414 24.5811 23.5876 24.5786 23.6987C24.577 23.7851 23.9413 25.7218 23.1652 28.0031L21.7551 32.1506L20.7294 32.1875L19.7044 32.2235L19.4538 31.3706C19.3168 30.9014 18.8574 29.3011 18.4329 27.8145C18.0094 26.3285 17.6474 25.0975 17.629 25.0785C17.6106 25.0601 17.2126 26.3893 16.7453 28.0318C16.277 29.6751 15.8152 31.2882 15.7186 31.6168L15.5424 32.2139H14.5406C13.5636 32.2139 13.5356 32.2042 13.4071 31.8685V31.8676ZM26.4635 27.8679V23.5229L30.3829 23.5637C34.276 23.6038 34.3065 23.606 34.9229 23.9187C35.2643 24.0912 35.7158 24.4501 35.9255 24.7155C36.2638 25.1423 36.3132 25.3101 36.3522 26.1726C36.3882 26.9735 36.3492 27.2397 36.1329 27.6657C35.8912 28.1396 35.1136 28.8175 34.8057 28.8223C34.7355 28.8223 34.5982 28.8742 34.501 28.9366C34.3606 29.0254 34.5513 29.3682 35.4103 30.5728C36.0078 31.4105 36.4966 32.1226 36.4966 32.1547C36.4966 32.1875 36.0819 32.2139 35.5755 32.2139H34.6542L33.5424 30.6424L32.4304 29.0717H28.0938V32.2139H26.4635V27.8679ZM34.1141 27.3436C34.8951 26.9528 34.9182 25.8393 34.1564 25.339C33.8501 25.1376 33.4977 25.1129 30.9843 25.1129H28.1569L28.085 27.5634H30.8797C33.2894 27.5634 33.7353 27.5331 34.1141 27.3436Z" fill={color}/>
        </svg>
    );
}