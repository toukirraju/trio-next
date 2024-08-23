import React from 'react';
declare const Tabs: ({ data, selectedItem, setSelectedItem }: {
    data: {
        name: string;
        count?: number;
    }[];
    selectedItem: any;
    setSelectedItem: any;
}) => React.JSX.Element;
export default Tabs;
