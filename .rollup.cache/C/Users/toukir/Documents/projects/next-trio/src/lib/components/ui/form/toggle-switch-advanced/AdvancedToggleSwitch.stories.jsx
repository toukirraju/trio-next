import { __assign } from "tslib";
import React, { useState } from 'react';
import AdvancedToggleSwitch from './AdvancedToggleSwitch';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/AdvancedToggleSwitch',
    component: AdvancedToggleSwitch,
    tags: ['autodocs'],
    argTypes: {
        startIcon: { control: 'text' },
        endIcon: { control: 'text' },
        startColor: {
            control: {
                type: 'select',
                options: ['default', 'primary', 'info', 'success', 'warning', 'danger']
            }
        },
        endColor: {
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
// Template for stories
var Template = function (args) {
    var _a = useState(args.checked || false), isChecked = _a[0], setIsChecked = _a[1];
    return (<AdvancedToggleSwitch {...args} checked={isChecked} onChange={function () { return setIsChecked(!isChecked); }}/>);
};
// Default story
export var Default = Template.bind({});
Default.args = {
    id: 'default-toggle',
    startIcon: 'FaHome',
    endIcon: 'lucide:lock',
    startColor: 'primary',
    endColor: 'danger'
};
// Checked story
export var Checked = Template.bind({});
Checked.args = __assign(__assign({}, Default.args), { id: 'checked-toggle', checked: true });
// Disabled story
export var Disabled = Template.bind({});
Disabled.args = __assign(__assign({}, Default.args), { id: 'disabled-toggle', disabled: true });
// Different Colors story
export var DifferentColors = function () { return (<div className="space-y-4">
    <AdvancedToggleSwitch id="default-color" startIcon="FaHome" endIcon="FaHome" startColor="default" endColor="default"/>
    <AdvancedToggleSwitch id="primary-color" startIcon="FaHome" endIcon="FaHome" startColor="primary" endColor="primary"/>
    <AdvancedToggleSwitch id="info-color" startIcon="FaHome" endIcon="FaHome" startColor="info" endColor="info"/>
    <AdvancedToggleSwitch id="success-color" startIcon="FaHome" endIcon="FaHome" startColor="success" endColor="success"/>
    <AdvancedToggleSwitch id="warning-color" startIcon="FaHome" endIcon="FaHome" startColor="warning" endColor="warning"/>
    <AdvancedToggleSwitch id="danger-color" startIcon="FaHome" endIcon="FaHome" startColor="danger" endColor="danger"/>
  </div>); };
// Custom Styling story
export var CustomStyling = Template.bind({});
CustomStyling.args = __assign(__assign({}, Default.args), { id: 'custom-toggle', startColor: 'primary', endColor: 'danger', className: 'max-w-xs bg-gray-100 p-4 rounded-lg' });
//# sourceMappingURL=AdvancedToggleSwitch.stories.jsx.map