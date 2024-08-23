import React, { type FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { iconboxVariants } from '../variants/iconbox-variants';
interface IconBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof iconboxVariants> {
    icon: string;
    iconClasses?: string;
    mask?: 'hex' | 'hexed' | 'blob' | 'deca' | 'diamond';
}
declare const IconBox: FC<IconBoxProps>;
export default IconBox;
