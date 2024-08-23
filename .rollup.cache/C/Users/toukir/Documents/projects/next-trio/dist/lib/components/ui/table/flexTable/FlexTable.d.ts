import React from 'react';
type FlexTableProps = {
    header?: React.ReactNode;
    body: React.ReactNode;
    rowgap?: 'none' | 'sm' | 'md' | 'lg';
};
declare const FlexTable: ({ header, body, rowgap }: FlexTableProps) => React.JSX.Element;
export default FlexTable;
