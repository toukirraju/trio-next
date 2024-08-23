import { type FC } from 'react';
interface PaginationProps {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    buttonSize?: 'sm' | 'md' | 'lg';
    buttonShape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full';
}
declare const Pagination: FC<PaginationProps>;
export default Pagination;
