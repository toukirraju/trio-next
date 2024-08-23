import { type FC, type TextareaHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { textareaVariants } from '../../variants/textarea-variants';
interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'>, VariantProps<typeof textareaVariants> {
    label?: string;
    error?: string;
    resize?: boolean;
    loading?: boolean;
    formik?: any;
}
declare const Textarea: FC<TextAreaProps>;
export default Textarea;
