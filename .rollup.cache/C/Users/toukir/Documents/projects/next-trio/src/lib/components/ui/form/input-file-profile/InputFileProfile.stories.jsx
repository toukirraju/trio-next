import { __assign } from "tslib";
import React from 'react';
import InputFileProfile from './InputFileProfile';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/InputFileProfile',
    component: InputFileProfile,
    tags: ['autodocs'],
    argTypes: {
        previewSize: {
            control: { type: 'radio', options: ['lg', 'xl'] }
        },
        color: {
            control: {
                type: 'radio',
                options: ['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger']
            }
        },
        shape: {
            control: { type: 'radio', options: ['smooth', 'rounded', 'curved', 'full'] }
        },
        previewIcon: { control: 'text' },
        acceptedFileTypes: { control: 'array' },
        onRemoveFile: { action: 'onRemoveFile' }
    }
};
export default meta;
var Template = function (args) { return <InputFileProfile {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    id: 'file-input-profile-default',
    label: 'Upload Profile Picture',
    previewSize: 'lg',
    color: 'default',
    shape: 'full'
};
// Custom Appearance story
export var CustomAppearance = Template.bind({});
CustomAppearance.args = __assign(__assign({}, Default.args), { color: 'primary', shape: 'rounded' });
// With Preview story
export var WithPreview = Template.bind({});
WithPreview.args = __assign(__assign({}, Default.args), { preview: 'https://via.placeholder.com/150', value: 'example-profile-picture.jpg' });
// Without Preview story
export var WithoutPreview = Template.bind({});
WithoutPreview.args = __assign(__assign({}, Default.args), { value: '' });
// Custom Preview Icon story
export var CustomPreviewIcon = Template.bind({});
CustomPreviewIcon.args = __assign(__assign({}, Default.args), { previewIcon: 'fluent:person-24-filled' });
//# sourceMappingURL=InputFileProfile.stories.jsx.map