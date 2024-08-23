import React, { type FC } from 'react';
interface ModalProps {
    open?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    classes?: {
        wrapper?: string | string[];
        backdrop?: string | string[];
        dialog?: string | string[];
    };
    children?: React.ReactNode;
    onBackdropClick?: () => void;
    isClose?: boolean;
    setOpen?: any;
}
declare const Modal: FC<ModalProps>;
export default Modal;
