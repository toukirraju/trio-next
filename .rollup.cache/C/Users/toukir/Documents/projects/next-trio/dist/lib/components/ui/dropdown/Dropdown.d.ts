import React, { type FC } from 'react';
export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title: string;
    toggleIcon?: string;
    toggleImage?: React.ReactNode;
    indicator?: boolean;
    showAll?: string;
    toggleClassNames?: string;
    indicatorClasses?: string;
    orientation?: 'start' | 'end';
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved';
}
declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
