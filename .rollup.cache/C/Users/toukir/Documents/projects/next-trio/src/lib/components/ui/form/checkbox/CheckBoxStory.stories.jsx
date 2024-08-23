import { __assign } from "tslib";
import React from 'react';
import Checkbox from './Checkbox';
export default {
    title: 'Ui/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        color: {
            options: ['default', 'primary', 'info', 'success', 'warning', 'danger'],
            control: { type: 'select' }
        },
        shape: {
            options: ['rounded', 'smooth', 'curved', 'full'],
            control: { type: 'select' }
        },
        label: { control: 'text' },
        icon: { control: 'text' },
        checked: { control: 'boolean' }
    }
};
var Template = function (args) { return <Checkbox {...args}/>; };
export var Default = Template.bind({});
Default.args = {
    id: 'default-checkbox',
    label: 'Default Checkbox',
    color: 'default',
    shape: 'smooth'
};
export var PrimaryColor = Template.bind({});
PrimaryColor.args = __assign(__assign({}, Default.args), { id: 'primary-checkbox', label: 'Primary Checkbox', color: 'primary' });
export var WithCustomIcon = Template.bind({});
WithCustomIcon.args = __assign(__assign({}, Default.args), { id: 'custom-icon-checkbox', label: 'Custom Icon Checkbox', icon: 'GoStar' });
export var RoundedShape = Template.bind({});
RoundedShape.args = __assign(__assign({}, Default.args), { id: 'rounded-checkbox', label: 'Rounded Checkbox', shape: 'rounded' });
export var CurvedShape = Template.bind({});
CurvedShape.args = __assign(__assign({}, Default.args), { id: 'curved-checkbox', label: 'Curved Checkbox', shape: 'curved' });
export var FullShape = Template.bind({});
FullShape.args = __assign(__assign({}, Default.args), { id: 'full-checkbox', label: 'Full Shape Checkbox', shape: 'full' });
export var NoLabel = Template.bind({});
NoLabel.args = {
    id: 'no-label-checkbox',
    color: 'default',
    shape: 'smooth'
};
//# sourceMappingURL=CheckBoxStory.stories.jsx.map