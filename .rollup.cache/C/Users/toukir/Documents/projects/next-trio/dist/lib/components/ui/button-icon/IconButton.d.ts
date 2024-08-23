import React, { type ButtonHTMLAttributes, type FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { buttonIconVariants } from '../variants/button-icon-variants';
interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, VariantProps<typeof buttonIconVariants> {
    children?: React.ReactNode;
    loading?: boolean;
}
declare const IconButton: FC<IconButtonProps>;
export default IconButton;
