import React from 'react';
var Loader = function (_a) {
    var _b = _a.thickness, thickness = _b === void 0 ? 5 : _b, classNames = _a.classNames, _c = _a.size, size = _c === void 0 ? 50 : _c;
    return (<span className={classNames}>
      <svg className={"loader"} viewBox="0 0 50 50" height={size} width={size}>
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth={thickness}></circle>
      </svg>
    </span>);
};
export default Loader;
//# sourceMappingURL=Loader.jsx.map