import { __assign } from "tslib";
import React from 'react';
import Radio from './Radio';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/Radio',
    component: Radio,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        color: {
            control: {
                type: 'radio',
                options: ['default', 'primary', 'info', 'success', 'warning', 'danger']
            }
        },
        disabled: { control: 'boolean' },
        checked: { control: 'boolean' },
        onChange: { action: 'onChange' }
    }
};
export default meta;
var Template = function (args) { return <Radio {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    id: 'default-radio',
    label: 'Default Radio',
    color: 'default'
};
// Primary Color story
export var PrimaryColor = Template.bind({});
PrimaryColor.args = __assign(__assign({}, Default.args), { id: 'primary-radio', label: 'Primary Radio', color: 'primary' });
// Checked story
export var Checked = Template.bind({});
Checked.args = __assign(__assign({}, Default.args), { id: 'checked-radio', label: 'Checked Radio', checked: true });
// Disabled story
export var Disabled = Template.bind({});
Disabled.args = __assign(__assign({}, Default.args), { id: 'disabled-radio', label: 'Disabled Radio', disabled: true });
// Different Colors story
export var DifferentColors = function () { return (<div className="space-y-2">
    <Radio id="default-radio" label="Default Radio" color="default"/>
    <Radio id="primary-radio" label="Primary Radio" color="primary"/>
    <Radio id="info-radio" label="Info Radio" color="info"/>
    <Radio id="success-radio" label="Success Radio" color="success"/>
    <Radio id="warning-radio" label="Warning Radio" color="warning"/>
    <Radio id="danger-radio" label="Danger Radio" color="danger"/>
  </div>); };
//# sourceMappingURL=Radio.stories.jsx.map