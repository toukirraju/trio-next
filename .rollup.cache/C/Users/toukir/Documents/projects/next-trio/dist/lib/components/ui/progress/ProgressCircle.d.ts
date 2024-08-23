import { type FC } from 'react';
export interface ProgressCircleProps {
    color?: 'none' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
    contrast?: 'default' | 'contrast';
    size?: number;
    value?: number;
    max?: number;
    thickness?: number;
    classNames?: string | string[];
}
declare const ProgressCircle: FC<ProgressCircleProps>;
export default ProgressCircle;
