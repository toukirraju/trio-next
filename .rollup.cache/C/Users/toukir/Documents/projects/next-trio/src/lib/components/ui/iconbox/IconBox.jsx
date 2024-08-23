import { __rest } from "tslib";
import React from 'react';
import { iconboxVariants } from '../variants/iconbox-variants';
import { ReIcon } from '@/components/ReIcon/ReIcon';
var IconBox = function (_a) {
    var variant = _a.variant, _b = _a.color, color = _b === void 0 ? 'default' : _b, icon = _a.icon, _c = _a.shape, shape = _c === void 0 ? 'full' : _c, _d = _a.size, size = _d === void 0 ? 'md' : _d, mask = _a.mask, shadow = _a.shadow, _e = _a.className, classes = _e === void 0 ? '' : _e, _f = _a.iconClasses, iconClasses = _f === void 0 ? '' : _f, props = __rest(_a, ["variant", "color", "icon", "shape", "size", "mask", "shadow", "className", "iconClasses"]);
    return (<div className={iconboxVariants({
            variant: variant,
            color: color,
            shape: shape,
            size: size,
            shadow: shadow,
            className: "relative flex items-center justify-center shrink-0 ".concat(classes, " \n        ").concat(shape === 'straight' && variant !== 'outlined' && mask === 'hex' ? 'mask mask-hex' : '', " \n        ").concat(shape === 'straight' && variant !== 'outlined' && mask === 'hexed' ? 'mask mask-hexed' : '', " \n        ").concat(shape === 'straight' && variant !== 'outlined' && mask === 'blob' ? 'mask mask-blob' : '', " \n        ").concat(shape === 'straight' && variant !== 'outlined' && mask === 'deca' ? 'mask mask-deca' : '', " \n        ").concat(shape === 'straight' && variant !== 'outlined' && mask === 'diamond'
                ? 'mask mask-diamond'
                : '')
        })} {...props}>
      <ReIcon iconName={icon} className={"".concat(iconClasses)}/>
    </div>);
};
export default IconBox;
//# sourceMappingURL=IconBox.jsx.map