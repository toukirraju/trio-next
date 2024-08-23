import React from 'react';
type TableCellProps = {
    type?: 'grow' | 'shrink' | 'stable';
    light?: boolean;
    clamp?: false | 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    label?: string;
    className?: string;
    border?: boolean;
};
declare const FlexTableCell: ({ type, light, clamp, children, label, className, border }: TableCellProps) => React.JSX.Element;
export default FlexTableCell;
