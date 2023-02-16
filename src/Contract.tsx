export interface NavMenuItem {
    name: string;
    url: string;
}

interface BaseIconProps<T, U> {
    size?: T;
    color?: U;
    onClick?: () => void;
}

interface IconSize {
    width?: number;
    height?: number;
}

interface IconColor {
    primaryColor?: string;
    secondaryColor?: string;
}

interface IconText {
    text: string;
}

// Icons that only require one size value.
export interface IconProps extends BaseIconProps<number, string> {}

// Icons that only require one size value and text.
export interface IconPropsWithText extends BaseIconProps<number, string>, IconText {}

// Icons that only require one size value AND a secondary color.
export interface IconPropsWithColor extends BaseIconProps<number, IconColor> {}

// Icons that require both width and height.
export interface AdvancedIconProps extends BaseIconProps<IconSize, string> {}

// Icons that require both width and height AND a secondary color.
export interface AdvancedIconPropsWithColor extends BaseIconProps<IconSize, IconColor> {}