import { __rest } from "tslib";
import React from 'react';
import { buttonIconVariants } from '../variants/button-icon-variants';
import Loader from '../loader/Loader';
var IconButton = function (_a) {
    var variant = _a.variant, color = _a.color, shape = _a.shape, _b = _a.size, size = _b === void 0 ? 'md' : _b, shadow = _a.shadow, classes = _a.className, children = _a.children, _c = _a.loading, loading = _c === void 0 ? false : _c, props = __rest(_a, ["variant", "color", "shape", "size", "shadow", "className", "children", "loading"]);
    return (<button className={buttonIconVariants({
            variant: variant,
            shape: shape,
            color: color,
            size: size,
            shadow: shadow,
            className: "shrink-0 ".concat(loading ? 'pointer-events-none relative !text-transparent' : '', " ").concat(classes)
        })} {...props}>
      {children}
      {loading ? (<Loader classNames="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2" size={20} thickness={4}/>) : ('')}
    </button>);
};
export default IconButton;
//# sourceMappingURL=IconButton.jsx.map