import { cn } from '@/utils/cn';
import _ from 'lodash';
import Button from '../button/Button';
import IconButton from '../button-icon/IconButton';
import { ReIcon } from '@/components/ReIcon/ReIcon';
import BaseParagraph from '../base-paragraph/BaseParagraph';
var PaginationNew = function (_a) {
    var currentPage = _a.currentPage, onPageChange = _a.onPageChange, totalCount = _a.totalCount, pageSize = _a.pageSize, firstAndLast = _a.firstAndLast, showAll = _a.showAll, _b = _a.showPage, showPage = _b === void 0 ? 1 : _b, showRecords = _a.showRecords, displayCount = _a.displayCount;
    var totalPages = Math.ceil(totalCount / pageSize);
    // if (totalPages <= 1) return null;
    var getPageCount = function (totalPage, currentPage, showPage) {
        var half = Math.floor(showPage / 2);
        var startPage = Math.max(1, currentPage - half);
        var endPage = Math.min(totalPage, currentPage + half);
        if (currentPage <= half) {
            endPage = Math.min(totalPage, showPage);
        }
        else if (currentPage + half >= totalPage) {
            startPage = Math.max(1, totalPage - showPage + 1);
        }
        var pageRange = _.range(startPage, endPage + 1);
        if (startPage > totalPage / 2) {
            pageRange.unshift('middle...');
        }
        // Add dots if necessary
        if (startPage > 3) {
            pageRange.unshift(1);
        }
        // add middle
        if (endPage < totalPage / 2) {
            pageRange.push('middle...');
        }
        // add last page number
        if (endPage < totalPage) {
            pageRange.push(totalPage);
        }
        return pageRange;
    };
    // page count wit ...
    var pages = getPageCount(totalPages, currentPage, showPage);
    // page count all
    var grantedTotalPages = Array.from({ length: totalPages }, function (_, i) { return i + 1; });
    // handle page changes
    var handlePageChange = function (page) {
        if (page < 1 || page > totalPages)
            return;
        var newPage = page.toString() === 'middle...' ? Math.ceil(totalPages / 2) : page;
        onPageChange(newPage);
    };
    var countPagesData = totalPages <= 1 ? Array(1).fill(1) : showAll ? grantedTotalPages : pages || [];
    console.log('countPagesData', countPagesData);
    return (<div className={cn('flex flex-col md:flex-row items-center justify-between gap-3', !showRecords && !displayCount && 'justify-end')}>
      {/* {showRecords && (
          <BaseParagraph as="p" size="md" color="muted" weight="medium">
            Showing{' '}
            {showRecords === 'total_records'
              ? `Total Records ${totalCount}`
              : `Display Records ${pageSize}`}
          </BaseParagraph>
        )} */}
      {showRecords && !displayCount && (<BaseParagraph as="p" size="md" color="muted" weight="medium">
          Total Records {totalCount}
        </BaseParagraph>)}
      {displayCount && !showRecords && (<BaseParagraph as="p" size="md" color="muted" weight="medium">
          Total Records {pageSize}
        </BaseParagraph>)}
      {displayCount && showRecords && (<BaseParagraph as="p" size="md" color="muted" weight="medium">
          Showing Total Records  {pageSize} of {totalCount}
        </BaseParagraph>)}
      {/* pagination block */}
      <div className="flex items-center gap-1">
        {/* first */}
        {firstAndLast && (<Button disabled={currentPage === 1} onClick={function () { return handlePageChange(1); }}>
            First
          </Button>)}

        {/* prev */}
        <IconButton type="button" className="rtl:rotate-180" disabled={currentPage === 1} onClick={function () { return handlePageChange(currentPage - 1); }}>
          <span className="sr-only">Prev Page</span>
          <ReIcon iconName="AiOutlineLeft"/>
        </IconButton>

        {/* pages */}
        <div className="flex flex-wrap items-center justify-center gap-1">
          {countPagesData === null || countPagesData === void 0 ? void 0 : countPagesData.map(function (page, index) { return (<IconButton key={index} variant={currentPage === page ? 'solid' : 'outlined'} color={currentPage === page ? 'primary' : 'muted'} onClick={function () { return handlePageChange(page); }}>
              {(page === null || page === void 0 ? void 0 : page.toString().includes('...')) ? '...' : page}
              {/* {page} */}
            </IconButton>); })}
        </div>

        {/* next */}
        <IconButton type="button" className="rtl:rotate-180" disabled={currentPage === totalPages} onClick={function () { return handlePageChange(currentPage + 1); }}>
          <span className="sr-only">Next Page</span>
          <ReIcon iconName="AiOutlineRight"/>
        </IconButton>

        {/* last */}
        {firstAndLast && (<Button disabled={currentPage === totalPages} onClick={function () { return handlePageChange(totalPages); }}>
            Last
          </Button>)}
      </div>
    </div>);
};
export default PaginationNew;
//# sourceMappingURL=PaginationNew.jsx.map