type TableBodyProps = {
    columns: any[];
    records: any[];
    toggleProduct: any[];
    handleAllDataSelectedRecords: (row: any) => void;
    showSelectBox: boolean;
    rowClasses?: (row: any) => string;
    cellClasses?: (row: any, value: any) => string;
    stripedColor?: string;
    stripedHoverColor?: string;
    striped?: boolean;
    selectBoxWrapperClass?: string;
};
declare const TableBody: ({ columns, records, toggleProduct, handleAllDataSelectedRecords, showSelectBox, rowClasses, cellClasses, stripedColor, stripedHoverColor, striped, selectBoxWrapperClass }: TableBodyProps) => import("react").JSX.Element;
export default TableBody;
