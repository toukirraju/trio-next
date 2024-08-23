import { __assign } from "tslib";
import React from 'react';
import Input from './Input';
export default {
    title: 'Ui/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' }
        },
        color: {
            options: ['default', 'contrast', 'muted', 'mutedContrast'],
            control: { type: 'select' }
        },
        shape: {
            options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
            control: { type: 'select' }
        },
        icon: { control: 'text' },
        label: { control: 'text' },
        addon: { control: 'text' },
        error: { control: 'text' },
        loading: { control: 'boolean' },
        placeholder: { control: 'text' }
    }
};
var Template = function (args) { return <Input {...args}/>; };
export var Default = Template.bind({});
Default.args = {
    placeholder: 'Enter text...',
    size: 'md',
    color: 'default',
    shape: 'smooth'
};
export var WithLabel = Template.bind({});
WithLabel.args = __assign(__assign({}, Default.args), { label: 'Username' });
export var WithIcon = Template.bind({});
WithIcon.args = __assign(__assign({}, Default.args), { icon: 'user', placeholder: 'Enter username' });
export var WithAddon = Template.bind({});
WithAddon.args = __assign(__assign({}, Default.args), { addon: '@', placeholder: 'Enter username' });
export var WithError = Template.bind({});
WithError.args = __assign(__assign({}, Default.args), { error: 'This field is required' });
export var Loading = Template.bind({});
Loading.args = __assign(__assign({}, Default.args), { loading: true });
export var LargeSize = Template.bind({});
LargeSize.args = __assign(__assign({}, Default.args), { size: 'lg' });
export var ContrastColor = Template.bind({});
ContrastColor.args = __assign(__assign({}, Default.args), { color: 'contrast' });
export var CurvedShape = Template.bind({});
CurvedShape.args = __assign(__assign({}, Default.args), { shape: 'curved' });
export var FullyFeatured = Template.bind({});
FullyFeatured.args = {
    label: 'Email',
    icon: 'email',
    addon: '@',
    placeholder: 'Enter your email',
    size: 'md',
    color: 'default',
    shape: 'smooth'
};
//# sourceMappingURL=Input.stories.jsx.map