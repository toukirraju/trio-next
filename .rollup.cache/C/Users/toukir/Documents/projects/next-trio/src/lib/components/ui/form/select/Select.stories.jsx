import { __assign } from "tslib";
import React from 'react';
import Select from './Select';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        icon: { control: 'text' },
        color: {
            control: { type: 'select', options: ['default', 'contrast', 'muted', 'mutedContrast'] }
        },
        shape: {
            control: { type: 'select', options: ['smooth', 'rounded', 'curved', 'full'] }
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] }
        },
        error: { control: 'text' },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' }
    }
};
export default meta;
var Template = function (args) { return <Select {...args}/>; };
// Sample options
var sampleOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
];
// Default story
export var Default = Template.bind({});
Default.args = {
    label: 'Select an option',
    options: sampleOptions,
    color: 'default',
    size: 'md',
    shape: 'smooth'
};
// With Icon story
export var WithIcon = Template.bind({});
WithIcon.args = __assign(__assign({}, Default.args), { icon: 'BsPersonCircle', label: 'Select with Icon' });
// With Error story
export var WithError = Template.bind({});
WithError.args = __assign(__assign({}, Default.args), { error: 'This field is required', label: 'Select with Error' });
// Loading story
export var Loading = Template.bind({});
Loading.args = __assign(__assign({}, Default.args), { loading: true, label: 'Loading Select' });
// Disabled story
export var Disabled = Template.bind({});
Disabled.args = __assign(__assign({}, Default.args), { disabled: true, label: 'Disabled Select' });
// Custom Styling story
export var CustomStyling = Template.bind({});
CustomStyling.args = __assign(__assign({}, Default.args), { label: 'Custom Styled Select', color: 'muted', shape: 'curved', size: 'lg', containerClasses: 'max-w-xs' });
// String Options story
export var StringOptions = Template.bind({});
StringOptions.args = __assign(__assign({}, Default.args), { label: 'Select with String Options', options: ['Red', 'Green', 'Blue'] });
//# sourceMappingURL=Select.stories.jsx.map