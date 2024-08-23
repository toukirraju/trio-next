import { __assign } from "tslib";
import React from 'react';
import { Tooltip } from './Tooltip';
var meta = {
    title: 'UI/Tooltip',
    component: Tooltip,
    argTypes: {
        placement: {
            control: 'select',
            options: ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'],
        },
        trigger: {
            control: 'radio',
            options: ['hover', 'click', 'focus'],
        },
        indicatorArrow: { control: 'boolean' },
        arrowColor: { control: 'color' },
    },
};
export default meta;
var Template = {
    render: function (args) { return (<div className="h-64 flex items-center justify-center">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover me</button>
      </Tooltip>
    </div>); },
};
export var Default = __assign(__assign({}, Template), { args: {
        content: <div className="p-2">This is a tooltip</div>,
        placement: 'bottom',
        trigger: 'hover',
        indicatorArrow: true,
    } });
export var NoArrow = __assign(__assign({}, Template), { args: {
        content: <div className="p-2">Tooltip without arrow</div>,
        placement: 'top',
        indicatorArrow: false,
    } });
export var CustomContent = __assign(__assign({}, Template), { args: {
        content: (<div className="p-2">
        <h3 className="font-bold">Custom Content</h3>
        <p>You can put any React node here.</p>
      </div>),
        placement: 'right',
    } });
export var ClickTrigger = __assign(__assign({}, Template), { args: {
        content: <div className="p-2">Click-triggered tooltip</div>,
        trigger: 'click',
    } });
export var FocusTrigger = __assign(__assign({}, Template), { args: {
        content: <div className="p-2">Focus-triggered tooltip</div>,
        trigger: 'focus',
    } });
export var CustomArrowColor = __assign(__assign({}, Template), { args: {
        content: <div className="p-2">Custom arrow color</div>,
        arrowColor: '#ff0000',
    } });
export var CustomClassName = __assign(__assign({}, Template), { args: {
        content: <div className="p-2">Custom class applied</div>,
        className: 'bg-yellow-200 text-black',
    } });
//# sourceMappingURL=Tooltip.stories.jsx.map