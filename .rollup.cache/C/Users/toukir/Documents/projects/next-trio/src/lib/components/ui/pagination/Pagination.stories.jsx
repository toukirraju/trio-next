import React from 'react';
import Pagination from './Pagination';
// Meta configuration for Storybook
var meta = {
    title: 'UI/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {
        onPageChange: { action: 'onPageChange' },
        totalCount: { control: 'number' },
        siblingCount: { control: 'number' },
        currentPage: { control: 'number' },
        pageSize: { control: 'number' },
        buttonSize: {
            control: { type: 'radio', options: ['sm', 'md', 'lg'] }
        },
        buttonShape: {
            control: { type: 'radio', options: ['straight', 'rounded', 'smooth', 'curved', 'full'] }
        }
    }
};
export default meta;
// Template for stories
var Template = function (args) {
    var _a = React.useState(args.currentPage || 1), currentPage = _a[0], setCurrentPage = _a[1];
    var handlePageChange = function (page) {
        setCurrentPage(page);
        args.onPageChange(page);
    };
    return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange}/>;
};
// Default story
export var Default = Template.bind({});
Default.args = {
    totalCount: 100,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
    buttonSize: 'md',
    buttonShape: 'smooth'
};
// Different Sizes story
export var DifferentSizes = function (args) {
    var _a = React.useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    var handlePageChange = function (page) {
        setCurrentPage(page);
    };
    return (<div className="space-y-4">
      <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} buttonSize="sm"/>
      <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} buttonSize="md"/>
      <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} buttonSize="lg"/>
    </div>);
};
DifferentSizes.args = {
    totalCount: 100,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
    buttonShape: 'smooth'
};
// Different Shapes story
export var DifferentShapes = function (args) {
    var _a = React.useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    var handlePageChange = function (page) {
        setCurrentPage(page);
    };
    return (<div className="space-y-4">
      <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} buttonShape="straight"/>
      <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} buttonShape="rounded"/>
      <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} buttonShape="smooth"/>
      <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} buttonShape="curved"/>
      <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} buttonShape="full"/>
    </div>);
};
DifferentShapes.args = {
    totalCount: 100,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
    buttonSize: 'md'
};
// Custom Styling story
export var CustomStyling = Template.bind({});
CustomStyling.args = {
    totalCount: 100,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
    buttonSize: 'md',
    buttonShape: 'smooth'
};
//# sourceMappingURL=Pagination.stories.jsx.map