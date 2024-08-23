import React, { type FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { toggleSwitchVariants } from '../../variants/toggle-switch-variants';
interface ToggleSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>, VariantProps<typeof toggleSwitchVariants> {
    checked?: boolean;
    label?: string;
    sublabel?: string;
}
declare const ToggleSwitch: FC<ToggleSwitchProps>;
export default ToggleSwitch;
