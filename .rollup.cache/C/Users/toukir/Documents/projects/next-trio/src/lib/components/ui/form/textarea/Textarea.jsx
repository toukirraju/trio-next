import { __rest } from "tslib";
import React from 'react';
import { textareaVariants } from '../../variants/textarea-variants';
import Loader from '../../loader/Loader';
import { getIn } from 'formik';
var Textarea = function (_a) {
    var label = _a.label, 
    // error,
    _b = _a.color, 
    // error,
    color = _b === void 0 ? 'default' : _b, _c = _a.shape, shape = _c === void 0 ? 'smooth' : _c, _d = _a.resize, resize = _d === void 0 ? false : _d, formik = _a.formik, _e = _a.loading, loading = _e === void 0 ? false : _e, _f = _a.className, classes = _f === void 0 ? '' : _f, props = __rest(_a, ["label", "color", "shape", "resize", "formik", "loading", "className"]);
    var error = formik
        ? (getIn(formik.touched, props.name) && getIn(formik.errors, props.name)) || false
        : false;
    return (<div className="w-full font-sans">
      {!!label ? (<label htmlFor={props.name} className="text-sm text-muted-400">
          {label}
        </label>) : ('')}
      <div className="relative w-full text-base">
        <textarea rows={4} className={textareaVariants({
            color: color,
            shape: shape,
            className: " \n              ".concat(classes, "\n              ").concat(!resize ? 'resize-none' : '', "\n              ").concat(error ? '!border-error-500' : '', "\n              ").concat(loading
                ? 'pointer-events-none !text-transparent !shadow-none placeholder:!text-transparent !select-none'
                : '', "\n            ")
        })} {...props}></textarea>
        {!!loading ? (<div className={"absolute end-0 top-0 z-0 flex h-10 w-10 items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n          "}>
            <Loader classNames={"dark:text-muted-200\n                ".concat(color === 'muted' || color === 'mutedContrast'
                ? 'text-muted-400'
                : 'text-muted-300', "\n              ")} size={20} thickness={4}/>
          </div>) : ('')}
        {!!error ? (<span className="-mt-1 block font-sans text-[0.75rem] text-error-500">{error}</span>) : ('')}
      </div>
    </div>);
};
export default Textarea;
//# sourceMappingURL=Textarea.jsx.map