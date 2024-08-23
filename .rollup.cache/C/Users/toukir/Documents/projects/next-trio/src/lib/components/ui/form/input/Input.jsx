import { __rest } from "tslib";
import React from 'react';
import { inputVariants } from '../../variants/input-variants';
import Loader from '../../loader/Loader';
import { ReIcon } from '@/components/ReIcon/ReIcon';
import { getIn } from 'formik';
var Input = function (_a) {
    var label = _a.label, addon = _a.addon, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.color, color = _c === void 0 ? 'default' : _c, _d = _a.shape, shape = _d === void 0 ? 'smooth' : _d, 
    // error,
    formik = _a.formik, _e = _a.loading, loading = _e === void 0 ? false : _e, icon = _a.icon, forceError = _a.forceError, _f = _a.className, classes = _f === void 0 ? '' : _f, _g = _a.showErrorMessage, showErrorMessage = _g === void 0 ? true : _g, props = __rest(_a, ["label", "addon", "size", "color", "shape", "formik", "loading", "icon", "forceError", "className", "showErrorMessage"]);
    var error = forceError !== null && forceError !== void 0 ? forceError : ((getIn(formik === null || formik === void 0 ? void 0 : formik.touched, props === null || props === void 0 ? void 0 : props.name) && getIn(formik.errors, props === null || props === void 0 ? void 0 : props.name)) || false);
    return (<div className="w-full">
      {!!label && (<label htmlFor={props.name} className="font-sans text-[.85rem] text-muted-400">
          {label}
        </label>)}
      <div className={"relative w-full ".concat(addon ? 'flex' : '')}>
        {!!addon ? (<div className={"inline-flex cursor-pointer items-center justify-center border border-muted-200 border-e-transparent bg-muted-100 px-4 py-2 text-center text-sm leading-tight text-muted-500 dark:border-muted-800 dark:border-e-transparent dark:bg-muted-700 dark:text-muted-300\n            ".concat(size === 'sm' ? 'h-8' : '', "\n            ").concat(size === 'md' ? 'h-10' : '', "\n            ").concat(size === 'lg' ? 'h-12' : '', "\n            ").concat(shape === 'rounded' ? 'rounded-s-md' : '', "\n            ").concat(shape === 'smooth' ? 'rounded-s-lg' : '', "\n            ").concat(shape === 'curved' ? 'rounded-s-xl' : '', "\n            ").concat(shape === 'full' ? 'rounded-s-full' : '', "\n          ")}>
            {addon}
          </div>) : ('')}
        <input className={inputVariants({
            size: size,
            color: color,
            shape: shape,
            className: "peer \n              ".concat(classes, "\n              ").concat(size === 'sm' && icon ? 'pe-2 ps-8' : '', "\n              ").concat(size === 'md' && icon ? 'pe-3 ps-10' : '', "\n              ").concat(size === 'lg' && icon ? 'pe-4 ps-12' : '', "\n              ").concat(size === 'sm' && !icon ? 'px-2' : '', "\n              ").concat(size === 'md' && !icon ? 'px-3' : '', "\n              ").concat(size === 'lg' && !icon ? 'px-4' : '', "\n              ").concat(error ? '!border-error-500' : '', "\n              ").concat(addon ? '!rounded-s-none' : '', "\n              ").concat(loading
                ? '!text-transparent placeholder:!text-transparent !shadow-none pointer-events-none !select-none'
                : '', "\n            ")
        })} {...props}/>
        {!!icon ? (<div className={"absolute start-0 top-0 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n            ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n            ").concat(size === 'md' ? 'h-10 w-10' : '', " \n            ").concat(size === 'lg' ? 'h-12 w-12' : '')}>
            <ReIcon iconName={icon} className={"\n              ".concat(size === 'sm' ? 'h-3 w-3' : '', " \n              ").concat(size === 'md' ? 'h-4 w-4' : '', " \n              ").concat(size === 'lg' ? 'h-5 w-5' : '', "\n              ").concat(error ? '!text-error-500' : '', "\n            ")}/>
          </div>) : ('')}
        {!!loading ? (<div className={"absolute end-0 top-0 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n            ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n            ").concat(size === 'md' ? 'h-10 w-10' : '', " \n            ").concat(size === 'lg' ? 'h-12 w-12' : '')}>
            <Loader classNames={"dark:text-muted-200\n                ".concat(color === 'muted' || color === 'mutedContrast'
                ? 'text-muted-400'
                : 'text-muted-300', "\n              ")} size={20} thickness={4}/>
          </div>) : ('')}
        {showErrorMessage && error ? (<span className="mt-0.5 block font-sans text-[0.75rem] text-error-500">{error}</span>) : ('')}
      </div>
    </div>);
};
export default Input;
//# sourceMappingURL=Input.jsx.map