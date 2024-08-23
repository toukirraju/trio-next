import React from 'react';
import InputOtp from './InputOtp';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/InputOtp',
    component: InputOtp,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text' },
        valueLength: { control: 'number' },
        color: {
            control: { type: 'radio', options: ['default', 'contrast', 'muted', 'mutedContrast'] }
        },
        shape: {
            control: { type: 'radio', options: ['smooth', 'rounded', 'curved', 'full'] }
        },
        onChange: { action: 'onChange' }
    }
};
export default meta;
var Template = function (args) { return <InputOtp {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    value: '',
    valueLength: 4
};
// With Value story
export var WithValue = Template.bind({});
WithValue.args = {
    value: '1234',
    valueLength: 4
};
// Custom Color story
export var CustomColor = Template.bind({});
CustomColor.args = {
    value: '',
    valueLength: 4,
    color: 'contrast'
};
// Custom Shape story
export var CustomShape = Template.bind({});
CustomShape.args = {
    value: '',
    valueLength: 4,
    shape: 'curved'
};
// Longer Length story
export var LongerLength = Template.bind({});
LongerLength.args = {
    value: '',
    valueLength: 6
};
//# sourceMappingURL=InputOtp.stories.jsx.map