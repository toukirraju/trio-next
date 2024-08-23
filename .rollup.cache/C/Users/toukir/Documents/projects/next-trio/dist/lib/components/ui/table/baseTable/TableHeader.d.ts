type TableHeaderProps = {
    columns: any[];
    records: any[];
    handleAllDataSelectedRecords: (e: any) => void;
    selectedRow: any[];
    showSelectBox: boolean;
    getSortingData: (data: any[]) => void;
    headerClasses?: string;
    selectBoxWrapperClass?: string;
};
declare const TableHeader: ({ columns, records, handleAllDataSelectedRecords, selectedRow, showSelectBox, getSortingData, headerClasses, selectBoxWrapperClass }: TableHeaderProps) => import("react").JSX.Element;
export default TableHeader;
