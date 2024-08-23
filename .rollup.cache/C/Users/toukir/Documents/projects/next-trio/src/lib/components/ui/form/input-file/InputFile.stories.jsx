import { __assign } from "tslib";
import React from 'react';
import InputFile from './InputFile';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/InputFile',
    component: InputFile,
    tags: ['autodocs'],
    argTypes: {
        shape: {
            control: { type: 'radio', options: ['straight', 'rounded', 'smooth', 'curved', 'full'] }
        },
        color: {
            control: {
                type: 'radio',
                options: [
                    'default',
                    'contrast',
                    'muted',
                    'mutedContrast',
                    'primary',
                    'info',
                    'success',
                    'warning',
                    'danger',
                    'none'
                ]
            }
        },
        acceptedFileTypes: { control: 'array' },
        maxFileSize: { control: 'number' },
        allowMultiple: { control: 'boolean' },
        bordered: { control: 'boolean' },
        spaced: { control: 'boolean' }
    }
};
export default meta;
var Template = function (args) { return <InputFile {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    id: 'file-input-default',
    url: 'https://example.com/upload',
    label: 'Upload File',
    labelAlt: 'Max size: 5MB',
    shape: 'smooth',
    color: 'contrast',
    maxFileSize: 5,
    allowMultiple: false,
    bordered: true,
    spaced: true
};
// Error state story
export var ErrorState = Template.bind({});
ErrorState.args = __assign(__assign({}, Default.args), { fileStatus: {
        'example-file.txt': 'File size cannot exceed 5 MB'
    }, uploadError: 'Sorry, there was a problem uploading your file(s).' });
// Success state story
export var SuccessState = Template.bind({});
SuccessState.args = __assign(__assign({}, Default.args), { fileStatus: {
        'example-file.txt': 'Uploaded'
    }, uploadSuccess: true });
// Multiple files story
export var MultipleFiles = Template.bind({});
MultipleFiles.args = __assign(__assign({}, Default.args), { allowMultiple: true });
// Custom color and shape story
export var CustomAppearance = Template.bind({});
CustomAppearance.args = __assign(__assign({}, Default.args), { color: 'primary', shape: 'curved' });
//# sourceMappingURL=InputFile.stories.jsx.map