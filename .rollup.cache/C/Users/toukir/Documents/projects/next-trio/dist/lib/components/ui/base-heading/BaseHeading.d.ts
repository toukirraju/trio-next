import React from 'react';
interface BaseHeadingProps {
    size?: 'sm' | 'md' | 'lg' | 'xs' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
    weight?: 'bold' | 'light' | 'normal' | 'medium' | 'semibold' | 'extrabold';
    color?: 'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'info' | 'gray' | 'dark-gray' | 'muted';
    children: React.ReactNode;
    className?: string;
}
declare const BaseHeading: React.FC<BaseHeadingProps>;
export default BaseHeading;
