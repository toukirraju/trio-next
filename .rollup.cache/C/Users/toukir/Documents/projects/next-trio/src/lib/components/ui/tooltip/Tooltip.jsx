import { __assign } from "tslib";
import { useRef, useState } from 'react';
import { offset, shift, flip, useFloating, autoUpdate, useInteractions, useHover, useFocus, useDismiss, useRole, arrow, useTransitionStyles, useClick } from '@floating-ui/react';
import { cn } from '@/utils/cn';
export var Tooltip = function (_a) {
    var _b;
    var _c = _a.indicatorArrow, indicatorArrow = _c === void 0 ? true : _c, content = _a.content, children = _a.children, _d = _a.placement, placement = _d === void 0 ? 'bottom' : _d, _e = _a.trigger, trigger = _e === void 0 ? 'hover' : _e, className = _a.className, _f = _a.arrowColor, arrowColor = _f === void 0 ? 'bg-[#f8f8f8] dark:bg-muted-900' : _f;
    var _g = useState(false), isOpen = _g[0], setIsOpen = _g[1];
    var arrowRef = useRef(null);
    var _h = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: placement,
        middleware: [
            offset(12),
            flip(),
            shift(),
            arrow({
                element: arrowRef
            })
        ],
        whileElementsMounted: autoUpdate
    }), _j = _h.refs, setReference = _j.setReference, setFloating = _j.setFloating, floatingStyles = _h.floatingStyles, context = _h.context, actualPlacement = _h.placement, _k = _h.middlewareData.arrow, _l = _k === void 0 ? {} : _k, arrowX = _l.x, arrowY = _l.y;
    var hover = useHover(context, { move: false });
    var focus = useFocus(context);
    var dismiss = useDismiss(context);
    var role = useRole(context, { role: 'tooltip' });
    var click = useClick(context);
    var staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
    }[actualPlacement.split('-')[0]];
    var transitionStyles = useTransitionStyles(context, {
        initial: {
            opacity: 0,
            transform: 'scale(0.8)'
        },
        open: {
            opacity: 1,
            transform: 'scale(1)'
        },
        close: {
            opacity: 0,
            transform: 'scale(0.8)'
        }
    }).styles;
    var interactions = [];
    if (trigger === 'hover')
        interactions.push(hover);
    if (trigger === 'focus')
        interactions.push(focus);
    if (trigger === 'click')
        interactions.push(click);
    interactions.push(dismiss, role);
    var _m = useInteractions(interactions), getReferenceProps = _m.getReferenceProps, getFloatingProps = _m.getFloatingProps;
    return (<>
      <div ref={setReference} {...getReferenceProps()} style={{ display: 'inline-block', cursor: 'pointer' }} role="button" tabIndex={0}>
        {children}
      </div>
      {isOpen && content && (<div ref={setFloating} style={__assign(__assign({}, floatingStyles), { zIndex: 99999 })} {...getFloatingProps()}>
          <div className={cn('rounded-lg bg-[#f8f8f8]  dark:bg-muted-900 text-muted-500 dark:text-muted-200 px-2 py-1 shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]', className && className)} style={transitionStyles}>
            
            {/*indicator arrow start  */}
            {indicatorArrow && (<div ref={arrowRef} className={cn('absolute w-3 h-3 rotate-45 transform', arrowColor)} style={__assign((_b = { left: arrowX != null ? "".concat(arrowX, "px") : '', top: arrowY != null ? "".concat(arrowY, "px") : '', right: '', bottom: '' }, _b[staticSide] = '-4px', _b), (staticSide === 'top' || staticSide === 'bottom'
                    ? { borderLeft: 'none', borderRight: 'none' }
                    : { borderTop: 'none', borderBottom: 'none' }))}/>)}
            {/*indicator arrow end  */}

            {content}
          </div>
        </div>)}
    </>);
};
//# sourceMappingURL=Tooltip.jsx.map