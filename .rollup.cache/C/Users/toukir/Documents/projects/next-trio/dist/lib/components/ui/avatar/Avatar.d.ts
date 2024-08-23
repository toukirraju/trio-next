import React, { type FC } from 'react';
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    overlaps?: boolean;
    src?: string;
    alt?: string;
    size?: Sizes;
    text?: string;
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full';
    mask?: 'hex' | 'hexed' | 'blob' | 'deca' | 'diamond';
    color?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'yellow' | 'violet';
    children?: React.ReactNode;
}
export type Sizes = keyof typeof sizes;
export declare const sizes: {
    xl: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
    xxs: number;
    xxxs: number;
};
export declare const styles: Record<Sizes, string>;
declare const Avatar: FC<AvatarProps>;
export default Avatar;
