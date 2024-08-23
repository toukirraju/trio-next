import React, { type FC } from 'react';
export interface ActionItemProps {
    href?: string;
    icon?: string;
    image?: React.ReactNode;
    text: string;
    subtext: string;
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved';
}
declare const ActionItem: FC<ActionItemProps>;
export default ActionItem;
