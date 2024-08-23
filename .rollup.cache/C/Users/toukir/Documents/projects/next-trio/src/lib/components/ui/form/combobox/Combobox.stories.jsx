import { __assign } from "tslib";
import React, { useState } from 'react';
import ComboBox from './ComboBox';
export default {
    title: 'Ui/ComboBox',
    component: ComboBox,
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
            options: ['rounded', 'smooth', 'curved', 'full'],
            control: { type: 'select' }
        },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        label: { control: 'text' },
        error: { control: 'text' }
    }
};
var Template = function (args) {
    var _a = useState(args.items[0]), selected = _a[0], setSelected = _a[1];
    return <ComboBox {...args} selected={selected} setSelected={setSelected}/>;
};
var defaultItems = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3' }
];
export var Default = Template.bind({});
Default.args = {
    label: 'Select an option',
    items: defaultItems,
    size: 'md',
    color: 'default',
    shape: 'smooth'
};
export var WithIcons = Template.bind({});
WithIcons.args = __assign(__assign({}, Default.args), { items: [
        { id: '1', name: 'Option 1', icon: 'MdHome' },
        { id: '2', name: 'Option 2', icon: 'MdSettings' },
        { id: '3', name: 'Option 3', icon: 'MdPerson' }
    ] });
export var WithImages = Template.bind({});
WithImages.args = __assign(__assign({}, Default.args), { items: [
        { id: '1', name: 'Option 1', image: 'https://example.com/image1.jpg' },
        { id: '2', name: 'Option 2', image: 'https://example.com/image2.jpg' },
        { id: '3', name: 'Option 3', image: 'https://example.com/image3.jpg' }
    ] });
export var Loading = Template.bind({});
Loading.args = __assign(__assign({}, Default.args), { loading: true });
export var Disabled = Template.bind({});
Disabled.args = __assign(__assign({}, Default.args), { disabled: true });
export var WithError = Template.bind({});
WithError.args = __assign(__assign({}, Default.args), { error: 'This field is required' });
export var LargeSize = Template.bind({});
LargeSize.args = __assign(__assign({}, Default.args), { size: 'lg' });
export var ContrastColor = Template.bind({});
ContrastColor.args = __assign(__assign({}, Default.args), { color: 'contrast' });
export var CurvedShape = Template.bind({});
CurvedShape.args = __assign(__assign({}, Default.args), { shape: 'curved' });
//# sourceMappingURL=Combobox.stories.jsx.map