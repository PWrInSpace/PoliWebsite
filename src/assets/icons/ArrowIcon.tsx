import React from "react";
import { IconProps } from "../../common/interfaces/Contract";

export default function ArrowIcon(props: IconProps) {
  const size = props.size ?? 104;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={52} cy={52} r={51.25} stroke="white" strokeWidth={1.5} />
      <path
        d="M52.2922 32.1348V72.4494M52.2922 72.4494L60.7641 63.9775M52.2922 72.4494L43.8203 63.9775"
        stroke="white"
        strokeWidth={1.5}
      />
    </svg>
  );
}
