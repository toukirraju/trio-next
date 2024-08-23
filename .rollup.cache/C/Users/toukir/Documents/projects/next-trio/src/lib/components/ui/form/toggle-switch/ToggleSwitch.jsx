import { __rest } from "tslib";
import React from 'react';
import { toggleSwitchVariants } from '../../variants/toggle-switch-variants';
var ToggleSwitch = function (_a) {
    var id = _a.id, checked = _a.checked, label = _a.label, sublabel = _a.sublabel, color = _a.color, _b = _a.className, classes = _b === void 0 ? '' : _b, props = __rest(_a, ["id", "checked", "label", "sublabel", "color", "className"]);
    return (<div className={"relative flex items-center gap-2 text-base  ".concat(classes)}>
      <label htmlFor={id} className="relative inline-flex items-center gap-3 cursor-pointer">
        <span className="relative inline-flex">
          <input id={id} type="checkbox" checked={checked} className={"peer pointer-events-none absolute opacity-0"} {...props}/>
          <i className={toggleSwitchVariants({ color: color })}></i>
        </span>

        {!sublabel ?
            label && <span className="font-sans text-sm text-muted-400">{label}</span>
            : (<div className="ms-1">
              <span className="block font-sans text-sm text-muted-800 dark:text-muted-100">
                {label}
              </span>
              <span className="block font-sans text-xs text-muted-400 dark:text-muted-400">
                {sublabel}
              </span>
            </div>)}
      </label>
    </div>);
};
export default ToggleSwitch;
//# sourceMappingURL=ToggleSwitch.jsx.map