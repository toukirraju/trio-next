import React from 'react';
type FlexTableRowProps = {
    rounded?: 'none' | 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    border?: boolean;
    className?: string;
};
declare const FlexTableRow: ({ className, rounded, border, children }: FlexTableRowProps) => React.JSX.Element;
export default FlexTableRow;
