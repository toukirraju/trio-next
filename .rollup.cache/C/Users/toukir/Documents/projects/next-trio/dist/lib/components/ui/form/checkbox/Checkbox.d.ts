import React, { type FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { checkboxVariants } from '../../variants/checkbox-variants';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>, VariantProps<typeof checkboxVariants> {
    label?: string;
    icon?: string;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
