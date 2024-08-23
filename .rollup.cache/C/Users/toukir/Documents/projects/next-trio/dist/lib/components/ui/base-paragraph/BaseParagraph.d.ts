import React from 'react';
interface BaseParagraphProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xs' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    as?: 'p';
    lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
    weight?: 'bold' | 'light' | 'normal' | 'medium' | 'semibold' | 'extrabold';
    color?: 'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'info' | 'gray' | 'dark-gray' | 'muted';
    children: React.ReactNode;
    className?: string;
}
declare const BaseParagraph: React.FC<BaseParagraphProps>;
export default BaseParagraph;
