import React, { type FC } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { toggleSwitchVariants } from '../../variants/toggle-switch-variants';
interface ToggleSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>, VariantProps<typeof toggleSwitchVariants> {
    checked?: boolean;
    startIcon?: string;
    endIcon?: string;
    startColor?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
    endColor?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
}
declare const AdvancedToggleSwitch: FC<ToggleSwitchProps>;
export default AdvancedToggleSwitch;
