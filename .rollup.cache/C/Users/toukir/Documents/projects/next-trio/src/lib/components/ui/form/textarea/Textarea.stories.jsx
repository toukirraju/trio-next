import { __assign } from "tslib";
import React from 'react';
import Textarea from './Textarea';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        color: {
            control: { type: 'select', options: ['default', 'contrast', 'muted', 'mutedContrast'] }
        },
        shape: {
            control: { type: 'select', options: ['smooth', 'rounded', 'curved', 'full'] }
        },
        error: { control: 'text' },
        resize: { control: 'boolean' },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        placeholder: { control: 'text' },
        rows: { control: 'number' }
    }
};
export default meta;
var Template = function (args) { return <Textarea {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    label: 'Default Textarea',
    placeholder: 'Enter your text here...',
    color: 'default',
    shape: 'smooth'
};
// With Error story
export var WithError = Template.bind({});
WithError.args = __assign(__assign({}, Default.args), { label: 'Textarea with Error', error: 'This field is required' });
// Resizable story
export var Resizable = Template.bind({});
Resizable.args = __assign(__assign({}, Default.args), { label: 'Resizable Textarea', resize: true });
// Loading story
export var Loading = Template.bind({});
Loading.args = __assign(__assign({}, Default.args), { label: 'Loading Textarea', loading: true });
// Disabled story
export var Disabled = Template.bind({});
Disabled.args = __assign(__assign({}, Default.args), { label: 'Disabled Textarea', disabled: true });
// Custom Styling story
export var CustomStyling = Template.bind({});
CustomStyling.args = __assign(__assign({}, Default.args), { label: 'Custom Styled Textarea', color: 'muted', shape: 'curved', className: 'max-w-md' });
// Long Content story
export var LongContent = Template.bind({});
LongContent.args = __assign(__assign({}, Default.args), { label: 'Textarea with Long Content', rows: 8, value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.' });
//# sourceMappingURL=Textarea.stories.jsx.map