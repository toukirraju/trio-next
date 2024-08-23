import React from 'react';
import { DOTS, usePagination } from '@/hooks/usePagination';
import IconButton from '../button-icon/IconButton';
import { ReIcon } from '@/components/ReIcon/ReIcon';
var Pagination = function (_a) {
    var onPageChange = _a.onPageChange, totalCount = _a.totalCount, _b = _a.siblingCount, siblingCount = _b === void 0 ? 1 : _b, currentPage = _a.currentPage, pageSize = _a.pageSize, _c = _a.buttonSize, buttonSize = _c === void 0 ? 'md' : _c, _d = _a.buttonShape, buttonShape = _d === void 0 ? 'smooth' : _d;
    var paginationRange = usePagination({
        currentPage: currentPage,
        totalCount: totalCount,
        siblingCount: siblingCount,
        pageSize: pageSize
    });
    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || (paginationRange !== undefined && paginationRange.length < 2)) {
        return null;
    }
    var onNext = function () {
        onPageChange(currentPage + 1);
    };
    var onPrevious = function () {
        onPageChange(currentPage - 1);
    };
    var lastPage = paginationRange !== undefined ? paginationRange[paginationRange.length - 1] : 0;
    return (<ul className="flex justify-center gap-1 text-sm font-medium">
      {/* Left navigation arrow */}
      <li>
        <IconButton type="button" className="rtl:rotate-180" size={buttonSize} shape={buttonShape} disabled={currentPage === 1} onClick={onPrevious}>
          <span className="sr-only">Prev Page</span>
          <ReIcon iconName="AiOutlineLeft" className="h-4 w-4 scale-95"/>
        </IconButton>
      </li>
      {paginationRange === null || paginationRange === void 0 ? void 0 : paginationRange.map(function (pageNumber, index) {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
                return (<li key={index} className="pagination-item dots">
              <IconButton type="button" size={buttonSize} shape={buttonShape}>
                <ReIcon iconName="AiOutlineRight" className="h-4 w-4"/>
              </IconButton>
            </li>);
            }
            // Render our Page Pills
            return (<li key={index}>
            <IconButton type="button" size={buttonSize} shape={buttonShape} color={pageNumber === currentPage ? 'primary' : 'default'} onClick={function () { return onPageChange(pageNumber); }}>
              <span>{pageNumber}</span>
            </IconButton>
          </li>);
        })}
      {/*  Right Navigation arrow */}
      <li>
        <IconButton type="button" className="rtl:rotate-180" size={buttonSize} shape={buttonShape} disabled={currentPage === lastPage} onClick={onNext}>
          <span className="sr-only">Prev Page</span>
          <ReIcon iconName="AiOutlineRight" className="h-4 w-4 scale-95"/>
        </IconButton>
      </li>
    </ul>);
};
export default Pagination;
//# sourceMappingURL=Pagination.jsx.map