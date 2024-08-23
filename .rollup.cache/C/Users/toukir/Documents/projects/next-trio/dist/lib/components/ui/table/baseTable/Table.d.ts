type TableProps = {
    columns?: any[];
    records?: any[];
    title?: string;
    wrapperClasses?: string;
    captionClasses?: string;
    tableBodyClasses?: string;
    selectBoxWrapperClass?: string;
    striped?: boolean;
    border?: boolean;
    onSelectedRecords?: (records: any[]) => void;
    showSelectBox?: boolean;
    headerShow?: boolean;
    rowClasses?: (data: any) => string;
    headerClasses?: string;
    cellClasses?: (data: any, value: any) => string;
};
declare const Table: ({ columns, records, title, wrapperClasses, captionClasses, tableBodyClasses, headerClasses, rowClasses, cellClasses, selectBoxWrapperClass, striped, onSelectedRecords, showSelectBox, headerShow }: TableProps) => import("react").JSX.Element;
export default Table;
