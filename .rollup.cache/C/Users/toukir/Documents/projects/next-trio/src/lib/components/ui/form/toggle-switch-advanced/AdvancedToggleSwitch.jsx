import { __rest } from "tslib";
import React from 'react';
import { ReIcon } from '@/components/ReIcon/ReIcon';
var AdvancedToggleSwitch = function (_a) {
    var checked = _a.checked, _b = _a.startIcon, startIcon = _b === void 0 ? 'lucide:check' : _b, _c = _a.endIcon, endIcon = _c === void 0 ? 'lucide:lock' : _c, _d = _a.startColor, startColor = _d === void 0 ? 'primary' : _d, _e = _a.endColor, endColor = _e === void 0 ? 'danger' : _e, color = _a.color, classes = _a.className, props = __rest(_a, ["checked", "startIcon", "endIcon", "startColor", "endColor", "color", "className"]);
    return (<label className="relative block w-[60px] cursor-pointer select-none text-lg">
      <input type="checkbox" checked={checked} className="peer absolute cursor-pointer opacity-0" {...props}/>
      <span className="relative block h-5 w-[55px] rounded-full border-2 border-muted-200 bg-muted-200 dark:border-muted-800 dark:bg-muted-900 peer-checked:[&>.off]:translate-x-[85%] peer-checked:[&>.off]:rotate-[360deg] peer-checked:[&>.off]:opacity-100 peer-checked:[&>.on]:translate-x-full peer-checked:[&>.on]:rotate-[360deg] peer-checked:[&>.on]:opacity-0">
        <span className={"off absolute -start-0.5 -top-2 z-0 flex h-8 w-8 translate-x-0 rotate-0 items-center justify-center rounded-full opacity-0 transition-all duration-300 ease-in\n            ".concat(classes, "\n            ").concat(endColor === 'default'
            ? 'border border-muted-200 bg-white text-muted-600 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-100'
            : '', "  \n            ").concat(endColor === 'primary' ? 'border-primary-500 bg-primary-500 text-white' : '', "\n            ").concat(endColor === 'info' ? 'border-info-500 bg-info-500 text-white' : '', "\n            ").concat(endColor === 'success' ? 'border-success-500 bg-success-500 text-white' : '', "\n            ").concat(endColor === 'warning' ? 'border-warning-500 bg-warning-500 text-white' : '', "\n            ").concat(endColor === 'danger' ? 'border-danger-500 bg-danger-500 text-white' : '', "\n          ")}>
          <ReIcon className="h-4 w-4 text-current" iconName={endIcon}/>
        </span>
        <span className={"on absolute -start-0.5 -top-2 z-[1] flex h-8 w-8 translate-x-0 rotate-0 items-center justify-center rounded-full opacity-100 transition-all duration-300 ease-in \n            ".concat(classes, "  \n            ").concat(startColor === 'default'
            ? 'border border-muted-200 bg-white text-muted-600 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-100'
            : '', "  \n            ").concat(startColor === 'primary' ? 'border-primary-500 bg-primary-500 text-white' : '', "\n            ").concat(startColor === 'info' ? 'border-info-500 bg-info-500 text-white' : '', "\n            ").concat(startColor === 'success' ? 'border-success-500 bg-success-500 text-white' : '', "\n            ").concat(startColor === 'warning' ? 'border-warning-500 bg-warning-500 text-white' : '', "\n            ").concat(startColor === 'danger' ? 'border-danger-500 bg-danger-500 text-white' : '', "\n          ")}>
          <ReIcon className="h-4 w-4 text-current" iconName={startIcon}/>
        </span>
      </span>
    </label>);
};
export default AdvancedToggleSwitch;
//# sourceMappingURL=AdvancedToggleSwitch.jsx.map