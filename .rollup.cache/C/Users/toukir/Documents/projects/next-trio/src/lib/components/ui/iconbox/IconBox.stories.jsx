import React from 'react';
import IconBox from './IconBox';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/IconBox',
    component: IconBox,
    tags: ['autodocs'],
    argTypes: {
        icon: { control: 'text' },
        iconClasses: { control: 'text' },
        shape: {
            control: {
                type: 'select',
                options: ['full', 'straight']
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg', 'xl']
            }
        },
        mask: {
            control: {
                type: 'select',
                options: ['hex', 'hexed', 'blob', 'deca', 'diamond']
            }
        },
        color: {
            control: {
                type: 'select',
                options: ['default', 'primary', 'info', 'success', 'warning', 'danger']
            }
        },
        variant: {
            control: {
                type: 'select',
                options: ['outlined', 'filled']
            }
        },
        shadow: { control: 'text' }
    }
};
export default meta;
// Template for stories
var Template = function (args) { return <IconBox {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    icon: 'lucide:star',
    shape: 'full',
    size: 'md',
    color: 'default',
    variant: 'filled'
};
// With Custom Icon and Color
export var CustomIconAndColor = Template.bind({});
CustomIconAndColor.args = {
    icon: 'lucide:heart',
    iconClasses: 'text-red-500',
    color: 'danger',
    shape: 'full',
    size: 'md',
    variant: 'filled'
};
// Different Shapes
export var Shapes = function () { return (<div className="flex space-x-4">
    <IconBox icon="lucide:star" shape="full" size="md"/>
    <IconBox icon="lucide:star" shape="straight" size="md" mask="hex"/>
    <IconBox icon="lucide:star" shape="straight" size="md" mask="blob"/>
    <IconBox icon="lucide:star" shape="straight" size="md" mask="diamond"/>
  </div>); };
// Different Sizes
export var Sizes = function () { return (<div className="flex space-x-4">
    <IconBox icon="lucide:star" size="sm"/>
    <IconBox icon="lucide:star" size="md"/>
    <IconBox icon="lucide:star" size="lg"/>
    <IconBox icon="lucide:star" size="xl"/>
  </div>); };
// Mask Variations
export var Masks = function () { return (<div className="flex space-x-4">
    <IconBox icon="lucide:star" shape="straight" mask="hex"/>
    <IconBox icon="lucide:star" shape="straight" mask="hexed"/>
    <IconBox icon="lucide:star" shape="straight" mask="blob"/>
    <IconBox icon="lucide:star" shape="straight" mask="deca"/>
    <IconBox icon="lucide:star" shape="straight" mask="diamond"/>
  </div>); };
// Custom Styling
export var CustomStyling = Template.bind({});
CustomStyling.args = {
    icon: 'lucide:star',
    color: 'primary',
    shape: 'full',
    size: 'md',
    variant: 'filled',
    className: 'p-4 bg-gray-100 rounded-lg shadow-lg'
};
//# sourceMappingURL=IconBox.stories.jsx.map