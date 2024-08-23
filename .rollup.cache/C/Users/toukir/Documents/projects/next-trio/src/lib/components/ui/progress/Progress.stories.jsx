import React from 'react';
import Progress from './Progress'; // Update the path if needed
// Meta configuration for Storybook
var meta = {
    title: 'UI/Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select', options: ['primary', 'info', 'success', 'warning', 'danger'] }
        },
        contrast: {
            control: { type: 'select', options: ['default', 'contrast'] }
        },
        shape: {
            control: { type: 'select', options: ['straight', 'rounded', 'curved', 'full'] }
        },
        size: {
            control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] }
        },
        value: { control: 'number' },
        max: { control: 'number' },
        classNames: { control: 'text' }
    }
};
export default meta;
// Template for stories
var Template = function (args) { return <Progress {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    color: 'primary',
    contrast: 'default',
    shape: 'full',
    size: 'sm',
    value: 50,
    max: 100
};
// Different Colors
export var DifferentColors = function (args) { return (<div className="space-y-4">
    <Progress {...args} color="primary"/>
    <Progress {...args} color="info"/>
    <Progress {...args} color="success"/>
    <Progress {...args} color="warning"/>
    <Progress {...args} color="danger"/>
  </div>); };
DifferentColors.args = {
    contrast: 'default',
    shape: 'full',
    size: 'sm',
    value: 50,
    max: 100
};
// Different Shapes
export var DifferentShapes = function (args) { return (<div className="space-y-4">
    <Progress {...args} shape="straight"/>
    <Progress {...args} shape="rounded"/>
    <Progress {...args} shape="curved"/>
    <Progress {...args} shape="full"/>
  </div>); };
DifferentShapes.args = {
    color: 'primary',
    contrast: 'default',
    size: 'sm',
    value: 50,
    max: 100
};
// Different Sizes
export var DifferentSizes = function (args) { return (<div className="space-y-4">
    <Progress {...args} size="xs"/>
    <Progress {...args} size="sm"/>
    <Progress {...args} size="md"/>
    <Progress {...args} size="lg"/>
    <Progress {...args} size="xl"/>
  </div>); };
DifferentSizes.args = {
    color: 'primary',
    contrast: 'default',
    shape: 'full',
    value: 50,
    max: 100
};
// Custom Styling
export var CustomStyling = Template.bind({});
CustomStyling.args = {
    color: 'primary',
    contrast: 'default',
    shape: 'full',
    size: 'sm',
    value: 75,
    max: 100,
    classNames: 'my-custom-class'
};
//# sourceMappingURL=Progress.stories.jsx.map