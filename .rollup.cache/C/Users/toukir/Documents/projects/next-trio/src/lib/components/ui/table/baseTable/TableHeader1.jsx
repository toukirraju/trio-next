'use client';
import { __assign, __spreadArray } from "tslib";
import { cn } from '@/utils/cn';
import { useState } from 'react';
import { ReIcon } from '../ps-production/ReIcon/ReIcon';
var TableHeader = function (_a) {
    var columns = _a.columns, records = _a.records, handleAllDataSelectedRecords = _a.handleAllDataSelectedRecords, toggleProduct = _a.toggleProduct, showSelectBox = _a.showSelectBox, getSortingData = _a.getSortingData, headerClasses = _a.headerClasses, selectBoxWrapperClass = _a.selectBoxWrapperClass;
    //init sorting sorted data
    var initialSortConfig = columns === null || columns === void 0 ? void 0 : columns.reduce(function (acc, column) {
        if (column === null || column === void 0 ? void 0 : column.sortable) {
            acc[column === null || column === void 0 ? void 0 : column.accessor] = { key: column === null || column === void 0 ? void 0 : column.accessor, direction: 'asc' };
        }
        return acc;
    }, {});
    var _b = useState(initialSortConfig || {}), sortConfig = _b[0], setSortConfig = _b[1];
    // sorting function code here
    var handleSort = function (key) {
        var _a;
        var _b;
        var direction = sortConfig[key].direction === 'asc' ? 'desc' : 'asc';
        var newSortConfig = __assign(__assign({}, sortConfig), (_a = {}, _a[key] = { key: key, direction: direction }, _a));
        var resultData = (records === null || records === void 0 ? void 0 : records.length) &&
            ((_b = __spreadArray([], records, true)) === null || _b === void 0 ? void 0 : _b.sort(function (a, b) {
                if (direction === 'asc') {
                    return a[key] > b[key] ? 1 : -1;
                }
                else if (direction === 'desc') {
                    return a[key] < b[key] ? 1 : -1;
                }
                return 0;
            }));
        getSortingData && getSortingData(resultData || []);
        setSortConfig(newSortConfig);
    };
    return (<thead className={cn('text-left', headerClasses && headerClasses)}>
      <tr>
        {/* columns header html code  */}
        {showSelectBox && (<th role="rowheader" 
        // style={{ width: '30px', paddingLeft: '30px' }}
        className={cn('w-7', selectBoxWrapperClass && selectBoxWrapperClass)}>
            <input aria-label="header-select" type="checkbox" checked={toggleProduct.length === records.length} onChange={function () {
                handleAllDataSelectedRecords('all');
            }}/>
          </th>)}
        {columns === null || columns === void 0 ? void 0 : columns.map(function (column, index) {
            return (<th style={__assign(__assign(__assign(__assign({ width: (column === null || column === void 0 ? void 0 : column.width) && "".concat(column === null || column === void 0 ? void 0 : column.width), textAlign: (column === null || column === void 0 ? void 0 : column.align) && (column === null || column === void 0 ? void 0 : column.align), color: (column === null || column === void 0 ? void 0 : column.color) && (column === null || column === void 0 ? void 0 : column.color), background: (column === null || column === void 0 ? void 0 : column.bg) && (column === null || column === void 0 ? void 0 : column.bg), fontWeight: (column === null || column === void 0 ? void 0 : column.fontWidth) && (column === null || column === void 0 ? void 0 : column.fontWidth), fontSize: (column === null || column === void 0 ? void 0 : column.fontSize) && (column === null || column === void 0 ? void 0 : column.fontSize) }, ((column === null || column === void 0 ? void 0 : column.py) && { padding: "".concat(column === null || column === void 0 ? void 0 : column.py, " 0") })), ((column === null || column === void 0 ? void 0 : column.px) && { padding: "0 ".concat(column === null || column === void 0 ? void 0 : column.px) })), ((column === null || column === void 0 ? void 0 : column.pl) && { paddingLeft: "".concat(column === null || column === void 0 ? void 0 : column.pl) })), ((column === null || column === void 0 ? void 0 : column.pr) && { paddingRight: "".concat(column === null || column === void 0 ? void 0 : column.pr) }))} role="rowheader" key={index}>
              <div className="flex items-center gap-1 font-normal ">
                {/* header name  */}
                {column === null || column === void 0 ? void 0 : column.header}
                {/* header actions  */}
                {(column === null || column === void 0 ? void 0 : column.sortable) && (<span className="cursor-pointer" onClick={function () { return (column === null || column === void 0 ? void 0 : column.sortable) && handleSort(column === null || column === void 0 ? void 0 : column.accessor); }}>
                    {sortConfig[column.accessor].key === column.accessor && (<span>
                        {sortConfig[column.accessor].direction === 'asc' ? (<span onClick={function () { return handleSort(column.accessor); }} className={" sorted duration-1000 transition-all ease-linear ".concat(sortConfig[column.accessor].key === column.accessor ? 'sorted' : '')}>
                            <ReIcon iconName="AiOutlineArrowUp"/>
                          </span>) : (<span onClick={function () { return handleSort(column.accessor); }} className=" duration-1000 transition-all ease-linear sorted">
                            <ReIcon iconName="AiOutlineArrowDown"/>
                          </span>)}
                      </span>)}
                  </span>)}
              </div>
            </th>);
        })}
      </tr>
    </thead>);
};
export default TableHeader;
//# sourceMappingURL=TableHeader1.jsx.map