import React, { type FC } from 'react';
export interface DropdownActionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    showAll?: string;
    orientation?: 'start' | 'end';
    toggleIcon?: string;
    toggleImage?: React.ReactNode;
}
declare const DropdownAction: FC<DropdownActionProps>;
export default DropdownAction;
