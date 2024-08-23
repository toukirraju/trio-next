import { __rest } from "tslib";
import React from 'react';
import { cardVariants } from '../variants/card-variants';
var Card = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'default' : _b, _c = _a.className, classes = _c === void 0 ? '' : _c, _d = _a.shape, shape = _d === void 0 ? 'smooth' : _d, _e = _a.shadow, shadow = _e === void 0 ? 'none' : _e, props = __rest(_a, ["children", "color", "className", "shape", "shadow"]);
    return (<div className={cardVariants({
            color: color,
            shape: shape,
            shadow: shadow,
            className: "".concat(classes)
        })} {...props}>
      {children}
    </div>);
};
export default Card;
//# sourceMappingURL=Card.jsx.map