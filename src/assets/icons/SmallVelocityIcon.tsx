import React from "react";
import { IconProps } from "../../common/interfaces/Contract";

export default function SmallVelocityIcon(props: IconProps) {
  const size = props.size ?? 32;
  const color = props.color ?? "white";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8156 0C7.0949 0 0 7.0949 0 15.8156C0 24.5363 7.0949 31.6312 15.8156 31.6312C24.5363 31.6312 31.6312 24.5363 31.6312 15.8156C31.6312 7.0949 24.5363 0 15.8156 0ZM15.8156 2.7002C16.4547 2.7002 16.9729 3.21835 16.9729 3.85746C16.9729 4.49657 16.4547 5.01472 15.8156 5.01472C15.1765 5.01472 14.6583 4.49657 14.6583 3.85746C14.6583 3.21835 15.1765 2.7002 15.8156 2.7002ZM6.03816 22.7968C5.48467 23.1165 4.77693 22.9267 4.45734 22.3733C4.13782 21.8198 4.32742 21.112 4.8809 20.7924C5.43445 20.4728 6.1422 20.6625 6.46166 21.216C6.78124 21.7695 6.59164 22.4773 6.03816 22.7968ZM6.46172 10.4151C6.1422 10.9686 5.43445 11.1583 4.88096 10.8387C4.32748 10.519 4.13788 9.81135 4.4574 9.25787C4.77705 8.70438 5.48474 8.51472 6.03822 8.83431C6.59164 9.15389 6.78124 9.8617 6.46172 10.4151ZM18.9015 24.6878H12.7296V22.3733H18.9015V24.6878ZM17.825 14.6676C18.0188 15.006 18.1301 15.3977 18.1301 15.8156C18.1301 17.0938 17.0938 18.13 15.8157 18.13C14.5375 18.13 13.5011 17.0938 13.5011 15.8156C13.5011 14.5374 14.5374 13.5011 15.8156 13.5011C15.819 13.5011 15.8224 13.5014 15.8258 13.5015L20.2164 5.97465L22.2157 7.14074L17.825 14.6676ZM25.593 8.83437C26.1465 8.51472 26.8543 8.70445 27.1738 9.25793C27.4934 9.81141 27.3038 10.5192 26.7503 10.8387C26.1967 11.1584 25.489 10.9687 25.1695 10.4152C24.8498 9.8617 25.0395 9.15389 25.593 8.83437ZM27.1738 22.3733C26.8541 22.9267 26.1465 23.1164 25.593 22.7968C25.0395 22.4773 24.8499 21.7695 25.1695 21.216C25.489 20.6625 26.1967 20.4729 26.7503 20.7924C27.3037 21.1122 27.4934 21.8198 27.1738 22.3733Z"
        fill={color}
      />
    </svg>
  );
}
