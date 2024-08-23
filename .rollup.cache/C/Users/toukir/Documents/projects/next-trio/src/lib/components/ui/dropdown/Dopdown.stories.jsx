import { __assign } from "tslib";
import React from 'react';
import Dropdown from './Dropdown';
export default {
    title: 'Ui/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            options: ['start', 'end'],
            control: { type: 'radio' }
        },
        shape: {
            options: ['straight', 'rounded', 'smooth', 'curved'],
            control: { type: 'select' }
        },
        indicator: {
            control: { type: 'boolean' }
        }
    }
};
var Template = function (args) { return <Dropdown {...args}/>; };
export var Default = Template.bind({});
Default.args = {
    title: 'Notifications',
    toggleIcon: 'bell',
    children: (<>
      <div className="p-4">Notification 1</div>
      <div className="p-4">Notification 2</div>
      <div className="p-4">Notification 3</div>
    </>),
    showAll: '#',
    orientation: 'start',
    shape: 'smooth',
    indicator: true
};
export var WithImage = Template.bind({});
WithImage.args = __assign(__assign({}, Default.args), { toggleIcon: undefined, toggleImage: <img src="avatar.jpg" alt="User Avatar" className="h-8 w-8 rounded-full"/> });
export var NoIndicator = Template.bind({});
NoIndicator.args = __assign(__assign({}, Default.args), { indicator: false });
export var EndOrientation = Template.bind({});
EndOrientation.args = __assign(__assign({}, Default.args), { orientation: 'end' });
export var CurvedShape = Template.bind({});
CurvedShape.args = __assign(__assign({}, Default.args), { shape: 'curved' });
//# sourceMappingURL=Dopdown.stories.jsx.map