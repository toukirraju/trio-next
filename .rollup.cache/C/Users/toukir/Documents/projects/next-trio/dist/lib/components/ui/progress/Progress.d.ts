import { type FC } from "react";
export interface ProgressProps {
    color?: "primary" | "info" | "success" | "warning" | "danger";
    contrast?: "default" | "contrast";
    shape?: "straight" | "rounded" | "curved" | "full";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    value?: number;
    max?: number;
    classNames?: string | string[];
}
declare const Progress: FC<ProgressProps>;
export default Progress;
