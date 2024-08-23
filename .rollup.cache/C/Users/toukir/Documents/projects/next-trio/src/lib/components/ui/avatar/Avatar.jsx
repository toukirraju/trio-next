import React from 'react';
import Image from 'next/image';
export var sizes = {
    xl: 96,
    lg: 80,
    md: 64,
    sm: 48,
    xs: 40,
    xxs: 32,
    xxxs: 24
};
export var styles = {
    xl: 'h-24 w-24',
    lg: 'h-20 w-20',
    md: 'h-16 w-16',
    sm: 'h-12 w-12',
    xs: 'h-10 w-10',
    xxs: 'h-8 w-8',
    xxxs: 'h-6 w-6'
};
var Avatar = function (_a) {
    var src = _a.src, _b = _a.alt, alt = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.shape, shape = _d === void 0 ? 'full' : _d, _e = _a.color, color = _e === void 0 ? 'default' : _e, mask = _a.mask, _f = _a.overlaps, overlaps = _f === void 0 ? false : _f, _g = _a.text, text = _g === void 0 ? '?' : _g, _h = _a.className, classes = _h === void 0 ? '' : _h, children = _a.children;
    return (<div className={"".concat(styles[size], " relative shrink-0 ").concat(src ? ' block text-[.8rem]' : 'flex items-center justify-center font-sans', "\n      ").concat(overlaps && shape === 'full' && size === 'xxxs'
            ? '-ms-1.5 border-2 border-white first:ms-0 dark:border-muted-800'
            : '', "\n      ").concat(overlaps && shape === 'full' && size === 'xxs'
            ? '-ms-2.5 border-2 border-white first:ms-0 dark:border-muted-800'
            : '', "\n      ").concat(overlaps && shape === 'full' && size === 'xs'
            ? '-ms-3.5 border-4 border-white first:ms-0 dark:border-muted-800'
            : '', "\n      ").concat(overlaps && shape === 'full' && size === 'sm'
            ? '-ms-3.5 border-4 border-white first:ms-0 dark:border-muted-800'
            : '', " \n      ").concat(overlaps && shape === 'full' && size === 'md'
            ? '-ms-5 border-[5px] border-white first:ms-0 dark:border-muted-800'
            : '', " \n      ").concat(overlaps && shape === 'full' && size === 'lg'
            ? '-ms-6 border-[6px] border-white first:ms-0 dark:border-muted-800'
            : '', "  \n      ").concat(overlaps && shape === 'full' && size === 'xl'
            ? '-ms-8 border-8 border-white first:ms-0 dark:border-muted-800'
            : '', " \n      ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n      ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n      ").concat(shape === 'curved' && size !== 'xxxs' ? 'rounded-xl' : '', "\n      ").concat(shape === 'curved' && size === 'xxxs' ? 'rounded-lg' : '', "\n      ").concat(shape === 'full' && 'rounded-full', "\n      ").concat(shape === 'straight' && mask === 'hex' ? 'mask mask-hex' : '', "\n      ").concat(shape === 'straight' && mask === 'hexed' ? 'mask mask-hexed' : '', "\n      ").concat(shape === 'straight' && mask === 'blob' ? 'mask mask-blob' : '', "\n      ").concat(shape === 'straight' && mask === 'deca' ? 'mask mask-deca' : '', "\n      ").concat(shape === 'straight' && mask === 'diamond' ? 'mask mask-diamond' : '', "\n      ").concat(color === 'default'
            ? 'bg-muted-100 text-muted-500 dark:bg-muted-700/60 dark:text-muted-200'
            : '', "\n      ").concat(color === 'primary' ? 'bg-primary-500/10 text-primary-500 dark:bg-primary-500/20' : '', "\n      ").concat(color === 'info' ? 'bg-info-500/10 text-info-500 dark:bg-info-500/20' : '', "\n      ").concat(color === 'success' ? 'bg-success-500/10 text-success-500 dark:bg-success-500/20' : '', "\n      ").concat(color === 'warning' ? 'bg-warning-500/10 text-warning-500 dark:bg-warning-500/20' : '', "\n      ").concat(color === 'danger' ? 'bg-danger-500/10 text-danger-500 dark:bg-danger-500/20' : '', "\n      ").concat(color === 'yellow' ? 'bg-yellow-400/10 text-yellow-500 dark:bg-yellow-400/20' : '', "\n      \n      ").concat(color === 'violet' ? 'bg-violet-500/10 text-violet-500 dark:bg-violet-500/20' : '', "\n      ").concat(classes)}>
      {src ? (<Image height={sizes[size]} width={sizes[size]} src={src} className={"\n            block w-full\n            ".concat(shape === 'rounded' ? 'rounded-md' : '', "\n            ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n            ").concat(shape === 'curved' && size !== 'xxxs' ? 'rounded-xl' : '', "\n            ").concat(shape === 'curved' && size === 'xxxs' ? 'rounded-lg' : '', "\n            ").concat(shape === 'full' ? 'rounded-full' : '', "\n            ").concat(shape === 'straight' && mask === 'hex' ? 'mask mask-hex' : '', "\n            ").concat(shape === 'straight' && mask === 'hexed' ? 'mask mask-hexed' : '', "\n            ").concat(shape === 'straight' && mask === 'blob' ? 'mask mask-blob' : '', "\n            ").concat(shape === 'straight' && mask === 'deca' ? 'mask mask-deca' : '', "\n            ").concat(shape === 'straight' && mask === 'diamond' ? 'mask mask-diamond' : '', "\n          ")} alt={alt}/>) : (<span className={"relative font-sans font-normal\n            ".concat(size === 'xxxs' ? 'text-[0.7rem]' : '', "\n            ").concat(size === 'xxs' ? 'text-xs' : '', "\n            ").concat(size === 'xs' ? 'text-sm' : '', "\n            ").concat(size === 'sm' ? 'text-base' : '', "\n            ").concat(size === 'md' ? 'text-lg' : '', "\n            ").concat(size === 'lg' ? 'text-lg' : '', "\n            ").concat(size === 'xl' ? 'text-xl' : '', "\n          ")}>
          {text}
        </span>)}
      {children}
    </div>);
};
export default Avatar;
//# sourceMappingURL=Avatar.jsx.map