import React, { useEffect, useRef, useState } from 'react';
import Card from '../card/Card';
import { ReIcon } from '@/components/ReIcon/ReIcon';
import { cn } from '@/utils/cn';
var ToggleBox = function (_a) {
    var header = _a.header, children = _a.children, title = _a.title, _b = _a.shape, shape = _b === void 0 ? 'smooth' : _b, _c = _a.color, color = _c === void 0 ? 'contrast' : _c, growOnExpand = _a.growOnExpand, spaced = _a.spaced, _d = _a.isToggle, isToggle = _d === void 0 ? false : _d, _e = _a.open, open = _e === void 0 ? false : _e, classes = _a.classes;
    var _f = useState(open), panelOpened = _f[0], setPanelOpened = _f[1];
    var _g = useState('0px'), contentHeight = _g[0], setContentHeight = _g[1];
    var toggleBoxContentRef = useRef(null);
    useEffect(function () {
        setPanelOpened(open);
    }, [open]);
    useEffect(function () {
        var updateHeight = function () {
            if (panelOpened && toggleBoxContentRef.current) {
                setContentHeight("".concat(toggleBoxContentRef.current.scrollHeight, "px"));
            }
            else {
                setContentHeight('0px');
            }
        };
        updateHeight();
        // Use ResizeObserver to detect changes in content size
        var resizeObserver = new ResizeObserver(updateHeight);
        if (toggleBoxContentRef.current) {
            resizeObserver.observe(toggleBoxContentRef.current);
        }
        return function () {
            if (toggleBoxContentRef.current) {
                resizeObserver.unobserve(toggleBoxContentRef.current);
            }
        };
    }, [panelOpened, children]);
    return (<Card shape={shape} color={color} shadow={panelOpened ? 'flat' : 'none'} className={cn(" \n        ".concat(panelOpened && growOnExpand ? 'md:p-6' : '', "\n      "), spaced && spaced === 'none'
            ? 'p-0'
            : spaced === 'md'
                ? 'p-6'
                : spaced === 'lg'
                    ? 'p-7'
                    : 'p-4', classes && (classes === null || classes === void 0 ? void 0 : classes.container), '!bg-muted-100 dark:!bg-muted-900')}>
      <div role="button" className={"flex items-center gap-x-2 ".concat(panelOpened ? '' : '', " ").concat(isToggle ? 'cursor-pointer' : '')} onClick={function () {
            setPanelOpened(!panelOpened);
        }}>
        {header ? (<div className={cn(classes && (classes === null || classes === void 0 ? void 0 : classes.header))}>{header}</div>) : (<div>
            <h5 className="font-sans text-sm font-medium text-muted-800 dark:text-muted-100">
              {title}
            </h5>
          </div>)}
        <div className={"pointer-events-none transition-all duration-300 ".concat(panelOpened ? 'rotate-90' : ' hover:rotate-90', " ").concat(isToggle
            ? 'flex h-8 w-8 items-center justify-center rounded-full text-muted-400 hover:bg-muted-100 dark:hover:bg-muted-800 [&>svg]:h-4'
            : '')}>
          <ReIcon iconName="BiChevronRight" className="text-muted-400 text-2xl"/>
        </div>
      </div>
      <div ref={toggleBoxContentRef} style={{
            maxHeight: contentHeight,
            transition: 'max-height 0.3s ease-in-out'
        }} className={"bg-muted-100 dark:bg-muted-900 grid grid-cols-1 gap-3 overflow-hidden ".concat(panelOpened ? 'mt-3' : 'mt-0')}>
        {children}
      </div>
    </Card>);
};
export default ToggleBox;
//# sourceMappingURL=ToggleBox.jsx.map