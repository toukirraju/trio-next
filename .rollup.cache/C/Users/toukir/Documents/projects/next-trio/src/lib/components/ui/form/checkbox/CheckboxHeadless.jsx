import { __rest } from "tslib";
import React from "react";
var CheckboxHeadless = function (_a) {
    var id = _a.id, checked = _a.checked, label = _a.label, children = _a.children, props = __rest(_a, ["id", "checked", "label", "children"]);
    return (<div className="group/checkbox-headless relative">
      {label ? (<label className="mb-1 inline-block cursor-pointer select-none font-sans text-sm text-muted-400">
          {label}
        </label>) : ("")}
      <label htmlFor={id} className="relative block">
        <input id={id} className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0" type="checkbox" checked={checked} {...props}/>
        {children}
      </label>
    </div>);
};
export default CheckboxHeadless;
//# sourceMappingURL=CheckboxHeadless.jsx.map