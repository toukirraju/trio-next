import { __assign } from "tslib";
import React from 'react';
import DropdownAction from './DropdownAction';
import ActionItem from './ActionItem';
export default {
    title: 'Ui/Dropdown Action',
    component: DropdownAction,
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            options: ['start', 'end'],
            control: { type: 'radio' }
        },
        toggleIcon: { control: 'text' },
        showAll: { control: 'text' },
        title: { control: 'text' }
    }
};
var Template = function (args) { return <DropdownAction {...args}/>; };
export var Default = Template.bind({});
Default.args = {
    title: 'Notifications',
    toggleIcon: 'bell',
    orientation: 'start',
    showAll: '#',
    children: (<>
      <ActionItem icon="message" text="New Message" subtext="You have a new message"/>
      <ActionItem icon="alert" text="System Alert" subtext="Server is running low on memory"/>
      <ActionItem icon="update" text="Update Available" subtext="A new version is available"/>
    </>)
};
export var WithImage = Template.bind({});
WithImage.args = __assign(__assign({}, Default.args), { toggleIcon: undefined, toggleImage: <img src="avatar.jpg" alt="User Avatar" className="h-8 w-8 rounded-full"/> });
export var EndOrientation = Template.bind({});
EndOrientation.args = __assign(__assign({}, Default.args), { orientation: 'end' });
export var NoShowAll = Template.bind({});
NoShowAll.args = __assign(__assign({}, Default.args), { showAll: undefined });
export var CustomClassName = Template.bind({});
CustomClassName.args = __assign(__assign({}, Default.args), { className: 'custom-class' });
//# sourceMappingURL=DropdownAction.stories.jsx.map