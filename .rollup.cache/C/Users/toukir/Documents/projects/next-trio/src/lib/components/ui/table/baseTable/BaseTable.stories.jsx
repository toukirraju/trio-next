import React from 'react';
import Table from './Table';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Table/Base Table',
    component: Table,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
};
export var Default = {
    args: {
        columns: [
            {
                header: 'Name',
                accessor: 'name',
                sortable: true
                // width: 300,
                // align: 'center'
                // color: 'red',
                // bg: 'blue',
                // fontWidth: 'bold',
                // fontSize: '18px'
            },
            {
                header: 'Age',
                accessor: 'age',
                sortable: true
            }
        ],
        records: [
            {
                id: 1,
                name: 'John Doe',
                age: 30
            },
            {
                id: 2,
                name: 'Jane Doe',
                age: 25
            },
            {
                id: 3,
                name: 'John Smith',
                age: 40
            },
            {
                id: 4,
                name: 'Jane Smith',
                age: 35
            },
            {
                id: 5,
                name: 'John Johnson',
                age: 50
            },
            {
                id: 6,
                name: 'Jane Johnson',
                age: 45
            },
            {
                id: 7,
                name: 'John Brown',
                age: 55
            }
        ],
        title: 'Test Table Title',
        captionClasses: 'text-red-500',
        headerShow: true,
        tableBodyClasses: 'table-fixed',
        showSelectBox: true,
        wrapperClasses: "rounded-xl shadow-sm",
        headerClasses: "h-10",
        selectBoxWrapperClass: "pl-5 pr-2 pt-2",
        cellClasses: 'py-2',
    }
};
export var RenderCell = {
    render: function (args) {
        return (<>
        <Table {...args}/>
      </>);
    },
    args: {
        columns: [
            {
                header: 'Name',
                accessor: 'name',
                sortable: true,
                // width: 300,
                // align: 'center'
                // color: 'red',
                // bg: 'blue',
                // fontWidth: 'bold',
                // fontSize: '18px'
                render: function (row) {
                    return (<div className={row.age > 50 ? 'bg-red-100' : ""}>
              <>
                <span className="mr-2">{row.name}</span>
                <span className="text-xs text-gray-400">({row.age})</span>
                {row.age > 50 && <span className="text-xs text-red-400 px-5">Very Aged</span>}
              </>
            </div>);
                }
            },
            {
                header: 'Age',
                accessor: 'age',
                sortable: true
            }
        ],
        records: [
            {
                id: 1,
                name: 'John Doe',
                age: 30
            },
            {
                id: 2,
                name: 'Jane Doe',
                age: 25
            },
            {
                id: 3,
                name: 'John Smith',
                age: 40
            },
            {
                id: 4,
                name: 'Jane Smith',
                age: 35
            },
            {
                id: 5,
                name: 'John Johnson',
                age: 50
            },
            {
                id: 6,
                name: 'Jane Johnson',
                age: 45
            },
            {
                id: 7,
                name: 'John Brown',
                age: 55
            }
        ],
        title: 'Render Cell',
        headerShow: true,
        tableBodyClasses: 'table-fixed',
        showSelectBox: true
    }
};
//# sourceMappingURL=BaseTable.stories.jsx.map