import { __rest } from "tslib";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { selectVariants } from '../../variants/select-variants';
import Loader from '../../loader/Loader';
import { ReIcon } from '@/components/ReIcon/ReIcon';
var Select = function (_a) {
    var label = _a.label, _b = _a.options, options = _b === void 0 ? [] : _b, icon = _a.icon, _c = _a.color, color = _c === void 0 ? 'default' : _c, shape = _a.shape, _d = _a.size, size = _d === void 0 ? 'md' : _d, error = _a.error, _e = _a.loading, loading = _e === void 0 ? false : _e, _f = _a.className, classes = _f === void 0 ? '' : _f, _g = _a.containerClasses, containerClasses = _g === void 0 ? '' : _g, availableDataAPI = _a.availableDataAPI, formik = _a.formik, props = __rest(_a, ["label", "options", "icon", "color", "shape", "size", "error", "loading", "className", "containerClasses", "availableDataAPI", "formik"]);
    var _h = useState(options), updadtedOptions = _h[0], setUpdatedOptions = _h[1];
    useEffect(function () {
        if (availableDataAPI && (options === null || options === void 0 ? void 0 : options.length) === 0) {
            fetch(availableDataAPI)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                var fetchedOptions = data.map(function (d) { return d.username; });
                setUpdatedOptions(fetchedOptions);
                if (formik && fetchedOptions.length > 0) {
                    formik.setFieldValue(props.name, fetchedOptions[0]);
                }
            });
        }
        else if (options.length > 0) {
            setUpdatedOptions(options);
            if (formik) {
                formik.setFieldValue(props.name, options[0]);
            }
        }
    }, []);
    if (!Array.isArray(updadtedOptions)) {
        throw new Error('options must be an array!');
    }
    var transformedOptions = updadtedOptions.map(function (option) {
        return typeof option === 'string' ? { label: option, value: option } : option;
    });
    return (<div className={"w-full font-sans ".concat(containerClasses)}>
      {!!label && <label className="font-sans text-[.85rem] text-muted-400">{label}</label>}
      <div className="relative">
        <div className={"group relative inline-block w-full after:pointer-events-none after:absolute after:end-[1.125em] after:top-1/2 after:z-[4] after:block after:h-[.625em] after:w-[.625em] after:rounded-[2px] after:border-b-[3px] after:border-s-[3px] after:border-muted-400 after:transition-all after:duration-300 after:content-[''] after:[transform:scale(0.8)_rotate(-45deg)] focus-within:after:[transform:scale(0.8)_rotate(-225deg)]\n            ".concat(size === 'sm' ? 'after:-mt-[.4575em] focus-within:after:top-[60%]' : '', "\n            ").concat(size === 'md' ? 'after:-mt-[.4575em] focus-within:after:top-[60%]' : '', "\n            ").concat(size === 'lg' ? 'after:-mt-[.4575em] focus-within:after:top-[60%]' : '', "\n            ").concat(loading ? 'after:!border-transparent pointer-events-none' : '', "\n        ")}>
          <select className={selectVariants({
            size: size,
            color: color,
            shape: shape,
            className: "peer \n                ".concat(classes, "\n                ").concat(size === 'sm' && icon ? 'ps-8 !py-1' : '', "\n                ").concat(size === 'md' && icon ? 'ps-10' : '', "\n                ").concat(size === 'lg' && icon ? 'ps-12' : '', "\n                ").concat(size === 'sm' && !icon ? 'ps-2 !py-1' : '', "\n                ").concat(size === 'md' && !icon ? 'ps-3' : '', "\n                ").concat(size === 'lg' && !icon ? 'ps-4' : '', "\n                ").concat(error ? '!border-danger-500' : '', "\n                ").concat(loading ? '!text-transparent !shadow-none !select-none' : '', "\n              ")
        })} {...props}>
            {transformedOptions.map(function (opt, i) { return (<option key={i} value={opt.value}>
                {opt.label}
              </option>); })}
          </select>
        </div>

        {!!icon ? (<div className={"absolute start-0 top-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n            ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n            ").concat(size === 'md' ? 'h-10 w-10' : '', " \n            ").concat(size === 'lg' ? 'h-12 w-12' : '')}>
            <ReIcon iconName={icon} className={"\n              ".concat(size === 'sm' ? 'h-3 w-3' : '', " \n              ").concat(size === 'md' ? 'h-4 w-4' : '', " \n              ").concat(size === 'lg' ? 'h-5 w-5' : '', "\n              ").concat(error ? '!text-danger-500' : '', "\n            ")}/>
          </div>) : ('')}
        {!!loading ? (<div className={"absolute end-0 top-0 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n            ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n            ").concat(size === 'md' ? 'h-10 w-10' : '', " \n            ").concat(size === 'lg' ? 'h-12 w-12' : '')}>
            <Loader classNames={"dark:text-muted-200\n                ".concat(color === 'muted' || color === 'mutedContrast'
                ? 'text-muted-400'
                : 'text-muted-300', "\n              ")} size={20} thickness={4}/>
          </div>) : ('')}
        {!!error ? (<span className="mt-0.5 block font-sans text-[0.75rem] text-danger-500">{error}</span>) : ('')}
      </div>
    </div>);
};
export default Select;
//# sourceMappingURL=Select.jsx.map