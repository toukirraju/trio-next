'use client';
import { __assign } from "tslib";
import { useEffect, useRef, useState } from 'react';
var Drawer = function (_a) {
    var children = _a.children, _b = _a.placement, placement = _b === void 0 ? 'left' : _b, setIsOpen = _a.setIsOpen, _c = _a.isOpen, isOpen = _c === void 0 ? false : _c, drawerColor = _a.drawerColor, backdropColor = _a.backdropColor, backdropOpacity = _a.backdropOpacity, _d = _a.closeOutSide, closeOutSide = _d === void 0 ? true : _d, width = _a.width;
    var containerRef = useRef(null);
    var _e = useState(0), height = _e[0], setHeight = _e[1];
    useEffect(function () {
        if (containerRef.current) {
            setHeight(containerRef.current.clientHeight);
        }
    }, [containerRef]);
    var drawerRef = useRef(null);
    var startX = useRef(0);
    var currentX = useRef(0);
    var isDragging = useRef(false);
    var handleTouchStart = function (e) {
        startX.current = e.touches[0].clientX;
        isDragging.current = true;
    };
    //   touch move for open close toggle
    var handleTouchMove = function (e) {
        if (!isDragging.current)
            return;
        currentX.current = e.touches[0].clientX;
        var translateX = Math.min(0, currentX.current - startX.current);
        if (drawerRef.current) {
            drawerRef.current.style.transform = "translateX(".concat(translateX, "px)");
        }
    };
    //  touched for open close toggle system
    var handleTouchEnd = function () {
        isDragging.current = false;
        var threshold = 50;
        if (currentX.current - startX.current > threshold) {
            closeOutSide && setIsOpen(true);
        }
        else if (startX.current - currentX.current > threshold) {
            closeOutSide && setIsOpen(false);
        }
        if (drawerRef.current) {
            drawerRef.current.style.transform = '';
        }
    };
    var screenHeight = window.screen.height;
    //   compare height and screenHeight
    var cmpHeight = screenHeight < height;
    //   floating check right left and top bottom style
    var drawerFloatingFunction = function () {
        if (placement == 'top') {
            return "left-0 top-0 h-[".concat(height, "] w-full");
        }
        else if (placement == 'bottom') {
            return "bottom-0 left-0 h-[".concat(height, "] w-full");
        }
        else if (placement == 'left') {
            return "top-0 left-0 h-full w-64";
        }
        else if (placement == 'right') {
            return "top-0 right-0 h-full w-64";
        }
    };
    //   open for axios check function
    var drawerOpenFloatingFunction = function (open) {
        if (placement == 'top') {
            return open ? "translate-y-0" : "-translate-y-[150%]";
        }
        else if (placement == 'bottom') {
            return open ? "translate-x-0" : "translate-y-[150%]";
        }
        else if (placement == 'left') {
            return open ? "translate-x-0" : "-translate-x-[150%]";
        }
        else if (placement == 'right') {
            return open ? "translate-x-0" : "translate-x-[150%]";
        }
    };
    return (<div className="relative">
      <div ref={drawerRef} 
    // onTouchStart={handleTouchStart}
    // onTouchMove={handleTouchMove}
    // onTouchEnd={handleTouchEnd}
    className={"custom__scrollbar overflow-auto bg-muted-200 text-muted-600 dark:bg-muted-800 dark:text-muted-200 fixed ".concat(drawerFloatingFunction(), " transform ").concat(drawerOpenFloatingFunction(isOpen), " transition-transform duration-300 ease-in-out z-50")} 
    // onClick={() => closeOutSide && setIsOpen(!open)}
    style={__assign({ background: drawerColor ? drawerColor : '' }, (width &&
            (placement === 'left' || placement === 'right') && {
            width: width
        }))}>
        <div className={" ".concat(cmpHeight ? 'h-screen overflow-y-scroll ' : 'h-full', " ")} ref={containerRef}>
          {' '}
          {children}
        </div>
      </div>
      {isOpen && (<div className={"fixed inset-0  bg-opacity-50 transition-opacity duration-300 ease-in-out ".concat(isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none', " z-40")} onClick={function () { return closeOutSide && setIsOpen(!open); }} style={{
                background: backdropColor ? backdropColor : 'black',
                opacity: backdropOpacity ? backdropOpacity : 0.3
            }}></div>)}
    </div>);
};
export default Drawer;
//# sourceMappingURL=Drawer.jsx.map