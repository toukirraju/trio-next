type TableBodyProps = {
    columns: any[];
    records: any[];
    selectedRow: any[];
    handleAllDataSelectedRecords: (row: any) => void;
    showSelectBox: boolean;
    rowClasses?: (row: any) => string;
    cellClasses?: ((row: any, value: any) => string | string | undefined);
    striped?: boolean;
    selectBoxWrapperClass?: string;
};
declare const TableBody: ({ columns, records, selectedRow, handleAllDataSelectedRecords, showSelectBox, rowClasses, cellClasses, striped, selectBoxWrapperClass }: TableBodyProps) => import("react").JSX.Element;
export default TableBody;
