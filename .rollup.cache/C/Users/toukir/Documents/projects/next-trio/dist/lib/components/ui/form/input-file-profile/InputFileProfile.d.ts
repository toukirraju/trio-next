import React, { type FC } from 'react';
export interface InputFileProfileProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    id: string;
    value?: string;
    preview?: string;
    previewSize?: 'lg' | 'xl';
    previewIcon?: string;
    acceptedFileTypes?: string[] | null;
    color?: 'default' | 'contrast' | 'muted' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
    shape?: 'smooth' | 'rounded' | 'curved' | 'full';
    onRemoveFile?: () => void;
}
declare const InputFileProfile: FC<InputFileProfileProps>;
export default InputFileProfile;
