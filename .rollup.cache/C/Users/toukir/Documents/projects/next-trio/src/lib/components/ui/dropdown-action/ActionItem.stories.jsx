import { __assign } from "tslib";
import React from 'react';
import ActionItem from './ActionItem';
export default {
    title: 'Ui/ActionItem',
    component: ActionItem,
    tags: ['autodocs'],
    argTypes: {
        shape: {
            options: ['straight', 'rounded', 'smooth', 'curved'],
            control: { type: 'select' }
        },
        href: { control: 'text' },
        icon: { control: 'text' },
        text: { control: 'text' },
        subtext: { control: 'text' }
    }
};
var Template = function (args) { return <ActionItem {...args}/>; };
export var Default = Template.bind({});
Default.args = {
    href: '#',
    icon: 'bell',
    text: 'Notification',
    subtext: 'You have a new message',
    shape: 'smooth'
};
export var WithImage = Template.bind({});
WithImage.args = __assign(__assign({}, Default.args), { icon: undefined, image: <img src="avatar.jpg" alt="User Avatar" className="h-8 w-8 rounded-full"/> });
export var RoundedShape = Template.bind({});
RoundedShape.args = __assign(__assign({}, Default.args), { shape: 'rounded' });
export var CurvedShape = Template.bind({});
CurvedShape.args = __assign(__assign({}, Default.args), { shape: 'curved' });
export var NoIcon = Template.bind({});
NoIcon.args = __assign(__assign({}, Default.args), { icon: undefined });
//# sourceMappingURL=ActionItem.stories.jsx.map