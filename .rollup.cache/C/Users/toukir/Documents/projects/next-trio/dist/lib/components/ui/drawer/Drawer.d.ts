import { ReactNode } from 'react';
declare const Drawer: ({ children, placement, setIsOpen, isOpen, drawerColor, backdropColor, backdropOpacity, closeOutSide, width }: {
    children: ReactNode;
    placement: "left" | "right" | "bottom" | "top";
    setIsOpen: any;
    isOpen: boolean;
    drawerColor?: string;
    backdropColor?: string;
    backdropOpacity?: number;
    closeOutSide?: boolean;
    width?: string;
}) => import("react").JSX.Element;
export default Drawer;
