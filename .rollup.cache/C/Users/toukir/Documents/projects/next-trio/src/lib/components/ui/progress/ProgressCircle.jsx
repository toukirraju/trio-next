import { __rest } from "tslib";
import React from 'react';
var ProgressCircle = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'none' : _b, _c = _a.contrast, contrast = _c === void 0 ? 'default' : _c, _d = _a.size, size = _d === void 0 ? 60 : _d, value = _a.value, _e = _a.max, max = _e === void 0 ? 100 : _e, _f = _a.thickness, thickness = _f === void 0 ? 4 : _f, classNames = _a.classNames, props = __rest(_a, ["color", "contrast", "size", "value", "max", "thickness", "classNames"]);
    return (<svg role="progressbar" aria-valuenow={value} aria-valuemax={max} className={"block -rotate-90 ".concat(classNames)} viewBox="0 0 45 45" width={size} height={size} {...props}>
      <circle className={"text-muted-200 stroke-current \n          ".concat(contrast === 'default' ? 'dark:text-muted-700' : '', "\n          ").concat(contrast === 'contrast' ? 'dark:text-muted-900' : '', "\n        ")} strokeWidth={thickness} fill="none" cx="50%" cy="50%" r="15.91549431"/>
      <circle className={"stroke-current transition-all duration-500\n          ".concat(color === 'primary' ? 'text-primary-500' : '', "\n          ").concat(color === 'info' ? 'text-info-500' : '', "\n          ").concat(color === 'success' ? 'text-success-500' : '', "\n          ").concat(color === 'warning' ? 'text-warning-500' : '', "\n          ").concat(color === 'danger' ? 'text-danger-500' : '', "\n        ")} strokeWidth={thickness} strokeDasharray={"".concat(value, ",100")} strokeLinecap="round" fill="none" cx="50%" cy="50%" r="15.91549431"/>
    </svg>);
};
export default ProgressCircle;
//# sourceMappingURL=ProgressCircle.jsx.map