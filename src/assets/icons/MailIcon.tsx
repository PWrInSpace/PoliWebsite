import React from "react";
import { IconPropsWithColor } from "../../common/interfaces/SharedInterfaces";

export const MailIcon = (props: IconPropsWithColor) => {
  const size = props.size ?? 32;
  const color = props.color?.primaryColor ?? "white";
  const secondaryColor = props.color?.secondaryColor ?? "black";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 15.9991C32 24.834 24.8361 31.9959 15.9991 31.9959C7.1639 31.9959 0 24.834 0 15.9991C0 7.16338 7.1639 0.000541687 15.9991 0.000541687C24.8361 0.000541687 32 7.16338 32 15.9991Z"
        fill={color}
      />
      <path
        d="M26.2868 8.96476C26.2543 9.05066 26.2082 9.13296 26.1449 9.2053L18.8544 17.475C18.1335 18.2943 17.0926 18.7636 16.0009 18.7636C14.9084 18.7636 13.8692 18.2943 13.1466 17.475L5.72861 9.05971C5.71323 9.04253 5.70241 9.02353 5.68975 9.00544C5.46093 9.38434 5.32617 9.82745 5.32617 10.3031V21.6944C5.32617 23.0852 6.45485 24.2128 7.84674 24.2128H24.1552C25.5471 24.2128 26.6748 23.0852 26.6748 21.6944V10.3031C26.6748 9.81117 26.531 9.35269 26.2868 8.96476Z"
        fill={secondaryColor}
      />
      <path
        d="M6.91493 8.08294L14.3321 16.4982C14.7535 16.9766 15.3613 17.2506 15.9998 17.2506C16.6374 17.2506 17.2452 16.9766 17.6666 16.4982L24.9562 8.22853C25.0159 8.16071 25.0873 8.10736 25.1624 8.06486C24.8531 7.93012 24.513 7.85416 24.154 7.85416H7.84558C7.5019 7.85416 7.17451 7.92288 6.87695 8.04768C6.88961 8.05943 6.90317 8.06938 6.91493 8.08294Z"
        fill={secondaryColor}
      />
    </svg>
  );
};
