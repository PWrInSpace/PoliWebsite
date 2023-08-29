import React from "react";

export interface NavMenuItem {
  name: string;
  url: string;
  component: () => React.ReactElement;
}

interface BaseIconProps<T, U> {
  size?: T;
  color?: U;
}

interface IconSize {
  width?: number;
  height?: number;
}

interface IconColor {
  primaryColor?: string;
  secondaryColor?: string;
}

// Icons that only require one size value.
export interface IconProps extends BaseIconProps<number | string, string> {}

// Icons that only require one size value AND a secondary color.
export interface IconPropsWithColor extends BaseIconProps<number, IconColor> {}

// Icons that require both width and height.
export interface AdvancedIconProps extends BaseIconProps<IconSize, string> {}

// Icons that require both width and height AND a secondary color.
export interface AdvancedIconPropsWithColor
  extends BaseIconProps<IconSize, IconColor> {}
