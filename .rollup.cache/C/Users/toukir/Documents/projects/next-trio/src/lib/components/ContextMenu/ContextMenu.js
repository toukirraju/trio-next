import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// ContextMenu.js
import React, { useRef } from "react";
import { useFloating, offset, flip, shift, arrow, autoUpdate, useInteractions, useDismiss, FloatingArrow, } from "@floating-ui/react";
const ContextMenu = ({ children, menuItems, arrowFill, indicatorArrow, }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const arrowRef = useRef(null);
    const { x, y, refs, strategy, context } = useFloating({
        middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
        whileElementsMounted: autoUpdate,
        open: isOpen,
        onOpenChange: setIsOpen,
    });
    const dismiss = useDismiss(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);
    const handleContextMenu = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };
    return (_jsxs(_Fragment, { children: [React.cloneElement(children, getReferenceProps({
                ref: refs.setReference,
                onContextMenu: handleContextMenu,
            })), isOpen && (_jsx("div", { ref: refs.setFloating, style: {
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    width: "max-content",
                    zIndex: 1000,
                }, ...getFloatingProps(), children: _jsxs("div", { className: "bg-primary-200 dark:bg-primary-700 shadow-md rounded-md p-2 relative", children: [React.Children.map(menuItems, (item) => React.cloneElement(item, {
                            onClick: () => {
                                if (item.props && typeof item.props.onClick === "function") {
                                    item.props.onClick();
                                }
                                setIsOpen(false);
                            },
                        })), indicatorArrow && (_jsx(FloatingArrow, { ref: arrowRef, context: context, fill: arrowFill || "white" }))] }) }))] }));
};
export default ContextMenu;
//# sourceMappingURL=ContextMenu.js.map