type PaginationProps = {
    currentPage: number;
    onPageChange: (page: number) => void;
    totalCount: number;
    pageSize: number;
    firstAndLast?: boolean;
    showAll?: boolean;
    showPage?: number;
    showRecords?: boolean;
    displayCount?: boolean;
};
declare const PaginationNew: ({ currentPage, onPageChange, totalCount, pageSize, firstAndLast, showAll, showPage, showRecords, displayCount }: PaginationProps) => import("react").JSX.Element;
export default PaginationNew;
