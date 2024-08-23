import React from 'react';
var FlexTable = function (_a) {
    var header = _a.header, body = _a.body, rowgap = _a.rowgap;
    return (<div className="relative">
      {header && <div className="hidden justify-between md:flex md:items-center">{header}</div>}
      
      <div className={"flex flex-col\n        ".concat(rowgap === 'sm' ? 'gap-y-1' : rowgap === 'md' ? 'gap-y-2' : rowgap === 'lg' ? 'gap-y-4' : '', "\n        ")}>
        {body}
      </div>
    </div>);
};
export default FlexTable;
//# sourceMappingURL=FlexTable.jsx.map