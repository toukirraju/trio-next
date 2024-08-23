import React, { type FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { tagVariants } from '../variants/tag-variants';
interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof tagVariants> {
    children: React.ReactNode;
}
declare const Tag: FC<TagProps>;
export default Tag;
