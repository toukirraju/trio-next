import { type InputHTMLAttributes, type FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { inputVariants } from '../../variants/input-variants';
interface ComboBoxItem {
    id?: string;
    name: string;
    icon?: string;
    image?: string;
}
export interface ComboBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>, VariantProps<typeof inputVariants> {
    label?: string;
    multiple?: boolean;
    error?: string;
    value?: any;
    selected: any;
    setSelected: any;
    disabled?: boolean;
    loading?: boolean;
    items?: ComboBoxItem[] | any[];
    classNames?: string;
}
declare const ComboBox: FC<ComboBoxProps>;
export default ComboBox;
