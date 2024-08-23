import React, { type FC } from 'react';
interface ToggleBoxProps {
    isToggle?: boolean;
    open?: boolean;
    title?: string;
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved';
    color?: 'default' | 'contrast' | 'muted' | 'mutedContrast' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
    growOnExpand?: boolean;
    spaced?: 'sm' | 'md' | 'lg' | 'none';
    header?: React.ReactNode;
    children: React.ReactNode;
    classes?: {
        container?: string;
        header?: string;
    };
}
declare const ToggleBox: FC<ToggleBoxProps>;
export default ToggleBox;
