import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useFloating, autoUpdate, offset, flip, shift, useClick, useDismiss, useRole, useInteractions, useMergeRefs, FloatingPortal, FloatingFocusManager, useId, FloatingArrow, arrow, } from "@floating-ui/react";
export function usePopover({ initialOpen = false, placement = "bottom", modal, open: controlledOpen, onOpenChange: setControlledOpen, arrowFill, indicatorArrow, } = {}) {
    const arrowRef = React.useRef(null);
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
    const [labelId, setLabelId] = React.useState();
    const [descriptionId, setDescriptionId] = React.useState();
    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;
    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({
                crossAxis: placement.includes("-"),
                fallbackAxisSideDirection: "end",
                padding: 5,
            }),
            shift({ padding: 5 }),
            arrow({
                element: arrowRef,
            }),
        ],
    });
    const context = data.context;
    const click = useClick(context, {
        enabled: controlledOpen == null,
    });
    const dismiss = useDismiss(context);
    const role = useRole(context);
    const interactions = useInteractions([click, dismiss, role]);
    return React.useMemo(() => ({
        open,
        setOpen,
        ...interactions,
        ...data,
        modal,
        labelId,
        descriptionId,
        setLabelId,
        setDescriptionId,
        arrowRef, // Make sure arrowRef is included in the returned object
        arrowFill,
        indicatorArrow,
        onOpenChange: setOpen,
        events: context.events,
        dataRef: context.dataRef,
        nodeId: context.nodeId,
        floatingId: context.floatingId,
    }), [
        open,
        setOpen,
        interactions,
        data,
        modal,
        labelId,
        descriptionId,
        arrowFill,
        indicatorArrow,
    ]);
}
const PopoverContext = React.createContext(null);
export const usePopoverContext = () => {
    const context = React.useContext(PopoverContext);
    if (context == null) {
        throw new Error("Popover components must be wrapped in <Popover />");
    }
    return context;
};
export function Popover({ children, modal = false, ...restOptions }) {
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    const popover = usePopover({ modal, ...restOptions });
    return (_jsx(PopoverContext.Provider, { value: popover, children: children }));
}
export const PopoverTrigger = React.forwardRef(function PopoverTrigger({ children, asChild = false, ...props }, propRef) {
    const context = usePopoverContext();
    const childrenRef = children.ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);
    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, context.getReferenceProps({
            ref,
            ...props,
            ...children.props,
            "data-state": context.open ? "open" : "closed",
        }));
    }
    return (_jsx("button", { ref: ref, type: "button", "data-state": context.open ? "open" : "closed", ...context.getReferenceProps(props), children: children }));
});
export const PopoverContent = React.forwardRef(function PopoverContent({ style, ...props }, propRef) {
    const { context: floatingContext, arrowRef, arrowFill, indicatorArrow, ...context } = usePopoverContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
    if (!floatingContext.open)
        return null;
    return (_jsx(FloatingPortal, { children: _jsx(FloatingFocusManager, { context: floatingContext, modal: context.modal, children: _jsxs("div", { ref: ref, style: { ...context.floatingStyles, ...style }, "aria-labelledby": context.labelId, "aria-describedby": context.descriptionId, ...context.getFloatingProps(props), children: [
                    // If the user wants to show the arrow, we render it here
                    indicatorArrow && (_jsx(FloatingArrow, { ref: arrowRef, context: context, fill: arrowFill || "white" })), props.children] }) }) }));
});
export const PopoverHeading = React.forwardRef(function PopoverHeading(props, ref) {
    const { setLabelId } = usePopoverContext();
    const id = useId();
    // Only sets `aria-labelledby` on the Popover root element
    // if this component is mounted inside it.
    React.useLayoutEffect(() => {
        setLabelId(id);
        return () => setLabelId(undefined);
    }, [id, setLabelId]);
    return (_jsx("h2", { ...props, ref: ref, id: id, children: props.children }));
});
export const PopoverDescription = React.forwardRef(function PopoverDescription(props, ref) {
    const { setDescriptionId } = usePopoverContext();
    const id = useId();
    // Only sets `aria-describedby` on the Popover root element
    // if this component is mounted inside it.
    React.useLayoutEffect(() => {
        setDescriptionId(id);
        return () => setDescriptionId(undefined);
    }, [id, setDescriptionId]);
    return _jsx("p", { ...props, ref: ref, id: id });
});
export const PopoverClose = React.forwardRef(function PopoverClose(props, ref) {
    const { setOpen } = usePopoverContext();
    return (_jsx("button", { type: "button", ref: ref, ...props, onClick: (event) => {
            props.onClick?.(event);
            setOpen(false);
        } }));
});
//# sourceMappingURL=Popover.js.map