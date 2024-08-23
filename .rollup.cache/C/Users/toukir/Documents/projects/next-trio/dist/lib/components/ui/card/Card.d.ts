import React, { type FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cardVariants } from '../variants/card-variants';
interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof cardVariants> {
    children: React.ReactNode;
}
declare const Card: FC<CardProps>;
export default Card;
