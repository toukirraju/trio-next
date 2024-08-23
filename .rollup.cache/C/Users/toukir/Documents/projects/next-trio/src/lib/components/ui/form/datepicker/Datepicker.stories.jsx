import { __assign } from "tslib";
import React from 'react';
import DatePicker from './DatePicker';
export default {
    title: 'Ui/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: {
        shape: {
            options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
            control: { type: 'select' }
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' }
        },
        color: {
            options: ['default', 'contrast', 'muted', 'mutedContrast'],
            control: { type: 'select' }
        },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        icon: { control: 'text' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        valueFormat: { control: 'text' }
    }
};
var Template = function (args) { return <DatePicker {...args}/>; };
export var Default = Template.bind({});
Default.args = {
    label: 'Select a date',
    placeholder: 'YYYY-MM-DD',
    icon: 'calendar',
    shape: 'smooth',
    size: 'md',
    color: 'default'
};
export var WithInitialValue = Template.bind({});
WithInitialValue.args = __assign(__assign({}, Default.args), { value: new Date() });
export var CustomFormat = Template.bind({});
CustomFormat.args = __assign(__assign({}, Default.args), { valueFormat: 'MMM dd, yyyy', placeholder: 'MMM DD, YYYY' });
export var WithMinDate = Template.bind({});
WithMinDate.args = __assign(__assign({}, Default.args), { minDate: new Date() });
export var Disabled = Template.bind({});
Disabled.args = __assign(__assign({}, Default.args), { disabled: true });
export var Loading = Template.bind({});
Loading.args = __assign(__assign({}, Default.args), { loading: true });
export var LargeSize = Template.bind({});
LargeSize.args = __assign(__assign({}, Default.args), { size: 'lg' });
export var ContrastColor = Template.bind({});
ContrastColor.args = __assign(__assign({}, Default.args), { color: 'contrast' });
export var CurvedShape = Template.bind({});
CurvedShape.args = __assign(__assign({}, Default.args), { shape: 'curved' });
//# sourceMappingURL=Datepicker.stories.jsx.map