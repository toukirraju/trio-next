import { __rest } from "tslib";
import React from 'react';
import { buttonVariants } from '../variants/button-variants';
import Loader from '../loader/Loader';
var Button = function (_a) {
    var children = _a.children, variant = _a.variant, color = _a.color, shape = _a.shape, _b = _a.size, size = _b === void 0 ? 'md' : _b, shadow = _a.shadow, classes = _a.className, _c = _a.loading, loading = _c === void 0 ? false : _c, props = __rest(_a, ["children", "variant", "color", "shape", "size", "shadow", "className", "loading"]);
    return (<button className={buttonVariants({
            variant: variant,
            color: color,
            shape: shape,
            size: size,
            shadow: shadow,
            className: "inline-flex items-center gap-1 whitespace-nowrap text-center text-sm ".concat(loading ? 'relative !text-transparent pointer-events-none' : '', " ").concat(classes)
        })} {...props}>
      {children}
      {loading ? (<Loader classNames={"absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2"} size={20} thickness={4}/>) : ('')}
    </button>);
};
export default Button;
//# sourceMappingURL=Button.jsx.map