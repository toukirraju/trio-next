import React from 'react';
export interface InputFileProps {
    id: string;
    url: string;
    acceptedFileTypes?: string[];
    maxFileSize?: number;
    allowMultiple?: boolean;
    label?: string;
    labelAlt?: string;
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full';
    color?: 'default' | 'contrast' | 'muted' | 'mutedContrast' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none';
    bordered?: boolean;
    spaced?: boolean;
    responses?: any;
    setResponses?: any;
}
export interface FileStatus {
    name: string;
    progress: number;
    status: 'uploading' | 'success' | 'error';
    message?: string;
}
export default function InputFile(props: InputFileProps): React.JSX.Element;
