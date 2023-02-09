export interface NavMenuItem {
    name: string;
    url: string;
}

export interface IconProps {
    height?: number;
    width?: number;
    color?: string;
    secondaryColor?: string;
    onClick?: () => void;
}