import { __assign } from "tslib";
import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/ToggleSwitch',
    component: ToggleSwitch,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        sublabel: { control: 'text' },
        color: {
            control: {
                type: 'select',
                options: ['default', 'primary', 'info', 'success', 'warning', 'danger']
            }
        },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' }
    }
};
export default meta;
var Template = function (args) {
    var _a = useState(args.checked || false), isChecked = _a[0], setIsChecked = _a[1];
    return <ToggleSwitch {...args} checked={isChecked} onChange={function () { return setIsChecked(!isChecked); }}/>;
};
// Default story
export var Default = Template.bind({});
Default.args = {
    id: 'default-toggle',
    label: 'Default Toggle',
    color: 'default'
};
// With Sublabel story
export var WithSublabel = Template.bind({});
WithSublabel.args = __assign(__assign({}, Default.args), { id: 'sublabel-toggle', label: 'Toggle with Sublabel', sublabel: 'This is a description of the toggle' });
// Checked story
export var Checked = Template.bind({});
Checked.args = __assign(__assign({}, Default.args), { id: 'checked-toggle', label: 'Checked Toggle', checked: true });
// Disabled story
export var Disabled = Template.bind({});
Disabled.args = __assign(__assign({}, Default.args), { id: 'disabled-toggle', label: 'Disabled Toggle', disabled: true });
// Different Colors story
export var DifferentColors = function () { return (<div className="space-y-4">
    <ToggleSwitch id="default-color" label="Default Color" color="default"/>
    <ToggleSwitch id="primary-color" label="Primary Color" color="primary"/>
    <ToggleSwitch id="info-color" label="Info Color" color="info"/>
    <ToggleSwitch id="success-color" label="Success Color" color="success"/>
    <ToggleSwitch id="warning-color" label="Warning Color" color="warning"/>
    <ToggleSwitch id="danger-color" label="Danger Color" color="danger"/>
  </div>); };
// Custom Styling story
export var CustomStyling = Template.bind({});
CustomStyling.args = __assign(__assign({}, Default.args), { id: 'custom-toggle', label: 'Custom Styled Toggle', color: 'primary', className: 'max-w-xs bg-gray-100 p-4 rounded-lg' });
//# sourceMappingURL=ToggleSwitch.stories.jsx.map