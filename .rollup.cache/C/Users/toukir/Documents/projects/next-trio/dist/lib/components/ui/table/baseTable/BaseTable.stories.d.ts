import React from 'react';
declare const _default: {
    title: string;
    component: ({ columns, records, title, wrapperClasses, captionClasses, tableBodyClasses, headerClasses, rowClasses, cellClasses, selectBoxWrapperClass, striped, onSelectedRecords, showSelectBox, headerShow }: {
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
    }) => React.JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export declare const Default: {
    args: {
        columns: {
            header: string;
            accessor: string;
            sortable: boolean;
        }[];
        records: {
            id: number;
            name: string;
            age: number;
        }[];
        title: string;
        captionClasses: string;
        headerShow: boolean;
        tableBodyClasses: string;
        showSelectBox: boolean;
        wrapperClasses: string;
        headerClasses: string;
        selectBoxWrapperClass: string;
        cellClasses: string;
    };
};
export declare const RenderCell: {
    render: (args: any) => React.JSX.Element;
    args: {
        columns: ({
            header: string;
            accessor: string;
            sortable: boolean;
            render: (row: any) => React.JSX.Element;
        } | {
            header: string;
            accessor: string;
            sortable: boolean;
            render?: undefined;
        })[];
        records: {
            id: number;
            name: string;
            age: number;
        }[];
        title: string;
        headerShow: boolean;
        tableBodyClasses: string;
        showSelectBox: boolean;
    };
};
