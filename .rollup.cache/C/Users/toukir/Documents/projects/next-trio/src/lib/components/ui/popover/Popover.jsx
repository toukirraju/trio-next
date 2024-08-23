import { __assign, __rest } from "tslib";
import * as React from "react";
import { useFloating, autoUpdate, offset, flip, shift, useClick, useDismiss, useRole, useInteractions, useMergeRefs, FloatingPortal, FloatingFocusManager, useId, arrow, useTransitionStyles, } from "@floating-ui/react";
import { cn } from "@/utils/cn";
export function usePopover(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.initialOpen, initialOpen = _c === void 0 ? false : _c, _d = _b.placement, placement = _d === void 0 ? "bottom" : _d, modal = _b.modal, controlledOpen = _b.open, setControlledOpen = _b.onOpenChange, indicatorArrow = _b.indicatorArrow, _e = _b.offsetDistance, offsetDistance = _e === void 0 ? 5 : _e;
    var arrowRef = React.useRef(null);
    var _f = React.useState(initialOpen), uncontrolledOpen = _f[0], setUncontrolledOpen = _f[1];
    var _g = React.useState(), labelId = _g[0], setLabelId = _g[1];
    var _h = React.useState(), descriptionId = _h[0], setDescriptionId = _h[1];
    var open = controlledOpen !== null && controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
    var setOpen = setControlledOpen !== null && setControlledOpen !== void 0 ? setControlledOpen : setUncontrolledOpen;
    var data = useFloating({
        placement: placement,
        open: open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(offsetDistance),
            flip({
                crossAxis: placement.includes("-"),
                fallbackAxisSideDirection: "end",
                padding: 5,
            }),
            shift({ padding: 15 }),
            arrow({
                element: arrowRef,
            }),
        ],
    });
    var context = data.context;
    var click = useClick(context, {
        enabled: controlledOpen == null,
    });
    var dismiss = useDismiss(context);
    var role = useRole(context);
    var interactions = useInteractions([click, dismiss, role]);
    return React.useMemo(function () { return (__assign(__assign(__assign({ open: open, setOpen: setOpen }, interactions), data), { modal: modal, labelId: labelId, descriptionId: descriptionId, setLabelId: setLabelId, setDescriptionId: setDescriptionId, arrowRef: arrowRef, // Make sure arrowRef is included in the returned object
        indicatorArrow: indicatorArrow, onOpenChange: setOpen, events: context.events, dataRef: context.dataRef, nodeId: context.nodeId, floatingId: context.floatingId })); }, [
        open,
        setOpen,
        interactions,
        data,
        modal,
        labelId,
        descriptionId,
        indicatorArrow,
    ]);
}
var PopoverContext = React.createContext(null);
export var usePopoverContext = function () {
    var context = React.useContext(PopoverContext);
    if (context == null) {
        throw new Error("Popover components must be wrapped in <Popover />");
    }
    return context;
};
export function Popover(_a) {
    var children = _a.children, _b = _a.modal, modal = _b === void 0 ? false : _b, restOptions = __rest(_a, ["children", "modal"]);
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    var popover = usePopover(__assign({ modal: modal }, restOptions));
    return (<PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>);
}
export var PopoverTrigger = React.forwardRef(function PopoverTrigger(_a, propRef) {
    var children = _a.children, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["children", "asChild"]);
    var context = usePopoverContext();
    var childrenRef = children.ref;
    var ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);
    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, context.getReferenceProps(__assign(__assign(__assign({ ref: ref }, props), children.props), { "data-state": context.open ? "open" : "closed" })));
    }
    return (<button ref={ref} type="button" 
    // The user can style the trigger based on the state
    data-state={context.open ? "open" : "closed"} {...context.getReferenceProps(props)}>
      {children}
    </button>);
});
export var PopoverContent = React.forwardRef(function PopoverContent(_a, propRef) {
    var _b;
    var style = _a.style, props = __rest(_a, ["style"]);
    var _c = usePopoverContext(), floatingContext = _c.context, refs = _c.refs, x = _c.x, y = _c.y, strategy = _c.strategy, actualPlacement = _c.placement, _d = _c.middlewareData.arrow, _e = _d === void 0 ? {} : _d, arrowX = _e.x, arrowY = _e.y, arrowRef = _c.arrowRef, indicatorArrow = _c.indicatorArrow, context = __rest(_c, ["context", "refs", "x", "y", "strategy", "placement", "middlewareData", "arrowRef", "indicatorArrow"]);
    // Add this line to use the transition styles
    var _f = useTransitionStyles(floatingContext, {
        initial: {
            opacity: 0,
            transform: 'scale(0.7)',
        },
        open: {
            opacity: 1,
            transform: 'scale(1)',
        },
        close: {
            opacity: 0,
            transform: 'scale(0.8)',
        },
    }), isMounted = _f.isMounted, transitionStyles = _f.styles;
    var ref = useMergeRefs([refs.setFloating, propRef]);
    if (!isMounted)
        return null;
    if (!floatingContext.open)
        return null;
    var staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
    }[actualPlacement.split('-')[0]];
    return (<FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={context.modal}>
        <div ref={ref} style={__assign(__assign({ position: strategy, top: y !== null && y !== void 0 ? y : 0, left: x !== null && x !== void 0 ? x : 0 }, style), transitionStyles)} aria-labelledby={context.labelId} aria-describedby={context.descriptionId} {...context.getFloatingProps(props)} className="z-50 rounded-[.65rem] border border-muted-200 bg-[#f8f8f8] shadow-lg shadow-muted-300/30  dark:border-muted-800 dark:bg-muted-950 dark:shadow-muted-800/30">
        
          {/*indicator arrow start  */}
          {indicatorArrow && (<div ref={arrowRef} className={cn('absolute border-[8px]  border-l-muted-200  border-t-muted-200 dark:border-l-muted-950  dark:border-t-muted-950 border-r-transparent   border-b-transparent  transform  ', staticSide === 'top' && "rotate-45", staticSide === 'bottom' && "rotate-[225deg]", staticSide === 'right' && "rotate-[135deg]", staticSide === 'left' && "-rotate-45")} style={_b = {
                    left: arrowX != null ? "".concat(arrowX, "px") : '',
                    top: arrowY != null ? "".concat(arrowY, "px") : '',
                    right: '',
                    bottom: ''
                },
                _b[staticSide] = '-8px',
                _b}/>)}
            {/*indicator arrow end  */}
          {props.children}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>);
});
export var PopoverHeading = React.forwardRef(function PopoverHeading(props, ref) {
    var setLabelId = usePopoverContext().setLabelId;
    var id = useId();
    // Only sets `aria-labelledby` on the Popover root element
    // if this component is mounted inside it.
    React.useLayoutEffect(function () {
        setLabelId(id);
        return function () { return setLabelId(undefined); };
    }, [id, setLabelId]);
    return (<h2 {...props} ref={ref} id={id}>
      {props.children}
    </h2>);
});
export var PopoverDescription = React.forwardRef(function PopoverDescription(props, ref) {
    var setDescriptionId = usePopoverContext().setDescriptionId;
    var id = useId();
    // Only sets `aria-describedby` on the Popover root element
    // if this component is mounted inside it.
    React.useLayoutEffect(function () {
        setDescriptionId(id);
        return function () { return setDescriptionId(undefined); };
    }, [id, setDescriptionId]);
    return <p {...props} ref={ref} id={id}/>;
});
export var PopoverClose = React.forwardRef(function PopoverClose(props, ref) {
    var setOpen = usePopoverContext().setOpen;
    return (<button type="button" ref={ref} {...props} onClick={function (event) {
            var _a;
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, event);
            setOpen(false);
        }}/>);
});
//# sourceMappingURL=Popover.jsx.map