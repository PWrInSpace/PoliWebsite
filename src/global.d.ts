declare module "*.scss";

declare module "*.svg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.mp4";

interface Window {
    __: (...args: [string]) => string;
    classes: (...args: string[]) => string;
}

declare const __: (...args: [string]) => string;
declare const classes: (...args: string[]) => string;
