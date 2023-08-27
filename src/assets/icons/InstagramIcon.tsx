import React from "react";
import { AdvancedIconPropsWithColor } from "../../common/interfaces/Contract";

export default function InstagramIcon(props: AdvancedIconPropsWithColor) {
  const width = props.size?.width ?? 33;
  const height = props.size?.height ?? 34;
  const color = props.color?.primaryColor ?? "white";
  const secondaryColor = props.color?.secondaryColor ?? "black";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      <path
        d="M33 16.8477C33 25.9586 25.6122 33.3453 16.5009 33.3453C7.38773 33.3453 0 25.9586 0 16.8477C0 7.7358 7.38773 0.350067 16.5009 0.350067C25.6122 0.350067 33 7.7358 33 16.8477Z"
        fill={secondaryColor}
      />
      <path
        d="M21.621 10.6062C20.9942 10.6062 20.4868 11.1144 20.4868 11.7402C20.4868 12.3668 20.9942 12.8741 21.621 12.8741C22.2477 12.8741 22.7551 12.3668 22.7551 11.7402C22.7551 11.1144 22.2477 10.6062 21.621 10.6062Z"
        fill={color}
      />
      <path
        d="M16.5814 19.876C14.898 19.876 13.5288 18.507 13.5288 16.8247C13.5288 15.1424 14.898 13.7734 16.5814 13.7734C18.264 13.7734 19.6322 15.1424 19.6322 16.8247C19.6322 18.507 18.264 19.876 16.5814 19.876ZM16.5814 12.0613C13.9541 12.0613 11.8164 14.1977 11.8164 16.8247C11.8164 19.4517 13.9541 21.5881 16.5814 21.5881C19.2079 21.5881 21.3456 19.4517 21.3456 16.8247C21.3456 14.1977 19.2079 12.0613 16.5814 12.0613Z"
        fill={color}
      />
      <path
        d="M12.6377 8.9724C10.4375 8.9724 8.64774 10.762 8.64774 12.9628V20.6861C8.64774 22.886 10.4375 24.6764 12.6377 24.6764H20.3622C22.5633 24.6764 24.354 22.886 24.354 20.6861V12.9628C24.354 10.762 22.5633 8.9724 20.3622 8.9724H12.6377ZM20.3622 26.4958H12.6377C9.43396 26.4958 6.82715 23.8894 6.82715 20.6861V12.9628C6.82715 9.75947 9.43396 7.153 12.6377 7.153H20.3622C23.5659 7.153 26.1736 9.75947 26.1736 12.9628V20.6861C26.1736 23.8894 23.5659 26.4958 20.3622 26.4958Z"
        fill={color}
      />
    </svg>
  );
}
