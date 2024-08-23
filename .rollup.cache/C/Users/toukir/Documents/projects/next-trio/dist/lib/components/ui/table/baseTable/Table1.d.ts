type DyTableProps = {
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
declare const DyTable: ({ columns, records, title, wrapperClasses, captionClasses, tableBodyClasses, headerClasses, rowClasses, cellClasses, selectBoxWrapperClass, stripedColor, stripedHoverColor, striped, border, onSelectedRecords, showSelectBox, headerShow }: DyTableProps) => import("react").JSX.Element;
export default DyTable;
