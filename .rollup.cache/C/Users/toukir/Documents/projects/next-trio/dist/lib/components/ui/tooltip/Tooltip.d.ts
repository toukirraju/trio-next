import { ReactNode } from 'react';
import { ReferenceType, Placement } from '@floating-ui/react';
export interface RenderOpenerProps extends Record<string, unknown> {
    ref: (node: ReferenceType | null) => void;
}
interface TooltipProps {
    content?: ReactNode;
    placement?: Placement;
    indicatorArrow?: boolean;
    children: ReactNode;
    trigger?: 'hover' | 'click' | 'focus';
    className?: string;
    arrowColor?: string;
}
export declare const Tooltip: ({ indicatorArrow, content, children, placement, trigger, className, arrowColor, }: TooltipProps) => import("react").JSX.Element;
export {};
