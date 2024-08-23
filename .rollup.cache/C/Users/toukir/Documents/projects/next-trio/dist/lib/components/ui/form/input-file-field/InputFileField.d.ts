import React, { type FC } from 'react';
export interface InputFileFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    value?: string;
    acceptedFileTypes?: string[] | null;
    label: string;
    maxFileSize?: number;
    color?: 'default' | 'contrast' | 'muted' | 'mutedContrast';
    shape?: 'smooth' | 'rounded' | 'curved' | 'full';
}
declare const InputFileField: FC<InputFileFieldProps>;
export default InputFileField;
