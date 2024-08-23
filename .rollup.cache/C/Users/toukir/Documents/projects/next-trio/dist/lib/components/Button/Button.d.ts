import React, { type ButtonHTMLAttributes, type FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../variants/button-variants';
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, VariantProps<typeof buttonVariants> {
    children?: React.ReactNode;
    loading?: boolean;
}
declare const Button: FC<ButtonProps>;
export default Button;
