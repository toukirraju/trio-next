'use client';
import { __assign } from "tslib";
import { cn } from '@/utils/cn';
import { useState } from 'react';
var TableBody = function (_a) {
    var columns = _a.columns, records = _a.records, toggleProduct = _a.toggleProduct, handleAllDataSelectedRecords = _a.handleAllDataSelectedRecords, showSelectBox = _a.showSelectBox, rowClasses = _a.rowClasses, cellClasses = _a.cellClasses, stripedColor = _a.stripedColor, stripedHoverColor = _a.stripedHoverColor, _b = _a.striped, striped = _b === void 0 ? false : _b, selectBoxWrapperClass = _a.selectBoxWrapperClass;
    var _c = useState(null), hoveredRow = _c[0], setHoveredRow = _c[1];
    var handleMouseEnter = function (index) {
        if (striped && stripedHoverColor) {
            setHoveredRow(index);
        }
    };
    var handleMouseLeave = function () {
        setHoveredRow(null);
    };
    return (<tbody>
      {/* table body html code */}
      {records === null || records === void 0 ? void 0 : records.map(function (row, index) {
            var rowStyle = {
                background: striped && index % 2 !== 0 && !hoveredRow
                    ? stripedColor
                    : striped && index % 2 !== 0 && hoveredRow === index
                        ? stripedHoverColor
                        : undefined
            };
            return (<tr key={index} 
            // style={rowStyle}
            // onMouseEnter={() => handleMouseEnter(index)}
            // onMouseLeave={handleMouseLeave}
            className={rowClasses && rowClasses(row)}>
            {showSelectBox && (<td 
                // style={{ textAlign: 'right' }}
                className={cn('w-7', selectBoxWrapperClass && selectBoxWrapperClass)}>
                <input aria-label="row-select" type="checkbox" checked={toggleProduct.some(function (item) { return item.id === row.id; })} onChange={function () { return handleAllDataSelectedRecords(row); }}/>
              </td>)}
            {columns === null || columns === void 0 ? void 0 : columns.map(function (col, index) { return (<td style={__assign(__assign(__assign(__assign({ width: (col === null || col === void 0 ? void 0 : col.width) && "".concat(col === null || col === void 0 ? void 0 : col.width), textAlign: (col === null || col === void 0 ? void 0 : col.align) && (col === null || col === void 0 ? void 0 : col.align), color: (col === null || col === void 0 ? void 0 : col.color) && (col === null || col === void 0 ? void 0 : col.color), background: (col === null || col === void 0 ? void 0 : col.bg) && (col === null || col === void 0 ? void 0 : col.bg), fontWeight: (col === null || col === void 0 ? void 0 : col.fontWidth) && (col === null || col === void 0 ? void 0 : col.fontWidth), fontSize: (col === null || col === void 0 ? void 0 : col.fontSize) && (col === null || col === void 0 ? void 0 : col.fontSize) }, ((col === null || col === void 0 ? void 0 : col.py) && { padding: "".concat(col === null || col === void 0 ? void 0 : col.py, " 0") })), ((col === null || col === void 0 ? void 0 : col.px) && { padding: "0 ".concat(col === null || col === void 0 ? void 0 : col.px) })), ((col === null || col === void 0 ? void 0 : col.pl) && { paddingLeft: "".concat(col === null || col === void 0 ? void 0 : col.pl) })), ((col === null || col === void 0 ? void 0 : col.pr) && { paddingRight: "".concat(col === null || col === void 0 ? void 0 : col.pr) }))} key={index} className={"".concat(cellClasses && cellClasses(row, row[col.accessor]), " ").concat((col === null || col === void 0 ? void 0 : col.classNames) && (col === null || col === void 0 ? void 0 : col.classNames))}>
                {(col === null || col === void 0 ? void 0 : col.render) ? col === null || col === void 0 ? void 0 : col.render(row) : row[col.accessor]}
              </td>); })}
          </tr>);
        })}
    </tbody>);
};
export default TableBody;
//# sourceMappingURL=TableBody1.jsx.map