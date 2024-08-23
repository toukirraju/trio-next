import { type ButtonHTMLAttributes, type FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { inputVariants } from '../../variants/input-variants';
interface ListboxItem {
    id?: string;
    name: string;
    icon?: string;
    image?: string;
}
export interface ListboxProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'color'>, VariantProps<typeof inputVariants> {
    label?: string;
    multiple?: boolean;
    error?: string;
    value?: any;
    selected?: any;
    setSelected?: any;
    disabled?: boolean;
    items?: ListboxItem[] | any[];
    classNames?: string;
    loading?: boolean;
}
declare const ListBox: FC<ListboxProps>;
export default ListBox;
