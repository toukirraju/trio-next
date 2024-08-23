import { __rest } from "tslib";
import React from 'react';
import { radioVariants } from '../../variants/radio-variants';
import { ReIcon } from '@/components/ReIcon/ReIcon';
var Radio = function (_a) {
    // const radioId = label.toLocaleLowerCase().replaceAll(" ", "-");
    var id = _a.id, type = _a.type, color = _a.color, label = _a.label, _b = _a.className, classes = _b === void 0 ? '' : _b, props = __rest(_a, ["id", "type", "color", "label", "className"]);
    return (<div className={"radio-".concat(color || 'default', "  relative inline-block cursor-pointer leading-tight")}>
      <label htmlFor={id} className="flex items-center">
        <span className="shrink-0 relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border border-muted-300 bg-muted-100 text-white transition-shadow duration-300 dark:border-muted-700 dark:bg-muted-800">
          <input id={id} type="radio" className={"peer absolute top-0 start-0 z-[3] h-full w-full cursor-pointer appearance-none ".concat(classes)} {...props}/>
          <ReIcon iconName="GoDotFill" className={radioVariants({ color: color })}/>
          <span className="absolute top-0 start-0 z-[1] block h-full  w-full scale-0 rounded-full bg-white transition-transform duration-300 peer-checked:scale-[1.1] peer-checked:rounded-[.35rem] dark:bg-muted-900"></span>
        </span>
        <span className="ms-2 cursor-pointer text-[.9rem] text-muted-400">{label}</span>
      </label>
    </div>);
};
export default Radio;
//# sourceMappingURL=Radio.jsx.map