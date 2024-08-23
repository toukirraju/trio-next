import React from 'react';
import Tag from './Tag';
// Meta configuration for Storybook
var meta = {
    title: 'UI/Tag',
    component: Tag,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'radio',
            options: ['solid', 'outlined', 'pastel']
        },
        color: {
            control: 'radio',
            options: ['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger']
        },
        shape: {
            control: 'radio',
            options: ['straight', 'rounded', 'smooth', 'curved', 'full']
        },
        shadow: {
            control: 'radio',
            options: [
                'none',
                'default',
                'contrast',
                'muted',
                'primary',
                'info',
                'success',
                'warning',
                'danger'
            ]
        },
        className: {
            control: 'text'
        }
    }
};
export default meta;
// Template for stories
var Template = function (args) { return <Tag {...args}>Sample Tag</Tag>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    variant: 'solid',
    color: 'default',
    shape: 'smooth',
    shadow: 'none'
};
// Custom Tag
export var CustomTag = Template.bind({});
CustomTag.args = {
    variant: 'outlined',
    color: 'primary',
    shape: 'curved',
    shadow: 'primary'
};
//# sourceMappingURL=Tag.stories.jsx.map