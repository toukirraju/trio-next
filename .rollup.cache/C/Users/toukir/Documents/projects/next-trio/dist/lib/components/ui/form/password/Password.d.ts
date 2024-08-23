import { type FC, type InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { inputVariants } from '../../variants/input-variants';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>, VariantProps<typeof inputVariants> {
    icon?: string;
    label?: string;
    addon?: string;
    formik?: any;
    error?: string;
    loading?: boolean;
}
declare const Password: FC<InputProps>;
export default Password;
