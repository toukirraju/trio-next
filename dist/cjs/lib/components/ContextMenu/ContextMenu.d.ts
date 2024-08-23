import React from "react";
type ContextMenuProps = {
    children: React.ReactElement;
    menuItems: React.ReactElement[];
    arrowFill?: string;
    indicatorArrow?: boolean;
};
declare const ContextMenu: ({ children, menuItems, arrowFill, indicatorArrow, }: ContextMenuProps) => import("react/jsx-runtime").JSX.Element;
export default ContextMenu;
