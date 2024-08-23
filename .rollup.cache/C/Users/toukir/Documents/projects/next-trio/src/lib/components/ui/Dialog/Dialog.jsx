import { __assign, __rest } from "tslib";
import * as React from 'react';
import { useFloating, useClick, useDismiss, useRole, useInteractions, useMergeRefs, FloatingPortal, FloatingFocusManager, FloatingOverlay, useId, useTransitionStatus, useTransitionStyles } from '@floating-ui/react';
export function useDialog(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.initialOpen, initialOpen = _c === void 0 ? false : _c, controlledOpen = _b.open, setControlledOpen = _b.onOpenChange;
    var _d = React.useState(initialOpen), uncontrolledOpen = _d[0], setUncontrolledOpen = _d[1];
    var _e = React.useState(), labelId = _e[0], setLabelId = _e[1];
    var _f = React.useState(), descriptionId = _f[0], setDescriptionId = _f[1];
    var open = controlledOpen !== null && controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
    var setOpen = setControlledOpen !== null && setControlledOpen !== void 0 ? setControlledOpen : setUncontrolledOpen;
    var data = useFloating({
        open: open,
        onOpenChange: setOpen
    });
    var context = data.context;
    var click = useClick(context, {
        enabled: controlledOpen == null
    });
    var dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
    var role = useRole(context);
    var interactions = useInteractions([click, dismiss, role]);
    return React.useMemo(function () { return (__assign(__assign(__assign({ open: open, setOpen: setOpen }, interactions), data), { labelId: labelId, descriptionId: descriptionId, setLabelId: setLabelId, setDescriptionId: setDescriptionId })); }, [open, setOpen, interactions, data, labelId, descriptionId]);
}
var DialogContext = React.createContext(null);
export var useDialogContext = function () {
    var context = React.useContext(DialogContext);
    if (context == null) {
        throw new Error('Dialog components must be wrapped in <Dialog />');
    }
    return context;
};
export function Dialog(_a) {
    var children = _a.children, options = __rest(_a, ["children"]);
    var dialog = useDialog(options);
    return <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>;
}
export var DialogTrigger = React.forwardRef(function DialogTrigger(_a, propRef) {
    var children = _a.children, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["children", "asChild"]);
    var context = useDialogContext();
    var childrenRef = children.ref;
    var ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);
    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, context.getReferenceProps(__assign(__assign(__assign({ ref: ref }, props), children.props), { 'data-state': context.open ? 'open' : 'closed' })));
    }
    return (<button type="button" ref={ref} 
    // The user can style the trigger based on the state
    data-state={context.open ? 'open' : 'closed'} {...context.getReferenceProps(props)}>
      {children}
    </button>);
});
export var DialogContent = React.forwardRef(function DialogContent(props, propRef) {
    var _a = useDialogContext(), floatingContext = _a.context, context = __rest(_a, ["context"]);
    var ref = useMergeRefs([context.refs.setFloating, propRef]);
    var _b = useTransitionStatus(floatingContext, {
        duration: 500 // Adjust as needed
    }), isMounted = _b.isMounted, status = _b.status;
    var transitionStyles = useTransitionStyles(floatingContext, {
        duration: 500, // Adjust as needed
        initial: {
            opacity: 0,
            transform: 'scale(1)'
        },
        open: {
            opacity: 1,
            transform: 'scale(1)'
        },
        close: {
            opacity: 0,
            transform: 'scale(0.50)'
        }
    }).styles;
    if (!isMounted)
        return null;
    return (<FloatingPortal>
        <FloatingOverlay className={"grid place-items-center bg-black/50 z-50 transition-opacity duration-300 ".concat(status === 'open' ? 'opacity-100' : 'opacity-0')} lockScroll>
          <FloatingFocusManager context={floatingContext}>
            <div ref={ref} aria-labelledby={context.labelId} aria-describedby={context.descriptionId} style={transitionStyles} {...context.getFloatingProps(props)}>
              {props.children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>);
});
export var DialogHeading = React.forwardRef(function DialogHeading(_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var setLabelId = useDialogContext().setLabelId;
    var id = useId();
    // Only sets `aria-labelledby` on the Dialog root element
    // if this component is mounted inside it.
    React.useLayoutEffect(function () {
        setLabelId(id);
        return function () { return setLabelId(undefined); };
    }, [id, setLabelId]);
    return (<h2 {...props} ref={ref} id={id}>
      {children}
    </h2>);
});
export var DialogDescription = React.forwardRef(function DialogDescription(_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var setDescriptionId = useDialogContext().setDescriptionId;
    var id = useId();
    // Only sets `aria-describedby` on the Dialog root element
    // if this component is mounted inside it.
    React.useLayoutEffect(function () {
        setDescriptionId(id);
        return function () { return setDescriptionId(undefined); };
    }, [id, setDescriptionId]);
    return (<p {...props} ref={ref} id={id}>
      {children}
    </p>);
});
export var DialogClose = React.forwardRef(function DialogClose(props, ref) {
    var setOpen = useDialogContext().setOpen;
    return <button type="button" {...props} ref={ref} onClick={function () { return setOpen(false); }}/>;
});
//# sourceMappingURL=Dialog.jsx.map