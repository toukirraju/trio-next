import { type FC, type SelectHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { selectVariants } from '../../variants/select-variants';
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'color'>, VariantProps<typeof selectVariants> {
    label?: string;
    icon?: string;
    error?: string;
    loading?: boolean;
    options?: string[] | {
        label: string;
        value: string;
    }[];
    availableDataAPI?: string;
    containerClasses?: string;
    formik?: any;
}
declare const Select: FC<SelectProps>;
export default Select;
