import { cn } from '@/utils/cn';
import React from 'react';
var FlexTableRow = function (_a) {
    var className = _a.className, rounded = _a.rounded, _b = _a.border, border = _b === void 0 ? true : _b, children = _a.children;
    return (<div className={cn("".concat(border && 'border', " w-full overflow-x-auto border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex flex-col  bg-white md:flex-row  md:justify-between \"\n        ").concat(rounded == 'sm'
            ? "rounded-md"
            : rounded == 'md'
                ? 'rounded-lg'
                : rounded == 'lg'
                    ? 'rounded-xl'
                    : '', "\n    "), className && className)}>
      {children}
    </div>);
};
export default FlexTableRow;
//# sourceMappingURL=FlexTableRow.jsx.map