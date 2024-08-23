import { __rest } from "tslib";
import React from 'react';
var RadioHeadless = function (_a) {
    var id = _a.id, checked = _a.checked, label = _a.label, name = _a.name, children = _a.children, props = __rest(_a, ["id", "checked", "label", "name", "children"]);
    return (<div className="group/radio-headless relative">
      {label ? (<label className="mb-1 inline-block cursor-pointer select-none font-sans text-sm text-muted-400">
          {label}
        </label>) : ('')}
      <div className="relative">
        <input type="radio" id={id} name={name} checked={checked} {...props} className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"/>
        {children}
      </div>
    </div>);
};
export default RadioHeadless;
//# sourceMappingURL=RadioHeadless.jsx.map