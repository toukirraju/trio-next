var _a;
import { __spreadArray } from "tslib";
import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    columns: [
    // { id: 1, label: 'Member' },
    // { id: 2, label: 'Email' },
    // { id: 3, label: 'Phone' },
    // { id: 4, label: 'Property Listed' },
    // { id: 5, label: 'Customers' },
    // { id: 6, label: 'Status' },
    // { id: 7, label: 'Actions' }
    ],
    records: [],
    paginateRecords: [],
    selectedColumns: [
    // { id: 1, label: 'Member' },
    // { id: 2, label: 'Email' },
    // { id: 3, label: 'Phone' },
    // { id: 4, label: 'Property Listed' },
    // { id: 5, label: 'Customers' },
    // { id: 6, label: 'Status' },
    // { id: 7, label: 'Actions' }
    ],
    sortByFields: {
    // id: [
    //   { label: 'Ascending', value: 'asc' },
    //   { label: 'Descending', value: 'desc' }
    // ],
    // mail: [
    //   { label: 'A - Z', value: 'asc' },
    //   { label: 'Z - A', value: 'desc' }
    // ],
    // phone: [
    //   { label: 'A - Z', value: 'asc' },
    //   { label: 'Z - A', value: 'desc' }
    // ],
    // status: [
    //   { label: 'Ascending', value: 'asc' },
    //   { label: 'Descending', value: 'desc' }
    // ],
    // lastModified: [
    //   { label: 'Ascending', value: 'asc' },
    //   { label: 'Descending', value: 'desc' }
    // ]
    },
    sortOnField: {},
    groupByFields: [
    // { id: 1, label: 'status' },
    // { id: 2, label: 'mail' }
    ],
    selectedGroup: [],
    selectedRecordItems: [],
    selectedRecordGroup: [],
    paginationFields: [
        { id: 1, label: 'Total Record Count' },
        { id: 2, label: 'Display Record Count' },
        { id: 3, label: 'Show First & Last Page' },
        { id: 4, label: 'Show All Page' }
    ],
    selectedPaginatOption: [],
    pageCount: 10,
    page: 1,
    searchQuery: "",
    isLoading: false
};
var tableSlice = createSlice({
    name: 'table',
    initialState: initialState,
    reducers: {
        initRecords: function (state, action) {
            state.records = __spreadArray([], action.payload, true);
            state.paginateRecords = __spreadArray([], action.payload, true).slice(0, state.pageCount);
        },
        initFilterByColumn: function (state, action) {
            state.columns = action.payload;
            state.selectedColumns = action.payload;
        },
        initFilterByGroup: function (state, action) {
            state.groupByFields = action.payload;
        },
        initSortByFields: function (state, action) {
            state.sortByFields = action.payload;
        },
        setSelectedColumns: function (state, action) {
            var columnToToggle = action.payload;
            var isColumnSelected = state.selectedColumns.some(function (col) { return col.id === columnToToggle.id; });
            if (isColumnSelected) {
                // If the column is already selected, remove it
                state.selectedColumns = state.selectedColumns.filter(function (col) { return col.id !== columnToToggle.id; });
            }
            else {
                // If the column is not selected, add it
                state.selectedColumns.push(columnToToggle);
            }
        },
        setSelectedGroup: function (state, action) {
            var selectedGroup = action.payload;
            if (state.selectedGroup.length > 0 && state.selectedGroup[0].id === selectedGroup.id) {
                state.selectedGroup = []; // Reset to an empty array if the same group is selected
            }
            else {
                state.selectedGroup = [selectedGroup]; // Set the new selected group as the only element in the array
            }
        },
        setSortedFields: function (state, action) {
            var selectedField = action.payload;
            state.sortOnField = selectedField;
        },
        sortTableRecord: function (state, action) {
            var _a = action.payload, field = _a.field, order = _a.order;
            state.paginateRecords.sort(function (a, b) {
                var valueA = a[field];
                var valueB = b[field];
                // Check if the values are numeric (string or number)
                var isNumeric = !isNaN(valueA) && !isNaN(valueB);
                if (isNumeric) {
                    valueA = Number(valueA);
                    valueB = Number(valueB);
                }
                var comparison = 0;
                if (valueA < valueB) {
                    comparison = -1;
                }
                else if (valueA > valueB) {
                    comparison = 1;
                }
                return order === 'asc' ? comparison : -comparison;
            });
        },
        setSelectedRecordItems: function (state, action) {
            var selectedItem = action.payload;
            var isItemSelected = state.selectedRecordItems.some(function (item) { return item.id === selectedItem.id; });
            if (isItemSelected) {
                state.selectedRecordItems = state.selectedRecordItems.filter(function (item) { return item.id !== selectedItem.id; });
            }
            else {
                state.selectedRecordItems.push(selectedItem);
            }
        },
        setSelectedRecordGroup: function (state, action) {
            var group = action.payload;
            var isGroupFullySelected = group.groupItems.every(function (item) {
                return state.selectedRecordItems.some(function (selectedItem) { return selectedItem.id === item.id; });
            });
            if (isGroupFullySelected) {
                // Deselect the entire group
                state.selectedRecordItems = state.selectedRecordItems.filter(function (item) { return !group.groupItems.some(function (groupItem) { return groupItem.id === item.id; }); });
                state.selectedRecordGroup = state.selectedRecordGroup.filter(function (g) { return g.groupId !== group.groupId; });
            }
            else {
                // Select the entire group
                group.groupItems.forEach(function (item) {
                    if (!state.selectedRecordItems.some(function (selectedItem) { return selectedItem.id === item.id; })) {
                        state.selectedRecordItems.push(item);
                    }
                });
                if (!state.selectedRecordGroup.some(function (g) { return g.groupId === group.groupId; })) {
                    state.selectedRecordGroup.push(group);
                }
            }
        },
        selectAllRecords: function (state) {
            var allItems = state.paginateRecords.flatMap(function (item) {
                return 'groupItems' in item ? item.groupItems : [item];
            });
            var allGroups = state.paginateRecords.filter(function (item) { return 'groupId' in item; });
            if (state.selectedRecordItems.length === allItems.length) {
                // If all items are selected, deselect all
                state.selectedRecordItems = [];
                state.selectedRecordGroup = [];
            }
            else {
                // Otherwise, select all
                state.selectedRecordItems = allItems;
                state.selectedRecordGroup = allGroups;
            }
        },
        deleteSelectedRecords: function (state) {
            var selectedIds = new Set(state.selectedRecordItems.map(function (item) { return item.id; }));
            state.paginateRecords = state.paginateRecords.filter(function (record) {
                if ('groupItems' in record) {
                    record.groupItems = record.groupItems.filter(function (item) { return !selectedIds.has(item.id); });
                    return record.groupItems.length > 0;
                }
                return !selectedIds.has(record.id);
            });
            state.selectedRecordItems = [];
            state.selectedRecordGroup = [];
        },
        setSelectedPaginatOption: function (state, action) {
            // state.selectedPaginatOption = [...state.selectedPaginatOption,selectedField];
            var selectedField = action.payload;
            if (Array.isArray(action.payload)) {
                state.selectedPaginatOption = [];
            }
            else {
                var isItemSelected = state.selectedPaginatOption.some(function (item) { return item.id === selectedField.id; });
                if (isItemSelected) {
                    state.selectedPaginatOption = state.selectedPaginatOption.filter(function (item) { return item.id !== selectedField.id; });
                }
                else {
                    state.selectedPaginatOption.push(selectedField);
                }
            }
        },
        setPageCount: function (state, action) {
            state.pageCount = action.payload;
            state.paginateRecords = state.records.slice(0, state.pageCount);
        },
        setPage: function (state, action) {
            state.page = action.payload;
            var startIndex = (state.page - 1) * state.pageCount;
            var endIndex = Number(startIndex) + Number(state.pageCount);
            state.paginateRecords = state.records.slice(Number(startIndex), endIndex);
        },
        setPaginateRecords: function (state, action) {
            var recordsToPaginate = action.payload;
            var startIndex = (state.page - 1) * state.pageCount;
            var endIndex = startIndex + state.pageCount;
            state.paginateRecords = recordsToPaginate.slice(startIndex, endIndex);
        },
        setSearchQuery: function (state, action) {
            state.searchQuery = action.payload;
        },
        setLoading: function (state, action) {
            state.isLoading = action.payload;
        },
    }
});
export var initRecords = (_a = tableSlice.actions, _a.initRecords), initFilterByColumn = _a.initFilterByColumn, initFilterByGroup = _a.initFilterByGroup, initSortByFields = _a.initSortByFields, setSelectedColumns = _a.setSelectedColumns, setSelectedGroup = _a.setSelectedGroup, setSortedFields = _a.setSortedFields, sortTableRecord = _a.sortTableRecord, setSelectedRecordItems = _a.setSelectedRecordItems, setSelectedRecordGroup = _a.setSelectedRecordGroup, selectAllRecords = _a.selectAllRecords, deleteSelectedRecords = _a.deleteSelectedRecords, setSelectedPaginatOption = _a.setSelectedPaginatOption, setPageCount = _a.setPageCount, setPage = _a.setPage, setPaginateRecords = _a.setPaginateRecords, setSearchQuery = _a.setSearchQuery, setLoading = _a.setLoading;
export default tableSlice.reducer;
//# sourceMappingURL=tableSlice.js.map