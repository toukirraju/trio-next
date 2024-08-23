import React from 'react';
import ProgressCircle from './ProgressCircle'; // Update the path if needed
// Meta configuration for Storybook
var meta = {
    title: 'UI/ProgressCircle',
    component: ProgressCircle,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: ['none', 'primary', 'info', 'success', 'warning', 'danger']
            }
        },
        contrast: {
            control: { type: 'radio', options: ['default', 'contrast'] }
        },
        size: { control: 'number' },
        value: { control: 'number' },
        max: { control: 'number' },
        thickness: { control: 'number' },
        classNames: { control: 'text' }
    }
};
export default meta;
// Template for stories
var Template = function (args) { return <ProgressCircle {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    color: 'primary',
    contrast: 'default',
    size: 60,
    value: 50,
    max: 100,
    thickness: 4,
    classNames: ''
};
// Custom Color
export var CustomColor = Template.bind({});
CustomColor.args = {
    color: 'success',
    contrast: 'default',
    size: 60,
    value: 75,
    max: 100,
    thickness: 4,
    classNames: ''
};
// Custom Size and Thickness
export var CustomSizeAndThickness = Template.bind({});
CustomSizeAndThickness.args = {
    color: 'warning',
    contrast: 'default',
    size: 100,
    value: 40,
    max: 100,
    thickness: 6,
    classNames: ''
};
// With Contrast
export var WithContrast = Template.bind({});
WithContrast.args = {
    color: 'info',
    contrast: 'contrast',
    size: 80,
    value: 90,
    max: 100,
    thickness: 5,
    classNames: ''
};
// Custom ClassNames
export var CustomClassNames = Template.bind({});
CustomClassNames.args = {
    color: 'danger',
    contrast: 'default',
    size: 60,
    value: 30,
    max: 100,
    thickness: 4,
    classNames: 'custom-class'
};
//# sourceMappingURL=ProgressCircle.stories.jsx.map