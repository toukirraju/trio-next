'use client';
import { useEffect, useState } from 'react';
// import style from './style.module.css';
import TableBody from './TableBody1';
import TableHeader from './TableHeader1';
import handleAllDataSelectedRecord from './utils/table';
import { cn } from '@/utils/cn';
var style = {};
var DyTable = function (_a) {
    var _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.records, records = _c === void 0 ? [] : _c, title = _a.title, wrapperClasses = _a.wrapperClasses, captionClasses = _a.captionClasses, tableBodyClasses = _a.tableBodyClasses, headerClasses = _a.headerClasses, rowClasses = _a.rowClasses, cellClasses = _a.cellClasses, selectBoxWrapperClass = _a.selectBoxWrapperClass, stripedColor = _a.stripedColor, stripedHoverColor = _a.stripedHoverColor, _d = _a.striped, striped = _d === void 0 ? false : _d, _e = _a.border, border = _e === void 0 ? false : _e, onSelectedRecords = _a.onSelectedRecords, _f = _a.showSelectBox, showSelectBox = _f === void 0 ? false : _f, _g = _a.headerShow
    // paginationValue,
    // isPagination = true,
    // footerClasses,
    // footerData
    , headerShow = _g === void 0 ? true : _g
    // paginationValue,
    // isPagination = true,
    // footerClasses,
    // footerData
    ;
    var _h = useState(records || []), tableData = _h[0], setTableData = _h[1];
    //  all selected table area here
    var _j = useState([]), toggleProduct = _j[0], setToggleProduct = _j[1];
    // select box function code here for all data
    var handleAllDataSelectedRecords = function (e) {
        handleAllDataSelectedRecord(e, toggleProduct, setToggleProduct, records);
    };
    useEffect(function () {
        onSelectedRecords && onSelectedRecords(toggleProduct);
    }, [toggleProduct, onSelectedRecords]);
    var getSortedData = function (data) {
        setTableData(data);
    };
    return (<div className={style.table_area}>
      <div className={cn('w-auto overflow-x-auto custom__scrollbar', wrapperClasses && wrapperClasses)}>
        <table className={cn(
        // style.table__container,
        'w-full', border && style.border, striped && style.table__striped, tableBodyClasses && tableBodyClasses)}>
          {title && (<caption className={cn(captionClasses ? captionClasses : style.caption)}>
              {' '}
              {title}
            </caption>)}
          {/* table header and body */}

          {headerShow && (<TableHeader columns={columns} records={tableData} handleAllDataSelectedRecords={handleAllDataSelectedRecords} toggleProduct={toggleProduct} showSelectBox={showSelectBox} getSortingData={getSortedData} headerClasses={headerClasses} selectBoxWrapperClass={selectBoxWrapperClass}/>)}

          <TableBody columns={columns} records={tableData} stripedColor={stripedColor && stripedColor} stripedHoverColor={stripedHoverColor && stripedHoverColor} striped={striped} handleAllDataSelectedRecords={handleAllDataSelectedRecords} toggleProduct={toggleProduct} showSelectBox={showSelectBox ? true : headerShow ? showSelectBox : false} rowClasses={rowClasses && rowClasses} cellClasses={cellClasses && cellClasses} selectBoxWrapperClass={selectBoxWrapperClass}/>

          {/* {footerData && (
          <TableFooter footerData={footerData} footerClasses={footerClasses && footerClasses} />
        )} */}
        </table>
      </div>
      {/* {isPagination && paginationValue} */}
    </div>);
};
export default DyTable;
//# sourceMappingURL=Table1.jsx.map