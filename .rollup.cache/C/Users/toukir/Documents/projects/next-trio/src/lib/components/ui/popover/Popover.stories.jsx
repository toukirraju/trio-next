import React from 'react';
import ExpPopover from './ExpPopover'; // Update the path if needed
// Meta configuration for Storybook
var meta = {
    title: 'UI/ExpPopover',
    component: ExpPopover,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        toggleIcon: { control: 'text' },
        toggleImage: { control: 'text' },
        indicator: { control: 'boolean' },
        showAll: { control: 'text' },
        toggleClassNames: { control: 'text' },
        indicatorClasses: { control: 'text' },
        orientation: {
            control: { type: 'radio', options: ['start', 'end'] }
        },
        shape: {
            control: { type: 'radio', options: ['straight', 'rounded', 'smooth', 'curved'] }
        },
        children: { control: 'text' }
    }
};
export default meta;
// Template for stories
var Template = function (args) {
    return (<div className="p-10">
      <ExpPopover {...args}/>
    </div>);
};
// Default story
export var Default = Template.bind({});
Default.args = {
    title: 'ExpPopover Title',
    children: 'This is the popover content.',
    toggleIcon: 'AiOutlineMenu',
    indicator: true,
    orientation: 'start',
    shape: 'smooth'
};
// Custom Shape story
export var CustomShape = function (args) {
    return (<div className="p-10 space-y-4">
      <ExpPopover {...args} shape="straight"/>
      <ExpPopover {...args} shape="rounded"/>
      <ExpPopover {...args} shape="smooth"/>
      <ExpPopover {...args} shape="curved"/>
    </div>);
};
CustomShape.args = {
    title: 'ExpPopover Title',
    children: 'This is the popover content.',
    toggleIcon: 'AiOutlineMenu',
    indicator: true,
    orientation: 'start'
};
// Custom Orientation story
export var CustomOrientation = function (args) {
    return (<div className="p-10 space-y-4">
      <ExpPopover {...args} orientation="start"/>
      <ExpPopover {...args} orientation="end"/>
    </div>);
};
CustomOrientation.args = {
    title: 'ExpPopover Title',
    children: 'This is the popover content.',
    toggleIcon: 'AiOutlineMenu',
    indicator: true,
    shape: 'smooth'
};
// Custom Styling story
export var CustomStyling = Template.bind({});
CustomStyling.args = {
    title: 'Styled ExpPopover',
    children: 'This is the styled popover content.',
    toggleIcon: 'AiOutlineMenu',
    indicator: true,
    orientation: 'start',
    shape: 'smooth',
    toggleClassNames: 'bg-blue-500 text-white',
    indicatorClasses: 'bg-red-500'
};
//# sourceMappingURL=Popover.stories.jsx.map