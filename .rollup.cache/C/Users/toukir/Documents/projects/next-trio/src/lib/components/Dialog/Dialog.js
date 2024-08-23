import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { useFloating, useClick, useDismiss, useRole, useInteractions, useMergeRefs, FloatingPortal, FloatingFocusManager, FloatingOverlay, useId, } from "@floating-ui/react";
export function useDialog({ initialOpen = false, open: controlledOpen, onOpenChange: setControlledOpen, } = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
    const [labelId, setLabelId] = React.useState();
    const [descriptionId, setDescriptionId] = React.useState();
    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;
    const data = useFloating({
        open,
        onOpenChange: setOpen,
    });
    const context = data.context;
    const click = useClick(context, {
        enabled: controlledOpen == null,
    });
    const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
    const role = useRole(context);
    const interactions = useInteractions([click, dismiss, role]);
    return React.useMemo(() => ({
        open,
        setOpen,
        ...interactions,
        ...data,
        labelId,
        descriptionId,
        setLabelId,
        setDescriptionId,
    }), [open, setOpen, interactions, data, labelId, descriptionId]);
}
const DialogContext = React.createContext(null);
export const useDialogContext = () => {
    const context = React.useContext(DialogContext);
    if (context == null) {
        throw new Error("Dialog components must be wrapped in <Dialog />");
    }
    return context;
};
export function Dialog({ children, ...options }) {
    const dialog = useDialog(options);
    return (_jsx(DialogContext.Provider, { value: dialog, children: children }));
}
export const DialogTrigger = React.forwardRef(function DialogTrigger({ children, asChild = false, ...props }, propRef) {
    const context = useDialogContext();
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
    return (_jsx("button", { ref: ref, "data-state": context.open ? "open" : "closed", ...context.getReferenceProps(props), children: children }));
});
export const DialogContent = React.forwardRef(function DialogContent(props, propRef) {
    const { context: floatingContext, ...context } = useDialogContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
    if (!floatingContext.open)
        return null;
    return (_jsx(FloatingPortal, { children: _jsx(FloatingOverlay, { className: "grid place-items-center bg-black/50 z-50", lockScroll: true, children: _jsx(FloatingFocusManager, { context: floatingContext, children: _jsx("div", { ref: ref, "aria-labelledby": context.labelId, "aria-describedby": context.descriptionId, ...context.getFloatingProps(props), children: props.children }) }) }) }));
});
export const DialogHeading = React.forwardRef(function DialogHeading({ children, ...props }, ref) {
    const { setLabelId } = useDialogContext();
    const id = useId();
    // Only sets `aria-labelledby` on the Dialog root element
    // if this component is mounted inside it.
    React.useLayoutEffect(() => {
        setLabelId(id);
        return () => setLabelId(undefined);
    }, [id, setLabelId]);
    return (_jsx("h2", { ...props, ref: ref, id: id, children: children }));
});
export const DialogDescription = React.forwardRef(function DialogDescription({ children, ...props }, ref) {
    const { setDescriptionId } = useDialogContext();
    const id = useId();
    // Only sets `aria-describedby` on the Dialog root element
    // if this component is mounted inside it.
    React.useLayoutEffect(() => {
        setDescriptionId(id);
        return () => setDescriptionId(undefined);
    }, [id, setDescriptionId]);
    return (_jsx("p", { ...props, ref: ref, id: id, children: children }));
});
export const DialogClose = React.forwardRef(function DialogClose(props, ref) {
    const { setOpen } = useDialogContext();
    return (_jsx("button", { type: "button", ...props, ref: ref, onClick: () => setOpen(false) }));
});
//# sourceMappingURL=Dialog.js.map