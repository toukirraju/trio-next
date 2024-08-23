'use client';
import { useEffect, useState } from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import handleAllDataSelectedRecord from './utils/table';
import { cn } from '@/utils/cn';
var Table = function (_a) {
    var _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.records, records = _c === void 0 ? [] : _c, title = _a.title, wrapperClasses = _a.wrapperClasses, captionClasses = _a.captionClasses, tableBodyClasses = _a.tableBodyClasses, headerClasses = _a.headerClasses, rowClasses = _a.rowClasses, cellClasses = _a.cellClasses, selectBoxWrapperClass = _a.selectBoxWrapperClass, _d = _a.striped, striped = _d === void 0 ? false : _d, onSelectedRecords = _a.onSelectedRecords, _e = _a.showSelectBox, showSelectBox = _e === void 0 ? false : _e, _f = _a.headerShow, headerShow = _f === void 0 ? true : _f;
    var _g = useState(records || []), tableData = _g[0], setTableData = _g[1];
    //  all selected table area here
    var _h = useState([]), selectedRow = _h[0], setselectedRow = _h[1];
    // select box function code here for all data
    var handleAllDataSelectedRecords = function (e) {
        handleAllDataSelectedRecord(e, selectedRow, setselectedRow, records);
    };
    useEffect(function () {
        onSelectedRecords && onSelectedRecords(selectedRow);
    }, [selectedRow, onSelectedRecords]);
    var getSortedData = function (data) {
        setTableData(data);
    };
    return (<div className={cn('w-auto overflow-x-auto custom__scrollbar border-2 border-muted-200 dark:border-muted-600', wrapperClasses && wrapperClasses)}>
      <table className={cn('w-full border-collapse bg-muted-50-50 dark:bg-muted-800 dark:text-muted-200', tableBodyClasses && tableBodyClasses)}>
        {title && (<caption className={cn('text-lg py-2', captionClasses && captionClasses)}>
            {title}
          </caption>)}

        {headerShow && (<TableHeader columns={columns} records={tableData} handleAllDataSelectedRecords={handleAllDataSelectedRecords} selectedRow={selectedRow} showSelectBox={showSelectBox} getSortingData={getSortedData} headerClasses={headerClasses} selectBoxWrapperClass={selectBoxWrapperClass}/>)}

        <TableBody columns={columns} records={tableData} striped={striped} handleAllDataSelectedRecords={handleAllDataSelectedRecords} selectedRow={selectedRow} showSelectBox={showSelectBox ? true : headerShow ? showSelectBox : false} rowClasses={rowClasses && rowClasses} cellClasses={cellClasses && cellClasses} selectBoxWrapperClass={selectBoxWrapperClass}/>
      </table>
    </div>);
};
export default Table;
//# sourceMappingURL=Table.jsx.map