import { cn } from '@/utils/cn';
import React from 'react';
var clampMap = {
    1: 'line-clamp-1',
    2: 'line-clamp-2',
    3: 'line-clamp-3',
    4: 'line-clamp-4',
    5: 'line-clamp-5',
    6: 'line-clamp-6'
};
var FlexTableCell = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'stable' : _b, light = _a.light, _c = _a.clamp, clamp = _c === void 0 ? 1 : _c, children = _a.children, label = _a.label, className = _a.className, _d = _a.border, border = _d === void 0 ? true : _d;
    return (<div className={cn("\n        px-2 py-2 font-alt before:text-muted-400 flex items-center justify-between text-sm before:font-sans before:text-xs before:font-medium before:uppercase before:content-[attr(data-content)] before:block md:before:hidden\n    ".concat(type === 'grow'
            ? 'md:grow'
            : type === 'shrink'
                ? 'md:shrink'
                : type === 'stable'
                    ? 'md:w-[110px] md:shrink-0'
                    : type === 'stable' && clamp && clampMap[clamp], "\n    ").concat(light ? 'text-muted-500 dark:text-white' : 'text-muted-800 dark:text-white', "\n  "), className && className, border && "md:border-r border-muted-200 dark:border-muted-700 last:border-r-0")} data-content={label}>
      {children}
    </div>);
};
export default FlexTableCell;
//# sourceMappingURL=FlexTableCell.jsx.map