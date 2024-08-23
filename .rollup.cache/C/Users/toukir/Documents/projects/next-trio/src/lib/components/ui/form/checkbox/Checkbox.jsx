import { __rest } from "tslib";
import React from 'react';
import { checkboxVariants } from '../../variants/checkbox-variants';
import { ReIcon } from '@/components/ReIcon/ReIcon';
var Checkbox = function (_a) {
    // const checkboxId = label.toLocaleLowerCase().replaceAll(" ", "-");
    var id = _a.id, _b = _a.color, color = _b === void 0 ? 'default' : _b, _c = _a.shape, shape = _c === void 0 ? 'smooth' : _c, label = _a.label, icon = _a.icon, _d = _a.className, classes = _d === void 0 ? '' : _d, props = __rest(_a, ["id", "color", "shape", "label", "icon", "className"]);
    return (<div className={"checkbox-".concat(color || 'default', "  relative inline-block cursor-pointer leading-tight overflow-hidden")}>
      <label htmlFor={id} className="flex items-center">
        <span className={"shrink-0 relative flex h-5 w-5 items-center justify-center border-muted-300 dark:border-muted-700 overflow-hidden border-2 bg-muted-100 transition-shadow duration-300 dark:bg-muted-800 \n          ".concat(shape === 'rounded' ? 'rounded' : '', " \n          ").concat(shape === 'smooth' ? 'rounded-md' : '', " \n          ").concat(shape === 'curved' ? 'rounded-lg' : '', " \n          ").concat(shape === 'full' ? 'rounded-full' : '', "\n          ").concat(color === 'primary' ? 'focus-within:border-primary-500/20' : '', "\n          ").concat(color === 'info' ? 'focus-within:border-info-500/20' : '', "\n          ").concat(color === 'success' ? 'focus-within:border-success-500/20' : '', "\n          ").concat(color === 'warning' ? 'focus-within:border-warning-500/20' : '', "\n          ").concat(color === 'danger' ? 'focus-within:border-error-500/20' : '', "\n        ")}>
          <input id={id} type="checkbox" className={"peer absolute start-0 top-0 z-[3] h-full w-full cursor-pointer appearance-none ".concat(classes)} {...props}/>
          <ReIcon iconName={icon ? icon : 'GoCheck'} className={"relative start-0 z-[2] h-3 w-3 translate-y-5 scale-0 transition-transform delay-150 duration-300 peer-checked:translate-y-0 peer-checked:scale-100\n              ".concat(color === 'default' ? 'text-muted-700 dark:text-muted-100' : 'text-white', "\n            ")}/>
          <span className={"".concat(checkboxVariants({ color: color, shape: shape }))}></span>
        </span>
        {label && (<span className="ms-2 cursor-pointer font-sans text-sm text-muted-500 dark:text-muted-400 capitalize">
            {label}
          </span>)}
      </label>
    </div>);
};
export default Checkbox;
//# sourceMappingURL=Checkbox.jsx.map