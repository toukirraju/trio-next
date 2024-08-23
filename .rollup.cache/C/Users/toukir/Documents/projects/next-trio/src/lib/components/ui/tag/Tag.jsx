import { __rest } from "tslib";
import React from 'react';
import { tagVariants } from '../variants/tag-variants';
var Tag = function (_a) {
    var children = _a.children, variant = _a.variant, color = _a.color, shape = _a.shape, shadow = _a.shadow, _b = _a.className, classes = _b === void 0 ? '' : _b, props = __rest(_a, ["children", "variant", "color", "shape", "shadow", "className"]);
    return (<span className={tagVariants({
            shape: shape,
            variant: variant,
            color: color,
            shadow: shadow,
            className: "".concat(classes)
        })} {...props}>
      {children}
    </span>);
};
export default Tag;
//# sourceMappingURL=Tag.jsx.map