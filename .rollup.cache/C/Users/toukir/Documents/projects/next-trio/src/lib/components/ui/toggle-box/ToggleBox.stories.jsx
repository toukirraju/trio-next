import { __assign } from "tslib";
import React from 'react';
import ToggleBox from './ToggleBox';
var meta = {
    title: 'UI/ToggleBox',
    component: ToggleBox,
    tags: ['autodocs'],
    argTypes: {
        shape: {
            control: 'select',
            options: ['straight', 'rounded', 'smooth', 'curved'],
        },
        color: {
            control: 'select',
            options: ['default', 'contrast', 'muted', 'mutedContrast', 'primary', 'info', 'success', 'warning', 'danger'],
        },
        isToggle: { control: 'boolean' },
        open: { control: 'boolean' },
        growOnExpand: { control: 'boolean' },
        spaced: { control: 'boolean' },
    },
};
export default meta;
var Template = {
    render: function (args) { return (<div className="p-4 bg-gray-100 dark:bg-gray-800">
      <ToggleBox {...args}>
        <p>This is the content of the ToggleBox. It can be any React node.</p>
      </ToggleBox>
    </div>); },
};
export var Default = __assign(__assign({}, Template), { args: {
        title: 'Default ToggleBox',
        shape: 'smooth',
        color: 'contrast',
        isToggle: true,
        open: false,
    } });
export var OpenByDefault = __assign(__assign({}, Template), { args: __assign(__assign({}, Default.args), { title: 'Open by Default', open: true }) });
export var CustomHeader = __assign(__assign({}, Template), { args: __assign(__assign({}, Default.args), { header: <h3 className="text-xl font-bold">Custom Header</h3> }) });
export var GrowOnExpand = __assign(__assign({}, Template), { args: __assign(__assign({}, Default.args), { title: 'Grow on Expand', growOnExpand: true }) });
export var Spaced = __assign(__assign({}, Template), { args: __assign(__assign({}, Default.args), { title: 'Spaced ToggleBox', spaced: true }) });
export var PrimaryColor = __assign(__assign({}, Template), { args: __assign(__assign({}, Default.args), { title: 'Primary Color', color: 'primary' }) });
export var CurvedShape = __assign(__assign({}, Template), { args: __assign(__assign({}, Default.args), { title: 'Curved Shape', shape: 'curved' }) });
export var NonToggleable = __assign(__assign({}, Template), { args: __assign(__assign({}, Default.args), { title: 'Non-Togglable Box', isToggle: false }) });
//# sourceMappingURL=ToggleBox.stories.jsx.map