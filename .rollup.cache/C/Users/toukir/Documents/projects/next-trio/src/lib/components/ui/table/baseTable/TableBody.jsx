'use client';
import { __assign } from "tslib";
import { cn } from '@/utils/cn';
import Checkbox from '../../form/checkbox/Checkbox';
var TableBody = function (_a) {
    var columns = _a.columns, records = _a.records, selectedRow = _a.selectedRow, handleAllDataSelectedRecords = _a.handleAllDataSelectedRecords, showSelectBox = _a.showSelectBox, rowClasses = _a.rowClasses, cellClasses = _a.cellClasses, _b = _a.striped, striped = _b === void 0 ? false : _b, selectBoxWrapperClass = _a.selectBoxWrapperClass;
    return (<tbody>
      {records === null || records === void 0 ? void 0 : records.map(function (row, index) {
            return (<tr key={index} className={cn(' block border-b-2 [&:last-child]:border-none md:table-row md:border-b border-muted-200 dark:border-muted-600', rowClasses && rowClasses(row))}>
            {showSelectBox && (<td className={cn(
                    // 'w-full flex flex-row-reverse py-2', // Small screens
                    // 'md:w-10 md:flex   md:py-0', // Medium screens and up
                    // 'pt-2 md:pt-0',
                    selectBoxWrapperClass && selectBoxWrapperClass)}>
                <Checkbox aria-label="row-select" color="primary" checked={selectedRow.some(function (item) { return item.id === row.id; })} onChange={function () { return handleAllDataSelectedRecords(row); }}/>
               
              </td>)}
            {columns === null || columns === void 0 ? void 0 : columns.map(function (col, index) { return (<td key={index} className={cn('flex justify-between items-center px-3 border-b [&:last-child]:border-none md:table-cell border-muted-200 dark:border-muted-600', typeof cellClasses === "string" ? cellClasses : cellClasses ? cellClasses(row, row[col.accessor]) : '', (col === null || col === void 0 ? void 0 : col.classNames) && (col === null || col === void 0 ? void 0 : col.classNames))} style={__assign(__assign(__assign(__assign({ width: (col === null || col === void 0 ? void 0 : col.width) && "".concat(col === null || col === void 0 ? void 0 : col.width), textAlign: (col === null || col === void 0 ? void 0 : col.align) && (col === null || col === void 0 ? void 0 : col.align), color: (col === null || col === void 0 ? void 0 : col.color) && (col === null || col === void 0 ? void 0 : col.color), background: (col === null || col === void 0 ? void 0 : col.bg) && (col === null || col === void 0 ? void 0 : col.bg), fontWeight: (col === null || col === void 0 ? void 0 : col.fontWidth) && (col === null || col === void 0 ? void 0 : col.fontWidth), fontSize: (col === null || col === void 0 ? void 0 : col.fontSize) && (col === null || col === void 0 ? void 0 : col.fontSize) }, ((col === null || col === void 0 ? void 0 : col.py) && { padding: "".concat(col === null || col === void 0 ? void 0 : col.py, " 0") })), ((col === null || col === void 0 ? void 0 : col.px) && { padding: "0 ".concat(col === null || col === void 0 ? void 0 : col.px) })), ((col === null || col === void 0 ? void 0 : col.pl) && { paddingLeft: "".concat(col === null || col === void 0 ? void 0 : col.pl) })), ((col === null || col === void 0 ? void 0 : col.pr) && { paddingRight: "".concat(col === null || col === void 0 ? void 0 : col.pr) }))}>
                <span className="inline-block md:hidden font-bold">{col.header} </span>
                {/* {row[col.accessor]} */}
                {(col === null || col === void 0 ? void 0 : col.render) ? col === null || col === void 0 ? void 0 : col.render(row) : row[col.accessor]}
              </td>); })}
          </tr>);
        })}
    </tbody>);
};
export default TableBody;
//# sourceMappingURL=TableBody.jsx.map