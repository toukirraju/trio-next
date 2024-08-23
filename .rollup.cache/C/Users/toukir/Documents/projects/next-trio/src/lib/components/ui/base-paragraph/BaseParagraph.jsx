import React from 'react';
var BaseParagraph = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.as, Component = _c === void 0 ? 'p' : _c, _d = _a.lead, lead = _d === void 0 ? 'normal' : _d, _e = _a.weight, weight = _e === void 0 ? 'normal' : _e, _f = _a.color, color = _f === void 0 ? 'gray' : _f, children = _a.children, className = _a.className;
    var sizeClass = size ? "text-".concat(size) : '';
    var leadClass = lead ? "leading-".concat(lead) : '';
    var weightClass = weight ? "font-".concat(weight) : '';
    var colorClass = "text-".concat(color, "-600 dark:text-").concat(color, "-400");
    return (<Component className={"".concat(sizeClass, " ").concat(leadClass, " ").concat(weightClass, " ").concat(colorClass, " ").concat(className)}>
      {children}
    </Component>);
};
export default BaseParagraph;
//# sourceMappingURL=BaseParagraph.jsx.map