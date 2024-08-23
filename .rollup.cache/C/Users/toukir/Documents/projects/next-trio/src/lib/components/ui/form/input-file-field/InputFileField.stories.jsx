import { __assign } from "tslib";
import React from 'react';
import InputFileField from './InputFileField';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/InputFileField',
    component: InputFileField,
    tags: ['autodocs'],
    argTypes: {
        shape: {
            control: { type: 'radio', options: ['smooth', 'rounded', 'curved', 'full'] }
        },
        color: {
            control: { type: 'radio', options: ['default', 'contrast', 'muted', 'mutedContrast'] }
        },
        acceptedFileTypes: { control: 'array' },
        maxFileSize: { control: 'number' }
    }
};
export default meta;
var Template = function (args) { return <InputFileField {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    id: 'file-input-field-default',
    label: 'Upload your file',
    maxFileSize: 5,
    color: 'default',
    shape: 'smooth'
};
// Custom Color and Shape story
export var CustomAppearance = Template.bind({});
CustomAppearance.args = __assign(__assign({}, Default.args), { color: 'contrast', shape: 'curved' });
// Error State story
export var ErrorState = Template.bind({});
ErrorState.args = __assign(__assign({}, Default.args), { value: 'Error file.txt' });
// File Selected story
export var FileSelected = Template.bind({});
FileSelected.args = __assign(__assign({}, Default.args), { value: 'example-file.txt' });
//# sourceMappingURL=InputFileField.stories.jsx.map