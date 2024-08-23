import { __rest } from "tslib";
import React from 'react';
var InputFileField = function (_a) {
    var id = _a.id, value = _a.value, acceptedFileTypes = _a.acceptedFileTypes, label = _a.label, _b = _a.maxFileSize, maxFileSize = _b === void 0 ? 5 : _b, _c = _a.color, color = _c === void 0 ? 'default' : _c, _d = _a.shape, shape = _d === void 0 ? 'smooth' : _d, props = __rest(_a, ["id", "value", "acceptedFileTypes", "label", "maxFileSize", "color", "shape"]);
    var MAX_FILE_BYTES = maxFileSize * 1024 * 1024; // MB to bytes
    return (<div className="relative w-full">
      {!!label && <label className="font-sans text-[.85rem] text-muted-400">{label}</label>}
      <div className={"relative flex items-center justify-between border-2 px-4 py-3 transition duration-150 ease-in-out\n        ".concat(color === 'default'
            ? 'border-muted-200 bg-white hover:border-primary-500 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500'
            : '', "\n        ").concat(color === 'contrast'
            ? 'bg-white hover:border-primary-500 dark:border-muted-800 dark:bg-muted-950 dark:hover:border-primary-500'
            : '', "\n        ").concat(color === 'muted'
            ? 'border-muted-200 bg-muted-100 hover:border-primary-500 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500'
            : '', "\n        ").concat(color === 'mutedContrast'
            ? 'border-muted-200 bg-muted-100 hover:border-primary-500 dark:border-muted-800 dark:bg-muted-950 dark:hover:border-primary-500'
            : '', "\n        ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n        ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n        ").concat(shape === 'curved' ? 'rounded-xl' : '', "\n        ").concat(shape === 'full' ? 'rounded-full' : '', "\n      ")}>
        <input type="file" id={id} name={id} accept={acceptedFileTypes ? acceptedFileTypes.join(',') : undefined} {...props} className="absolute inset-0 h-full w-full cursor-pointer opacity-0"/>
        <div className="flex items-center">
          <svg className="h-6 w-6 text-muted-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <div className="ms-2">
            <span className="text-sm text-muted-600 dark:text-muted-400 line-clamp-1">
              {value ? value : 'Choose a file'}
            </span>
          </div>
        </div>
        {!!value ? ('') : (<span className="hidden sm:block text-sm text-muted-500">
            Max file size: {maxFileSize}MB
          </span>)}
      </div>
    </div>);
};
export default InputFileField;
//# sourceMappingURL=InputFileField.jsx.map