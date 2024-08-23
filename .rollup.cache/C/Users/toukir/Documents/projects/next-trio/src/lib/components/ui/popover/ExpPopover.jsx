import React, { useRef, useState } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import IconButton from '../button-icon/IconButton';
import { ReIcon } from '@/components/ReIcon/ReIcon';
var ExpPopover = function (_a) {
    var _b = _a.className, classes = _b === void 0 ? '' : _b, children = _a.children, title = _a.title, toggleIcon = _a.toggleIcon, toggleImage = _a.toggleImage, _c = _a.indicator, indicator = _c === void 0 ? true : _c, showAll = _a.showAll, _d = _a.toggleClassNames, toggleClassNames = _d === void 0 ? '' : _d, _e = _a.indicatorClasses, indicatorClasses = _e === void 0 ? '' : _e, _f = _a.orientation, orientation = _f === void 0 ? 'start' : _f, _g = _a.shape, shape = _g === void 0 ? 'smooth' : _g;
    var _h = useState(false), show = _h[0], setShow = _h[1];
    var dropdownRef = useRef(null);
    useOnClickOutside(dropdownRef, function () { return setShow(false); });
    return (<div ref={dropdownRef} className={"group relative text-start ".concat(classes, " ").concat(show ? 'active' : '')}>
      {indicator ? (<span className={"absolute end-0.5 top-0.5 z-[2] block h-2 w-2 rounded-full bg-primary-500 ".concat(indicatorClasses)}></span>) : ('')}
      <button type="button" onClick={function () { return setShow(!show); }} className={"mask mask-blob flex h-10 w-10 cursor-pointer items-center justify-center transition-all duration-300 ".concat(toggleClassNames)}>
        {toggleImage ? (<>{toggleImage}</>) : (<IconButton variant="pastel" color="primary" shape="straight" className="rounded-2xl hover:bg-primary-200">
            <ReIcon iconName={toggleIcon} className="h-4 w-4 text-muted-500 transition-colors duration-300 group-hover:text-primary-500 "/>
          </IconButton>)}
      </button>
      <div className={"before:content-[' '] after:content-[' '] absolute top-[4rem] z-[5] w-[300px] rounded-[.65rem] border border-muted-200 bg-white shadow-lg shadow-muted-300/30 transition-all duration-300 before:pointer-events-none before:absolute before:bottom-full before:-ms-3 before:h-0 before:w-0 before:border-[12px] before:border-transparent before:border-b-muted-200 after:pointer-events-none after:absolute after:bottom-full after:-ms-[11px] after:h-0 after:w-0 after:border-[11px] after:border-transparent after:border-b-white dark:border-muted-800 dark:bg-muted-950 dark:shadow-muted-800/30 dark:before:border-b-muted-800 dark:after:border-b-muted-950 \n          ".concat(show
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-[5px] opacity-0', "\n          ").concat(orientation === 'start' ? '-start-3 before:end-[85.5%] after:end-[86%]' : '', "\n          ").concat(orientation === 'end' ? '-end-3 before:start-[90%] after:start-[90%]' : '', "\n          ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n          ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n          ").concat(shape === 'curved' ? 'rounded-xl' : '', "\n        ")}>
        <div className="relative h-full w-full">
          {!!title ? (<div className="flex items-center justify-between px-4 py-6 pb-0">
              <div className="font-sans text-xs font-light uppercase tracking-wide text-muted-400">
                <span>{title}</span>
              </div>

              {showAll ? (<a href={showAll} className="cursor-pointer font-sans text-xs font-semibold text-primary-500 underline-offset-4 hover:underline">
                  View all
                </a>) : ('')}
            </div>) : ('')}
          <div className={"".concat(title.toLowerCase() + '-items', " py-2.5 ")}>{children}</div>
        </div>
      </div>
    </div>);
};
export default ExpPopover;
//# sourceMappingURL=ExpPopover.jsx.map