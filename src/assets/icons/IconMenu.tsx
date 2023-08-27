import React from "react";
import { IconProps } from "../../common/interfaces/Contract";

export default function IconMenu(props: IconProps) {
  const size = props.size ?? 24;
  const color = props.color ?? "black";

  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
