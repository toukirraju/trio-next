import { ReIcon } from '@/components/ReIcon/ReIcon';
import React, { useEffect, useRef } from 'react';
var Modal = function (_a) {
    var open = _a.open, setOpen = _a.setOpen, _b = _a.size, size = _b === void 0 ? 'md' : _b, classes = _a.classes, children = _a.children, isClose = _a.isClose, onBackdropClick = _a.onBackdropClick;
    var modalRef = useRef(null);
    var handleClickOutside = function (event) {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onBackdropClick === null || onBackdropClick === void 0 ? void 0 : onBackdropClick();
        }
    };
    useEffect(function () {
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);
    return (<div className={"fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ".concat(open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0', " ").concat(classes === null || classes === void 0 ? void 0 : classes.wrapper)}>
      <div className="fixed inset-0 bg-muted-800/70 dark:bg-muted-900/80" onClick={onBackdropClick}></div>

      <div ref={modalRef} className={"relative mx-auto w-full ".concat(size === 'sm' ? 'max-w-sm' : '', " ").concat(size === 'md' ? 'max-w-md' : '', " ").concat(size === 'lg' ? 'max-w-lg' : '', " ").concat(size === 'xl' ? 'max-w-2xl' : '', " ").concat(size === '2xl' ? 'max-w-3xl' : '', " ").concat(size === '3xl' ? 'max-w-5xl' : '')}>
        <div className={"relative rounded-md overflow-hidden transition-all duration-300 ".concat(classes === null || classes === void 0 ? void 0 : classes.dialog, " ").concat(open ? 'translate-y-0' : '-translate-y-4')}>
          {isClose && (<button onClick={function () { return setOpen(false); }} className="absolute top-3 right-3 text-muted-400 hover:text-red-500 duration-200 z-50">
              <ReIcon iconName="AiOutlineClose"/>
            </button>)}
          {children}
        </div>
      </div>
    </div>);
};
export default Modal;
//# sourceMappingURL=Modal.jsx.map