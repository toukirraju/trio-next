import React from 'react';
import Loader from './Loader';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        thickness: { control: 'number' },
        size: { control: 'number' },
        classNames: { control: 'text' }
    }
};
export default meta;
// Template for stories
var Template = function (args) { return <Loader {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    thickness: 5,
    size: 50,
    classNames: 'text-blue-500' // Example class for color or styling
};
// Different Thicknesses
export var DifferentThicknesses = function () { return (<div className="space-y-4">
    <Loader thickness={2} size={50} classNames="text-blue-500"/>
    <Loader thickness={4} size={50} classNames="text-green-500"/>
    <Loader thickness={6} size={50} classNames="text-red-500"/>
    <Loader thickness={8} size={50} classNames="text-yellow-500"/>
  </div>); };
// Different Sizes
export var DifferentSizes = function () { return (<div className="space-y-4">
    <Loader thickness={5} size={30} classNames="text-blue-500"/>
    <Loader thickness={5} size={50} classNames="text-green-500"/>
    <Loader thickness={5} size={70} classNames="text-red-500"/>
    <Loader thickness={5} size={100} classNames="text-yellow-500"/>
  </div>); };
// Custom Styling
export var CustomStyling = Template.bind({});
CustomStyling.args = {
    thickness: 5,
    size: 50,
    classNames: 'text-blue-500 animate-spin' // Example of custom styling and animation
};
//# sourceMappingURL=Loader.stories.jsx.map