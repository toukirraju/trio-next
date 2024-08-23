import { cn } from '@/utils/cn';
import React from 'react';
var FlexTableHeading = function (_a) {
    var type = _a.type, children = _a.children, className = _a.className, _b = _a.border, border = _b === void 0 ? true : _b;
    return (<div className={cn("text-muted-400 px-2 py-2 text-xs font-medium uppercase\n        ".concat(type == 'grow'
            ? "md:grow"
            : type == 'shrink'
                ? 'md:shrink'
                : type == 'stable'
                    ? 'sm:w-[90px] md:line-clamp-2 md:w-[110px] md:shrink-0'
                    : '', "\n    "), className && className, border && 'border-r border-muted-200 dark:border-muted-700 last:border-r-0')}>
      {children}
    </div>);
};
export default FlexTableHeading;
//# sourceMappingURL=FlexTableHeading.jsx.map