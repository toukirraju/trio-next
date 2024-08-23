import React from 'react';
type FlexTableHeadingProps = {
    type?: 'grow' | 'shrink' | 'stable';
    children: React.ReactNode;
    className?: string;
    border?: boolean;
};
declare const FlexTableHeading: ({ type, children, className, border }: FlexTableHeadingProps) => React.JSX.Element;
export default FlexTableHeading;
