export interface NavMenuItem {
    name: string;
    url: string;
}

export interface IconProps {
    size?: number;
    color?: string;
    onClick?: () => void;
}