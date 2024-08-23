import { __rest } from "tslib";
import React, { useState } from 'react';
import { inputVariants } from '../../variants/input-variants';
import Loader from '../../loader/Loader';
import { ReIcon } from '@/components/ReIcon/ReIcon';
import { getIn } from 'formik';
var Password = function (_a) {
    var label = _a.label, addon = _a.addon, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.color, color = _c === void 0 ? 'default' : _c, _d = _a.shape, shape = _d === void 0 ? 'smooth' : _d, formik = _a.formik, _e = _a.loading, loading = _e === void 0 ? false : _e, icon = _a.icon, _f = _a.className, classes = _f === void 0 ? '' : _f, props = __rest(_a, ["label", "addon", "size", "color", "shape", "formik", "loading", "icon", "className"]);
    var _g = useState(0), strength = _g[0], setStrength = _g[1];
    var _h = useState(false), touchError = _h[0], setTouchError = _h[1];
    var _j = useState(false), showStrength = _j[0], setShowStrength = _j[1];
    var calculateStrength = function (password) {
        var strength = 0;
        if (password.length >= 8)
            strength++;
        if (/[A-Z]/.test(password))
            strength++;
        if (/[a-z]/.test(password))
            strength++;
        if (/[0-9]/.test(password))
            strength++;
        if (/[^A-Za-z0-9]/.test(password))
            strength++;
        return strength;
    };
    var handleChange = function (e) {
        var value = e.target.value;
        setShowStrength(true);
        setStrength(calculateStrength(value));
        if (calculateStrength(value) >= 5) {
            setTouchError(false);
            setShowStrength(false);
        }
        else {
            setTouchError(true);
        }
        if (formik === null || formik === void 0 ? void 0 : formik.handleChange) {
            formik.handleChange(e);
        }
    };
    var handleBlur = function (e) {
        if (formik === null || formik === void 0 ? void 0 : formik.handleBlur) {
            formik.handleBlur(e);
        }
    };
    var error = (getIn(formik === null || formik === void 0 ? void 0 : formik.touched, props === null || props === void 0 ? void 0 : props.name) && getIn(formik.errors, props === null || props === void 0 ? void 0 : props.name)) || false;
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
            className: "peer \n              ".concat(classes, "\n              ").concat(size === 'sm' && icon ? 'pe-2 ps-8' : '', "\n              ").concat(size === 'md' && icon ? 'pe-3 ps-10' : '', "\n              ").concat(size === 'lg' && icon ? 'pe-4 ps-12' : '', "\n              ").concat(size === 'sm' && !icon ? 'px-2' : '', "\n              ").concat(size === 'md' && !icon ? 'px-3' : '', "\n              ").concat(size === 'lg' && !icon ? 'px-4' : '', "\n              ").concat(error || touchError ? '!border-error-500' : '', "\n              ").concat(addon ? '!rounded-s-none' : '', "\n              ").concat(loading
                ? '!text-transparent placeholder:!text-transparent !shadow-none pointer-events-none !select-none'
                : '', "\n            ")
        })} {...props} onChange={handleChange} onBlur={handleBlur}/>
        {!!icon ? (<div className={"absolute start-0 top-0 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n            ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n            ").concat(size === 'md' ? 'h-10 w-10' : '', " \n            ").concat(size === 'lg' ? 'h-12 w-12' : '')}>
            <ReIcon iconName={icon} className={"\n              ".concat(size === 'sm' ? 'h-3 w-3' : '', " \n              ").concat(size === 'md' ? 'h-4 w-4' : '', " \n              ").concat(size === 'lg' ? 'h-5 w-5' : '', "\n              ").concat(error ? '!text-error-500' : '', "\n            ")}/>
          </div>) : ('')}
        {!!loading ? (<div className={"absolute end-0 top-0 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n            ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n            ").concat(size === 'md' ? 'h-10 w-10' : '', " \n            ").concat(size === 'lg' ? 'h-12 w-12' : '')}>
            <Loader classNames={"dark:text-muted-200\n                ".concat(color === 'muted' || color === 'mutedContrast'
                ? 'text-muted-400'
                : 'text-muted-300', "\n              ")} size={20} thickness={4}/>
          </div>) : ('')}
        {error ? (<span className="mt-0.5 block font-sans text-[0.75rem] text-error-500">{error}</span>) : ('')}
      </div>

      {/* Password Strength Indicator */}
      {showStrength && (<div className="mt-2 flex space-x-1 md:max-w-[200px]">
          {Array.from({ length: 5 }).map(function (_, index) { return (<div key={index} className={"h-1 flex-1 rounded-full ".concat(strength > index ? 'bg-green-500' : 'bg-red-500')}></div>); })}
        </div>)}
    </div>);
};
export default Password;
//# sourceMappingURL=Password.jsx.map