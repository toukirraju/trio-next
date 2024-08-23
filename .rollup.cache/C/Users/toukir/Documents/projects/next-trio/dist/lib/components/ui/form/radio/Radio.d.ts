import React, { type FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { radioVariants } from '../../variants/radio-variants';
interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>, VariantProps<typeof radioVariants> {
    label: string;
}
declare const Radio: FC<RadioProps>;
export default Radio;
