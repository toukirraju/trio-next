import React, { type FC } from 'react';
interface ExpPopover extends React.HTMLAttributes<HTMLDivElement> {
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
declare const ExpPopover: FC<ExpPopover>;
export default ExpPopover;
