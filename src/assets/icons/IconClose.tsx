import React from "react";
import { IconProps } from "../../common/interfaces/SharedInterfaces";

export const IconClose = (props: IconProps) => {
  const size = props.size ?? 24;
  const color = props.color ?? "black";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
    >
      <path d="M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z" />
      <path d="M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z" />
    </svg>
  );
};
