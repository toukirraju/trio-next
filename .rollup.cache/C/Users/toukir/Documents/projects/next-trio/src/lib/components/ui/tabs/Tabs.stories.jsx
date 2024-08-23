import React from 'react';
import Tabs from './Tabs';
// Meta configuration for Storybook
var meta = {
    title: 'UI/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
        data: {
            control: 'object',
            description: 'Array of tab data including name and optional count'
        },
        selectedItem: {
            control: 'text',
            description: 'Currently selected item'
        },
        setSelectedItem: {
            action: 'setSelectedItem',
            description: 'Function to update the selected item'
        }
    }
};
export default meta;
// Template for stories
var Template = function (args) {
    var _a = React.useState(args.selectedItem), selectedItem = _a[0], setSelectedItem = _a[1];
    return <Tabs {...args} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>;
};
// Default story
export var Default = Template.bind({});
Default.args = {
    data: [{ name: 'Tab 1', count: 10 }, { name: 'Tab 2' }, { name: 'Tab 3', count: 5 }],
    selectedItem: 'Tab 1'
};
// Custom Tabs
export var CustomTabs = Template.bind({});
CustomTabs.args = {
    data: [
        { name: 'Custom Tab 1', count: 20 },
        { name: 'Custom Tab 2' },
        { name: 'Custom Tab 3', count: 15 }
    ],
    selectedItem: 'Custom Tab 2'
};
//# sourceMappingURL=Tabs.stories.jsx.map